import { useSSRContext, defineComponent, computed, ref, mergeProps, unref, withCtx, openBlock, createBlock, createCommentVNode, Fragment, renderList, renderSlot, createTextVNode, toDisplayString, createVNode, createApp } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { Separator } from 'radix-vue';
import { c as cn, _ as _sfc_main$a } from './Card-C-jw3V7W.mjs';
import { CurveType, Line, Axis, GroupedBar, StackedBar, omit } from '@unovis/ts';
import { VisXYContainer, VisLine, VisAxis, VisBulletLegend, VisTooltip, VisCrosshair, VisGroupedBar, VisStackedBar } from '@unovis/vue';
import { useMounted } from '@vueuse/core';
import { d as useRoute } from './server.mjs';
import 'clsx';
import 'tailwind-merge';
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

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/CardHeader.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/CardTitle.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/CardContent.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Separator",
  __ssrInlineRender: true,
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Separator), mergeProps(delegatedProps.value, {
        class: unref(cn)("shrink-0 bg-border", props.orientation === "vertical" ? "w-px h-full" : "h-px w-full", props.class)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/separator/Separator.vue");
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
      _push(ssrRenderComponent(unref(_sfc_main$a), mergeProps({ class: "text-sm" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.title) {
              _push2(ssrRenderComponent(unref(_sfc_main$9), { class: "p-3 border-b" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$8), null, {
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
                      createVNode(unref(_sfc_main$8), null, {
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
            _push2(ssrRenderComponent(unref(_sfc_main$7), { class: "p-3 min-w-[180px] flex flex-col gap-1" }, {
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
              _ctx.title ? (openBlock(), createBlock(unref(_sfc_main$9), {
                key: 0,
                class: "p-3 border-b"
              }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$8), null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.title), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(unref(_sfc_main$7), { class: "p-3 min-w-[180px] flex flex-col gap-1" }, {
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
    useRoute();
    const data = ref([]);
    const indicator = ref([
      {
        name: "\uC624\uBC84\uBDF0",
        discrption: "\uC885\uBAA9\uC758 \uC804\uBC18\uC744 \uB098\uD0C0\uB0B4\uB294 \uAC1C\uC694 \uC815\uBCF4\uC785\uB2C8\uB2E4.",
        data: [
          { label: "\uC885\uBAA9\uBA85", value: "LG \uC804\uC790" },
          { label: "\uD604\uC7AC\uAC00", value: "100,700" },
          { label: "\uD604\uC7AC\uAC00", value: "+0.00%" },
          { label: "\uBCC0\uD654 %", value: "+2.27%" },
          { label: "\uAC70\uB798\uB7C9", value: "1,731 M" },
          { label: "\uC0C1\uB300\uC801 \uAC70\uB798\uB7C9", value: "1.15" },
          { label: "\uC2DC\uAC00\uCD1D\uC561", value: "507.46 T KRW" },
          { label: "P/E", value: "21.76" },
          { label: "EPS \uD76C\uC11D \uC21C\uB9C8\uC9C4", value: "2899.18 KRW" },
          { label: "EPS \uD76C\uC11D \uC131\uC7A5 TTM YoY", value: "-56.24%" },
          { label: "\uBC30\uB2F9 \uC218\uC775% \uC21C\uB9C8\uC9C4", value: "2.34%" },
          { label: "\uC139\uD130", value: "\uC804\uC790 \uAE30\uC220" },
          { label: "\uC560\uB110\uB9AC\uC2A4\uD2B8 \uD3C9\uC810", value: "\uC2A4\uD2B8\uB871 \uBC14\uC774" }
        ]
      },
      {
        name: "\uC131\uACFC",
        data: [
          { label: "\uD3EC\uD37C\uBA3C\uC2A4 % 1\uC8FC", value: "0.00%" },
          { label: "\uD3EC\uD37C\uBA3C\uC2A4 % 1\uB2EC", value: "-2.47%" },
          { label: "\uD3EC\uD37C\uBA3C\uC2A4 % 3\uB2EC", value: "-0.16%" },
          { label: "\uD3EC\uD37C\uBA3C\uC2A4 % 6\uB2EC", value: "+5.34%" },
          { label: "\uD37C\uD3EC\uBA3C\uC2A4 YTD", value: "+1.28%" },
          { label: "\uD37C\uD3EC\uBA3C\uC2A4 % 1Y", value: "+2.94%" },
          { label: "\uD37C\uD3EC\uBA3C\uC2A4 % 5Y", value: "+77.75%" },
          { label: "\uD37C\uD3EC\uBA3C\uC2A4 % 10Y", value: "+185.00%" },
          { label: "\uD37C\uD3EC\uBA3C\uC2A4 % ALL", value: "+1395.26%" },
          { label: "\uBCC0\uB3D9\uC131 1\uC8FC", value: "2.17%" },
          { label: "\uBCC0\uB3D9\uC131 1\uB2EC", value: "2.08%" }
        ]
      },
      {
        name: "\uC2DC\uAC04\uC678",
        data: [
          { label: "\uD504\uB9AC-\uB9C8\uCF13 \uD074\uB85C\uC988", value: "-" },
          { label: "\uD504\uB9AC-\uB9C8\uCF13 \uCCB4\uC778\uC9C0 %", value: "-" },
          { label: "\uD504\uB9AC-\uB9C8\uCF13 \uAC2D %", value: "-" },
          { label: "\uD504\uB9AC-\uB9C8\uCF13 \uBCFC\uB968", value: "-" },
          { label: "\uAC2D %", value: "+2.48%" },
          { label: "\uAC70\uB798\uB7C9", value: "+185.00%" },
          { label: "\uBCFC\uB968 \uBCC0\uD654 %", value: "+75.43%" },
          { label: "\uD3EC\uC2A4\uD2B8-\uB9C8\uCF13 \uD074\uB85C\uC988", value: "-" },
          { label: "\uD3EC\uC2A4\uD2B8-\uB9C8\uCF13 \uCCB4\uC778\uC9C0 %", value: "-" },
          { label: "\uD3EC\uC2A4\uD2B8-\uB9C8\uCF13 \uBCFC\uB968", value: "-" }
        ]
      },
      {
        name: "\uD3C9\uAC00",
        data: [
          { label: "\uC2DC\uAC00\uCD1D\uC561 \uC2E4\uC801 % 1Y", value: "6.86%" },
          { label: "PEG \uC21C\uB9C8\uC9C4", value: "21.76" },
          { label: "P/S", value: "-" },
          { label: "P/B", value: "1.57" },
          { label: "P/CF", value: "1.18" },
          { label: "P/FCF", value: "-" },
          { label: "\uD504\uB77C\uC774\uC2A4 / \uCE90\uC26C", value: "6.92" },
          { label: "\uAE30\uC5C5\uAC00\uCE58", value: "435.173 T" },
          { label: "EV / \uC218\uC775 \uC21C\uB9C8\uC9C4", value: "1.63" },
          { label: "EV / \uC5D0\uBE44\uD0C0 \uC21C\uB9C8\uC9C4", value: "34.75" },
          { label: "EV / EBITDA \uC21C\uB9C8\uC9C4", value: "8.44" }
        ]
      },
      {
        name: "\uBC30\uB2F9",
        data: [
          { label: "\uC8FC\uB2F9 \uBC30\uB2F9\uAE08 FY", value: "1444.00 KRW" },
          { label: "\uC8FC\uB2F9 \uBC30\uB2F9\uAE08 FQ", value: "361.00 KRW" },
          { label: "\uBC30\uB2F9 \uC218\uC775 % \uC21C\uB9C8\uC9C4", value: "1.89%" },
          { label: "\uBC30\uB2F9 \uC218\uC775\uB960 %", value: "1.89%" },
          { label: "\uBC30\uB2F9 \uBE44\uC728 % \uC21C\uB9C8\uC9C4", value: "49.81%" },
          { label: "DPS \uC131\uC7A5 \uC5F0\uAC04 YoY", value: "0.00%" },
          { label: "\uC5F0\uC18D \uBC30\uB2F9 \uC9C0\uBD88", value: "8" },
          { label: "\uC5F0\uC18D \uBC30\uB2F9 \uC131\uC7A5", value: "0" }
        ]
      },
      {
        name: "\uC218\uC775\uC131",
        data: [
          { label: "\uCD1D\uB9C8\uC9C4", value: "31.63%" },
          { label: "\uC601\uC5C5\uB9C8\uC9C4", value: "4.69%" },
          { label: "\uC138\uC804 \uB9C8\uC9C4", value: "5.99%" },
          { label: "\uB137 \uB9C8\uC9C4", value: "7.37%" },
          { label: "FCF \uB9C8\uC9C4", value: "-3.02%" },
          { label: "ROA", value: "4.26%" },
          { label: "ROE", value: "5.53%" },
          { label: "\uD22C\uD558\uC790\uBCF8\uC218\uC775\uB960", value: "5.46%" },
          { label: "R&D \uBE44\uC728", value: "11.08%" },
          { label: "\uD310\uAD00\uBE44\uC728", value: "15.86%" }
        ]
      },
      {
        name: "\uC190\uC775 \uACC4\uC0B0",
        data: [
          { label: "\uC218\uC785", value: "267.106" },
          { label: "\uB9E4\uCD9C \uC131\uC7A5\uB960", value: "-7.32%" },
          { label: "\uCD1D\uC218\uC775", value: "84.484" },
          { label: "\uC601\uC5C5 \uC218\uC785", value: "12.523" },
          { label: "\uC21C\uC774\uC775", value: "19.693" },
          { label: "\uC138\uC804\uC601\uC5C5\uC774\uC775", value: "51.554" }
        ]
      },
      {
        name: "\uB300\uCC28 \uB300\uC870\uD45C",
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
      const _component_Separator = _sfc_main$6;
      const _component_LineChart = _sfc_main$2;
      const _component_BarChart = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex flex-col bg-white divide-y" }, _attrs))}><!--[-->`);
      ssrRenderList(indicator.value, (itmes) => {
        _push(`<div class="flex flex-col px-4"><div class="w-32 h-full px-4 flex font-bold text-lg">${ssrInterpolate(itmes.name)}</div><div class="text-sm text-neutral-400">${ssrInterpolate(itmes.discrption)}</div>`);
        _push(ssrRenderComponent(_component_Separator, null, null, _parent));
        _push(`<div class="flex items-center"><!--[-->`);
        ssrRenderList(itmes.data, (item) => {
          _push(`<div class="h-full px-2 flex items-center hover:bg-neutral-100 cursor-pointer"><div><div class="text-xs text-neutral-400">${ssrInterpolate(item.label)}</div><div>${ssrInterpolate(item.value)}</div></div></div>`);
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
//# sourceMappingURL=_id_-B6LQZT5X.mjs.map
