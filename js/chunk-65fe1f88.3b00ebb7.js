(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65fe1f88"],{"16b5":function(t,e,r){"use strict";r("b735")},"6b39":function(t,e,r){var i={"./AppAddict/images/icon-chevron.svg":"ae9c","./appdb/images/icon-chevron.svg":"0b1a"};function n(t){var e=s(t);return r(e)}function s(t){if(!r.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=s,t.exports=n,n.id="6b39"},7890:function(t,e,r){t.exports=r.p+"img/icon-device-sidebar.cece4489.svg"},"88a7":function(t,e,r){"use strict";r("de7b")},b735:function(t,e,r){},bb51:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main"},[e("universal-filters",{staticClass:"main__filters",attrs:{"initial-filters":t.initialFilters,"save-to-url":""},model:{value:t.filters,callback:function(e){t.filters=e},expression:"filters"}}),e("div",{staticClass:"main__content"},[e("universal-search",{attrs:{"hide-filters":"",filters:t.filters},on:{"update:filters":function(e){t.filters=e}}})],1),e("sidebar",{staticClass:"main__sidebar"})],1)},n=[],s=function(){var t=this,e=t._self._c;return e("aside",[e("div",{staticClass:"block block_yellow"},[e("div",{staticClass:"block__top"},[t._m(0),e("div",{staticClass:"block__right"},[e("h2",{staticClass:"block__heading"},[t._v(t._s(t.$t("LATEST NEWS")))]),t.news.length?e("ul",t._l(t.news,(function(r){return e("li",{key:r.id,staticClass:"block__item"},[e("router-link",{staticClass:"block__link",attrs:{to:"/news/".concat(r.id)}},[t._v(t._s(r.title))])],1)})),0):e("ul",{staticClass:"block__list"},t._l(3,(function(r){return e("li",{key:r,staticClass:"block__item block__item_stub"},[t._v("\n            n\n          ")])})),0)])]),e("div",{staticClass:"block__bottom"},[e("router-link",{staticClass:"block__more",attrs:{to:"/news"}},[t._v(t._s(t.$t("MORE_NEWS"))+"\n        "),e("img",{staticClass:"block__more-icon",attrs:{src:r("6b39")("./".concat(t.BRAND_KEY,"/images/icon-chevron.svg"))}})])],1)]),e("div",{staticClass:"devices block block_purple",class:{block_devices:t.devices.length}},[e("div",{staticClass:"block__top"},[t._m(1),e("div",{staticClass:"block__right"},[t.devices.length?[e("h2",{staticClass:"block__heading block__heading_small"},[t._v("\n            "+t._s(t.$t("DEVICES_LINKED_COUNT",{count:t.devices.length}))+"\n            "),e("img",{staticClass:"block__heading-icon",attrs:{src:r("c25b")}})]),t._l(t.devices,(function(r,i){return[e("p",{key:i,staticClass:"block__device-name"},[t._v("\n              "+t._s(t.$t("DEVICE_NAME",{name:r.name}))+"\n            ")]),e("p",{key:i+"t",staticClass:"block__device-desc"},[t._v("\n              "+t._s(r.title)+")\n            ")])]})),e("router-link",{staticClass:"block__device-page",attrs:{to:"/my/devices"}},[t._v(t._s(t.$t("VIEW_DEVICES_PAGE"))+"\n            "),e("img",{staticClass:"block__more-icon",attrs:{src:r("6b39")("./".concat(t.BRAND_KEY,"/images/icon-chevron.svg"))}})])]:[e("h2",{staticClass:"block__heading block__heading_small"},[e("i18next",{staticClass:"block__heading block__heading_small",attrs:{path:"YOUR_DEVICE"}},[e("img",{staticClass:"block__heading-icon",attrs:{src:r("a0d7")}})])],1),e("p",{staticClass:"block__text"},[t._v(t._s(t.$t("NO_DEVICE_LINKED_TO_APPDB")))]),e("router-link",{staticClass:"block__link-device",attrs:{to:"/link"}},[t._v(t._s(t.$t("LINK_YOUR_DEVICE")))])]],2)])]),t.BRAND_CONFIG.telegramDiscussion?e("telegram-discussion",{staticClass:"telegram",attrs:{discussion:t.BRAND_CONFIG.telegramDiscussion,"comments-limit":3,height:540}}):t._e()],1)},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"block__left"},[e("img",{attrs:{src:r("e8d0")}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"block__left"},[e("img",{attrs:{src:r("7890")}})])}],c=r("2f62"),a=function(){var t=this,e=t._self._c;return e("div",{ref:"widget"})},l=[];function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e=_(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _(t){var e=p(t,"string");return"symbol"===u(e)?e:String(e)}function p(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!==u(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var d={props:{discussion:String,commentsLimit:Number,height:Number},computed:f(f({},Object(c["f"])(["theme"])),{},{primaryColor:function(){return getComputedStyle(document.body).getPropertyValue("--primary")}}),methods:{init:function(){this.$refs.widget.innerHTML="";var t=document.createElement("script");t.src="https://telegram.org/js/telegram-widget.js?22",t.async=!0,t.dataset.telegramDiscussion=this.discussion,t.dataset.commentsLimit=this.commentsLimit,"dark"===this.theme&&(t.dataset.dark=1),this.height&&(t.dataset.height=this.height),this.primaryColor&&(t.dataset.color=this.primaryColor.slice(1)),this.$refs.widget.appendChild(t)}},watch:{discussion:"init",commentsLimit:"init",height:"init",theme:"init"},mounted:function(){this.init()}},v=d,g=r("2877"),y=Object(g["a"])(v,a,l,!1,null,null,null),h=y.exports;function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function k(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?k(Object(r),!0).forEach((function(e){j(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function j(t,e,r){return e=C(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function C(t){var e=S(t,"string");return"symbol"===O(e)?e:String(e)}function S(t,e){if("object"!==O(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!==O(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var P={components:{TelegramDiscussion:h},data:function(){return{news:[],langKey:0}},computed:w({devices:function(){return this.$store.getters.devices}},Object(c["f"])(["theme"])),watch:{"$store.getters.lang":function(){this.langKey+=1}},methods:{getNews:function(){var t=this;return this.$api.getNews().then((function(e){t.news=e}))}},serverPrefetch:function(){return this.getNews()},created:function(){this.getNews()}},E=P,D=(r("16b5"),Object(g["a"])(E,s,o,!1,null,"5d70b7d1",null)),N=D.exports,I=r("55c3"),T=r("1db0");function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function L(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?L(Object(r),!0).forEach((function(e){A(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function A(t,e,r){return e=V(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function V(t){var e=K(t,"string");return"symbol"===$(e)?e:String(e)}function K(t,e){if("object"!==$(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!==$(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var R={name:"home",components:{Sidebar:N,UniversalSearch:I["a"],UniversalFilters:T["a"]},data:function(){return{filters:{}}},computed:x(x({title:function(){return this.$t("SITE_TITLE")}},Object(c["d"])(["currentDeviceOS"])),{},{initialFilters:function(){return this.currentDeviceOS?{compatibility:this.currentDeviceOS}:{}}})},U=R,F=(r("88a7"),Object(g["a"])(U,i,n,!1,null,"23be1c65",null));e["default"]=F.exports},c25b:function(t,e,r){t.exports=r.p+"img/icon-check.ce62c51a.svg"},de7b:function(t,e,r){},e8d0:function(t,e,r){t.exports=r.p+"img/icon-news-sidebar.70f41b0b.svg"}}]);
//# sourceMappingURL=chunk-65fe1f88.3b00ebb7.js.map