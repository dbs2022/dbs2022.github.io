(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-724736a1"],{1924:function(t,e,s){},"561a":function(t,e,s){"use strict";s("fbb9")},"5d09":function(t,e,s){t.exports=s.p+"img/icon-arrow.73c1f51b.svg"},"5f2c":function(t,e,s){"use strict";s("1924")},"612c":function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"app",class:{app_store:t.isInStore},attrs:{tag:"div",to:t.computedLink}},[[t.icon&&!t.iconFailedToLoad?e("v-lazy-image",{staticClass:"app__icon",attrs:{src:t.icon,"intersection-options":{rootMargin:"500px"}},on:{error:function(e){t.iconFailedToLoad=!0},load:function(e){t.iconLoaded=!0}}}):e("div",{staticClass:"app__empty-icon"})],e("div",{staticClass:"app__desc"},[e("span",{staticClass:"app__title"},[t._v("\n      "+t._s(t.app.name)+" "),t.isInStore?e("span",[t._v("("+t._s(t.app.bundle_id)+")")]):t._e(),t.app.original_trackid&&"0"!==t.app.original_trackid?e("span",{staticClass:"app__badge"},[t._v(t._s(t.$t("TWEAKED")))]):t._e()]),t.isUpdatable?t._e():e("div",{staticClass:"app__info"},[t.app.version||t.app.bundle_version?e("span",{staticClass:"app__version"},[t._v("v "+t._s(t.app.version||t.app.bundle_version))]):t._e(),t.app.size?e("span",{staticClass:"app__size"},[t._v(t._s(t.prettysize(t.app.size)))]):t._e(),t.isInStore?e("span",{staticClass:"app__public"},[t._v("\n        "+t._s(t.app.is_public?t.$t("PUBLIC"):t.$t("PRIVATE"))+"\n      ")]):t._e(),t.app.price?e("span",{staticClass:"app__price"},[e("img",{staticClass:"app__price-icon",attrs:{src:s("8663")}}),t._v("\n        "+t._s(t.$t(t.app.price.toUpperCase())))]):t._e(),t.isInStore?t._e():e("router-link",{staticClass:"app__category",attrs:{to:"/search/?type=".concat(t.type,"&genre=").concat(t.app.genre_id)}},[t._v(t._s(t.app.genre_id&&t.genres[t.type][t.app.genre_id]&&t.$t(t.genres[t.type][t.app.genre_id].name.toUpperCase())))])],1),t.isRequestable||t.isUpdatable||t.isInStore||!+t.app.artist_id?t._e():e("router-link",{staticClass:"app__publisher",attrs:{to:"/search/?type=".concat(t.type,"&dev=").concat(t.app.artist_id)}},[t._v(t._s(t.app.pname))]),t.isRequestable?e("p",{staticClass:"app__status"},[t._v("\n      "+t._s(t.$t([t.app.status.toUpperCase(),t.app.status]))+" "+t._s(t.$t("SINCE"))+"\n      "+t._s(t.formatDate(1e3*t.app.status_changed_at))+"\n    ")]):t._e(),t.isUpdatable?e("span",{staticClass:"app__update"},[t._v("\n      v "+t._s(t.app.version_old)),e("img",{staticClass:"app__update-icon",attrs:{src:s("5d09")}}),t._v("v\n      "+t._s(t.app.version_new)+"\n    ")]):t._e(),t.isUpdatable&&!t.app.updateable?e("span",{staticClass:"app__update-warning"},[t._v(t._s(t.$t("NOT_UPDATEABLE")))]):t._e(),t.compatibilityString?e("span",[t._v("\n      "+t._s(t.compatibilityString)+"\n    ")]):t._e()],1),t.isRequestable?e("div",{staticClass:"app__request request",class:{request_active:t.app.am_i_requested}},[e("div",{staticClass:"request__info",on:{click:function(e){return e.preventDefault(),t.$emit("request")}}},[e("span",{staticClass:"request__button"},[t._v("+1")]),e("svg",{staticClass:"request__icon",attrs:{version:"1.1",viewBox:"0 0 14 9",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{staticClass:"request__icon-fill",attrs:{transform:"translate(-893 -259)",fill:"#8D8D8D","fill-rule":"nonzero"}},[e("g",{attrs:{transform:"translate(825 248)"}},[e("g",{attrs:{transform:"translate(28)"}},[e("g",{attrs:{transform:"translate(4 4)"}},[e("g",{attrs:{transform:"translate(36 2)"}},[e("path",{attrs:{d:"m9.324 9.674c0.504 0 1.064 0.074666 1.68 0.224 0.68134 0.17733 1.2367 0.406 1.666 0.686 0.504 0.336 0.756 0.714 0.756 1.134v1.456h-3.5v-1.456c0-0.79334-0.38266-1.4653-1.148-2.016 0.13067-0.018667 0.31267-0.028 0.546-0.028zm-4.648 0c0.504 0 1.0593 0.074666 1.666 0.224 0.68134 0.17733 1.232 0.406 1.652 0.686 0.504 0.336 0.756 0.714 0.756 1.134v1.456h-8.176v-1.456c0-0.42 0.252-0.798 0.756-1.134 0.42934-0.28 0.98466-0.50867 1.666-0.686 0.616-0.14933 1.176-0.224 1.68-0.224zm0-1.148c-0.308 0-0.59733-0.079333-0.868-0.238s-0.48533-0.37333-0.644-0.644-0.238-0.56-0.238-0.868 0.079333-0.59733 0.238-0.868 0.37333-0.48533 0.644-0.644 0.56-0.238 0.868-0.238 0.595 0.079333 0.861 0.238 0.476 0.371 0.63 0.637 0.231 0.55767 0.231 0.875-0.076999 0.609-0.231 0.875-0.364 0.47833-0.63 0.637-0.553 0.238-0.861 0.238zm4.648 0c-0.308 0-0.59733-0.079333-0.868-0.238s-0.48533-0.37333-0.644-0.644-0.238-0.56-0.238-0.868 0.079333-0.59733 0.238-0.868 0.37333-0.48533 0.644-0.644 0.56-0.238 0.868-0.238 0.59733 0.079333 0.868 0.238c0.27067 0.15867 0.48533 0.37333 0.644 0.644s0.238 0.56 0.238 0.868-0.079332 0.59733-0.238 0.868-0.37333 0.48533-0.644 0.644c-0.27067 0.15867-0.56 0.238-0.868 0.238z"}})])])])])])])]),e("span",{staticClass:"request__num"},[t._v(t._s(t.app.requesters_amount))])]),e("i18next",{directives:[{name:"show",rawName:"v-show",value:!t.app.am_i_requested,expression:"!app.am_i_requested"}],staticClass:"request__text",attrs:{tag:"span",path:"PLUS_1_IF_YOU_WANT_THIS"}},[e("span",{staticClass:"request__plus"},[t._v("+1")])])],1):t._e(),t.isInStore?e("div",{staticClass:"actions"},[e("button",{staticClass:"actions__install",class:{actions__install_disabled:t.installingIpa},on:{click:t.installIpa}},[e("img",{staticClass:"actions__install-icon",attrs:{src:s("8d1a")("./".concat(t.BRAND_KEY,"/images/icon-install-primary.svg"))}}),t._v("\n      "+t._s(t.$t("INSTALL"))+"\n      "),t.installingIpa?[e("div",{staticClass:"actions__loader"},[e("div",{staticClass:"actions__loader-dot"}),e("div",{staticClass:"actions__loader-dot"}),e("div",{staticClass:"actions__loader-dot"})]),e("div",{staticClass:"actions__tooltip"},[t._v(t._s(t.$t("REQUESTING"))+"...")])]:t._e()],2),e("router-link",{attrs:{to:"/details/".concat(t.app.universal_object_identifier,"?id=").concat(t.app.id,"&editMode")}},[t._v(t._s(t.$t("EDIT_METADATA")))]),e("button",{staticClass:"actions__remove",on:{click:function(e){return e.preventDefault(),t.deleteIpa.apply(null,arguments)}}},[t._v("\n      "+t._s(t.deletingIpa?t.$t("APP_REMOVING"):t.$t("REMOVE"))+"\n    ")])],1):t._e()],2)},i=[],n=s("222b"),r=s.n(n),o=s("7fe0"),p=s("d7a2");function c(t,e){return f(t)||d(t,e)||_(t,e)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _(t,e){if(t){if("string"===typeof t)return u(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,a=new Array(e);s<e;s++)a[s]=t[s];return a}function d(t,e){var s=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=s){var a,i,n,r,o=[],p=!0,c=!1;try{if(n=(s=s.call(t)).next,0===e){if(Object(s)!==s)return;p=!1}else for(;!(p=(a=n.call(s)).done)&&(o.push(a.value),o.length!==e);p=!0);}catch(t){c=!0,i=t}finally{try{if(!p&&null!=s.return&&(r=s.return(),Object(r)!==r))return}finally{if(c)throw i}}return o}}function f(t){if(Array.isArray(t))return t}var v={mixins:[o["a"]],components:{VLazyImage:p["a"]},props:{isRequestable:Boolean,isUpdatable:Boolean,isInStore:Boolean,isInRepo:Boolean,app:Object,type:String,repoId:String,index:Number,link:String},data:function(){return{deletingIpa:!1,installingIpa:!1,iconFailedToLoad:!1,iconLoaded:!1}},computed:{computedLink:function(){return this.link?this.link:this.isInStore?"":"/app/".concat(this.type||this.app.type,"/").concat(this.isRequestable||this.isUpdatable?this.app.trackid:this.app.id)},genres:function(){return this.$store.getters.genres},compatibilityString:function(){var t=this,e={ios:"iPhone",ipados:"iPad",tvos:"Apple TV",visionos:"Apple Vision",macos:"Mac",watchos:"Apple Watch"},s=Object.entries(e).filter((function(e){var s=c(e,1),a=s[0];return t.app["min_".concat(a,"_version")]})).map((function(t){var e=c(t,2),s=e[1];return s}));return s.length?this.$t("FOR_X",[s.join(", ")]):""},icon:function(){return this.app.image||this.app.iconURL||this.app.icon_uri}},methods:{formatDate:function(t){return new Date(t).toLocaleString()},deleteIpa:function(){var t=this;this.isInStore&&!this.deletingIpa&&this.$confirm(this.$t("DELETE_APP_WARNING")).then((function(){t.deletingIpa=!0,t.$api.deleteIpa(t.app.id).then((function(){t.$emit("update")}))}))},installIpa:function(){var t=this;this.installingIpa||(this.app.no_installation_ticket_failure_reason?this.$notify({type:"error",text:this.app.no_installation_ticket_failure_reason.translated}):(this.installingIpa=!0,this.installApp(this.app.id,"universal",{installationTicket:this.app.installation_ticket}).finally((function(){t.installingIpa=!1}))))},prettysize:r.a}},h=v,g=(s("561a"),s("2877")),m=Object(g["a"])(h,a,i,!1,null,"cf275b9e",null);e["a"]=m.exports},"78b8":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main"},[e("h1",{staticClass:"intro"},[t._v(t._s(t.$t("DEVICE_UPDATES_TITLE")))]),e("div",{staticClass:"row"},[e("div",{staticClass:"apps"},[t.pending?e("loader"):t._e(),t._l(t.apps,(function(t){return e("app",{key:t.trackid,attrs:{isUpdatable:!0,app:t}})}))],2),e("div",{staticClass:"warning g-text"},[t._v("\n      "+t._s(t.$t("APPS_APPSTORE_OTA_CANNOT_BE_UPDATED"))+"\n    ")])])])},i=[],n=s("612c"),r=s("555f"),o={components:{App:n["a"],Loader:r["a"]},data:function(){return{pending:!0,apps:[]}},computed:{title:function(){return this.$t("DEVICE_UPDATES_TITLE")}},created:function(){var t=this;this.$api.getUpdates().then((function(e){t.apps=e})).finally((function(){t.pending=!1}))}},p=o,c=(s("5f2c"),s("2877")),l=Object(c["a"])(p,a,i,!1,null,"a296c268",null);e["default"]=l.exports},8663:function(t,e,s){t.exports=s.p+"img/icon-price.86bac56f.svg"},"8d1a":function(t,e,s){var a={"./AppAddict/images/icon-install-primary.svg":"ffc5","./appdb/images/icon-install-primary.svg":"ea47"};function i(t){var e=n(t);return s(e)}function n(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id="8d1a"},d7a2:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var a={props:{src:{type:String,required:!0},srcPlaceholder:{type:String,default:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},srcset:{type:String},intersectionOptions:{type:Object,default:function(){return{}}},usePicture:{type:Boolean,default:!1}},inheritAttrs:!1,data:function(){return{observer:null,intersected:!1,loaded:!1}},computed:{srcImage:function(){return this.intersected&&this.src?this.src:this.srcPlaceholder},srcsetImage:function(){return!(!this.intersected||!this.srcset)&&this.srcset}},methods:{load:function(){this.$el&&this.$el.getAttribute("src")!==this.srcPlaceholder&&(this.loaded=!0,this.$emit("load",this.$el))},error:function(){this.$emit("error",this.$el)}},render:function(t){var e=t("img",{attrs:{src:this.srcImage,srcset:this.srcsetImage},domProps:this.$attrs,class:{"v-lazy-image":!0,"v-lazy-image-loaded":this.loaded},on:{load:this.load,error:this.error}});return this.usePicture?t("picture",{on:{load:this.load}},this.intersected?[this.$slots.default,e]:[e]):e},mounted:function(){var t=this;"IntersectionObserver"in window&&(this.observer=new IntersectionObserver((function(e){var s=e[0];s.isIntersecting&&(t.intersected=!0,t.observer.disconnect(),t.$emit("intersect"))}),this.intersectionOptions),this.observer.observe(this.$el))},destroyed:function(){"IntersectionObserver"in window&&this.observer.disconnect()}}},fbb9:function(t,e,s){}}]);
//# sourceMappingURL=chunk-724736a1.81c38c8a.js.map