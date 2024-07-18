const COUNTRY_CODE = {
  kr: "korea",
  us: "america",
};

export default defineEventHandler(async (event) => {
  const countryCode = String(getRouterParam(event, "countryCode")) as
    | "kr"
    | "us";

  const supabaseClient = useSupabase();

  const { data, error: queryError } = await supabaseClient.rpc(
    "get_latest_stock_entries_by_market",
    { newmarket: COUNTRY_CODE[countryCode] }
  );

  if (queryError) {
    return queryError;
  }

  return data;
});
