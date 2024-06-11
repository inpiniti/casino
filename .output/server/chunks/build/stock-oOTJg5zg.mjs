import { useSSRContext, defineComponent, ref, mergeProps, unref, computed } from 'vue';
import { B as klona, C as defuFn } from '../runtime.mjs';
import { e as __nuxt_component_8, c as useNuxtApp, d as defineAppConfig } from './server.mjs';
import { u as useState } from './state-DVSaO_PC.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';

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
    Taiwan: "tw"
    // 대만
  },
  codeList: {
    il: "israel",
    br: "brazil",
    fr: "france",
    hk: "hong",
    be: "belgium",
    fi: "finland",
    it: "italy",
    se: "sweden",
    sg: "singapore",
    nl: "netherlands",
    ch: "switzerland",
    cl: "chile",
    ca: "canada",
    de: "germany",
    ie: "ireland",
    no: "norway",
    dk: "denmark",
    pt: "portugal",
    es: "spain",
    uk: "united",
    co: "colombia",
    cz: "czech",
    gr: "greece",
    eg: "egypt",
    hu: "hungary",
    in: "india",
    id: "indonesia",
    kr: "korea",
    my: "malaysia",
    mx: "mexico",
    pe: "peru",
    ph: "philippines",
    pl: "poland",
    th: "thailand",
    tr: "turkey",
    ar: "argentina",
    jo: "jordan",
    ma: "morocco",
    om: "oman",
    pk: "pakistan",
    qa: "qatar",
    lk: "sri",
    au: "australia",
    cn: "china",
    jp: "japan",
    us: "us",
    at: "austria",
    cy: "cyprus",
    tw: "taiwan"
  }
});
const inlineConfig = {
  "nuxt": {
    "buildId": "f5ef0cef-4e19-49e7-a36a-333aefc83126"
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
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "stockMenu",
  __ssrInlineRender: true,
  props: {
    indices: {}
  },
  setup(__props) {
    const appConfig = useAppConfig();
    const nameList = appConfig.nameList;
    const props = __props;
    const search = ref("");
    const cIndices = computed(() => {
      const filteredIndices = {};
      if (props.indices !== void 0 && props.indices !== null && typeof props.indices === "object") {
        Object.keys(props.indices).forEach((country) => {
          const matches = props.indices[country].filter((index) => country.toLowerCase().includes(search.value.toLowerCase()));
          if (matches.length > 0) {
            filteredIndices[country] = matches;
          }
        });
      }
      return filteredIndices;
    });
    const selectedCountry = useState("selectedCountry");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="shrink-0 pt-2 px-2"><input class="px-4 py-2 w-full focus:outline-none border rounded" type="text" placeholder="search"${ssrRenderAttr("value", unref(search))}></div><div class="grow-[0] h-full overflow-y-scroll scrollbar-hide">`);
      if (_ctx.indices) {
        _push(`<!--[-->`);
        ssrRenderList(Object.entries(unref(cIndices)), ([name, indiceList]) => {
          _push(`<div class="${ssrRenderClass([unref(selectedCountry).name === name ? "bg-black text-white hover:bg-neutral-800" : "hover:bg-neutral-100", "px-4 py-2 mx-2 my-1 rounded cursor-pointer text-xs flex gap-2 items-center"])}"><img class="rounded-full border border-neutral-600"${ssrRenderAttr("src", `https://s3-symbol-logo.tradingview.com/country/${unref(nameList)[name].toUpperCase()}.svg`)}> ${ssrInterpolate(name == "Hong" ? "Hong Kong" : name)}</div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stock/stockMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "stockBar",
  __ssrInlineRender: true,
  props: {
    selectedCountry: {}
  },
  setup(__props) {
    const appConfig = useAppConfig();
    const nameList = appConfig.nameList;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="px-4 py-2 font-bold flex gap-2 items-center"><img class="h-fit border border-neutral-400"${ssrRenderAttr("src", `https://s3-symbol-logo.tradingview.com/country/${unref(nameList)[_ctx.selectedCountry.name].toUpperCase()}.svg`)}> ${ssrInterpolate(_ctx.selectedCountry.name)}</div><div class="flex divide-x"><!--[-->`);
      ssrRenderList(_ctx.selectedCountry.indiceList, (indice) => {
        _push(`<div class="text-xs px-4 py-2 flex gap-2 items-center"><div class="font-bold pr-2">${ssrInterpolate(indice.index)}</div><div class="flex gap-2"><div class="flex gap-1"><div class="text-neutral-400">\uBCC0\uB3D9</div><div class="${ssrRenderClass(indice.change.startsWith("+") ? "text-red-500" : "text-blue-500")}">${ssrInterpolate(indice.change)}</div></div><div class="flex gap-1"><div class="text-neutral-400">\uBCC0\uB3D9%</div><div class="${ssrRenderClass(indice.change.startsWith("+") ? "text-red-500" : "text-blue-500")}">${ssrInterpolate(indice.changePercent)}</div></div></div></div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stock/stockBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "stock",
  __ssrInlineRender: true,
  setup(__props) {
    ref();
    const indices = ref({});
    const selectedCountry = useState("selectedCountry");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StockMenu = _sfc_main$2;
      const _component_StockBar = _sfc_main$1;
      const _component_NuxtPage = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grow-[0] h-full flex divide-x overflow-hidden" }, _attrs))}><div class="flex flex-col shrink-0 w-36 h-full">`);
      _push(ssrRenderComponent(_component_StockMenu, { indices: unref(indices) }, null, _parent));
      _push(`</div><div class="flex flex-col grow-[0] overflow-hidden h-full w-full">`);
      if (unref(selectedCountry)) {
        _push(`<div class="shrink-0 flex divide-x border-b">`);
        _push(ssrRenderComponent(_component_StockBar, { selectedCountry: unref(selectedCountry) }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grow-[0] overflow-hidden h-full">`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/stock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=stock-oOTJg5zg.mjs.map
