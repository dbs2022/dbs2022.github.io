(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77b62618","chunk-a8aa8caa"],{"4fc0":function(t,e,i){"use strict";i("b149")},"619a":function(t,e,i){"use strict";i("97fe")},"97fe":function(t,e,i){},b149:function(t,e,i){},d262:function(t,e,i){"use strict";function n(){var t=window.navigator.userAgent;if(t.indexOf("iPad")>-1)return!0;if(t.indexOf("Macintosh")>-1)try{return document.createEvent("TouchEvent"),!0}catch(e){}return!1}function s(){var t=document.createElement("canvas").getContext("webgl"),e=t.getExtension("WEBGL_debug_renderer_info"),i=e&&(t.getParameter(e.UNMASKED_RENDERER_WEBGL)||"");return!(!i.match(/Apple/)||i.match(/Apple GPU/))||-1===t.getSupportedExtensions().indexOf("WEBGL_compressed_texture_s3tc_srgb")}function r(){return!!window.navigator.userAgent.match(/Safari/)||(!!n()||!!s())}e["a"]=r},dc97:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t._self._c;return e("v-layout",[e("section",{staticClass:"repos",class:{repos_loading:t.gettingRepos}},[e("h1",{staticClass:"intro"},[t._v("\n      "+t._s(t.$t("PUBLIC_REPOS"))+"\n    ")]),t.gettingRepos?e("div",{staticClass:"loader-wrapper"},[e("loader")],1):[e("div",{staticClass:"items-wrapper"},[t.repos.length?e("p",{staticClass:"instruction"},[t._v("\n          "+t._s(t.$t("MY_REPOS_MOBILE_INSTRUCTION"))+"\n        ")]):t._e(),e("div",{staticClass:"items"},[t.repos.length?t._e():e("div",[t._v("\n            No public repositories found\n          ")]),t._l(t.repos,(function(i){return e("div",{key:i.id,staticClass:"item item_active",class:{item_disabled:t.repoRemovingId===i.id},on:{click:function(e){return t.browseRepoMobile(i.id,e)}}},[e("div",{staticClass:"item__desc"},[e("span",{staticClass:"item__title"},[t._v("\n                "+t._s(i.name)+"\n              ")]),e("span",{staticClass:"item__info"},[t._v("\n                "+t._s(t.$t("STATUS_IS_X",{status:i.status_translated}))+"\n                "),e("br"),t._v("\n                "+t._s(t.$t("APPS_N",{apps:i.total_apps}))+"\n                "),e("br"),t._v("\n                "+t._s(t.$t("LAST_CHECKED_AT",{date:new Date(1e3*i.last_checked_at).toLocaleString()}))+"\n              ")])]),e("div",{staticClass:"item__switch"},[e("router-link",{staticClass:"item__button",attrs:{to:"/repos/".concat(i.id)}},[t._v("\n                "+t._s(t.$t("BROWSE"))+"\n              ")])],1)])}))],2)]),e("div",{staticClass:"link"},[e("html-with-links",{staticClass:"link__text",attrs:{tag:"p",html:t.$t("SEARCHING_FOR_PRIVATE_REPOS",{href:"/my/repos"})}}),e("p",{staticClass:"link__text"},[t._v("\n          "+t._s(t.$t("MY_REPOSITORIES_SIDEBAR"))+"\n        ")])],1)]],2)])},s=[],r=i("2f62"),a=i("d262"),o=i("555f"),c=i("eb88"),l=i("13a2");function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function _(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?_(Object(i),!0).forEach((function(e){p(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):_(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function p(t,e,i){return e=f(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function f(t){var e=v(t,"string");return"symbol"===u(e)?e:String(e)}function v(t,e){if("object"!==u(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var h={components:{Loader:o["a"],VLayout:c["default"],HtmlWithLinks:l["a"]},data:function(){return{origin:window.location.origin,code:"",isMobile:Object(a["a"])(),deviceRemoving:null,repoRemovingId:null,gettingRepos:!0,repos:[]}},computed:d({title:function(){return this.$t("PUBLIC_REPOS")}},Object(r["d"])(["isDeviceLinked"])),methods:{tryAddRepository:function(){var t=this;this.isDeviceLinked?this.$prompt(this.$t("ENTER_REPOSITORY_URL"),"",{validate:this.validateRepoURL}).then((function(e){t.$router.push("/repos/import?url=".concat(encodeURIComponent(e)))})):this.$confirm(this.$t("LINK_TO_ADD_REPO")).then((function(){t.$router.push("/link")}))},validateRepoURL:function(t){try{return new URL(t),!0}catch(e){return this.$notify({type:"error",text:this.$t("PROVIDE_VALID_URL")}),!1}},browseRepo:function(t){this.$router.push("/repos/".concat(t))},removeRepo:function(t){var e=this;this.repoRemovingId=t,this.$api.deleteRepo(t).then((function(){var i=e.repos.findIndex((function(e){return e.id===t}));e.repos.splice(i,1)})).finally((function(){e.repoRemovingId=null}))},browseRepoMobile:function(t){window.innerWidth>=1250||this.$router.push("/repos/".concat(t))},getRepos:function(){var t=this;return this.gettingRepos=!0,this.$api.getRepos(1).then((function(e){t.repos=e})).finally((function(){t.gettingRepos=!1}))}},created:function(){this.getRepos()}},g=h,m=(i("4fc0"),i("2877")),b=Object(m["a"])(g,n,s,!1,null,"4a0519e0",null);e["default"]=b.exports},de56:function(t,e,i){t.exports=i.p+"img/icon-nodevice.cc369346.svg"},eb88:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main"},[t.loaded?t._e():e("loader"),t.loaded?e("aside",{staticClass:"sidebar"},[e("div",{staticClass:"sidebar__my"},[e("div",{staticClass:"header"},[t.isDeviceLinked?[e("span",{staticClass:"header__active"},[t._v(t._s(this.$t("ACTIVE_DEVICE")))]),e("img",{staticClass:"header__img",attrs:{src:t.currentDevice.icon}}),e("div",{staticClass:"header__desc"},[e("span",{staticClass:"header__title"},[t._v(t._s(t.currentDevice.name))]),e("span",{staticClass:"header__device"},[t._v(t._s(t.currentDevice.title)+")")]),e("ul",{staticClass:"header__list"},[t.currentDevice.plus?[e("li",{staticClass:"header__divider"}),e("li",{staticClass:"header__status header__status_pro"},[t._v("Plus")])]:t._e()],2)])]:[e("img",{staticClass:"header__img",attrs:{src:i("de56")}}),e("div",{staticClass:"header__desc"},[e("span",{staticClass:"header__error-status g-status g-status_error"},[t._v(t._s(t.$t("NO_DEVICE_LINKED")))]),e("router-link",{staticClass:"g-button",attrs:{to:"/link"}},[t._v(t._s(t.$t("LINK_YOUR_DEVICE")))])],1)]],2),e("nav",[e("ul",{staticClass:"nav",class:{nav_disabled:!t.isDeviceLinked}},t._l(t.nav,(function(i){return e("li",{key:i.title,staticClass:"nav__item"},[i.external?e("a",{staticClass:"nav__link",attrs:{href:i.link,target:i.target}},[t._v("\n              "+t._s(i.title)+"\n            ")]):e("router-link",{staticClass:"nav__link",attrs:{to:"/my"+i.link}},[t._v(t._s(i.title))])],1)})),0)])])]):t._e(),t.loaded?t._t("default",(function(){return[e("router-view")]})):t._e()],2)},s=[],r=i("555f"),a={components:{Loader:r["a"]},computed:{nav:function(){return[{title:this.$t("MY_DEVICES"),link:"/devices"},{title:this.$t("MY_APPS_TITLE"),link:"/apps"},{title:this.$t("MY_DYLIBS"),link:"/dylibs"},{title:this.$t("MY_REPOSITORIES"),link:"/repos"},{title:this.$t("CONFIGURE_FEATURES"),link:"/configure"},{title:this.$t("VIEW_PLUS_STATUS"),link:"/plus"},{title:this.$t("P2P_SIGNING_MARKETPLACE"),link:"/p2p-certificates"},{title:this.$t("VIEW DEVICE STATUS"),link:"/status"},{title:this.$t("VIEW_IPA_CACHE_STATUS"),link:"/ipa-cache"},{title:this.$t("CHANGE_EMAIL"),link:"/change-email"},{title:this.$t("TROUBLESHOOTING"),link:"https://rtfm.dbservices.to/#/troubleshooting/app-installations",external:!0,target:"_blank"},{title:this.$t("UNLINK THIS DEVICE"),link:"/unlink"}]},loaded:function(){var t=this.$store.getters,e=t.configLoaded,i=t.devicesLoaded;return e&&i},isDeviceLinked:function(){return this.$store.getters.isDeviceLinked},currentDevice:function(){var t=this;return this.$store.getters.devices.find((function(e){return e.lt===t.$store.getters.lt}))||{}}}},o=a,c=(i("619a"),i("2877")),l=Object(c["a"])(o,n,s,!1,null,"18cbbc6a",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-77b62618.e0239769.js.map