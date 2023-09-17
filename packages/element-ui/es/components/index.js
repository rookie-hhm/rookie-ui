import { flattenDeep as ct, isFunction as it } from "lodash-es";
import U from "vue";
import ut from "element-resize-detector";
const mt = {
  stripe: !0,
  border: !0,
  fit: !0,
  size: "mini",
  // 'row-class-name': tableRowClassName,
  "highlight-current-row": !0,
  "header-row-style": K,
  "header-cell-style": K
};
function K() {
  return {
    backgroundColor: "#DEDEDE"
  };
}
const ht = {
  "show-overflow-tooltip": !0,
  "reserve-selection": !0
};
let gt = {
  text: {
    component: "el-input",
    attrs: {
      style: { width: "100%" },
      size: "mini",
      clearable: !0
    }
  },
  button: {
    component: "el-button",
    attrs: {
      style: { width: "100%" },
      size: "mini"
    }
  },
  number: {
    component: "el-input-number",
    attrs: {
      style: { width: "100%" },
      size: "mini",
      clearable: !0,
      controls: !1
    }
  },
  select: {
    component: "my-select",
    attrs: {
      style: { width: "100%" },
      size: "mini",
      clearable: !0,
      placeholder: ""
    }
  },
  date: {
    component: "el-date-picker",
    attrs: {
      style: { width: "100%" },
      clearable: !1,
      type: "date",
      size: "mini",
      "value-format": "yyyy-MM-dd"
    }
  },
  tree: {
    component: "el-cascader",
    attrs: {
      props: { value: "id", label: "name", children: "childTypes", expandTrigger: "hover", emitPath: !1 },
      clearable: !0,
      size: "mini"
    }
  },
  area: {
    component: "my-new-area-selector",
    attrs: {
      style: { width: "100%" },
      size: "mini",
      readonly: !0,
      clearable: !1
    }
  },
  "s-input": {
    component: "search-input",
    attrs: {
      style: { width: "100%" },
      size: "mini",
      clearable: !0
    }
  },
  "s-upload": {
    component: "search-upload",
    attrs: {
      style: { display: "inline-block" },
      size: "mini",
      name: "files"
    }
  },
  "s-button": {
    component: "search-button",
    attrs: {
      size: "mini"
    }
  }
};
const st = gt;
function R(t = {}, e = {}) {
  return Object.assign({}, t, e);
}
function at(t, e = !1) {
  return t.tag = t.tag ? t.tag : e ? "s-input" : "text", st[t.tag].component;
}
function D(t, e = "attrs") {
  let i = st[t.tag];
  return t[e] && t[e].style && (t[e].style = R(i[e].style || {}, t[e].style)), R(i[e] || {}, t[e] || {});
}
const At = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACtSURBVChTY6Aq+LGVQfv7FgY2KBcFMEFpbKCGkZHhIlCzCpQPB/g0gYAGEF8GarSDcCGAEUQABZuAlCSIjQRcgFgBwgSDZA5vhnkgBkzTeyAlAGITAG1AjdWkagKBVEJ+QgcT/jMyLIDZVAOkuEFsJJAIxOIQJsNXIK4GOm0ihIsDAA2aB8T/QU4H4gCoMBjgcx4HED8DYj+gDRvAIoTAj20M0kAb5KBcSgEDAwBgyStAtwgHFQAAAABJRU5ErkJggg==";
function bt() {
  console.log("noop");
}
var V = {}, yt = { get exports() {
  return V;
}, set exports(t) {
  V = t;
} }, Q;
function _t() {
  return Q || (Q = 1, t = yt, n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, e = void 0, i = function() {
    var a = window, c = { placement: "bottom", gpuAcceleration: !0, offset: 0, boundariesElement: "viewport", boundariesPadding: 5, preventOverflowOrder: ["left", "right", "top", "bottom"], flipBehavior: "flip", arrowElement: "[x-arrow]", arrowOffset: 0, modifiers: ["shift", "offset", "preventOverflow", "keepTogether", "arrow", "flip", "applyStyle"], modifiersIgnored: [], forceAbsolute: !1 };
    function p(o, r, s) {
      this._reference = o.jquery ? o[0] : o, this.state = {};
      var l = r == null, d = r && Object.prototype.toString.call(r) === "[object Object]";
      return this._popper = l || d ? this.parse(d ? r : {}) : r.jquery ? r[0] : r, this._options = Object.assign({}, c, s), this._options.modifiers = this._options.modifiers.map(function(f) {
        if (this._options.modifiersIgnored.indexOf(f) === -1)
          return f === "applyStyle" && this._popper.setAttribute("x-placement", this._options.placement), this.modifiers[f] || f;
      }.bind(this)), this.state.position = this._getPosition(this._popper, this._reference), k(this._popper, { position: this.state.position, top: 0 }), this.update(), this._setupEventListeners(), this;
    }
    function g(o) {
      var r = o.style.display, s = o.style.visibility;
      o.style.display = "block", o.style.visibility = "hidden", o.offsetWidth;
      var l = a.getComputedStyle(o), d = parseFloat(l.marginTop) + parseFloat(l.marginBottom), f = parseFloat(l.marginLeft) + parseFloat(l.marginRight), m = { width: o.offsetWidth + f, height: o.offsetHeight + d };
      return o.style.display = r, o.style.visibility = s, m;
    }
    function h(o) {
      var r = { left: "right", right: "left", bottom: "top", top: "bottom" };
      return o.replace(/left|right|bottom|top/g, function(s) {
        return r[s];
      });
    }
    function A(o) {
      var r = Object.assign({}, o);
      return r.right = r.left + r.width, r.bottom = r.top + r.height, r;
    }
    function b(o, r) {
      var s, l = 0;
      for (s in o) {
        if (o[s] === r)
          return l;
        l++;
      }
      return null;
    }
    function x(o, r) {
      return a.getComputedStyle(o, null)[r];
    }
    function u(o) {
      var r = o.offsetParent;
      return r !== a.document.body && r ? r : a.document.documentElement;
    }
    function S(o) {
      var r = o.parentNode;
      return r ? r === a.document ? a.document.body.scrollTop || a.document.body.scrollLeft ? a.document.body : a.document.documentElement : ["scroll", "auto"].indexOf(x(r, "overflow")) !== -1 || ["scroll", "auto"].indexOf(x(r, "overflow-x")) !== -1 || ["scroll", "auto"].indexOf(x(r, "overflow-y")) !== -1 ? r : S(o.parentNode) : o;
    }
    function $(o) {
      return o !== a.document.body && (x(o, "position") === "fixed" || (o.parentNode ? $(o.parentNode) : o));
    }
    function k(o, r) {
      Object.keys(r).forEach(function(s) {
        var l, d = "";
        ["width", "height", "top", "right", "bottom", "left"].indexOf(s) !== -1 && (l = r[s]) !== "" && !isNaN(parseFloat(l)) && isFinite(l) && (d = "px"), o.style[s] = r[s] + d;
      });
    }
    function O(o) {
      var r = { width: o.offsetWidth, height: o.offsetHeight, left: o.offsetLeft, top: o.offsetTop };
      return r.right = r.left + r.width, r.bottom = r.top + r.height, r;
    }
    function M(o) {
      var r = o.getBoundingClientRect(), s = navigator.userAgent.indexOf("MSIE") != -1 && o.tagName === "HTML" ? -o.scrollTop : r.top;
      return { left: r.left, top: s, right: r.right, bottom: r.bottom, width: r.right - r.left, height: r.bottom - s };
    }
    function T(o) {
      for (var r = ["", "ms", "webkit", "moz", "o"], s = 0; s < r.length; s++) {
        var l = r[s] ? r[s] + o.charAt(0).toUpperCase() + o.slice(1) : o;
        if (a.document.body.style[l] !== void 0)
          return l;
      }
      return null;
    }
    return p.prototype.destroy = function() {
      return this._popper.removeAttribute("x-placement"), this._popper.style.left = "", this._popper.style.position = "", this._popper.style.top = "", this._popper.style[T("transform")] = "", this._removeEventListeners(), this._options.removeOnDestroy && this._popper.remove(), this;
    }, p.prototype.update = function() {
      var o = { instance: this, styles: {} };
      o.placement = this._options.placement, o._originalPlacement = this._options.placement, o.offsets = this._getOffsets(this._popper, this._reference, o.placement), o.boundaries = this._getBoundaries(o, this._options.boundariesPadding, this._options.boundariesElement), o = this.runModifiers(o, this._options.modifiers), typeof this.state.updateCallback == "function" && this.state.updateCallback(o);
    }, p.prototype.onCreate = function(o) {
      return o(this), this;
    }, p.prototype.onUpdate = function(o) {
      return this.state.updateCallback = o, this;
    }, p.prototype.parse = function(o) {
      var r = { tagName: "div", classNames: ["popper"], attributes: [], parent: a.document.body, content: "", contentType: "text", arrowTagName: "div", arrowClassNames: ["popper__arrow"], arrowAttributes: ["x-arrow"] };
      o = Object.assign({}, r, o);
      var s = a.document, l = s.createElement(o.tagName);
      if (m(l, o.classNames), y(l, o.attributes), o.contentType === "node" ? l.appendChild(o.content.jquery ? o.content[0] : o.content) : o.contentType === "html" ? l.innerHTML = o.content : l.textContent = o.content, o.arrowTagName) {
        var d = s.createElement(o.arrowTagName);
        m(d, o.arrowClassNames), y(d, o.arrowAttributes), l.appendChild(d);
      }
      var f = o.parent.jquery ? o.parent[0] : o.parent;
      if (typeof f == "string") {
        if ((f = s.querySelectorAll(o.parent)).length > 1 && console.warn("WARNING: the given `parent` query(" + o.parent + ") matched more than one element, the first one will be used"), f.length === 0)
          throw "ERROR: the given `parent` doesn't exists!";
        f = f[0];
      }
      return f.length > 1 && f instanceof Element == 0 && (console.warn("WARNING: you have passed as parent a list of elements, the first one will be used"), f = f[0]), f.appendChild(l), l;
      function m(v, w) {
        w.forEach(function(_) {
          v.classList.add(_);
        });
      }
      function y(v, w) {
        w.forEach(function(_) {
          v.setAttribute(_.split(":")[0], _.split(":")[1] || "");
        });
      }
    }, p.prototype._getPosition = function(o, r) {
      return u(r), this._options.forceAbsolute ? "absolute" : $(r) ? "fixed" : "absolute";
    }, p.prototype._getOffsets = function(o, r, s) {
      s = s.split("-")[0];
      var l = {};
      l.position = this.state.position;
      var d = l.position === "fixed", f = function(y, v, w) {
        var _ = M(y), C = M(v);
        if (w) {
          var E = S(v);
          C.top += E.scrollTop, C.bottom += E.scrollTop, C.left += E.scrollLeft, C.right += E.scrollLeft;
        }
        return { top: _.top - C.top, left: _.left - C.left, bottom: _.top - C.top + _.height, right: _.left - C.left + _.width, width: _.width, height: _.height };
      }(r, u(o), d), m = g(o);
      return ["right", "left"].indexOf(s) !== -1 ? (l.top = f.top + f.height / 2 - m.height / 2, l.left = s === "left" ? f.left - m.width : f.right) : (l.left = f.left + f.width / 2 - m.width / 2, l.top = s === "top" ? f.top - m.height : f.bottom), l.width = m.width, l.height = m.height, { popper: l, reference: f };
    }, p.prototype._setupEventListeners = function() {
      if (this.state.updateBound = this.update.bind(this), a.addEventListener("resize", this.state.updateBound), this._options.boundariesElement !== "window") {
        var o = S(this._reference);
        o !== a.document.body && o !== a.document.documentElement || (o = a), o.addEventListener("scroll", this.state.updateBound), this.state.scrollTarget = o;
      }
    }, p.prototype._removeEventListeners = function() {
      a.removeEventListener("resize", this.state.updateBound), this._options.boundariesElement !== "window" && this.state.scrollTarget && (this.state.scrollTarget.removeEventListener("scroll", this.state.updateBound), this.state.scrollTarget = null), this.state.updateBound = null;
    }, p.prototype._getBoundaries = function(o, r, s) {
      var l, d, f = {};
      if (s === "window") {
        var m = a.document.body, y = a.document.documentElement;
        l = Math.max(m.scrollHeight, m.offsetHeight, y.clientHeight, y.scrollHeight, y.offsetHeight), f = { top: 0, right: Math.max(m.scrollWidth, m.offsetWidth, y.clientWidth, y.scrollWidth, y.offsetWidth), bottom: l, left: 0 };
      } else if (s === "viewport") {
        var v = u(this._popper), w = S(this._popper), _ = O(v), C = o.offsets.popper.position === "fixed" ? 0 : (d = w) == document.body ? Math.max(document.documentElement.scrollTop, document.body.scrollTop) : d.scrollTop, E = o.offsets.popper.position === "fixed" ? 0 : function(N) {
          return N == document.body ? Math.max(document.documentElement.scrollLeft, document.body.scrollLeft) : N.scrollLeft;
        }(w);
        f = { top: 0 - (_.top - C), right: a.document.documentElement.clientWidth - (_.left - E), bottom: a.document.documentElement.clientHeight - (_.top - C), left: 0 - (_.left - E) };
      } else
        f = u(this._popper) === s ? { top: 0, left: 0, right: s.clientWidth, bottom: s.clientHeight } : O(s);
      return f.left += r, f.right -= r, f.top = f.top + r, f.bottom = f.bottom - r, f;
    }, p.prototype.runModifiers = function(o, r, s) {
      var l = r.slice();
      return s !== void 0 && (l = this._options.modifiers.slice(0, b(this._options.modifiers, s))), l.forEach(function(d) {
        var f, m;
        m = {}, (f = d) && m.toString.call(f) === "[object Function]" && (o = d.call(this, o));
      }.bind(this)), o;
    }, p.prototype.isModifierRequired = function(o, r) {
      var s = b(this._options.modifiers, o);
      return !!this._options.modifiers.slice(0, s).filter(function(l) {
        return l === r;
      }).length;
    }, p.prototype.modifiers = {}, p.prototype.modifiers.applyStyle = function(o) {
      var r, s = { position: o.offsets.popper.position }, l = Math.round(o.offsets.popper.left), d = Math.round(o.offsets.popper.top);
      return this._options.gpuAcceleration && (r = T("transform")) ? (s[r] = "translate3d(" + l + "px, " + d + "px, 0)", s.top = 0, s.left = 0) : (s.left = l, s.top = d), Object.assign(s, o.styles), k(this._popper, s), this._popper.setAttribute("x-placement", o.placement), this.isModifierRequired(this.modifiers.applyStyle, this.modifiers.arrow) && o.offsets.arrow && k(o.arrowElement, o.offsets.arrow), o;
    }, p.prototype.modifiers.shift = function(o) {
      var r = o.placement, s = r.split("-")[0], l = r.split("-")[1];
      if (l) {
        var d = o.offsets.reference, f = A(o.offsets.popper), m = { y: { start: { top: d.top }, end: { top: d.top + d.height - f.height } }, x: { start: { left: d.left }, end: { left: d.left + d.width - f.width } } }, y = ["bottom", "top"].indexOf(s) !== -1 ? "x" : "y";
        o.offsets.popper = Object.assign(f, m[y][l]);
      }
      return o;
    }, p.prototype.modifiers.preventOverflow = function(o) {
      var r = this._options.preventOverflowOrder, s = A(o.offsets.popper), l = { left: function() {
        var d = s.left;
        return s.left < o.boundaries.left && (d = Math.max(s.left, o.boundaries.left)), { left: d };
      }, right: function() {
        var d = s.left;
        return s.right > o.boundaries.right && (d = Math.min(s.left, o.boundaries.right - s.width)), { left: d };
      }, top: function() {
        var d = s.top;
        return s.top < o.boundaries.top && (d = Math.max(s.top, o.boundaries.top)), { top: d };
      }, bottom: function() {
        var d = s.top;
        return s.bottom > o.boundaries.bottom && (d = Math.min(s.top, o.boundaries.bottom - s.height)), { top: d };
      } };
      return r.forEach(function(d) {
        o.offsets.popper = Object.assign(s, l[d]());
      }), o;
    }, p.prototype.modifiers.keepTogether = function(o) {
      var r = A(o.offsets.popper), s = o.offsets.reference, l = Math.floor;
      return r.right < l(s.left) && (o.offsets.popper.left = l(s.left) - r.width), r.left > l(s.right) && (o.offsets.popper.left = l(s.right)), r.bottom < l(s.top) && (o.offsets.popper.top = l(s.top) - r.height), r.top > l(s.bottom) && (o.offsets.popper.top = l(s.bottom)), o;
    }, p.prototype.modifiers.flip = function(o) {
      if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow))
        return console.warn("WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!"), o;
      if (o.flipped && o.placement === o._originalPlacement)
        return o;
      var r = o.placement.split("-")[0], s = h(r), l = o.placement.split("-")[1] || "", d = [];
      return (d = this._options.flipBehavior === "flip" ? [r, s] : this._options.flipBehavior).forEach(function(f, m) {
        if (r === f && d.length !== m + 1) {
          r = o.placement.split("-")[0], s = h(r);
          var y = A(o.offsets.popper), v = ["right", "bottom"].indexOf(r) !== -1;
          (v && Math.floor(o.offsets.reference[r]) > Math.floor(y[s]) || !v && Math.floor(o.offsets.reference[r]) < Math.floor(y[s])) && (o.flipped = !0, o.placement = d[m + 1], l && (o.placement += "-" + l), o.offsets.popper = this._getOffsets(this._popper, this._reference, o.placement).popper, o = this.runModifiers(o, this._options.modifiers, this._flip));
        }
      }.bind(this)), o;
    }, p.prototype.modifiers.offset = function(o) {
      var r = this._options.offset, s = o.offsets.popper;
      return o.placement.indexOf("left") !== -1 ? s.top -= r : o.placement.indexOf("right") !== -1 ? s.top += r : o.placement.indexOf("top") !== -1 ? s.left -= r : o.placement.indexOf("bottom") !== -1 && (s.left += r), o;
    }, p.prototype.modifiers.arrow = function(o) {
      var r = this._options.arrowElement, s = this._options.arrowOffset;
      if (typeof r == "string" && (r = this._popper.querySelector(r)), !r)
        return o;
      if (!this._popper.contains(r))
        return console.warn("WARNING: `arrowElement` must be child of its popper element!"), o;
      if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether))
        return console.warn("WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!"), o;
      var l = {}, d = o.placement.split("-")[0], f = A(o.offsets.popper), m = o.offsets.reference, y = ["left", "right"].indexOf(d) !== -1, v = y ? "height" : "width", w = y ? "top" : "left", _ = y ? "left" : "top", C = y ? "bottom" : "right", E = g(r)[v];
      m[C] - E < f[w] && (o.offsets.popper[w] -= f[w] - (m[C] - E)), m[w] + E > f[C] && (o.offsets.popper[w] += m[w] + E - f[C]);
      var N = m[w] + (s || m[v] / 2 - E / 2) - f[w];
      return N = Math.max(Math.min(f[v] - E - 8, N), 8), l[w] = N, l[_] = "", o.offsets.arrow = l, o.arrowElement = r, o;
    }, Object.assign || Object.defineProperty(Object, "assign", { enumerable: !1, configurable: !0, writable: !0, value: function(o) {
      if (o == null)
        throw new TypeError("Cannot convert first argument to object");
      for (var r = Object(o), s = 1; s < arguments.length; s++) {
        var l = arguments[s];
        if (l != null) {
          l = Object(l);
          for (var d = Object.keys(l), f = 0, m = d.length; f < m; f++) {
            var y = d[f], v = Object.getOwnPropertyDescriptor(l, y);
            v !== void 0 && v.enumerable && (r[y] = l[y]);
          }
        }
      }
      return r;
    } }), p;
  }, n(t) === "object" && t.exports ? t.exports = i() : e.Popper = i()), V;
  var t, e, i, n;
}
var vt = {}, L, wt = function(t, e) {
  if (t) {
    for (var i = t.className, n = (e || "").split(" "), a = 0, c = n.length; a < c; a++) {
      var p = n[a];
      p && (t.classList ? t.classList.add(p) : xt(t, p) || (i += " " + p));
    }
    t.classList || t.setAttribute("class", i);
  }
};
((L = U) && L.__esModule ? L : { default: L }).default.prototype.$isServer;
function xt(t, e) {
  if (!t || !e)
    return !1;
  if (e.indexOf(" ") !== -1)
    throw new Error("className should not contain space.");
  return t.classList ? t.classList.contains(e) : (" " + t.className + " ").indexOf(" " + e + " ") > -1;
}
var P, Ct = (P = U) && P.__esModule ? P : { default: P }, Y = vt, Et = Ct.default.prototype.$isServer ? function() {
} : _t(), X = function(t) {
  return t.stopPropagation();
}, St = { props: { transformOrigin: { type: [Boolean, String], default: !0 }, placement: { type: String, default: "bottom" }, boundariesPadding: { type: Number, default: 5 }, reference: {}, popper: {}, offset: { default: 0 }, value: Boolean, visibleArrow: Boolean, arrowOffset: { type: Number, default: 35 }, appendToBody: { type: Boolean, default: !0 }, popperOptions: { type: Object, default: function() {
  return { gpuAcceleration: !1 };
} } }, data: function() {
  return { showPopper: !1, currentPlacement: "" };
}, watch: { value: { immediate: !0, handler: function(t) {
  this.showPopper = t, this.$emit("input", t);
} }, showPopper: function(t) {
  this.disabled || (t ? this.updatePopper() : this.destroyPopper(), this.$emit("input", t));
} }, methods: { createPopper: function() {
  var t = this;
  if (!this.$isServer && (this.currentPlacement = this.currentPlacement || this.placement, /^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement))) {
    var e = this.popperOptions, i = this.popperElm = this.popperElm || this.popper || this.$refs.popper, n = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference;
    !n && this.$slots.reference && this.$slots.reference[0] && (n = this.referenceElm = this.$slots.reference[0].elm), i && n && (this.visibleArrow && this.appendArrow(i), this.appendToBody && document.body.appendChild(this.popperElm), this.popperJS && this.popperJS.destroy && this.popperJS.destroy(), e.placement = this.currentPlacement, e.offset = this.offset, e.arrowOffset = this.arrowOffset, this.popperJS = new Et(n, i, e), this.popperJS.onCreate(function(a) {
      t.$emit("created", t), t.resetTransformOrigin(), t.$nextTick(t.updatePopper);
    }), typeof e.onUpdate == "function" && this.popperJS.onUpdate(e.onUpdate), this.popperJS._popper.style.zIndex = Y.PopupManager.nextZIndex(), this.popperElm.addEventListener("click", X));
  }
}, updatePopper: function() {
  var t = this.popperJS;
  t ? (t.update(), t._popper && (t._popper.style.zIndex = Y.PopupManager.nextZIndex())) : this.createPopper();
}, doDestroy: function(t) {
  !this.popperJS || this.showPopper && !t || (this.popperJS.destroy(), this.popperJS = null);
}, destroyPopper: function() {
  this.popperJS && this.resetTransformOrigin();
}, resetTransformOrigin: function() {
  if (this.transformOrigin) {
    var t = this.popperJS._popper.getAttribute("x-placement").split("-")[0], e = { top: "bottom", bottom: "top", left: "right", right: "left" }[t];
    this.popperJS._popper.style.transformOrigin = typeof this.transformOrigin == "string" ? this.transformOrigin : ["top", "bottom"].indexOf(t) > -1 ? "center " + e : e + " center";
  }
}, appendArrow: function(t) {
  var e = void 0;
  if (!this.appended) {
    for (var i in this.appended = !0, t.attributes)
      if (/^_v-/.test(t.attributes[i].name)) {
        e = t.attributes[i].name;
        break;
      }
    var n = document.createElement("div");
    e && n.setAttribute(e, ""), n.setAttribute("x-arrow", ""), n.className = "popper__arrow", t.appendChild(n);
  }
} }, beforeDestroy: function() {
  this.doDestroy(!0), this.popperElm && this.popperElm.parentNode === document.body && (this.popperElm.removeEventListener("click", X), document.body.removeChild(this.popperElm));
}, deactivated: function() {
  this.$options.beforeDestroy[0].call(this);
} }, lt, Z;
!(Z = U) || Z.__esModule, lt = function() {
  return Math.floor(1e4 * Math.random());
};
var $t = { name: "infotoolTip", props: { transition: { type: String, default: "fade-in-linear" }, tooltipStyle: { type: Object, default: () => ({}) }, visibleArrow: { type: Boolean, default: !0 }, placement: { type: String, default: "left" }, popperOptions: { default: () => ({ boundariesPadding: 10, gpuAcceleration: !1 }) } }, mixins: [St], data: () => ({ referenceElm: null, tooltipContent: "" }), computed: { ifShowContent() {
  return !!(Array.isArray(this.tooltipContent) && this.tooltipContent.length > 0);
}, tooltipId: () => `el-popover-${lt()}` }, beforeCreate() {
}, mounted() {
  this.$nextTick(() => {
    this.popperElm = this.$refs.popper;
  });
}, methods: { handleMouseEnter() {
  this.popperJS && this.doDestroy(), this.showPopper = !0;
}, handleMouseLeave() {
  this.showPopper = !1;
} }, watch: {} };
function kt(t, e, i, n, a, c, p, g, h, A) {
  typeof p != "boolean" && (h = g, g = p, p = !1);
  const b = typeof i == "function" ? i.options : i;
  let x;
  if (t && t.render && (b.render = t.render, b.staticRenderFns = t.staticRenderFns, b._compiled = !0, a && (b.functional = !0)), n && (b._scopeId = n), c ? (x = function(u) {
    (u = u || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || typeof __VUE_SSR_CONTEXT__ > "u" || (u = __VUE_SSR_CONTEXT__), e && e.call(this, h(u)), u && u._registeredComponents && u._registeredComponents.add(c);
  }, b._ssrRegister = x) : e && (x = p ? function(u) {
    e.call(this, A(u, this.$root.$options.shadowRoot));
  } : function(u) {
    e.call(this, g(u));
  }), x)
    if (b.functional) {
      const u = b.render;
      b.render = function(S, $) {
        return x.call($), u(S, $);
      };
    } else {
      const u = b.beforeCreate;
      b.beforeCreate = u ? [].concat(u, x) : [x];
    }
  return i;
}
const Ot = typeof navigator < "u" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function Tt(t) {
  return (e, i) => function(n, a) {
    const c = Ot ? a.media || "default" : n, p = tt[c] || (tt[c] = { ids: /* @__PURE__ */ new Set(), styles: [] });
    if (!p.ids.has(n)) {
      p.ids.add(n);
      let g = a.source;
      if (a.map && (g += `
/*# sourceURL=` + a.map.sources[0] + " */", g += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(a.map)))) + " */"), p.element || (p.element = document.createElement("style"), p.element.type = "text/css", a.media && p.element.setAttribute("media", a.media), H === void 0 && (H = document.head || document.getElementsByTagName("head")[0]), H.appendChild(p.element)), "styleSheet" in p.element)
        p.styles.push(g), p.element.styleSheet.cssText = p.styles.filter(Boolean).join(`
`);
      else {
        const h = p.ids.size - 1, A = document.createTextNode(g), b = p.element.childNodes;
        b[h] && p.element.removeChild(b[h]), b.length ? p.element.insertBefore(A, b[h]) : p.element.appendChild(A);
      }
    }
  }(e, i);
}
let H;
const tt = {}, Mt = $t;
var pt = function() {
  var t = this, e = t.$createElement, i = t._self._c || e;
  return i("transition", { attrs: { name: t.transition }, on: { "after-leave": t.doDestroy } }, [i("div", { directives: [{ name: "show", rawName: "v-show", value: t.showPopper, expression: "showPopper" }], ref: "popper", staticClass: "my-infotooltip-wrapper infotooltip-row-tip", class: { "infotooltip-row-tip-top-start": t.placement == "top-start", "infotooltip-row-tip-top": t.placement == "top", "infotooltip-row-tip-left": t.placement == "left", "infotooltip-row-tip-right": t.placement == "right", "infotooltip-row-tip-bottom": t.placement == "bottom", hidden: !t.ifShowContent }, style: t.tooltipStyle, attrs: { id: t.tooltipId } }, t._l(t.tooltipContent, function(n) {
    return i("p", { key: n, staticClass: "content" }, [t._v(t._s(n))]);
  }), 0)]);
};
pt._withStripped = !0;
var Nt = kt({ render: pt, staticRenderFns: [] }, function(t) {
  t && t("data-v-306a6902_0", { source: `.my-infotooltip-wrapper[data-v-306a6902] {
  width: 100%;
}
.infotooltip-row-tip[data-v-306a6902] {
  position: fixed;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  z-index: 6000 !important;
  padding: 10px;
  font-size: 12px;
  line-height: 1.2;
  min-width: 10px;
  background: #303133;
  color: #fff;
  border-radius: 4px;
}
.infotooltip-row-tip .content[data-v-306a6902] {
  background-color: #303133;
  word-break: break-all;
  word-wrap: break-word;
}
.infotooltip-row-tip.hidden[data-v-306a6902] {
  opacity: 0;
}
.infotooltip-row-tip[data-v-306a6902]::after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  position: absolute;
}
.infotooltip-row-tip-top-start[data-v-306a6902] {
  -webkit-transform: translate3d(0, -10px, 0);
          transform: translate3d(0, -10px, 0);
}
.infotooltip-row-tip-top-start[data-v-306a6902]::after {
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #303133;
  bottom: -7px;
}
.infotooltip-row-tip-top[data-v-306a6902] {
  -webkit-transform: translate3d(0, -10px, 0);
          transform: translate3d(0, -10px, 0);
}
.infotooltip-row-tip-top[data-v-306a6902]::after {
  left: 50%;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #303133;
  bottom: -7px;
  -webkit-transform: translate3d(-50%, 0, 0);
          transform: translate3d(-50%, 0, 0);
}
.infotooltip-row-tip-left[data-v-306a6902]::after {
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid #303133;
  right: -7px;
}
.infotooltip-row-tip-right[data-v-306a6902]::after {
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 8px solid #303133;
  left: -7px;
}
.infotooltip-row-tip-bottom[data-v-306a6902]::after {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #303133;
  top: -3px;
}

/*# sourceMappingURL=main.vue.map */`, map: { version: 3, sources: ["/Users/rookie/Desktop/classes/component-library/packages/directive/src/info-tooltip/src/main.vue", "main.vue"], names: [], mappings: "AAsGA;EACA,WAAA;ACrGA;ADuGA;EACA,eAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,wBAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;EACA,WAAA;EACA,kBAAA;ACpGA;ADqGA;EACA,yBAAA;EACA,qBAAA;EACA,qBAAA;ACnGA;ADqGA;EACA,UAAA;ACnGA;ADuGA;EACA,WAAA;EACA,cAAA;EACA,QAAA;EACA,SAAA;EACA,kBAAA;ACpGA;ADuGA;EACA,2CAAA;UAAA,mCAAA;ACpGA;ADqGA;EACA,kCAAA;EACA,mCAAA;EACA,6BAAA;EACA,YAAA;ACnGA;ADuGA;EACA,2CAAA;UAAA,mCAAA;ACpGA;ADqGA;EACA,SAAA;EACA,kCAAA;EACA,mCAAA;EACA,6BAAA;EACA,YAAA;EACA,0CAAA;UAAA,kCAAA;ACnGA;ADuGA;EACA,iCAAA;EACA,oCAAA;EACA,8BAAA;EACA,WAAA;ACpGA;ADuGA;EACA,iCAAA;EACA,oCAAA;EACA,+BAAA;EACA,UAAA;ACpGA;ADuGA;EACA,kCAAA;EACA,mCAAA;EACA,gCAAA;EACA,SAAA;ACpGA;;AAEA,mCAAmC", file: "main.vue", sourcesContent: [`<template>
  <transition :name="transition" @after-leave="doDestroy">
    <div
      class="my-infotooltip-wrapper infotooltip-row-tip"
      :class="{
        'infotooltip-row-tip-top-start': placement == 'top-start',
        'infotooltip-row-tip-top': placement == 'top',
        'infotooltip-row-tip-left': placement == 'left',
        'infotooltip-row-tip-right': placement == 'right',
        'infotooltip-row-tip-bottom': placement == 'bottom',
        'hidden': !ifShowContent
      }"
      :style="tooltipStyle"
      v-show="showPopper"
      :id="tooltipId"
      ref="popper"
    >
      <!-- {{tooltipContent}} -->
      <p class="content" v-for="content in tooltipContent" :key="content">{{ content }}</p>
    </div>
  </transition>
</template>

<script>
import Popper from 'element-ui/lib/utils/vue-popper.js'
import { generateId } from 'element-ui/lib/utils/util.js'

export default {
  name: 'infotoolTip',
  props: {
    //动画名称，元素显示隐藏的时候的动画
    transition: {
      type: String,
      default: 'fade-in-linear'
    },
    tooltipStyle: {
      type: Object,
      default() {
        return {}
      }
    },
    visibleArrow: {
      type: Boolean,
      default: true
    },
    //定位方向 left|top|right|bottom
    placement: {
      type: String,
      default: 'left'
    },
    //poper的设置，具体可参考popper.js
    popperOptions: {
      default() {
        return {
          boundariesPadding: 10,
          gpuAcceleration: false
        }
      }
    }
  },
  mixins: [Popper],
  data() {
    return {
      referenceElm: null, //定位元素
      tooltipContent: '' //显示内容
    }
  },
  computed: {
    //生产动态的元素ID
    ifShowContent () {
      return !!(Array.isArray(this.tooltipContent) && this.tooltipContent.length > 0)
    },
    tooltipId() {
      return \`el-popover-\${generateId()}\`
    }
  },
  beforeCreate() {},
  mounted() {
    this.$nextTick(() => {
      //赋值 popperElm,
      this.popperElm = this.$refs.popper
    })
  },
  methods: {
    //显示tooltip
    handleMouseEnter() {
      //这句要加上，执行了doDestroy后方能够更新referenceElm，不然referenceElm这个不更新
      if (this.popperJS) {
        this.doDestroy()
      }
      this.showPopper = true
    },
    //隐藏tooltip
    handleMouseLeave() {
      this.showPopper = false
    }
  },
  watch: {}
}
<\/script>

<style lang="scss" scoped>
.my-infotooltip-wrapper {
  width: 100%;
}
.infotooltip-row-tip {
  position: fixed;
  display: flex;
  z-index: 6000 !important;
  padding: 10px;
  font-size: 12px;
  line-height: 1.2;
  min-width: 10px;
  background: #303133;
  color: #fff;
  border-radius: 4px;
  .content {
    background-color: #303133;
    word-break: break-all;
    word-wrap: break-word;
  }
  &.hidden {
    opacity: 0;
  }
}

.infotooltip-row-tip::after {
  content: '';
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  // transform
}
.infotooltip-row-tip-top-start {
  transform: translate3d(0, -10px, 0);
  &::after {
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #303133;
    bottom: -7px;
  }
}

.infotooltip-row-tip-top {
  transform: translate3d(0, -10px, 0);
  &::after {
    left: 50%;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #303133;
    bottom: -7px;
    transform: translate3d(-50%, 0, 0);
  }
}

.infotooltip-row-tip-left::after {
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid #303133;
  right: -7px;
}

.infotooltip-row-tip-right::after {
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 8px solid #303133;
  left: -7px;
}

.infotooltip-row-tip-bottom::after {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #303133;
  top: -3px;
}
</style>
`, `.my-infotooltip-wrapper {
  width: 100%;
}

.infotooltip-row-tip {
  position: fixed;
  display: flex;
  z-index: 6000 !important;
  padding: 10px;
  font-size: 12px;
  line-height: 1.2;
  min-width: 10px;
  background: #303133;
  color: #fff;
  border-radius: 4px;
}
.infotooltip-row-tip .content {
  background-color: #303133;
  word-break: break-all;
  word-wrap: break-word;
}
.infotooltip-row-tip.hidden {
  opacity: 0;
}

.infotooltip-row-tip::after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  position: absolute;
}

.infotooltip-row-tip-top-start {
  transform: translate3d(0, -10px, 0);
}
.infotooltip-row-tip-top-start::after {
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #303133;
  bottom: -7px;
}

.infotooltip-row-tip-top {
  transform: translate3d(0, -10px, 0);
}
.infotooltip-row-tip-top::after {
  left: 50%;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #303133;
  bottom: -7px;
  transform: translate3d(-50%, 0, 0);
}

.infotooltip-row-tip-left::after {
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid #303133;
  right: -7px;
}

.infotooltip-row-tip-right::after {
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 8px solid #303133;
  left: -7px;
}

.infotooltip-row-tip-bottom::after {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #303133;
  top: -3px;
}

/*# sourceMappingURL=main.vue.map */`] }, media: void 0 });
}, Mt, "data-v-306a6902", !1, void 0, !1, Tt, void 0, void 0);
const Bt = U.extend(Nt);
let W = null;
function Dt() {
  return W || (W = new Bt({ el: document.createElement("div") }), W);
}
function et(t) {
  t._tipHandler && t.removeEventListener("mouseenter", t._tipHandler), t._tipMouseleaveHandler && t.removeEventListener("mouseleave", t._tipMouseleaveHandler);
}
const Rt = ["top-start", "top", "right", "bottom", "left"], dt = { bind(t, e) {
  et(t), t._tipInstance = Dt(), t._binding = e, t._tipHandler = function(i) {
    let { value: n, modifiers: a, arg: c } = t._binding;
    i.stopPropagation();
    const p = t._tipInstance;
    let g = i.target;
    const h = Rt.filter((b) => a[b]);
    p.placement = h.length ? h[0] : "top", c && (p.tooltipStyle.maxWidth = c + "px");
    const A = g.querySelector("input") || g;
    if (A.scrollWidth > A.offsetWidth && p && (!n || n && typeof n == "string"))
      p.tooltipContent = [(A.textContent || A.value || "").replace(/[' ']/g, "")], p.referenceElm = g, p.handleMouseEnter();
    else if (n)
      return p.tooltipContent = Array.isArray(n) ? n : [n], p.referenceElm = g, void p.handleMouseEnter();
  }, t._tipMouseleaveHandler = function(i) {
    i.stopPropagation(), t._tipInstance && t._tipInstance.handleMouseLeave();
  }, t.addEventListener("mouseenter", t._tipHandler), t.addEventListener("mouseleave", t._tipMouseleaveHandler);
}, inserted(t, e) {
  let { modifiers: i } = e;
  i && i.ellipsis && wt(t, "text-overflow");
}, update(t, e) {
  t._binding = e;
}, unbind(t) {
  const e = t._tipInstance;
  e.handleMouseLeave(), e && e.doDestroy && e.doDestroy(), et(t);
}, install(t) {
  t.directive("infotooltip", dt);
} };
var ft = dt, Lt = { inserted(t) {
  const e = t.querySelector(".el-dialog"), i = e.style.cssText;
  e.cachDragCssText = i;
}, update(t, e, i) {
  const n = t.querySelector(".el-dialog__header"), a = t.querySelector(".el-dialog");
  n.style.cssText += ";cursor:move;";
  const c = document.currentStyle ? (p, g) => p.currentStyle[g] : (p, g) => getComputedStyle(p, !1)[g];
  n.onmousedown = (p) => {
    if (p.target.tagName === "I")
      return;
    const g = p.clientX, h = p.clientY, A = a.offsetWidth, b = a.offsetHeight, x = a.offsetLeft, u = a.offsetTop;
    t.dragDomLeft === void 0 && (t.dragDomLeft = x), t.dragDomTop === void 0 && (t.dragDomTop = u);
    const S = document.body.clientWidth, $ = document.body.clientHeight, k = -t.dragDomLeft, O = S - t.dragDomLeft - A, M = -t.dragDomTop, T = $ - t.dragDomTop - b;
    let o = c(a, "left"), r = c(a, "top");
    o.includes("%") ? (o = +document.body.clientWidth * (+o.replace(/%/g, "") / 100), r = +document.body.clientHeight * (+r.replace(/%/g, "") / 100)) : (o = +o.replace(/\px/g, ""), r = +r.replace(/\px/g, "")), document.onmousemove = function(s) {
      let l = s.clientX - g + o, d = s.clientY - h + r;
      l = l < k ? k : l > O && Math.abs(k) >= Math.abs(O) ? O : Math.min(Math.abs(O), l), d = d < M ? M : d > T && Math.abs(M) >= Math.abs(T) ? T : Math.min(Math.abs(T), d), a.style.cssText += `;left:${l}px;top:${d}px;`, i.child.$emit("dragDialog");
    }, document.onmouseup = function() {
      document.onmousemove = null, document.onmouseup = null;
    };
  };
}, install: function(t) {
  t.directive("el-drag-dialog", drag);
} }, J, ot, Pt = (ot = "el-drag-dialog", (J = Lt).install = (t) => {
  t.directive(ot, J);
}, J);
function B(t, e, i, n, a, c, p, g) {
  var h = typeof t == "function" ? t.options : t;
  e && (h.render = e, h.staticRenderFns = i, h._compiled = !0), n && (h.functional = !0), c && (h._scopeId = "data-v-" + c);
  var A;
  if (p ? (A = function(u) {
    u = u || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !u && typeof __VUE_SSR_CONTEXT__ < "u" && (u = __VUE_SSR_CONTEXT__), a && a.call(this, u), u && u._registeredComponents && u._registeredComponents.add(p);
  }, h._ssrRegister = A) : a && (A = g ? function() {
    a.call(
      this,
      (h.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : a), A)
    if (h.functional) {
      h._injectStyles = A;
      var b = h.render;
      h.render = function(S, $) {
        return A.call($), b(S, $);
      };
    } else {
      var x = h.beforeCreate;
      h.beforeCreate = x ? [].concat(x, A) : [A];
    }
  return {
    exports: t,
    options: h
  };
}
const zt = {
  name: "my-table",
  directives: {
    infotooltip: ft
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    dataKey: {
      type: String,
      default: "list"
    },
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    loading: {
      type: Boolean,
      default: !1
    },
    selectedList: {
      // 已经选中里的列表(多选中，用来判断是否可以点击)
      type: Array,
      default() {
        return [];
      }
    },
    selectedKey: {
      // 用来判断多选是否可以点击的key(selectedList数组中对象的唯一key值)
      type: String,
      default: "id"
    },
    radioKey: {
      // 单选标识字段
      type: String
    }
  },
  computed: {
    attrs() {
      return R(mt, this.$attrs);
    },
    selectionColumns() {
      return this.columns.some((t) => t.type === "selection");
    },
    newSelectedList() {
      return ct(JSON.parse(JSON.stringify(this.selectedList)));
    }
  },
  watch: {
    columns: {
      immediate: !0,
      handler() {
        this.newColumns = this.normalizeColumns(this.columns);
      }
    }
  },
  data() {
    return {
      rightImg: At,
      radio: "",
      newColumns: [],
      currentRow: null,
      selectionList: []
      // 多选的数据
    };
  },
  methods: {
    isFunction: it,
    _noop() {
      bt();
    },
    normalizeColumns(t) {
      return t.filter((e) => e.ifRender !== !1).map((e) => {
        if (e = R(ht, e), e.component) {
          let i = e.component;
          i.componentName = at(i), i.attrs = D(i), i.itemAttrs = D(i, "itemAttrs"), i.on = D(e.component, "on");
        }
        return e;
      });
    },
    onRowClick(t) {
      this.radioKey && (this.radio = t[this.radioKey]), this.selectionColumns && t.selectable && this.$refs.commonTable.toggleRowSelection(t), this.currentRow = t, console.log(this.currentRow, "currentRow");
    },
    getCurrentRow() {
      return this.currentRow;
    },
    resetCurrentRow() {
      this.currentRow = null;
    },
    getSelectionList() {
      return this.selectionList;
    },
    resetRadio() {
      this.radio = "";
    },
    onSelectChange(t) {
      this.selectionList = t;
    },
    checkSelectable(t) {
      return t.selectable = this.newSelectedList.length ? this.newSelectedList.every(
        (e) => e[this.selectedKey] !== t[this.selectedKey]
      ) : !0, t.selectable;
    }
  },
  created() {
  },
  mounted() {
    setTimeout(() => {
      Object.keys(this.$refs.commonTable.$options.methods).forEach(
        (t) => {
          t in this || (this[t] = this.$refs.commonTable[t]);
        }
      );
    }, 20);
  }
};
var jt = function() {
  var e = this, i = e._self._c;
  return i("el-table", e._g(e._b({ directives: [{ name: "loading", rawName: "v-loading", value: e.loading, expression: "loading" }], ref: "commonTable", staticClass: "my-table-wrapper", attrs: { data: e.data }, on: { "row-click": e.onRowClick, "selection-change": e.onSelectChange } }, "el-table", e.attrs, !1), e.$listeners), [e._l(e.newColumns, function(n) {
    return [n.type === "selection" ? i("el-table-column", e._b({ key: n.prop, attrs: { type: "selection", selectable: e.checkSelectable } }, "el-table-column", n, !1)) : n.type === "index" ? i("el-table-column", e._b({ key: n.prop, attrs: { type: "index" } }, "el-table-column", n, !1)) : n.type === "expand" ? i("el-table-column", e._b({ key: n.prop, attrs: { type: "expand" }, scopedSlots: e._u([{ key: "default", fn: function(a) {
      return [e._t("expand", null, { row: a.row, index: a.$index })];
    } }], null, !0) }, "el-table-column", n, !1)) : i("el-table-column", e._b({ key: n.prop, scopedSlots: e._u([{ key: "header", fn: function(a) {
      return [n.isCustomizeHeader ? [e._t(n.headerName || `${n.prop}_header`, null, { row: a.row, label: n.label })] : [e._v(" " + e._s(n.label) + " ")]];
    } }, { key: "default", fn: function(a) {
      return [n.type === "link" ? i("div", { staticClass: "link-container text-overflow", staticStyle: { width: "100%" } }, [i("img", { staticClass: "pointer", attrs: { src: e.rightImg }, on: { click: function(c) {
        e.isFunction(n.handleClick) ? n.handleClick({
          ...a.row,
          ...n.options || {}
        }) : e._noop;
      } } }), i("span", [e._v(e._s(a.row[n.prop]))])]) : n.type === "radio" ? [i("el-radio", { staticClass: "radio", attrs: { label: a.row[e.radioKey] }, model: { value: e.radio, callback: function(c) {
        e.radio = c;
      }, expression: "radio" } }, [e._v(e._s())])] : n.slotName ? [e._t(n.slotName || "default", null, { index: a.$index, row: a.row, prop: n.prop })] : n.component ? [i("el-form-item", e._b({ attrs: { prop: e.dataKey + "." + a.$index + "." + n.prop } }, "el-form-item", n.component.itemAttrs, !1), [i(n.component.componentName, e._g(e._b({ directives: [{ name: "infotooltip", rawName: "v-infotooltip:200", arg: "200" }], tag: "component", model: { value: a.row[n.prop || n.component.attrs.prop], callback: function(c) {
        e.$set(a.row, n.prop || n.component.attrs.prop, c);
      }, expression: "scope.row[column.prop || column.component.attrs.prop]" } }, "component", n.component.attrs, !1), n.component.on))], 1)] : [e._v(" " + e._s(a.row[n.prop]) + " ")]];
    } }], null, !0) }, "el-table-column", n, !1))];
  })], 2);
}, It = [], Gt = /* @__PURE__ */ B(
  zt,
  jt,
  It,
  !1,
  null,
  "2cb5586a",
  null,
  null
);
const z = Gt.exports;
z.install = (t) => {
  t.component(z.name, z);
};
Math.easeInOutQuad = function(t, e, i, n) {
  return t /= n / 2, t < 1 ? i / 2 * t * t + e : (t--, -i / 2 * (t * (t - 2) - 1) + e);
};
var Ft = function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
    window.setTimeout(t, 1e3 / 60);
  };
}();
function qt(t) {
  document.documentElement.scrollTop = t, document.body.parentNode.scrollTop = t, document.body.scrollTop = t;
}
function Ut() {
  return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
}
function nt(t, e, i) {
  const n = Ut(), a = t - n, c = 20;
  let p = 0;
  e = typeof e > "u" ? 500 : e;
  var g = function() {
    p += c;
    var h = Math.easeInOutQuad(p, n, a, e);
    qt(h), p < e ? Ft(g) : i && typeof i == "function" && i();
  };
  g();
}
const Ht = {
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
      set(t) {
        this.$emit("update:page", t);
      }
    },
    pageSize: {
      get() {
        return this.limit;
      },
      set(t) {
        this.$emit("update:limit", t);
      }
    }
  },
  methods: {
    handleSizeChange(t) {
      this.$emit("pagination", { page: this.currentPage, limit: t }), this.autoScroll && nt(0, 800);
    },
    handleCurrentChange(t) {
      this.$emit("pagination", { page: t, limit: this.pageSize }), this.autoScroll && nt(0, 800);
    }
  }
};
var Wt = function() {
  var e = this, i = e._self._c;
  return i("div", { staticClass: "pagination-container", class: { hidden: e.hidden } }, [i("el-pagination", e._b({ attrs: { background: e.background, "current-page": e.currentPage, "page-size": e.pageSize, layout: e.layout, total: e.total }, on: { "update:currentPage": function(n) {
    e.currentPage = n;
  }, "update:current-page": function(n) {
    e.currentPage = n;
  }, "update:pageSize": function(n) {
    e.pageSize = n;
  }, "update:page-size": function(n) {
    e.pageSize = n;
  }, "size-change": e.handleSizeChange, "current-change": e.handleCurrentChange } }, "el-pagination", e.$attrs, !1))], 1);
}, Jt = [], Vt = /* @__PURE__ */ B(
  Ht,
  Wt,
  Jt,
  !1,
  null,
  "f3a0242d",
  null,
  null
);
const j = Vt.exports;
j.install = (t) => {
  t.component(j.name, j);
};
const Kt = {
  size: "mini",
  "show-message": !1
}, Qt = {
  size: "mini",
  "show-message": !1
};
function Yt(t) {
  let e = t, i = [], n = 0;
  for (let a = 0; a < e.length; a++)
    i[n] || (i[n] = []), i[n].push(e[a]), e[a].isEnd && n++;
  return i;
}
const Xt = {
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
var Zt = function() {
  var e = this, i = e._self._c;
  return i("el-select", e._g(e._b({ staticClass: "my-select-wrapper", attrs: { value: e.value } }, "el-select", e.$attrs, !1), e.$listeners), e._l(e.$attrs.options, function(n) {
    return i("el-option", { key: n.value, attrs: { label: n.label, value: n.value } });
  }), 1);
}, te = [], ee = /* @__PURE__ */ B(
  Xt,
  Zt,
  te,
  !1,
  null,
  "ddea6cde",
  null,
  null
);
const I = ee.exports;
I.install = (t) => {
  t.component(I.name, I);
};
const oe = {
  name: "my-form",
  components: {
    MySelect: I
  },
  directives: {
    infotooltip: ft
  },
  props: {
    model: {
      type: Object,
      default() {
        return {};
      }
    },
    formItems: {
      type: Array,
      default() {
        return [];
      }
    },
    columnNumber: {
      // 一行多少个列数(设置了isCustomerEnd，则会无效)
      type: Number,
      default: 1
    },
    isCustomerEnd: {
      // 是否自定义换行
      type: Boolean
    },
    rowStyle: {
      // 用来设置行样式
      type: Function,
      default() {
      }
    },
    cellStyle: {
      // 用来设置列样式
      type: Function,
      default() {
      }
    }
  },
  watch: {
    model: {
      immediate: !0,
      handler(t) {
        console.log(this.model, "model"), this.form = t;
      }
    },
    form: {
      // 每次改变model的值都向外传递事件，保证拿到最新的值
      deep: !0,
      immediate: !0,
      handler(t) {
        console.log(this.form, "form"), this.$emit("change", t);
      }
    }
  },
  computed: {
    attrs() {
      return Object.assign({}, Kt, this.$attrs);
    },
    formInputs() {
      return this.normalizeFormItems();
    }
  },
  data() {
    return {
      form: {}
    };
  },
  methods: {
    normalizeFormItems() {
      let t = [], e = -1, i = this.formItems.filter((n) => this.isRender(n.isRender));
      if (this.isCustomerEnd)
        i = i.map((n) => this.createComputedInput(n)), t = Yt(i);
      else
        for (let n = 0; n < i.length; n++) {
          let a = i[n];
          n % this.columnNumber === 0 && (t[++e] = []), t[e].push(this.createComputedInput(a));
        }
      return console.log(t, "result"), t;
    },
    createComputedInput(t) {
      let e = { ...t };
      return e.tag && (e.componentName = at(e), e.attrs = D(e), e.itemAttrs = R(Qt, e.itemAttrs), e.on = D(e, "on")), e;
    },
    isRender(t) {
      return typeof t < "u" ? it(t) ? t(this.model) : t : !0;
    },
    clearValidate() {
      this.$refs.form.clearValidate();
    }
  },
  created() {
  },
  mounted() {
    setTimeout(() => {
      Object.keys(this.$refs.form.$options.methods).forEach((t) => {
        t in this || (this[t] = this.$refs.form[t]);
      });
    }, 20);
  }
};
var ne = function() {
  var e = this, i = e._self._c;
  return i("div", { staticClass: "form-wrapper" }, [i("el-form", e._g(e._b({ ref: "form", attrs: { model: e.model } }, "el-form", e.attrs, !1), e.$listeners), [e._l(e.formInputs, function(n, a) {
    return [i("el-row", { key: a, style: e.rowStyle({ row: n, rowIndex: a }), attrs: { type: "flex" } }, e._l(n, function(c, p) {
      return i("el-col", { key: `${a}_${p}`, style: e.cellStyle({ col: c, colIndex: p, rowIndex: a }), attrs: { span: c.span || 24 } }, [c.slotName ? e._t(c.slotName, null, { model: e.model, rowIndex: a, colIndex: p, item: c }) : i("el-form-item", e._b({}, "el-form-item", c.itemAttrs, !1), [i(c.componentName, e._g(e._b({ directives: [{ name: "infotooltip", rawName: "v-infotooltip:200", arg: "200" }], tag: "component", model: { value: e.model[c.attrs.prop], callback: function(g) {
        e.$set(e.model, c.attrs.prop, g);
      }, expression: "model[item.attrs.prop]" } }, "component", c.attrs, !1), c.on))], 1)], 2);
    }), 1)];
  })], 2)], 1);
}, re = [], ie = /* @__PURE__ */ B(
  oe,
  ne,
  re,
  !1,
  null,
  "6bf2e565",
  null,
  null
);
const G = ie.exports;
G.install = (t) => {
  t.component(G.name, G);
};
const se = {
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
var ae = function() {
  var e = this, i = e._self._c;
  return i("el-select", e._g(e._b({ staticClass: "my-select-wrapper", attrs: { value: e.value } }, "el-select", e.$attrs, !1), e.$listeners), e._l(e.$attrs.options, function(n) {
    return i("el-option", { key: n.value, attrs: { label: n.label, value: n.value } });
  }), 1);
}, le = [], pe = /* @__PURE__ */ B(
  se,
  ae,
  le,
  !1,
  null,
  "a3e0b1b4",
  null,
  null
);
const F = pe.exports;
F.install = (t) => {
  t.component(F.name, F);
};
const de = {
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
const rt = ut(), fe = {
  name: "my-dialog",
  // components: {
  //   ElDialog: Dialog,
  //   ElRow: Row,
  //   ElButton: Button
  // },
  directives: {
    elDragDialog: Pt
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
      return Object.assign({}, de, this.$attrs);
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
    this.dialogElm = this.$refs.dialog.$el, this.dragDom = this.dialogElm.querySelector(".el-dialog"), rt.listenTo(this.dragDom, (t) => {
      this.dragDom.cachDragCssText = t.style.cssText;
    });
  },
  destroyed() {
    rt.uninstall(this.dragDom);
  }
};
var ce = function() {
  var e = this, i = e._self._c;
  return i("el-dialog", e._g(e._b({ directives: [{ name: "el-drag-dialog", rawName: "v-el-drag-dialog" }], ref: "dialog", staticClass: "my-dialog-wrapper", class: { fullscreen: e.attrs.fullscreen }, attrs: { visible: e.dialogVisible }, on: { "update:visible": function(n) {
    e.dialogVisible = n;
  }, closed: e.onClosed }, nativeOn: { click: function(n) {
    n.stopPropagation();
  } } }, "el-dialog", e.attrs, !1), e.$listeners), [i("el-row", { staticClass: "title-wrapper", attrs: { slot: "title", type: "flex", align: "middle" }, slot: "title" }, [e._t("title", function() {
    return [e.title ? [i("el-row", { style: e.titleStyle, attrs: { type: "flex", align: "middle" } }, [i("div", { staticClass: "my-dialog-icon" }), i("span", { staticClass: "my-dialog-title" }, [e._v(e._s(e.title))])])] : e._e()];
  })], 2), e._t("default"), i("div", { staticClass: "dialog-footer", staticStyle: { "text-align": "center" }, attrs: { slot: "footer" }, slot: "footer" }, [e._t("footer", function() {
    return [e.isShowBtn && e.newBtnList.length ? e._l(e.newBtnList, function(n) {
      return i("el-button", { key: n.btnText, staticClass: "btn-item", class: [
        n.className,
        {
          "customer-btn-class": !n.type
        }
      ], attrs: { type: n.type || "primary", size: n.size || "mini", loading: n.loading === !0 }, on: { click: function(a) {
        return n.handleClick(n.options || {});
      } } }, [e._v(e._s(n.btnText))]);
    }) : e._e()];
  })], 2)], 2);
}, ue = [], me = /* @__PURE__ */ B(
  fe,
  ce,
  ue,
  !1,
  null,
  "b3a28924",
  null,
  null
);
const q = me.exports;
q.install = (t) => {
  t.component(q.name, q);
};
const he = [
  z,
  j,
  G,
  F,
  q
], ye = {
  install(t) {
    he.forEach((e) => {
      t.component(e.name, e);
    });
  }
};
export {
  q as Dialog,
  G as Form,
  j as Pagination,
  F as Select,
  z as Table,
  ye as default
};
