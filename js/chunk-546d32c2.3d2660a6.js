(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-546d32c2"],{"02c5":function(t,e,r){"use strict";r("9e4c")},"039a":function(t,e,r){"use strict";r("efd1")},"0d72":function(t,e,r){"use strict";r("72cd")},"2a7d":function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function i(t,e,r){return e=o(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t){var e=a(t,"string");return"symbol"===n(e)?e:String(e)}function a(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!==n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var c=function(){var t,e=this,r=e._self._c;return r(e.tag,e._b({tag:"component",staticClass:"button",class:(t={},i(t,"button_".concat(e.type),!0),i(t,"button_size-".concat(e.size),e.size),i(t,"button_loading",e.loading),i(t,"button_disabled",e.disabled),t)},"component",e.$attrs,!1),[e.loading?r("loader",{attrs:{size:"15px",border:"3px",absolute:""}}):e._e(),e._t("default")],2)},l=[],s=r("555f"),u={props:{type:String,loading:Boolean,disabled:Boolean,size:String,tag:{type:String,default:"button"}},components:{Loader:s["a"]}},f=u,p=(r("4f6d"),r("2877")),h=Object(p["a"])(f,c,l,!1,null,"c844b0e4",null);e["a"]=h.exports},"413d":function(t,e,r){},"41aa":function(t,e,r){},"487a":function(t,e,r){var n,i;function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}(function(a,c){"object"===o(e)&&"undefined"!==typeof t?t.exports=c():(n=c,i="function"===typeof n?n.call(e,r,e,t):n,void 0===i||(t.exports=i))})(0,(function(){"use strict";var t="@@InfiniteScroll",e=function(t,e){var r,n,i,o,a,c=function(){t.apply(o,a),n=r};return function(){if(o=this,a=arguments,r=Date.now(),i&&(clearTimeout(i),i=null),n){var t=e-(r-n);t<0?c():i=setTimeout((function(){c()}),t)}else c()}},r=function(t){return t===window?Math.max(window.pageYOffset||0,document.documentElement.scrollTop):t.scrollTop},n=document.defaultView.getComputedStyle,i=function(t){var e=t;while(e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType){var r=n(e).overflowY;if("scroll"===r||"auto"===r)return e;e=e.parentNode}return window},o=function(t){return t===window?document.documentElement.clientHeight:t.clientHeight},a=function(t){return t===window?r(window):t.getBoundingClientRect().top+r(window)},c=function(t){var e=t.parentNode;while(e){if("HTML"===e.tagName)return!0;if(11===e.nodeType)return!1;e=e.parentNode}return!1},l=function(){if(!this.binded){this.binded=!0;var t=this,r=t.el,n=r.getAttribute("infinite-scroll-throttle-delay"),o=200;n&&(o=Number(t.vm[n]||n),(isNaN(o)||o<0)&&(o=200)),t.throttleDelay=o,t.scrollEventTarget=i(r),t.scrollListener=e(s.bind(t),t.throttleDelay),t.scrollEventTarget.addEventListener("scroll",t.scrollListener),this.vm.$on("hook:beforeDestroy",(function(){t.scrollEventTarget.removeEventListener("scroll",t.scrollListener)}));var a=r.getAttribute("infinite-scroll-disabled"),c=!1;a&&(this.vm.$watch(a,(function(e){t.disabled=e,!e&&t.immediateCheck&&s.call(t)})),c=Boolean(t.vm[a])),t.disabled=c;var l=r.getAttribute("infinite-scroll-distance"),u=0;l&&(u=Number(t.vm[l]||l),isNaN(u)&&(u=0)),t.distance=u;var f=r.getAttribute("infinite-scroll-immediate-check"),p=!0;f&&(p=Boolean(t.vm[f])),t.immediateCheck=p,p&&s.call(t);var h=r.getAttribute("infinite-scroll-listen-for-event");h&&t.vm.$on(h,(function(){s.call(t)}))}},s=function(t){var e=this.scrollEventTarget,n=this.el,i=this.distance;if(!0===t||!this.disabled){var c=r(e),l=c+o(e),s=!1;if(e===n)s=e.scrollHeight-l<=i;else{var u=a(n)-a(e)+n.offsetHeight+c;s=l+i>=u}s&&this.expression&&this.expression()}},u={bind:function(e,r,n){e[t]={el:e,vm:n.context,expression:r.value};var i=arguments;e[t].vm.$on("hook:mounted",(function(){e[t].vm.$nextTick((function(){c(e)&&l.call(e[t],i),e[t].bindTryCount=0;var r=function r(){e[t].bindTryCount>10||(e[t].bindTryCount++,c(e)?l.call(e[t],i):setTimeout(r,50))};r()}))}))},unbind:function(e){e&&e[t]&&e[t].scrollEventTarget&&e[t].scrollEventTarget.removeEventListener("scroll",e[t].scrollListener)}},f=function(t){t.directive("InfiniteScroll",u)};return window.Vue&&(window.infiniteScroll=u,Vue.use(f)),u.install=f,u}))},"4f6d":function(t,e,r){"use strict";r("41aa")},"55c3":function(t,e,r){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search"},[e("universal-filters",{staticClass:"search__filters",attrs:{"save-to-url":t.saveFiltersToUrl},model:{value:t.filters,callback:function(e){t.filters=e},expression:"filters"}}),e("div",{staticClass:"search__instruction"},[t._t("instruction")],2),t.apps.length||t.isSearching?t._e():e("p",[t._v(t._s(t.$t("NOTHING_WAS_FOUND")))]),e("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.searchNextPage,expression:"searchNextPage"}],staticClass:"search__result"},t._l(t.apps,(function(r){return e("universal-app",{key:r.universal_object_identifier,attrs:{app:r,"custom-action":t.appCustomAction,"custom-action-label":t.appCustomActionLabel,shareable:t.appShareable},on:{"custom-action-triggered":function(e){return t.$emit("app-custom-action-triggered",e)},"update-filters":t.updateFilters}})})),1),t.isLastPage?t._e():e("v-loader",{staticClass:"search__loading-spinner",class:{"search__loading-spinner_visible":t.isSearching}})],1)},i=[],o=r("487a"),a=r.n(o),c=r("555f"),l=r("2ef0"),s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"filters"},[e("v-input",{staticClass:"filters__input",attrs:{placeholder:t.$t("NAME"),debounce:500,clearable:""},model:{value:t.filters.name,callback:function(e){t.$set(t.filters,"name",e)},expression:"filters.name"}}),e("v-select",{staticClass:"filters__select",attrs:{placeholder:t.$t("CATEGORY"),options:t.genresOptions,clearable:""},model:{value:t.filters.genre_id,callback:function(e){t.$set(t.filters,"genre_id",e)},expression:"filters.genre_id"}}),e("v-input",{staticClass:"filters__input",attrs:{placeholder:t.$t("DEVELOPER"),debounce:500,clearable:""},model:{value:t.filters.developer_name,callback:function(e){t.$set(t.filters,"developer_name",e)},expression:"filters.developer_name"}}),e("v-select",{staticClass:"filters__select",attrs:{placeholder:t.$t("TYPE"),options:t.typesOptions,clearable:""},model:{value:t.filters.type,callback:function(e){t.$set(t.filters,"type",e)},expression:"filters.type"}}),e("v-select",{staticClass:"filters__select",attrs:{placeholder:t.$t("DEVICE"),options:t.devicesOptions,clearable:""},model:{value:t.filters.compatibility,callback:function(e){t.$set(t.filters,"compatibility",e)},expression:"filters.compatibility"}}),e("v-input",{staticClass:"filters__input",attrs:{placeholder:t.$t("SOURCE"),debounce:500,clearable:""},model:{value:t.filters.source_name,callback:function(e){t.$set(t.filters,"source_name",e)},expression:"filters.source_name"}})],1)},u=[],f=r("6cdc"),p=r("b26e"),h=r("2f62"),v=r("f601");function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function y(t,e){return _(t)||w(t,e)||b(t,e)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function b(t,e){if(t){if("string"===typeof t)return g(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(t,e):void 0}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function w(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,o,a,c=[],l=!0,s=!1;try{if(o=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){s=!0,i=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw i}}return c}}function _(t){if(Array.isArray(t))return t}function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){j(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function j(t,e,r){return e=x(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function x(t){var e=E(t,"string");return"symbol"===d(e)?e:String(e)}function E(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var L={components:{VInput:f["a"],VSelect:p["a"]},props:{value:Object,saveToUrl:Boolean},data:function(){return{filters:{name:"",genre_id:null,developer_name:"",type:"",compatibility:"",source_name:""},devicesOptions:v["a"].map((function(t){var e=t.name,r=t.device;return{label:r,value:e}}))}},computed:S(S(S({},Object(h["f"])(["genres"])),Object(h["d"])(["currentDeviceOS"])),{},{genresOptions:function(){return Object.values(this.genres.official).map((function(t){return{label:t.name,value:t.id}}))},typesOptions:function(){var t=this;return["official_app","user_app","repo_app","enhancement"].map((function(e){return{label:t.$t(e.toUpperCase()),value:e}}))}}),methods:{trySetUrl:function(){var t=this;if(this.saveToUrl){var e=Object.fromEntries(Object.entries(this.filters).filter((function(t){var e=y(t,2),r=e[1];return r})).map((function(t){var e=y(t,2),r=e[0],n=e[1];return[r,n.toString()]}))),r=Object.fromEntries(Object.entries(this.$route.query).filter((function(e){var r=y(e,1),n=r[0];return!(n in t.filters)}))),n=S(S({},e),r);Object(l["isEqual"])(this.$route.query,n)||this.$router.push({path:this.$route.path,query:n})}},tryParseUrl:function(){if(this.saveToUrl)for(var t in this.$route.query)t in this.filters&&(this.filters[t]=this.parseQueryParam(this.$route.query,t))},parseQueryParam:function(t,e){switch(e){case"genre_id":return+t[e];default:return t[e]}}},watch:{value:{handler:function(){Object(l["isEqual"])(this.filters,this.value)||(this.filters=Object(l["clone"])(this.value))},deep:!0},filters:{handler:function(){this.$emit("input",Object(l["clone"])(this.filters)),this.trySetUrl()},deep:!0},currentDeviceOS:{handler:function(){this.filters.compatibility||(this.filters.compatibility=this.currentDeviceOS)},immediate:!0}},created:function(){this.tryParseUrl()}},P=L,C=(r("0d72"),r("2877")),k=Object(C["a"])(P,s,u,!1,null,null,null),T=k.exports,$=function(){var t,e=this,r=e._self._c;return r("div",{staticClass:"app",on:{click:e.onClick}},[r("div",{staticClass:"header"},[e.app.icon_uri&&!e.iconFailedToLoad?r("img",{staticClass:"icon",attrs:{src:e.app.icon_uri},on:{error:function(t){e.iconFailedToLoad=!0}}}):r("div",{staticClass:"icon icon_stub"}),r("div",{staticClass:"info"},[r("div",{staticClass:"line name"},[r("button",{staticClass:"filterable",on:{click:function(t){return e.updateFilters("name")}}},[e._v(e._s(e.app.name))]),e._v("\n              v. "+e._s(e.app.version)+",\n              "),r("button",{staticClass:"filterable ellipsis",on:{click:function(t){return e.updateFilters("developer_name")}}},[e._v(e._s(e.app.developer_name))])]),e.app.lead?r("div",{staticClass:"line ellipsis"},[e._v(e._s(e.app.lead))]):e._e(),e.compatibleOperatingSystems.length?r("i18next",{staticClass:"line ellipsis",attrs:{tag:"div",path:"FOR_X"}},[r("span",e._l(e.compatibleOperatingSystems,(function(t){return r("span",{key:t.name,staticClass:"compatible-device"},[r("button",{staticClass:"filterable",on:{click:function(r){return e.updateFilters({compatibility:t.name})}}},[e._v(e._s(t.device))])])})),0)]):e._e()],1)]),r("div",{staticClass:"details"},[r("div",{staticClass:"line"},[e._v("\n          "+e._s(e.$t("SOURCE"))+":\n          "),r("button",{staticClass:"filterable ellipsis",on:{click:function(t){return e.updateFilters("source_name")}}},[e._v(e._s(e.app.source_name))])]),r("div",{staticClass:"line"},[r("button",{staticClass:"filterable ellipsis",on:{click:function(t){return e.updateFilters("type")}}},[e._v(e._s(e.$t(null===(t=e.app.type)||void 0===t?void 0:t.toUpperCase())))])]),e.app.genre_id?r("div",{staticClass:"line"},[r("button",{staticClass:"filterable ellipsis",on:{click:function(t){return e.updateFilters("genre_id")}}},[e._v(e._s(e.genre))])]):e._e()]),e.customAction?r("div",{staticClass:"actions"},[e.customAction?r("v-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return e.$emit("custom-action-triggered",e.app)}}},[e._v("\n          "+e._s(e.customActionLabel)+"\n        ")]):e._e()],1):e._e()])},A=[],N=r("2a7d"),F=r("7fe0");function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function D(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */D=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),c=new k(n||[]);return i(a,"_invoke",{value:E(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var p="suspendedStart",h="suspendedYield",v="executing",d="completed",y={};function m(){}function b(){}function g(){}var w={};s(w,a,(function(){return this}));var _=Object.getPrototypeOf,O=_&&_(_(T([])));O&&O!==r&&n.call(O,a)&&(w=O);var S=g.prototype=m.prototype=Object.create(w);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(i,o,a,c){var l=f(t[i],t,o);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==I(u)&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(u).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(l.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,i){r(t,n,e,i)}))}return o=o?o.then(i,i):i()}})}function E(e,r,n){var i=p;return function(o,a){if(i===v)throw new Error("Generator is already running");if(i===d){if("throw"===o)throw a;return{value:t,done:!0}}for(n.method=o,n.arg=a;;){var c=n.delegate;if(c){var l=L(c,n);if(l){if(l===y)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===p)throw i=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=v;var s=f(e,r,n);if("normal"===s.type){if(i=n.done?d:h,s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(i=d,n.method="throw",n.arg=s.arg)}}}function L(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var o=f(i,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(I(e)+" is not iterable")}return b.prototype=g,i(S,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:b,configurable:!0}),b.displayName=s(g,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,l,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},j(x.prototype),s(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new x(u(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(S),s(S,l,"Generator"),s(S,a,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return c.type="throw",c.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;C(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function B(t,e,r,n,i,o,a){try{var c=t[o](a),l=c.value}catch(s){return void r(s)}c.done?e(l):Promise.resolve(l).then(n,i)}function V(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){B(o,n,i,a,c,"next",t)}function c(t){B(o,n,i,a,c,"throw",t)}a(void 0)}))}}function G(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function U(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?G(Object(r),!0).forEach((function(e){M(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function M(t,e,r){return e=z(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function z(t){var e=Y(t,"string");return"symbol"===I(e)?e:String(e)}function Y(t,e){if("object"!==I(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var q={mixins:[F["a"]],props:{app:Object,customAction:Boolean,customActionLabel:String,shareable:Boolean},components:{VButton:N["a"]},data:function(){return{iconFailedToLoad:!1,isInstalling:!1}},computed:U(U({},Object(h["f"])(["genres"])),{},{genre:function(){var t,e=this;return null===(t=Object.values(this.genres.official).find((function(t){return t.id===e.app.genre_id})))||void 0===t?void 0:t.name},compatibleOperatingSystems:function(){var t=this;return v["a"].filter((function(e){var r=e.name;return t.app["min_".concat(r,"_version")]}))}}),methods:{updateFilters:function(t){"string"!==typeof t?this.$emit("update-filters",t):this.$emit("update-filters",M({},t,this.app[t]))},onClick:function(t){t.target.closest("button")||this.$router.push("/details/".concat(this.app.universal_object_identifier))},install:function(){var t=this;return V(D().mark((function e(){return D().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.app.no_installation_ticket_failure_reason){e.next=3;break}return t.$notify({type:"error",text:t.app.no_installation_ticket_failure_reason.translated}),e.abrupt("return");case 3:return t.isInstalling=!0,e.prev=4,e.next=7,t.installApp(t.app.object.id,"universal",{installationTicket:t.app.installation_ticket});case 7:return e.prev=7,t.isInstalling=!1,e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[4,,7,10]])})))()}}},H=q,R=(r("039a"),Object(C["a"])(H,$,A,!1,null,"48ac0592",null)),J=R.exports;function Q(t){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q(t)}function W(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */W=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),c=new k(n||[]);return i(a,"_invoke",{value:E(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var p="suspendedStart",h="suspendedYield",v="executing",d="completed",y={};function m(){}function b(){}function g(){}var w={};s(w,a,(function(){return this}));var _=Object.getPrototypeOf,O=_&&_(_(T([])));O&&O!==r&&n.call(O,a)&&(w=O);var S=g.prototype=m.prototype=Object.create(w);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(i,o,a,c){var l=f(t[i],t,o);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==Q(u)&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(u).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(l.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,i){r(t,n,e,i)}))}return o=o?o.then(i,i):i()}})}function E(e,r,n){var i=p;return function(o,a){if(i===v)throw new Error("Generator is already running");if(i===d){if("throw"===o)throw a;return{value:t,done:!0}}for(n.method=o,n.arg=a;;){var c=n.delegate;if(c){var l=L(c,n);if(l){if(l===y)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===p)throw i=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=v;var s=f(e,r,n);if("normal"===s.type){if(i=n.done?d:h,s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(i=d,n.method="throw",n.arg=s.arg)}}}function L(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var o=f(i,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(Q(e)+" is not iterable")}return b.prototype=g,i(S,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:b,configurable:!0}),b.displayName=s(g,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,l,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},j(x.prototype),s(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new x(u(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(S),s(S,l,"Generator"),s(S,a,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return c.type="throw",c.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;C(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function X(t){return et(t)||tt(t)||Z(t)||K()}function K(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Z(t,e){if(t){if("string"===typeof t)return rt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?rt(t,e):void 0}}function tt(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function et(t){if(Array.isArray(t))return rt(t)}function rt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function nt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function it(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?nt(Object(r),!0).forEach((function(e){ot(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):nt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function ot(t,e,r){return e=at(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function at(t){var e=ct(t,"string");return"symbol"===Q(e)?e:String(e)}function ct(t,e){if("object"!==Q(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==Q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function lt(t,e,r,n,i,o,a){try{var c=t[o](a),l=c.value}catch(s){return void r(s)}c.done?e(l):Promise.resolve(l).then(n,i)}function st(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){lt(o,n,i,a,c,"next",t)}function c(t){lt(o,n,i,a,c,"throw",t)}a(void 0)}))}}var ut={directives:{infiniteScroll:a.a},components:{VLoader:c["a"],UniversalFilters:T,UniversalApp:J},props:{appCustomAction:Boolean,appCustomActionLabel:String,appShareable:Boolean,saveFiltersToUrl:Boolean},data:function(){return{pagination:{page:1,pageSize:25},filters:{},apps:[],searchController:null,isSearching:!0,isSearchAborted:!1,isLastPage:!1}},computed:{title:function(){return this.$t("SEARCH")}},methods:{search:function(){var t=this;return st(W().mark((function e(){var r,n;return W().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isSearching&&t.searchController&&(t.searchController.abort(),t.isSearchAborted=!0),t.isSearching=!0,t.searchController=new AbortController,e.prev=3,e.next=6,t.$api.searchIndex(it(it({},t.filters),{},{start:(t.pagination.page-1)*t.pagination.pageSize,length:t.pagination.pageSize}),{signal:t.searchController.signal});case 6:n=e.sent,n.length<t.pagination.pageSize&&(t.isLastPage=!0),(r=t.apps).push.apply(r,X(n));case 9:return e.prev=9,t.isSearchAborted||(t.isSearching=!1),t.isSearchAborted=!1,e.finish(9);case 13:case"end":return e.stop()}}),e,null,[[3,,9,13]])})))()},searchNextPage:function(){this.isSearching||this.isLastPage||(this.pagination.page=this.pagination.page+1,this.search())},updateFilters:function(t){this.$set(this,"filters",it(it({},this.filters),t))}},watch:{filters:{handler:function(t,e){Object(l["isEqual"])(t,e)||(this.pagination.page=1,this.apps=[],this.isLastPage=!1,this.search())},deep:!0}},created:function(){this.search()}},ft=ut,pt=(r("bbff"),Object(C["a"])(ft,n,i,!1,null,"eeb78332",null));e["a"]=pt.exports},"6cdc":function(t,e,r){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"input-wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.localValue,expression:"localValue"}],staticClass:"input",class:{input_clearable:t.clearable,input_error:t.error},attrs:{placeholder:t.placeholder},domProps:{value:t.localValue},on:{input:[function(e){e.target.composing||(t.localValue=e.target.value)},t.onInput]}}),t.clearable&&t.localValue?e("button",{staticClass:"clear",on:{click:function(e){t.modelValue=""}}},[e("svg",{attrs:{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"m6.8955 5 2.8429-2.8429c0.34886-0.34886 0.34886-0.91449 0-1.2636l-0.63182-0.63182c-0.34886-0.34886-0.91449-0.34886-1.2636 0l-2.8429 2.8429-2.8429-2.8429c-0.34886-0.34886-0.91449-0.34886-1.2636 0l-0.63182 0.63182c-0.34886 0.34886-0.34886 0.91449 0 1.2636l2.8429 2.8429-2.8429 2.8429c-0.34886 0.34886-0.34886 0.91449 0 1.2636l0.63182 0.63182c0.34886 0.34886 0.91477 0.34886 1.2636 0l2.8429-2.8429 2.8429 2.8429c0.34886 0.34886 0.91477 0.34886 1.2636 0l0.63182-0.63182c0.34886-0.34886 0.34886-0.91449 0-1.2636l-2.8429-2.8429z"}})])]):t._e()])},i=[],o=r("2ef0"),a={props:{value:String,debounce:Number,clearable:Boolean,placeholder:String,error:Boolean},data:function(){return{localValue:""}},computed:{modelValue:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{setOnInput:function(){var t=this;this.onInput=Object(o["debounce"])((function(e){t.modelValue=e.target.value}),this.debounce)}},watch:{value:{handler:function(t){this.localValue=t},immediate:!0}},created:function(){this.setOnInput()}},c=a,l=(r("02c5"),r("2877")),s=Object(l["a"])(c,n,i,!1,null,"4684e3c6",null);e["a"]=s.exports},"72cd":function(t,e,r){},"74bc":function(t,e,r){"use strict";r("dfa3")},"9e4c":function(t,e,r){},b26e:function(t,e,r){"use strict";var n=function(){var t,e=this,r=e._self._c;return r("v-select",{staticClass:"select",class:{select_compact:e.compact,select_error:e.error},attrs:{placeholder:e.placeholder,options:e.options,reduce:function(t){return t.value},value:e.value,clearable:null===(t=e.clearable)||void 0===t||t,searchable:e.inputMode,taggable:e.inputMode},on:{input:e.onInput,"option:selected":e.onOptionSelected,search:e.onSearch,close:e.onClose}})},i=[],o={props:{placeholder:String,options:{},value:{},clearable:Boolean,compact:Boolean,inputMode:Boolean,error:Boolean},data:function(){return{search:""}},methods:{onSearch:function(t){this.search=t},onInput:function(t){this.$emit("input",t),this.search=""},onClose:function(){this.inputMode&&this.search&&this.$emit("input",this.search)},onOptionSelected:function(t){this.inputMode&&t.label&&this.$emit("input",t.label)}}},a=o,c=(r("74bc"),r("2877")),l=Object(c["a"])(a,n,i,!1,null,"41e3b296",null);e["a"]=l.exports},bbff:function(t,e,r){"use strict";r("413d")},dfa3:function(t,e,r){},efd1:function(t,e,r){}}]);
//# sourceMappingURL=chunk-546d32c2.3d2660a6.js.map