import { a as __nuxt_component_20 } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { u as useState } from './state-_I5XcLqc.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "stock",
  __ssrInlineRender: true,
  setup(__props) {
    ref();
    const search = ref("");
    const indices = ref({});
    const cIndices = computed(() => {
      const filteredIndices = {};
      if (indices.value !== void 0 && indices.value !== null && typeof indices.value === "object") {
        Object.keys(indices.value).forEach((country) => {
          const matches = indices.value[country].filter(
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
      const _component_NuxtPage = __nuxt_component_20;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grow-[0] h-full flex divide-x overflow-hidden" }, _attrs))}><div class="shrink-0 w-60 h-full overflow-y-scroll scrollbar-hide"><div><input class="px-4 py-2 w-full focus:outline-none border-b" type="text" placeholder="search"${ssrRenderAttr("value", unref(search))}></div>`);
      if (unref(indices)) {
        _push(`<!--[-->`);
        ssrRenderList(Object.entries(unref(cIndices)), ([name, indiceList]) => {
          _push(`<div class="${ssrRenderClass([{ "bg-blue-50  border-l-blue-500": unref(selectedCountry) === name }, "px-4 py-2 border-b border-l-4 hover:bg-blue-50 hover:border-l-blue-500 cursor-pointer"])}">${ssrInterpolate(name == "Hong" ? "Hong Kong" : name)} <!--[-->`);
          ssrRenderList(indiceList, (indice) => {
            _push(`<div class="flex text-xs"><div class="w-72">${ssrInterpolate(indice.index)}</div><div class="${ssrRenderClass(
              indice.changePercent.startsWith("+") ? "text-red-500" : "text-blue-500"
            )}">${ssrInterpolate(indice.changePercent)}</div></div>`);
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col grow-[0] overflow-hidden h-full w-full bg-neutral-50">`);
      if (unref(selectedCountry)) {
        _push(`<div class="shrink-0 flex flex-col divide-y border-b"><div class="px-4 py-2 font-bold">${ssrInterpolate(unref(selectedCountry).name)}</div><div class="flex divide-x"><!--[-->`);
        ssrRenderList(unref(selectedCountry).indiceList, (indice) => {
          _push(`<div class="text-xs px-4 py-2 flex flex-col gap-2 items-center"><div class="font-bold pr-2">${ssrInterpolate(indice.index)}</div><div class="flex gap-2"><div><div class="text-neutral-400">\uD604\uC7AC\uAC00</div> ${ssrInterpolate(indice.currentPrice)}</div><div><div class="text-neutral-400">\uACE0\uAC00</div> ${ssrInterpolate(indice.highPrice)}</div><div><div class="text-neutral-400">\uC800\uAC00</div> ${ssrInterpolate(indice.lowPrice)}</div><div><div class="text-neutral-400">\uBCC0\uB3D9</div><div class="${ssrRenderClass(
            indice.change.startsWith("+") ? "text-red-500" : "text-blue-500"
          )}">${ssrInterpolate(indice.change)}</div></div><div><div class="text-neutral-400">\uBCC0\uB3D9%</div><div class="${ssrRenderClass(
            indice.change.startsWith("+") ? "text-red-500" : "text-blue-500"
          )}">${ssrInterpolate(indice.changePercent)}</div></div><div><div class="text-neutral-400">\uC2DC\uAC04</div> ${ssrInterpolate(indice.time)}</div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grow-[0] overflow-hidden h-full bg-neutral-100">`);
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
//# sourceMappingURL=stock-3690W4Zd.mjs.map
