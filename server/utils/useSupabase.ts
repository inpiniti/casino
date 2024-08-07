import { createClient } from "@supabase/supabase-js";

let supabaseClient: any;

const Reference_ID = "hgzzjhjgefunjjtajsgo";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnenpqaGpnZWZ1bmpqdGFqc2dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2MjQ2NDcsImV4cCI6MjAzNDIwMDY0N30.hkd9fEpbYcaFuflCqsZm76ykMX0QJBlh023FsC6O0JM";

// 이전 로직에서 선언된 캐시 맵을 사용
// 국가별 캐싱된 데이터를 저장할 구조로 변경
const latestDataMap = new Map<string, Map<string, any>>();

export const useSupabase = () => {
  if (!supabaseClient) {
    supabaseClient = createClient(
      `https://${Reference_ID}.supabase.co`,
      supabaseKey
    );
  }

  return supabaseClient;
};

export async function insertDataToSupabase(allData: any, countryCode: string) {
  useSupabase();

  console.log("Inserting data to Supabase, total: ", allData.length);
  const uniqueSymbols = Array.from(
    new Set(allData.map((item: any) => item.name))
  );
  console.log("Unique stock symbols: ", uniqueSymbols.length);

  // 국가별 캐시가 없는 경우 초기화합니다.
  if (!latestDataMap.has(countryCode)) {
    latestDataMap.set(countryCode, new Map<string, any>());
  }

  let countryDataMap: any = latestDataMap.get(countryCode);

  // 메모리 캐시를 사용하여 데이터 조회
  let existingData = [];

  // 캐시된 데이터가 없을 경우에만 데이터베이스에서 조회
  if (countryDataMap.size === 0) {
    const existingData = (await fetchStockDataInBatches(uniqueSymbols)) as any;
    console.log("Fetched existing data: ", existingData.length);

    // 조회한 데이터를 메모리에 캐싱
    // Cache fetched data
    existingData.forEach((record: any) => {
      countryDataMap.set(record.name, record);
    });
  } else {
    console.log("캐싱된 데이터가 존재함.");
  }

  console.log(
    "Latest data map size for country " + countryCode + ": ",
    countryDataMap.size
  );

  // 새로운 데이터 처리
  const dataToInsert = allData.filter((item: any) => {
    const latestRecord = countryDataMap.get(item.name);
    const shouldInsert = latestRecord?.volume != item?.volume;
    if (!shouldInsert) {
      /* console.log(
        `Skipping name: ${item.name}   ${latestRecord?.volume} == ${item?.volume}`
      ); */
    } else {
      /* console.log(
        `Inserting name: ${item.name}   ${latestRecord?.volume} != ${item?.volume}`
      ); */
    }
    return shouldInsert;
  });

  console.log("Data to insert: ", dataToInsert.length);

  // 삽입할 데이터를 일괄 처리
  if (dataToInsert.length > 0) {
    // Determine if data needs to be split into batches
    const batchSize = 5000;
    for (let i = 0; i < dataToInsert.length; i += batchSize) {
      const batch = dataToInsert.slice(i, i + batchSize);

      const uniqueBatch = batch.reduce(
        (acc: any, cur: any) => {
          // name과 volume을 조합하여 유니크한 키 생성
          const uniqueKey = `${cur.name}-${cur.volume}`;
          // 해당 키가 이미 처리되지 않았다면 추가
          if (!acc.seen[uniqueKey]) {
            acc.result.push(cur);
            acc.seen[uniqueKey] = true; // 키를 처리된 것으로 표시
          }
          return acc;
        },
        { result: [], seen: {} }
      ).result;

      const { data, error } = await supabaseClient
        .from("stock")
        .insert(uniqueBatch);

      if (error) {
        console.error("Error inserting data", error);
      } else {
        console.log("Data inserted successfully");

        if (uniqueBatch.length > 0) {
          // 삽입 성공 후 캐시 업데이트
          uniqueBatch.forEach((item: any) => {
            countryDataMap.set(item.name, item);
          });
        }
      }
    }
  } else {
    console.log("No new data to insert.");
  }
}

async function fetchStockDataInBatches(uniqueSymbols: any[]) {
  const BATCH_SIZE = 1000; // Supabase limit
  let finalResults: any = [];
  let error = null;

  console.log("uniqueSymbols", uniqueSymbols.length);

  for (let i = 0; i < uniqueSymbols.length; i += BATCH_SIZE) {
    const batchSymbols = uniqueSymbols.slice(i, i + BATCH_SIZE);

    const { data, error: queryError } = await supabaseClient.rpc(
      "get_latest_stock_entries",
      { batchsymbols: batchSymbols }
    );

    if (queryError) {
      error = queryError;
      break;
    }

    finalResults = [...finalResults, ...data];
  }

  console.log("finalResults", finalResults.length);

  return finalResults;
}
