(window.webpackJsonp=window.webpackJsonp||[]).push([[77,96,120],{"0HwX":function(t,e,n){var o=n("kBaS"),i=n("zJT+"),r=n("T/1i"),s=n("HbTz"),a=n("qA3Z"),u=n("UTwT"),c=Object.getOwnPropertyDescriptor;e.f=n("lBnu")?c:function(t,e){if(t=r(t),e=s(e,!0),u)try{return c(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},"4Xtu":function(t,e,n){n("YlUf")("asyncIterator")},"9iYM":function(t,e,n){"use strict";n.r(e);var o={name:"CommonLink",mixins:[n("MHmu").a],props:{link:{type:[String,Object]},isExternal:{type:Boolean,default:!1},isRoute:{type:Boolean,default:!1},active:{type:Boolean,default:!1},activeClass:{type:String},append:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},exact:{type:Boolean,default:!1},exactActiveClass:{type:String},flyoutId:{type:String},rel:{type:String},replace:{type:Boolean,default:!1},routerTag:{type:String},target:{type:String},title:{type:String}},data:function(){return{showFlyout:!1}},computed:{isInternalLink:function(){return!this.isExternal&&(!!this.isRoute||this.isRouteLink(this.link))}},methods:{click:function(t){this.$emit("click",t)},isBlured:function(){var t=this;this.flyoutId&&(this.showFlyout=!1,this.$nextTick(function(){t.checkFocusedElements()}))},isFocused:function(){var t=this;this.flyoutId&&(this.showFlyout=!0,this.$nextTick(function(){t.checkFocusedElements()}))},checkFocusedElements:function(){var t=document.getElementById(this.flyoutId);if(t&&t.classList.contains("has-flyout")){var e=t.getElementsByClassName("Flyout");e&&e.length&&(this.showFlyout?e[0].classList.add("Flyout__Show"):e[0].classList.remove("Flyout__Show"))}}}},i=n("psIG"),r=Object(i.a)(o,function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-link",{style:{"pointer-events":t.disabled?"none":"inherit"},attrs:{active:t.active,"active-class":t.activeClass,append:t.append,disabled:t.disabled,exact:t.exact,"exact-active-class":t.exactActiveClass,href:t.isInternalLink?null:t.link,rel:t.rel,replace:t.replace,"router-tag":t.routerTag,target:t.target,to:t.isInternalLink?t.link:null,title:t.title},on:{click:t.click},nativeOn:{blur:function(e){return t.isBlured(e)},focus:function(e){return t.isFocused(e)}}},[t._t("default")],2)},[],!1,null,null,null);r.options.__file="CommonLink.vue";e.default=r.exports},Iptl:function(t,e,n){"use strict";var o=n("nS/B");e.a={components:{CommonNotice:function(){return n.e(122).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(7).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(8).then(n.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(o.b)(this.doc,"summary")},version:function(){return Object(o.b)(this.doc,"version")},description:function(){return Object(o.b)(this.doc,"description")},props:function(){return Object(o.a)(this.doc,"prop")},slots:function(){return Object(o.a)(this.doc,"slot")},events:function(){return Object(o.a)(this.doc,"event")},methods:function(){return Object(o.a)(this.doc,"method")}}}},Jh4J:function(t,e,n){var o=n("g2rQ");t.exports=Array.isArray||function(t){return"Array"==o(t)}},KELd:function(t,e,n){n("MRte"),n("iKhv"),n("4Xtu"),n("UvcN"),t.exports=n("TaGV").Symbol},KyLU:function(t,e,n){t.exports={default:n("KELd"),__esModule:!0}},MHmu:function(t,e,n){"use strict";var o=n("wv3L"),i=n.n(o);e.a={methods:{isRouteLink:function(t){if("object"===(void 0===t?"undefined":i()(t)))return!0;if(!this.$router)return!1;var e=this.$router.resolve({path:t});return!!(e.route&&e.route.matched&&e.route.matched.length&&"ErrorPage"!==e.route.matched[0].name&&"LayoutError"!==e.route.matched[0].name)}}}},MRte:function(t,e,n){"use strict";var o=n("41F1"),i=n("qA3Z"),r=n("lBnu"),s=n("/6KZ"),a=n("5BpW"),u=n("hYpR").KEY,c=n("/Vl9"),l=n("67sl"),f=n("sWB5"),p=n("ct/D"),d=n("0Sp3"),m=n("eTWF"),y=n("YlUf"),h=n("T4P6"),v=n("Jh4J"),b=n("ADe/"),g=n("fGh/"),_=n("T/1i"),k=n("HbTz"),S=n("zJT+"),x=n("G+Zn"),w=n("dn9X"),C=n("0HwX"),O=n("eOWL"),L=n("/Lgp"),E=C.f,j=O.f,F=w.f,P=o.Symbol,T=o.JSON,B=T&&T.stringify,I=d("_hidden"),N=d("toPrimitive"),A={}.propertyIsEnumerable,D=l("symbol-registry"),W=l("symbols"),M=l("op-symbols"),G=Object.prototype,J="function"==typeof P,R=o.QObject,Y=!R||!R.prototype||!R.prototype.findChild,U=r&&c(function(){return 7!=x(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(t,e,n){var o=E(G,e);o&&delete G[e],j(t,e,n),o&&t!==G&&j(G,e,o)}:j,q=function(t){var e=W[t]=x(P.prototype);return e._k=t,e},K=J&&"symbol"==typeof P.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof P},$=function(t,e,n){return t===G&&$(M,e,n),b(t),e=k(e,!0),b(n),i(W,e)?(n.enumerable?(i(t,I)&&t[I][e]&&(t[I][e]=!1),n=x(n,{enumerable:S(0,!1)})):(i(t,I)||j(t,I,S(1,{})),t[I][e]=!0),U(t,e,n)):j(t,e,n)},H=function(t,e){b(t);for(var n,o=h(e=_(e)),i=0,r=o.length;r>i;)$(t,n=o[i++],e[n]);return t},V=function(t){var e=A.call(this,t=k(t,!0));return!(this===G&&i(W,t)&&!i(M,t))&&(!(e||!i(this,t)||!i(W,t)||i(this,I)&&this[I][t])||e)},X=function(t,e){if(t=_(t),e=k(e,!0),t!==G||!i(W,e)||i(M,e)){var n=E(t,e);return!n||!i(W,e)||i(t,I)&&t[I][e]||(n.enumerable=!0),n}},Z=function(t){for(var e,n=F(_(t)),o=[],r=0;n.length>r;)i(W,e=n[r++])||e==I||e==u||o.push(e);return o},z=function(t){for(var e,n=t===G,o=F(n?M:_(t)),r=[],s=0;o.length>s;)!i(W,e=o[s++])||n&&!i(G,e)||r.push(W[e]);return r};J||(a((P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===G&&e.call(M,n),i(this,I)&&i(this[I],t)&&(this[I][t]=!1),U(this,t,S(1,n))};return r&&Y&&U(G,t,{configurable:!0,set:e}),q(t)}).prototype,"toString",function(){return this._k}),C.f=X,O.f=$,n("sqS1").f=w.f=Z,n("kBaS").f=V,n("phsM").f=z,r&&!n("gtwY")&&a(G,"propertyIsEnumerable",V,!0),m.f=function(t){return q(d(t))}),s(s.G+s.W+s.F*!J,{Symbol:P});for(var Q="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Q.length>tt;)d(Q[tt++]);for(var et=L(d.store),nt=0;et.length>nt;)y(et[nt++]);s(s.S+s.F*!J,"Symbol",{for:function(t){return i(D,t+="")?D[t]:D[t]=P(t)},keyFor:function(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var e in D)if(D[e]===t)return e},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),s(s.S+s.F*!J,"Object",{create:function(t,e){return void 0===e?x(t):H(x(t),e)},defineProperty:$,defineProperties:H,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:z}),T&&s(s.S+s.F*(!J||c(function(){var t=P();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))})),"JSON",{stringify:function(t){for(var e,n,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(n=e=o[1],(g(e)||void 0!==t)&&!K(t))return v(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!K(e))return e}),o[1]=e,B.apply(T,o)}}),P.prototype[N]||n("PPkd")(P.prototype,N,P.prototype.valueOf),f(P,"Symbol"),f(Math,"Math",!0),f(o.JSON,"JSON",!0)},T4P6:function(t,e,n){var o=n("/Lgp"),i=n("phsM"),r=n("kBaS");t.exports=function(t){var e=o(t),n=i.f;if(n)for(var s,a=n(t),u=r.f,c=0;a.length>c;)u.call(t,s=a[c++])&&e.push(s);return e}},UvcN:function(t,e,n){n("YlUf")("observable")},YlUf:function(t,e,n){var o=n("41F1"),i=n("TaGV"),r=n("gtwY"),s=n("eTWF"),a=n("eOWL").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=r?{}:o.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:s.f(t)})}},dn9X:function(t,e,n){var o=n("T/1i"),i=n("sqS1").f,r={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return s&&"[object Window]"==r.call(t)?function(t){try{return i(t)}catch(t){return s.slice()}}(t):i(o(t))}},eR4j:function(t,e,n){t.exports={default:n("gSCB"),__esModule:!0}},eTWF:function(t,e,n){e.f=n("0Sp3")},elNR:function(t,e,n){"use strict";n.r(e);var o=n("Iptl"),i=n("9iYM"),r={name:"CommonLink",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Common/CommonLink",component:i.default,isGlobal:!0,example:{active:{default:!1,type:"checkbox"},activeClass:{type:"input"},append:{default:!1,type:"checkbox"},disabled:{default:!1,type:"checkbox"},exact:{default:!1,type:"checkbox"},exactActiveClass:{type:"input"},link:{default:"https://otrs.com",type:"input"},isExternal:{default:!1,type:"checkbox"},isRoute:{default:!1,type:"checkbox"},rel:{type:"input"},replace:{default:!1,type:"checkbox"},routerTag:{type:"input"},target:{default:"_blank",type:"input"},slots:{default:{content:"Link",render:function(t){return function(){return t("span","Link")}}}}}}}},s=n("psIG"),a=Object(s.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h1",{staticClass:"design-system"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v(t._s(t.version))])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("CommonNotice",{attrs:{type:"Warning",title:"Under construction",text:"Please be aware that the documentation of this component is currently under construction."}}),t._v(" "),n("b-tabs",{staticClass:"tab-content"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-path":t.componentPath,"is-global":t.isGlobal,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{attrs:{title:"Usage","title-link-class":"design-system"}},[n("h2",{staticClass:"design-system"},[t._v("Header Level 2")]),t._v(" "),n("ol",{staticClass:"design-system"},[n("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),n("li",[t._v("Aliquam tincidunt mauris eu risus.")])]),t._v(" "),n("b-container",{staticClass:"dosdonts",attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[t._v("Do")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])]),t._v(" "),n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[t._v("Don't")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])])],1)],1),t._v(" "),n("h3",{staticClass:"design-system"},[t._v("Header Level 3")]),t._v(" "),n("ul",{staticClass:"design-system"},[n("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),n("li",[t._v("Aliquam tincidunt mauris eu risus.")])])],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);a.options.__file="CommonLink.vue";e.default=a.exports},gSCB:function(t,e,n){n("WwSA"),n("k/kI"),t.exports=n("eTWF").f("iterator")},hYpR:function(t,e,n){var o=n("ct/D")("meta"),i=n("fGh/"),r=n("qA3Z"),s=n("eOWL").f,a=0,u=Object.isExtensible||function(){return!0},c=!n("/Vl9")(function(){return u(Object.preventExtensions({}))}),l=function(t){s(t,o,{value:{i:"O"+ ++a,w:{}}})},f=t.exports={KEY:o,NEED:!1,fastKey:function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!r(t,o)){if(!u(t))return"F";if(!e)return"E";l(t)}return t[o].i},getWeak:function(t,e){if(!r(t,o)){if(!u(t))return!0;if(!e)return!1;l(t)}return t[o].w},onFreeze:function(t){return c&&f.NEED&&u(t)&&!r(t,o)&&l(t),t}}},sqS1:function(t,e,n){var o=n("Qqke"),i=n("miGZ").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,i)}},wv3L:function(t,e,n){"use strict";e.__esModule=!0;var o=s(n("eR4j")),i=s(n("KyLU")),r="function"==typeof i.default&&"symbol"==typeof o.default?function(t){return typeof t}:function(t){return t&&"function"==typeof i.default&&t.constructor===i.default&&t!==i.default.prototype?"symbol":typeof t};function s(t){return t&&t.__esModule?t:{default:t}}e.default="function"==typeof i.default&&"symbol"===r(o.default)?function(t){return void 0===t?"undefined":r(t)}:function(t){return t&&"function"==typeof i.default&&t.constructor===i.default&&t!==i.default.prototype?"symbol":void 0===t?"undefined":r(t)}}}]);