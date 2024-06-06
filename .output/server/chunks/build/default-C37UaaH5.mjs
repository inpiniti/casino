import { cva } from 'class-variance-authority';
import { _ as __nuxt_component_0$1 } from './nuxt-link-D35ckuRb.mjs';
import { useSSRContext, defineComponent, ref, computed, mergeProps, unref, withCtx, renderSlot, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { useForwardProps, NavigationMenuViewport, useForwardPropsEmits, NavigationMenuRoot, NavigationMenuList, NavigationMenuItem, Separator } from 'radix-vue';
import { c as cn } from './utils-H80jjgLf.mjs';
import { u as useState } from './state-tqLlnwND.mjs';
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
import 'clsx';
import 'tailwind-merge';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuViewport",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
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
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute left-0 top-full flex justify-center" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(NavigationMenuViewport), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "origin-top-center relative mt-1.5 h-[--radix-navigation-menu-viewport-height] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[--radix-navigation-menu-viewport-width]",
          props.class
        )
      }), null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuViewport.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenu",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    orientation: {},
    delayDuration: {},
    skipDelayDuration: {},
    disableClickTrigger: { type: Boolean },
    disableHoverTrigger: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuRoot), mergeProps(unref(forwarded), {
        class: unref(cn)("relative z-10 flex max-w-max flex-1 items-center justify-center", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_sfc_main$6, null, null, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode(_sfc_main$6)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenu.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuList",
  __ssrInlineRender: true,
  props: {
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
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuList), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "group flex flex-1 list-none items-center justify-center gap-x-1",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuList.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuItem",
  __ssrInlineRender: true,
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuItem), mergeProps(props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NavigationMenu = _sfc_main$5;
  const _component_NavigationMenuList = _sfc_main$4;
  const _component_NavigationMenuItem = _sfc_main$3;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_NavigationMenu, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NavigationMenuList, { class: "px-8 py-4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NavigationMenuItem, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_NuxtLink, {
                      to: "/",
                      class: "px-2 font-bold"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` casino `);
                        } else {
                          return [
                            createTextVNode(" casino ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_NuxtLink, {
                        to: "/",
                        class: "px-2 font-bold"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" casino ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NavigationMenuItem, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_NuxtLink, {
                      to: "/stock",
                      class: "px-2"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` stock `);
                        } else {
                          return [
                            createTextVNode(" stock ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_NuxtLink, {
                        to: "/stock",
                        class: "px-2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" stock ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NavigationMenuItem, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_NuxtLink, {
                      to: "/daisai",
                      class: "px-2"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` daisai `);
                        } else {
                          return [
                            createTextVNode(" daisai ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_NuxtLink, {
                        to: "/daisai",
                        class: "px-2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" daisai ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NavigationMenuItem, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_NuxtLink, {
                      to: "/roulette",
                      class: "px-2"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` roulette `);
                        } else {
                          return [
                            createTextVNode(" roulette ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_NuxtLink, {
                        to: "/roulette",
                        class: "px-2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" roulette ")
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
                createVNode(_component_NavigationMenuItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtLink, {
                      to: "/",
                      class: "px-2 font-bold"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" casino ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_NavigationMenuItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtLink, {
                      to: "/stock",
                      class: "px-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" stock ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_NavigationMenuItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtLink, {
                      to: "/daisai",
                      class: "px-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" daisai ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_NavigationMenuItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtLink, {
                      to: "/roulette",
                      class: "px-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" roulette ")
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
      } else {
        return [
          createVNode(_component_NavigationMenuList, { class: "px-8 py-4" }, {
            default: withCtx(() => [
              createVNode(_component_NavigationMenuItem, null, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLink, {
                    to: "/",
                    class: "px-2 font-bold"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" casino ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_NavigationMenuItem, null, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLink, {
                    to: "/stock",
                    class: "px-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" stock ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_NavigationMenuItem, null, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLink, {
                    to: "/daisai",
                    class: "px-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" daisai ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_NavigationMenuItem, null, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLink, {
                    to: "/roulette",
                    class: "px-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" roulette ")
                    ]),
                    _: 1
                  })
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
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CNavigationMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/separator/Separator.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
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
      const _component_CNavigationMenu = __nuxt_component_0;
      const _component_Separator = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-screen h-screen flex flex-col" }, _attrs))}><div class="shrink-0">`);
      _push(ssrRenderComponent(_component_CNavigationMenu, { class: "shrink-0 h-fit" }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Separator, null, null, _parent));
      _push(`<div class="grow-[0] h-full flex divide-x overflow-hidden"><div class="shrink-0 w-60 h-full overflow-y-scroll scrollbar-hide"><div><input class="px-4 py-2 bg-neutral-100 w-full focus:outline-none" type="text" placeholder="search"${ssrRenderAttr("value", unref(search))}></div>`);
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
      _push(`</div><div class="flex flex-col grow-[0] h-full w-full bg-neutral-50">`);
      if (unref(selectedCountry)) {
        _push(`<div class="shrink-0 flex flex-col divide-y bg-white border-b"><div class="px-4 py-2 font-bold">${ssrInterpolate(unref(selectedCountry).name)}</div><div class="flex divide-x"><!--[-->`);
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
      _push(`<div class="grow-[0] h-full overflow-y-scroll scrollbar-hide">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-C37UaaH5.mjs.map
