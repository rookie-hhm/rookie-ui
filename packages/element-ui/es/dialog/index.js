import L from "element-resize-detector";
var V = { inserted(t) {
  const e = t.querySelector(".el-dialog"), a = e.style.cssText;
  e.cachDragCssText = a;
}, update(t, e, a) {
  const o = t.querySelector(".el-dialog__header"), l = t.querySelector(".el-dialog");
  o.style.cssText += ";cursor:move;";
  const u = document.currentStyle ? (n, d) => n.currentStyle[d] : (n, d) => getComputedStyle(n, !1)[d];
  o.onmousedown = (n) => {
    if (n.target.tagName === "I")
      return;
    const d = n.clientX, i = n.clientY, r = l.offsetWidth, v = l.offsetHeight, p = l.offsetLeft, s = l.offsetTop;
    t.dragDomLeft === void 0 && (t.dragDomLeft = p), t.dragDomTop === void 0 && (t.dragDomTop = s);
    const b = document.body.clientWidth, h = document.body.clientHeight, C = -t.dragDomLeft, _ = b - t.dragDomLeft - r, D = -t.dragDomTop, y = h - t.dragDomTop - v;
    let c = u(l, "left"), g = u(l, "top");
    c.includes("%") ? (c = +document.body.clientWidth * (+c.replace(/%/g, "") / 100), g = +document.body.clientHeight * (+g.replace(/%/g, "") / 100)) : (c = +c.replace(/\px/g, ""), g = +g.replace(/\px/g, "")), document.onmousemove = function($) {
      let f = $.clientX - d + c, m = $.clientY - i + g;
      f = f < C ? C : f > _ && Math.abs(C) >= Math.abs(_) ? _ : Math.min(Math.abs(_), f), m = m < D ? D : m > y && Math.abs(D) >= Math.abs(y) ? y : Math.min(Math.abs(y), m), l.style.cssText += `;left:${f}px;top:${m}px;`, a.child.$emit("dragDialog");
    }, document.onmouseup = function() {
      document.onmousemove = null, document.onmouseup = null;
    };
  };
}, install: function(t) {
  t.directive("el-drag-dialog", drag);
} }, T, w, k = (w = "el-drag-dialog", (T = V).install = (t) => {
  t.directive(w, T);
}, T);
const M = {
  center: !1,
  modal: !1,
  top: "76px",
  "element-loading-text": "拼命加载中",
  "element-loading-spinner": "el-icon-loading",
  "element-loading-background": "rgba(0, 0, 0, 0.8)",
  "modal-append-to-body": !1,
  "close-on-click-modal": !1,
  "append-to-body": !1,
  "destroy-on-close": !1
};
function R(t, e, a, o, l, u, n, d) {
  var i = typeof t == "function" ? t.options : t;
  e && (i.render = e, i.staticRenderFns = a, i._compiled = !0), o && (i.functional = !0), u && (i._scopeId = "data-v-" + u);
  var r;
  if (n ? (r = function(s) {
    s = s || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !s && typeof __VUE_SSR_CONTEXT__ < "u" && (s = __VUE_SSR_CONTEXT__), l && l.call(this, s), s && s._registeredComponents && s._registeredComponents.add(n);
  }, i._ssrRegister = r) : l && (r = d ? function() {
    l.call(
      this,
      (i.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : l), r)
    if (i.functional) {
      i._injectStyles = r;
      var v = i.render;
      i.render = function(b, h) {
        return r.call(h), v(b, h);
      };
    } else {
      var p = i.beforeCreate;
      i.beforeCreate = p ? [].concat(p, r) : [r];
    }
  return {
    exports: t,
    options: i
  };
}
const x = L(), B = {
  name: "my-dialog",
  // components: {
  //   ElDialog: Dialog,
  //   ElRow: Row,
  //   ElButton: Button
  // },
  directives: {
    elDragDialog: k
    // loading: Loading.directive
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    isShowBtn: {
      type: Boolean,
      default: !0
    },
    btnList: {
      type: Array,
      default() {
        return [];
      }
    },
    titleStyle: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    attrs() {
      return Object.assign({}, M, this.$attrs);
    },
    newBtnList() {
      return this.btnList.filter((t) => !!(t.isShow === void 0 || t.isShow));
    }
    // dialogVisible: {
    //   get () {
    //     return this.dialogVisible
    //   },
    //   set (val) {
    //     this.$emit('update:visible', val)
    //   }
    // }
  },
  watch: {
    dialogVisible() {
      console.log(this.dialogVisible, "dialogVisible");
    }
  },
  data() {
    return {
      // dialogVisible: false,
      dialogVisible: !1,
      key: 0
    };
  },
  methods: {
    open() {
      this.dialogVisible = !0, this.$emit("update:visible", !0);
    },
    close() {
      this.dialogVisible = !1, this.$emit("update:visible", !1);
    },
    onClosed() {
      this.dragDom && (this.dragDom.style.cssText = this.dragDom.cachDragCssText);
    },
    resetInfo() {
    }
  },
  created() {
  },
  mounted() {
    this.dialogElm = this.$refs.dialog.$el, this.dragDom = this.dialogElm.querySelector(".el-dialog"), x.listenTo(this.dragDom, (t) => {
      this.dragDom.cachDragCssText = t.style.cssText;
    });
  },
  destroyed() {
    x.uninstall(this.dragDom);
  }
};
var N = function() {
  var e = this, a = e._self._c;
  return a("el-dialog", e._g(e._b({ directives: [{ name: "el-drag-dialog", rawName: "v-el-drag-dialog" }], ref: "dialog", staticClass: "my-dialog-wrapper", class: { fullscreen: e.attrs.fullscreen }, attrs: { visible: e.dialogVisible }, on: { "update:visible": function(o) {
    e.dialogVisible = o;
  }, closed: e.onClosed }, nativeOn: { click: function(o) {
    o.stopPropagation();
  } } }, "el-dialog", e.attrs, !1), e.$listeners), [a("el-row", { staticClass: "title-wrapper", attrs: { slot: "title", type: "flex", align: "middle" }, slot: "title" }, [e._t("title", function() {
    return [e.title ? [a("el-row", { style: e.titleStyle, attrs: { type: "flex", align: "middle" } }, [a("div", { staticClass: "my-dialog-icon" }), a("span", { staticClass: "my-dialog-title" }, [e._v(e._s(e.title))])])] : e._e()];
  })], 2), e._t("default"), a("div", { staticClass: "dialog-footer", staticStyle: { "text-align": "center" }, attrs: { slot: "footer" }, slot: "footer" }, [e._t("footer", function() {
    return [e.isShowBtn && e.newBtnList.length ? e._l(e.newBtnList, function(o) {
      return a("el-button", { key: o.btnText, staticClass: "btn-item", class: [
        o.className,
        {
          "customer-btn-class": !o.type
        }
      ], attrs: { type: o.type || "primary", size: o.size || "mini", loading: o.loading === !0 }, on: { click: function(l) {
        return o.handleClick(o.options || {});
      } } }, [e._v(e._s(o.btnText))]);
    }) : e._e()];
  })], 2)], 2);
}, O = [], q = /* @__PURE__ */ R(
  B,
  N,
  O,
  !1,
  null,
  "b3a28924",
  null,
  null
);
const S = q.exports;
S.install = (t) => {
  t.component(S.name, S);
};
export {
  S as default
};
