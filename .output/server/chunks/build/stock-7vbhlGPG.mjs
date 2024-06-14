import { u as useState, a as useAppConfig } from './state-DRTXuqfW.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { c as __nuxt_component_9 } from './server.mjs';
import '../runtime.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "stockMenu",
  __ssrInlineRender: true,
  props: {
    indices: {}
  },
  setup(__props) {
    const appConfig = useAppConfig();
    const nameList = appConfig.nameList;
    const codeList = appConfig.codeList;
    const props = __props;
    const search = ref("");
    const cIndices = computed(() => {
      const filteredIndices = {};
      if (props.indices !== void 0 && props.indices !== null && typeof props.indices === "object") {
        Object.keys(props.indices).forEach((country) => {
          const matches = props.indices[country].filter(
            (index) => country.toLowerCase().includes(search.value.toLowerCase())
          );
          if (matches.length > 0) {
            filteredIndices[country] = matches;
          }
        });
      }
      return filteredIndices;
    });
    const selectedCountry = useState("selectedCountry");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="shrink-0 h-14 px-2 flex items-center"><input class="px-4 py-1.5 w-full focus:outline-none border rounded" type="text" placeholder="search"${ssrRenderAttr("value", unref(search))}></div><div class="grow-[0] h-full overflow-y-scroll scrollbar-hide">`);
      if (_ctx.indices) {
        _push(`<!--[-->`);
        ssrRenderList(Object.entries(unref(cIndices)), ([name, indiceList]) => {
          _push(`<div class="${ssrRenderClass([[
            unref(selectedCountry).name === name ? "bg-black text-white hover:bg-neutral-800" : "hover:bg-neutral-100",
            unref(codeList)[unref(nameList)[name]].countryId == void 0 ? "text-neutral-300" : ""
          ], "px-4 py-2 mx-2 my-1 rounded cursor-pointer text-xs flex gap-2 items-center"])}"><img class="rounded-full border border-neutral-600"${ssrRenderAttr("src", `https://s3-symbol-logo.tradingview.com/country/${unref(nameList)[name].toUpperCase()}.svg`)}> ${ssrInterpolate(name == "Hong" ? "Hong Kong" : name)}</div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stock/stockMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "stock",
  __ssrInlineRender: true,
  setup(__props) {
    ref();
    const indices = ref({});
    useState("selectedCountry");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StockMenu = _sfc_main$1;
      const _component_NuxtPage = __nuxt_component_9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grow-[0] h-full flex divide-x overflow-hidden" }, _attrs))}><div class="flex flex-col shrink-0 w-36 h-full divide-y">`);
      _push(ssrRenderComponent(_component_StockMenu, { indices: unref(indices) }, null, _parent));
      _push(`</div><div class="grow-[0] overflow-hidden h-full w-full">`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div>`);
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
//# sourceMappingURL=stock-7vbhlGPG.mjs.map
