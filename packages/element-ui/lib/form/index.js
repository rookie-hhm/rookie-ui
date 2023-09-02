"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const tt=require("lodash-es"),P=require("vue"),et={size:"mini","show-message":!1},ot={size:"mini","show-message":!1};function nt(e){let n=e,a=[],f=0;for(let s=0;s<n.length;s++)a[f]||(a[f]=[]),a[f].push(n[s]),n[s].isEnd&&f++;return a}let rt={text:{component:"el-input",attrs:{style:{width:"100%"},size:"mini",clearable:!0}},button:{component:"el-button",attrs:{style:{width:"100%"},size:"mini"}},number:{component:"el-input-number",attrs:{style:{width:"100%"},size:"mini",clearable:!0,controls:!1}},select:{component:"my-select",attrs:{style:{width:"100%"},size:"mini",clearable:!0,placeholder:""}},date:{component:"el-date-picker",attrs:{style:{width:"100%"},clearable:!1,type:"date",size:"mini","value-format":"yyyy-MM-dd"}},tree:{component:"el-cascader",attrs:{props:{value:"id",label:"name",children:"childTypes",expandTrigger:"hover",emitPath:!1},clearable:!0,size:"mini"}},area:{component:"my-new-area-selector",attrs:{style:{width:"100%"},size:"mini",readonly:!0,clearable:!1}},"s-input":{component:"search-input",attrs:{style:{width:"100%"},size:"mini",clearable:!0}},"s-upload":{component:"search-upload",attrs:{style:{display:"inline-block"},size:"mini",name:"files"}},"s-button":{component:"search-button",attrs:{size:"mini"}}};const X=rt;function R(e={},n={}){return Object.assign({},e,n)}function it(e,n=!1){return e.tag=e.tag?e.tag:n?"s-input":"text",X[e.tag].component}function q(e,n="attrs"){let a=X[e.tag];return e[n]&&e[n].style&&(e[n].style=R(a[n].style||{},e[n].style)),R(a[n]||{},e[n]||{})}function Y(e,n,a,f,s,m,p,v){var h=typeof e=="function"?e.options:e;n&&(h.render=n,h.staticRenderFns=a,h._compiled=!0),f&&(h.functional=!0),m&&(h._scopeId="data-v-"+m);var b;if(p?(b=function(u){u=u||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!u&&typeof __VUE_SSR_CONTEXT__<"u"&&(u=__VUE_SSR_CONTEXT__),s&&s.call(this,u),u&&u._registeredComponents&&u._registeredComponents.add(p)},h._ssrRegister=b):s&&(b=v?function(){s.call(this,(h.functional?this.parent:this).$root.$options.shadowRoot)}:s),b)if(h.functional){h._injectStyles=b;var g=h.render;h.render=function(O,S){return b.call(S),g(O,S)}}else{var C=h.beforeCreate;h.beforeCreate=C?[].concat(C,b):[b]}return{exports:e,options:h}}const st={name:"my-select",props:{value:{default:""}},methods:{onInput(e){this.$emit("input",e)}},created(){},mounted(){}};var pt=function(){var n=this,a=n._self._c;return a("el-select",n._g(n._b({staticClass:"my-select-wrapper",attrs:{value:n.value}},"el-select",n.$attrs,!1),n.$listeners),n._l(n.$attrs.options,function(f){return a("el-option",{key:f.value,attrs:{label:f.label,value:f.value}})}),1)},at=[],lt=Y(st,pt,at,!1,null,"ddea6cde",null,null);const T=lt.exports;T.install=e=>{e.component(T.name,T)};var I={},ft={get exports(){return I},set exports(e){I=e}},W;function dt(){return W||(W=1,e=ft,f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},n=void 0,a=function(){var s=window,m={placement:"bottom",gpuAcceleration:!0,offset:0,boundariesElement:"viewport",boundariesPadding:5,preventOverflowOrder:["left","right","top","bottom"],flipBehavior:"flip",arrowElement:"[x-arrow]",arrowOffset:0,modifiers:["shift","offset","preventOverflow","keepTogether","arrow","flip","applyStyle"],modifiersIgnored:[],forceAbsolute:!1};function p(t,o,r){this._reference=t.jquery?t[0]:t,this.state={};var i=o==null,d=o&&Object.prototype.toString.call(o)==="[object Object]";return this._popper=i||d?this.parse(d?o:{}):o.jquery?o[0]:o,this._options=Object.assign({},m,r),this._options.modifiers=this._options.modifiers.map(function(l){if(this._options.modifiersIgnored.indexOf(l)===-1)return l==="applyStyle"&&this._popper.setAttribute("x-placement",this._options.placement),this.modifiers[l]||l}.bind(this)),this.state.position=this._getPosition(this._popper,this._reference),B(this._popper,{position:this.state.position,top:0}),this.update(),this._setupEventListeners(),this}function v(t){var o=t.style.display,r=t.style.visibility;t.style.display="block",t.style.visibility="hidden",t.offsetWidth;var i=s.getComputedStyle(t),d=parseFloat(i.marginTop)+parseFloat(i.marginBottom),l=parseFloat(i.marginLeft)+parseFloat(i.marginRight),c={width:t.offsetWidth+l,height:t.offsetHeight+d};return t.style.display=o,t.style.visibility=r,c}function h(t){var o={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(r){return o[r]})}function b(t){var o=Object.assign({},t);return o.right=o.left+o.width,o.bottom=o.top+o.height,o}function g(t,o){var r,i=0;for(r in t){if(t[r]===o)return i;i++}return null}function C(t,o){return s.getComputedStyle(t,null)[o]}function u(t){var o=t.offsetParent;return o!==s.document.body&&o?o:s.document.documentElement}function O(t){var o=t.parentNode;return o?o===s.document?s.document.body.scrollTop||s.document.body.scrollLeft?s.document.body:s.document.documentElement:["scroll","auto"].indexOf(C(o,"overflow"))!==-1||["scroll","auto"].indexOf(C(o,"overflow-x"))!==-1||["scroll","auto"].indexOf(C(o,"overflow-y"))!==-1?o:O(t.parentNode):t}function S(t){return t!==s.document.body&&(C(t,"position")==="fixed"||(t.parentNode?S(t.parentNode):t))}function B(t,o){Object.keys(o).forEach(function(r){var i,d="";["width","height","top","right","bottom","left"].indexOf(r)!==-1&&(i=o[r])!==""&&!isNaN(parseFloat(i))&&isFinite(i)&&(d="px"),t.style[r]=o[r]+d})}function G(t){var o={width:t.offsetWidth,height:t.offsetHeight,left:t.offsetLeft,top:t.offsetTop};return o.right=o.left+o.width,o.bottom=o.top+o.height,o}function z(t){var o=t.getBoundingClientRect(),r=navigator.userAgent.indexOf("MSIE")!=-1&&t.tagName==="HTML"?-t.scrollTop:o.top;return{left:o.left,top:r,right:o.right,bottom:o.bottom,width:o.right-o.left,height:o.bottom-r}}function D(t){for(var o=["","ms","webkit","moz","o"],r=0;r<o.length;r++){var i=o[r]?o[r]+t.charAt(0).toUpperCase()+t.slice(1):t;if(s.document.body.style[i]!==void 0)return i}return null}return p.prototype.destroy=function(){return this._popper.removeAttribute("x-placement"),this._popper.style.left="",this._popper.style.position="",this._popper.style.top="",this._popper.style[D("transform")]="",this._removeEventListeners(),this._options.removeOnDestroy&&this._popper.remove(),this},p.prototype.update=function(){var t={instance:this,styles:{}};t.placement=this._options.placement,t._originalPlacement=this._options.placement,t.offsets=this._getOffsets(this._popper,this._reference,t.placement),t.boundaries=this._getBoundaries(t,this._options.boundariesPadding,this._options.boundariesElement),t=this.runModifiers(t,this._options.modifiers),typeof this.state.updateCallback=="function"&&this.state.updateCallback(t)},p.prototype.onCreate=function(t){return t(this),this},p.prototype.onUpdate=function(t){return this.state.updateCallback=t,this},p.prototype.parse=function(t){var o={tagName:"div",classNames:["popper"],attributes:[],parent:s.document.body,content:"",contentType:"text",arrowTagName:"div",arrowClassNames:["popper__arrow"],arrowAttributes:["x-arrow"]};t=Object.assign({},o,t);var r=s.document,i=r.createElement(t.tagName);if(c(i,t.classNames),A(i,t.attributes),t.contentType==="node"?i.appendChild(t.content.jquery?t.content[0]:t.content):t.contentType==="html"?i.innerHTML=t.content:i.textContent=t.content,t.arrowTagName){var d=r.createElement(t.arrowTagName);c(d,t.arrowClassNames),A(d,t.arrowAttributes),i.appendChild(d)}var l=t.parent.jquery?t.parent[0]:t.parent;if(typeof l=="string"){if((l=r.querySelectorAll(t.parent)).length>1&&console.warn("WARNING: the given `parent` query("+t.parent+") matched more than one element, the first one will be used"),l.length===0)throw"ERROR: the given `parent` doesn't exists!";l=l[0]}return l.length>1&&l instanceof Element==0&&(console.warn("WARNING: you have passed as parent a list of elements, the first one will be used"),l=l[0]),l.appendChild(i),i;function c(w,_){_.forEach(function(y){w.classList.add(y)})}function A(w,_){_.forEach(function(y){w.setAttribute(y.split(":")[0],y.split(":")[1]||"")})}},p.prototype._getPosition=function(t,o){return u(o),this._options.forceAbsolute?"absolute":S(o)?"fixed":"absolute"},p.prototype._getOffsets=function(t,o,r){r=r.split("-")[0];var i={};i.position=this.state.position;var d=i.position==="fixed",l=function(A,w,_){var y=z(A),x=z(w);if(_){var E=O(w);x.top+=E.scrollTop,x.bottom+=E.scrollTop,x.left+=E.scrollLeft,x.right+=E.scrollLeft}return{top:y.top-x.top,left:y.left-x.left,bottom:y.top-x.top+y.height,right:y.left-x.left+y.width,width:y.width,height:y.height}}(o,u(t),d),c=v(t);return["right","left"].indexOf(r)!==-1?(i.top=l.top+l.height/2-c.height/2,i.left=r==="left"?l.left-c.width:l.right):(i.left=l.left+l.width/2-c.width/2,i.top=r==="top"?l.top-c.height:l.bottom),i.width=c.width,i.height=c.height,{popper:i,reference:l}},p.prototype._setupEventListeners=function(){if(this.state.updateBound=this.update.bind(this),s.addEventListener("resize",this.state.updateBound),this._options.boundariesElement!=="window"){var t=O(this._reference);t!==s.document.body&&t!==s.document.documentElement||(t=s),t.addEventListener("scroll",this.state.updateBound),this.state.scrollTarget=t}},p.prototype._removeEventListeners=function(){s.removeEventListener("resize",this.state.updateBound),this._options.boundariesElement!=="window"&&this.state.scrollTarget&&(this.state.scrollTarget.removeEventListener("scroll",this.state.updateBound),this.state.scrollTarget=null),this.state.updateBound=null},p.prototype._getBoundaries=function(t,o,r){var i,d,l={};if(r==="window"){var c=s.document.body,A=s.document.documentElement;i=Math.max(c.scrollHeight,c.offsetHeight,A.clientHeight,A.scrollHeight,A.offsetHeight),l={top:0,right:Math.max(c.scrollWidth,c.offsetWidth,A.clientWidth,A.scrollWidth,A.offsetWidth),bottom:i,left:0}}else if(r==="viewport"){var w=u(this._popper),_=O(this._popper),y=G(w),x=t.offsets.popper.position==="fixed"?0:(d=_)==document.body?Math.max(document.documentElement.scrollTop,document.body.scrollTop):d.scrollTop,E=t.offsets.popper.position==="fixed"?0:function($){return $==document.body?Math.max(document.documentElement.scrollLeft,document.body.scrollLeft):$.scrollLeft}(_);l={top:0-(y.top-x),right:s.document.documentElement.clientWidth-(y.left-E),bottom:s.document.documentElement.clientHeight-(y.top-x),left:0-(y.left-E)}}else l=u(this._popper)===r?{top:0,left:0,right:r.clientWidth,bottom:r.clientHeight}:G(r);return l.left+=o,l.right-=o,l.top=l.top+o,l.bottom=l.bottom-o,l},p.prototype.runModifiers=function(t,o,r){var i=o.slice();return r!==void 0&&(i=this._options.modifiers.slice(0,g(this._options.modifiers,r))),i.forEach(function(d){var l,c;c={},(l=d)&&c.toString.call(l)==="[object Function]"&&(t=d.call(this,t))}.bind(this)),t},p.prototype.isModifierRequired=function(t,o){var r=g(this._options.modifiers,t);return!!this._options.modifiers.slice(0,r).filter(function(i){return i===o}).length},p.prototype.modifiers={},p.prototype.modifiers.applyStyle=function(t){var o,r={position:t.offsets.popper.position},i=Math.round(t.offsets.popper.left),d=Math.round(t.offsets.popper.top);return this._options.gpuAcceleration&&(o=D("transform"))?(r[o]="translate3d("+i+"px, "+d+"px, 0)",r.top=0,r.left=0):(r.left=i,r.top=d),Object.assign(r,t.styles),B(this._popper,r),this._popper.setAttribute("x-placement",t.placement),this.isModifierRequired(this.modifiers.applyStyle,this.modifiers.arrow)&&t.offsets.arrow&&B(t.arrowElement,t.offsets.arrow),t},p.prototype.modifiers.shift=function(t){var o=t.placement,r=o.split("-")[0],i=o.split("-")[1];if(i){var d=t.offsets.reference,l=b(t.offsets.popper),c={y:{start:{top:d.top},end:{top:d.top+d.height-l.height}},x:{start:{left:d.left},end:{left:d.left+d.width-l.width}}},A=["bottom","top"].indexOf(r)!==-1?"x":"y";t.offsets.popper=Object.assign(l,c[A][i])}return t},p.prototype.modifiers.preventOverflow=function(t){var o=this._options.preventOverflowOrder,r=b(t.offsets.popper),i={left:function(){var d=r.left;return r.left<t.boundaries.left&&(d=Math.max(r.left,t.boundaries.left)),{left:d}},right:function(){var d=r.left;return r.right>t.boundaries.right&&(d=Math.min(r.left,t.boundaries.right-r.width)),{left:d}},top:function(){var d=r.top;return r.top<t.boundaries.top&&(d=Math.max(r.top,t.boundaries.top)),{top:d}},bottom:function(){var d=r.top;return r.bottom>t.boundaries.bottom&&(d=Math.min(r.top,t.boundaries.bottom-r.height)),{top:d}}};return o.forEach(function(d){t.offsets.popper=Object.assign(r,i[d]())}),t},p.prototype.modifiers.keepTogether=function(t){var o=b(t.offsets.popper),r=t.offsets.reference,i=Math.floor;return o.right<i(r.left)&&(t.offsets.popper.left=i(r.left)-o.width),o.left>i(r.right)&&(t.offsets.popper.left=i(r.right)),o.bottom<i(r.top)&&(t.offsets.popper.top=i(r.top)-o.height),o.top>i(r.bottom)&&(t.offsets.popper.top=i(r.bottom)),t},p.prototype.modifiers.flip=function(t){if(!this.isModifierRequired(this.modifiers.flip,this.modifiers.preventOverflow))return console.warn("WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!"),t;if(t.flipped&&t.placement===t._originalPlacement)return t;var o=t.placement.split("-")[0],r=h(o),i=t.placement.split("-")[1]||"",d=[];return(d=this._options.flipBehavior==="flip"?[o,r]:this._options.flipBehavior).forEach(function(l,c){if(o===l&&d.length!==c+1){o=t.placement.split("-")[0],r=h(o);var A=b(t.offsets.popper),w=["right","bottom"].indexOf(o)!==-1;(w&&Math.floor(t.offsets.reference[o])>Math.floor(A[r])||!w&&Math.floor(t.offsets.reference[o])<Math.floor(A[r]))&&(t.flipped=!0,t.placement=d[c+1],i&&(t.placement+="-"+i),t.offsets.popper=this._getOffsets(this._popper,this._reference,t.placement).popper,t=this.runModifiers(t,this._options.modifiers,this._flip))}}.bind(this)),t},p.prototype.modifiers.offset=function(t){var o=this._options.offset,r=t.offsets.popper;return t.placement.indexOf("left")!==-1?r.top-=o:t.placement.indexOf("right")!==-1?r.top+=o:t.placement.indexOf("top")!==-1?r.left-=o:t.placement.indexOf("bottom")!==-1&&(r.left+=o),t},p.prototype.modifiers.arrow=function(t){var o=this._options.arrowElement,r=this._options.arrowOffset;if(typeof o=="string"&&(o=this._popper.querySelector(o)),!o)return t;if(!this._popper.contains(o))return console.warn("WARNING: `arrowElement` must be child of its popper element!"),t;if(!this.isModifierRequired(this.modifiers.arrow,this.modifiers.keepTogether))return console.warn("WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!"),t;var i={},d=t.placement.split("-")[0],l=b(t.offsets.popper),c=t.offsets.reference,A=["left","right"].indexOf(d)!==-1,w=A?"height":"width",_=A?"top":"left",y=A?"left":"top",x=A?"bottom":"right",E=v(o)[w];c[x]-E<l[_]&&(t.offsets.popper[_]-=l[_]-(c[x]-E)),c[_]+E>l[x]&&(t.offsets.popper[_]+=c[_]+E-l[x]);var $=c[_]+(r||c[w]/2-E/2)-l[_];return $=Math.max(Math.min(l[w]-E-8,$),8),i[_]=$,i[y]="",t.offsets.arrow=i,t.arrowElement=o,t},Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(t){if(t==null)throw new TypeError("Cannot convert first argument to object");for(var o=Object(t),r=1;r<arguments.length;r++){var i=arguments[r];if(i!=null){i=Object(i);for(var d=Object.keys(i),l=0,c=d.length;l<c;l++){var A=d[l],w=Object.getOwnPropertyDescriptor(i,A);w!==void 0&&w.enumerable&&(o[A]=i[A])}}}return o}}),p},f(e)==="object"&&e.exports?e.exports=a():n.Popper=a()),I;var e,n,a,f}var ct={},M,ut=function(e,n){if(e){for(var a=e.className,f=(n||"").split(" "),s=0,m=f.length;s<m;s++){var p=f[s];p&&(e.classList?e.classList.add(p):mt(e,p)||(a+=" "+p))}e.classList||e.setAttribute("class",a)}};((M=P)&&M.__esModule?M:{default:M}).default.prototype.$isServer;function mt(e,n){if(!e||!n)return!1;if(n.indexOf(" ")!==-1)throw new Error("className should not contain space.");return e.classList?e.classList.contains(n):(" "+e.className+" ").indexOf(" "+n+" ")>-1}var k,ht=(k=P)&&k.__esModule?k:{default:k},F=ct,At=ht.default.prototype.$isServer?function(){}:dt(),U=function(e){return e.stopPropagation()},bt={props:{transformOrigin:{type:[Boolean,String],default:!0},placement:{type:String,default:"bottom"},boundariesPadding:{type:Number,default:5},reference:{},popper:{},offset:{default:0},value:Boolean,visibleArrow:Boolean,arrowOffset:{type:Number,default:35},appendToBody:{type:Boolean,default:!0},popperOptions:{type:Object,default:function(){return{gpuAcceleration:!1}}}},data:function(){return{showPopper:!1,currentPlacement:""}},watch:{value:{immediate:!0,handler:function(e){this.showPopper=e,this.$emit("input",e)}},showPopper:function(e){this.disabled||(e?this.updatePopper():this.destroyPopper(),this.$emit("input",e))}},methods:{createPopper:function(){var e=this;if(!this.$isServer&&(this.currentPlacement=this.currentPlacement||this.placement,/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement))){var n=this.popperOptions,a=this.popperElm=this.popperElm||this.popper||this.$refs.popper,f=this.referenceElm=this.referenceElm||this.reference||this.$refs.reference;!f&&this.$slots.reference&&this.$slots.reference[0]&&(f=this.referenceElm=this.$slots.reference[0].elm),a&&f&&(this.visibleArrow&&this.appendArrow(a),this.appendToBody&&document.body.appendChild(this.popperElm),this.popperJS&&this.popperJS.destroy&&this.popperJS.destroy(),n.placement=this.currentPlacement,n.offset=this.offset,n.arrowOffset=this.arrowOffset,this.popperJS=new At(f,a,n),this.popperJS.onCreate(function(s){e.$emit("created",e),e.resetTransformOrigin(),e.$nextTick(e.updatePopper)}),typeof n.onUpdate=="function"&&this.popperJS.onUpdate(n.onUpdate),this.popperJS._popper.style.zIndex=F.PopupManager.nextZIndex(),this.popperElm.addEventListener("click",U))}},updatePopper:function(){var e=this.popperJS;e?(e.update(),e._popper&&(e._popper.style.zIndex=F.PopupManager.nextZIndex())):this.createPopper()},doDestroy:function(e){!this.popperJS||this.showPopper&&!e||(this.popperJS.destroy(),this.popperJS=null)},destroyPopper:function(){this.popperJS&&this.resetTransformOrigin()},resetTransformOrigin:function(){if(this.transformOrigin){var e=this.popperJS._popper.getAttribute("x-placement").split("-")[0],n={top:"bottom",bottom:"top",left:"right",right:"left"}[e];this.popperJS._popper.style.transformOrigin=typeof this.transformOrigin=="string"?this.transformOrigin:["top","bottom"].indexOf(e)>-1?"center "+n:n+" center"}},appendArrow:function(e){var n=void 0;if(!this.appended){for(var a in this.appended=!0,e.attributes)if(/^_v-/.test(e.attributes[a].name)){n=e.attributes[a].name;break}var f=document.createElement("div");n&&f.setAttribute(n,""),f.setAttribute("x-arrow",""),f.className="popper__arrow",e.appendChild(f)}}},beforeDestroy:function(){this.doDestroy(!0),this.popperElm&&this.popperElm.parentNode===document.body&&(this.popperElm.removeEventListener("click",U),document.body.removeChild(this.popperElm))},deactivated:function(){this.$options.beforeDestroy[0].call(this)}},Z,H;!(H=P)||H.__esModule,Z=function(){return Math.floor(1e4*Math.random())};var gt={name:"infotoolTip",props:{transition:{type:String,default:"fade-in-linear"},tooltipStyle:{type:Object,default:()=>({})},visibleArrow:{type:Boolean,default:!0},placement:{type:String,default:"left"},popperOptions:{default:()=>({boundariesPadding:10,gpuAcceleration:!1})}},mixins:[bt],data:()=>({referenceElm:null,tooltipContent:""}),computed:{ifShowContent(){return!!(Array.isArray(this.tooltipContent)&&this.tooltipContent.length>0)},tooltipId:()=>`el-popover-${Z()}`},beforeCreate(){},mounted(){this.$nextTick(()=>{this.popperElm=this.$refs.popper})},methods:{handleMouseEnter(){this.popperJS&&this.doDestroy(),this.showPopper=!0},handleMouseLeave(){this.showPopper=!1}},watch:{}};function vt(e,n,a,f,s,m,p,v,h,b){typeof p!="boolean"&&(h=v,v=p,p=!1);const g=typeof a=="function"?a.options:a;let C;if(e&&e.render&&(g.render=e.render,g.staticRenderFns=e.staticRenderFns,g._compiled=!0,s&&(g.functional=!0)),f&&(g._scopeId=f),m?(C=function(u){(u=u||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||typeof __VUE_SSR_CONTEXT__>"u"||(u=__VUE_SSR_CONTEXT__),n&&n.call(this,h(u)),u&&u._registeredComponents&&u._registeredComponents.add(m)},g._ssrRegister=C):n&&(C=p?function(u){n.call(this,b(u,this.$root.$options.shadowRoot))}:function(u){n.call(this,v(u))}),C)if(g.functional){const u=g.render;g.render=function(O,S){return C.call(S),u(O,S)}}else{const u=g.beforeCreate;g.beforeCreate=u?[].concat(u,C):[C]}return a}const yt=typeof navigator<"u"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function wt(e){return(n,a)=>function(f,s){const m=yt?s.media||"default":f,p=J[m]||(J[m]={ids:new Set,styles:[]});if(!p.ids.has(f)){p.ids.add(f);let v=s.source;if(s.map&&(v+=`
/*# sourceURL=`+s.map.sources[0]+" */",v+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(s.map))))+" */"),p.element||(p.element=document.createElement("style"),p.element.type="text/css",s.media&&p.element.setAttribute("media",s.media),L===void 0&&(L=document.head||document.getElementsByTagName("head")[0]),L.appendChild(p.element)),"styleSheet"in p.element)p.styles.push(v),p.element.styleSheet.cssText=p.styles.filter(Boolean).join(`
`);else{const h=p.ids.size-1,b=document.createTextNode(v),g=p.element.childNodes;g[h]&&p.element.removeChild(g[h]),g.length?p.element.insertBefore(b,g[h]):p.element.appendChild(b)}}}(n,a)}let L;const J={},_t=gt;var Q=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("transition",{attrs:{name:e.transition},on:{"after-leave":e.doDestroy}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showPopper,expression:"showPopper"}],ref:"popper",staticClass:"my-infotooltip-wrapper infotooltip-row-tip",class:{"infotooltip-row-tip-top-start":e.placement=="top-start","infotooltip-row-tip-top":e.placement=="top","infotooltip-row-tip-left":e.placement=="left","infotooltip-row-tip-right":e.placement=="right","infotooltip-row-tip-bottom":e.placement=="bottom",hidden:!e.ifShowContent},style:e.tooltipStyle,attrs:{id:e.tooltipId}},e._l(e.tooltipContent,function(f){return a("p",{key:f,staticClass:"content"},[e._v(e._s(f))])}),0)])};Q._withStripped=!0;var xt=vt({render:Q,staticRenderFns:[]},function(e){e&&e("data-v-306a6902_0",{source:`.my-infotooltip-wrapper[data-v-306a6902] {
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

/*# sourceMappingURL=main.vue.map */`,map:{version:3,sources:["/Users/rookie/Desktop/classes/component-library/packages/directive/src/info-tooltip/src/main.vue","main.vue"],names:[],mappings:"AAsGA;EACA,WAAA;ACrGA;ADuGA;EACA,eAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,wBAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;EACA,WAAA;EACA,kBAAA;ACpGA;ADqGA;EACA,yBAAA;EACA,qBAAA;EACA,qBAAA;ACnGA;ADqGA;EACA,UAAA;ACnGA;ADuGA;EACA,WAAA;EACA,cAAA;EACA,QAAA;EACA,SAAA;EACA,kBAAA;ACpGA;ADuGA;EACA,2CAAA;UAAA,mCAAA;ACpGA;ADqGA;EACA,kCAAA;EACA,mCAAA;EACA,6BAAA;EACA,YAAA;ACnGA;ADuGA;EACA,2CAAA;UAAA,mCAAA;ACpGA;ADqGA;EACA,SAAA;EACA,kCAAA;EACA,mCAAA;EACA,6BAAA;EACA,YAAA;EACA,0CAAA;UAAA,kCAAA;ACnGA;ADuGA;EACA,iCAAA;EACA,oCAAA;EACA,8BAAA;EACA,WAAA;ACpGA;ADuGA;EACA,iCAAA;EACA,oCAAA;EACA,+BAAA;EACA,UAAA;ACpGA;ADuGA;EACA,kCAAA;EACA,mCAAA;EACA,gCAAA;EACA,SAAA;ACpGA;;AAEA,mCAAmC",file:"main.vue",sourcesContent:[`<template>
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
`,`.my-infotooltip-wrapper {
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

/*# sourceMappingURL=main.vue.map */`]},media:void 0})},_t,"data-v-306a6902",!1,void 0,!1,wt,void 0,void 0);const Ct=P.extend(xt);let j=null;function Et(){return j||(j=new Ct({el:document.createElement("div")}),j)}function V(e){e._tipHandler&&e.removeEventListener("mouseenter",e._tipHandler),e._tipMouseleaveHandler&&e.removeEventListener("mouseleave",e._tipMouseleaveHandler)}const Ot=["top-start","top","right","bottom","left"],K={bind(e,n){V(e),e._tipInstance=Et(),e._binding=n,e._tipHandler=function(a){let{value:f,modifiers:s,arg:m}=e._binding;a.stopPropagation();const p=e._tipInstance;let v=a.target;const h=Ot.filter(g=>s[g]);p.placement=h.length?h[0]:"top",m&&(p.tooltipStyle.maxWidth=m+"px");const b=v.querySelector("input")||v;if(b.scrollWidth>b.offsetWidth&&p&&(!f||f&&typeof f=="string"))p.tooltipContent=[(b.textContent||b.value||"").replace(/[' ']/g,"")],p.referenceElm=v,p.handleMouseEnter();else if(f)return p.tooltipContent=Array.isArray(f)?f:[f],p.referenceElm=v,void p.handleMouseEnter()},e._tipMouseleaveHandler=function(a){a.stopPropagation(),e._tipInstance&&e._tipInstance.handleMouseLeave()},e.addEventListener("mouseenter",e._tipHandler),e.addEventListener("mouseleave",e._tipMouseleaveHandler)},inserted(e,n){let{modifiers:a}=n;a&&a.ellipsis&&ut(e,"text-overflow")},update(e,n){e._binding=n},unbind(e){const n=e._tipInstance;n.handleMouseLeave(),n&&n.doDestroy&&n.doDestroy(),V(e)},install(e){e.directive("infotooltip",K)}};var St=K;const $t={name:"my-form",components:{MySelect:T},directives:{infotooltip:St},props:{model:{type:Object,default(){return{}}},formItems:{type:Array,default(){return[]}},columnNumber:{type:Number,default:1},isCustomerEnd:{type:Boolean},rowStyle:{type:Function,default(){}},cellStyle:{type:Function,default(){}}},watch:{model:{immediate:!0,handler(e){console.log(this.model,"model"),this.form=e}},form:{deep:!0,immediate:!0,handler(e){console.log(this.form,"form"),this.$emit("change",e)}}},computed:{attrs(){return Object.assign({},et,this.$attrs)},formInputs(){return this.normalizeFormItems()}},data(){return{form:{}}},methods:{normalizeFormItems(){let e=[],n=-1,a=this.formItems.filter(f=>this.isRender(f.isRender));if(this.isCustomerEnd)a=a.map(f=>this.createComputedInput(f)),e=nt(a);else for(let f=0;f<a.length;f++){let s=a[f];f%this.columnNumber===0&&(e[++n]=[]),e[n].push(this.createComputedInput(s))}return console.log(e,"result"),e},createComputedInput(e){let n={...e};return n.tag&&(n.componentName=it(n),n.attrs=q(n),n.itemAttrs=R(ot,n.itemAttrs),n.on=q(n,"on")),n},isRender(e){return typeof e<"u"?tt.isFunction(e)?e(this.model):e:!0},clearValidate(){this.$refs.form.clearValidate()}},created(){},mounted(){setTimeout(()=>{Object.keys(this.$refs.form.$options.methods).forEach(e=>{e in this||(this[e]=this.$refs.form[e])})},20)}};var Mt=function(){var n=this,a=n._self._c;return a("div",{staticClass:"form-wrapper"},[a("el-form",n._g(n._b({ref:"form",attrs:{model:n.model}},"el-form",n.attrs,!1),n.$listeners),[n._l(n.formInputs,function(f,s){return[a("el-row",{key:s,style:n.rowStyle({row:f,rowIndex:s}),attrs:{type:"flex"}},n._l(f,function(m,p){return a("el-col",{key:`${s}_${p}`,style:n.cellStyle({col:m,colIndex:p,rowIndex:s}),attrs:{span:m.span||24}},[m.slotName?n._t(m.slotName,null,{model:n.model,rowIndex:s,colIndex:p,item:m}):a("el-form-item",n._b({},"el-form-item",m.itemAttrs,!1),[a(m.componentName,n._g(n._b({directives:[{name:"infotooltip",rawName:"v-infotooltip:200",arg:"200"}],tag:"component",model:{value:n.model[m.attrs.prop],callback:function(v){n.$set(n.model,m.attrs.prop,v)},expression:"model[item.attrs.prop]"}},"component",m.attrs,!1),m.on))],1)],2)}),1)]})],2)],1)},kt=[],Tt=Y($t,Mt,kt,!1,null,"6bf2e565",null,null);const N=Tt.exports;N.install=e=>{e.component(N.name,N)};exports.default=N;
