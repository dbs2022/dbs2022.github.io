(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b4a8f50"],{"03ec":function(t,s,a){"use strict";a("2b1c")},"05f1":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t._self._c;return s("section",{staticClass:"main"},[s("h1",{staticClass:"intro"},[t._v(t._s(t.$t("MYAPPSTORE_HEADING"))+" ("),s("a",{attrs:{href:"https://www.youtube.com/watch?v=5g6-JeZff8I",target:"_blank"}},[t._v(t._s(t.$t("VIDEO_TUTORIAL")))]),t._v(")")]),s("div",{staticClass:"row"},[s("div",[s("p",{staticClass:"g-text"},[t._v("\n        "+t._s(t.$t("MYAPPSTORE_DESC"))+"\n        "),s("b",{staticClass:"email"},[t._v("Email ID:\n          "+t._s(t.$store.getters.devices[0]&&t.$store.getters.devices[0].email)+"\n        ")])]),s("div",{staticClass:"header"},[s("h2",{staticClass:"header__title"},[t._v(t._s(t.$t("YOUR APPS")))]),s("span",{staticClass:"header__storage"},[t._v(t._s(t.$t("STORAGE USAGE"))+": "+t._s(t.totalSize)+" / "+t._s(t.currentStorageLimit)+" GB"),s("br"),t.hasPlus?t._e():s("html-with-links",{staticStyle:{"font-size":"12px"},attrs:{tag:"span",html:"("+t.$t("UPGRADE_MY_APPSTORE_STORAGE",{storage:t.stats.myappstore_storage_limit_gb_plus+" GB",href:"/my/plus"})+")"}})],1)]),t._l(t.apps,(function(a){return s("app",{key:a.id,staticClass:"main__app",attrs:{app:a,isInStore:!0},on:{update:t.getApps}})}))],2),s("div",{staticClass:"upload"},[s("form",{staticClass:"upload__box"},[s("input",{ref:"upload",staticClass:"upload__input",attrs:{type:"file",multiple:""},on:{change:t.newFilesHandler}}),s("v-button",{staticClass:"upload__button",attrs:{type:"primary"},nativeOn:{click:function(s){return s.preventDefault(),t.select.apply(null,arguments)}}},[t._v("\n          "+t._s(t.$t("UPLOAD_IPA_FILES"))+"\n        ")]),s("v-button",{staticClass:"upload__button",attrs:{loading:t.uploadingByUrl,type:"primary"},nativeOn:{click:function(s){return s.preventDefault(),t.uploadByUrl.apply(null,arguments)}}},[t._v(t._s(t.$t("UPLOAD_BY_URL")))]),t.uploads.length?s("span",{staticClass:"upload__num"},[t._v("\n          "+t._s(t.$t("FILES_SELECTED",{count:t.uploads.length}))+"\n        ")]):t._e(),s("ul",t._l(t.uploads,(function(e){return s("li",{key:e.id,staticClass:"upload__item"},[e.status?[s("span",{staticClass:"upload__status",class:{upload__status_error:e.error}},[t._v("\n                "+t._s(e.status)+"\n              ")]),s("span",{staticClass:"upload__date"},[t._v("\n                "+t._s(e.date)+"\n                "),e.finished?s("img",{staticClass:"upload__delete",attrs:{src:a("7345")},on:{click:function(s){return t.deleteJob(e.id)}}}):t._e()])]:[s("span",{staticClass:"upload__title"},[t._v(t._s(e.name))]),s("span",{staticClass:"upload__progress-wrapper"},[s("span",{staticClass:"upload__progress"},[s("span",{staticClass:"upload__progress-inner",style:{width:e.progress+"%"}})]),t._v("\n                "+t._s(e.progress)+"%\n              ")])]],2)})),0)],1),s("p",{staticClass:"help g-text"},[s("img",{staticClass:"help__icon",attrs:{src:a("d399")}}),s("html-with-links",{staticClass:"help__text",attrs:{tag:"span",html:t.$t("CONFIGURE_FEATURES_AT_PAGE",{configureLink:"/my/configure"})}})],1)])])])},n=[],i=a("612c"),r=a("222b"),o=a.n(r),p=a("13a2"),l=a("2a7d"),c=a("2f62");function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function _(t){return g(t)||v(t)||f(t)||d()}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t,s){if(t){if("string"===typeof t)return m(t,s);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(t,s):void 0}}function v(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function g(t){if(Array.isArray(t))return m(t)}function m(t,s){(null==s||s>t.length)&&(s=t.length);for(var a=0,e=new Array(s);a<s;a++)e[a]=t[a];return e}function b(t,s){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);s&&(e=e.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),a.push.apply(a,e)}return a}function h(t){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?b(Object(a),!0).forEach((function(s){y(t,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(a,s))}))}return t}function y(t,s,a){return s=C(s),s in t?Object.defineProperty(t,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[s]=a,t}function C(t){var s=I(t,"string");return"symbol"===u(s)?s:String(s)}function I(t,s){if("object"!==u(t)||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var e=a.call(t,s||"default");if("object"!==u(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===s?String:Number)(t)}var S={components:{App:i["a"],HtmlWithLinks:p["a"],VButton:l["a"]},data:function(){return{apps:[],stats:{},uploads:[],interval:null,interval2:null,uploadingByUrl:!1}},computed:h(h({},Object(c["c"])(["hasPlus"])),{},{title:function(){return this.$t("MYAPPSTORE_HEADING")},totalSize:function(){return o()(this.apps.reduce((function(t,s){return t+ +s.size}),0))},currentStorageLimit:function(){return this.hasPlus?this.stats.myappstore_storage_limit_gb_plus:this.stats.myappstore_storage_limit_gb}}),methods:{select:function(){this.$refs.upload.click()},generateId:function(){return _(Array(40)).map((function(){return Math.random().toString(36)[2]})).join("")},newFilesHandler:function(){var t=this;Array.from(this.$refs.upload.files).forEach((function(s){var a=t.generateId(),e={id:a,name:s.name,progress:0,status:"",date:"",finished:!1,error:!1};t.uploads.unshift(e),t.$api.uploadApp({file:s,id:a},(function(t){e.progress=Math.round(100*t.loaded/t.total)})).then((function(s){s.success?e.status=t.$t("REQUESTING_VALIDATION"):(e.status=t.$t("UPLOAD_FAILED_WITH_REASON",{reason:s.errors[0].translated}),e.error=!0)})).catch((function(){e.status=t.$t("UPLOAD_FAILED"),e.error=!0}))}))},uploadByUrl:function(){var t=this;this.$prompt(this.$t("PLEASE_PROVIDE_URL_TO_IPA")).then((function(s){return t.uploadingByUrl=!0,t.$api.uploadAppByUrl({url:s,id:t.generateId()})})).finally((function(){t.uploadingByUrl=!1}))},getApps:function(){var t=this;this.$api.getIpas().then((function(s){t.apps=s}))},deleteJob:function(t){var s=this;this.$api.deleteAppJob(t).then((function(){var a=s.uploads.findIndex((function(s){return s.id===t}));s.uploads.splice(a,1)}))},getJobs:function(){var t=this;this.$api.getAppsJobs().then((function(s){s.forEach((function(s){var a=t.uploads.find((function(t){return t.id===s.id})),e=new Date(1e3*s.updated_at).toLocaleString(),n=/error/i.test(s.status);a?(a.status=s.status,a.date=e,a.error=n,s.is_finished&&!a.finished&&(a.finished=!0,t.getApps())):t.uploads.push({id:s.id,status:s.status,date:e,finished:s.is_finished,error:n})}))}))}},mounted:function(){var t=this;this.getApps(),this.getJobs(),this.interval=setInterval(this.getJobs,1e3),this.interval2=setInterval(this.getApps,5e3),this.$api.getStats().then((function(s){t.stats=s}))},destroyed:function(){clearInterval(this.interval),clearInterval(this.interval2)}},A=S,E=(a("a017"),a("2877")),O=Object(E["a"])(A,e,n,!1,null,"34b53d14",null);s["default"]=O.exports},"1ca7":function(t,s,a){"use strict";a("c438")},"2a7d":function(t,s,a){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,s,a){return s=i(s),s in t?Object.defineProperty(t,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[s]=a,t}function i(t){var s=r(t,"string");return"symbol"===e(s)?s:String(s)}function r(t,s){if("object"!==e(t)||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var n=a.call(t,s||"default");if("object"!==e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===s?String:Number)(t)}var o=function(){var t,s=this,a=s._self._c;return a("button",{staticClass:"button",class:(t={},n(t,"button_".concat(s.type),!0),n(t,"button_loading",s.loading),n(t,"button_disabled",s.disabled),t)},[s.loading?a("loader",{attrs:{size:"15px",border:"3px",absolute:""}}):s._e(),s._t("default")],2)},p=[],l=a("555f"),c={props:["type","loading","disabled"],components:{Loader:l["a"]}},u=c,_=(a("1ca7"),a("2877")),d=Object(_["a"])(u,o,p,!1,null,"4923320a",null);s["a"]=d.exports},"2b1c":function(t,s,a){},"5d09":function(t,s,a){t.exports=a.p+"img/icon-arrow.73c1f51b.svg"},"612c":function(t,s,a){"use strict";var e=function(){var t=this,s=t._self._c;return s("router-link",{staticClass:"app",class:{app_store:t.isInStore},attrs:{tag:"div",to:t.link}},[t.isInStore?t._e():s("div",{staticClass:"app__icon",class:{app__icon_vertical:"books"===t.type,app__icon_filled:t.app.image},style:"background-image: url(".concat(t.app.image,")")}),s("div",{staticClass:"app__desc"},[s("span",{staticClass:"app__title"},[t._v("\n      "+t._s(t.app.name)+" "),t.isInStore?s("span",[t._v("("+t._s(t.app.bundle_id)+")")]):t._e(),t.app.original_trackid&&"0"!==t.app.original_trackid?s("span",{staticClass:"app__badge"},[t._v(t._s(t.$t("TWEAKED")))]):t._e()]),t.isUpdatable?t._e():s("div",{staticClass:"app__info"},["books"!==t.type?s("span",{staticClass:"app__version"},[t._v("v "+t._s(t.app.version||t.app.bundle_version))]):t._e(),t.isInStore?s("span",{staticClass:"app__size"},[t._v(t._s(t.prettysize(t.app.size)))]):t._e(),t.isInStore?t._e():s("span",{staticClass:"app__price"},[s("img",{staticClass:"app__price-icon",attrs:{src:a("8663")}}),t._v("\n        "+t._s(t.$t(t.app.price.toUpperCase())))]),t.isInStore?t._e():s("router-link",{staticClass:"app__category",attrs:{to:"/search/?type=".concat(t.type,"&genre=").concat(t.app.genre_id)}},[t._v(t._s(t.app.genre_id&&t.genres[t.type][t.app.genre_id]&&t.$t(t.genres[t.type][t.app.genre_id].name.toUpperCase())))])],1),t.isRequestable||t.isUpdatable||t.isInStore||!+t.app.artist_id?t._e():s("router-link",{staticClass:"app__publisher",attrs:{to:"/search/?type=".concat(t.type,"&dev=").concat(t.app.artist_id)}},[t._v(t._s(t.app.pname))]),t.isRequestable?s("p",{staticClass:"app__status"},[t._v("\n      "+t._s(t.$t([t.app.status.toUpperCase(),t.app.status]))+" "+t._s(t.$t("SINCE"))+"\n      "+t._s(t.formatDate(1e3*t.app.status_changed_at))+"\n    ")]):t._e(),t.isUpdatable?s("span",{staticClass:"app__update"},[t._v("\n      v "+t._s(t.app.version_old)),s("img",{staticClass:"app__update-icon",attrs:{src:a("5d09")}}),t._v("v\n      "+t._s(t.app.version_new)+"\n    ")]):t._e(),t.isUpdatable&&!t.app.updateable?s("span",{staticClass:"app__update-warning"},[t._v(t._s(t.$t("NOT_UPDATEABLE")))]):t._e(),t.isInStore?s("span",{staticClass:"app__store-warning",class:"app__store-warning_".concat(t.compatibilityClass),domProps:{innerHTML:t._s(t.compatibilityString)}}):t._e()],1),t.isRequestable?s("div",{staticClass:"app__request request",class:{request_active:t.app.am_i_requested}},[s("div",{staticClass:"request__info",on:{click:function(s){return s.preventDefault(),t.$emit("request")}}},[s("span",{staticClass:"request__button"},[t._v("+1")]),s("svg",{staticClass:"request__icon",attrs:{version:"1.1",viewBox:"0 0 14 9",xmlns:"http://www.w3.org/2000/svg"}},[s("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[s("g",{staticClass:"request__icon-fill",attrs:{transform:"translate(-893 -259)",fill:"#8D8D8D","fill-rule":"nonzero"}},[s("g",{attrs:{transform:"translate(825 248)"}},[s("g",{attrs:{transform:"translate(28)"}},[s("g",{attrs:{transform:"translate(4 4)"}},[s("g",{attrs:{transform:"translate(36 2)"}},[s("path",{attrs:{d:"m9.324 9.674c0.504 0 1.064 0.074666 1.68 0.224 0.68134 0.17733 1.2367 0.406 1.666 0.686 0.504 0.336 0.756 0.714 0.756 1.134v1.456h-3.5v-1.456c0-0.79334-0.38266-1.4653-1.148-2.016 0.13067-0.018667 0.31267-0.028 0.546-0.028zm-4.648 0c0.504 0 1.0593 0.074666 1.666 0.224 0.68134 0.17733 1.232 0.406 1.652 0.686 0.504 0.336 0.756 0.714 0.756 1.134v1.456h-8.176v-1.456c0-0.42 0.252-0.798 0.756-1.134 0.42934-0.28 0.98466-0.50867 1.666-0.686 0.616-0.14933 1.176-0.224 1.68-0.224zm0-1.148c-0.308 0-0.59733-0.079333-0.868-0.238s-0.48533-0.37333-0.644-0.644-0.238-0.56-0.238-0.868 0.079333-0.59733 0.238-0.868 0.37333-0.48533 0.644-0.644 0.56-0.238 0.868-0.238 0.595 0.079333 0.861 0.238 0.476 0.371 0.63 0.637 0.231 0.55767 0.231 0.875-0.076999 0.609-0.231 0.875-0.364 0.47833-0.63 0.637-0.553 0.238-0.861 0.238zm4.648 0c-0.308 0-0.59733-0.079333-0.868-0.238s-0.48533-0.37333-0.644-0.644-0.238-0.56-0.238-0.868 0.079333-0.59733 0.238-0.868 0.37333-0.48533 0.644-0.644 0.56-0.238 0.868-0.238 0.59733 0.079333 0.868 0.238c0.27067 0.15867 0.48533 0.37333 0.644 0.644s0.238 0.56 0.238 0.868-0.079332 0.59733-0.238 0.868-0.37333 0.48533-0.644 0.644c-0.27067 0.15867-0.56 0.238-0.868 0.238z"}})])])])])])])]),s("span",{staticClass:"request__num"},[t._v(t._s(t.app.requesters_amount))])]),s("i18next",{directives:[{name:"show",rawName:"v-show",value:!t.app.am_i_requested,expression:"!app.am_i_requested"}],staticClass:"request__text",attrs:{tag:"span",path:"PLUS_1_IF_YOU_WANT_THIS"}},[s("span",{staticClass:"request__plus"},[t._v("+1")])])],1):t._e(),t.isInStore?s("div",{staticClass:"actions"},[s("button",{staticClass:"actions__install",class:{actions__install_disabled:t.installingIpa},on:{click:t.installIpa}},[s("img",{staticClass:"actions__install-icon",attrs:{src:a("8d1a")("./".concat(t.BRAND_KEY,"/images/icon-install-primary.svg"))}}),t._v("\n      "+t._s(t.$t("INSTALL"))+"\n      "),t.installingIpa?[s("div",{staticClass:"actions__loader"},[s("div",{staticClass:"actions__loader-dot"}),s("div",{staticClass:"actions__loader-dot"}),s("div",{staticClass:"actions__loader-dot"})]),s("div",{staticClass:"actions__tooltip"},[t._v(t._s(t.$t("REQUESTING"))+"...")])]:t._e()],2),s("button",{staticClass:"actions__remove",on:{click:function(s){return s.preventDefault(),t.deleteIpa.apply(null,arguments)}}},[t._v("\n      "+t._s(t.deletingIpa?t.$t("APP_REMOVING"):t.$t("REMOVE"))+"\n    ")])]):t._e()])},n=[],i=a("222b"),r=a.n(i),o=a("7fe0"),p={mixins:[o["a"]],props:["isRequestable","isUpdatable","isInStore","app","type"],data:function(){return{deletingIpa:!1,installingIpa:!1}},computed:{link:function(){return this.isInStore?"":"/app/".concat(this.type||this.app.type,"/").concat(this.isRequestable||this.isUpdatable?this.app.trackid:this.app.id)},genres:function(){return this.$store.getters.genres},compatibilityClass:function(){if(!this.isInStore)return"";var t=this.app.is_compatible.result;return"yes"===t?"success":"no"===t?"error":""},compatibilityString:function(){if(!this.isInStore)return"";var t=this.app.is_compatible,s=t.result,a=t.reason;return"yes"===s?"".concat(this.$t("COMPATIBLE_WITH_DEVICE"),". ").concat(a):"no"===s?"".concat(this.$t("NOT_COMPATIBLE_WITH_DEVICE"),". ").concat(a):"".concat(this.$t("COMPATIBILITY_UNKNOWN"),". ").concat(a)}},methods:{formatDate:function(t){return new Date(t).toLocaleString()},deleteIpa:function(){var t=this;this.isInStore&&!this.deletingIpa&&this.$confirm(this.$t("DELETE_APP_WARNING")).then((function(){t.deletingIpa=!0,t.$api.deleteIpa(t.app.id).then((function(){t.$emit("update")}))}))},installIpa:function(){var t=this;this.installingIpa||(this.installingIpa=!0,this.installApp(this.app.id,"MyAppStore").finally((function(){t.installingIpa=!1})))},prettysize:r.a}},l=p,c=(a("03ec"),a("2877")),u=Object(c["a"])(l,e,n,!1,null,"9f3bd442",null);s["a"]=u.exports},7345:function(t,s,a){t.exports=a.p+"img/icon-delete.0caaaece.svg"},8663:function(t,s,a){t.exports=a.p+"img/icon-price.86bac56f.svg"},"8d1a":function(t,s,a){var e={"./appaddict/images/icon-install-primary.svg":"713c","./appdb/images/icon-install-primary.svg":"ea47"};function n(t){var s=i(t);return a(s)}function i(t){if(!a.o(e,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e[t]}n.keys=function(){return Object.keys(e)},n.resolve=i,t.exports=n,n.id="8d1a"},"9cb7":function(t,s,a){},a017:function(t,s,a){"use strict";a("9cb7")},c438:function(t,s,a){},d399:function(t,s,a){t.exports=a.p+"img/icon-info.ba01e5e3.svg"}}]);
//# sourceMappingURL=chunk-6b4a8f50.2bc03479.js.map