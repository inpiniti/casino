import { s as setInterval, _ as _sfc_main$7, a as _sfc_main$1$1 } from './interval-_uFmYVj1.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, toDisplayString, computed, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import 'radix-vue';
import 'class-variance-authority';
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

const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col h-auto divide-y divide-white divide-opacity-50 w-7" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/roulette/greenBallTr.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]);
function getColorClass(caseNumber) {
  const colors = [
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose"
  ];
  const colorIndex = (caseNumber - 1) % colors.length;
  const colorIntensity = Math.floor((caseNumber - 1) / colors.length) * 100 + 300;
  const hoverIntensity = colorIntensity + 50;
  if (colorIntensity > 900) {
    return `bg-${colors[colorIndex]}-900 hover:bg-${colors[colorIndex]}-950`;
  }
  return `bg-${colors[colorIndex]}-${colorIntensity} hover:bg-${colors[colorIndex]}-${hoverIntensity}`;
}
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "greenBall",
  __ssrInlineRender: true,
  props: {
    number: {},
    count: {},
    \uAC10\uB3C4: {}
  },
  setup(__props) {
    const props = __props;
    const bgcolor = computed(() => {
      const num = Math.floor(props.count / 18) - props.\uAC10\uB3C4;
      if (num <= 0) {
        return "bg-green-700 hover:bg-green-800 opacity-50";
      }
      return getColorClass(num);
    });
    const \uAC00\uC774\uB4DC = computed(() => {
      return Math.floor(props.count / 18) - props.\uAC10\uB3C4;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["relative flex-1 h-full p-1 text-white flex items-center justify-center cursor-pointer", unref(bgcolor)]
      }, _attrs))}><div class="absolute text-xs text-white top-0 left-1">${ssrInterpolate(unref(\uAC00\uC774\uB4DC))}</div> ${ssrInterpolate(props.number)}</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/roulette/greenBall.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex divide-x divide-white divide-opacity-50" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/roulette/ballTbody.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "divide-y divide-white divide-opacity-50" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/roulette/ballTr.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ball",
  __ssrInlineRender: true,
  props: {
    number: {},
    color: {},
    count: {},
    \uAC10\uB3C4: {}
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const bgcolor = computed(() => {
      const num = Math.floor(props.count / 18) - props.\uAC10\uB3C4;
      if (num <= 0) {
        return "bg-red-700 hover:bg-red-800 opacity-50";
      }
      return getColorClass(num);
    });
    const \uAC00\uC774\uB4DC = computed(() => {
      return Math.floor(props.count / 18) - props.\uAC10\uB3C4;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["relative p-2 cursor-pointer", unref(bgcolor)]
      }, _attrs))}><div class="absolute text-xs text-white top-0 left-1">${ssrInterpolate(unref(\uAC00\uC774\uB4DC))}</div><div class="${ssrRenderClass([_ctx.color == "red" ? "bg-red-600" : "bg-black", "w-10 h-10 bg-black text-white rounded-full flex items-center justify-center"])}">${ssrInterpolate(_ctx.number)}</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/roulette/ball.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ballTable",
  __ssrInlineRender: true,
  props: {
    \uCE74\uC6B4\uD2B8\uBC30\uC5F4: {},
    \uCE74\uC6B4\uD2B8\uBC30\uC5F42: {},
    \uAC10\uB3C4: {}
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const ballClickHandler = (number) => {
      emit("click", number);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouletteGreenBallTr = __nuxt_component_0;
      const _component_RouletteGreenBall = _sfc_main$5;
      const _component_RouletteBallTbody = __nuxt_component_2;
      const _component_RouletteBallTr = __nuxt_component_3;
      const _component_RouletteBall = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "divide-solid divide-red-100 divide-y divide-opacity-50" }, _attrs))}><div class="flex w-fit divide-solid divide-x divide-white divide-opacity-50">`);
      _push(ssrRenderComponent(_component_RouletteGreenBallTr, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_RouletteGreenBall, {
              number: "00",
              count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[36],
              "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
              onClick: ($event) => ballClickHandler(37)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_RouletteGreenBall, {
              number: "0",
              count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[37],
              "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
              onClick: ($event) => ballClickHandler(38)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_RouletteGreenBall, {
                number: "00",
                count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[36],
                "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                onClick: ($event) => ballClickHandler(37)
              }, null, 8, ["count", "\uAC10\uB3C4", "onClick"]),
              createVNode(_component_RouletteGreenBall, {
                number: "0",
                count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[37],
                "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                onClick: ($event) => ballClickHandler(38)
              }, null, 8, ["count", "\uAC10\uB3C4", "onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RouletteBallTbody, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_RouletteBallTr, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 3,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[2],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 2,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[1],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 1,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[0],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_RouletteBall, {
                      number: 3,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[2],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "red",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"]),
                    createVNode(_component_RouletteBall, {
                      number: 2,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[1],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "black",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"]),
                    createVNode(_component_RouletteBall, {
                      number: 1,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[0],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "red",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_RouletteBallTr, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 6,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[5],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 5,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[4],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 4,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[3],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_RouletteBall, {
                      number: 6,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[5],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "black",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"]),
                    createVNode(_component_RouletteBall, {
                      number: 5,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[4],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "red",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"]),
                    createVNode(_component_RouletteBall, {
                      number: 4,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[3],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "black",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_RouletteBallTr, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 9,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[8],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 8,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[7],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 7,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[6],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_RouletteBall, {
                      number: 9,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[8],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "red",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"]),
                    createVNode(_component_RouletteBall, {
                      number: 8,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[7],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "black",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"]),
                    createVNode(_component_RouletteBall, {
                      number: 7,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[6],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "red",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_RouletteBallTr, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 12,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[11],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 11,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[10],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 10,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[9],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_RouletteBall, {
                      number: 12,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[11],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "red",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"]),
                    createVNode(_component_RouletteBall, {
                      number: 11,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[10],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "black",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"]),
                    createVNode(_component_RouletteBall, {
                      number: 10,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[9],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "black",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_RouletteBallTr, null, {
                default: withCtx(() => [
                  createVNode(_component_RouletteBall, {
                    number: 3,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[2],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"]),
                  createVNode(_component_RouletteBall, {
                    number: 2,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[1],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"]),
                  createVNode(_component_RouletteBall, {
                    number: 1,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[0],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"])
                ]),
                _: 1
              }),
              createVNode(_component_RouletteBallTr, null, {
                default: withCtx(() => [
                  createVNode(_component_RouletteBall, {
                    number: 6,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[5],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"]),
                  createVNode(_component_RouletteBall, {
                    number: 5,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[4],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"]),
                  createVNode(_component_RouletteBall, {
                    number: 4,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[3],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"])
                ]),
                _: 1
              }),
              createVNode(_component_RouletteBallTr, null, {
                default: withCtx(() => [
                  createVNode(_component_RouletteBall, {
                    number: 9,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[8],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"]),
                  createVNode(_component_RouletteBall, {
                    number: 8,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[7],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"]),
                  createVNode(_component_RouletteBall, {
                    number: 7,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[6],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"])
                ]),
                _: 1
              }),
              createVNode(_component_RouletteBallTr, null, {
                default: withCtx(() => [
                  createVNode(_component_RouletteBall, {
                    number: 12,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[11],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"]),
                  createVNode(_component_RouletteBall, {
                    number: 11,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[10],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"]),
                  createVNode(_component_RouletteBall, {
                    number: 10,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[9],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RouletteBallTbody, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_RouletteBallTr, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 15,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[14],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 14,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[13],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 13,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[12],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_RouletteBall, {
                      number: 15,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[14],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "black",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"]),
                    createVNode(_component_RouletteBall, {
                      number: 14,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[13],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "red",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"]),
                    createVNode(_component_RouletteBall, {
                      number: 13,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[12],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "black",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_RouletteBallTr, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 18,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[17],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 17,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[16],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 16,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[15],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_RouletteBall, {
                      number: 18,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[17],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "red",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"]),
                    createVNode(_component_RouletteBall, {
                      number: 17,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[16],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "black",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"]),
                    createVNode(_component_RouletteBall, {
                      number: 16,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[15],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "red",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_RouletteBallTr, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 21,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[20],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 20,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[19],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 19,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[18],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_RouletteBall, {
                      number: 21,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[20],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "red",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"]),
                    createVNode(_component_RouletteBall, {
                      number: 20,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[19],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "black",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"]),
                    createVNode(_component_RouletteBall, {
                      number: 19,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[18],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "red",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_RouletteBallTr, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 24,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[23],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 23,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[22],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 22,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[21],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_RouletteBall, {
                      number: 24,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[23],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "black",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"]),
                    createVNode(_component_RouletteBall, {
                      number: 23,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[22],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "red",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"]),
                    createVNode(_component_RouletteBall, {
                      number: 22,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[21],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "black",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_RouletteBallTr, null, {
                default: withCtx(() => [
                  createVNode(_component_RouletteBall, {
                    number: 15,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[14],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"]),
                  createVNode(_component_RouletteBall, {
                    number: 14,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[13],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"]),
                  createVNode(_component_RouletteBall, {
                    number: 13,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[12],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"])
                ]),
                _: 1
              }),
              createVNode(_component_RouletteBallTr, null, {
                default: withCtx(() => [
                  createVNode(_component_RouletteBall, {
                    number: 18,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[17],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"]),
                  createVNode(_component_RouletteBall, {
                    number: 17,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[16],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"]),
                  createVNode(_component_RouletteBall, {
                    number: 16,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[15],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"])
                ]),
                _: 1
              }),
              createVNode(_component_RouletteBallTr, null, {
                default: withCtx(() => [
                  createVNode(_component_RouletteBall, {
                    number: 21,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[20],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"]),
                  createVNode(_component_RouletteBall, {
                    number: 20,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[19],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"]),
                  createVNode(_component_RouletteBall, {
                    number: 19,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[18],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"])
                ]),
                _: 1
              }),
              createVNode(_component_RouletteBallTr, null, {
                default: withCtx(() => [
                  createVNode(_component_RouletteBall, {
                    number: 24,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[23],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"]),
                  createVNode(_component_RouletteBall, {
                    number: 23,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[22],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"]),
                  createVNode(_component_RouletteBall, {
                    number: 22,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[21],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RouletteBallTbody, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_RouletteBallTr, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 27,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[26],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 26,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[25],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 25,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[24],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_RouletteBall, {
                      number: 27,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[26],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "red",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"]),
                    createVNode(_component_RouletteBall, {
                      number: 26,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[25],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "black",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"]),
                    createVNode(_component_RouletteBall, {
                      number: 25,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[24],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "red",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_RouletteBallTr, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 30,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[29],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 29,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[28],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 28,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[27],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_RouletteBall, {
                      number: 30,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[29],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "red",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"]),
                    createVNode(_component_RouletteBall, {
                      number: 29,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[28],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "black",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"]),
                    createVNode(_component_RouletteBall, {
                      number: 28,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[27],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "black",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_RouletteBallTr, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 33,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[32],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 32,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[31],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 31,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[30],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_RouletteBall, {
                      number: 33,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[32],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "black",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"]),
                    createVNode(_component_RouletteBall, {
                      number: 32,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[31],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "red",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"]),
                    createVNode(_component_RouletteBall, {
                      number: 31,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[30],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "black",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_RouletteBallTr, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 36,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[35],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 35,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[34],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RouletteBall, {
                    number: 34,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[33],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_RouletteBall, {
                      number: 36,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[35],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "red",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"]),
                    createVNode(_component_RouletteBall, {
                      number: 35,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[34],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "black",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"]),
                    createVNode(_component_RouletteBall, {
                      number: 34,
                      count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[33],
                      "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                      color: "red",
                      onClick: ballClickHandler
                    }, null, 8, ["count", "\uAC10\uB3C4"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="shrink-0 w-8 divide-y divide-red-100 divide-opacity-50 flex flex-col"${_scopeId}><div class="grow-[0] h-full relative"${_scopeId}><div class="absolute text-xs text-white top-0 left-1"${_scopeId}>${ssrInterpolate(_ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F42[0])}</div></div><div class="grow-[0] h-full relative"${_scopeId}><div class="absolute text-xs text-white top-0 left-1"${_scopeId}>${ssrInterpolate(_ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F42[1])}</div></div><div class="grow-[0] h-full relative"${_scopeId}><div class="absolute text-xs text-white top-0 left-1"${_scopeId}>${ssrInterpolate(_ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F42[2])}</div></div></div>`);
          } else {
            return [
              createVNode(_component_RouletteBallTr, null, {
                default: withCtx(() => [
                  createVNode(_component_RouletteBall, {
                    number: 27,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[26],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"]),
                  createVNode(_component_RouletteBall, {
                    number: 26,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[25],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"]),
                  createVNode(_component_RouletteBall, {
                    number: 25,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[24],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"])
                ]),
                _: 1
              }),
              createVNode(_component_RouletteBallTr, null, {
                default: withCtx(() => [
                  createVNode(_component_RouletteBall, {
                    number: 30,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[29],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"]),
                  createVNode(_component_RouletteBall, {
                    number: 29,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[28],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"]),
                  createVNode(_component_RouletteBall, {
                    number: 28,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[27],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"])
                ]),
                _: 1
              }),
              createVNode(_component_RouletteBallTr, null, {
                default: withCtx(() => [
                  createVNode(_component_RouletteBall, {
                    number: 33,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[32],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"]),
                  createVNode(_component_RouletteBall, {
                    number: 32,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[31],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"]),
                  createVNode(_component_RouletteBall, {
                    number: 31,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[30],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"])
                ]),
                _: 1
              }),
              createVNode(_component_RouletteBallTr, null, {
                default: withCtx(() => [
                  createVNode(_component_RouletteBall, {
                    number: 36,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[35],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"]),
                  createVNode(_component_RouletteBall, {
                    number: 35,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[34],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "black",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"]),
                  createVNode(_component_RouletteBall, {
                    number: 34,
                    count: _ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F4[33],
                    "\uAC10\uB3C4": _ctx.\uAC10\uB3C4,
                    color: "red",
                    onClick: ballClickHandler
                  }, null, 8, ["count", "\uAC10\uB3C4"])
                ]),
                _: 1
              }),
              createVNode("div", { class: "shrink-0 w-8 divide-y divide-red-100 divide-opacity-50 flex flex-col" }, [
                createVNode("div", { class: "grow-[0] h-full relative" }, [
                  createVNode("div", { class: "absolute text-xs text-white top-0 left-1" }, toDisplayString(_ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F42[0]), 1)
                ]),
                createVNode("div", { class: "grow-[0] h-full relative" }, [
                  createVNode("div", { class: "absolute text-xs text-white top-0 left-1" }, toDisplayString(_ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F42[1]), 1)
                ]),
                createVNode("div", { class: "grow-[0] h-full relative" }, [
                  createVNode("div", { class: "absolute text-xs text-white top-0 left-1" }, toDisplayString(_ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F42[2]), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex divide-x divide-opacity-50 divide-red-50"><div class="shrink-0 w-7 p-2"></div><div class="grow-[0] w-full p-2 flex justify-center text-white relative"><div class="absolute text-xs text-white top-0 left-1">${ssrInterpolate(_ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F42[3])}</div> 1~12 </div><div class="grow-[0] w-full p-2 flex justify-center text-white relative"><div class="absolute text-xs text-white top-0 left-1">${ssrInterpolate(_ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F42[4])}</div> 13~24 </div><div class="grow-[0] w-full p-2 flex justify-center text-white relative"><div class="absolute text-xs text-white top-0 left-1">${ssrInterpolate(_ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F42[5])}</div> 24~36 </div><div class="shrink-0 w-8 bg-green-700 text-white flex justify-center items-end"> 00 </div></div><div class="flex divide-x divide-opacity-50 divide-red-50"><div class="shrink-0 w-7"></div><div class="grow-[0] w-full p-2 flex justify-center text-white relative"><div class="absolute text-xs text-white top-0 left-1">${ssrInterpolate(_ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F42[6])}</div> 1~18 </div><div class="grow-[0] w-full p-2 flex justify-center text-white relative"><div class="absolute text-xs text-white top-0 left-1">${ssrInterpolate(_ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F42[7])}</div> \uC9DD\uC218 </div><div class="grow-[0] w-full p-2 flex justify-center text-white bg-red-500 relative"><div class="absolute text-xs text-white top-0 left-1">${ssrInterpolate(_ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F42[8])}</div> \uB808\uB4DC </div><div class="grow-[0] w-full p-2 flex justify-center text-white bg-black relative"><div class="absolute text-xs text-white top-0 left-1">${ssrInterpolate(_ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F42[9])}</div> \uBE14\uB799 </div><div class="grow-[0] w-full p-2 flex justify-center text-white relative"><div class="absolute text-xs text-white top-0 left-1">${ssrInterpolate(_ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F42[10])}</div> \uD640\uC218 </div><div class="grow-[0] w-full p-2 flex justify-center text-white relative"><div class="absolute text-xs text-white top-0 left-1">${ssrInterpolate(_ctx.\uCE74\uC6B4\uD2B8\uBC30\uC5F42[11])}</div> 19~36 </div><div class="shrink-0 w-8 bg-green-700 text-white flex justify-center items-start"> 0 </div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/roulette/ballTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "roulette",
  __ssrInlineRender: true,
  setup(__props) {
    const \uB098\uC628\uD69F\uC218 = ref(0);
    const \uB098\uC628\uAD6C\uC220\uBC30\uC5F4 = ref([]);
    const \uCE74\uC6B4\uD2B8\uBC30\uC5F4 = ref(Array(38).fill(0));
    const \uCE74\uC6B4\uD2B8\uBC30\uC5F42 = ref(Array(12).fill(0));
    const \uAC10\uB3C4 = ref(2);
    let \uC2DC\uBBAC\uB808\uC774\uC158ID = null;
    const ballClickHandler = (number) => {
      \uB098\uC628\uD69F\uC218.value++;
      if (\uB098\uC628\uAD6C\uC220\uBC30\uC5F4.value.length >= 25) {
        \uB098\uC628\uAD6C\uC220\uBC30\uC5F4.value.shift();
      }
      \uB098\uC628\uAD6C\uC220\uBC30\uC5F4.value.push(number);
      \uCE74\uC6B4\uD2B8\uBC30\uC5F4.value = \uCE74\uC6B4\uD2B8\uBC30\uC5F4.value.map((count) => count + 1);
      \uCE74\uC6B4\uD2B8\uBC30\uC5F4.value[number - 1] -= 38;
      if ([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36].includes(number)) {
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[0] -= 2;
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[1]++;
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[2]++;
      } else if ([2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35].includes(number)) {
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[0]++;
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[1] -= 2;
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[2]++;
      } else if ([1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34].includes(number)) {
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[0]++;
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[1]++;
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[2] -= 2;
      }
      if (number >= 1 && number <= 12) {
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[3] -= 2;
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[4]++;
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[5]++;
      } else if (number >= 13 && number <= 24) {
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[3]++;
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[4] -= 2;
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[5]++;
      } else if (number >= 25 && number <= 36) {
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[3]++;
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[4]++;
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[5] -= 2;
      }
      if (number >= 1 && number <= 18) {
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[6]--;
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[11]++;
      } else if (number >= 19 && number <= 36) {
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[6]++;
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[11]--;
      }
      if (number % 2 === 0) {
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[7]--;
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[10]++;
      } else {
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[7]++;
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[10]--;
      }
      if ([
        1,
        3,
        5,
        7,
        9,
        12,
        14,
        16,
        18,
        19,
        21,
        23,
        25,
        27,
        30,
        32,
        34,
        36
      ].includes(number)) {
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[8]--;
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[9]++;
      } else {
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[8]++;
        \uCE74\uC6B4\uD2B8\uBC30\uC5F42.value[9]--;
      }
    };
    const BLACK_COLOR = [
      2,
      4,
      6,
      8,
      10,
      11,
      13,
      15,
      17,
      20,
      22,
      24,
      26,
      28,
      29,
      31,
      33,
      35
    ];
    const \uC790\uB3D9\uC785\uB825 = () => {
      if (\uC2DC\uBBAC\uB808\uC774\uC158ID) {
        clearInterval(\uC2DC\uBBAC\uB808\uC774\uC158ID);
        \uC2DC\uBBAC\uB808\uC774\uC158ID = null;
      } else {
        \uC2DC\uBBAC\uB808\uC774\uC158ID = setInterval();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$7;
      const _component_Card = _sfc_main$1$1;
      const _component_RouletteBallTable = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-red-700 flex flex-col items-center justify-center p-4 gap-2" }, _attrs))}><div class="flex gap-2 items-end">`);
      _push(ssrRenderComponent(_component_Button, {
        onClick: ($event) => \uC790\uB3D9\uC785\uB825()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC790\uB3D9\uC785\uB825`);
          } else {
            return [
              createTextVNode("\uC790\uB3D9\uC785\uB825")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_Button, {
        onClick: ($event) => \uAC10\uB3C4.value++,
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`+`);
          } else {
            return [
              createTextVNode("+")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` ${ssrInterpolate(unref(\uAC10\uB3C4))} `);
      _push(ssrRenderComponent(_component_Button, {
        onClick: ($event) => \uAC10\uB3C4.value--
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`-`);
          } else {
            return [
              createTextVNode("-")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Card, { class: "w-fit h-fit flex px-2 py-1 bg-red-500 bg-opacity-50 text-yellow-500 border-0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(\uB098\uC628\uD69F\uC218))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(\uB098\uC628\uD69F\uC218)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-xs flex flex-col bg-black bg-opacity-50 w-fit h-fit"><div class="text-white p-1 flex justify-center">\uCD5C\uADFC \uB2F9\uCCA8 \uBC88\uD638</div><div class="flex gap-1 p-1"><!--[-->`);
      ssrRenderList(unref(\uB098\uC628\uAD6C\uC220\uBC30\uC5F4).slice(-25).reverse(), (ball) => {
        _push(`<div><div class="${ssrRenderClass([
          BLACK_COLOR.includes(ball) ? "bg-black" : ball == 37 ? "bg-green-700" : ball == 38 ? "bg-green-700" : "bg-red-600",
          "bg-black rounded-full text-white w-5 h-5 flex items-center justify-center"
        ])}">${ssrInterpolate(ball == 37 ? "00" : ball == 38 ? "0" : ball)}</div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
      _push(ssrRenderComponent(_component_RouletteBallTable, {
        onClick: ballClickHandler,
        "\uCE74\uC6B4\uD2B8\uBC30\uC5F4": unref(\uCE74\uC6B4\uD2B8\uBC30\uC5F4),
        "\uCE74\uC6B4\uD2B8\uBC30\uC5F42": unref(\uCE74\uC6B4\uD2B8\uBC30\uC5F42),
        "\uAC10\uB3C4": unref(\uAC10\uB3C4),
        class: "border border-white border-opacity-50"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/roulette.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=roulette-a1qYiOaQ.mjs.map
