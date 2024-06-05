import { a as __nuxt_component_0 } from './server.mjs';
import { u as useState } from './state-C15HQ2wM.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "stock",
  __ssrInlineRender: true,
  setup(__props) {
    const stockList = useState("stockList");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full divide-x" }, _attrs))}><div class="flex flex-col divide-y"><!--[-->`);
      ssrRenderList(unref(stockList), (item) => {
        _push(`<div class="shrink-0 w-40 flex flex-col px-4 py-2 text-sm"><div class="font-bold">${ssrInterpolate(item.Name)}</div><div>Last Price: ${ssrInterpolate(item.Last)}</div><div>Change: ${ssrInterpolate(item.Chg)}</div><div>Change %: ${ssrInterpolate(item.ChgPct)}</div></div>`);
      });
      _push(`<!--]--></div><div class="grow-[0] w-full">`);
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
//# sourceMappingURL=stock-DOTCXml5.mjs.map
