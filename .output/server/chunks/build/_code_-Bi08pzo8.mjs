import { useSSRContext, defineComponent, ref, onUnmounted, computed, resolveComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { useForwardPropsEmits, SwitchRoot, SwitchThumb } from 'radix-vue';
import { c as cn } from './utils-H80jjgLf.mjs';
import { u as useRoute } from './server.mjs';
import { u as useState } from './state-_I5XcLqc.mjs';
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

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Switch",
  __ssrInlineRender: true,
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: Boolean },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    id: {},
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:checked"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SwitchRoot), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwitchThumb), {
              class: unref(cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwitchThumb), {
                class: unref(cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
              }, null, 8, ["class"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/switch/Switch.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Table",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full overflow-auto" }, _attrs))}><table class="${ssrRenderClass(unref(cn)("w-full caption-bottom text-sm", props.class))}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</table></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/Table.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TableBody",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<tbody${ssrRenderAttrs(mergeProps({
        class: unref(cn)("[&_tr:last-child]:border-0", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</tbody>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableBody.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TableCell",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<td${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "p-4 align-middle [&:has([role=checkbox])]:pr-0",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</td>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableCell.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TableHead",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<th${ssrRenderAttrs(mergeProps({
        class: unref(cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</th>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableHead.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TableHeader",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<thead${ssrRenderAttrs(mergeProps({
        class: unref(cn)("[&_tr]:border-b", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</thead>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TableRow",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<tr${ssrRenderAttrs(mergeProps({
        class: unref(cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</tr>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableRow.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "technicalTextColor",
  __ssrInlineRender: true,
  props: {
    technicalText: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: {
          "text-red-500": _ctx.technicalText === "strong_buy",
          "text-yellow-500": _ctx.technicalText === "buy",
          "text-gray-500": _ctx.technicalText === "neutral",
          "text-blue-500": _ctx.technicalText === "sell",
          "text-green-500": _ctx.technicalText === "strong_sell"
        }
      }, _attrs))}>${ssrInterpolate(_ctx.technicalText)}</span>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/technicalTextColor.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[code]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const stockList = useState("stockList", () => []);
    const intervalId = ref();
    const progressIntervalId = ref();
    const progress = ref(0);
    onUnmounted(() => {
      clearInterval(intervalId.value);
      clearInterval(progressIntervalId.value);
    });
    const sorting = ref("Name");
    const search = ref("");
    const viewRecentData = ref(false);
    const cStockList = computed(() => {
      const oneHourAgo = Date.now() - 3600 * 1e3;
      return stockList.value.map((stock) => ({
        ...stock,
        volumeRate: Math.round(stock.Volume / stock.AvgVolume * 100 * 10) / 10
      })).filter((stock) => !viewRecentData.value || viewRecentData.value && Number(stock.Time) * 1e3 >= oneHourAgo).filter((stock) => stock.Name.toLowerCase().includes(search.value.toLowerCase())).sort((a, b) => {
        if (sorting.value === "Name") {
          return a.Name.localeCompare(b.Name);
        } else if (sorting.value === "volumeRate") {
          return b.volumeRate - a.volumeRate;
        } else if (sorting.value === "Chg") {
          return b.Chg - a.Chg;
        } else if (sorting.value === "ChgPct") {
          return b.ChgPct - a.ChgPct;
        }
        return 0;
      }).slice(0, 100);
    });
    function timeAgo(timestamp) {
      const secondsAgo = Math.floor(((/* @__PURE__ */ new Date()).getTime() - timestamp * 1e3) / 1e3);
      const hours = Math.floor(secondsAgo / 3600);
      const minutes = Math.floor(secondsAgo % 3600 / 60);
      const seconds = secondsAgo % 60;
      return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} \uC804`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Switch = _sfc_main$8;
      const _component_Table = _sfc_main$7;
      const _component_TableHeader = _sfc_main$3;
      const _component_TableRow = _sfc_main$2;
      const _component_TableHead = _sfc_main$4;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_TableBody = _sfc_main$6;
      const _component_TableCell = _sfc_main$5;
      const _component_TechnicalTextColor = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col divide-y" }, _attrs))}><div class="h-1 bg-neutral-200"><div class="bg-red-500 h-1" style="${ssrRenderStyle({ width: `${unref(progress)}%` })}"></div></div><div class="flex divide-x border-r w-fit"><div class="px-4 py-2 bg-neutral-100"><input class="bg-neutral-100 focus:outline-none" type="text"${ssrRenderAttr("value", unref(search))} placeholder="search"></div><div class="px-4 py-2 text-neutral-400 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_Switch, {
        id: "airplane-mode",
        onClick: ($event) => viewRecentData.value = !unref(viewRecentData)
      }, null, _parent));
      _push(`\uCD5C\uADFC \uD55C\uC2DC\uAC04 \uC774\uB0B4 \uB370\uC774\uD130\uB9CC</div></div>`);
      _push(ssrRenderComponent(_component_Table, { class: "border-b" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TableHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TableRow, { class: "text-xs" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TableHead, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\uB098\uB77C`);
                            } else {
                              return [
                                createTextVNode("\uB098\uB77C")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableHead, {
                          onClick: ($event) => sorting.value = "Name",
                          class: "cursor-pointer font-bold"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uC774\uB984 `);
                              _push5(ssrRenderComponent(_component_font_awesome_icon, {
                                icon: ["fas", unref(sorting) == "Name" ? "sort-down" : "sort"]
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(" \uC774\uB984 "),
                                createVNode(_component_font_awesome_icon, {
                                  icon: ["fas", unref(sorting) == "Name" ? "sort-down" : "sort"]
                                }, null, 8, ["icon"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableHead, {
                          onClick: ($event) => sorting.value = "volumeRate",
                          class: "cursor-pointer font-bold"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uAC70\uB798\uB7C9 / \uD3C9\uADE0 \uAC70\uB798\uB7C9 (\uAC70\uB798\uB7C9\uB960) `);
                              _push5(ssrRenderComponent(_component_font_awesome_icon, {
                                icon: ["fas", unref(sorting) == "volumeRate" ? "sort-down" : "sort"]
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(" \uAC70\uB798\uB7C9 / \uD3C9\uADE0 \uAC70\uB798\uB7C9 (\uAC70\uB798\uB7C9\uB960) "),
                                createVNode(_component_font_awesome_icon, {
                                  icon: ["fas", unref(sorting) == "volumeRate" ? "sort-down" : "sort"]
                                }, null, 8, ["icon"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableHead, {
                          onClick: ($event) => sorting.value = "Chg",
                          class: "cursor-pointer font-bold"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\uBCC0\uB3D9\uCE58`);
                              _push5(ssrRenderComponent(_component_font_awesome_icon, {
                                icon: ["fas", unref(sorting) == "Chg" ? "sort-down" : "sort"]
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode("\uBCC0\uB3D9\uCE58"),
                                createVNode(_component_font_awesome_icon, {
                                  icon: ["fas", unref(sorting) == "Chg" ? "sort-down" : "sort"]
                                }, null, 8, ["icon"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableHead, {
                          onClick: ($event) => sorting.value = "ChgPct",
                          class: "cursor-pointer font-bold"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uBCC0\uB3D9\uB960 (%) `);
                              _push5(ssrRenderComponent(_component_font_awesome_icon, {
                                icon: ["fas", unref(sorting) == "ChgPct" ? "sort-down" : "sort"]
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(" \uBCC0\uB3D9\uB960 (%) "),
                                createVNode(_component_font_awesome_icon, {
                                  icon: ["fas", unref(sorting) == "ChgPct" ? "sort-down" : "sort"]
                                }, null, 8, ["icon"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableHead, { class: "font-bold" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uAC00\uACA9 (\uCD5C\uC800,\uB9C8\uC9C0\uB9C9,\uCD5C\uACE0) `);
                            } else {
                              return [
                                createTextVNode(" \uAC00\uACA9 (\uCD5C\uC800,\uB9C8\uC9C0\uB9C9,\uCD5C\uACE0) ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableHead, { class: "font-bold" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uC131\uACFC (\uC77C\uC77C,\uC8FC\uAC04,\uC6D4\uAC04,\uC5F0\uAC04) `);
                            } else {
                              return [
                                createTextVNode(" \uC131\uACFC (\uC77C\uC77C,\uC8FC\uAC04,\uC6D4\uAC04,\uC5F0\uAC04) ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableHead, { class: "font-bold" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uBD84\uC11D (\uC2DC\uAC04\uB2F9,\uC77C\uC77C,\uC8FC\uAC04,\uC6D4\uAC04) `);
                            } else {
                              return [
                                createTextVNode(" \uBD84\uC11D (\uC2DC\uAC04\uB2F9,\uC77C\uC77C,\uC8FC\uAC04,\uC6D4\uAC04) ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\uB098\uB77C")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableHead, {
                            onClick: ($event) => sorting.value = "Name",
                            class: "cursor-pointer font-bold"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC774\uB984 "),
                              createVNode(_component_font_awesome_icon, {
                                icon: ["fas", unref(sorting) == "Name" ? "sort-down" : "sort"]
                              }, null, 8, ["icon"])
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_TableHead, {
                            onClick: ($event) => sorting.value = "volumeRate",
                            class: "cursor-pointer font-bold"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uAC70\uB798\uB7C9 / \uD3C9\uADE0 \uAC70\uB798\uB7C9 (\uAC70\uB798\uB7C9\uB960) "),
                              createVNode(_component_font_awesome_icon, {
                                icon: ["fas", unref(sorting) == "volumeRate" ? "sort-down" : "sort"]
                              }, null, 8, ["icon"])
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_TableHead, {
                            onClick: ($event) => sorting.value = "Chg",
                            class: "cursor-pointer font-bold"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\uBCC0\uB3D9\uCE58"),
                              createVNode(_component_font_awesome_icon, {
                                icon: ["fas", unref(sorting) == "Chg" ? "sort-down" : "sort"]
                              }, null, 8, ["icon"])
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_TableHead, {
                            onClick: ($event) => sorting.value = "ChgPct",
                            class: "cursor-pointer font-bold"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uBCC0\uB3D9\uB960 (%) "),
                              createVNode(_component_font_awesome_icon, {
                                icon: ["fas", unref(sorting) == "ChgPct" ? "sort-down" : "sort"]
                              }, null, 8, ["icon"])
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_TableHead, { class: "font-bold" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uAC00\uACA9 (\uCD5C\uC800,\uB9C8\uC9C0\uB9C9,\uCD5C\uACE0) ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableHead, { class: "font-bold" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC131\uACFC (\uC77C\uC77C,\uC8FC\uAC04,\uC6D4\uAC04,\uC5F0\uAC04) ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableHead, { class: "font-bold" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uBD84\uC11D (\uC2DC\uAC04\uB2F9,\uC77C\uC77C,\uC8FC\uAC04,\uC6D4\uAC04) ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TableRow, { class: "text-xs" }, {
                      default: withCtx(() => [
                        createVNode(_component_TableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\uB098\uB77C")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableHead, {
                          onClick: ($event) => sorting.value = "Name",
                          class: "cursor-pointer font-bold"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC774\uB984 "),
                            createVNode(_component_font_awesome_icon, {
                              icon: ["fas", unref(sorting) == "Name" ? "sort-down" : "sort"]
                            }, null, 8, ["icon"])
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_TableHead, {
                          onClick: ($event) => sorting.value = "volumeRate",
                          class: "cursor-pointer font-bold"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uAC70\uB798\uB7C9 / \uD3C9\uADE0 \uAC70\uB798\uB7C9 (\uAC70\uB798\uB7C9\uB960) "),
                            createVNode(_component_font_awesome_icon, {
                              icon: ["fas", unref(sorting) == "volumeRate" ? "sort-down" : "sort"]
                            }, null, 8, ["icon"])
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_TableHead, {
                          onClick: ($event) => sorting.value = "Chg",
                          class: "cursor-pointer font-bold"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\uBCC0\uB3D9\uCE58"),
                            createVNode(_component_font_awesome_icon, {
                              icon: ["fas", unref(sorting) == "Chg" ? "sort-down" : "sort"]
                            }, null, 8, ["icon"])
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_TableHead, {
                          onClick: ($event) => sorting.value = "ChgPct",
                          class: "cursor-pointer font-bold"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uBCC0\uB3D9\uB960 (%) "),
                            createVNode(_component_font_awesome_icon, {
                              icon: ["fas", unref(sorting) == "ChgPct" ? "sort-down" : "sort"]
                            }, null, 8, ["icon"])
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_TableHead, { class: "font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode(" \uAC00\uACA9 (\uCD5C\uC800,\uB9C8\uC9C0\uB9C9,\uCD5C\uACE0) ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableHead, { class: "font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC131\uACFC (\uC77C\uC77C,\uC8FC\uAC04,\uC6D4\uAC04,\uC5F0\uAC04) ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableHead, { class: "font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode(" \uBD84\uC11D (\uC2DC\uAC04\uB2F9,\uC77C\uC77C,\uC8FC\uAC04,\uC6D4\uAC04) ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TableBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(cStockList), (stock) => {
                    _push3(ssrRenderComponent(_component_TableRow, {
                      key: stock.Name
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(stock.CountryNameTranslated)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(stock.CountryNameTranslated), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, { class: "font-bold" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div${_scopeId4}>${ssrInterpolate(stock.Name)}</div><div${_scopeId4}>(${ssrInterpolate(timeAgo(Number(stock.Time)))})</div>`);
                              } else {
                                return [
                                  createVNode("div", null, toDisplayString(stock.Name), 1),
                                  createVNode("div", null, "(" + toDisplayString(timeAgo(Number(stock.Time))) + ")", 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-xs text-neutral-400"${_scopeId4}>${ssrInterpolate(stock.Volume)}</div><div class="text-xs text-neutral-400"${_scopeId4}>/ ${ssrInterpolate(stock.AvgVolume)}</div><div${_scopeId4}>${ssrInterpolate(stock.volumeRate)}%</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-xs text-neutral-400" }, toDisplayString(stock.Volume), 1),
                                  createVNode("div", { class: "text-xs text-neutral-400" }, "/ " + toDisplayString(stock.AvgVolume), 1),
                                  createVNode("div", null, toDisplayString(stock.volumeRate) + "%", 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(stock.Chg)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(stock.Chg), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(stock.ChgPct)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(stock.ChgPct), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-xs text-neutral-400"${_scopeId4}>${ssrInterpolate(stock.Low)} ~</div><div${_scopeId4}>${ssrInterpolate(stock.Last)} ~</div><div class="text-xs text-neutral-400"${_scopeId4}>${ssrInterpolate(stock.High)}</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-xs text-neutral-400" }, toDisplayString(stock.Low) + " ~", 1),
                                  createVNode("div", null, toDisplayString(stock.Last) + " ~", 1),
                                  createVNode("div", { class: "text-xs text-neutral-400" }, toDisplayString(stock.High), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="${ssrRenderClass(stock.PerformanceDay > 0 ? "text-red-500" : "text-blue-500")}"${_scopeId4}>${ssrInterpolate(stock.PerformanceDay)} /</div><div class="${ssrRenderClass(stock.PerformanceWeek > 0 ? "text-red-500" : "text-blue-500")}"${_scopeId4}>${ssrInterpolate(stock.PerformanceWeek)} /</div><div class="${ssrRenderClass(stock.PerformanceMonth > 0 ? "text-red-500" : "text-blue-500")}"${_scopeId4}>${ssrInterpolate(stock.PerformanceMonth)} /</div><div class="${ssrRenderClass(stock.PerformanceYear > 0 ? "text-red-500" : "text-blue-500")}"${_scopeId4}>${ssrInterpolate(stock.PerformanceYear)}</div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: stock.PerformanceDay > 0 ? "text-red-500" : "text-blue-500"
                                  }, toDisplayString(stock.PerformanceDay) + " /", 3),
                                  createVNode("div", {
                                    class: stock.PerformanceWeek > 0 ? "text-red-500" : "text-blue-500"
                                  }, toDisplayString(stock.PerformanceWeek) + " /", 3),
                                  createVNode("div", {
                                    class: stock.PerformanceMonth > 0 ? "text-red-500" : "text-blue-500"
                                  }, toDisplayString(stock.PerformanceMonth) + " /", 3),
                                  createVNode("div", {
                                    class: stock.PerformanceYear > 0 ? "text-red-500" : "text-blue-500"
                                  }, toDisplayString(stock.PerformanceYear), 3)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_TechnicalTextColor, {
                                  technicalText: stock.TechnicalHour
                                }, null, _parent5, _scopeId4));
                                _push5(` /</div><div${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_TechnicalTextColor, {
                                  technicalText: stock.TechnicalDay
                                }, null, _parent5, _scopeId4));
                                _push5(` /</div><div${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_TechnicalTextColor, {
                                  technicalText: stock.TechnicalMonth
                                }, null, _parent5, _scopeId4));
                                _push5(` /</div><div${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_TechnicalTextColor, {
                                  technicalText: stock.TechnicalWeek
                                }, null, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", null, [
                                    createVNode(_component_TechnicalTextColor, {
                                      technicalText: stock.TechnicalHour
                                    }, null, 8, ["technicalText"]),
                                    createTextVNode(" /")
                                  ]),
                                  createVNode("div", null, [
                                    createVNode(_component_TechnicalTextColor, {
                                      technicalText: stock.TechnicalDay
                                    }, null, 8, ["technicalText"]),
                                    createTextVNode(" /")
                                  ]),
                                  createVNode("div", null, [
                                    createVNode(_component_TechnicalTextColor, {
                                      technicalText: stock.TechnicalMonth
                                    }, null, 8, ["technicalText"]),
                                    createTextVNode(" /")
                                  ]),
                                  createVNode("div", null, [
                                    createVNode(_component_TechnicalTextColor, {
                                      technicalText: stock.TechnicalWeek
                                    }, null, 8, ["technicalText"])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(stock.CountryNameTranslated), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, { class: "font-bold" }, {
                              default: withCtx(() => [
                                createVNode("div", null, toDisplayString(stock.Name), 1),
                                createVNode("div", null, "(" + toDisplayString(timeAgo(Number(stock.Time))) + ")", 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-xs text-neutral-400" }, toDisplayString(stock.Volume), 1),
                                createVNode("div", { class: "text-xs text-neutral-400" }, "/ " + toDisplayString(stock.AvgVolume), 1),
                                createVNode("div", null, toDisplayString(stock.volumeRate) + "%", 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(stock.Chg), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(stock.ChgPct), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-xs text-neutral-400" }, toDisplayString(stock.Low) + " ~", 1),
                                createVNode("div", null, toDisplayString(stock.Last) + " ~", 1),
                                createVNode("div", { class: "text-xs text-neutral-400" }, toDisplayString(stock.High), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: stock.PerformanceDay > 0 ? "text-red-500" : "text-blue-500"
                                }, toDisplayString(stock.PerformanceDay) + " /", 3),
                                createVNode("div", {
                                  class: stock.PerformanceWeek > 0 ? "text-red-500" : "text-blue-500"
                                }, toDisplayString(stock.PerformanceWeek) + " /", 3),
                                createVNode("div", {
                                  class: stock.PerformanceMonth > 0 ? "text-red-500" : "text-blue-500"
                                }, toDisplayString(stock.PerformanceMonth) + " /", 3),
                                createVNode("div", {
                                  class: stock.PerformanceYear > 0 ? "text-red-500" : "text-blue-500"
                                }, toDisplayString(stock.PerformanceYear), 3)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode(_component_TechnicalTextColor, {
                                    technicalText: stock.TechnicalHour
                                  }, null, 8, ["technicalText"]),
                                  createTextVNode(" /")
                                ]),
                                createVNode("div", null, [
                                  createVNode(_component_TechnicalTextColor, {
                                    technicalText: stock.TechnicalDay
                                  }, null, 8, ["technicalText"]),
                                  createTextVNode(" /")
                                ]),
                                createVNode("div", null, [
                                  createVNode(_component_TechnicalTextColor, {
                                    technicalText: stock.TechnicalMonth
                                  }, null, 8, ["technicalText"]),
                                  createTextVNode(" /")
                                ]),
                                createVNode("div", null, [
                                  createVNode(_component_TechnicalTextColor, {
                                    technicalText: stock.TechnicalWeek
                                  }, null, 8, ["technicalText"])
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(cStockList), (stock) => {
                      return openBlock(), createBlock(_component_TableRow, {
                        key: stock.Name
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(stock.CountryNameTranslated), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, { class: "font-bold" }, {
                            default: withCtx(() => [
                              createVNode("div", null, toDisplayString(stock.Name), 1),
                              createVNode("div", null, "(" + toDisplayString(timeAgo(Number(stock.Time))) + ")", 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-xs text-neutral-400" }, toDisplayString(stock.Volume), 1),
                              createVNode("div", { class: "text-xs text-neutral-400" }, "/ " + toDisplayString(stock.AvgVolume), 1),
                              createVNode("div", null, toDisplayString(stock.volumeRate) + "%", 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(stock.Chg), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(stock.ChgPct), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-xs text-neutral-400" }, toDisplayString(stock.Low) + " ~", 1),
                              createVNode("div", null, toDisplayString(stock.Last) + " ~", 1),
                              createVNode("div", { class: "text-xs text-neutral-400" }, toDisplayString(stock.High), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: stock.PerformanceDay > 0 ? "text-red-500" : "text-blue-500"
                              }, toDisplayString(stock.PerformanceDay) + " /", 3),
                              createVNode("div", {
                                class: stock.PerformanceWeek > 0 ? "text-red-500" : "text-blue-500"
                              }, toDisplayString(stock.PerformanceWeek) + " /", 3),
                              createVNode("div", {
                                class: stock.PerformanceMonth > 0 ? "text-red-500" : "text-blue-500"
                              }, toDisplayString(stock.PerformanceMonth) + " /", 3),
                              createVNode("div", {
                                class: stock.PerformanceYear > 0 ? "text-red-500" : "text-blue-500"
                              }, toDisplayString(stock.PerformanceYear), 3)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode(_component_TechnicalTextColor, {
                                  technicalText: stock.TechnicalHour
                                }, null, 8, ["technicalText"]),
                                createTextVNode(" /")
                              ]),
                              createVNode("div", null, [
                                createVNode(_component_TechnicalTextColor, {
                                  technicalText: stock.TechnicalDay
                                }, null, 8, ["technicalText"]),
                                createTextVNode(" /")
                              ]),
                              createVNode("div", null, [
                                createVNode(_component_TechnicalTextColor, {
                                  technicalText: stock.TechnicalMonth
                                }, null, 8, ["technicalText"]),
                                createTextVNode(" /")
                              ]),
                              createVNode("div", null, [
                                createVNode(_component_TechnicalTextColor, {
                                  technicalText: stock.TechnicalWeek
                                }, null, 8, ["technicalText"])
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TableHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_TableRow, { class: "text-xs" }, {
                    default: withCtx(() => [
                      createVNode(_component_TableHead, null, {
                        default: withCtx(() => [
                          createTextVNode("\uB098\uB77C")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TableHead, {
                        onClick: ($event) => sorting.value = "Name",
                        class: "cursor-pointer font-bold"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC774\uB984 "),
                          createVNode(_component_font_awesome_icon, {
                            icon: ["fas", unref(sorting) == "Name" ? "sort-down" : "sort"]
                          }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_TableHead, {
                        onClick: ($event) => sorting.value = "volumeRate",
                        class: "cursor-pointer font-bold"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uAC70\uB798\uB7C9 / \uD3C9\uADE0 \uAC70\uB798\uB7C9 (\uAC70\uB798\uB7C9\uB960) "),
                          createVNode(_component_font_awesome_icon, {
                            icon: ["fas", unref(sorting) == "volumeRate" ? "sort-down" : "sort"]
                          }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_TableHead, {
                        onClick: ($event) => sorting.value = "Chg",
                        class: "cursor-pointer font-bold"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\uBCC0\uB3D9\uCE58"),
                          createVNode(_component_font_awesome_icon, {
                            icon: ["fas", unref(sorting) == "Chg" ? "sort-down" : "sort"]
                          }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_TableHead, {
                        onClick: ($event) => sorting.value = "ChgPct",
                        class: "cursor-pointer font-bold"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uBCC0\uB3D9\uB960 (%) "),
                          createVNode(_component_font_awesome_icon, {
                            icon: ["fas", unref(sorting) == "ChgPct" ? "sort-down" : "sort"]
                          }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_TableHead, { class: "font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode(" \uAC00\uACA9 (\uCD5C\uC800,\uB9C8\uC9C0\uB9C9,\uCD5C\uACE0) ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TableHead, { class: "font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC131\uACFC (\uC77C\uC77C,\uC8FC\uAC04,\uC6D4\uAC04,\uC5F0\uAC04) ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TableHead, { class: "font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode(" \uBD84\uC11D (\uC2DC\uAC04\uB2F9,\uC77C\uC77C,\uC8FC\uAC04,\uC6D4\uAC04) ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_TableBody, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(cStockList), (stock) => {
                    return openBlock(), createBlock(_component_TableRow, {
                      key: stock.Name
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(stock.CountryNameTranslated), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, { class: "font-bold" }, {
                          default: withCtx(() => [
                            createVNode("div", null, toDisplayString(stock.Name), 1),
                            createVNode("div", null, "(" + toDisplayString(timeAgo(Number(stock.Time))) + ")", 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-xs text-neutral-400" }, toDisplayString(stock.Volume), 1),
                            createVNode("div", { class: "text-xs text-neutral-400" }, "/ " + toDisplayString(stock.AvgVolume), 1),
                            createVNode("div", null, toDisplayString(stock.volumeRate) + "%", 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(stock.Chg), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(stock.ChgPct), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-xs text-neutral-400" }, toDisplayString(stock.Low) + " ~", 1),
                            createVNode("div", null, toDisplayString(stock.Last) + " ~", 1),
                            createVNode("div", { class: "text-xs text-neutral-400" }, toDisplayString(stock.High), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: stock.PerformanceDay > 0 ? "text-red-500" : "text-blue-500"
                            }, toDisplayString(stock.PerformanceDay) + " /", 3),
                            createVNode("div", {
                              class: stock.PerformanceWeek > 0 ? "text-red-500" : "text-blue-500"
                            }, toDisplayString(stock.PerformanceWeek) + " /", 3),
                            createVNode("div", {
                              class: stock.PerformanceMonth > 0 ? "text-red-500" : "text-blue-500"
                            }, toDisplayString(stock.PerformanceMonth) + " /", 3),
                            createVNode("div", {
                              class: stock.PerformanceYear > 0 ? "text-red-500" : "text-blue-500"
                            }, toDisplayString(stock.PerformanceYear), 3)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode(_component_TechnicalTextColor, {
                                technicalText: stock.TechnicalHour
                              }, null, 8, ["technicalText"]),
                              createTextVNode(" /")
                            ]),
                            createVNode("div", null, [
                              createVNode(_component_TechnicalTextColor, {
                                technicalText: stock.TechnicalDay
                              }, null, 8, ["technicalText"]),
                              createTextVNode(" /")
                            ]),
                            createVNode("div", null, [
                              createVNode(_component_TechnicalTextColor, {
                                technicalText: stock.TechnicalMonth
                              }, null, 8, ["technicalText"]),
                              createTextVNode(" /")
                            ]),
                            createVNode("div", null, [
                              createVNode(_component_TechnicalTextColor, {
                                technicalText: stock.TechnicalWeek
                              }, null, 8, ["technicalText"])
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/stock/[code].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_code_-Bi08pzo8.mjs.map
