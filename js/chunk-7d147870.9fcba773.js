(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d147870"],{"0069":function(t,e,r){"use strict";r("d3bb")},"0986":function(t,e,r){},"204b":function(t,e,r){"use strict";r("c792")},"222b":function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}var i=["Bytes","kB","MB","GB","TB","PB","EB"];t.exports=function(t,e,r,o,a){if("object"===n(e)){var s=e;e=s.nospace,r=s.one,o=s.places||1,a=s.numOnly}else o=o||1;for(var c,u=0;u<i.length;++u){var l=i[u];r&&(l=l.slice(0,1));var p,f=Math.pow(1024,u);t>=f&&(p=String((t/f).toFixed(o)),p.indexOf(".0")===p.length-2&&(p=p.slice(0,-2)),c=p+(e?"":" ")+l)}if(!c){var h=r?i[0].slice(0,1):i[0];c="0"+(e?"":" ")+h}return a&&(c=Number.parseFloat(c)),c}},"2d3b":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main"},[e("h1",{staticClass:"heading"},[t.query?[t._v("\n      "+t._s(t.$t("SHOWING_RESULTS_FOR",{query:t.query}))+"\n    ")]:[t._v("\n      "+t._s(t.$t("SEARCH"))+"\n    ")]],2),e("div",{staticClass:"wrapper"},[e("aside",{staticClass:"filters"},[e("filters",{attrs:{type:t.type,genre:t.genre}})],1),e("div",{ref:"apps",staticClass:"apps"},[t.isLoading||t.results.length?t._e():e("p",{staticClass:"not-found"},[t._v("\n        "+t._s(t.$t("NO_RESULTS_IN_SECTION",{section:t.genre&&t.$t(t.$store.getters.genres[t.type][t.genre].name.toUpperCase())||t.translateType(t.type)}))+"\n      ")]),t._l(t.results,(function(r){return e("app",{key:r.id,ref:"app",refInFor:!0,attrs:{app:r,type:t.type}})})),e("loader",{directives:[{name:"show",rawName:"v-show",value:!t.isLastPage,expression:"!isLastPage"}],staticClass:"apps__loader"})],2),e("aside",{staticClass:"categories"},[e("h2",{staticClass:"categories__heading"},[t._v(t._s(t.$t("EXPLORE_CATEGORIES")))]),e("ul",t._l(t.genres,(function(r){return e("li",{key:r.id,staticClass:"category"},[e("a",{staticClass:"category__link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.goToGenre(r.id)}}},[t._v("\n            "+t._s(t.$t(r.name.toUpperCase()))+"\n            "),e("span",{staticClass:"category__count"},[t._v(t._s(r.content_amount))])])])})),0)])])])},i=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"filters"},[e("h2",{staticClass:"filters__heading"},[e("img",{staticClass:"filters__icon",attrs:{src:r("47d0")("./".concat(t.BRAND_KEY,"/images/icon-filter.svg"))}}),t._v("\n    "+t._s(t.$t("FILTER_BY"))+"\n  ")]),e("v-select",{staticClass:"select",attrs:{options:[{label:"Apple AppStore ".concat(this.$t("APPS")),value:"ios"},{label:"".concat(this.$t("{{brand}}")," Store ").concat(this.$t("APPS")),value:"cydia"},{label:"Apple TV ".concat(this.$t("APPS")),value:"tvos"}],reduce:function(t){return t.value},value:t.type,clearable:!1,searchable:!1},on:{input:function(e){return t.updateParams({type:e,genre:null})}}}),e("v-select",{staticClass:"select",attrs:{value:t.genre,options:t.genres,searchable:!1,reduce:function(t){return t.value},placeholder:t.$t("CATEGORY")},on:{input:function(e){return t.updateParams({genre:e})}}})],1)},a=[];function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e=p(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t){var e=f(t,"string");return"symbol"===s(e)?e:String(e)}function f(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var h={props:["type","genre","price"],computed:{genres:function(){var t=this;return this.$store.getters.genres[this.type]?Object.entries(this.$store.getters.genres[this.type]).map((function(e){return{label:t.$t(e[1].name.toUpperCase()),value:e[0]}})):[]}},methods:{updateParams:function(t){var e=u(u({},this.$route.query),t);Object.keys(e).forEach((function(t){e[t]||delete e[t]})),this.$router.push({query:e})}}},d=h,y=(r("e1c4"),r("2877")),v=Object(y["a"])(d,o,a,!1,null,"5cf14195",null),g=v.exports,_=r("612c"),m=r("555f"),b=r("2ef0");function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function O(t){return $(t)||P(t)||E(t)||S()}function S(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function E(t,e){if(t){if("string"===typeof t)return j(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(t,e):void 0}}function P(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function $(t){if(Array.isArray(t))return j(t)}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function A(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */A=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),s=new k(n||[]);return i(a,"_invoke",{value:j(t,r,s)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var f="suspendedStart",h="suspendedYield",d="executing",y="completed",v={};function g(){}function _(){}function m(){}var b={};u(b,a,(function(){return this}));var O=Object.getPrototypeOf,S=O&&O(O(T([])));S&&S!==r&&n.call(S,a)&&(b=S);var E=m.prototype=g.prototype=Object.create(b);function P(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function $(t,e){function r(i,o,a,s){var c=p(t[i],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==w(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,i){r(t,n,e,i)}))}return o=o?o.then(i,i):i()}})}function j(e,r,n){var i=f;return function(o,a){if(i===d)throw new Error("Generator is already running");if(i===y){if("throw"===o)throw a;return{value:t,done:!0}}for(n.method=o,n.arg=a;;){var s=n.delegate;if(s){var c=L(s,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===f)throw i=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=d;var u=p(e,r,n);if("normal"===u.type){if(i=n.done?y:h,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(i=y,n.method="throw",n.arg=u.arg)}}}function L(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=p(i,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(w(e)+" is not iterable")}return _.prototype=m,i(E,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:_,configurable:!0}),_.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},P($.prototype),u($.prototype,s,(function(){return this})),e.AsyncIterator=$,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new $(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(E),u(E,c,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;I(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function L(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,i)}function C(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){L(o,n,i,a,s,"next",t)}function s(t){L(o,n,i,a,s,"throw",t)}a(void 0)}))}}function I(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function k(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?I(Object(r),!0).forEach((function(e){T(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function T(t,e,r){return e=x(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function x(t){var e=D(t,"string");return"symbol"===w(e)?e:String(e)}function D(t,e){if("object"!==w(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var N={name:"search",components:{Filters:g,App:_["a"],Loader:m["a"]},data:function(){return{isLoading:!0,results:[],page:1,isLastPage:!1,params:k({},this.$route.query)}},computed:{title:function(){return this.$t("SEARCH")},query:function(){return this.$route.query.query},type:function(){var t=this.$route.query.type;return this.translateType(t)?t:"cydia"},dev:function(){return this.$route.query.dev},genre:function(){var t=this.$route.query.genre;return t&&!this.$store.getters.genres[this.type][t]?null:t},price:function(){var t=this.$route.query.price;return"1"!==t&&"2"!==t?null:t},genres:function(){return Object.values(this.$store.getters.genres[this.type]||{}).sort((function(t,e){return e.content_amount-t.content_amount}))}},methods:{translateType:function(t){var e={cydia:"".concat(this.$t("{{brand}}")," Store ").concat(this.$t("APPS")),ios:"Apple AppStore ".concat(this.$t("APPS")),tvos:"tvOS"};return e[t]},resetScroll:function(){var t=this;return C(A().mark((function e(){var r;return A().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:r=t.$refs.apps&&t.$refs.apps.getBoundingClientRect()||{top:-1},r.top<0&&window.scrollTo(0,0);case 4:case"end":return e.stop()}}),e)})))()},goToGenre:function(t){this.$router.push({query:k(k({},this.$route.query),{},{genre:t})})},search:function(t){var e=this;t||(this.results=[],this.page=1),this.isLoading=!0;var r={type:this.type};return this.query&&(r.q=this.query),this.dev&&(r.dev=this.dev),this.genre&&(r.genre=this.genre),this.price&&(r.price=this.price),t&&(r.page=t),this.$api.search(r).then((function(t){e.isLoading=!1,t.length<25&&(e.isLastPage=!0),e.results=[].concat(O(e.results),O(t))}))},handleScroll:Object(b["throttle"])((function(){if(!this.isLoading&&!this.isLastPage&&this.$refs.app&&"search"===this.$route.name){var t=this.results.length-20,e=this.$refs.app[t>=0?t:0];if(e){var r=e.$el.offsetTop;window.scrollY>r&&(this.page=this.page+1,this.search(this.page))}}}),1e3)},watch:{"$route.query":{handler:function(){"search"!==this.$route.name||Object(b["isEqual"])(this.$route.query,this.params)||(this.params=k({},this.$route.query),this.isLastPage=!1,this.resetScroll(),this.search())},deep:!0}},serverPrefetch:function(){return this.search()},created:function(){this.search()},mounted:function(){this.resetScroll(),window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},q=N,R=(r("204b"),Object(y["a"])(q,n,i,!1,null,"4662e255",null));e["default"]=R.exports},"47d0":function(t,e,r){var n={"./AppAddict/images/icon-filter.svg":"cccc","./appdb/images/icon-filter.svg":"0316"};function i(t){var e=o(t);return r(e)}function o(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=o,t.exports=i,i.id="47d0"},"5d09":function(t,e,r){t.exports=r.p+"img/icon-arrow.73c1f51b.svg"},"612c":function(t,e,r){"use strict";var n=function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"app",class:{app_store:t.isInStore,"app_no-link":!t.computedLink},attrs:{tag:"div",to:t.computedLink}},[[t.icon&&!t.iconFailedToLoad?e("v-lazy-image",{staticClass:"app__icon",attrs:{src:t.icon,"intersection-options":{rootMargin:"500px"}},on:{error:function(e){t.iconFailedToLoad=!0},load:function(e){t.iconLoaded=!0}}}):e("div",{staticClass:"app__empty-icon"})],e("div",{staticClass:"app__desc"},[e("span",{staticClass:"app__title"},[t._v("\n      "+t._s(t.app.name)+" ")]),t.isUpdatable?t._e():e("div",{staticClass:"app__info"},[t.app.version||t.app.bundle_version?e("span",{staticClass:"app__version"},[t._v("v "+t._s(t.app.version||t.app.bundle_version))]):t._e(),t.app.size?e("span",{staticClass:"app__size"},[t._v(t._s(t.prettysize(t.app.size)))]):t._e(),t.isInStore?e("span",{staticClass:"app__public"},[t._v("\n        "+t._s(t.app.is_public?t.$t("PUBLIC"):t.$t("PRIVATE"))+"\n      ")]):t._e(),t.isInStore?t._e():e("router-link",{staticClass:"app__category",attrs:{to:"/search/?type=".concat(t.type,"&genre=").concat(t.app.genre_id)}},[t._v(t._s(t.app.genre_id&&t.genres[t.type][t.app.genre_id]&&t.$t(t.genres[t.type][t.app.genre_id].name.toUpperCase())))])],1),t.isRequestable||t.isUpdatable||t.isInStore||!+t.app.artist_id?t._e():e("router-link",{staticClass:"app__publisher",attrs:{to:"/search/?type=".concat(t.type,"&dev=").concat(t.app.artist_id)}},[t._v(t._s(t.app.pname))]),t.isRequestable?e("p",{staticClass:"app__status"},[t._v("\n      "+t._s(t.$t([t.app.status.toUpperCase(),t.app.status]))+" "+t._s(t.$t("SINCE"))+"\n      "+t._s(t.formatDate(1e3*t.app.status_changed_at))+"\n    ")]):t._e(),t.isUpdatable?e("span",{staticClass:"app__update"},[t._v("\n      v "+t._s(t.app.version_old)),e("img",{staticClass:"app__update-icon",attrs:{src:r("5d09")}}),t._v("v\n      "+t._s(t.app.version_new)+"\n    ")]):t._e(),t.isUpdatable&&!t.app.updateable?e("span",{staticClass:"app__update-warning"},[t._v(t._s(t.$t("NOT_UPDATEABLE")))]):t._e(),t.compatibilityString?e("span",[t._v("\n      "+t._s(t.compatibilityString)+"\n    ")]):t._e(),t.isInStore&&t.app.detected_malware?e("div",{staticClass:"app__notice app__notice_danger"},[e("p",[t._v(t._s(t.$t("MALWARE_DETECTED_NOTICE")))]),t._l(t.app.detected_malware,(function(r){return e("p",{key:r.name},[t._v("\n        "+t._s(r.name)+", "+t._s(r.type)+". "+t._s(t.$t("LEVEL"))+": "+t._s(r.level)+". "+t._s(t.$t("DANGER"))+": "+t._s(r.danger)+"\n      ")])}))],2):t._e()],1),t.isRequestable?e("div",{staticClass:"app__request request"},[t.isDeviceLinked&&"fulfilled"!==t.app.status?e("v-button",{attrs:{type:"primary"},nativeOn:{"!click":function(e){return e.stopPropagation(),t.$emit("tryFulfill",t.app)}}},[t._v("\n      "+t._s(t.$t("FULFILL"))+"\n    ")]):t._e()],1):t._e(),t.isInStore?e("div",{staticClass:"actions"},[e("button",{staticClass:"actions__install",class:{actions__install_disabled:t.installingIpa},on:{click:t.installIpa}},[e("img",{staticClass:"actions__install-icon",attrs:{src:r("8d1a")("./".concat(t.BRAND_KEY,"/images/icon-install-primary.svg"))}}),t._v("\n      "+t._s(t.$t("INSTALL"))+"\n      "),t.installingIpa?[e("div",{staticClass:"actions__loader"},[e("div",{staticClass:"actions__loader-dot"}),e("div",{staticClass:"actions__loader-dot"}),e("div",{staticClass:"actions__loader-dot"})]),e("div",{staticClass:"actions__tooltip"},[t._v(t._s(t.$t("REQUESTING"))+"...")])]:t._e()],2),e("router-link",{attrs:{to:"/details/".concat(t.app.universal_object_identifier,"?id=").concat(t.app.id,"&editMode")}},[t._v(t._s(t.$t("EDIT_METADATA")))]),e("button",{staticClass:"actions__remove",on:{click:function(e){return e.preventDefault(),t.deleteIpa.apply(null,arguments)}}},[t._v("\n      "+t._s(t.deletingIpa?t.$t("APP_REMOVING"):t.$t("REMOVE"))+"\n    ")])],1):t._e()],2)},i=[],o=r("222b"),a=r.n(o),s=r("7fe0"),c=r("d7a2"),u=r("f601"),l=r("2a7d"),p=r("2f62");function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e,r){return e=v(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function v(t){var e=g(t,"string");return"symbol"===f(e)?e:String(e)}function g(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var _={mixins:[s["a"]],components:{VLazyImage:c["a"],VButton:l["a"]},props:{isRequestable:Boolean,isUpdatable:Boolean,isInStore:Boolean,isInRepo:Boolean,app:Object,type:String,repoId:String,index:Number,link:String},data:function(){return{deletingIpa:!1,installingIpa:!1,iconFailedToLoad:!1,iconLoaded:!1}},computed:d(d({},Object(p["d"])(["isDeviceLinked"])),{},{computedLink:function(){return this.link?this.link:this.isInStore?"":this.isRequestable?"fulfilled"===this.app.status?"/details/".concat(this.app.fulfilled_universal_object_identifier):"":"/app/".concat(this.type||this.app.type,"/").concat(this.isRequestable||this.isUpdatable?this.app.trackid:this.app.id)},genres:function(){return this.$store.getters.genres},compatibilityString:function(){var t=this,e=u["a"].filter((function(e){var r=e.name;return t.app["min_".concat(r,"_version")]})).map((function(t){var e=t.device;return e}));return e.length?this.$t("FOR_X",[e.join(", ")]):""},icon:function(){return this.app.image||this.app.iconURL||this.app.icon_uri}}),methods:{formatDate:function(t){return new Date(t).toLocaleString()},deleteIpa:function(){var t=this;this.isInStore&&!this.deletingIpa&&this.$confirm(this.$t("DELETE_APP_WARNING")).then((function(){t.deletingIpa=!0,t.$api.deleteIpa(t.app.id).then((function(){t.$emit("deleted")}))}))},installIpa:function(){var t=this;this.installingIpa||(this.app.no_installation_ticket_failure_reason?this.$notify({type:"error",text:this.app.no_installation_ticket_failure_reason.translated}):(this.installingIpa=!0,this.installApp(this.app.id,"universal",{installationTicket:this.app.installation_ticket}).finally((function(){t.installingIpa=!1}))))},prettysize:a.a}},m=_,b=(r("0069"),r("2877")),w=Object(b["a"])(m,n,i,!1,null,"98991b28",null);e["a"]=w.exports},"8d1a":function(t,e,r){var n={"./AppAddict/images/icon-install-primary.svg":"ffc5","./appdb/images/icon-install-primary.svg":"ea47"};function i(t){var e=o(t);return r(e)}function o(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=o,t.exports=i,i.id="8d1a"},c792:function(t,e,r){},d3bb:function(t,e,r){},d7a2:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n={props:{src:{type:String,required:!0},srcPlaceholder:{type:String,default:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},srcset:{type:String},intersectionOptions:{type:Object,default:function(){return{}}},usePicture:{type:Boolean,default:!1}},inheritAttrs:!1,data:function(){return{observer:null,intersected:!1,loaded:!1}},computed:{srcImage:function(){return this.intersected&&this.src?this.src:this.srcPlaceholder},srcsetImage:function(){return!(!this.intersected||!this.srcset)&&this.srcset}},methods:{load:function(){this.$el&&this.$el.getAttribute("src")!==this.srcPlaceholder&&(this.loaded=!0,this.$emit("load",this.$el))},error:function(){this.$emit("error",this.$el)}},render:function(t){var e=t("img",{attrs:{src:this.srcImage,srcset:this.srcsetImage},domProps:this.$attrs,class:{"v-lazy-image":!0,"v-lazy-image-loaded":this.loaded},on:{load:this.load,error:this.error}});return this.usePicture?t("picture",{on:{load:this.load}},this.intersected?[this.$slots.default,e]:[e]):e},mounted:function(){var t=this;"IntersectionObserver"in window&&(this.observer=new IntersectionObserver((function(e){var r=e[0];r.isIntersecting&&(t.intersected=!0,t.observer.disconnect(),t.$emit("intersect"))}),this.intersectionOptions),this.observer.observe(this.$el))},destroyed:function(){"IntersectionObserver"in window&&this.observer.disconnect()}}},e1c4:function(t,e,r){"use strict";r("0986")}}]);
//# sourceMappingURL=chunk-7d147870.9fcba773.js.map