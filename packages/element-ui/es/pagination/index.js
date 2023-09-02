Math.easeInOutQuad = function(e, t, o, a) {
  return e /= a / 2, e < 1 ? o / 2 * e * e + t : (e--, -o / 2 * (e * (e - 2) - 1) + t);
};
var h = function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
    window.setTimeout(e, 1e3 / 60);
  };
}();
function v(e) {
  document.documentElement.scrollTop = e, document.body.parentNode.scrollTop = e, document.body.scrollTop = e;
}
function y() {
  return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
}
function m(e, t, o) {
  const a = y(), u = e - a, l = 20;
  let s = 0;
  t = typeof t > "u" ? 500 : t;
  var d = function() {
    s += l;
    var n = Math.easeInOutQuad(s, a, u, t);
    v(n), s < t ? h(d) : o && typeof o == "function" && o();
  };
  d();
}
function C(e, t, o, a, u, l, s, d) {
  var n = typeof e == "function" ? e.options : e;
  t && (n.render = t, n.staticRenderFns = o, n._compiled = !0), a && (n.functional = !0), l && (n._scopeId = "data-v-" + l);
  var r;
  if (s ? (r = function(i) {
    i = i || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !i && typeof __VUE_SSR_CONTEXT__ < "u" && (i = __VUE_SSR_CONTEXT__), u && u.call(this, i), i && i._registeredComponents && i._registeredComponents.add(s);
  }, n._ssrRegister = r) : u && (r = d ? function() {
    u.call(
      this,
      (n.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : u), r)
    if (n.functional) {
      n._injectStyles = r;
      var g = n.render;
      n.render = function(_, f) {
        return r.call(f), g(_, f);
      };
    } else {
      var c = n.beforeCreate;
      n.beforeCreate = c ? [].concat(c, r) : [r];
    }
  return {
    exports: e,
    options: n
  };
}
const S = {
  name: "my-pagination",
  props: {
    total: {
      required: !0,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 20
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50];
      }
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper"
    },
    background: {
      type: Boolean,
      default: !0
    },
    autoScroll: {
      type: Boolean,
      default: !0
    },
    hidden: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.page;
      },
      set(e) {
        this.$emit("update:page", e);
      }
    },
    pageSize: {
      get() {
        return this.limit;
      },
      set(e) {
        this.$emit("update:limit", e);
      }
    }
  },
  methods: {
    handleSizeChange(e) {
      this.$emit("pagination", { page: this.currentPage, limit: e }), this.autoScroll && m(0, 800);
    },
    handleCurrentChange(e) {
      this.$emit("pagination", { page: e, limit: this.pageSize }), this.autoScroll && m(0, 800);
    }
  }
};
var z = function() {
  var t = this, o = t._self._c;
  return o("div", { staticClass: "pagination-container", class: { hidden: t.hidden } }, [o("el-pagination", t._b({ attrs: { background: t.background, "current-page": t.currentPage, "page-size": t.pageSize, layout: t.layout, total: t.total }, on: { "update:currentPage": function(a) {
    t.currentPage = a;
  }, "update:current-page": function(a) {
    t.currentPage = a;
  }, "update:pageSize": function(a) {
    t.pageSize = a;
  }, "update:page-size": function(a) {
    t.pageSize = a;
  }, "size-change": t.handleSizeChange, "current-change": t.handleCurrentChange } }, "el-pagination", t.$attrs, !1))], 1);
}, T = [], b = /* @__PURE__ */ C(
  S,
  z,
  T,
  !1,
  null,
  "f3a0242d",
  null,
  null
);
const p = b.exports;
p.install = (e) => {
  e.component(p.name, p);
};
export {
  p as default
};
