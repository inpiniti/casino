import fetch from "node-fetch";
import cheerio from "cheerio";

export default defineEventHandler(async (event) => {
  const result = await fetchTable()
    .then((table) => {
      const object = parseTableToObjects(table);
      return object;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });

  return transformDataObjects(result);
});

async function fetchTable() {
  const response = await fetch(
    "https://kr.investing.com/indices/global-indices?majorIndices=on"
  );
  const body = await response.text(); // 응답을 텍스트로 변환
  const $ = cheerio.load(body); // cheerio를 사용하여 HTML 파싱
  const table = $("#cr_12"); // id가 cr_12인 <table> 태그의 HTML을 가져옴

  return table; // 찾은 <table> 태그의 HTML을 반환
}

function parseTableToObjects(table: any) {
  const columns: any = [];
  const dataObjects: any = [];

  // 컬럼 이름 추출
  table.find("thead tr th").each((i: number, th: any) => {
    columns.push(cheerio.load(th).text().trim());
  });

  // 각 행의 데이터 추출 및 객체 변환
  table.find("tbody tr").each((i: number, tr: any) => {
    const row: any = {};
    cheerio
      .load(tr)("td")
      .each((j: number, td: any) => {
        const columnName = columns[j] || `column${j}`;
        row[columnName] = cheerio.load(td).text().trim();
      });
    dataObjects.push(row);
  });

  return dataObjects;
}

function transformDataObjects(dataObjects: any[]) {
  // dataObjects가 배열인지 확인하고, 아니라면 빈 배열로 초기화
  if (!Array.isArray(dataObjects)) {
    console.error("dataObjects is not an array:", dataObjects);
    dataObjects = [];
  }

  const fieldMapping: { [key: string]: string } = {
    지수: "index",
    현재가: "currentPrice",
    고가: "highPrice",
    저가: "lowPrice",
    변동: "change",
    "변동 %": "changePercent",
    시간: "time",
  };

  const transformed = dataObjects.map((obj) => {
    const newObj: { [key: string]: any } = {};
    Object.keys(obj)
      .slice(1, -1)
      .forEach((key) => {
        const newKey = fieldMapping[key] || key;
        newObj[newKey] = obj[key];
      });
    return newObj;
  });

  const groupedByCountry = transformed.reduce((acc, obj) => {
    const countryMatch = obj.index.split(" ")[1];
    if (countryMatch) {
      const country = countryMatch; // 전체 두 번째 단어를 나라명으로 사용
      if (!acc[country]) acc[country] = [];
      acc[country].push(obj);
    }
    return acc;
  }, {});

  return filterValidCountries(groupedByCountry);
}

function filterValidCountries(groupedByCountry: { [key: string]: any[] }) {
  const validCountries = [
    "Israel",
    "Brazil",
    "France",
    "Hong",
    "Belgium",
    "Finland",
    "Italy",
    "Sweden",
    "Singapore",
    "Netherlands",
    "Switzerland",
    "Chile",
    "Canada",
    "Germany",
    "Ireland",
    "Norway",
    "Denmark",
    "Portugal",
    "Spain",
    "United",
    "Colombia",
    "Czech",
    "Greece",
    "Egypt",
    "Hungary",
    "India",
    "Indonesia",
    "Korea",
    "Malaysia",
    "Mexico",
    "Peru",
    "Philippines",
    "Poland",
    "Thailand",
    "Turkey",
    "Argentina",
    "Jordan",
    "Morocco",
    "Oman",
    "Pakistan",
    "Qatar",
    "Sri",
    "Australia",
    "China",
    "Japan",
    "US",
    "Austria",
    "Cyprus",
    "Taiwan",
  ];
  return Object.keys(groupedByCountry)
    .filter((key) => validCountries.includes(key))
    .reduce((acc: any, key) => {
      acc[key] = groupedByCountry[key];
      return acc;
    }, {});
}
