import { d as defineEventHandler } from '../../../runtime.mjs';
import cheerio from 'cheerio';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const fetch = (...args) => globalThis.fetch(...args);
const redirectStatus = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
const isRedirect = (code) => redirectStatus.has(code);
fetch.Promise = globalThis.Promise;
fetch.isRedirect = isRedirect;

const indices = defineEventHandler(async (event) => {
  const result = await fetchTable().then((table) => {
    const object = parseTableToObjects(table);
    return object;
  }).catch((err) => {
    console.error(err);
    return err;
  });
  return transformDataObjects(result);
});
async function fetchTable() {
  const response = await fetch(
    "https://kr.investing.com/indices/global-indices?majorIndices=on"
  );
  const body = await response.text();
  const $ = cheerio.load(body);
  const table = $("#cr_12");
  return table;
}
function parseTableToObjects(table) {
  const columns = [];
  const dataObjects = [];
  table.find("thead tr th").each((i, th) => {
    columns.push(cheerio.load(th).text().trim());
  });
  table.find("tbody tr").each((i, tr) => {
    const row = {};
    cheerio.load(tr)("td").each((j, td) => {
      const columnName = columns[j] || `column${j}`;
      row[columnName] = cheerio.load(td).text().trim();
    });
    dataObjects.push(row);
  });
  return dataObjects;
}
function transformDataObjects(dataObjects) {
  if (!Array.isArray(dataObjects)) {
    console.error("dataObjects is not an array:", dataObjects);
    dataObjects = [];
  }
  const fieldMapping = {
    \uC9C0\uC218: "index",
    \uD604\uC7AC\uAC00: "currentPrice",
    \uACE0\uAC00: "highPrice",
    \uC800\uAC00: "lowPrice",
    \uBCC0\uB3D9: "change",
    "\uBCC0\uB3D9 %": "changePercent",
    \uC2DC\uAC04: "time"
  };
  const transformed = dataObjects.map((obj) => {
    const newObj = {};
    Object.keys(obj).slice(1, -1).forEach((key) => {
      const newKey = fieldMapping[key] || key;
      newObj[newKey] = obj[key];
    });
    return newObj;
  });
  const groupedByCountry = transformed.reduce((acc, obj) => {
    const countryMatch = obj.index.split(" ")[1];
    if (countryMatch) {
      const country = countryMatch;
      if (!acc[country])
        acc[country] = [];
      acc[country].push(obj);
    }
    return acc;
  }, {});
  return filterValidCountries(groupedByCountry);
}
function filterValidCountries(groupedByCountry) {
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
    "Taiwan"
  ];
  return Object.keys(groupedByCountry).filter((key) => validCountries.includes(key)).reduce((acc, key) => {
    acc[key] = groupedByCountry[key];
    return acc;
  }, {});
}

export { indices as default };
//# sourceMappingURL=indices.mjs.map
