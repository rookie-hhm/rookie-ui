import S from "vue";
var o = {};
o.__esModule = !0;
o.isInContainer = o.getScrollContainer = o.isScroll = o.getStyle = o.once = o.off = o.on = void 0;
var k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
  return typeof e;
} : function(e) {
  return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};
o.hasClass = m;
o.addClass = T;
o.removeClass = X;
o.setStyle = $;
var x = S, V = O(x);
function O(e) {
  return e && e.__esModule ? e : { default: e };
}
var d = V.default.prototype.$isServer, A = /([\:\-\_]+(.))/g, H = /^moz([A-Z])/, y = d ? 0 : Number(document.documentMode), D = function(t) {
  return (t || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
}, _ = function(t) {
  return t.replace(A, function(n, r, i, f) {
    return f ? i.toUpperCase() : i;
  }).replace(H, "Moz$1");
}, M = o.on = function() {
  return !d && document.addEventListener ? function(e, t, n) {
    e && t && n && e.addEventListener(t, n, !1);
  } : function(e, t, n) {
    e && t && n && e.attachEvent("on" + t, n);
  };
}(), I = o.off = function() {
  return !d && document.removeEventListener ? function(e, t, n) {
    e && t && e.removeEventListener(t, n, !1);
  } : function(e, t, n) {
    e && t && e.detachEvent("on" + t, n);
  };
}();
o.once = function(t, n, r) {
  var i = function f() {
    r && r.apply(this, arguments), I(t, n, f);
  };
  M(t, n, i);
};
function m(e, t) {
  if (!e || !t)
    return !1;
  if (t.indexOf(" ") !== -1)
    throw new Error("className should not contain space.");
  return e.classList ? e.classList.contains(t) : (" " + e.className + " ").indexOf(" " + t + " ") > -1;
}
function T(e, t) {
  if (e) {
    for (var n = e.className, r = (t || "").split(" "), i = 0, f = r.length; i < f; i++) {
      var u = r[i];
      u && (e.classList ? e.classList.add(u) : m(e, u) || (n += " " + u));
    }
    e.classList || e.setAttribute("class", n);
  }
}
function X(e, t) {
  if (!(!e || !t)) {
    for (var n = t.split(" "), r = " " + e.className + " ", i = 0, f = n.length; i < f; i++) {
      var u = n[i];
      u && (e.classList ? e.classList.remove(u) : m(e, u) && (r = r.replace(" " + u + " ", " ")));
    }
    e.classList || e.setAttribute("class", D(r));
  }
}
var v = o.getStyle = y < 9 ? function(e, t) {
  if (!d) {
    if (!e || !t)
      return null;
    t = _(t), t === "float" && (t = "styleFloat");
    try {
      switch (t) {
        case "opacity":
          try {
            return e.filters.item("alpha").opacity / 100;
          } catch {
            return 1;
          }
        default:
          return e.style[t] || e.currentStyle ? e.currentStyle[t] : null;
      }
    } catch {
      return e.style[t];
    }
  }
} : function(e, t) {
  if (!d) {
    if (!e || !t)
      return null;
    t = _(t), t === "float" && (t = "cssFloat");
    try {
      var n = document.defaultView.getComputedStyle(e, "");
      return e.style[t] || n ? n[t] : null;
    } catch {
      return e.style[t];
    }
  }
};
function $(e, t, n) {
  if (!(!e || !t))
    if ((typeof t > "u" ? "undefined" : k(t)) === "object")
      for (var r in t)
        t.hasOwnProperty(r) && $(e, r, t[r]);
    else
      t = _(t), t === "opacity" && y < 9 ? e.style.filter = isNaN(n) ? "" : "alpha(opacity=" + n * 100 + ")" : e.style[t] = n;
}
var q = o.isScroll = function(t, n) {
  if (!d) {
    var r = n != null, i = r ? n ? v(t, "overflow-y") : v(t, "overflow-x") : v(t, "overflow");
    return i.match(/(scroll|auto|overlay)/);
  }
};
o.getScrollContainer = function(t, n) {
  if (!d) {
    for (var r = t; r; ) {
      if ([window, document, document.documentElement].includes(r))
        return window;
      if (q(r, n))
        return r;
      r = r.parentNode;
    }
    return r;
  }
};
o.isInContainer = function(t, n) {
  if (d || !t || !n)
    return !1;
  var r = t.getBoundingClientRect(), i = void 0;
  return [window, document, document.documentElement, null, void 0].includes(n) ? i = {
    top: 0,
    right: window.innerWidth,
    bottom: window.innerHeight,
    left: 0
  } : i = n.getBoundingClientRect(), r.top < i.bottom && r.bottom > i.top && r.right > i.left && r.left < i.right;
};
var z = S, b = B(z), E = o;
function B(e) {
  return e && e.__esModule ? e : { default: e };
}
var p = [], s = "@@clickoutsideContext", F = void 0, U = 0;
!b.default.prototype.$isServer && (0, E.on)(document, "mousedown", function(e) {
  return F = e;
});
!b.default.prototype.$isServer && (0, E.on)(document, "mouseup", function(e) {
  p.forEach(function(t) {
    return t[s].documentHandler(e, F);
  });
});
function w(e, t, n) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    !n || !n.context || !r.target || !i.target || e.contains(r.target) || e.contains(i.target) || e === r.target || n.context.popperElm && (n.context.popperElm.contains(r.target) || n.context.popperElm.contains(i.target)) || (t.expression && e[s].methodName && n.context[e[s].methodName] ? n.context[e[s].methodName]() : e[s].bindingFn && e[s].bindingFn());
  };
}
var G = {
  bind: function(t, n, r) {
    p.push(t);
    var i = U++;
    t[s] = {
      id: i,
      documentHandler: w(t, n, r),
      methodName: n.expression,
      bindingFn: n.value
    };
  },
  update: function(t, n, r) {
    t[s].documentHandler = w(t, n, r), t[s].methodName = n.expression, t[s].bindingFn = n.value;
  },
  unbind: function(t) {
    for (var n = p.length, r = 0; r < n; r++)
      if (p[r][s].id === t[s].id) {
        p.splice(r, 1);
        break;
      }
    delete t[s];
  }
};
function W(e, t, n, r, i, f, u, R) {
  var a = typeof e == "function" ? e.options : e;
  t && (a.render = t, a.staticRenderFns = n, a._compiled = !0), r && (a.functional = !0), f && (a._scopeId = "data-v-" + f);
  var l;
  if (u ? (l = function(c) {
    c = c || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !c && typeof __VUE_SSR_CONTEXT__ < "u" && (c = __VUE_SSR_CONTEXT__), i && i.call(this, c), c && c._registeredComponents && c._registeredComponents.add(u);
  }, a._ssrRegister = l) : i && (l = R ? function() {
    i.call(
      this,
      (a.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : i), l)
    if (a.functional) {
      a._injectStyles = l;
      var L = a.render;
      a.render = function(P, C) {
        return l.call(C), L(P, C);
      };
    } else {
      var g = a.beforeCreate;
      a.beforeCreate = g ? [].concat(g, l) : [l];
    }
  return {
    exports: e,
    options: a
  };
}
const Z = {
  name: "my-new-area-selector",
  inject: {
    elForm: {
      default: ""
    }
  },
  directives: {
    ClickOutside: G
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    processValue: {
      // 自定义地址的返回值
      type: Function
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    placement: {
      type: String,
      default: "bottom-start"
    }
  },
  computed: {
    selectDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  },
  watch: {
    value(e) {
      e || (this.reset(), this.$refs.propper && this.$refs.propper.resetInfo());
    }
  },
  data() {
    return {
      isShow: !1
    };
  },
  methods: {
    togglePannel() {
      this.selectDisabled || (this.isShow = !this.isShow);
    },
    hidePannel() {
      this.isShow = !1, this.$emit("close", this.options);
    },
    defaultProcessValue({ province: e, city: t, district: n }) {
      return e + t + n;
    },
    onConfirm(e) {
      let t = this.processValue || this.defaultProcessValue;
      this.$emit("input", t(e)), this.$emit("change", { ...e, ...this.options }), this.hidePannel();
    },
    onClose() {
      this.hidePannel();
    }
  }
};
var K = function() {
  var t = this, n = t._self._c;
  return n("div", { directives: [{ name: "click-outside", rawName: "v-click-outside", value: t.hidePannel, expression: "hidePannel" }], staticClass: "area-selector-wrapper" }, [n("el-input", t._g(t._b({ ref: "reference", attrs: { value: t.value }, nativeOn: { click: function(r) {
    return r.stopPropagation(), t.togglePannel.apply(null, arguments);
  } } }, "el-input", t.$attrs, !1), t.$listeners)), n("new-area-down-picker", t._b({ ref: "propper", attrs: { placement: t.placement }, on: { confirm: t.onConfirm, close: t.onClose }, model: { value: t.isShow, callback: function(r) {
    t.isShow = r;
  }, expression: "isShow" } }, "new-area-down-picker", t.$attrs, !1))], 1);
}, J = [], Q = /* @__PURE__ */ W(
  Z,
  K,
  J,
  !1,
  null,
  "13481ac1",
  null,
  null
);
const h = Q.exports;
h.install = (e) => {
  e.component(h.name, h);
};
export {
  h as default
};
