import { _ as _sfc_main$d } from './Card-T9vkftQH.mjs';
import { useSSRContext, defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { g as getColorClass, s as setInterval, _ as _sfc_main$c } from './interval-B5bxHMiY.mjs';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import 'radix-vue';
import 'class-variance-authority';

const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "dice",
  __ssrInlineRender: true,
  props: {
    \uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704: {},
    \uC8FC\uC0AC\uC704: {}
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$d;
      _push(ssrRenderComponent(_component_Card, mergeProps({
        class: ["w-5 h-5 flex justify-center items-center border-0 bg-white cursor-pointer", { "bg-opacity-50": _ctx.\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704 != _ctx.\uC8FC\uC0AC\uC704 }],
        onClick: ($event) => emit("click", _ctx.\uC8FC\uC0AC\uC704)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.\uC8FC\uC0AC\uC704)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.\uC8FC\uC0AC\uC704), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dice.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "diceTr",
  __ssrInlineRender: true,
  props: {
    \uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704: {}
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_dice = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-1" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_dice, {
        "\uC8FC\uC0AC\uC704": 1,
        "\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704": _ctx.\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704,
        onClick: (arg) => emit("click", arg)
      }, null, _parent));
      _push(ssrRenderComponent(_component_dice, {
        "\uC8FC\uC0AC\uC704": 2,
        "\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704": _ctx.\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704,
        onClick: (arg) => emit("click", arg)
      }, null, _parent));
      _push(ssrRenderComponent(_component_dice, {
        "\uC8FC\uC0AC\uC704": 3,
        "\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704": _ctx.\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704,
        onClick: (arg) => emit("click", arg)
      }, null, _parent));
      _push(ssrRenderComponent(_component_dice, {
        "\uC8FC\uC0AC\uC704": 4,
        "\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704": _ctx.\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704,
        onClick: (arg) => emit("click", arg)
      }, null, _parent));
      _push(ssrRenderComponent(_component_dice, {
        "\uC8FC\uC0AC\uC704": 5,
        "\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704": _ctx.\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704,
        onClick: (arg) => emit("click", arg)
      }, null, _parent));
      _push(ssrRenderComponent(_component_dice, {
        "\uC8FC\uC0AC\uC704": 6,
        "\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704": _ctx.\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704,
        onClick: (arg) => emit("click", arg)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/diceTr.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "diceTable",
  __ssrInlineRender: true,
  props: {
    \uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4: {}
  },
  emits: ["firstClick", "secondClick", "thirdClick"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$d;
      const _component_diceTr = _sfc_main$a;
      _push(ssrRenderComponent(_component_Card, mergeProps({ class: "w-fit h-fit flex flex-col gap-1 px-2 py-1 bg-black bg-opacity-10 border-0 text-xs" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_diceTr, {
              "\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704": _ctx.\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4[0],
              onClick: (arg) => emit("firstClick", arg)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_diceTr, {
              "\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704": _ctx.\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4[1],
              onClick: (arg) => emit("secondClick", arg)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_diceTr, {
              "\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704": _ctx.\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4[2],
              onClick: (arg) => emit("thirdClick", arg)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_diceTr, {
                "\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704": _ctx.\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4[0],
                onClick: (arg) => emit("firstClick", arg)
              }, null, 8, ["\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704", "onClick"]),
              createVNode(_component_diceTr, {
                "\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704": _ctx.\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4[1],
                onClick: (arg) => emit("secondClick", arg)
              }, null, 8, ["\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704", "onClick"]),
              createVNode(_component_diceTr, {
                "\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704": _ctx.\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4[2],
                onClick: (arg) => emit("thirdClick", arg)
              }, null, 8, ["\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704", "onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/diceTable.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "tripleDice",
  __ssrInlineRender: true,
  props: {
    \uC8FC\uC0AC\uC704: {},
    count: {},
    \uAC10\uB3C4: {}
  },
  setup(__props) {
    const props = __props;
    const color = computed(() => {
      const num = Math.floor(props.count / 150) - props.\uAC10\uB3C4;
      if (num <= 0) {
        return "bg-emerald-700";
      }
      return getColorClass(num);
    });
    const \uAC00\uC774\uB4DC = computed(() => {
      return Math.max(0, Math.floor(props.count / 150) - props.\uAC10\uB3C4);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$d;
      _push(ssrRenderComponent(_component_Card, mergeProps({
        class: ["w-fit px-3 py-1 flex gap-3 border-0", [unref(color)]]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>${ssrInterpolate(unref(\uAC00\uC774\uB4DC))}</div>`);
            _push2(ssrRenderComponent(_component_Card, { class: "w-8 h-8 flex items-center justify-center border-0 bg-emerald-100" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.\uC8FC\uC0AC\uC704)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.\uC8FC\uC0AC\uC704), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Card, { class: "w-8 h-8 flex items-center justify-center border-0 bg-emerald-100" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.\uC8FC\uC0AC\uC704)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.\uC8FC\uC0AC\uC704), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Card, { class: "w-8 h-8 flex items-center justify-center border-0 bg-emerald-100" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.\uC8FC\uC0AC\uC704)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.\uC8FC\uC0AC\uC704), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", null, toDisplayString(unref(\uAC00\uC774\uB4DC)), 1),
              createVNode(_component_Card, { class: "w-8 h-8 flex items-center justify-center border-0 bg-emerald-100" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.\uC8FC\uC0AC\uC704), 1)
                ]),
                _: 1
              }),
              createVNode(_component_Card, { class: "w-8 h-8 flex items-center justify-center border-0 bg-emerald-100" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.\uC8FC\uC0AC\uC704), 1)
                ]),
                _: 1
              }),
              createVNode(_component_Card, { class: "w-8 h-8 flex items-center justify-center border-0 bg-emerald-100" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.\uC8FC\uC0AC\uC704), 1)
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tripleDice.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "tripleDiceWarp",
  __ssrInlineRender: true,
  props: {
    \uC8FC\uC0AC\uC704\uB4E4: {},
    triples: {},
    \uAC10\uB3C4: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$d;
      const _component_TripleDice = _sfc_main$8;
      _push(ssrRenderComponent(_component_Card, mergeProps({ class: "w-fit px-2 py-1 flex flex-col bg-emerald-500 border-0" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-center text-white"${_scopeId}>1:150</div><div class="flex flex-col gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TripleDice, {
              "\uC8FC\uC0AC\uC704": _ctx.\uC8FC\uC0AC\uC704\uB4E4[0],
              count: _ctx.triples[0],
              "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TripleDice, {
              "\uC8FC\uC0AC\uC704": _ctx.\uC8FC\uC0AC\uC704\uB4E4[1],
              count: _ctx.triples[1],
              "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TripleDice, {
              "\uC8FC\uC0AC\uC704": _ctx.\uC8FC\uC0AC\uC704\uB4E4[2],
              count: _ctx.triples[2],
              "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-center text-white" }, "1:150"),
              createVNode("div", { class: "flex flex-col gap-1" }, [
                createVNode(_component_TripleDice, {
                  "\uC8FC\uC0AC\uC704": _ctx.\uC8FC\uC0AC\uC704\uB4E4[0],
                  count: _ctx.triples[0],
                  "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
                }, null, 8, ["\uC8FC\uC0AC\uC704", "count", "\uAC10\uB3C4"]),
                createVNode(_component_TripleDice, {
                  "\uC8FC\uC0AC\uC704": _ctx.\uC8FC\uC0AC\uC704\uB4E4[1],
                  count: _ctx.triples[1],
                  "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
                }, null, 8, ["\uC8FC\uC0AC\uC704", "count", "\uAC10\uB3C4"]),
                createVNode(_component_TripleDice, {
                  "\uC8FC\uC0AC\uC704": _ctx.\uC8FC\uC0AC\uC704\uB4E4[2],
                  count: _ctx.triples[2],
                  "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
                }, null, 8, ["\uC8FC\uC0AC\uC704", "count", "\uAC10\uB3C4"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tripleDiceWarp.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "anyTriple",
  __ssrInlineRender: true,
  props: {
    count: {},
    \uAC10\uB3C4: {}
  },
  setup(__props) {
    const props = __props;
    const color = computed(() => {
      const num = Math.floor(props.count / 30) - props.\uAC10\uB3C4;
      if (num <= 0) {
        return "bg-emerald-700";
      }
      return getColorClass(num);
    });
    const \uAC00\uC774\uB4DC = computed(() => {
      return Math.max(0, Math.floor(props.count / 30) - props.\uAC10\uB3C4);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$d;
      _push(ssrRenderComponent(_component_Card, mergeProps({ class: "w-fit px-2 py-1 flex flex-col bg-emerald-500 border-0" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-center text-white"${_scopeId}>1:30 (${ssrInterpolate(unref(\uAC00\uC774\uB4DC))})</div><div class="flex justify-center text-sm text-yellow-200"${_scopeId}>ANY TRIPLE</div><div class="flex flex-col gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Card, {
              class: ["w-fit px-1 py-1 flex gap-3 border-0", [unref(color)]]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-2"${_scopeId2}><div class="flex items-center gap-1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Card, { class: "w-7 h-7 flex items-center justify-center border-0 bg-emerald-100" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`1`);
                      } else {
                        return [
                          createTextVNode("1")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="text-white"${_scopeId2}>X3</p></div><div class="flex items-center gap-1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Card, { class: "w-7 h-7 flex items-center justify-center border-0 bg-emerald-100" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`3`);
                      } else {
                        return [
                          createTextVNode("3")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="text-white"${_scopeId2}>X3</p></div><div class="flex items-center gap-1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Card, { class: "w-7 h-7 flex items-center justify-center border-0 bg-emerald-100" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`5`);
                      } else {
                        return [
                          createTextVNode("5")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="text-white"${_scopeId2}>X3</p></div></div><div class="flex flex-col gap-2"${_scopeId2}><div class="flex items-center gap-1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Card, { class: "w-7 h-7 flex items-center justify-center border-0 bg-emerald-100" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`2`);
                      } else {
                        return [
                          createTextVNode("2")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="text-white"${_scopeId2}>X3</p></div><div class="flex items-center gap-1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Card, { class: "w-7 h-7 flex items-center justify-center border-0 bg-emerald-100" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`4`);
                      } else {
                        return [
                          createTextVNode("4")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="text-white"${_scopeId2}>X3</p></div><div class="flex items-center gap-1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Card, { class: "w-7 h-7 flex items-center justify-center border-0 bg-emerald-100" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`5`);
                      } else {
                        return [
                          createTextVNode("5")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="text-white"${_scopeId2}>X3</p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-2" }, [
                      createVNode("div", { class: "flex items-center gap-1" }, [
                        createVNode(_component_Card, { class: "w-7 h-7 flex items-center justify-center border-0 bg-emerald-100" }, {
                          default: withCtx(() => [
                            createTextVNode("1")
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "text-white" }, "X3")
                      ]),
                      createVNode("div", { class: "flex items-center gap-1" }, [
                        createVNode(_component_Card, { class: "w-7 h-7 flex items-center justify-center border-0 bg-emerald-100" }, {
                          default: withCtx(() => [
                            createTextVNode("3")
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "text-white" }, "X3")
                      ]),
                      createVNode("div", { class: "flex items-center gap-1" }, [
                        createVNode(_component_Card, { class: "w-7 h-7 flex items-center justify-center border-0 bg-emerald-100" }, {
                          default: withCtx(() => [
                            createTextVNode("5")
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "text-white" }, "X3")
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col gap-2" }, [
                      createVNode("div", { class: "flex items-center gap-1" }, [
                        createVNode(_component_Card, { class: "w-7 h-7 flex items-center justify-center border-0 bg-emerald-100" }, {
                          default: withCtx(() => [
                            createTextVNode("2")
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "text-white" }, "X3")
                      ]),
                      createVNode("div", { class: "flex items-center gap-1" }, [
                        createVNode(_component_Card, { class: "w-7 h-7 flex items-center justify-center border-0 bg-emerald-100" }, {
                          default: withCtx(() => [
                            createTextVNode("4")
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "text-white" }, "X3")
                      ]),
                      createVNode("div", { class: "flex items-center gap-1" }, [
                        createVNode(_component_Card, { class: "w-7 h-7 flex items-center justify-center border-0 bg-emerald-100" }, {
                          default: withCtx(() => [
                            createTextVNode("5")
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "text-white" }, "X3")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-center text-white" }, "1:30 (" + toDisplayString(unref(\uAC00\uC774\uB4DC)) + ")", 1),
              createVNode("div", { class: "flex justify-center text-sm text-yellow-200" }, "ANY TRIPLE"),
              createVNode("div", { class: "flex flex-col gap-1" }, [
                createVNode(_component_Card, {
                  class: ["w-fit px-1 py-1 flex gap-3 border-0", [unref(color)]]
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-col gap-2" }, [
                      createVNode("div", { class: "flex items-center gap-1" }, [
                        createVNode(_component_Card, { class: "w-7 h-7 flex items-center justify-center border-0 bg-emerald-100" }, {
                          default: withCtx(() => [
                            createTextVNode("1")
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "text-white" }, "X3")
                      ]),
                      createVNode("div", { class: "flex items-center gap-1" }, [
                        createVNode(_component_Card, { class: "w-7 h-7 flex items-center justify-center border-0 bg-emerald-100" }, {
                          default: withCtx(() => [
                            createTextVNode("3")
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "text-white" }, "X3")
                      ]),
                      createVNode("div", { class: "flex items-center gap-1" }, [
                        createVNode(_component_Card, { class: "w-7 h-7 flex items-center justify-center border-0 bg-emerald-100" }, {
                          default: withCtx(() => [
                            createTextVNode("5")
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "text-white" }, "X3")
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col gap-2" }, [
                      createVNode("div", { class: "flex items-center gap-1" }, [
                        createVNode(_component_Card, { class: "w-7 h-7 flex items-center justify-center border-0 bg-emerald-100" }, {
                          default: withCtx(() => [
                            createTextVNode("2")
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "text-white" }, "X3")
                      ]),
                      createVNode("div", { class: "flex items-center gap-1" }, [
                        createVNode(_component_Card, { class: "w-7 h-7 flex items-center justify-center border-0 bg-emerald-100" }, {
                          default: withCtx(() => [
                            createTextVNode("4")
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "text-white" }, "X3")
                      ]),
                      createVNode("div", { class: "flex items-center gap-1" }, [
                        createVNode(_component_Card, { class: "w-7 h-7 flex items-center justify-center border-0 bg-emerald-100" }, {
                          default: withCtx(() => [
                            createTextVNode("5")
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "text-white" }, "X3")
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["class"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/anyTriple.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "sumDice",
  __ssrInlineRender: true,
  props: {
    sum: {},
    description: {},
    count: {},
    \uAC10\uB3C4: {}
  },
  setup(__props) {
    const props = __props;
    const color = computed(() => {
      const num = Math.floor(props.count / props.description) - props.\uAC10\uB3C4;
      if (num <= 0) {
        return "bg-emerald-500";
      }
      return getColorClass(num);
    });
    const \uAC00\uC774\uB4DC = computed(() => {
      return Math.max(0, Math.floor(props.count / props.description) - props.\uAC10\uB3C4);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$d;
      _push(ssrRenderComponent(_component_Card, mergeProps({
        class: ["w-14 px-3 py-2 flex flex-col border-0 justify-between items-center", [unref(color)]]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-emerald-100 text-3xl font-bold"${_scopeId}>${ssrInterpolate(_ctx.sum)}</div><div class="text-xs text-white"${_scopeId}>${ssrInterpolate(unref(\uAC00\uC774\uB4DC))}</div><div class="text-emerald-100 text-sm text-nowrap"${_scopeId}> 1 : ${ssrInterpolate(_ctx.description)}</div>`);
          } else {
            return [
              createVNode("div", { class: "text-emerald-100 text-3xl font-bold" }, toDisplayString(_ctx.sum), 1),
              createVNode("div", { class: "text-xs text-white" }, toDisplayString(unref(\uAC00\uC774\uB4DC)), 1),
              createVNode("div", { class: "text-emerald-100 text-sm text-nowrap" }, " 1 : " + toDisplayString(_ctx.description), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sumDice.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "sumDiceWrap",
  __ssrInlineRender: true,
  props: {
    sumOfThreeDice: {},
    \uAC10\uB3C4: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SumDice = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-1" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SumDice, {
        sum: 4,
        description: 60,
        count: _ctx.sumOfThreeDice[0].value,
        "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
      }, null, _parent));
      _push(ssrRenderComponent(_component_SumDice, {
        sum: 5,
        description: 20,
        count: _ctx.sumOfThreeDice[1].value,
        "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
      }, null, _parent));
      _push(ssrRenderComponent(_component_SumDice, {
        sum: 6,
        description: 18,
        count: _ctx.sumOfThreeDice[2].value,
        "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
      }, null, _parent));
      _push(ssrRenderComponent(_component_SumDice, {
        sum: 7,
        description: 12,
        count: _ctx.sumOfThreeDice[3].value,
        "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
      }, null, _parent));
      _push(ssrRenderComponent(_component_SumDice, {
        sum: 8,
        description: 8,
        count: _ctx.sumOfThreeDice[4].value,
        "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
      }, null, _parent));
      _push(ssrRenderComponent(_component_SumDice, {
        sum: 9,
        description: 6,
        count: _ctx.sumOfThreeDice[5].value,
        "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
      }, null, _parent));
      _push(ssrRenderComponent(_component_SumDice, {
        sum: 10,
        description: 6,
        count: _ctx.sumOfThreeDice[6].value,
        "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
      }, null, _parent));
      _push(ssrRenderComponent(_component_SumDice, {
        sum: 11,
        description: 6,
        count: _ctx.sumOfThreeDice[7].value,
        "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
      }, null, _parent));
      _push(ssrRenderComponent(_component_SumDice, {
        sum: 12,
        description: 6,
        count: _ctx.sumOfThreeDice[8].value,
        "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
      }, null, _parent));
      _push(ssrRenderComponent(_component_SumDice, {
        sum: 13,
        description: 8,
        count: _ctx.sumOfThreeDice[9].value,
        "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
      }, null, _parent));
      _push(ssrRenderComponent(_component_SumDice, {
        sum: 14,
        description: 12,
        count: _ctx.sumOfThreeDice[10].value,
        "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
      }, null, _parent));
      _push(ssrRenderComponent(_component_SumDice, {
        sum: 15,
        description: 18,
        count: _ctx.sumOfThreeDice[11].value,
        "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
      }, null, _parent));
      _push(ssrRenderComponent(_component_SumDice, {
        sum: 16,
        description: 20,
        count: _ctx.sumOfThreeDice[12].value,
        "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
      }, null, _parent));
      _push(ssrRenderComponent(_component_SumDice, {
        sum: 17,
        description: 60,
        count: _ctx.sumOfThreeDice[13].value,
        "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sumDiceWrap.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "diceHistory",
  __ssrInlineRender: true,
  props: {
    \uAE30\uB85D\uB4E4: {}
  },
  setup(__props) {
    const sum = (\uAE30\uB85D) => \uAE30\uB85D[0] + \uAE30\uB85D[1] + \uAE30\uB85D[2];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$d;
      _push(ssrRenderComponent(_component_Card, mergeProps({ class: "w-fit flex gap-1 px-2 py-1 bg-black bg-opacity-50 text-white border-0" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.\uAE30\uB85D\uB4E4.slice(-25).reverse(), (\uAE30\uB85D) => {
              _push2(`<div class="flex flex-col items-center justify-center text-xs w-4"${_scopeId}><div class="${ssrRenderClass([sum(\uAE30\uB85D) < 11 ? "text-blue-300" : "text-red-300", "text-base"])}"${_scopeId}>${ssrInterpolate(sum(\uAE30\uB85D))}</div><div${_scopeId}>${ssrInterpolate(\uAE30\uB85D[0])}</div><div${_scopeId}>${ssrInterpolate(\uAE30\uB85D[1])}</div><div${_scopeId}>${ssrInterpolate(\uAE30\uB85D[2])}</div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.\uAE30\uB85D\uB4E4.slice(-25).reverse(), (\uAE30\uB85D) => {
                return openBlock(), createBlock("div", { class: "flex flex-col items-center justify-center text-xs w-4" }, [
                  createVNode("div", {
                    class: ["text-base", sum(\uAE30\uB85D) < 11 ? "text-blue-300" : "text-red-300"]
                  }, toDisplayString(sum(\uAE30\uB85D)), 3),
                  createVNode("div", null, toDisplayString(\uAE30\uB85D[0]), 1),
                  createVNode("div", null, toDisplayString(\uAE30\uB85D[1]), 1),
                  createVNode("div", null, toDisplayString(\uAE30\uB85D[2]), 1)
                ]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/diceHistory.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "doubleDice",
  __ssrInlineRender: true,
  props: {
    \uC8FC\uC0AC\uC704: {},
    count: {},
    \uAC10\uB3C4: {}
  },
  setup(__props) {
    const props = __props;
    const color = computed(() => {
      const num = Math.floor(props.count / 8) - props.\uAC10\uB3C4;
      if (num <= 0) {
        return "bg-emerald-700";
      }
      return getColorClass(num);
    });
    const \uAC00\uC774\uB4DC = computed(() => {
      return Math.max(0, Math.floor(props.count / 8) - props.\uAC10\uB3C4);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$d;
      _push(ssrRenderComponent(_component_Card, mergeProps({
        class: ["w-fit px-1 py-1 flex flex-col border-0 h-32 justify-between items-center text-white text-xs", [color.value]]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Card, { class: "w-10 h-10 flex items-center justify-center border-0 bg-emerald-100" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.\uC8FC\uC0AC\uC704)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.\uC8FC\uC0AC\uC704), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>${ssrInterpolate(\uAC00\uC774\uB4DC.value)}</div>`);
            _push2(ssrRenderComponent(_component_Card, { class: "w-10 h-10 flex items-center justify-center border-0 bg-emerald-100" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.\uC8FC\uC0AC\uC704)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.\uC8FC\uC0AC\uC704), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Card, { class: "w-10 h-10 flex items-center justify-center border-0 bg-emerald-100" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.\uC8FC\uC0AC\uC704), 1)
                ]),
                _: 1
              }),
              createVNode("div", null, toDisplayString(\uAC00\uC774\uB4DC.value), 1),
              createVNode(_component_Card, { class: "w-10 h-10 flex items-center justify-center border-0 bg-emerald-100" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.\uC8FC\uC0AC\uC704), 1)
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/doubleDice.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "doubleDiceWarp",
  __ssrInlineRender: true,
  props: {
    \uC8FC\uC0AC\uC704\uB4E4: {},
    doubles: {},
    \uAC10\uB3C4: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$d;
      const _component_DoubleDice = _sfc_main$2;
      _push(ssrRenderComponent(_component_Card, mergeProps({ class: "w-fit px-2 py-1 flex flex-col bg-emerald-500 border-0" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-center text-white"${_scopeId}>1:8</div><div class="flex gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DoubleDice, {
              "\uC8FC\uC0AC\uC704": _ctx.\uC8FC\uC0AC\uC704\uB4E4[0],
              count: _ctx.doubles[0],
              "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DoubleDice, {
              "\uC8FC\uC0AC\uC704": _ctx.\uC8FC\uC0AC\uC704\uB4E4[1],
              count: _ctx.doubles[1],
              "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DoubleDice, {
              "\uC8FC\uC0AC\uC704": _ctx.\uC8FC\uC0AC\uC704\uB4E4[2],
              count: _ctx.doubles[2],
              "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-center text-white" }, "1:8"),
              createVNode("div", { class: "flex gap-1" }, [
                createVNode(_component_DoubleDice, {
                  "\uC8FC\uC0AC\uC704": _ctx.\uC8FC\uC0AC\uC704\uB4E4[0],
                  count: _ctx.doubles[0],
                  "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
                }, null, 8, ["\uC8FC\uC0AC\uC704", "count", "\uAC10\uB3C4"]),
                createVNode(_component_DoubleDice, {
                  "\uC8FC\uC0AC\uC704": _ctx.\uC8FC\uC0AC\uC704\uB4E4[1],
                  count: _ctx.doubles[1],
                  "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
                }, null, 8, ["\uC8FC\uC0AC\uC704", "count", "\uAC10\uB3C4"]),
                createVNode(_component_DoubleDice, {
                  "\uC8FC\uC0AC\uC704": _ctx.\uC8FC\uC0AC\uC704\uB4E4[2],
                  count: _ctx.doubles[2],
                  "\uAC10\uB3C4": _ctx.\uAC10\uB3C4
                }, null, 8, ["\uC8FC\uC0AC\uC704", "count", "\uAC10\uB3C4"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/doubleDiceWarp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "daisai",
  __ssrInlineRender: true,
  setup(__props) {
    const \uAC10\uB3C4 = ref(5);
    const \uAE30\uB85D\uB4E4 = ref([]);
    const \uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4 = ref([0, 0, 0]);
    const \uC8FC\uC0AC\uC704\uC785\uB825 = () => {
      \uAE30\uB85D\uB4E4.value.push(\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4.value);
      anyTriple.value++;
      for (let i = 0; i < 6; i++) {
        triples[i].value++;
        if (\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4.value.filter((val) => val === i + 1).length === 3) {
          triples[i].value -= 151;
          anyTriple.value -= 31;
        }
      }
      for (let i = 0; i < 6; i++) {
        doubles[i].value++;
        if (\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4.value.filter((val) => val === i + 1).length === 2) {
          doubles[i].value -= 9;
        }
      }
      for (let i = 0; i < 14; i++) {
        sumOfThreeDice[i].value++;
      }
      const sum = \uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4.value.reduce((a, b) => a + b, 0);
      if (3 < sum && sum < 18) {
        if (sum === 4 || sum === 17) {
          sumOfThreeDice[sum - 4].value -= 61;
        } else if (sum === 5 || sum === 16) {
          sumOfThreeDice[sum - 4].value -= 21;
        } else if (sum === 6 || sum === 15) {
          sumOfThreeDice[sum - 4].value -= 18;
        } else if (sum === 7 || sum === 14) {
          sumOfThreeDice[sum - 4].value -= 13;
        } else if (sum === 8 || sum === 13) {
          sumOfThreeDice[sum - 4].value -= 9;
        } else if (sum === 9 || sum === 10 || sum === 11 || sum === 12) {
          sumOfThreeDice[sum - 4].value -= 7;
        }
      }
      \uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4.value = [0, 0, 0];
    };
    const \uB79C\uB364\uC785\uB825 = () => {
      \uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4.value = Array(3).fill(0).map(() => Math.floor(Math.random() * 6) + 1);
      \uAE30\uB85D\uB4E4.value.push(\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4.value);
      anyTriple.value++;
      for (let i = 0; i < 6; i++) {
        triples[i].value++;
        if (\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4.value.filter((val) => val === i + 1).length === 3) {
          triples[i].value -= 152;
          anyTriple.value -= 32;
        }
      }
      for (let i = 0; i < 6; i++) {
        doubles[i].value++;
        if (\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4.value.filter((val) => val === i + 1).length === 2) {
          doubles[i].value -= 10;
        }
      }
      for (let i = 0; i < 14; i++) {
        sumOfThreeDice[i].value++;
      }
      const sum = \uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4.value.reduce((a, b) => a + b, 0);
      if (3 < sum && sum < 18) {
        if (sum === 4 || sum === 17) {
          sumOfThreeDice[sum - 4].value -= 62;
        } else if (sum === 5 || sum === 16) {
          sumOfThreeDice[sum - 4].value -= 22;
        } else if (sum === 6 || sum === 15) {
          sumOfThreeDice[sum - 4].value -= 20;
        } else if (sum === 7 || sum === 14) {
          sumOfThreeDice[sum - 4].value -= 14;
        } else if (sum === 8 || sum === 13) {
          sumOfThreeDice[sum - 4].value -= 10;
        } else if (sum === 9 || sum === 10 || sum === 11 || sum === 12) {
          sumOfThreeDice[sum - 4].value -= 8;
        }
      }
      \uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4.value = [0, 0, 0];
    };
    let interval = null;
    const \uC790\uB3D9\uC785\uB825 = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      } else {
        interval = setInterval();
      }
    };
    const anyTriple = ref(0);
    const triples = Array(6).fill(0).map(() => ref(0));
    const doubles = Array(6).fill(0).map(() => ref(0));
    const sumOfThreeDice = Array(14).fill(0).map(() => ref(0));
    const isDiceInputDisabled = computed(() => \uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4.value.includes(0));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DiceTable = _sfc_main$9;
      const _component_Button = _sfc_main$c;
      const _component_Card = _sfc_main$d;
      const _component_TripleDiceWarp = _sfc_main$7;
      const _component_AnyTriple = _sfc_main$6;
      const _component_SumDiceWrap = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 bg-emerald-700 flex flex-col gap-1 items-center" }, _attrs))}><div class="flex gap-1 items-end">`);
      _push(ssrRenderComponent(_component_DiceTable, {
        "\uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4": \uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4.value,
        onFirstClick: (arg) => \uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4.value[0] = arg,
        onSecondClick: (arg) => \uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4.value[1] = arg,
        onThirdClick: (arg) => \uC120\uD0DD\uB41C\uC8FC\uC0AC\uC704\uB4E4.value[2] = arg
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        disabled: isDiceInputDisabled.value,
        onClick: ($event) => \uC8FC\uC0AC\uC704\uC785\uB825()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC120\uD0DD\uC644\uB8CC`);
          } else {
            return [
              createTextVNode("\uC120\uD0DD\uC644\uB8CC")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        onClick: ($event) => \uB79C\uB364\uC785\uB825()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uB79C\uB364\uC785\uB825`);
          } else {
            return [
              createTextVNode("\uB79C\uB364\uC785\uB825")
            ];
          }
        }),
        _: 1
      }, _parent));
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
      _push(`<div class="flex items-center gap-1 text-white">`);
      _push(ssrRenderComponent(_component_Button, {
        onClick: ($event) => \uAC10\uB3C4.value++
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
      _push(`<div>${ssrInterpolate(\uAC10\uB3C4.value)}</div>`);
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
            _push2(`${ssrInterpolate(\uAE30\uB85D\uB4E4.value.length)}`);
          } else {
            return [
              createTextVNode(toDisplayString(\uAE30\uB85D\uB4E4.value.length), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (\uAE30\uB85D\uB4E4.value.length) {
        _push(ssrRenderComponent(_sfc_main$3, {
          "\uAE30\uB85D\uB4E4": \uAE30\uB85D\uB4E4.value
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex gap-1">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        "\uC8FC\uC0AC\uC704\uB4E4": [1, 2, 3],
        doubles: [unref(doubles)[0].value, unref(doubles)[1].value, unref(doubles)[2].value],
        "\uAC10\uB3C4": \uAC10\uB3C4.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_TripleDiceWarp, {
        "\uC8FC\uC0AC\uC704\uB4E4": [1, 2, 3],
        triples: [unref(triples)[0].value, unref(triples)[1].value, unref(triples)[2].value],
        "\uAC10\uB3C4": \uAC10\uB3C4.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_AnyTriple, {
        count: anyTriple.value,
        "\uAC10\uB3C4": \uAC10\uB3C4.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_TripleDiceWarp, {
        "\uC8FC\uC0AC\uC704\uB4E4": [4, 5, 6],
        triples: [unref(triples)[3].value, unref(triples)[4].value, unref(triples)[5].value],
        "\uAC10\uB3C4": \uAC10\uB3C4.value
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        "\uC8FC\uC0AC\uC704\uB4E4": [4, 5, 6],
        doubles: [unref(doubles)[3].value, unref(doubles)[4].value, unref(doubles)[5].value],
        "\uAC10\uB3C4": \uAC10\uB3C4.value
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_SumDiceWrap, {
        sumOfThreeDice: unref(sumOfThreeDice),
        "\uAC10\uB3C4": \uAC10\uB3C4.value
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/daisai.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=daisai-DTFJiRx4.mjs.map
