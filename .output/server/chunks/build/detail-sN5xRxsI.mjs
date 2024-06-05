import { useSSRContext, defineComponent, computed, ref, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { c as cn } from './utils-H80jjgLf.mjs';
import { u as useState } from './state-C15HQ2wM.mjs';
import 'clsx';
import 'tailwind-merge';
import './server.mjs';
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

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/Table.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableBody.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableCell.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableHead.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableRow.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TableCaption",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<caption${ssrRenderAttrs(mergeProps({
        class: unref(cn)("mt-4 text-sm text-muted-foreground", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</caption>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableCaption.vue");
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
  __name: "detail",
  __ssrInlineRender: true,
  setup(__props) {
    const stockList = useState("stockList");
    const cStockList = computed(() => {
      return stockList.value.map((stock) => ({
        ...stock,
        volumeRate: Math.round(stock.Volume / stock.AvgVolume * 100 * 10) / 10
      })).sort((a, b) => {
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
      });
    });
    const sorting = ref("Name");
    function timeAgo(timestamp) {
      const secondsAgo = Math.floor(((/* @__PURE__ */ new Date()).getTime() - timestamp * 1e3) / 1e3);
      const hours = Math.floor(secondsAgo / 3600);
      const minutes = Math.floor(secondsAgo % 3600 / 60);
      const seconds = secondsAgo % 60;
      return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} \uC804`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Table = _sfc_main$8;
      const _component_TableCaption = _sfc_main$2;
      const _component_TableHeader = _sfc_main$4;
      const _component_TableRow = _sfc_main$3;
      const _component_TableHead = _sfc_main$5;
      const _component_TableBody = _sfc_main$7;
      const _component_TableCell = _sfc_main$6;
      const _component_TechnicalTextColor = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col divide-y" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Table, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TableCaption, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`A list of your recent invoices.`);
                } else {
                  return [
                    createTextVNode("A list of your recent invoices.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TableHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TableRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TableHead, {
                          onClick: ($event) => sorting.value = "Name",
                          class: ["text-blue-500 cursor-pointer font-bold", { "text-red-500": unref(sorting) == "Name" }]
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uC774\uB984 `);
                            } else {
                              return [
                                createTextVNode(" \uC774\uB984 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableHead, {
                          onClick: ($event) => sorting.value = "volumeRate",
                          class: ["text-blue-500 cursor-pointer font-bold", { "text-red-500": unref(sorting) == "volumeRate" }]
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\uAC70\uB798\uB7C9 / \uD3C9\uADE0 \uAC70\uB798\uB7C9 (\uAC70\uB798\uB7C9\uB960)`);
                            } else {
                              return [
                                createTextVNode("\uAC70\uB798\uB7C9 / \uD3C9\uADE0 \uAC70\uB798\uB7C9 (\uAC70\uB798\uB7C9\uB960)")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableHead, {
                          onClick: ($event) => sorting.value = "Chg",
                          class: ["text-blue-500 cursor-pointer font-bold", { "text-red-500": unref(sorting) == "Chg" }]
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\uBCC0\uB3D9\uCE58`);
                            } else {
                              return [
                                createTextVNode("\uBCC0\uB3D9\uCE58")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableHead, {
                          onClick: ($event) => sorting.value = "ChgPct",
                          class: ["text-blue-500 cursor-pointer font-bold", { "text-red-500": unref(sorting) == "ChgPct" }]
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uBCC0\uB3D9\uB960 (%) `);
                            } else {
                              return [
                                createTextVNode(" \uBCC0\uB3D9\uB960 (%) ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableHead, { class: "font-bold" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uCD5C\uC800\uAC00 ~ \uB9C8\uC9C0\uB9C9\uAC00\uACA9 ~ \uCD5C\uACE0\uAC00 `);
                            } else {
                              return [
                                createTextVNode(" \uCD5C\uC800\uAC00 ~ \uB9C8\uC9C0\uB9C9\uAC00\uACA9 ~ \uCD5C\uACE0\uAC00 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableHead, { class: "font-bold" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uC77C\uC77C\uC131\uACFC \uC8FC\uAC04\uC131\uACFC \uC6D4\uAC04\uC131\uACFC \uC5F0\uAC04\uC131\uACFC `);
                            } else {
                              return [
                                createTextVNode(" \uC77C\uC77C\uC131\uACFC \uC8FC\uAC04\uC131\uACFC \uC6D4\uAC04\uC131\uACFC \uC5F0\uAC04\uC131\uACFC ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableHead, { class: "font-bold" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uC2DC\uAC04\uB2F9\uBD84\uC11D \uC77C\uC77C\uBD84\uC11D \uC8FC\uAC04\uBD84\uC11D \uC6D4\uAC04\uBD84\uC11D `);
                            } else {
                              return [
                                createTextVNode(" \uC2DC\uAC04\uB2F9\uBD84\uC11D \uC77C\uC77C\uBD84\uC11D \uC8FC\uAC04\uBD84\uC11D \uC6D4\uAC04\uBD84\uC11D ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TableHead, {
                            onClick: ($event) => sorting.value = "Name",
                            class: ["text-blue-500 cursor-pointer font-bold", { "text-red-500": unref(sorting) == "Name" }]
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC774\uB984 ")
                            ]),
                            _: 1
                          }, 8, ["onClick", "class"]),
                          createVNode(_component_TableHead, {
                            onClick: ($event) => sorting.value = "volumeRate",
                            class: ["text-blue-500 cursor-pointer font-bold", { "text-red-500": unref(sorting) == "volumeRate" }]
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\uAC70\uB798\uB7C9 / \uD3C9\uADE0 \uAC70\uB798\uB7C9 (\uAC70\uB798\uB7C9\uB960)")
                            ]),
                            _: 1
                          }, 8, ["onClick", "class"]),
                          createVNode(_component_TableHead, {
                            onClick: ($event) => sorting.value = "Chg",
                            class: ["text-blue-500 cursor-pointer font-bold", { "text-red-500": unref(sorting) == "Chg" }]
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\uBCC0\uB3D9\uCE58")
                            ]),
                            _: 1
                          }, 8, ["onClick", "class"]),
                          createVNode(_component_TableHead, {
                            onClick: ($event) => sorting.value = "ChgPct",
                            class: ["text-blue-500 cursor-pointer font-bold", { "text-red-500": unref(sorting) == "ChgPct" }]
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \uBCC0\uB3D9\uB960 (%) ")
                            ]),
                            _: 1
                          }, 8, ["onClick", "class"]),
                          createVNode(_component_TableHead, { class: "font-bold" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uCD5C\uC800\uAC00 ~ \uB9C8\uC9C0\uB9C9\uAC00\uACA9 ~ \uCD5C\uACE0\uAC00 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableHead, { class: "font-bold" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC77C\uC77C\uC131\uACFC \uC8FC\uAC04\uC131\uACFC \uC6D4\uAC04\uC131\uACFC \uC5F0\uAC04\uC131\uACFC ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableHead, { class: "font-bold" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC2DC\uAC04\uB2F9\uBD84\uC11D \uC77C\uC77C\uBD84\uC11D \uC8FC\uAC04\uBD84\uC11D \uC6D4\uAC04\uBD84\uC11D ")
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
                    createVNode(_component_TableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableHead, {
                          onClick: ($event) => sorting.value = "Name",
                          class: ["text-blue-500 cursor-pointer font-bold", { "text-red-500": unref(sorting) == "Name" }]
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC774\uB984 ")
                          ]),
                          _: 1
                        }, 8, ["onClick", "class"]),
                        createVNode(_component_TableHead, {
                          onClick: ($event) => sorting.value = "volumeRate",
                          class: ["text-blue-500 cursor-pointer font-bold", { "text-red-500": unref(sorting) == "volumeRate" }]
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\uAC70\uB798\uB7C9 / \uD3C9\uADE0 \uAC70\uB798\uB7C9 (\uAC70\uB798\uB7C9\uB960)")
                          ]),
                          _: 1
                        }, 8, ["onClick", "class"]),
                        createVNode(_component_TableHead, {
                          onClick: ($event) => sorting.value = "Chg",
                          class: ["text-blue-500 cursor-pointer font-bold", { "text-red-500": unref(sorting) == "Chg" }]
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\uBCC0\uB3D9\uCE58")
                          ]),
                          _: 1
                        }, 8, ["onClick", "class"]),
                        createVNode(_component_TableHead, {
                          onClick: ($event) => sorting.value = "ChgPct",
                          class: ["text-blue-500 cursor-pointer font-bold", { "text-red-500": unref(sorting) == "ChgPct" }]
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \uBCC0\uB3D9\uB960 (%) ")
                          ]),
                          _: 1
                        }, 8, ["onClick", "class"]),
                        createVNode(_component_TableHead, { class: "font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode(" \uCD5C\uC800\uAC00 ~ \uB9C8\uC9C0\uB9C9\uAC00\uACA9 ~ \uCD5C\uACE0\uAC00 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableHead, { class: "font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC77C\uC77C\uC131\uACFC \uC8FC\uAC04\uC131\uACFC \uC6D4\uAC04\uC131\uACFC \uC5F0\uAC04\uC131\uACFC ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableHead, { class: "font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC2DC\uAC04\uB2F9\uBD84\uC11D \uC77C\uC77C\uBD84\uC11D \uC8FC\uAC04\uBD84\uC11D \uC6D4\uAC04\uBD84\uC11D ")
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
                          _push4(ssrRenderComponent(_component_TableCell, { class: "font-bold" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(stock.Name)} (${ssrInterpolate(timeAgo(Number(stock.Time)))}) `);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(stock.Name) + " (" + toDisplayString(timeAgo(Number(stock.Time))) + ") ", 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(stock.Volume)} / ${ssrInterpolate(stock.AvgVolume)} (${ssrInterpolate(stock.volumeRate)})`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(stock.Volume) + " / " + toDisplayString(stock.AvgVolume) + " (" + toDisplayString(stock.volumeRate) + ")", 1)
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
                                _push5(`${ssrInterpolate(stock.Low)} ~ ${ssrInterpolate(stock.Last)} ~ ${ssrInterpolate(stock.High)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(stock.Low) + " ~ " + toDisplayString(stock.Last) + " ~ " + toDisplayString(stock.High), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(stock.PerformanceDay)} / ${ssrInterpolate(stock.PerformanceWeek)} / ${ssrInterpolate(stock.PerformanceMonth)} / ${ssrInterpolate(stock.PerformanceYear)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(stock.PerformanceDay) + " / " + toDisplayString(stock.PerformanceWeek) + " / " + toDisplayString(stock.PerformanceMonth) + " / " + toDisplayString(stock.PerformanceYear), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_TechnicalTextColor, {
                                  technicalText: stock.TechnicalHour
                                }, null, _parent5, _scopeId4));
                                _push5(` / `);
                                _push5(ssrRenderComponent(_component_TechnicalTextColor, {
                                  technicalText: stock.TechnicalDay
                                }, null, _parent5, _scopeId4));
                                _push5(` / `);
                                _push5(ssrRenderComponent(_component_TechnicalTextColor, {
                                  technicalText: stock.TechnicalMonth
                                }, null, _parent5, _scopeId4));
                                _push5(` / `);
                                _push5(ssrRenderComponent(_component_TechnicalTextColor, {
                                  technicalText: stock.TechnicalWeek
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_TechnicalTextColor, {
                                    technicalText: stock.TechnicalHour
                                  }, null, 8, ["technicalText"]),
                                  createTextVNode(" / "),
                                  createVNode(_component_TechnicalTextColor, {
                                    technicalText: stock.TechnicalDay
                                  }, null, 8, ["technicalText"]),
                                  createTextVNode(" / "),
                                  createVNode(_component_TechnicalTextColor, {
                                    technicalText: stock.TechnicalMonth
                                  }, null, 8, ["technicalText"]),
                                  createTextVNode(" / "),
                                  createVNode(_component_TechnicalTextColor, {
                                    technicalText: stock.TechnicalWeek
                                  }, null, 8, ["technicalText"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_TableCell, { class: "font-bold" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(stock.Name) + " (" + toDisplayString(timeAgo(Number(stock.Time))) + ") ", 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(stock.Volume) + " / " + toDisplayString(stock.AvgVolume) + " (" + toDisplayString(stock.volumeRate) + ")", 1)
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
                                createTextVNode(toDisplayString(stock.Low) + " ~ " + toDisplayString(stock.Last) + " ~ " + toDisplayString(stock.High), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(stock.PerformanceDay) + " / " + toDisplayString(stock.PerformanceWeek) + " / " + toDisplayString(stock.PerformanceMonth) + " / " + toDisplayString(stock.PerformanceYear), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createVNode(_component_TechnicalTextColor, {
                                  technicalText: stock.TechnicalHour
                                }, null, 8, ["technicalText"]),
                                createTextVNode(" / "),
                                createVNode(_component_TechnicalTextColor, {
                                  technicalText: stock.TechnicalDay
                                }, null, 8, ["technicalText"]),
                                createTextVNode(" / "),
                                createVNode(_component_TechnicalTextColor, {
                                  technicalText: stock.TechnicalMonth
                                }, null, 8, ["technicalText"]),
                                createTextVNode(" / "),
                                createVNode(_component_TechnicalTextColor, {
                                  technicalText: stock.TechnicalWeek
                                }, null, 8, ["technicalText"])
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
                          createVNode(_component_TableCell, { class: "font-bold" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(stock.Name) + " (" + toDisplayString(timeAgo(Number(stock.Time))) + ") ", 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(stock.Volume) + " / " + toDisplayString(stock.AvgVolume) + " (" + toDisplayString(stock.volumeRate) + ")", 1)
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
                              createTextVNode(toDisplayString(stock.Low) + " ~ " + toDisplayString(stock.Last) + " ~ " + toDisplayString(stock.High), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(stock.PerformanceDay) + " / " + toDisplayString(stock.PerformanceWeek) + " / " + toDisplayString(stock.PerformanceMonth) + " / " + toDisplayString(stock.PerformanceYear), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createVNode(_component_TechnicalTextColor, {
                                technicalText: stock.TechnicalHour
                              }, null, 8, ["technicalText"]),
                              createTextVNode(" / "),
                              createVNode(_component_TechnicalTextColor, {
                                technicalText: stock.TechnicalDay
                              }, null, 8, ["technicalText"]),
                              createTextVNode(" / "),
                              createVNode(_component_TechnicalTextColor, {
                                technicalText: stock.TechnicalMonth
                              }, null, 8, ["technicalText"]),
                              createTextVNode(" / "),
                              createVNode(_component_TechnicalTextColor, {
                                technicalText: stock.TechnicalWeek
                              }, null, 8, ["technicalText"])
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
              createVNode(_component_TableCaption, null, {
                default: withCtx(() => [
                  createTextVNode("A list of your recent invoices.")
                ]),
                _: 1
              }),
              createVNode(_component_TableHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_TableRow, null, {
                    default: withCtx(() => [
                      createVNode(_component_TableHead, {
                        onClick: ($event) => sorting.value = "Name",
                        class: ["text-blue-500 cursor-pointer font-bold", { "text-red-500": unref(sorting) == "Name" }]
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC774\uB984 ")
                        ]),
                        _: 1
                      }, 8, ["onClick", "class"]),
                      createVNode(_component_TableHead, {
                        onClick: ($event) => sorting.value = "volumeRate",
                        class: ["text-blue-500 cursor-pointer font-bold", { "text-red-500": unref(sorting) == "volumeRate" }]
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\uAC70\uB798\uB7C9 / \uD3C9\uADE0 \uAC70\uB798\uB7C9 (\uAC70\uB798\uB7C9\uB960)")
                        ]),
                        _: 1
                      }, 8, ["onClick", "class"]),
                      createVNode(_component_TableHead, {
                        onClick: ($event) => sorting.value = "Chg",
                        class: ["text-blue-500 cursor-pointer font-bold", { "text-red-500": unref(sorting) == "Chg" }]
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\uBCC0\uB3D9\uCE58")
                        ]),
                        _: 1
                      }, 8, ["onClick", "class"]),
                      createVNode(_component_TableHead, {
                        onClick: ($event) => sorting.value = "ChgPct",
                        class: ["text-blue-500 cursor-pointer font-bold", { "text-red-500": unref(sorting) == "ChgPct" }]
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \uBCC0\uB3D9\uB960 (%) ")
                        ]),
                        _: 1
                      }, 8, ["onClick", "class"]),
                      createVNode(_component_TableHead, { class: "font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode(" \uCD5C\uC800\uAC00 ~ \uB9C8\uC9C0\uB9C9\uAC00\uACA9 ~ \uCD5C\uACE0\uAC00 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TableHead, { class: "font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC77C\uC77C\uC131\uACFC \uC8FC\uAC04\uC131\uACFC \uC6D4\uAC04\uC131\uACFC \uC5F0\uAC04\uC131\uACFC ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TableHead, { class: "font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC2DC\uAC04\uB2F9\uBD84\uC11D \uC77C\uC77C\uBD84\uC11D \uC8FC\uAC04\uBD84\uC11D \uC6D4\uAC04\uBD84\uC11D ")
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
                        createVNode(_component_TableCell, { class: "font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(stock.Name) + " (" + toDisplayString(timeAgo(Number(stock.Time))) + ") ", 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(stock.Volume) + " / " + toDisplayString(stock.AvgVolume) + " (" + toDisplayString(stock.volumeRate) + ")", 1)
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
                            createTextVNode(toDisplayString(stock.Low) + " ~ " + toDisplayString(stock.Last) + " ~ " + toDisplayString(stock.High), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(stock.PerformanceDay) + " / " + toDisplayString(stock.PerformanceWeek) + " / " + toDisplayString(stock.PerformanceMonth) + " / " + toDisplayString(stock.PerformanceYear), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createVNode(_component_TechnicalTextColor, {
                              technicalText: stock.TechnicalHour
                            }, null, 8, ["technicalText"]),
                            createTextVNode(" / "),
                            createVNode(_component_TechnicalTextColor, {
                              technicalText: stock.TechnicalDay
                            }, null, 8, ["technicalText"]),
                            createTextVNode(" / "),
                            createVNode(_component_TechnicalTextColor, {
                              technicalText: stock.TechnicalMonth
                            }, null, 8, ["technicalText"]),
                            createTextVNode(" / "),
                            createVNode(_component_TechnicalTextColor, {
                              technicalText: stock.TechnicalWeek
                            }, null, 8, ["technicalText"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/stock/detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=detail-sN5xRxsI.mjs.map
