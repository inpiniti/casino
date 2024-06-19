import { useSSRContext, defineComponent, computed, ref, mergeProps, unref, withCtx, openBlock, createBlock, createCommentVNode, Fragment, renderList, renderSlot, createTextVNode, toDisplayString, createVNode, createApp } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { CurveType, Line, Axis, GroupedBar, StackedBar, omit } from '@unovis/ts';
import { VisXYContainer, VisLine, VisAxis, VisBulletLegend, VisTooltip, VisCrosshair, VisGroupedBar, VisStackedBar } from '@unovis/vue';
import { useMounted } from '@vueuse/core';
import { c as cn, _ as _sfc_main$9 } from './Card-C-jw3V7W.mjs';
import { u as useStock } from './useStock-BbedVhZF.mjs';
import { d as useRoute } from './server.mjs';
import 'clsx';
import 'tailwind-merge';
import './state-Cl88GJ8H.mjs';
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

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "CardHeader",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("flex flex-col gap-y-1.5 p-6", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/CardHeader.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "CardTitle",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h3${ssrRenderAttrs(mergeProps({
        class: unref(cn)("text-2xl font-semibold leading-none tracking-tight", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</h3>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/CardTitle.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CardContent",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("p-6 pt-0", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/CardContent.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ChartTooltip",
  __ssrInlineRender: true,
  props: {
    title: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$9), mergeProps({ class: "text-sm" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.title) {
              _push2(ssrRenderComponent(unref(_sfc_main$8), { class: "p-3 border-b" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$7), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.title), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$7), null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.title), 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(_sfc_main$6), { class: "p-3 min-w-[180px] flex flex-col gap-1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(_ctx.data, (item, key) => {
                    _push3(`<div class="flex justify-between"${_scopeId2}><div class="flex items-center"${_scopeId2}><span class="w-2.5 h-2.5 mr-2"${_scopeId2}><svg width="100%" height="100%" viewBox="0 0 30 30"${_scopeId2}><path d=" M 15 15 m -14, 0 a 14,14 0 1,1 28,0 a 14,14 0 1,1 -28,0"${ssrRenderAttr("stroke", item.color)}${ssrRenderAttr("fill", item.color)} stroke-width="1"${_scopeId2}></path></svg></span><span${_scopeId2}>${ssrInterpolate(item.name)}</span></div><span class="font-semibold ml-4"${_scopeId2}>${ssrInterpolate(item.value)}</span></div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data, (item, key) => {
                      return openBlock(), createBlock("div", {
                        key,
                        class: "flex justify-between"
                      }, [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("span", { class: "w-2.5 h-2.5 mr-2" }, [
                            (openBlock(), createBlock("svg", {
                              width: "100%",
                              height: "100%",
                              viewBox: "0 0 30 30"
                            }, [
                              createVNode("path", {
                                d: " M 15 15 m -14, 0 a 14,14 0 1,1 28,0 a 14,14 0 1,1 -28,0",
                                stroke: item.color,
                                fill: item.color,
                                "stroke-width": "1"
                              }, null, 8, ["stroke", "fill"])
                            ]))
                          ]),
                          createVNode("span", null, toDisplayString(item.name), 1)
                        ]),
                        createVNode("span", { class: "font-semibold ml-4" }, toDisplayString(item.value), 1)
                      ]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              _ctx.title ? (openBlock(), createBlock(unref(_sfc_main$8), {
                key: 0,
                class: "p-3 border-b"
              }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$7), null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.title), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(unref(_sfc_main$6), { class: "p-3 min-w-[180px] flex flex-col gap-1" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data, (item, key) => {
                    return openBlock(), createBlock("div", {
                      key,
                      class: "flex justify-between"
                    }, [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("span", { class: "w-2.5 h-2.5 mr-2" }, [
                          (openBlock(), createBlock("svg", {
                            width: "100%",
                            height: "100%",
                            viewBox: "0 0 30 30"
                          }, [
                            createVNode("path", {
                              d: " M 15 15 m -14, 0 a 14,14 0 1,1 28,0 a 14,14 0 1,1 -28,0",
                              stroke: item.color,
                              fill: item.color,
                              "stroke-width": "1"
                            }, null, 8, ["stroke", "fill"])
                          ]))
                        ]),
                        createVNode("span", null, toDisplayString(item.name), 1)
                      ]),
                      createVNode("span", { class: "font-semibold ml-4" }, toDisplayString(item.value), 1)
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/chart/ChartTooltip.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ChartLegend",
  __ssrInlineRender: true,
  props: {
    items: { default: () => [] }
  },
  emits: ["legendItemClick", "update:items"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const elRef = ref();
    function onLegendItemClick(d, i) {
      emits("legendItemClick", d, i);
      const isBulletActive = !props.items[i].inactive;
      const isFilterApplied = props.items.some((i2) => i2.inactive);
      if (isFilterApplied && isBulletActive) {
        emits("update:items", props.items.map((item) => ({ ...item, inactive: false })));
      } else {
        emits("update:items", props.items.map((item) => item.name === d.name ? { ...d, inactive: false } : { ...item, inactive: true }));
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "elRef",
        ref: elRef,
        class: "w-max"
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(VisBulletLegend), {
        items: _ctx.items,
        "on-legend-item-click": onLegendItemClick
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/chart/ChartLegend.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChartCrosshair",
  __ssrInlineRender: true,
  props: {
    colors: { default: () => [] },
    index: {},
    items: {},
    customTooltip: {}
  },
  setup(__props) {
    const props = __props;
    const wm = /* @__PURE__ */ new WeakMap();
    function template(d) {
      var _a;
      if (wm.has(d)) {
        return wm.get(d);
      } else {
        const componentDiv = (void 0).createElement("div");
        const omittedData = Object.entries(omit(d, [props.index])).map(([key, value]) => {
          const legendReference = props.items.find((i) => i.name === key);
          return { ...legendReference, value };
        });
        const TooltipComponent = (_a = props.customTooltip) != null ? _a : _sfc_main$5;
        createApp(TooltipComponent, { title: d[props.index].toString(), data: omittedData }).mount(componentDiv);
        wm.set(d, componentDiv.innerHTML);
        return componentDiv.innerHTML;
      }
    }
    function color(d, i) {
      var _a;
      return (_a = props.colors[i]) != null ? _a : "transparent";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(VisTooltip), {
        "horizontal-shift": 20,
        "vertical-shift": 20
      }, null, _parent));
      _push(ssrRenderComponent(unref(VisCrosshair), {
        template,
        color
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/chart/ChartCrosshair.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
function defaultColors(count = 3) {
  const quotient = Math.floor(count / 2);
  const remainder = count % 2;
  const primaryCount = quotient + remainder;
  const secondaryCount = quotient;
  return [
    ...Array.from(Array(primaryCount).keys()).map((i) => `hsl(var(--vis-primary-color) / ${1 - 1 / primaryCount * i})`),
    ...Array.from(Array(secondaryCount).keys()).map((i) => `hsl(var(--vis-secondary-color) / ${1 - 1 / secondaryCount * i})`)
  ];
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LineChart",
  __ssrInlineRender: true,
  props: {
    data: {},
    categories: {},
    index: {},
    colors: {},
    margin: { default: () => ({ top: 0, bottom: 0, left: 0, right: 0 }) },
    filterOpacity: { default: 0.2 },
    xFormatter: {},
    yFormatter: {},
    showXAxis: { type: Boolean, default: true },
    showYAxis: { type: Boolean, default: true },
    showTooltip: { type: Boolean, default: true },
    showLegend: { type: Boolean, default: true },
    showGridLine: { type: Boolean, default: true },
    customTooltip: {},
    curveType: { default: CurveType.MonotoneX }
  },
  emits: ["legendItemClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const index = computed(() => props.index);
    const colors = computed(() => {
      var _a;
      return ((_a = props.colors) == null ? void 0 : _a.length) ? props.colors : defaultColors(props.categories.length);
    });
    const legendItems = ref(props.categories.map((category, i) => ({
      name: category,
      color: colors.value[i],
      inactive: false
    })));
    const isMounted = useMounted();
    function handleLegendItemClick(d, i) {
      emits("legendItemClick", d, i);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("w-full h-[400px] flex flex-col items-end", (_a = _ctx.$attrs.class) != null ? _a : "")
      }, _attrs))}>`);
      if (_ctx.showLegend) {
        _push(ssrRenderComponent(unref(_sfc_main$4), {
          items: legendItems.value,
          "onUpdate:items": ($event) => legendItems.value = $event,
          onLegendItemClick: handleLegendItemClick
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(VisXYContainer), {
        margin: { left: 20, right: 20 },
        data: _ctx.data,
        style: { height: unref(isMounted) ? "100%" : "auto" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            if (_ctx.showTooltip) {
              _push2(ssrRenderComponent(unref(_sfc_main$3), {
                colors: colors.value,
                items: legendItems.value,
                index: index.value,
                "custom-tooltip": _ctx.customTooltip
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.categories, (category, i) => {
              var _a3;
              _push2(ssrRenderComponent(unref(VisLine), {
                x: (d, i2) => i2,
                y: (d) => d[category],
                "curve-type": _ctx.curveType,
                color: colors.value[i],
                attributes: {
                  [unref(Line).selectors.line]: {
                    opacity: ((_a3 = legendItems.value.find((item) => item.name === category)) == null ? void 0 : _a3.inactive) ? _ctx.filterOpacity : 1
                  }
                }
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            if (_ctx.showXAxis) {
              _push2(ssrRenderComponent(unref(VisAxis), {
                type: "x",
                "tick-format": (_a2 = _ctx.xFormatter) != null ? _a2 : (v) => {
                  var _a3;
                  return (_a3 = _ctx.data[v]) == null ? void 0 : _a3[index.value];
                },
                "grid-line": false,
                "tick-line": false,
                "tick-text-color": "hsl(var(--vis-text-color))"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.showYAxis) {
              _push2(ssrRenderComponent(unref(VisAxis), {
                type: "y",
                "tick-line": false,
                "tick-format": _ctx.yFormatter,
                "domain-line": false,
                "grid-line": _ctx.showGridLine,
                attributes: {
                  [unref(Axis).selectors.grid]: {
                    class: "text-muted"
                  }
                },
                "tick-text-color": "hsl(var(--vis-text-color))"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              _ctx.showTooltip ? (openBlock(), createBlock(unref(_sfc_main$3), {
                key: 0,
                colors: colors.value,
                items: legendItems.value,
                index: index.value,
                "custom-tooltip": _ctx.customTooltip
              }, null, 8, ["colors", "items", "index", "custom-tooltip"])) : createCommentVNode("", true),
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.categories, (category, i) => {
                var _a3;
                return openBlock(), createBlock(unref(VisLine), {
                  key: category,
                  x: (d, i2) => i2,
                  y: (d) => d[category],
                  "curve-type": _ctx.curveType,
                  color: colors.value[i],
                  attributes: {
                    [unref(Line).selectors.line]: {
                      opacity: ((_a3 = legendItems.value.find((item) => item.name === category)) == null ? void 0 : _a3.inactive) ? _ctx.filterOpacity : 1
                    }
                  }
                }, null, 8, ["x", "y", "curve-type", "color", "attributes"]);
              }), 128)),
              _ctx.showXAxis ? (openBlock(), createBlock(unref(VisAxis), {
                key: 1,
                type: "x",
                "tick-format": (_b = _ctx.xFormatter) != null ? _b : (v) => {
                  var _a3;
                  return (_a3 = _ctx.data[v]) == null ? void 0 : _a3[index.value];
                },
                "grid-line": false,
                "tick-line": false,
                "tick-text-color": "hsl(var(--vis-text-color))"
              }, null, 8, ["tick-format"])) : createCommentVNode("", true),
              _ctx.showYAxis ? (openBlock(), createBlock(unref(VisAxis), {
                key: 2,
                type: "y",
                "tick-line": false,
                "tick-format": _ctx.yFormatter,
                "domain-line": false,
                "grid-line": _ctx.showGridLine,
                attributes: {
                  [unref(Axis).selectors.grid]: {
                    class: "text-muted"
                  }
                },
                "tick-text-color": "hsl(var(--vis-text-color))"
              }, null, 8, ["tick-format", "grid-line", "attributes"])) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/chart-line/LineChart.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BarChart",
  __ssrInlineRender: true,
  props: {
    data: {},
    categories: {},
    index: {},
    colors: {},
    margin: { default: () => ({ top: 0, bottom: 0, left: 0, right: 0 }) },
    filterOpacity: { default: 0.2 },
    xFormatter: {},
    yFormatter: {},
    showXAxis: { type: Boolean, default: true },
    showYAxis: { type: Boolean, default: true },
    showTooltip: { type: Boolean, default: true },
    showLegend: { type: Boolean, default: true },
    showGridLine: { type: Boolean, default: true },
    customTooltip: {},
    type: { default: "grouped" },
    roundedCorners: { default: 0 }
  },
  emits: ["legendItemClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const index = computed(() => props.index);
    const colors = computed(() => {
      var _a;
      return ((_a = props.colors) == null ? void 0 : _a.length) ? props.colors : defaultColors(props.categories.length);
    });
    const legendItems = ref(props.categories.map((category, i) => ({
      name: category,
      color: colors.value[i],
      inactive: false
    })));
    const isMounted = useMounted();
    function handleLegendItemClick(d, i) {
      emits("legendItemClick", d, i);
    }
    const VisBarComponent = computed(() => props.type === "grouped" ? VisGroupedBar : VisStackedBar);
    const selectorsBar = computed(() => props.type === "grouped" ? GroupedBar.selectors.bar : StackedBar.selectors.bar);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("w-full h-[400px] flex flex-col items-end", (_a = _ctx.$attrs.class) != null ? _a : "")
      }, _attrs))}>`);
      if (_ctx.showLegend) {
        _push(ssrRenderComponent(unref(_sfc_main$4), {
          items: legendItems.value,
          "onUpdate:items": ($event) => legendItems.value = $event,
          onLegendItemClick: handleLegendItemClick
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(VisXYContainer), {
        data: _ctx.data,
        style: { height: unref(isMounted) ? "100%" : "auto" },
        margin: _ctx.margin
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            if (_ctx.showTooltip) {
              _push2(ssrRenderComponent(unref(_sfc_main$3), {
                colors: colors.value,
                items: legendItems.value,
                "custom-tooltip": _ctx.customTooltip,
                index: index.value
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(VisBarComponent), {
              x: (d, i) => i,
              y: _ctx.categories.map((category) => (d) => d[category]),
              color: colors.value,
              "rounded-corners": _ctx.roundedCorners,
              "bar-padding": 0.05,
              attributes: {
                [selectorsBar.value]: {
                  opacity: (d, i) => {
                    var _a3;
                    const pos = i % _ctx.categories.length;
                    return ((_a3 = legendItems.value[pos]) == null ? void 0 : _a3.inactive) ? _ctx.filterOpacity : 1;
                  }
                }
              }
            }, null, _parent2, _scopeId));
            if (_ctx.showXAxis) {
              _push2(ssrRenderComponent(unref(VisAxis), {
                type: "x",
                "tick-format": (_a2 = _ctx.xFormatter) != null ? _a2 : (v) => {
                  var _a3;
                  return (_a3 = _ctx.data[v]) == null ? void 0 : _a3[index.value];
                },
                "grid-line": false,
                "tick-line": false,
                "tick-text-color": "hsl(var(--vis-text-color))"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.showYAxis) {
              _push2(ssrRenderComponent(unref(VisAxis), {
                type: "y",
                "tick-line": false,
                "tick-format": _ctx.yFormatter,
                "domain-line": false,
                "grid-line": _ctx.showGridLine,
                attributes: {
                  [unref(Axis).selectors.grid]: {
                    class: "text-muted"
                  }
                },
                "tick-text-color": "hsl(var(--vis-text-color))"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              _ctx.showTooltip ? (openBlock(), createBlock(unref(_sfc_main$3), {
                key: 0,
                colors: colors.value,
                items: legendItems.value,
                "custom-tooltip": _ctx.customTooltip,
                index: index.value
              }, null, 8, ["colors", "items", "custom-tooltip", "index"])) : createCommentVNode("", true),
              createVNode(unref(VisBarComponent), {
                x: (d, i) => i,
                y: _ctx.categories.map((category) => (d) => d[category]),
                color: colors.value,
                "rounded-corners": _ctx.roundedCorners,
                "bar-padding": 0.05,
                attributes: {
                  [selectorsBar.value]: {
                    opacity: (d, i) => {
                      var _a3;
                      const pos = i % _ctx.categories.length;
                      return ((_a3 = legendItems.value[pos]) == null ? void 0 : _a3.inactive) ? _ctx.filterOpacity : 1;
                    }
                  }
                }
              }, null, 8, ["x", "y", "color", "rounded-corners", "attributes"]),
              _ctx.showXAxis ? (openBlock(), createBlock(unref(VisAxis), {
                key: 1,
                type: "x",
                "tick-format": (_b = _ctx.xFormatter) != null ? _b : (v) => {
                  var _a3;
                  return (_a3 = _ctx.data[v]) == null ? void 0 : _a3[index.value];
                },
                "grid-line": false,
                "tick-line": false,
                "tick-text-color": "hsl(var(--vis-text-color))"
              }, null, 8, ["tick-format"])) : createCommentVNode("", true),
              _ctx.showYAxis ? (openBlock(), createBlock(unref(VisAxis), {
                key: 2,
                type: "y",
                "tick-line": false,
                "tick-format": _ctx.yFormatter,
                "domain-line": false,
                "grid-line": _ctx.showGridLine,
                attributes: {
                  [unref(Axis).selectors.grid]: {
                    class: "text-muted"
                  }
                },
                "tick-text-color": "hsl(var(--vis-text-color))"
              }, null, 8, ["tick-format", "grid-line", "attributes"])) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/chart-bar/BarChart.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V;
    const stock = useStock().value;
    useRoute();
    const data = ref([]);
    const indicator = ref([
      {
        name: "\uC624\uBC84\uBDF0",
        discrption: "\uC885\uBAA9\uC758 \uC804\uBC18\uC744 \uB098\uD0C0\uB0B4\uB294 \uAC1C\uC694 \uC815\uBCF4",
        data: [
          { label: "\uC885\uBAA9\uBA85", value: stock == null ? void 0 : stock.Name },
          {
            label: "\uD604\uC7AC\uAC00",
            value: (stock == null ? void 0 : stock.Last.toLocaleString()) + " " + (stock == null ? void 0 : stock.currency)
          },
          // 예시: "100,700 KRW"
          { label: "\uBCC0\uD654 %", value: ((_a = stock == null ? void 0 : stock.ChgPct) == null ? void 0 : _a.toFixed(2)) + "%" },
          // 예시: "+2.27%"
          { label: "\uAC70\uB798\uB7C9", value: stock == null ? void 0 : stock.Volume.toLocaleString() },
          // 예시: "1,731 M"
          {
            label: "\uC0C1\uB300\uC801 \uAC70\uB798\uB7C9",
            value: (_b = Number(stock == null ? void 0 : stock.relative_volume_10d_calc) / 100) == null ? void 0 : _b.toFixed(2)
          },
          // 예시: "1.15"
          {
            label: "\uC2DC\uAC00\uCD1D\uC561",
            value: ((_c = (stock == null ? void 0 : stock.market_cap_basic) / 1e6) == null ? void 0 : _c.toFixed(2)) + " T KRW"
          },
          // 예시: "507.46 T KRW"
          { label: "P/E", value: (_d = stock == null ? void 0 : stock.price_earnings_ttm) == null ? void 0 : _d.toFixed(2) },
          // 예시: "21.76"
          {
            label: "EPS \uD76C\uC11D \uC21C\uB9C8\uC9C4",
            value: ((_e = stock == null ? void 0 : stock.earnings_per_share_diluted_ttm) == null ? void 0 : _e.toFixed(2)) + " KRW"
          },
          // 예시: "2899.18 KRW"
          {
            label: "EPS \uD76C\uC11D \uC131\uC7A5 TTM YoY",
            value: ((_f = stock == null ? void 0 : stock.earnings_per_share_diluted_yoy_growth_ttm) == null ? void 0 : _f.toFixed(2)) + "%"
          },
          // 예시: "-56.24%"
          {
            label: "\uBC30\uB2F9 \uC218\uC775% \uC21C\uB9C8\uC9C4",
            value: ((_g = stock == null ? void 0 : stock.dividends_yield) == null ? void 0 : _g.toFixed(2)) + "%"
          },
          // 예시: "2.34%"
          { label: "\uC139\uD130", value: stock == null ? void 0 : stock.sector },
          // 예시: "전자 기술"
          {
            label: "\uC560\uB110\uB9AC\uC2A4\uD2B8 \uD3C9\uC810",
            value: (stock == null ? void 0 : stock.recommendation_mark) > 3 ? "\uC2A4\uD2B8\uB871 \uBC14\uC774" : "\uD640\uB4DC"
          }
          // 조건부 예시
        ]
      },
      {
        name: "\uC131\uACFC",
        discrption: "\uC8FC\uAC00\uC758 \uC0C1\uC2B9 \uB610\uB294 \uD558\uB77D\uC744 \uB098\uD0C0\uB0C4",
        data: [
          { label: "\uD3EC\uD37C\uBA3C\uC2A4 % 1\uC8FC", value: ((_h = stock == null ? void 0 : stock["Perf.W"]) == null ? void 0 : _h.toFixed(2)) + "%" },
          { label: "\uD3EC\uD37C\uBA3C\uC2A4 % 1\uB2EC", value: ((_i = stock == null ? void 0 : stock["Perf.1M"]) == null ? void 0 : _i.toFixed(2)) + "%" },
          { label: "\uD3EC\uD37C\uBA3C\uC2A4 % 3\uB2EC", value: ((_j = stock == null ? void 0 : stock["Perf.3M"]) == null ? void 0 : _j.toFixed(2)) + "%" },
          { label: "\uD3EC\uD37C\uBA3C\uC2A4 % 6\uB2EC", value: ((_k = stock == null ? void 0 : stock["Perf.6M"]) == null ? void 0 : _k.toFixed(2)) + "%" },
          { label: "\uD37C\uD3EC\uBA3C\uC2A4 YTD", value: ((_l = stock == null ? void 0 : stock["Perf.YTD"]) == null ? void 0 : _l.toFixed(2)) + "%" },
          { label: "\uD37C\uD3EC\uBA3C\uC2A4 % 1Y", value: ((_m = stock == null ? void 0 : stock["Perf.Y"]) == null ? void 0 : _m.toFixed(2)) + "%" },
          { label: "\uD37C\uD3EC\uBA3C\uC2A4 % 5Y", value: ((_n = stock == null ? void 0 : stock["Perf.5Y"]) == null ? void 0 : _n.toFixed(2)) + "%" },
          { label: "\uD37C\uD3EC\uBA3C\uC2A4 % 10Y", value: ((_o = stock == null ? void 0 : stock["Perf.10Y"]) == null ? void 0 : _o.toFixed(2)) + "%" },
          { label: "\uD37C\uD3EC\uBA3C\uC2A4 % ALL", value: ((_p = stock == null ? void 0 : stock["Perf.All"]) == null ? void 0 : _p.toFixed(2)) + "%" },
          { label: "\uBCC0\uB3D9\uC131 1\uC8FC", value: ((_q = stock == null ? void 0 : stock["Volatility.W"]) == null ? void 0 : _q.toFixed(2)) + "%" },
          { label: "\uBCC0\uB3D9\uC131 1\uB2EC", value: ((_r = stock == null ? void 0 : stock["Volatility.M"]) == null ? void 0 : _r.toFixed(2)) + "%" }
        ]
      },
      {
        name: "\uC2DC\uAC04\uC678",
        discrption: "\uD3D0\uC7A5\uB41C \uD6C4\uC5D0 \uBC1C\uC0DD\uD558\uB294 \uC8FC\uC2DD \uAC70\uB798",
        data: [
          {
            label: "\uD504\uB9AC-\uB9C8\uCF13 \uD074\uB85C\uC988",
            value: (stock == null ? void 0 : stock.premarket_close) !== null ? (_s = stock == null ? void 0 : stock.premarket_close) == null ? void 0 : _s.toFixed(2) : "-"
          },
          {
            label: "\uD504\uB9AC-\uB9C8\uCF13 \uCCB4\uC778\uC9C0 %",
            value: (stock == null ? void 0 : stock.premarket_change) !== null ? ((_t = (stock == null ? void 0 : stock.premarket_change) * 100) == null ? void 0 : _t.toFixed(2)) + "%" : "-"
          },
          {
            label: "\uD504\uB9AC-\uB9C8\uCF13 \uAC2D %",
            value: (stock == null ? void 0 : stock.premarket_gap) !== null ? ((_u = (stock == null ? void 0 : stock.premarket_gap) * 100) == null ? void 0 : _u.toFixed(2)) + "%" : "-"
          },
          {
            label: "\uD504\uB9AC-\uB9C8\uCF13 \uBCFC\uB968",
            value: (stock == null ? void 0 : stock.premarket_volume) !== null ? (_v = stock == null ? void 0 : stock.premarket_volume) == null ? void 0 : _v.toString() : "-"
          },
          { label: "\uAC2D %", value: ((_w = stock == null ? void 0 : stock.gap) == null ? void 0 : _w.toFixed(2)) + "%" },
          { label: "\uAC70\uB798\uB7C9", value: "+" + ((_x = stock == null ? void 0 : stock.volume_change) == null ? void 0 : _x.toFixed(2)) + "%" },
          {
            label: "\uBCFC\uB968 \uBCC0\uD654 %",
            value: "+" + ((_y = ((stock == null ? void 0 : stock.volume) / (stock == null ? void 0 : stock.AvgVolume) - 1) * 100) == null ? void 0 : _y.toFixed(2)) + "%"
          },
          {
            label: "\uD3EC\uC2A4\uD2B8-\uB9C8\uCF13 \uD074\uB85C\uC988",
            value: (stock == null ? void 0 : stock.postmarket_close) !== null ? (_z = stock == null ? void 0 : stock.postmarket_close) == null ? void 0 : _z.toFixed(2) : "-"
          },
          {
            label: "\uD3EC\uC2A4\uD2B8-\uB9C8\uCF13 \uCCB4\uC778\uC9C0 %",
            value: (stock == null ? void 0 : stock.postmarket_change) !== null ? ((_A = (stock == null ? void 0 : stock.postmarket_change) * 100) == null ? void 0 : _A.toFixed(2)) + "%" : "-"
          },
          {
            label: "\uD3EC\uC2A4\uD2B8-\uB9C8\uCF13 \uBCFC\uB968",
            value: (stock == null ? void 0 : stock.postmarket_volume) !== null ? (_B = stock == null ? void 0 : stock.postmarket_volume) == null ? void 0 : _B.toString() : "-"
          }
        ]
      },
      {
        name: "\uD3C9\uAC00",
        discrption: "\uC8FC\uC2DD\uC758 \uD604\uC7AC \uAC00\uCE58\uB97C \uB098\uD0C0\uB0C4",
        data: [
          {
            label: "\uC2DC\uAC00\uCD1D\uC561 \uC2E4\uC801 % 1Y",
            value: `${stock == null ? void 0 : stock["Perf.1Y.MarketCap"]}%`
          },
          {
            label: "PEG \uC21C\uB9C8\uC9C4",
            value: (stock == null ? void 0 : stock.price_earnings_growth_ttm) ? stock == null ? void 0 : stock.price_earnings_growth_ttm : "-"
          },
          {
            label: "P/S",
            value: (stock == null ? void 0 : stock.price_sales_current) ? (_C = stock == null ? void 0 : stock.price_sales_current) == null ? void 0 : _C.toString() : "-"
          },
          { label: "P/B", value: (_D = stock == null ? void 0 : stock.price_book_fq) == null ? void 0 : _D.toString() },
          {
            label: "P/CF",
            value: (_E = stock == null ? void 0 : stock.price_to_cash_f_operating_activities_ttm) == null ? void 0 : _E.toString()
          },
          {
            label: "P/FCF",
            value: (stock == null ? void 0 : stock.price_free_cash_flow_ttm) ? (_F = stock == null ? void 0 : stock.price_free_cash_flow_ttm) == null ? void 0 : _F.toString() : "-"
          },
          {
            label: "\uD504\uB77C\uC774\uC2A4 / \uCE90\uC26C",
            value: (_G = stock == null ? void 0 : stock.price_to_cash_ratio) == null ? void 0 : _G.toString()
          },
          { label: "\uAE30\uC5C5\uAC00\uCE58", value: `${stock == null ? void 0 : stock.enterprise_value_current} T` },
          {
            label: "EV / \uC218\uC775 \uC21C\uB9C8\uC9C4",
            value: (_H = stock == null ? void 0 : stock.enterprise_value_to_revenue_ttm) == null ? void 0 : _H.toString()
          },
          {
            label: "EV / \uC5D0\uBE44\uD0C0 \uC21C\uB9C8\uC9C4",
            value: (_I = stock == null ? void 0 : stock.enterprise_value_to_ebit_ttm) == null ? void 0 : _I.toString()
          },
          {
            label: "EV / EBITDA \uC21C\uB9C8\uC9C4",
            value: (_J = stock == null ? void 0 : stock.enterprise_value_ebitda_ttm) == null ? void 0 : _J.toString()
          }
        ]
      },
      {
        name: "\uBC30\uB2F9",
        discrption: "\uC8FC\uC8FC\uB4E4\uC5D0\uAC8C \uC9C0\uAE09\uD558\uB294 \uC774\uC775\uC758 \uC77C\uBD80",
        data: [
          {
            label: "\uC8FC\uB2F9 \uBC30\uB2F9\uAE08 FY",
            value: `${(_K = stock == null ? void 0 : stock.dps_common_stock_prim_issue_fy) == null ? void 0 : _K.toFixed(2)} KRW`
          },
          {
            label: "\uC8FC\uB2F9 \uBC30\uB2F9\uAE08 FQ",
            value: (stock == null ? void 0 : stock.dps_common_stock_prim_issue_fq) ? `${(_L = stock == null ? void 0 : stock.dps_common_stock_prim_issue_fq) == null ? void 0 : _L.toFixed(2)} KRW` : "-"
          },
          {
            label: "\uBC30\uB2F9 \uC218\uC775 % \uC21C\uB9C8\uC9C4",
            value: `${(_M = stock == null ? void 0 : stock.dividends_yield) == null ? void 0 : _M.toFixed(2)}%`
          },
          {
            label: "\uBC30\uB2F9 \uC218\uC775\uB960 %",
            value: `${(_N = stock == null ? void 0 : stock.dividends_yield_current) == null ? void 0 : _N.toFixed(2)}%`
          },
          {
            label: "\uBC30\uB2F9 \uBE44\uC728 % \uC21C\uB9C8\uC9C4",
            value: `${(_O = stock == null ? void 0 : stock.dividend_payout_ratio_ttm) == null ? void 0 : _O.toFixed(2)}%`
          },
          {
            label: "DPS \uC131\uC7A5 \uC5F0\uAC04 YoY",
            value: `${(_P = stock == null ? void 0 : stock.dps_common_stock_prim_issue_yoy_growth_fy) == null ? void 0 : _P.toFixed(
              2
            )}%`
          },
          {
            label: "\uC5F0\uC18D \uBC30\uB2F9 \uC9C0\uBD88",
            value: (_Q = stock == null ? void 0 : stock.continuous_dividend_payout) == null ? void 0 : _Q.toString()
          },
          {
            label: "\uC5F0\uC18D \uBC30\uB2F9 \uC131\uC7A5",
            value: (_R = stock == null ? void 0 : stock.continuous_dividend_growth) == null ? void 0 : _R.toString()
          }
        ]
      },
      {
        name: "\uC218\uC775\uC131",
        discrption: "\uD68C\uC0AC \uC218\uC775\uACFC \uAD00\uB828\uB41C \uC9C0\uD45C",
        data: [
          { label: "\uCD1D\uB9C8\uC9C4", value: `${stock.gross_margin_ttm.toFixed(2)}%` },
          { label: "\uC601\uC5C5\uB9C8\uC9C4", value: `${stock.operating_margin_ttm.toFixed(2)}%` },
          { label: "\uC138\uC804 \uB9C8\uC9C4", value: `${stock.pre_tax_margin_ttm.toFixed(2)}%` },
          { label: "\uB137 \uB9C8\uC9C4", value: `${stock.net_margin_ttm.toFixed(2)}%` },
          {
            label: "FCF \uB9C8\uC9C4",
            value: `${stock.free_cash_flow_margin_ttm.toFixed(2)}%`
          },
          { label: "ROA", value: `${stock.return_on_assets_fq.toFixed(2)}%` },
          { label: "ROE", value: `${stock.return_on_equity_fq.toFixed(2)}%` },
          {
            label: "\uD22C\uD558\uC790\uBCF8\uC218\uC775\uB960",
            value: `${stock.return_on_invested_capital_fq.toFixed(2)}%`
          },
          {
            label: "R&D \uBE44\uC728",
            value: `${stock.research_and_dev_ratio_ttm.toFixed(2)}%`
          },
          {
            label: "\uD310\uAD00\uBE44\uC728",
            value: `${stock.sell_gen_admin_exp_other_ratio_ttm.toFixed(2)}%`
          }
        ]
      },
      {
        name: "\uC190\uC775 \uACC4\uC0B0",
        discrption: "\uD68C\uC0AC\uC758 \uC218\uC775\uACFC \uBE44\uC6A9\uC744 \uC694\uC57D",
        data: [
          { label: "\uC218\uC785", value: stock == null ? void 0 : stock.FundamentalRevenue },
          { label: "\uB9E4\uCD9C \uC131\uC7A5\uB960", value: `${stock == null ? void 0 : stock.PerformanceYear}%` },
          { label: "\uCD1D\uC218\uC775", value: (_S = stock == null ? void 0 : stock.gross_margin_ttm) == null ? void 0 : _S.toString() },
          { label: "\uC601\uC5C5 \uC218\uC785", value: (_T = stock == null ? void 0 : stock.operating_margin_ttm) == null ? void 0 : _T.toString() },
          { label: "\uC21C\uC774\uC775", value: (_U = stock == null ? void 0 : stock.net_margin_ttm) == null ? void 0 : _U.toString() },
          { label: "\uC138\uC804\uC601\uC5C5\uC774\uC775", value: (_V = stock == null ? void 0 : stock.pre_tax_margin_ttm) == null ? void 0 : _V.toString() }
        ]
      },
      {
        name: "\uB300\uCC28 \uB300\uC870\uD45C",
        discrption: "\uD68C\uC0AC\uC758 \uC790\uC0B0, \uBD80\uCC44, \uC790\uBCF8\uC744 \uC694\uC57D",
        data: [
          { label: "\uC218\uC785", value: "267.106" },
          { label: "\uB9E4\uCD9C \uC131\uC7A5\uB960", value: "-7.32%" },
          { label: "\uCD1D\uC218\uC775", value: "84.484" },
          { label: "\uC601\uC5C5 \uC218\uC785", value: "12.523" },
          { label: "\uC21C\uC774\uC775", value: "19.693" },
          { label: "\uC138\uC804\uC601\uC5C5\uC774\uC775", value: "51.554" }
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LineChart = _sfc_main$2;
      const _component_BarChart = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex flex-col bg-white divide-y" }, _attrs))}><!--[-->`);
      ssrRenderList(indicator.value, (itmes) => {
        _push(`<div class="flex"><div class="flex flex-col px-2 py-1 w-32"><div class="w-32 h-full flex font-bold text-lg">${ssrInterpolate(itmes.name)}</div><div class="text-xs text-neutral-400">${ssrInterpolate(itmes.discrption)}</div></div><div class="flex items-center"><!--[-->`);
        ssrRenderList(itmes.data, (item) => {
          _push(`<div class="h-full px-2 py-1 flex items-center hover:bg-neutral-100 cursor-pointer"><div><div class="text-xs text-neutral-400">${ssrInterpolate(item.label)}</div><div>${ssrInterpolate(item.value)}</div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--><div><div class="flex divide-x w-fit border-r"><div class="px-4 py-1">\uAC04\uACA9</div><div class="px-2 py-1 bg-blue-50">5</div><div class="px-2 py-1">15</div><div class="px-2 py-1">30</div><div class="px-2 py-1">1H</div><div class="px-2 py-1">5H</div><div class="px-2 py-1">1D</div><div class="px-2 py-1">1W</div><div class="px-2 py-1">1M</div></div></div><div class="relative h-44 overflow-hidden py-2 bg-white">`);
      _push(ssrRenderComponent(_component_LineChart, {
        class: "bg-white h-full w-full z-10",
        data: data.value,
        index: "date",
        colors: ["#3B82F6"],
        categories: ["\uC2DC\uAC00"],
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        "show-legend": false,
        "show-x-axis": false,
        "show-y-axis": false
      }, null, _parent));
      _push(ssrRenderComponent(_component_BarChart, {
        class: "absolute bottom-2 left-0 h-20 z-0",
        data: data.value,
        index: "date",
        colors: ["#3B82F6"],
        categories: ["\uAC70\uB798\uB7C9"],
        margin: { top: 0, right: 18, bottom: 0, left: 20 },
        "show-grid-line": false,
        "show-tooltip": false,
        "show-legend": false,
        "show-x-axis": false,
        "show-y-axis": false
      }, null, _parent));
      _push(`</div><div><div class="flex divide-x w-fit border-r"><div class="px-4 py-1">\uBC94\uC704</div><div class="px-2 py-1 bg-blue-50">\uC77C\uC77C</div><div class="px-2 py-1">1\uC8FC</div><div class="px-2 py-1">1\uB2EC</div><div class="px-2 py-1">3\uB2EC</div><div class="px-2 py-1">6\uB2EC</div><div class="px-2 py-1">1\uB144</div><div class="px-2 py-1">5\uB144</div><div class="px-2 py-1">\uCD5C\uB300</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/stock/[code]/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-6lawXTxt.mjs.map
