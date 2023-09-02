function h(t, n, l, r, o, i, f, c) {
  var e = typeof t == "function" ? t.options : t;
  n && (e.render = n, e.staticRenderFns = l, e._compiled = !0), r && (e.functional = !0), i && (e._scopeId = "data-v-" + i);
  var s;
  if (f ? (s = function(a) {
    a = a || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !a && typeof __VUE_SSR_CONTEXT__ < "u" && (a = __VUE_SSR_CONTEXT__), o && o.call(this, a), a && a._registeredComponents && a._registeredComponents.add(f);
  }, e._ssrRegister = s) : o && (s = c ? function() {
    o.call(
      this,
      (e.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : o), s)
    if (e.functional) {
      e._injectStyles = s;
      var p = e.render;
      e.render = function(v, d) {
        return s.call(d), p(v, d);
      };
    } else {
      var u = e.beforeCreate;
      e.beforeCreate = u ? [].concat(u, s) : [s];
    }
  return {
    exports: t,
    options: e
  };
}
const m = {
  name: "my-select",
  props: {
    value: {
      default: ""
    }
  },
  methods: {
    onInput(t) {
      this.$emit("input", t);
    }
  },
  created() {
  },
  mounted() {
  }
};
var C = function() {
  var n = this, l = n._self._c;
  return l("el-select", n._g(n._b({ staticClass: "my-select-wrapper", attrs: { value: n.value } }, "el-select", n.$attrs, !1), n.$listeners), n._l(n.$attrs.options, function(r) {
    return l("el-option", { key: r.value, attrs: { label: r.label, value: r.value } });
  }), 1);
}, $ = [], b = /* @__PURE__ */ h(
  m,
  C,
  $,
  !1,
  null,
  "a3e0b1b4",
  null,
  null
);
const _ = b.exports;
_.install = (t) => {
  t.component(_.name, _);
};
export {
  _ as default
};
