(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d367d23"],{"0986":function(t,e,r){},"09ab":function(t,e,r){"use strict";r("be00")},"204b":function(t,e,r){"use strict";r("c792")},"222b":function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}var i=["Bytes","kB","MB","GB","TB","PB","EB"];t.exports=function(t,e,r,a,s){if("object"===n(e)){var o=e;e=o.nospace,r=o.one,a=o.places||1,s=o.numOnly}else a=a||1;for(var c,u=0;u<i.length;++u){var l=i[u];r&&(l=l.slice(0,1));var p,f=Math.pow(1024,u);t>=f&&(p=String((t/f).toFixed(a)),p.indexOf(".0")===p.length-2&&(p=p.slice(0,-2)),c=p+(e?"":" ")+l)}if(!c){var h=r?i[0].slice(0,1):i[0];c="0"+(e?"":" ")+h}return s&&(c=Number.parseFloat(c)),c}},"2d3b":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main"},[e("h1",{staticClass:"heading"},[t.query?[t._v("\n      "+t._s(t.$t("SHOWING_RESULTS_FOR",{query:t.query}))+"\n    ")]:[t._v("\n      "+t._s(t.$t("SEARCH"))+"\n    ")]],2),e("div",{staticClass:"wrapper"},[e("aside",{staticClass:"filters"},[e("filters",{attrs:{type:t.type,genre:t.genre}})],1),e("div",{ref:"apps",staticClass:"apps"},[t.isLoading||t.results.length?t._e():e("p",{staticClass:"not-found"},[t._v("\n        "+t._s(t.$t("NO_RESULTS_IN_SECTION",{section:t.genre&&t.$t(t.$store.getters.genres[t.type][t.genre].name.toUpperCase())||t.translateType(t.type)}))+"\n      ")]),t._l(t.results,(function(r){return e("app",{key:r.id,ref:"app",refInFor:!0,attrs:{app:r,type:t.type}})})),e("loader",{directives:[{name:"show",rawName:"v-show",value:!t.isLastPage,expression:"!isLastPage"}],staticClass:"apps__loader"})],2),e("aside",{staticClass:"categories"},[e("h2",{staticClass:"categories__heading"},[t._v(t._s(t.$t("EXPLORE_CATEGORIES")))]),e("ul",t._l(t.genres,(function(r){return e("li",{key:r.id,staticClass:"category"},[e("a",{staticClass:"category__link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.goToGenre(r.id)}}},[t._v("\n            "+t._s(t.$t(r.name.toUpperCase()))+"\n            "),e("span",{staticClass:"category__count"},[t._v(t._s(r.content_amount))])])])})),0)])])])},i=[],a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"filters"},[e("h2",{staticClass:"filters__heading"},[e("img",{staticClass:"filters__icon",attrs:{src:r("47d0")("./".concat(t.BRAND_KEY,"/images/icon-filter.svg"))}}),t._v("\n    "+t._s(t.$t("FILTER_BY"))+"\n  ")]),e("v-select",{staticClass:"select",attrs:{options:[{label:"Apple AppStore ".concat(this.$t("APPS")),value:"ios"},{label:"".concat(this.$t("{{brand}}")," Store ").concat(this.$t("APPS")),value:"cydia"},{label:"Apple TV ".concat(this.$t("APPS")),value:"tvos"}],reduce:function(t){return t.value},value:t.type,clearable:!1,searchable:!1},on:{input:function(e){return t.updateParams({type:e,genre:null})}}}),e("v-select",{staticClass:"select",attrs:{value:t.genre,options:t.genres,searchable:!1,reduce:function(t){return t.value},placeholder:t.$t("CATEGORY")},on:{input:function(e){return t.updateParams({genre:e})}}})],1)},s=[];function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e=p(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t){var e=f(t,"string");return"symbol"===o(e)?e:String(e)}function f(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var h={props:["type","genre","price"],computed:{genres:function(){var t=this;return this.$store.getters.genres[this.type]?Object.entries(this.$store.getters.genres[this.type]).map((function(e){return{label:t.$t(e[1].name.toUpperCase()),value:e[0]}})):[]}},methods:{updateParams:function(t){var e=u(u({},this.$route.query),t);Object.keys(e).forEach((function(t){e[t]||delete e[t]})),this.$router.push({query:e})}}},d=h,v=(r("e1c4"),r("2877")),y=Object(v["a"])(d,a,s,!1,null,"5cf14195",null),_=y.exports,g=r("612c"),m=r("555f"),b=r("2ef0");function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function O(t){return E(t)||A(t)||$(t)||S()}function S(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function $(t,e){if(t){if("string"===typeof t)return C(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?C(t,e):void 0}}function A(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function E(t){if(Array.isArray(t))return C(t)}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function P(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */P=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof _?e:_,s=Object.create(a.prototype),o=new x(n||[]);return i(s,"_invoke",{value:C(t,r,o)}),s}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var f="suspendedStart",h="suspendedYield",d="executing",v="completed",y={};function _(){}function g(){}function m(){}var b={};u(b,s,(function(){return this}));var O=Object.getPrototypeOf,S=O&&O(O(k([])));S&&S!==r&&n.call(S,s)&&(b=S);var $=m.prototype=_.prototype=Object.create(b);function A(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(i,a,s,o){var c=p(t[i],t,a);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==w(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,s,o)}),(function(t){r("throw",t,s,o)})):e.resolve(l).then((function(t){u.value=t,s(u)}),(function(t){return r("throw",t,s,o)}))}o(c.arg)}var a;i(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,i){r(t,n,e,i)}))}return a=a?a.then(i,i):i()}})}function C(e,r,n){var i=f;return function(a,s){if(i===d)throw new Error("Generator is already running");if(i===v){if("throw"===a)throw s;return{value:t,done:!0}}for(n.method=a,n.arg=s;;){var o=n.delegate;if(o){var c=L(o,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===f)throw i=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=d;var u=p(e,r,n);if("normal"===u.type){if(i=n.done?v:h,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(i=v,n.method="throw",n.arg=u.arg)}}}function L(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=p(i,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var s=a.arg;return s?s.done?(r[e.resultName]=s.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):s:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(e){if(e||""===e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(w(e)+" is not iterable")}return g.prototype=m,i($,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:g,configurable:!0}),g.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create($),t},e.awrap=function(t){return{__await:t}},A(E.prototype),u(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var s=new E(l(t,r,n,i),a);return e.isGeneratorFunction(r)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},A($),u($,c,"Generator"),u($,s,(function(){return this})),u($,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=k,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return o.type="throw",o.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a],o=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=n.call(s,"catchLoc"),u=n.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=t,s.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;I(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:k(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function L(t,e,r,n,i,a,s){try{var o=t[a](s),c=o.value}catch(u){return void r(u)}o.done?e(c):Promise.resolve(c).then(n,i)}function j(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function s(t){L(a,n,i,s,o,"next",t)}function o(t){L(a,n,i,s,o,"throw",t)}s(void 0)}))}}function I(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?I(Object(r),!0).forEach((function(e){k(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function k(t,e,r){return e=q(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function q(t){var e=T(t,"string");return"symbol"===w(e)?e:String(e)}function T(t,e){if("object"!==w(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var N={name:"search",components:{Filters:_,App:g["a"],Loader:m["a"]},data:function(){return{isLoading:!0,results:[],page:1,isLastPage:!1,params:x({},this.$route.query)}},computed:{title:function(){return this.$t("SEARCH")},query:function(){return this.$route.query.query},type:function(){var t=this.$route.query.type;return this.translateType(t)?t:"cydia"},dev:function(){return this.$route.query.dev},genre:function(){var t=this.$route.query.genre;return t&&!this.$store.getters.genres[this.type][t]?null:t},price:function(){var t=this.$route.query.price;return"1"!==t&&"2"!==t?null:t},genres:function(){return Object.values(this.$store.getters.genres[this.type]||{}).sort((function(t,e){return e.content_amount-t.content_amount}))}},methods:{translateType:function(t){var e={cydia:"".concat(this.$t("{{brand}}")," Store ").concat(this.$t("APPS")),ios:"Apple AppStore ".concat(this.$t("APPS")),tvos:"tvOS"};return e[t]},resetScroll:function(){var t=this;return j(P().mark((function e(){var r;return P().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:r=t.$refs.apps&&t.$refs.apps.getBoundingClientRect()||{top:-1},r.top<0&&window.scrollTo(0,0);case 4:case"end":return e.stop()}}),e)})))()},goToGenre:function(t){this.$router.push({query:x(x({},this.$route.query),{},{genre:t})})},search:function(t){var e=this;t||(this.results=[],this.page=1),this.isLoading=!0;var r={type:this.type};return this.query&&(r.q=this.query),this.dev&&(r.dev=this.dev),this.genre&&(r.genre=this.genre),this.price&&(r.price=this.price),t&&(r.page=t),this.$api.search(r).then((function(t){e.isLoading=!1,t.length<25&&(e.isLastPage=!0),e.results=[].concat(O(e.results),O(t))}))},handleScroll:Object(b["throttle"])((function(){if(!this.isLoading&&!this.isLastPage&&this.$refs.app&&"search"===this.$route.name){var t=this.results.length-20,e=this.$refs.app[t>=0?t:0];if(e){var r=e.$el.offsetTop;window.scrollY>r&&(this.page=this.page+1,this.search(this.page))}}}),1e3)},watch:{"$route.query":{handler:function(){"search"!==this.$route.name||Object(b["isEqual"])(this.$route.query,this.params)||(this.params=x({},this.$route.query),this.isLastPage=!1,this.resetScroll(),this.search())},deep:!0}},serverPrefetch:function(){return this.search()},created:function(){this.search()},mounted:function(){this.resetScroll(),window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},D=N,R=(r("204b"),Object(v["a"])(D,n,i,!1,null,"4662e255",null));e["default"]=R.exports},"47d0":function(t,e,r){var n={"./AppAddict/images/icon-filter.svg":"cccc","./appdb/images/icon-filter.svg":"0316"};function i(t){var e=a(t);return r(e)}function a(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=a,t.exports=i,i.id="47d0"},"5d09":function(t,e,r){t.exports=r.p+"img/icon-arrow.73c1f51b.svg"},"612c":function(t,e,r){"use strict";var n=function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"app",class:{app_store:t.isInStore},attrs:{tag:"div",to:t.computedLink}},[[t.icon&&!t.iconFailedToLoad?e("v-lazy-image",{staticClass:"app__icon",attrs:{src:t.icon,"intersection-options":{rootMargin:"500px"}},on:{error:function(e){t.iconFailedToLoad=!0},load:function(e){t.iconLoaded=!0}}}):e("div",{staticClass:"app__empty-icon"})],e("div",{staticClass:"app__desc"},[e("span",{staticClass:"app__title"},[t._v("\n      "+t._s(t.app.name)+" "),t.isInStore?e("span",[t._v("("+t._s(t.app.bundle_id)+")")]):t._e(),t.app.original_trackid&&"0"!==t.app.original_trackid?e("span",{staticClass:"app__badge"},[t._v(t._s(t.$t("TWEAKED")))]):t._e()]),t.isUpdatable?t._e():e("div",{staticClass:"app__info"},[t.app.version||t.app.bundle_version?e("span",{staticClass:"app__version"},[t._v("v "+t._s(t.app.version||t.app.bundle_version))]):t._e(),t.app.size?e("span",{staticClass:"app__size"},[t._v(t._s(t.prettysize(t.app.size)))]):t._e(),t.isInStore?e("span",{staticClass:"app__public"},[t._v("\n        "+t._s(t.app.is_public?t.$t("PUBLIC"):t.$t("PRIVATE"))+"\n      ")]):t._e(),t.app.price?e("span",{staticClass:"app__price"},[e("img",{staticClass:"app__price-icon",attrs:{src:r("8663")}}),t._v("\n        "+t._s(t.$t(t.app.price.toUpperCase())))]):t._e(),t.isInStore?t._e():e("router-link",{staticClass:"app__category",attrs:{to:"/search/?type=".concat(t.type,"&genre=").concat(t.app.genre_id)}},[t._v(t._s(t.app.genre_id&&t.genres[t.type][t.app.genre_id]&&t.$t(t.genres[t.type][t.app.genre_id].name.toUpperCase())))])],1),t.isRequestable||t.isUpdatable||t.isInStore||!+t.app.artist_id?t._e():e("router-link",{staticClass:"app__publisher",attrs:{to:"/search/?type=".concat(t.type,"&dev=").concat(t.app.artist_id)}},[t._v(t._s(t.app.pname))]),t.isRequestable?e("p",{staticClass:"app__status"},[t._v("\n      "+t._s(t.$t([t.app.status.toUpperCase(),t.app.status]))+" "+t._s(t.$t("SINCE"))+"\n      "+t._s(t.formatDate(1e3*t.app.status_changed_at))+"\n    ")]):t._e(),t.isUpdatable?e("span",{staticClass:"app__update"},[t._v("\n      v "+t._s(t.app.version_old)),e("img",{staticClass:"app__update-icon",attrs:{src:r("5d09")}}),t._v("v\n      "+t._s(t.app.version_new)+"\n    ")]):t._e(),t.isUpdatable&&!t.app.updateable?e("span",{staticClass:"app__update-warning"},[t._v(t._s(t.$t("NOT_UPDATEABLE")))]):t._e(),t.compatibilityString?e("span",[t._v("\n      "+t._s(t.compatibilityString)+"\n    ")]):t._e()],1),t.isRequestable?e("div",{staticClass:"app__request request",class:{request_active:t.app.am_i_requested}},[e("div",{staticClass:"request__info",on:{click:function(e){return e.preventDefault(),t.$emit("request")}}},[e("span",{staticClass:"request__button"},[t._v("+1")]),e("svg",{staticClass:"request__icon",attrs:{version:"1.1",viewBox:"0 0 14 9",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{staticClass:"request__icon-fill",attrs:{transform:"translate(-893 -259)",fill:"#8D8D8D","fill-rule":"nonzero"}},[e("g",{attrs:{transform:"translate(825 248)"}},[e("g",{attrs:{transform:"translate(28)"}},[e("g",{attrs:{transform:"translate(4 4)"}},[e("g",{attrs:{transform:"translate(36 2)"}},[e("path",{attrs:{d:"m9.324 9.674c0.504 0 1.064 0.074666 1.68 0.224 0.68134 0.17733 1.2367 0.406 1.666 0.686 0.504 0.336 0.756 0.714 0.756 1.134v1.456h-3.5v-1.456c0-0.79334-0.38266-1.4653-1.148-2.016 0.13067-0.018667 0.31267-0.028 0.546-0.028zm-4.648 0c0.504 0 1.0593 0.074666 1.666 0.224 0.68134 0.17733 1.232 0.406 1.652 0.686 0.504 0.336 0.756 0.714 0.756 1.134v1.456h-8.176v-1.456c0-0.42 0.252-0.798 0.756-1.134 0.42934-0.28 0.98466-0.50867 1.666-0.686 0.616-0.14933 1.176-0.224 1.68-0.224zm0-1.148c-0.308 0-0.59733-0.079333-0.868-0.238s-0.48533-0.37333-0.644-0.644-0.238-0.56-0.238-0.868 0.079333-0.59733 0.238-0.868 0.37333-0.48533 0.644-0.644 0.56-0.238 0.868-0.238 0.595 0.079333 0.861 0.238 0.476 0.371 0.63 0.637 0.231 0.55767 0.231 0.875-0.076999 0.609-0.231 0.875-0.364 0.47833-0.63 0.637-0.553 0.238-0.861 0.238zm4.648 0c-0.308 0-0.59733-0.079333-0.868-0.238s-0.48533-0.37333-0.644-0.644-0.238-0.56-0.238-0.868 0.079333-0.59733 0.238-0.868 0.37333-0.48533 0.644-0.644 0.56-0.238 0.868-0.238 0.59733 0.079333 0.868 0.238c0.27067 0.15867 0.48533 0.37333 0.644 0.644s0.238 0.56 0.238 0.868-0.079332 0.59733-0.238 0.868-0.37333 0.48533-0.644 0.644c-0.27067 0.15867-0.56 0.238-0.868 0.238z"}})])])])])])])]),e("span",{staticClass:"request__num"},[t._v(t._s(t.app.requesters_amount))])]),e("i18next",{directives:[{name:"show",rawName:"v-show",value:!t.app.am_i_requested,expression:"!app.am_i_requested"}],staticClass:"request__text",attrs:{tag:"span",path:"PLUS_1_IF_YOU_WANT_THIS"}},[e("span",{staticClass:"request__plus"},[t._v("+1")])])],1):t._e(),t.isInStore?e("div",{staticClass:"actions"},[e("button",{staticClass:"actions__install",class:{actions__install_disabled:t.installingIpa},on:{click:t.installIpa}},[e("img",{staticClass:"actions__install-icon",attrs:{src:r("8d1a")("./".concat(t.BRAND_KEY,"/images/icon-install-primary.svg"))}}),t._v("\n      "+t._s(t.$t("INSTALL"))+"\n      "),t.installingIpa?[e("div",{staticClass:"actions__loader"},[e("div",{staticClass:"actions__loader-dot"}),e("div",{staticClass:"actions__loader-dot"}),e("div",{staticClass:"actions__loader-dot"})]),e("div",{staticClass:"actions__tooltip"},[t._v(t._s(t.$t("REQUESTING"))+"...")])]:t._e()],2),e("router-link",{attrs:{to:"/details/".concat(t.app.universal_object_identifier,"?id=").concat(t.app.id,"&editMode")}},[t._v(t._s(t.$t("EDIT_METADATA")))]),e("button",{staticClass:"actions__remove",on:{click:function(e){return e.preventDefault(),t.deleteIpa.apply(null,arguments)}}},[t._v("\n      "+t._s(t.deletingIpa?t.$t("APP_REMOVING"):t.$t("REMOVE"))+"\n    ")])],1):t._e()],2)},i=[],a=r("222b"),s=r.n(a),o=r("7fe0"),c=r("d7a2"),u=r("f601"),l={mixins:[o["a"]],components:{VLazyImage:c["a"]},props:{isRequestable:Boolean,isUpdatable:Boolean,isInStore:Boolean,isInRepo:Boolean,app:Object,type:String,repoId:String,index:Number,link:String},data:function(){return{deletingIpa:!1,installingIpa:!1,iconFailedToLoad:!1,iconLoaded:!1}},computed:{computedLink:function(){return this.link?this.link:this.isInStore?"":"/app/".concat(this.type||this.app.type,"/").concat(this.isRequestable||this.isUpdatable?this.app.trackid:this.app.id)},genres:function(){return this.$store.getters.genres},compatibilityString:function(){var t=this,e=u["a"].filter((function(e){var r=e.name;return t.app["min_".concat(r,"_version")]})).map((function(t){var e=t.device;return e}));return e.length?this.$t("FOR_X",[e.join(", ")]):""},icon:function(){return this.app.image||this.app.iconURL||this.app.icon_uri}},methods:{formatDate:function(t){return new Date(t).toLocaleString()},deleteIpa:function(){var t=this;this.isInStore&&!this.deletingIpa&&this.$confirm(this.$t("DELETE_APP_WARNING")).then((function(){t.deletingIpa=!0,t.$api.deleteIpa(t.app.id).then((function(){t.$emit("deleted")}))}))},installIpa:function(){var t=this;this.installingIpa||(this.app.no_installation_ticket_failure_reason?this.$notify({type:"error",text:this.app.no_installation_ticket_failure_reason.translated}):(this.installingIpa=!0,this.installApp(this.app.id,"universal",{installationTicket:this.app.installation_ticket}).finally((function(){t.installingIpa=!1}))))},prettysize:s.a}},p=l,f=(r("09ab"),r("2877")),h=Object(f["a"])(p,n,i,!1,null,"5d9c736d",null);e["a"]=h.exports},8663:function(t,e,r){t.exports=r.p+"img/icon-price.86bac56f.svg"},"8d1a":function(t,e,r){var n={"./AppAddict/images/icon-install-primary.svg":"ffc5","./appdb/images/icon-install-primary.svg":"ea47"};function i(t){var e=a(t);return r(e)}function a(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=a,t.exports=i,i.id="8d1a"},be00:function(t,e,r){},c792:function(t,e,r){},d7a2:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n={props:{src:{type:String,required:!0},srcPlaceholder:{type:String,default:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},srcset:{type:String},intersectionOptions:{type:Object,default:function(){return{}}},usePicture:{type:Boolean,default:!1}},inheritAttrs:!1,data:function(){return{observer:null,intersected:!1,loaded:!1}},computed:{srcImage:function(){return this.intersected&&this.src?this.src:this.srcPlaceholder},srcsetImage:function(){return!(!this.intersected||!this.srcset)&&this.srcset}},methods:{load:function(){this.$el&&this.$el.getAttribute("src")!==this.srcPlaceholder&&(this.loaded=!0,this.$emit("load",this.$el))},error:function(){this.$emit("error",this.$el)}},render:function(t){var e=t("img",{attrs:{src:this.srcImage,srcset:this.srcsetImage},domProps:this.$attrs,class:{"v-lazy-image":!0,"v-lazy-image-loaded":this.loaded},on:{load:this.load,error:this.error}});return this.usePicture?t("picture",{on:{load:this.load}},this.intersected?[this.$slots.default,e]:[e]):e},mounted:function(){var t=this;"IntersectionObserver"in window&&(this.observer=new IntersectionObserver((function(e){var r=e[0];r.isIntersecting&&(t.intersected=!0,t.observer.disconnect(),t.$emit("intersect"))}),this.intersectionOptions),this.observer.observe(this.$el))},destroyed:function(){"IntersectionObserver"in window&&this.observer.disconnect()}}},e1c4:function(t,e,r){"use strict";r("0986")}}]);
//# sourceMappingURL=chunk-0d367d23.1a46e983.js.map