import { flattenDeep as X, isFunction as tt } from "lodash-es";
import B from "vue";
const et = {
  stripe: !0,
  border: !0,
  fit: !0,
  size: "mini",
  // 'row-class-name': tableRowClassName,
  "highlight-current-row": !0,
  "header-row-style": U,
  "header-cell-style": U
};
function U() {
  return {
    backgroundColor: "#DEDEDE"
  };
}
const ot = {
  "show-overflow-tooltip": !0,
  "reserve-selection": !0
};
let nt = {
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
const Q = nt;
function M(e = {}, n = {}) {
  return Object.assign({}, e, n);
}
function rt(e, n = !1) {
  return e.tag = e.tag ? e.tag : n ? "s-input" : "text", Q[e.tag].component;
}
function R(e, n = "attrs") {
  let d = Q[e.tag];
  return e[n] && e[n].style && (e[n].style = M(d[n].style || {}, e[n].style)), M(d[n] || {}, e[n] || {});
}
const it = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACtSURBVChTY6Aq+LGVQfv7FgY2KBcFMEFpbKCGkZHhIlCzCpQPB/g0gYAGEF8GarSDcCGAEUQABZuAlCSIjQRcgFgBwgSDZA5vhnkgBkzTeyAlAGITAG1AjdWkagKBVEJ+QgcT/jMyLIDZVAOkuEFsJJAIxOIQJsNXIK4GOm0ihIsDAA2aB8T/QU4H4gCoMBjgcx4HED8DYj+gDRvAIoTAj20M0kAb5KBcSgEDAwBgyStAtwgHFQAAAABJRU5ErkJggg==";
function st() {
  console.log("noop");
}
var j = {}, pt = { get exports() {
  return j;
}, set exports(e) {
  j = e;
} }, J;
function at() {
  return J || (J = 1, e = pt, s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(p) {
    return typeof p;
  } : function(p) {
    return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
  }, n = void 0, d = function() {
    var p = window, g = { placement: "bottom", gpuAcceleration: !0, offset: 0, boundariesElement: "viewport", boundariesPadding: 5, preventOverflowOrder: ["left", "right", "top", "bottom"], flipBehavior: "flip", arrowElement: "[x-arrow]", arrowOffset: 0, modifiers: ["shift", "offset", "preventOverflow", "keepTogether", "arrow", "flip", "applyStyle"], modifiersIgnored: [], forceAbsolute: !1 };
    function a(t, o, r) {
      this._reference = t.jquery ? t[0] : t, this.state = {};
      var i = o == null, f = o && Object.prototype.toString.call(o) === "[object Object]";
      return this._popper = i || f ? this.parse(f ? o : {}) : o.jquery ? o[0] : o, this._options = Object.assign({}, g, r), this._options.modifiers = this._options.modifiers.map(function(l) {
        if (this._options.modifiersIgnored.indexOf(l) === -1)
          return l === "applyStyle" && this._popper.setAttribute("x-placement", this._options.placement), this.modifiers[l] || l;
      }.bind(this)), this.state.position = this._getPosition(this._popper, this._reference), N(this._popper, { position: this.state.position, top: 0 }), this.update(), this._setupEventListeners(), this;
    }
    function v(t) {
      var o = t.style.display, r = t.style.visibility;
      t.style.display = "block", t.style.visibility = "hidden", t.offsetWidth;
      var i = p.getComputedStyle(t), f = parseFloat(i.marginTop) + parseFloat(i.marginBottom), l = parseFloat(i.marginLeft) + parseFloat(i.marginRight), c = { width: t.offsetWidth + l, height: t.offsetHeight + f };
      return t.style.display = o, t.style.visibility = r, c;
    }
    function u(t) {
      var o = { left: "right", right: "left", bottom: "top", top: "bottom" };
      return t.replace(/left|right|bottom|top/g, function(r) {
        return o[r];
      });
    }
    function A(t) {
      var o = Object.assign({}, t);
      return o.right = o.left + o.width, o.bottom = o.top + o.height, o;
    }
    function b(t, o) {
      var r, i = 0;
      for (r in t) {
        if (t[r] === o)
          return i;
        i++;
      }
      return null;
    }
    function C(t, o) {
      return p.getComputedStyle(t, null)[o];
    }
    function h(t) {
      var o = t.offsetParent;
      return o !== p.document.body && o ? o : p.document.documentElement;
    }
    function S(t) {
      var o = t.parentNode;
      return o ? o === p.document ? p.document.body.scrollTop || p.document.body.scrollLeft ? p.document.body : p.document.documentElement : ["scroll", "auto"].indexOf(C(o, "overflow")) !== -1 || ["scroll", "auto"].indexOf(C(o, "overflow-x")) !== -1 || ["scroll", "auto"].indexOf(C(o, "overflow-y")) !== -1 ? o : S(t.parentNode) : t;
    }
    function O(t) {
      return t !== p.document.body && (C(t, "position") === "fixed" || (t.parentNode ? O(t.parentNode) : t));
    }
    function N(t, o) {
      Object.keys(o).forEach(function(r) {
        var i, f = "";
        ["width", "height", "top", "right", "bottom", "left"].indexOf(r) !== -1 && (i = o[r]) !== "" && !isNaN(parseFloat(i)) && isFinite(i) && (f = "px"), t.style[r] = o[r] + f;
      });
    }
    function G(t) {
      var o = { width: t.offsetWidth, height: t.offsetHeight, left: t.offsetLeft, top: t.offsetTop };
      return o.right = o.left + o.width, o.bottom = o.top + o.height, o;
    }
    function I(t) {
      var o = t.getBoundingClientRect(), r = navigator.userAgent.indexOf("MSIE") != -1 && t.tagName === "HTML" ? -t.scrollTop : o.top;
      return { left: o.left, top: r, right: o.right, bottom: o.bottom, width: o.right - o.left, height: o.bottom - r };
    }
    function z(t) {
      for (var o = ["", "ms", "webkit", "moz", "o"], r = 0; r < o.length; r++) {
        var i = o[r] ? o[r] + t.charAt(0).toUpperCase() + t.slice(1) : t;
        if (p.document.body.style[i] !== void 0)
          return i;
      }
      return null;
    }
    return a.prototype.destroy = function() {
      return this._popper.removeAttribute("x-placement"), this._popper.style.left = "", this._popper.style.position = "", this._popper.style.top = "", this._popper.style[z("transform")] = "", this._removeEventListeners(), this._options.removeOnDestroy && this._popper.remove(), this;
    }, a.prototype.update = function() {
      var t = { instance: this, styles: {} };
      t.placement = this._options.placement, t._originalPlacement = this._options.placement, t.offsets = this._getOffsets(this._popper, this._reference, t.placement), t.boundaries = this._getBoundaries(t, this._options.boundariesPadding, this._options.boundariesElement), t = this.runModifiers(t, this._options.modifiers), typeof this.state.updateCallback == "function" && this.state.updateCallback(t);
    }, a.prototype.onCreate = function(t) {
      return t(this), this;
    }, a.prototype.onUpdate = function(t) {
      return this.state.updateCallback = t, this;
    }, a.prototype.parse = function(t) {
      var o = { tagName: "div", classNames: ["popper"], attributes: [], parent: p.document.body, content: "", contentType: "text", arrowTagName: "div", arrowClassNames: ["popper__arrow"], arrowAttributes: ["x-arrow"] };
      t = Object.assign({}, o, t);
      var r = p.document, i = r.createElement(t.tagName);
      if (c(i, t.classNames), m(i, t.attributes), t.contentType === "node" ? i.appendChild(t.content.jquery ? t.content[0] : t.content) : t.contentType === "html" ? i.innerHTML = t.content : i.textContent = t.content, t.arrowTagName) {
        var f = r.createElement(t.arrowTagName);
        c(f, t.arrowClassNames), m(f, t.arrowAttributes), i.appendChild(f);
      }
      var l = t.parent.jquery ? t.parent[0] : t.parent;
      if (typeof l == "string") {
        if ((l = r.querySelectorAll(t.parent)).length > 1 && console.warn("WARNING: the given `parent` query(" + t.parent + ") matched more than one element, the first one will be used"), l.length === 0)
          throw "ERROR: the given `parent` doesn't exists!";
        l = l[0];
      }
      return l.length > 1 && l instanceof Element == 0 && (console.warn("WARNING: you have passed as parent a list of elements, the first one will be used"), l = l[0]), l.appendChild(i), i;
      function c(w, _) {
        _.forEach(function(y) {
          w.classList.add(y);
        });
      }
      function m(w, _) {
        _.forEach(function(y) {
          w.setAttribute(y.split(":")[0], y.split(":")[1] || "");
        });
      }
    }, a.prototype._getPosition = function(t, o) {
      return h(o), this._options.forceAbsolute ? "absolute" : O(o) ? "fixed" : "absolute";
    }, a.prototype._getOffsets = function(t, o, r) {
      r = r.split("-")[0];
      var i = {};
      i.position = this.state.position;
      var f = i.position === "fixed", l = function(m, w, _) {
        var y = I(m), x = I(w);
        if (_) {
          var E = S(w);
          x.top += E.scrollTop, x.bottom += E.scrollTop, x.left += E.scrollLeft, x.right += E.scrollLeft;
        }
        return { top: y.top - x.top, left: y.left - x.left, bottom: y.top - x.top + y.height, right: y.left - x.left + y.width, width: y.width, height: y.height };
      }(o, h(t), f), c = v(t);
      return ["right", "left"].indexOf(r) !== -1 ? (i.top = l.top + l.height / 2 - c.height / 2, i.left = r === "left" ? l.left - c.width : l.right) : (i.left = l.left + l.width / 2 - c.width / 2, i.top = r === "top" ? l.top - c.height : l.bottom), i.width = c.width, i.height = c.height, { popper: i, reference: l };
    }, a.prototype._setupEventListeners = function() {
      if (this.state.updateBound = this.update.bind(this), p.addEventListener("resize", this.state.updateBound), this._options.boundariesElement !== "window") {
        var t = S(this._reference);
        t !== p.document.body && t !== p.document.documentElement || (t = p), t.addEventListener("scroll", this.state.updateBound), this.state.scrollTarget = t;
      }
    }, a.prototype._removeEventListeners = function() {
      p.removeEventListener("resize", this.state.updateBound), this._options.boundariesElement !== "window" && this.state.scrollTarget && (this.state.scrollTarget.removeEventListener("scroll", this.state.updateBound), this.state.scrollTarget = null), this.state.updateBound = null;
    }, a.prototype._getBoundaries = function(t, o, r) {
      var i, f, l = {};
      if (r === "window") {
        var c = p.document.body, m = p.document.documentElement;
        i = Math.max(c.scrollHeight, c.offsetHeight, m.clientHeight, m.scrollHeight, m.offsetHeight), l = { top: 0, right: Math.max(c.scrollWidth, c.offsetWidth, m.clientWidth, m.scrollWidth, m.offsetWidth), bottom: i, left: 0 };
      } else if (r === "viewport") {
        var w = h(this._popper), _ = S(this._popper), y = G(w), x = t.offsets.popper.position === "fixed" ? 0 : (f = _) == document.body ? Math.max(document.documentElement.scrollTop, document.body.scrollTop) : f.scrollTop, E = t.offsets.popper.position === "fixed" ? 0 : function(k) {
          return k == document.body ? Math.max(document.documentElement.scrollLeft, document.body.scrollLeft) : k.scrollLeft;
        }(_);
        l = { top: 0 - (y.top - x), right: p.document.documentElement.clientWidth - (y.left - E), bottom: p.document.documentElement.clientHeight - (y.top - x), left: 0 - (y.left - E) };
      } else
        l = h(this._popper) === r ? { top: 0, left: 0, right: r.clientWidth, bottom: r.clientHeight } : G(r);
      return l.left += o, l.right -= o, l.top = l.top + o, l.bottom = l.bottom - o, l;
    }, a.prototype.runModifiers = function(t, o, r) {
      var i = o.slice();
      return r !== void 0 && (i = this._options.modifiers.slice(0, b(this._options.modifiers, r))), i.forEach(function(f) {
        var l, c;
        c = {}, (l = f) && c.toString.call(l) === "[object Function]" && (t = f.call(this, t));
      }.bind(this)), t;
    }, a.prototype.isModifierRequired = function(t, o) {
      var r = b(this._options.modifiers, t);
      return !!this._options.modifiers.slice(0, r).filter(function(i) {
        return i === o;
      }).length;
    }, a.prototype.modifiers = {}, a.prototype.modifiers.applyStyle = function(t) {
      var o, r = { position: t.offsets.popper.position }, i = Math.round(t.offsets.popper.left), f = Math.round(t.offsets.popper.top);
      return this._options.gpuAcceleration && (o = z("transform")) ? (r[o] = "translate3d(" + i + "px, " + f + "px, 0)", r.top = 0, r.left = 0) : (r.left = i, r.top = f), Object.assign(r, t.styles), N(this._popper, r), this._popper.setAttribute("x-placement", t.placement), this.isModifierRequired(this.modifiers.applyStyle, this.modifiers.arrow) && t.offsets.arrow && N(t.arrowElement, t.offsets.arrow), t;
    }, a.prototype.modifiers.shift = function(t) {
      var o = t.placement, r = o.split("-")[0], i = o.split("-")[1];
      if (i) {
        var f = t.offsets.reference, l = A(t.offsets.popper), c = { y: { start: { top: f.top }, end: { top: f.top + f.height - l.height } }, x: { start: { left: f.left }, end: { left: f.left + f.width - l.width } } }, m = ["bottom", "top"].indexOf(r) !== -1 ? "x" : "y";
        t.offsets.popper = Object.assign(l, c[m][i]);
      }
      return t;
    }, a.prototype.modifiers.preventOverflow = function(t) {
      var o = this._options.preventOverflowOrder, r = A(t.offsets.popper), i = { left: function() {
        var f = r.left;
        return r.left < t.boundaries.left && (f = Math.max(r.left, t.boundaries.left)), { left: f };
      }, right: function() {
        var f = r.left;
        return r.right > t.boundaries.right && (f = Math.min(r.left, t.boundaries.right - r.width)), { left: f };
      }, top: function() {
        var f = r.top;
        return r.top < t.boundaries.top && (f = Math.max(r.top, t.boundaries.top)), { top: f };
      }, bottom: function() {
        var f = r.top;
        return r.bottom > t.boundaries.bottom && (f = Math.min(r.top, t.boundaries.bottom - r.height)), { top: f };
      } };
      return o.forEach(function(f) {
        t.offsets.popper = Object.assign(r, i[f]());
      }), t;
    }, a.prototype.modifiers.keepTogether = function(t) {
      var o = A(t.offsets.popper), r = t.offsets.reference, i = Math.floor;
      return o.right < i(r.left) && (t.offsets.popper.left = i(r.left) - o.width), o.left > i(r.right) && (t.offsets.popper.left = i(r.right)), o.bottom < i(r.top) && (t.offsets.popper.top = i(r.top) - o.height), o.top > i(r.bottom) && (t.offsets.popper.top = i(r.bottom)), t;
    }, a.prototype.modifiers.flip = function(t) {
      if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow))
        return console.warn("WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!"), t;
      if (t.flipped && t.placement === t._originalPlacement)
        return t;
      var o = t.placement.split("-")[0], r = u(o), i = t.placement.split("-")[1] || "", f = [];
      return (f = this._options.flipBehavior === "flip" ? [o, r] : this._options.flipBehavior).forEach(function(l, c) {
        if (o === l && f.length !== c + 1) {
          o = t.placement.split("-")[0], r = u(o);
          var m = A(t.offsets.popper), w = ["right", "bottom"].indexOf(o) !== -1;
          (w && Math.floor(t.offsets.reference[o]) > Math.floor(m[r]) || !w && Math.floor(t.offsets.reference[o]) < Math.floor(m[r])) && (t.flipped = !0, t.placement = f[c + 1], i && (t.placement += "-" + i), t.offsets.popper = this._getOffsets(this._popper, this._reference, t.placement).popper, t = this.runModifiers(t, this._options.modifiers, this._flip));
        }
      }.bind(this)), t;
    }, a.prototype.modifiers.offset = function(t) {
      var o = this._options.offset, r = t.offsets.popper;
      return t.placement.indexOf("left") !== -1 ? r.top -= o : t.placement.indexOf("right") !== -1 ? r.top += o : t.placement.indexOf("top") !== -1 ? r.left -= o : t.placement.indexOf("bottom") !== -1 && (r.left += o), t;
    }, a.prototype.modifiers.arrow = function(t) {
      var o = this._options.arrowElement, r = this._options.arrowOffset;
      if (typeof o == "string" && (o = this._popper.querySelector(o)), !o)
        return t;
      if (!this._popper.contains(o))
        return console.warn("WARNING: `arrowElement` must be child of its popper element!"), t;
      if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether))
        return console.warn("WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!"), t;
      var i = {}, f = t.placement.split("-")[0], l = A(t.offsets.popper), c = t.offsets.reference, m = ["left", "right"].indexOf(f) !== -1, w = m ? "height" : "width", _ = m ? "top" : "left", y = m ? "left" : "top", x = m ? "bottom" : "right", E = v(o)[w];
      c[x] - E < l[_] && (t.offsets.popper[_] -= l[_] - (c[x] - E)), c[_] + E > l[x] && (t.offsets.popper[_] += c[_] + E - l[x]);
      var k = c[_] + (r || c[w] / 2 - E / 2) - l[_];
      return k = Math.max(Math.min(l[w] - E - 8, k), 8), i[_] = k, i[y] = "", t.offsets.arrow = i, t.arrowElement = o, t;
    }, Object.assign || Object.defineProperty(Object, "assign", { enumerable: !1, configurable: !0, writable: !0, value: function(t) {
      if (t == null)
        throw new TypeError("Cannot convert first argument to object");
      for (var o = Object(t), r = 1; r < arguments.length; r++) {
        var i = arguments[r];
        if (i != null) {
          i = Object(i);
          for (var f = Object.keys(i), l = 0, c = f.length; l < c; l++) {
            var m = f[l], w = Object.getOwnPropertyDescriptor(i, m);
            w !== void 0 && w.enumerable && (o[m] = i[m]);
          }
        }
      }
      return o;
    } }), a;
  }, s(e) === "object" && e.exports ? e.exports = d() : n.Popper = d()), j;
  var e, n, d, s;
}
var lt = {}, $, dt = function(e, n) {
  if (e) {
    for (var d = e.className, s = (n || "").split(" "), p = 0, g = s.length; p < g; p++) {
      var a = s[p];
      a && (e.classList ? e.classList.add(a) : ft(e, a) || (d += " " + a));
    }
    e.classList || e.setAttribute("class", d);
  }
};
(($ = B) && $.__esModule ? $ : { default: $ }).default.prototype.$isServer;
function ft(e, n) {
  if (!e || !n)
    return !1;
  if (n.indexOf(" ") !== -1)
    throw new Error("className should not contain space.");
  return e.classList ? e.classList.contains(n) : (" " + e.className + " ").indexOf(" " + n + " ") > -1;
}
var T, ct = (T = B) && T.__esModule ? T : { default: T }, H = lt, ht = ct.default.prototype.$isServer ? function() {
} : at(), W = function(e) {
  return e.stopPropagation();
}, ut = { props: { transformOrigin: { type: [Boolean, String], default: !0 }, placement: { type: String, default: "bottom" }, boundariesPadding: { type: Number, default: 5 }, reference: {}, popper: {}, offset: { default: 0 }, value: Boolean, visibleArrow: Boolean, arrowOffset: { type: Number, default: 35 }, appendToBody: { type: Boolean, default: !0 }, popperOptions: { type: Object, default: function() {
  return { gpuAcceleration: !1 };
} } }, data: function() {
  return { showPopper: !1, currentPlacement: "" };
}, watch: { value: { immediate: !0, handler: function(e) {
  this.showPopper = e, this.$emit("input", e);
} }, showPopper: function(e) {
  this.disabled || (e ? this.updatePopper() : this.destroyPopper(), this.$emit("input", e));
} }, methods: { createPopper: function() {
  var e = this;
  if (!this.$isServer && (this.currentPlacement = this.currentPlacement || this.placement, /^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement))) {
    var n = this.popperOptions, d = this.popperElm = this.popperElm || this.popper || this.$refs.popper, s = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference;
    !s && this.$slots.reference && this.$slots.reference[0] && (s = this.referenceElm = this.$slots.reference[0].elm), d && s && (this.visibleArrow && this.appendArrow(d), this.appendToBody && document.body.appendChild(this.popperElm), this.popperJS && this.popperJS.destroy && this.popperJS.destroy(), n.placement = this.currentPlacement, n.offset = this.offset, n.arrowOffset = this.arrowOffset, this.popperJS = new ht(s, d, n), this.popperJS.onCreate(function(p) {
      e.$emit("created", e), e.resetTransformOrigin(), e.$nextTick(e.updatePopper);
    }), typeof n.onUpdate == "function" && this.popperJS.onUpdate(n.onUpdate), this.popperJS._popper.style.zIndex = H.PopupManager.nextZIndex(), this.popperElm.addEventListener("click", W));
  }
}, updatePopper: function() {
  var e = this.popperJS;
  e ? (e.update(), e._popper && (e._popper.style.zIndex = H.PopupManager.nextZIndex())) : this.createPopper();
}, doDestroy: function(e) {
  !this.popperJS || this.showPopper && !e || (this.popperJS.destroy(), this.popperJS = null);
}, destroyPopper: function() {
  this.popperJS && this.resetTransformOrigin();
}, resetTransformOrigin: function() {
  if (this.transformOrigin) {
    var e = this.popperJS._popper.getAttribute("x-placement").split("-")[0], n = { top: "bottom", bottom: "top", left: "right", right: "left" }[e];
    this.popperJS._popper.style.transformOrigin = typeof this.transformOrigin == "string" ? this.transformOrigin : ["top", "bottom"].indexOf(e) > -1 ? "center " + n : n + " center";
  }
}, appendArrow: function(e) {
  var n = void 0;
  if (!this.appended) {
    for (var d in this.appended = !0, e.attributes)
      if (/^_v-/.test(e.attributes[d].name)) {
        n = e.attributes[d].name;
        break;
      }
    var s = document.createElement("div");
    n && s.setAttribute(n, ""), s.setAttribute("x-arrow", ""), s.className = "popper__arrow", e.appendChild(s);
  }
} }, beforeDestroy: function() {
  this.doDestroy(!0), this.popperElm && this.popperElm.parentNode === document.body && (this.popperElm.removeEventListener("click", W), document.body.removeChild(this.popperElm));
}, deactivated: function() {
  this.$options.beforeDestroy[0].call(this);
} }, V, q;
!(q = B) || q.__esModule, V = function() {
  return Math.floor(1e4 * Math.random());
};
var mt = { name: "infotoolTip", props: { transition: { type: String, default: "fade-in-linear" }, tooltipStyle: { type: Object, default: () => ({}) }, visibleArrow: { type: Boolean, default: !0 }, placement: { type: String, default: "left" }, popperOptions: { default: () => ({ boundariesPadding: 10, gpuAcceleration: !1 }) } }, mixins: [ut], data: () => ({ referenceElm: null, tooltipContent: "" }), computed: { ifShowContent() {
  return !!(Array.isArray(this.tooltipContent) && this.tooltipContent.length > 0);
}, tooltipId: () => `el-popover-${V()}` }, beforeCreate() {
}, mounted() {
  this.$nextTick(() => {
    this.popperElm = this.$refs.popper;
  });
}, methods: { handleMouseEnter() {
  this.popperJS && this.doDestroy(), this.showPopper = !0;
}, handleMouseLeave() {
  this.showPopper = !1;
} }, watch: {} };
function At(e, n, d, s, p, g, a, v, u, A) {
  typeof a != "boolean" && (u = v, v = a, a = !1);
  const b = typeof d == "function" ? d.options : d;
  let C;
  if (e && e.render && (b.render = e.render, b.staticRenderFns = e.staticRenderFns, b._compiled = !0, p && (b.functional = !0)), s && (b._scopeId = s), g ? (C = function(h) {
    (h = h || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || typeof __VUE_SSR_CONTEXT__ > "u" || (h = __VUE_SSR_CONTEXT__), n && n.call(this, u(h)), h && h._registeredComponents && h._registeredComponents.add(g);
  }, b._ssrRegister = C) : n && (C = a ? function(h) {
    n.call(this, A(h, this.$root.$options.shadowRoot));
  } : function(h) {
    n.call(this, v(h));
  }), C)
    if (b.functional) {
      const h = b.render;
      b.render = function(S, O) {
        return C.call(O), h(S, O);
      };
    } else {
      const h = b.beforeCreate;
      b.beforeCreate = h ? [].concat(h, C) : [C];
    }
  return d;
}
const bt = typeof navigator < "u" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function gt(e) {
  return (n, d) => function(s, p) {
    const g = bt ? p.media || "default" : s, a = F[g] || (F[g] = { ids: /* @__PURE__ */ new Set(), styles: [] });
    if (!a.ids.has(s)) {
      a.ids.add(s);
      let v = p.source;
      if (p.map && (v += `
/*# sourceURL=` + p.map.sources[0] + " */", v += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(p.map)))) + " */"), a.element || (a.element = document.createElement("style"), a.element.type = "text/css", p.media && a.element.setAttribute("media", p.media), L === void 0 && (L = document.head || document.getElementsByTagName("head")[0]), L.appendChild(a.element)), "styleSheet" in a.element)
        a.styles.push(v), a.element.styleSheet.cssText = a.styles.filter(Boolean).join(`
`);
      else {
        const u = a.ids.size - 1, A = document.createTextNode(v), b = a.element.childNodes;
        b[u] && a.element.removeChild(b[u]), b.length ? a.element.insertBefore(A, b[u]) : a.element.appendChild(A);
      }
    }
  }(n, d);
}
let L;
const F = {}, yt = mt;
var Y = function() {
  var e = this, n = e.$createElement, d = e._self._c || n;
  return d("transition", { attrs: { name: e.transition }, on: { "after-leave": e.doDestroy } }, [d("div", { directives: [{ name: "show", rawName: "v-show", value: e.showPopper, expression: "showPopper" }], ref: "popper", staticClass: "my-infotooltip-wrapper infotooltip-row-tip", class: { "infotooltip-row-tip-top-start": e.placement == "top-start", "infotooltip-row-tip-top": e.placement == "top", "infotooltip-row-tip-left": e.placement == "left", "infotooltip-row-tip-right": e.placement == "right", "infotooltip-row-tip-bottom": e.placement == "bottom", hidden: !e.ifShowContent }, style: e.tooltipStyle, attrs: { id: e.tooltipId } }, e._l(e.tooltipContent, function(s) {
    return d("p", { key: s, staticClass: "content" }, [e._v(e._s(s))]);
  }), 0)]);
};
Y._withStripped = !0;
var vt = At({ render: Y, staticRenderFns: [] }, function(e) {
  e && e("data-v-306a6902_0", { source: `.my-infotooltip-wrapper[data-v-306a6902] {
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
}, yt, "data-v-306a6902", !1, void 0, !1, gt, void 0, void 0);
const wt = B.extend(vt);
let P = null;
function _t() {
  return P || (P = new wt({ el: document.createElement("div") }), P);
}
function K(e) {
  e._tipHandler && e.removeEventListener("mouseenter", e._tipHandler), e._tipMouseleaveHandler && e.removeEventListener("mouseleave", e._tipMouseleaveHandler);
}
const xt = ["top-start", "top", "right", "bottom", "left"], Z = { bind(e, n) {
  K(e), e._tipInstance = _t(), e._binding = n, e._tipHandler = function(d) {
    let { value: s, modifiers: p, arg: g } = e._binding;
    d.stopPropagation();
    const a = e._tipInstance;
    let v = d.target;
    const u = xt.filter((b) => p[b]);
    a.placement = u.length ? u[0] : "top", g && (a.tooltipStyle.maxWidth = g + "px");
    const A = v.querySelector("input") || v;
    if (A.scrollWidth > A.offsetWidth && a && (!s || s && typeof s == "string"))
      a.tooltipContent = [(A.textContent || A.value || "").replace(/[' ']/g, "")], a.referenceElm = v, a.handleMouseEnter();
    else if (s)
      return a.tooltipContent = Array.isArray(s) ? s : [s], a.referenceElm = v, void a.handleMouseEnter();
  }, e._tipMouseleaveHandler = function(d) {
    d.stopPropagation(), e._tipInstance && e._tipInstance.handleMouseLeave();
  }, e.addEventListener("mouseenter", e._tipHandler), e.addEventListener("mouseleave", e._tipMouseleaveHandler);
}, inserted(e, n) {
  let { modifiers: d } = n;
  d && d.ellipsis && dt(e, "text-overflow");
}, update(e, n) {
  e._binding = n;
}, unbind(e) {
  const n = e._tipInstance;
  n.handleMouseLeave(), n && n.doDestroy && n.doDestroy(), K(e);
}, install(e) {
  e.directive("infotooltip", Z);
} };
var Ct = Z;
function Et(e, n, d, s, p, g, a, v) {
  var u = typeof e == "function" ? e.options : e;
  n && (u.render = n, u.staticRenderFns = d, u._compiled = !0), s && (u.functional = !0), g && (u._scopeId = "data-v-" + g);
  var A;
  if (a ? (A = function(h) {
    h = h || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !h && typeof __VUE_SSR_CONTEXT__ < "u" && (h = __VUE_SSR_CONTEXT__), p && p.call(this, h), h && h._registeredComponents && h._registeredComponents.add(a);
  }, u._ssrRegister = A) : p && (A = v ? function() {
    p.call(
      this,
      (u.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : p), A)
    if (u.functional) {
      u._injectStyles = A;
      var b = u.render;
      u.render = function(S, O) {
        return A.call(O), b(S, O);
      };
    } else {
      var C = u.beforeCreate;
      u.beforeCreate = C ? [].concat(C, A) : [A];
    }
  return {
    exports: e,
    options: u
  };
}
const St = {
  name: "my-table",
  directives: {
    infotooltip: Ct
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
      return M(et, this.$attrs);
    },
    selectionColumns() {
      return this.columns.some((e) => e.type === "selection");
    },
    newSelectedList() {
      return X(JSON.parse(JSON.stringify(this.selectedList)));
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
      rightImg: it,
      radio: "",
      newColumns: [],
      currentRow: null,
      selectionList: []
      // 多选的数据
    };
  },
  methods: {
    isFunction: tt,
    _noop() {
      st();
    },
    normalizeColumns(e) {
      return e.filter((n) => n.ifRender !== !1).map((n) => {
        if (n = M(ot, n), n.component) {
          let d = n.component;
          d.componentName = rt(d), d.attrs = R(d), d.itemAttrs = R(d, "itemAttrs"), d.on = R(n.component, "on");
        }
        return n;
      });
    },
    onRowClick(e) {
      this.radioKey && (this.radio = e[this.radioKey]), this.selectionColumns && e.selectable && this.$refs.commonTable.toggleRowSelection(e), this.currentRow = e, console.log(this.currentRow, "currentRow");
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
    onSelectChange(e) {
      this.selectionList = e;
    },
    checkSelectable(e) {
      return e.selectable = this.newSelectedList.length ? this.newSelectedList.every(
        (n) => n[this.selectedKey] !== e[this.selectedKey]
      ) : !0, e.selectable;
    }
  },
  created() {
  },
  mounted() {
    setTimeout(() => {
      Object.keys(this.$refs.commonTable.$options.methods).forEach(
        (e) => {
          e in this || (this[e] = this.$refs.commonTable[e]);
        }
      );
    }, 20);
  }
};
var Ot = function() {
  var n = this, d = n._self._c;
  return d("el-table", n._g(n._b({ directives: [{ name: "loading", rawName: "v-loading", value: n.loading, expression: "loading" }], ref: "commonTable", staticClass: "my-table-wrapper", attrs: { data: n.data }, on: { "row-click": n.onRowClick, "selection-change": n.onSelectChange } }, "el-table", n.attrs, !1), n.$listeners), [n._l(n.newColumns, function(s) {
    return [s.type === "selection" ? d("el-table-column", n._b({ key: s.prop, attrs: { type: "selection", selectable: n.checkSelectable } }, "el-table-column", s, !1)) : s.type === "index" ? d("el-table-column", n._b({ key: s.prop, attrs: { type: "index" } }, "el-table-column", s, !1)) : s.type === "expand" ? d("el-table-column", n._b({ key: s.prop, attrs: { type: "expand" }, scopedSlots: n._u([{ key: "default", fn: function(p) {
      return [n._t("expand", null, { row: p.row, index: p.$index })];
    } }], null, !0) }, "el-table-column", s, !1)) : d("el-table-column", n._b({ key: s.prop, scopedSlots: n._u([{ key: "header", fn: function(p) {
      return [s.isCustomizeHeader ? [n._t(s.headerName || `${s.prop}_header`, null, { row: p.row, label: s.label })] : [n._v(" " + n._s(s.label) + " ")]];
    } }, { key: "default", fn: function(p) {
      return [s.type === "link" ? d("div", { staticClass: "link-container text-overflow", staticStyle: { width: "100%" } }, [d("img", { staticClass: "pointer", attrs: { src: n.rightImg }, on: { click: function(g) {
        n.isFunction(s.handleClick) ? s.handleClick({
          ...p.row,
          ...s.options || {}
        }) : n._noop;
      } } }), d("span", [n._v(n._s(p.row[s.prop]))])]) : s.type === "radio" ? [d("el-radio", { staticClass: "radio", attrs: { label: p.row[n.radioKey] }, model: { value: n.radio, callback: function(g) {
        n.radio = g;
      }, expression: "radio" } }, [n._v(n._s())])] : s.slotName ? [n._t(s.slotName || "default", null, { index: p.$index, row: p.row, prop: s.prop })] : s.component ? [d("el-form-item", n._b({ attrs: { prop: n.dataKey + "." + p.$index + "." + s.prop } }, "el-form-item", s.component.itemAttrs, !1), [d(s.component.componentName, n._g(n._b({ directives: [{ name: "infotooltip", rawName: "v-infotooltip:200", arg: "200" }], tag: "component", model: { value: p.row[s.prop || s.component.attrs.prop], callback: function(g) {
        n.$set(p.row, s.prop || s.component.attrs.prop, g);
      }, expression: "scope.row[column.prop || column.component.attrs.prop]" } }, "component", s.component.attrs, !1), s.component.on))], 1)] : [n._v(" " + n._s(p.row[s.prop]) + " ")]];
    } }], null, !0) }, "el-table-column", s, !1))];
  })], 2);
}, kt = [], $t = /* @__PURE__ */ Et(
  St,
  Ot,
  kt,
  !1,
  null,
  "2cb5586a",
  null,
  null
);
const D = $t.exports;
D.install = (e) => {
  e.component(D.name, D);
};
export {
  D as default
};
