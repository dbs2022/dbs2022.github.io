(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5f2ca52"],{"02c5":function(t,e,r){"use strict";r("9e4c")},"103e":function(t,e,r){},"2a7d":function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function i(t,e,r){return e=o(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t){var e=a(t,"string");return"symbol"===n(e)?e:String(e)}function a(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!==n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var l=function(){var t,e=this,r=e._self._c;return r("button",{staticClass:"button",class:(t={},i(t,"button_".concat(e.type),!0),i(t,"button_size-".concat(e.size),e.size),i(t,"button_loading",e.loading),i(t,"button_disabled",e.disabled),t)},[e.loading?r("loader",{attrs:{size:"15px",border:"3px",absolute:""}}):e._e(),e._t("default")],2)},c=[],s=r("555f"),u={props:["type","loading","disabled","size"],components:{Loader:s["a"]}},f=u,p=(r("c9e0"),r("2877")),h=Object(p["a"])(f,l,c,!1,null,"9a12d0c0",null);e["a"]=h.exports},3229:function(t,e,r){},"3eb17":function(t,e,r){},"487a":function(t,e,r){var n,i;function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}(function(a,l){"object"===o(e)&&"undefined"!==typeof t?t.exports=l():(n=l,i="function"===typeof n?n.call(e,r,e,t):n,void 0===i||(t.exports=i))})(0,(function(){"use strict";var t="@@InfiniteScroll",e=function(t,e){var r,n,i,o,a,l=function(){t.apply(o,a),n=r};return function(){if(o=this,a=arguments,r=Date.now(),i&&(clearTimeout(i),i=null),n){var t=e-(r-n);t<0?l():i=setTimeout((function(){l()}),t)}else l()}},r=function(t){return t===window?Math.max(window.pageYOffset||0,document.documentElement.scrollTop):t.scrollTop},n=document.defaultView.getComputedStyle,i=function(t){var e=t;while(e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType){var r=n(e).overflowY;if("scroll"===r||"auto"===r)return e;e=e.parentNode}return window},o=function(t){return t===window?document.documentElement.clientHeight:t.clientHeight},a=function(t){return t===window?r(window):t.getBoundingClientRect().top+r(window)},l=function(t){var e=t.parentNode;while(e){if("HTML"===e.tagName)return!0;if(11===e.nodeType)return!1;e=e.parentNode}return!1},c=function(){if(!this.binded){this.binded=!0;var t=this,r=t.el,n=r.getAttribute("infinite-scroll-throttle-delay"),o=200;n&&(o=Number(t.vm[n]||n),(isNaN(o)||o<0)&&(o=200)),t.throttleDelay=o,t.scrollEventTarget=i(r),t.scrollListener=e(s.bind(t),t.throttleDelay),t.scrollEventTarget.addEventListener("scroll",t.scrollListener),this.vm.$on("hook:beforeDestroy",(function(){t.scrollEventTarget.removeEventListener("scroll",t.scrollListener)}));var a=r.getAttribute("infinite-scroll-disabled"),l=!1;a&&(this.vm.$watch(a,(function(e){t.disabled=e,!e&&t.immediateCheck&&s.call(t)})),l=Boolean(t.vm[a])),t.disabled=l;var c=r.getAttribute("infinite-scroll-distance"),u=0;c&&(u=Number(t.vm[c]||c),isNaN(u)&&(u=0)),t.distance=u;var f=r.getAttribute("infinite-scroll-immediate-check"),p=!0;f&&(p=Boolean(t.vm[f])),t.immediateCheck=p,p&&s.call(t);var h=r.getAttribute("infinite-scroll-listen-for-event");h&&t.vm.$on(h,(function(){s.call(t)}))}},s=function(t){var e=this.scrollEventTarget,n=this.el,i=this.distance;if(!0===t||!this.disabled){var l=r(e),c=l+o(e),s=!1;if(e===n)s=e.scrollHeight-c<=i;else{var u=a(n)-a(e)+n.offsetHeight+l;s=c+i>=u}s&&this.expression&&this.expression()}},u={bind:function(e,r,n){e[t]={el:e,vm:n.context,expression:r.value};var i=arguments;e[t].vm.$on("hook:mounted",(function(){e[t].vm.$nextTick((function(){l(e)&&c.call(e[t],i),e[t].bindTryCount=0;var r=function r(){e[t].bindTryCount>10||(e[t].bindTryCount++,l(e)?c.call(e[t],i):setTimeout(r,50))};r()}))}))},unbind:function(e){e&&e[t]&&e[t].scrollEventTarget&&e[t].scrollEventTarget.removeEventListener("scroll",e[t].scrollListener)}},f=function(t){t.directive("InfiniteScroll",u)};return window.Vue&&(window.infiniteScroll=u,Vue.use(f)),u.install=f,u}))},"4fde":function(t,e,r){"use strict";r("8fa4")},5173:function(t,e,r){"use strict";r("d5f5")},"555f":function(t,e,r){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper",class:{wrapper_absolute:t.absolute}},[e("div",{staticClass:"loader",style:{width:t.size,height:t.size,"border-width":t.border}})])},i=[],o={props:{size:{default:"70px"},border:{default:"6px"},absolute:{type:Boolean,default:!1}}},a=o,l=(r("4fde"),r("2877")),c=Object(l["a"])(a,n,i,!1,null,"37663d0c",null);e["a"]=c.exports},"55c3":function(t,e,r){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search"},[e("universal-filters",{staticClass:"search__filters",attrs:{"save-to-url":t.saveFiltersToUrl},model:{value:t.filters,callback:function(e){t.filters=e},expression:"filters"}}),e("div",{staticClass:"search__instruction"},[t._t("instruction")],2),t.apps.length||t.isSearching?t._e():e("p",[t._v(t._s(t.$t("NOTHING_WAS_FOUND")))]),e("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.searchNextPage,expression:"searchNextPage"}],staticClass:"search__result"},t._l(t.apps,(function(r){return e("universal-app",{key:r.universal_object_identifier,attrs:{app:r,"custom-action":t.appCustomAction,"custom-action-label":t.appCustomActionLabel,shareable:t.appShareable},on:{"custom-action-triggered":function(e){return t.$emit("app-custom-action-triggered",e)},"update-filters":t.updateFilters}})})),1),t.isLastPage?t._e():e("v-loader",{staticClass:"search__loading-spinner",class:{"search__loading-spinner_visible":t.isSearching}})],1)},i=[],o=r("487a"),a=r.n(o),l=r("555f"),c=r("2ef0"),s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"filters"},[e("v-input",{staticClass:"filters__input",attrs:{placeholder:t.$t("NAME"),debounce:500,clearable:""},model:{value:t.filters.name,callback:function(e){t.$set(t.filters,"name",e)},expression:"filters.name"}}),e("v-select",{staticClass:"filters__select",attrs:{placeholder:t.$t("CATEGORY"),options:t.genresOptions,clearable:""},model:{value:t.filters.genre_id,callback:function(e){t.$set(t.filters,"genre_id",e)},expression:"filters.genre_id"}}),e("v-input",{staticClass:"filters__input",attrs:{placeholder:t.$t("DEVELOPER"),debounce:500,clearable:""},model:{value:t.filters.developer_name,callback:function(e){t.$set(t.filters,"developer_name",e)},expression:"filters.developer_name"}}),e("v-select",{staticClass:"filters__select",attrs:{placeholder:t.$t("TYPE"),options:t.typesOptions,clearable:""},model:{value:t.filters.type,callback:function(e){t.$set(t.filters,"type",e)},expression:"filters.type"}}),e("v-select",{staticClass:"filters__select",attrs:{placeholder:t.$t("DEVICE"),options:t.devicesOptions,clearable:""},model:{value:t.filters.compatibility,callback:function(e){t.$set(t.filters,"compatibility",e)},expression:"filters.compatibility"}}),e("v-input",{staticClass:"filters__input",attrs:{placeholder:t.$t("SOURCE"),debounce:500,clearable:""},model:{value:t.filters.source_name,callback:function(e){t.$set(t.filters,"source_name",e)},expression:"filters.source_name"}})],1)},u=[],f=r("6cdc"),p=r("b26e"),h=r("2f62");function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t,e){return w(t)||g(t,e)||m(t,e)||b()}function b(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(t,e){if(t){if("string"===typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(t,e):void 0}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function g(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,o,a,l=[],c=!0,s=!1;try{if(o=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){s=!0,i=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw i}}return l}}function w(t){if(Array.isArray(t))return t}function _(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(Object(r),!0).forEach((function(e){S(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function S(t,e,r){return e=j(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function j(t){var e=C(t,"string");return"symbol"===d(e)?e:String(e)}function C(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var E={components:{VInput:f["a"],VSelect:p["a"]},props:{value:Object,saveToUrl:Boolean},data:function(){return{filters:{name:"",genre_id:null,developer_name:"",type:"",compatibility:"",source_name:""},devicesOptions:[{label:"iPhone",value:"ios"},{label:"iPad",value:"ipados"},{label:"Mac",value:"macos"},{label:"Apple Watch",value:"watchos"},{label:"Apple Vision",value:"visionos"},{label:"Apple TV",value:"tvos"}]}},computed:O(O(O({},Object(h["f"])(["genres"])),Object(h["d"])(["currentDevice"])),{},{genresOptions:function(){return Object.values(this.genres.official).map((function(t){return{label:t.name,value:t.id}}))},typesOptions:function(){var t=this;return["repo_app","official_app","appstore_app","user_app","tweak"].map((function(e){return{label:t.$t(e.toUpperCase()),value:e}}))}}),methods:{trySetUrl:function(){var t=this;if(this.saveToUrl){var e=Object.fromEntries(Object.entries(this.filters).filter((function(t){var e=v(t,2),r=e[1];return r})).map((function(t){var e=v(t,2),r=e[0],n=e[1];return[r,n.toString()]}))),r=Object.fromEntries(Object.entries(this.$route.query).filter((function(e){var r=v(e,1),n=r[0];return!(n in t.filters)}))),n=O(O({},e),r);Object(c["isEqual"])(this.$route.query,n)||this.$router.push({path:this.$route.path,query:n})}},tryParseUrl:function(){if(this.saveToUrl)for(var t in this.$route.query)t in this.filters&&(this.filters[t]=this.parseQueryParam(this.$route.query,t))},parseQueryParam:function(t,e){switch(e){case"genre_id":return+t[e];default:return t[e]}}},watch:{value:{handler:function(){Object(c["isEqual"])(this.filters,this.value)||(this.filters=Object(c["clone"])(this.value))},deep:!0},filters:{handler:function(){this.$emit("input",Object(c["clone"])(this.filters)),this.trySetUrl()},deep:!0}},created:function(){this.tryParseUrl()}},P=E,x=(r("fe26"),r("2877")),A=Object(x["a"])(P,s,u,!1,null,null,null),L=A.exports,T=function(){var t,e=this,r=e._self._c;return r("div",{staticClass:"app",on:{click:e.onClick}},[r("div",{staticClass:"header"},[e.app.icon_uri&&!e.iconFailedToLoad?r("img",{staticClass:"icon",attrs:{src:e.app.icon_uri},on:{error:function(t){e.iconFailedToLoad=!0}}}):r("div",{staticClass:"icon icon_stub"}),r("div",{staticClass:"info"},[r("div",{staticClass:"line name"},[r("button",{staticClass:"filterable",on:{click:function(t){return e.updateFilters("name")}}},[e._v(e._s(e.app.name))]),e._v("\n              v. "+e._s(e.app.version)+",\n              "),r("button",{staticClass:"filterable ellipsis",on:{click:function(t){return e.updateFilters("developer_name")}}},[e._v(e._s(e.app.developer_name))])]),e.app.lead?r("div",{staticClass:"line ellipsis"},[e._v(e._s(e.app.lead))]):e._e(),Object.keys(e.compatibleDevices).length?r("i18next",{staticClass:"line ellipsis",attrs:{tag:"div",path:"FOR_X"}},[r("span",e._l(e.compatibleDevices,(function(t,n){return r("span",{key:n,staticClass:"compatible-device"},[r("button",{staticClass:"filterable",on:{click:function(t){return e.updateFilters({compatibility:n})}}},[e._v(e._s(t))])])})),0)]):e._e()],1)]),r("div",{staticClass:"details"},[r("div",{staticClass:"line"},[e._v("\n          "+e._s(e.$t("SOURCE"))+":\n          "),r("button",{staticClass:"filterable ellipsis",on:{click:function(t){return e.updateFilters("source_name")}}},[e._v(e._s(e.app.source_name))])]),r("div",{staticClass:"line"},[e._v("\n          "+e._s(e.$t("TYPE"))+":\n          "),r("button",{staticClass:"filterable ellipsis",on:{click:function(t){return e.updateFilters("type")}}},[e._v(e._s(e.$t(null===(t=e.app.type)||void 0===t?void 0:t.toUpperCase())))])]),e.app.genre_id?r("div",{staticClass:"line"},[e._v("\n          "+e._s(e.$t("CATEGORY"))+":\n          "),r("button",{staticClass:"filterable ellipsis",on:{click:function(t){return e.updateFilters("genre_id")}}},[e._v(e._s(e.genre))])]):e._e()]),e.customAction?r("div",{staticClass:"actions"},[e.customAction?r("v-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return e.$emit("custom-action-triggered",e.app)}}},[e._v(e._s(e.customActionLabel))]):e._e()],1):e._e()])},$=[],k=r("2a7d");function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function D(t,e){return U(t)||B(t,e)||V(t,e)||I()}function I(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function V(t,e){if(t){if("string"===typeof t)return F(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?F(t,e):void 0}}function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function B(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,o,a,l=[],c=!0,s=!1;try{if(o=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){s=!0,i=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw i}}return l}}function U(t){if(Array.isArray(t))return t}function M(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function z(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?M(Object(r),!0).forEach((function(e){G(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function G(t,e,r){return e=Y(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Y(t){var e=q(t,"string");return"symbol"===N(e)?e:String(e)}function q(t,e){if("object"!==N(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==N(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var H={props:{app:Object,customAction:Boolean,customActionLabel:String,shareable:Boolean},components:{VButton:k["a"]},data:function(){return{iconFailedToLoad:!1}},computed:z(z({},Object(h["f"])(["genres"])),{},{genre:function(){var t,e=this;return null===(t=Object.values(this.genres.official).find((function(t){return t.id===e.app.genre_id})))||void 0===t?void 0:t.name},compatibleDevices:function(){var t=this,e={ios:"iPhone",ipados:"iPad",tvos:"Apple TV",visionos:"Apple Vision",macos:"Mac",watchos:"Apple Watch"},r=Object.entries(e).filter((function(e){var r=D(e,1),n=r[0];return t.app["min_".concat(n,"_version")]}));return Object.fromEntries(r)}}),methods:{updateFilters:function(t){"string"!==typeof t?this.$emit("update-filters",t):this.$emit("update-filters",G({},t,this.app[t]))},onClick:function(t){t.target.closest("button")||this.$router.push("/details/".concat(this.app.universal_object_identifier))}}},R=H,W=(r("5173"),Object(x["a"])(R,T,$,!1,null,"6bd0569b",null)),J=W.exports;function Q(t){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q(t)}function X(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */X=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),l=new L(n||[]);return i(a,"_invoke",{value:E(t,r,l)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var p="suspendedStart",h="suspendedYield",d="executing",v="completed",b={};function m(){}function y(){}function g(){}var w={};s(w,a,(function(){return this}));var _=Object.getPrototypeOf,O=_&&_(_(T([])));O&&O!==r&&n.call(O,a)&&(w=O);var S=g.prototype=m.prototype=Object.create(w);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function r(i,o,a,l){var c=f(t[i],t,o);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==Q(u)&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,a,l)}),(function(t){r("throw",t,a,l)})):e.resolve(u).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,l)}))}l(c.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,i){r(t,n,e,i)}))}return o=o?o.then(i,i):i()}})}function E(e,r,n){var i=p;return function(o,a){if(i===d)throw new Error("Generator is already running");if(i===v){if("throw"===o)throw a;return{value:t,done:!0}}for(n.method=o,n.arg=a;;){var l=n.delegate;if(l){var c=P(l,n);if(c){if(c===b)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===p)throw i=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=d;var s=f(e,r,n);if("normal"===s.type){if(i=n.done?v:h,s.arg===b)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(i=v,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var o=f(i,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,b;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,b):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(Q(e)+" is not iterable")}return y.prototype=g,i(S,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:y,configurable:!0}),y.displayName=s(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},j(C.prototype),s(C.prototype,l,(function(){return this})),e.AsyncIterator=C,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new C(u(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(S),s(S,c,"Generator"),s(S,a,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return l.type="throw",l.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],l=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;A(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),b}},e}function K(t){return rt(t)||et(t)||tt(t)||Z()}function Z(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function tt(t,e){if(t){if("string"===typeof t)return nt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?nt(t,e):void 0}}function et(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function rt(t){if(Array.isArray(t))return nt(t)}function nt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function it(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function ot(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?it(Object(r),!0).forEach((function(e){at(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):it(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function at(t,e,r){return e=lt(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function lt(t){var e=ct(t,"string");return"symbol"===Q(e)?e:String(e)}function ct(t,e){if("object"!==Q(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==Q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function st(t,e,r,n,i,o,a){try{var l=t[o](a),c=l.value}catch(s){return void r(s)}l.done?e(c):Promise.resolve(c).then(n,i)}function ut(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){st(o,n,i,a,l,"next",t)}function l(t){st(o,n,i,a,l,"throw",t)}a(void 0)}))}}var ft={directives:{infiniteScroll:a.a},components:{VLoader:l["a"],UniversalFilters:L,UniversalApp:J},props:{appCustomAction:Boolean,appCustomActionLabel:String,appShareable:Boolean,saveFiltersToUrl:Boolean},data:function(){return{pagination:{page:1,pageSize:25},filters:{},apps:[],searchController:null,isSearching:!0,isSearchAborted:!1,isLastPage:!1}},computed:{title:function(){return this.$t("SEARCH")}},methods:{search:function(){var t=this;return ut(X().mark((function e(){var r,n;return X().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isSearching&&t.searchController&&(t.searchController.abort(),t.isSearchAborted=!0),t.isSearching=!0,t.searchController=new AbortController,e.prev=3,e.next=6,t.$api.searchIndex(ot(ot({},t.filters),{},{start:(t.pagination.page-1)*t.pagination.pageSize,length:t.pagination.pageSize}),{signal:t.searchController.signal});case 6:n=e.sent,n.length||(t.isLastPage=!0),(r=t.apps).push.apply(r,K(n));case 9:return e.prev=9,t.isSearchAborted||(t.isSearching=!1),t.isSearchAborted=!1,e.finish(9);case 13:case"end":return e.stop()}}),e,null,[[3,,9,13]])})))()},searchNextPage:function(){this.isSearching||this.isLastPage||(this.pagination.page=this.pagination.page+1,this.search())},updateFilters:function(t){this.$set(this,"filters",ot(ot({},this.filters),t))}},watch:{filters:{handler:function(t,e){Object(c["isEqual"])(t,e)||(this.pagination.page=1,this.apps=[],this.isLastPage=!1,this.search())},deep:!0}},created:function(){this.search()}},pt=ft,ht=(r("e4b2"),Object(x["a"])(pt,n,i,!1,null,"3a7c59b4",null));e["a"]=ht.exports},"6cdc":function(t,e,r){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"input-wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.localValue,expression:"localValue"}],staticClass:"input",class:{input_clearable:t.clearable,input_error:t.error},attrs:{placeholder:t.placeholder},domProps:{value:t.localValue},on:{input:[function(e){e.target.composing||(t.localValue=e.target.value)},t.onInput]}}),t.clearable&&t.localValue?e("button",{staticClass:"clear",on:{click:function(e){t.modelValue=""}}},[e("svg",{attrs:{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"m6.8955 5 2.8429-2.8429c0.34886-0.34886 0.34886-0.91449 0-1.2636l-0.63182-0.63182c-0.34886-0.34886-0.91449-0.34886-1.2636 0l-2.8429 2.8429-2.8429-2.8429c-0.34886-0.34886-0.91449-0.34886-1.2636 0l-0.63182 0.63182c-0.34886 0.34886-0.34886 0.91449 0 1.2636l2.8429 2.8429-2.8429 2.8429c-0.34886 0.34886-0.34886 0.91449 0 1.2636l0.63182 0.63182c0.34886 0.34886 0.91477 0.34886 1.2636 0l2.8429-2.8429 2.8429 2.8429c0.34886 0.34886 0.91477 0.34886 1.2636 0l0.63182-0.63182c0.34886-0.34886 0.34886-0.91449 0-1.2636l-2.8429-2.8429z"}})])]):t._e()])},i=[],o=r("2ef0"),a={props:{value:String,debounce:Number,clearable:Boolean,placeholder:String,error:Boolean},data:function(){return{localValue:""}},computed:{modelValue:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{setOnInput:function(){var t=this;this.onInput=Object(o["debounce"])((function(e){t.modelValue=e.target.value}),this.debounce)}},watch:{value:{handler:function(t){this.localValue=t},immediate:!0}},created:function(){this.setOnInput()}},l=a,c=(r("02c5"),r("2877")),s=Object(c["a"])(l,n,i,!1,null,"4684e3c6",null);e["a"]=s.exports},"74bc":function(t,e,r){"use strict";r("dfa3")},"8fa4":function(t,e,r){},"9e4c":function(t,e,r){},b26e:function(t,e,r){"use strict";var n=function(){var t,e=this,r=e._self._c;return r("v-select",{staticClass:"select",class:{select_compact:e.compact,select_error:e.error},attrs:{placeholder:e.placeholder,options:e.options,reduce:function(t){return t.value},value:e.value,clearable:null===(t=e.clearable)||void 0===t||t,searchable:e.inputMode,taggable:e.inputMode},on:{input:e.onInput,"option:selected":e.onOptionSelected,search:e.onSearch,close:e.onClose}})},i=[],o={props:{placeholder:String,options:{},value:{},clearable:Boolean,compact:Boolean,inputMode:Boolean,error:Boolean},data:function(){return{search:""}},methods:{onSearch:function(t){this.search=t},onInput:function(t){this.$emit("input",t),this.search=""},onClose:function(){this.inputMode&&this.search&&this.$emit("input",this.search)},onOptionSelected:function(t){this.inputMode&&t.label&&this.$emit("input",t.label)}}},a=o,l=(r("74bc"),r("2877")),c=Object(l["a"])(a,n,i,!1,null,"41e3b296",null);e["a"]=c.exports},c9e0:function(t,e,r){"use strict";r("3eb17")},d5f5:function(t,e,r){},dfa3:function(t,e,r){},e4b2:function(t,e,r){"use strict";r("103e")},fe26:function(t,e,r){"use strict";r("3229")}}]);
//# sourceMappingURL=chunk-a5f2ca52.56e2884b.js.map