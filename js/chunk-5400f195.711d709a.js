(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5400f195"],{"1db0":function(t,e,r){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"filters"},[e("v-input",{staticClass:"filter",attrs:{placeholder:t.$t("NAME"),debounce:500,clearable:""},model:{value:t.filters.name,callback:function(e){t.$set(t.filters,"name",e)},expression:"filters.name"}}),e("v-select",{staticClass:"filter",attrs:{placeholder:t.$t("CATEGORY"),options:t.genresOptions,clearable:""},model:{value:t.filters.genre_id,callback:function(e){t.$set(t.filters,"genre_id",e)},expression:"filters.genre_id"}}),e("v-input",{staticClass:"filter",attrs:{placeholder:t.$t("DEVELOPER"),debounce:500,clearable:""},model:{value:t.filters.developer_name,callback:function(e){t.$set(t.filters,"developer_name",e)},expression:"filters.developer_name"}}),e("v-select",{staticClass:"filter",attrs:{placeholder:t.$t("TYPE"),options:t.typesOptions,clearable:""},model:{value:t.filters.type,callback:function(e){t.$set(t.filters,"type",e)},expression:"filters.type"}}),e("v-select",{staticClass:"filter",attrs:{placeholder:t.$t("DEVICE"),options:t.devicesOptions,clearable:""},model:{value:t.filters.compatibility,callback:function(e){t.$set(t.filters,"compatibility",e)},expression:"filters.compatibility"}}),e("v-input",{staticClass:"filter",attrs:{placeholder:t.$t("SOURCE"),debounce:500,clearable:""},model:{value:t.filters.source_name,callback:function(e){t.$set(t.filters,"source_name",e)},expression:"filters.source_name"}}),t.saveToUrl?e("v-button",{staticClass:"filters__button",attrs:{type:"primary"},nativeOn:{click:function(e){return t.$modal.show("sharePage")}}},[t._v("\n      "+t._s(t.$t("SHARE_YOUR_SEARCH"))+"\n    ")]):t._e(),e("share-page-modal")],1)},i=[],o=r("6cdc"),a=r("b26e"),s=r("2a7d"),l=r("2f62"),c=r("2ef0"),u=r("f601"),f=r("3571");function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function h(t,e){return b(t)||m(t,e)||v(t,e)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function v(t,e){if(t){if("string"===typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(t,e):void 0}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function m(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,o,a,s=[],l=!0,c=!1;try{if(o=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(s.push(n.value),s.length!==e);l=!0);}catch(t){c=!0,i=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw i}}return s}}function b(t){if(Array.isArray(t))return t}function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){w(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function w(t,e,r){return e=O(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function O(t){var e=S(t,"string");return"symbol"===p(e)?e:String(e)}function S(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var j={components:{VInput:o["a"],VSelect:a["a"],VButton:s["a"],SharePageModal:f["a"]},props:{value:Object,saveToUrl:Boolean,initialFilters:Object},data:function(){return{isActive:!0,filters:{name:"",genre_id:null,developer_name:"",type:"",compatibility:"",source_name:""},devicesOptions:u["a"].map((function(t){var e=t.name,r=t.device;return{label:r,value:e}}))}},computed:_(_({},Object(l["f"])(["genres"])),{},{genresOptions:function(){return Object.values(this.genres.official).map((function(t){return{label:t.name,value:t.id}}))},typesOptions:function(){var t=this;return["user_app","repo_app"].map((function(e){return{label:t.$t(e.toUpperCase()),value:e}}))}}),methods:{trySetUrl:function(){var t=this;if(this.saveToUrl){var e=Object.fromEntries(Object.entries(this.filters).filter((function(t){var e=h(t,2),r=e[1];return r})).map((function(t){var e=h(t,2),r=e[0],n=e[1];return[r,n.toString()]}))),r=Object.fromEntries(Object.entries(this.$route.query).filter((function(e){var r=h(e,1),n=r[0];return!(n in t.filters)}))),n=_(_({},e),r);Object(c["isEqual"])(this.$route.query,n)||this.$router.push({path:this.$route.path,query:n})}},tryParseUrl:function(){if(this.saveToUrl){var t=this.filters,e=Object(c["clone"])(t);for(var r in e)e[r]=this.parseQueryParam(this.$route.query,r);Object(c["isEqual"])(t,e)||(this.filters=e)}},parseQueryParam:function(t,e){switch(e){case"genre_id":return+t[e]||null;default:return t[e]||""}},trySetInitialFilters:function(){if(this.initialFilters&&!Object.values(this.filters).some(Boolean))for(var t in this.initialFilters)t in this.filters&&(this.filters[t]=this.initialFilters[t])}},watch:{isActive:function(){this.isActive&&this.tryParseUrl()},"$route.query":{handler:function(){this.isActive&&this.tryParseUrl()},deep:!0},value:{handler:function(){if(!Object(c["isEqual"])(this.filters,this.value))for(var t in this.value)this.filters[t]=this.value[t]},deep:!0,immediate:!0},filters:{handler:function(){this.$emit("input",Object(c["clone"])(this.filters)),this.trySetUrl()},deep:!0}},created:function(){this.tryParseUrl(),this.trySetInitialFilters()},activated:function(){this.isActive=!0},deactivated:function(){this.isActive=!1}},E=j,P=(r("567c"),r("2877")),x=Object(P["a"])(E,n,i,!1,null,"6b6d41f3",null);e["a"]=x.exports},3571:function(t,e,r){"use strict";var n=function(){var t=this,e=t._self._c;return e("v-modal",{attrs:{name:t.modalName,width:350,height:"auto"},scopedSlots:t._u([{key:"footer",fn:function(){return[e("v-button",{nativeOn:{click:function(e){return t.$modal.hide(t.modalName)}}},[t._v(t._s(t.$t("CANCEL")))])]},proxy:!0}])},[e("div",{staticClass:"wrapper"},[e("v-input",{staticClass:"wrapper__input",attrs:{value:t.href,readonly:""}}),e("v-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.copy.apply(null,arguments)}}},[t._v(t._s(t.$t("COPY")))])],1)])},i=[];function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.target,n=void 0===r?document.body:r;if("string"!==typeof t)throw new TypeError("Expected parameter `text` to be a `string`, got `".concat(o(t),"`."));var i=document.createElement("textarea"),a=document.activeElement;i.value=t,i.setAttribute("readonly",""),i.style.contain="strict",i.style.position="absolute",i.style.left="-9999px",i.style.fontSize="12pt";var s=document.getSelection(),l=s.rangeCount>0&&s.getRangeAt(0);n.append(i),i.select(),i.selectionStart=0,i.selectionEnd=t.length;var c=!1;try{c=document.execCommand("copy")}catch(u){}return i.remove(),l&&(s.removeAllRanges(),s.addRange(l)),a&&a.focus(),c}var s=r("eacb"),l=r("6cdc"),c=r("2a7d"),u={components:{VModal:s["a"],VInput:l["a"],VButton:c["a"]},data:function(){return{modalName:"sharePage"}},computed:{href:function(){var t=new URL(this.$route.fullPath,location.origin);return t.toString()}},methods:{copy:function(){var t=a(this.href);if(t)return this.$notify({type:"success",text:this.$t("SHARE_LINK_COPIED")}),void this.$modal.hide(this.modalName);this.$notify({type:"error",text:this.$t("SOMETHING_WENT_WRONG")})}}},f=u,p=(r("5c17"),r("2877")),h=Object(p["a"])(f,n,i,!1,null,"2507aa22",null);e["a"]=h.exports},"4d6b":function(t,e,r){"use strict";r("b128")},"55c3":function(t,e,r){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search"},[t.hideFilters?t._e():e("universal-filters",{staticClass:"search__filters",attrs:{"save-to-url":t.saveFiltersToUrl},model:{value:t.search.filters,callback:function(e){t.$set(t.search,"filters",e)},expression:"search.filters"}}),t.$slots.instruction?e("div",{staticClass:"search__instruction"},[t._t("instruction")],2):t._e(),t.search.result.length||t.search.isSearching?t._e():e("p",[t._v(t._s(t.$t("NOTHING_WAS_FOUND")))]),e("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.onInfiniteScroll,expression:"onInfiniteScroll"}],staticClass:"search__result"},t._l(t.search.result,(function(r){return e("universal-app",{key:r.universal_object_identifier,attrs:{app:r,shareable:t.appShareable},on:{"update-filters":t.updateFilters},scopedSlots:t._u([{key:"custom-action",fn:function(e){var r=e.app;return[t._t("app-custom-action",null,{app:r})]}}],null,!0)})})),1),t.search.isSearching||t.search.pagination.isLastPage||!t.isPaginationManual?t._e():e("div",{staticClass:"search__load-more"},[e("v-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.loadNextSearchPage.apply(null,arguments)}}},[t._v(t._s(t.$t("LOAD_MORE")))])],1),t.search.pagination.isLastPage||t.isPaginationManual&&!t.search.isSearching?t._e():e("v-loader",{staticClass:"search__loading-spinner",class:{"search__loading-spinner_visible":t.search.isSearching}})],1)},i=[],o=r("a53c"),a=r("2ef0"),s=r("2a7d"),l=r("1db0"),c=function(){var t,e=this,r=e._self._c;return r("div",{staticClass:"app",on:{click:e.onClick}},[r("div",{staticClass:"header"},[e.app.icon_uri&&!e.iconFailedToLoad?r("img",{staticClass:"icon",attrs:{src:e.app.icon_uri},on:{error:function(t){e.iconFailedToLoad=!0}}}):r("div",{staticClass:"icon icon_stub"}),r("div",{staticClass:"info"},[r("div",{staticClass:"name line"},[r("button",{staticClass:"filterable ellipsis",on:{click:function(t){return e.updateFilters("name")}}},[e._v(e._s(e.app.name))]),e._v(",\n        "),r("button",{staticClass:"filterable ellipsis",on:{click:function(t){return e.updateFilters("developer_name")}}},[e._v("\n          "+e._s(e.app.developer_name)+"\n        ")])]),e.app.lead?r("div",{staticClass:"desktop line ellipsis"},[e._v(e._s(e.app.lead))]):e._e(),r("div",[e._v("v. "+e._s(e.app.version))])])]),e.app.lead?r("div",{staticClass:"lead mobile"},[e._v(e._s(e.app.lead))]):e._e(),r("div",{staticClass:"details"},[r("div",{staticClass:"line"},[e._v("\n      "+e._s(e.$t("SOURCE"))+":\n      "),r("button",{staticClass:"filterable ellipsis",on:{click:function(t){return e.updateFilters("source_name")}}},[e._v(e._s(e.app.source_name)+"\n      ")])]),r("div",{staticClass:"line"},[r("button",{staticClass:"filterable ellipsis",on:{click:function(t){return e.updateFilters("type")}}},[e._v("\n        "+e._s(e.$t(null===(t=e.app.type)||void 0===t?void 0:t.toUpperCase()))+"\n      ")])]),e.app.genre_id?r("div",{staticClass:"line"},[r("button",{staticClass:"filterable ellipsis",on:{click:function(t){return e.updateFilters("genre_id")}}},[e._v(e._s(e.genre))])]):e._e()]),e.$scopedSlots["custom-action"]?r("div",{staticClass:"actions"},[e._t("custom-action",null,{app:e.app})],2):e._e()])},u=[],f=r("2f62"),p=r("f601"),h=r("7fe0");function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */v=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),s=new T(n||[]);return i(a,"_invoke",{value:C(t,r,s)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var p="suspendedStart",h="suspendedYield",y="executing",m="completed",b={};function g(){}function _(){}function w(){}var O={};c(O,a,(function(){return this}));var S=Object.getPrototypeOf,j=S&&S(S(A([])));j&&j!==r&&n.call(j,a)&&(O=j);var E=w.prototype=g.prototype=Object.create(O);function P(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(i,o,a,s){var l=f(t[i],t,o);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"==d(u)&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(u).then((function(t){c.value=t,a(c)}),(function(t){return r("throw",t,a,s)}))}s(l.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,i){r(t,n,e,i)}))}return o=o?o.then(i,i):i()}})}function C(e,r,n){var i=p;return function(o,a){if(i===y)throw new Error("Generator is already running");if(i===m){if("throw"===o)throw a;return{value:t,done:!0}}for(n.method=o,n.arg=a;;){var s=n.delegate;if(s){var l=$(s,n);if(l){if(l===b)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===p)throw i=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=y;var c=f(e,r,n);if("normal"===c.type){if(i=n.done?m:h,c.arg===b)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=m,n.method="throw",n.arg=c.arg)}}}function $(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,$(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var o=f(i,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,b;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,b):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(d(e)+" is not iterable")}return _.prototype=w,i(E,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:_,configurable:!0}),_.displayName=c(w,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,c(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},P(x.prototype),c(x.prototype,s,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new x(u(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(E),c(E,l,"Generator"),c(E,a,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),b}},e}function y(t,e,r,n,i,o,a){try{var s=t[o](a),l=s.value}catch(c){return void r(c)}s.done?e(l):Promise.resolve(l).then(n,i)}function m(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){y(o,n,i,a,s,"next",t)}function s(t){y(o,n,i,a,s,"throw",t)}a(void 0)}))}}function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){_(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function _(t,e,r){return e=w(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function w(t){var e=O(t,"string");return"symbol"===d(e)?e:String(e)}function O(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var S={mixins:[h["a"]],props:{app:Object,shareable:Boolean},data:function(){return{iconFailedToLoad:!1,isInstalling:!1}},computed:g(g({},Object(f["f"])(["genres"])),{},{genre:function(){var t,e=this;return null===(t=Object.values(this.genres.official).find((function(t){return t.id===e.app.genre_id})))||void 0===t?void 0:t.name},compatibleOperatingSystems:function(){var t=this;return p["a"].filter((function(e){var r=e.name;return t.app["min_".concat(r,"_version")]}))}}),methods:{updateFilters:function(t){"string"!==typeof t?this.$emit("update-filters",t):this.$emit("update-filters",_({},t,this.app[t]))},onClick:function(t){t.target.closest("button")||this.$router.push("/details/".concat(this.app.universal_object_identifier))},install:function(){var t=this;return m(v().mark((function e(){return v().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.app.no_installation_ticket_failure_reason){e.next=3;break}return t.$notify({type:"error",text:t.app.no_installation_ticket_failure_reason.translated}),e.abrupt("return");case 3:return t.isInstalling=!0,e.prev=4,e.next=7,t.installApp(t.app.object.id,"universal",{installationTicket:t.app.installation_ticket});case 7:return e.prev=7,t.isInstalling=!1,e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[4,,7,10]])})))()}}},j=S,E=(r("83be"),r("2877")),P=Object(E["a"])(j,c,u,!1,null,"36d6540f",null),x=P.exports;function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function $(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function k(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?$(Object(r),!0).forEach((function(e){L(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function L(t,e,r){return e=T(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function T(t){var e=A(t,"string");return"symbol"===C(e)?e:String(e)}function A(t,e){if("object"!==C(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var F={mixins:[o["a"]],components:{UniversalFilters:l["a"],UniversalApp:x,VButton:s["a"]},props:{appShareable:Boolean,saveFiltersToUrl:Boolean,hideFilters:Boolean,filters:Object},data:function(){return{search:{apiMethod:"searchIndex",filters:{},pagination:{isManual:!1}}}},computed:{isPaginationManual:function(){return this.search.pagination.page>2}},methods:{updateFilters:function(t){this.$set(this.search,"filters",k(k({},this.filters),t))},onInfiniteScroll:function(){this.isPaginationManual||this.loadNextSearchPage()}},watch:{filters:{handler:function(){Object(a["isEqual"])(this.search.filters,this.filters)||this.updateFilters(this.filters)},deep:!0,immediate:!0},"search.filters":{handler:function(){Object(a["isEqual"])(this.search.filters,this.filters)||this.$emit("update:filters",Object(a["clone"])(this.search.filters))},deep:!0}}},N=F,I=(r("6fe8"),Object(E["a"])(N,n,i,!1,null,"42f3a696",null));e["a"]=I.exports},"567c":function(t,e,r){"use strict";r("b494")},"5c17":function(t,e,r){"use strict";r("5f63")},"5f63":function(t,e,r){},"60dc":function(t,e,r){t.exports=r.p+"img/icon-x.22d25c85.svg"},6161:function(t,e,r){},"6fe8":function(t,e,r){"use strict";r("6161")},"83be":function(t,e,r){"use strict";r("a3a6")},a3a6:function(t,e,r){},b128:function(t,e,r){},b494:function(t,e,r){},eacb:function(t,e,r){"use strict";var n=function(){var t=this,e=t._self._c;return t.$modal?e("modal",{staticClass:"modal",class:{"modal_w-close-button":t.closeButton,"modal_w-footer":t.hasFooter},attrs:{name:t.name,pivotY:.1,width:t.width,height:t.height,adaptive:"",overlayTransition:""},on:{opened:function(e){t.isVisible=!0},closed:function(e){t.isVisible=!1}}},[e("div",{ref:"modalBody",staticClass:"modal__body"},[t.closeButton?e("button",{staticClass:"modal__close-button",on:{click:function(e){return t.$modal.hide(t.name)}}},[e("img",{attrs:{src:r("60dc")}})]):t._e(),t._t("default")],2),t.hasFooter?e("footer",{staticClass:"modal__footer"},[t._t("footer")],2):t._e()]):t._e()},i=[],o=function(){return"undefined"===typeof window},a=function(t){t=t||navigator.userAgent;var e=/(iPad).*OS\s([\d_]+)/.test(t),r=!e&&/(iPhone\sOS)\s([\d_]+)/.test(t),n=/(Android);?[\s/]+([\d.]+)?/.test(t),i=r||e;return{ios:i,android:n}};function s(t){if(o())return!1;if(!t)throw new Error("options must be provided");var e=!1,r={get passive(){e=!0}},n=function(){},i="__TUA_BSL_TEST_PASSIVE__";window.addEventListener(i,n,r),window.removeEventListener(i,n,r);var a=t.capture;return e?t:"undefined"!==typeof a&&a}var l=0,c=0,u=0,f=null,p=!1,h=[],d=s({passive:!1}),v=!o()&&"scrollBehavior"in document.documentElement.style,y=function(){var t=document.documentElement,e=Object.assign({},t.style),r=window.innerWidth-t.clientWidth,n=parseInt(window.getComputedStyle(t).paddingRight,10);return t.style.overflow="hidden",t.style.boxSizing="border-box",t.style.paddingRight="".concat(r+n,"px"),function(){["overflow","boxSizing","paddingRight"].forEach((function(r){t.style[r]=e[r]||""}))}},m=function(t){var e=document.documentElement,r=document.body,n=e.scrollTop||r.scrollTop,i=Object.assign({},e.style),o=Object.assign({},r.style);return e.style.height="100%",e.style.overflow="hidden",r.style.top="-".concat(n,"px"),r.style.width="100%",r.style.height="auto",r.style.position="fixed",r.style.overflow=(null===t||void 0===t?void 0:t.overflowType)||"hidden",function(){e.style.height=i.height||"",e.style.overflow=i.overflow||"",["top","width","height","overflow","position"].forEach((function(t){r.style[t]=o[t]||""}));var t={top:n,behavior:"instant"};v?window.scrollTo(t):window.scrollTo(0,n)}},b=function(t){t.cancelable&&t.preventDefault()},g=function(t,e){if(e){var r=e.scrollTop,n=e.scrollLeft,i=e.scrollWidth,o=e.scrollHeight,a=e.clientWidth,s=e.clientHeight,l=t.targetTouches[0].clientX-u,f=t.targetTouches[0].clientY-c,p=Math.abs(f)>Math.abs(l),h=f>0&&0===r,d=l>0&&0===n,v=l<0&&n+a+1>=i,y=f<0&&r+s+1>=o;if(p&&(h||y)||!p&&(d||v))return b(t)}return t.stopPropagation(),!0},_=function(t){},w=function(t,e){if(!o()){if(_(t),a().ios){if(t){var r=Array.isArray(t)?t:[t];r.forEach((function(t){t&&-1===h.indexOf(t)&&(t.ontouchstart=function(t){c=t.targetTouches[0].clientY,u=t.targetTouches[0].clientX},t.ontouchmove=function(e){1===e.targetTouches.length&&g(e,t)},h.push(t))}))}p||(document.addEventListener("touchmove",b,d),p=!0)}else l<=0&&(f=a().android?m(e):y());l+=1}},O=function(t){if(!o()&&(_(t),l-=1,!(l>0)))if(a().ios||"function"!==typeof f){if(t){var e=Array.isArray(t)?t:[t];e.forEach((function(t){var e=h.indexOf(t);-1!==e&&(t.ontouchmove=null,t.ontouchstart=null,h.splice(e,1))}))}p&&(document.removeEventListener("touchmove",b,d),p=!1)}else f()},S={props:{name:String,width:Number,height:{},closeButton:Boolean},data:function(){return{isVisible:!1}},computed:{hasFooter:function(){return Boolean(this.$slots.footer)}},methods:{lockScroll:function(){w(this.$refs.modalBody)},unlockScroll:function(){O(this.$refs.modalBody)}},watch:{isVisible:function(){this.isVisible?this.lockScroll():this.unlockScroll()}},beforeDestroy:function(){this.unlockScroll()}},j=S,E=(r("4d6b"),r("2877")),P=Object(E["a"])(j,n,i,!1,null,"56bf84d2",null);e["a"]=P.exports}}]);
//# sourceMappingURL=chunk-5400f195.711d709a.js.map