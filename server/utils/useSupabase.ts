import { createClient } from "@supabase/supabase-js";

let supabaseClient: any;

const Reference_ID = "hgzzjhjgefunjjtajsgo";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnenpqaGpnZWZ1bmpqdGFqc2dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2MjQ2NDcsImV4cCI6MjAzNDIwMDY0N30.hkd9fEpbYcaFuflCqsZm76ykMX0QJBlh023FsC6O0JM";

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
  // stock_symbol 목록을 가져옵니다.
  const uniqueSymbols = Array.from(
    new Set(allData.map((item: any) => item.stock_symbol))
  );
  console.log("Unique stock symbols: ", uniqueSymbols.length);

  // 가장 최근의 모든 stock_symbol 레코드를 한 번에 조회합니다.
  const { data: existingData, error: selectError } = await supabaseClient
    .from("stock")
    .select("stock_symbol, turnover_volume, created_at")
    .in("stock_symbol", uniqueSymbols)
    .order("created_at", { ascending: false });

  if (selectError) {
    console.error("Error fetching existing data", selectError);
    return;
  }

  console.log("Fetched existing data: ", existingData.length);

  // 조회한 데이터를 메모리에 캐싱합니다.
  const latestDataMap = new Map();
  for (const record of existingData) {
    if (!latestDataMap.has(record.stock_symbol)) {
      latestDataMap.set(record.stock_symbol, record);
    }
  }

  console.log("Latest data map size: ", latestDataMap.size);

  // 새로운 데이터를 처리합니다.
  const dataToInsert = allData.filter((item: any) => {
    const latestRecord = latestDataMap.get(item.stock_symbol);
    const shouldInsert =
      !latestRecord || latestRecord.turnover_volume !== item.turnover_volume;
    if (!shouldInsert) {
      console.log(`Skipping stock_symbol: ${item.stock_symbol}`);
    }
    return shouldInsert;
  });

  console.log("Data to insert: ", dataToInsert.length);

  // 삽입할 데이터를 일괄 처리합니다.
  if (dataToInsert.length > 0) {
    const { data, error } = await supabaseClient
      .from("stock")
      .insert(dataToInsert);

    if (error) {
      console.error("Error inserting data", error);
    } else {
      console.log("Data inserted successfully", data);
    }
  } else {
    console.log("No new data to insert.");
  }
}
