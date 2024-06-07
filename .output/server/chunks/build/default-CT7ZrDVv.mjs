import { cva } from 'class-variance-authority';
import { _ as __nuxt_component_0 } from './nuxt-link-BxPsWs1L.mjs';
import { _ as _export_sfc, c as useRouter } from './server.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, renderSlot, createVNode, ref, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { useForwardProps, NavigationMenuViewport, useForwardPropsEmits, NavigationMenuRoot, NavigationMenuList, NavigationMenuItem, Separator } from 'radix-vue';
import { c as cn } from './utils-H80jjgLf.mjs';
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
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CNavigationMenu",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const currentUrl = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavigationMenu = _sfc_main$5;
      const _component_NavigationMenuList = _sfc_main$4;
      const _component_NavigationMenuItem = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0;
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
                          class: ["px-2 font-bold", { "text-blue-500": unref(currentUrl) == "/" }],
                          onClick: () => currentUrl.value = "/"
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
                            class: ["px-2 font-bold", { "text-blue-500": unref(currentUrl) == "/" }],
                            onClick: () => currentUrl.value = "/"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" casino ")
                            ]),
                            _: 1
                          }, 8, ["class", "onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NavigationMenuItem, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: "/stock/kr",
                          class: ["px-2", { "text-blue-500": unref(currentUrl) == "/stock/kr" }],
                          onClick: () => currentUrl.value = "/stock/kr"
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
                            to: "/stock/kr",
                            class: ["px-2", { "text-blue-500": unref(currentUrl) == "/stock/kr" }],
                            onClick: () => currentUrl.value = "/stock/kr"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" stock ")
                            ]),
                            _: 1
                          }, 8, ["class", "onClick"])
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
                          class: ["px-2", { "text-blue-500": unref(currentUrl) == "/daisai" }],
                          onClick: () => currentUrl.value = "/daisai"
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
                            class: ["px-2", { "text-blue-500": unref(currentUrl) == "/daisai" }],
                            onClick: () => currentUrl.value = "/daisai"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" daisai ")
                            ]),
                            _: 1
                          }, 8, ["class", "onClick"])
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
                          class: ["px-2", { "text-blue-500": unref(currentUrl) == "/roulette" }],
                          onClick: () => currentUrl.value = "/roulette"
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
                            class: ["px-2", { "text-blue-500": unref(currentUrl) == "/roulette" }],
                            onClick: () => currentUrl.value = "/roulette"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" roulette ")
                            ]),
                            _: 1
                          }, 8, ["class", "onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NavigationMenuItem, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: "/api",
                          class: ["px-2", { "text-blue-500": unref(currentUrl) == "/api" }],
                          onClick: () => currentUrl.value = "/api"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` api `);
                            } else {
                              return [
                                createTextVNode(" api ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, {
                            to: "/api",
                            class: ["px-2", { "text-blue-500": unref(currentUrl) == "/api" }],
                            onClick: () => currentUrl.value = "/api"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" api ")
                            ]),
                            _: 1
                          }, 8, ["class", "onClick"])
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
                          class: ["px-2 font-bold", { "text-blue-500": unref(currentUrl) == "/" }],
                          onClick: () => currentUrl.value = "/"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" casino ")
                          ]),
                          _: 1
                        }, 8, ["class", "onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NavigationMenuItem, null, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: "/stock/kr",
                          class: ["px-2", { "text-blue-500": unref(currentUrl) == "/stock/kr" }],
                          onClick: () => currentUrl.value = "/stock/kr"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" stock ")
                          ]),
                          _: 1
                        }, 8, ["class", "onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NavigationMenuItem, null, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: "/daisai",
                          class: ["px-2", { "text-blue-500": unref(currentUrl) == "/daisai" }],
                          onClick: () => currentUrl.value = "/daisai"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" daisai ")
                          ]),
                          _: 1
                        }, 8, ["class", "onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NavigationMenuItem, null, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: "/roulette",
                          class: ["px-2", { "text-blue-500": unref(currentUrl) == "/roulette" }],
                          onClick: () => currentUrl.value = "/roulette"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" roulette ")
                          ]),
                          _: 1
                        }, 8, ["class", "onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NavigationMenuItem, null, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: "/api",
                          class: ["px-2", { "text-blue-500": unref(currentUrl) == "/api" }],
                          onClick: () => currentUrl.value = "/api"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" api ")
                          ]),
                          _: 1
                        }, 8, ["class", "onClick"])
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
                        class: ["px-2 font-bold", { "text-blue-500": unref(currentUrl) == "/" }],
                        onClick: () => currentUrl.value = "/"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" casino ")
                        ]),
                        _: 1
                      }, 8, ["class", "onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NavigationMenuItem, null, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: "/stock/kr",
                        class: ["px-2", { "text-blue-500": unref(currentUrl) == "/stock/kr" }],
                        onClick: () => currentUrl.value = "/stock/kr"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" stock ")
                        ]),
                        _: 1
                      }, 8, ["class", "onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NavigationMenuItem, null, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: "/daisai",
                        class: ["px-2", { "text-blue-500": unref(currentUrl) == "/daisai" }],
                        onClick: () => currentUrl.value = "/daisai"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" daisai ")
                        ]),
                        _: 1
                      }, 8, ["class", "onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NavigationMenuItem, null, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: "/roulette",
                        class: ["px-2", { "text-blue-500": unref(currentUrl) == "/roulette" }],
                        onClick: () => currentUrl.value = "/roulette"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" roulette ")
                        ]),
                        _: 1
                      }, 8, ["class", "onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NavigationMenuItem, null, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: "/api",
                        class: ["px-2", { "text-blue-500": unref(currentUrl) == "/api" }],
                        onClick: () => currentUrl.value = "/api"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" api ")
                        ]),
                        _: 1
                      }, 8, ["class", "onClick"])
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
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CNavigationMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_CNavigationMenu = _sfc_main$2;
  const _component_Separator = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-screen h-screen flex flex-col" }, _attrs))}><div class="shrink-0">`);
  _push(ssrRenderComponent(_component_CNavigationMenu, { class: "shrink-0 h-fit" }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Separator, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-CT7ZrDVv.mjs.map
