export default defineEventHandler(async (event) => {
  const supabaseClient = useSupabase();

  const pageSize = 1000; // 각 요청마다 가져올 행의 수
  const totalRows = 370000; // 전체 데이터의 예상 행 수
  const totalPages = Math.ceil(totalRows / pageSize); // 전체 페이지 수 계산
  const batchSize = 5; // 한번에 병렬로 실행할 요청의 수
  const delay = 1000; // 배치 간의 딜레이 (밀리초)

  const allData: any = [];

  // 배치 단위로 데이터를 가져오는 함수
  async function fetchBatch(startPage: number, endPage: number) {
    const promises = [];
    for (let pageNum = startPage; pageNum < endPage; pageNum++) {
      const offset = pageNum * pageSize;
      const promise = supabaseClient
        .from("stock")
        .select("*")
        .range(offset, offset + pageSize - 1)
        .then(({ data, error }: { data: any[]; error: any }) => {
          if (error) {
            console.error("데이터 조회 중 오류 발생:", error);
            return [];
          }
          return data;
        });
      promises.push(promise);
    }
    const results = await Promise.all(promises);
    results.forEach((data) => {
      allData.push(...data);
    });
  }

  // 모든 배치를 순차적으로 실행하는 함수
  async function fetchAllData() {
    for (let i = 0; i < totalPages; i += batchSize) {
      const endPage = Math.min(i + batchSize, totalPages);
      await fetchBatch(i, endPage);
      console.log(`Fetched pages ${i} to ${endPage - 1}`);
      if (endPage < totalPages) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  // 데이터 가져오기 실행
  await fetchAllData();

  return {
    length: allData.length,
    data: allData,
  };
});
