import { B as klona, C as defuFn } from '../runtime.mjs';
import { f as useNuxtApp, e as defineAppConfig } from './server.mjs';

const cfg0 = defineAppConfig({
  theme: {
    primaryColor: "#ababab"
  },
  nameList: {
    Israel: "il",
    // 이스라엘
    Brazil: "br",
    // 브라질
    France: "fr",
    // 프랑스
    Hong: "hk",
    // 홍콩
    Belgium: "be",
    // 벨기에
    Finland: "fi",
    // 핀란드
    Italy: "it",
    // 이탈리아
    Sweden: "se",
    // 스웨덴
    Singapore: "sg",
    // 싱가포르
    Netherlands: "nl",
    // 네덜란드
    Switzerland: "ch",
    // 스위스
    Chile: "cl",
    // 칠레
    Canada: "ca",
    // 캐나다
    Germany: "de",
    // 독일
    Ireland: "ie",
    // 아일랜드
    Norway: "no",
    // 노르웨이
    Denmark: "dk",
    // 덴마크
    Portugal: "pt",
    // 포르투갈
    Spain: "es",
    // 스페인
    United: "uk",
    // 영국, 아랍에미라이트도 섞여 있음 ㅠㅠ
    Colombia: "co",
    // 콜롬비아
    Czech: "cz",
    // 체코
    Greece: "gr",
    // 그리스
    Egypt: "eg",
    // 이집트
    Hungary: "hu",
    // 헝가리
    India: "in",
    // 인도
    Indonesia: "id",
    // 인도네시아
    Korea: "kr",
    // 한국
    Malaysia: "my",
    // 말레이시아
    Mexico: "mx",
    // 멕시코
    Peru: "pe",
    // 페루
    Philippines: "ph",
    // 필리핀
    Poland: "pl",
    // 폴란드
    Thailand: "th",
    // 태국
    Turkey: "tr",
    // 터키
    Argentina: "ar",
    // 아르헨티나
    Jordan: "jo",
    // 요르단
    Morocco: "ma",
    // 모로코
    Oman: "om",
    // 오만
    Pakistan: "pk",
    // 파키스탄
    Qatar: "qa",
    // 카타르
    Sri: "lk",
    // 스리랑카
    Australia: "au",
    // 호주
    China: "cn",
    // 중국
    Japan: "jp",
    // 일본
    US: "us",
    // 미국
    Austria: "at",
    // 오스트리아
    Cyprus: "cy",
    // 키프로스
    Taiwan: "tw",
    // 대만,
    Jamaica: "jm",
    // 자메이카
    Costarica: "cr",
    // 코스타리카
    Latvia: "lv",
    // 라트비아
    Russia: "ru",
    // 러시아
    Romania: "ro",
    // 루마니아
    Luxembourg: "lu",
    // 룩셈부르크
    Lithuania: "lt"
    // 리투아니아
  },
  codeList: {
    il: { name: "israel", kr: "\uC774\uC2A4\uB77C\uC5D8" },
    br: {
      name: "brazil",
      kr: "\uBE0C\uB77C\uC9C8",
      countryId: 32,
      pageSize: 1406
    },
    fr: { name: "france", kr: "\uD504\uB791\uC2A4" },
    hk: { name: "hong", kr: "\uD64D\uCF69" },
    be: { name: "belgium", kr: "\uBCA8\uAE30\uC5D0" },
    fi: { name: "finland", kr: "\uD540\uB780\uB4DC" },
    it: { name: "italy", kr: "\uC774\uD0C8\uB9AC\uC544" },
    se: { name: "sweden", kr: "\uC2A4\uC6E8\uB374" },
    sg: { name: "singapore", kr: "\uC2F1\uAC00\uD3EC\uB974" },
    nl: { name: "netherlands", kr: "\uB124\uB35C\uB780\uB4DC", countryId: 21, pageSize: 200 },
    ch: { name: "switzerland", kr: "\uC2A4\uC704\uC2A4" },
    cl: { name: "chile", kr: "\uCE60\uB808", countryId: 27, pageSize: 200 },
    ca: { name: "canada", kr: "\uCE90\uB098\uB2E4", countryId: 6, pageSize: 5e3 },
    de: { name: "germany", kr: "\uB3C5\uC77C", countryId: 17, pageSize: 6e3 },
    ie: { name: "ireland", kr: "\uC544\uC77C\uB79C\uB4DC" },
    no: { name: "norway", kr: "\uB178\uB974\uC6E8\uC774", countryId: 60, pageSize: 400 },
    dk: { name: "denmark", kr: "\uB374\uB9C8\uD06C", countryId: 24, pageSize: 200 },
    pt: { name: "portugal", kr: "\uD3EC\uB974\uD22C\uAC08" },
    es: { name: "spain", kr: "\uC2A4\uD398\uC778" },
    uk: { name: "united", kr: "\uC601\uAD6D" },
    co: { name: "colombia", kr: "\uCF5C\uB86C\uBE44\uC544", countryId: 122, pageSize: 100 },
    cz: { name: "czech", kr: "\uCCB4\uCF54" },
    gr: { name: "greece", kr: "\uADF8\uB9AC\uC2A4", countryId: 51, pageSize: 200 },
    eg: { name: "egypt", kr: "\uC774\uC9D1\uD2B8" },
    hu: { name: "hungary", kr: "\uD5DD\uAC00\uB9AC" },
    in: { name: "india", kr: "\uC778\uB3C4" },
    id: { name: "indonesia", kr: "\uC778\uB3C4\uB124\uC2DC\uC544" },
    kr: { name: "korea", kr: "\uD55C\uAD6D", countryId: 11, pageSize: 3e3 },
    my: { name: "malaysia", kr: "\uB9D0\uB808\uC774\uC2DC\uC544" },
    mx: { name: "mexico", kr: "\uBA55\uC2DC\uCF54", countryId: 7, pageSize: 800 },
    pe: { name: "peru", kr: "\uD398\uB8E8", countryId: 125, pageSize: 300 },
    ph: { name: "philippines", kr: "\uD544\uB9AC\uD540" },
    pl: { name: "poland", kr: "\uD3F4\uB780\uB4DC" },
    th: { name: "thailand", kr: "\uD0DC\uAD6D" },
    tr: { name: "turkey", kr: "\uD130\uD0A4" },
    ar: {
      name: "argentina",
      kr: "\uC544\uB974\uD5E8\uD2F0\uB098",
      countryId: 29,
      pageSize: 400
    },
    jo: { name: "jordan", kr: "\uC694\uB974\uB2E8" },
    ma: { name: "morocco", kr: "\uBAA8\uB85C\uCF54" },
    om: { name: "oman", kr: "\uC624\uB9CC" },
    pk: { name: "pakistan", kr: "\uD30C\uD0A4\uC2A4\uD0C4" },
    qa: { name: "qatar", kr: "\uCE74\uD0C0\uB974" },
    lk: { name: "sri", kr: "\uC2A4\uB9AC\uB791\uCE74" },
    au: { name: "australia", kr: "\uD638\uC8FC" },
    cn: { name: "china", kr: "\uC911\uAD6D", countryId: 37, pageSize: 6e3 },
    jp: { name: "japan", kr: "\uC77C\uBCF8", countryId: 35, pageSize: 5e3 },
    us: { name: "america", kr: "\uBBF8\uAD6D", countryId: 5, pageSize: 0 },
    at: { name: "austria", kr: "\uC624\uC2A4\uD2B8\uB9AC\uC544" },
    cy: { name: "cyprus", kr: "\uD0A4\uD504\uB85C\uC2A4" },
    tw: { name: "taiwan", kr: "\uB300\uB9CC" },
    jm: { name: "jamaica", kr: "\uC790\uBA54\uC774\uCE74", countryId: 119, pageSize: 100 },
    ve: { name: "venezuela", kr: "\uBCA0\uB124\uC218\uC5D8\uB77C", countryId: 138, pageSize: 100 },
    cr: { name: "costarica", kr: "\uCF54\uC2A4\uD0C0\uB9AC\uCE74", countryId: 15, pageSize: 100 },
    lv: { name: "latvia", kr: "\uB77C\uD2B8\uBE44\uC544", countryId: 97, pageSize: 100 },
    ru: { name: "russia", kr: "\uB7EC\uC2DC\uC544", countryId: 56, pageSize: 300 },
    ro: { name: "romania", kr: "\uB8E8\uB9C8\uB2C8\uC544", countryId: 100, pageSize: 300 },
    lu: { name: "luxembourg", kr: "\uB8E9\uC148\uBD80\uB974\uD06C", countryId: 103, pageSize: 100 },
    lt: { name: "lithuania", kr: "\uB9AC\uD22C\uC544\uB2C8\uC544", countryId: 96, pageSize: 100 },
    me: { name: "moNTENEGRO", kr: "\uBAAC\uD14C\uB124\uADF8\uB85C", countryId: 247, pageSize: 100 }
  }
});
const inlineConfig = {
  "nuxt": {
    "buildId": "c023a1dc-bd3b-4f33-aa7f-d21de701d0d2"
  }
};
const __appConfig = /* @__PURE__ */ defuFn(cfg0, inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(__appConfig);
  }
  return nuxtApp._appConfig;
}

export { useAppConfig as u };
//# sourceMappingURL=config-BKBIZQXe.mjs.map
