import { createClient } from "@supabase/supabase-js";

let supabaseClient: any;

const Reference_ID = "hgzzjhjgefunjjtajsgo";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnenpqaGpnZWZ1bmpqdGFqc2dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2MjQ2NDcsImV4cCI6MjAzNDIwMDY0N30.hkd9fEpbYcaFuflCqsZm76ykMX0QJBlh023FsC6O0JM";

const latestDataMap = new Map(); // 이전 로직에서 선언된 캐시 맵을 사용

export const useSupabase = () => {
  if (!supabaseClient) {
    supabaseClient = createClient(
      `https://${Reference_ID}.supabase.co`,
      supabaseKey
    );
  }

  return supabaseClient;
};

export async function insertDataToSupabase(allData: any) {
  useSupabase();

  console.log("Inserting data to Supabase, total: ", allData.length);
  const uniqueSymbols = Array.from(
    new Set(allData.map((item: any) => item.name))
  );
  console.log("Unique stock symbols: ", uniqueSymbols.length);

  // 메모리 캐시를 사용하여 데이터 조회
  let existingData = [];

  // 캐시된 데이터가 없을 경우에만 데이터베이스에서 조회
  if (latestDataMap.size === 0) {
    const { data, error } = (await fetchStockDataInBatches(
      uniqueSymbols
    )) as any;

    if (error) {
      console.error("Error fetching existing data", error);
      return;
    }

    existingData = data;
    console.log("Fetched existing data: ", existingData.length);

    // 조회한 데이터를 메모리에 캐싱
    for (const record of existingData) {
      if (!latestDataMap.has(record.name)) {
        latestDataMap.set(record.name, record);
      }
    }
  } else {
    console.log("캐싱된 데이터가 존재함.");
  }

  console.log("Latest data map size: ", latestDataMap.size);

  // 새로운 데이터 처리
  const dataToInsert = allData.filter((item: any) => {
    const latestRecord = latestDataMap.get(item.name);
    const shouldInsert = latestRecord?.volume != item?.volume;
    if (!shouldInsert) {
      //console.log(`Skipping name: ${item.name}`);
    }
    return shouldInsert;
  });

  console.log("Data to insert: ", dataToInsert.length);

  // 삽입할 데이터를 일괄 처리
  if (dataToInsert.length > 0) {
    const { data, error } = await supabaseClient
      .from("stock")
      .insert(dataToInsert);

    if (error) {
      console.error("Error inserting data", error);
    } else {
      console.log("Data inserted successfully", data);

      if (data) {
        // 삽입 성공 후 캐시 업데이트
        data.forEach((item: any) => {
          latestDataMap.set(item.name, item);
        });
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
    console.log("batchSymbols", batchSymbols.length);
    const { data, error: queryError } = await supabaseClient
      .from("stock")
      .select("name, volume, created_at")
      .in("name", batchSymbols)
      .order("created_at", { ascending: false });

    if (queryError) {
      error = queryError;
      break;
    }

    finalResults = [...finalResults, ...data];
    console.log("finalResults", finalResults.length);
  }

  // 최신 "created_at" 레코드만 선택하는 로직
  const latestResults: any = {};
  finalResults.forEach((record: any) => {
    const existingRecord = latestResults[record.name];
    if (
      !existingRecord ||
      new Date(record.created_at) > new Date(existingRecord.created_at)
    ) {
      latestResults[record.name] = record;
    }
  });

  return { data: Object.values(latestResults), error };
}
