import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full h-full items-center justify-center" }, _attrs))}> \uC870\uC120\uC758\u2197 \uAD81\uAD90\uC5D0\u2198 \uB2F9\uB3C4\uD55C\u2192\uAC83\uC744\u2197 \uD658\uC601\uD558\uC624\u2192\uB0AF\uC120\uC774\uC5EC\u2198<br> \uB098\uB294\u2198 \uB098\uC758\u2192 \uD6CC\uB96D\uD55C\u2198 \uBC31\uC131\uB4E4\uC744\u2197 \uAD7D\uC5B4\u2192 \uC0B4\uD53C\uB294\u2198 \uAE68\uC6B0\uCE5C\u2191 \uC784\uAE08\u2197<br> \uADF8\uB798\uC11C\u2192 \uC544~\uC8FC \uC88B\uC740 \uC784\uAE08\u2197 \uC138\uC885\uC774\uC624~\u2198<br> \uC74C~ \uC88B\uB2E4!\u2198<br> \uB098\uB294\u2198 (\uC138\uC138\uC138\uC138\uC138\uC138\uC138\uC138) \uC138\uC885\u2197 \uC138\uC885\u2197\uC774\uC624~\u2198<br> (\uC138\uC138\uC138\uC138\uC138\uC138\uC138\uC138) \uC138\uC885\u2197 \uC138\uC885\u2197\uC774\uC624~\u2198<br> \uBC31\uC131\uB4E4\uC744\u2197 \uAD7D\uC5B4\u2192\uC0B4\uD53C\uB294\u2198 \uAE68\uC6B0\uCE5C\u2191 \uC784\uAE08\u2197<br> (\uC138\uC138\uC138\uC138\uC138\uC138\uC138\uC138) \uC138\uC885\u2197 \uC138\uC885\u2197\uC774\uC624~\u2198<br> \uAC00~\uC5FD\uACE0\u2198 \uB531\uD55C\u2198 \uC138\uC885\u2197 \uC138\uC885\u2197 \uC138\uC885\u2197<br> \uC5B4\uB9BC\uC5C6\uB294\u2192 \uC18C\uB9AC\u2197 \uB098\uB294\u2198 \uB9C9\uAC15\uD55C\u2197 \uC138\uC885\uC774\uC624~\u2198<br> \uC9D1\uD604\uC804\uC744 \uD130\uB294\u2198 \uC138\uC885\u2197 \uB098\uB294\u2198 \uBB34\uB825\uC73C\uB85C \uB77C\uB3C4\u2198 (\uC138\uC885\u2197)(\uB098\uB294\u2198)<br> \uADF8\uB798\u2198 \uC138\uC885\uC774\u2191 \uC544\uC8FC \uC88B\uC18C\u2197<br></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CPf0-V9V.mjs.map
