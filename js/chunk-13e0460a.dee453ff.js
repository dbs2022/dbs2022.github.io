(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13e0460a"],{"09ab":function(t,e,s){"use strict";s("be00")},"1a24b":function(t,e,s){"use strict";s("51a9")},"222b":function(t,e,s){"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}var n=["Bytes","kB","MB","GB","TB","PB","EB"];t.exports=function(t,e,s,r,a){if("object"===i(e)){var o=e;e=o.nospace,s=o.one,r=o.places||1,a=o.numOnly}else r=r||1;for(var c,l=0;l<n.length;++l){var u=n[l];s&&(u=u.slice(0,1));var p,d=Math.pow(1024,l);t>=d&&(p=String((t/d).toFixed(r)),p.indexOf(".0")===p.length-2&&(p=p.slice(0,-2)),c=p+(e?"":" ")+u)}if(!c){var f=s?n[0].slice(0,1):n[0];c="0"+(e?"":" ")+f}return a&&(c=Number.parseFloat(c)),c}},2336:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main"},[e("h1",{staticClass:"heading"},[t._v(t._s(t.$t("REQUESTS")))]),e("aside",{staticClass:"filters"},[e("requests-filter",{attrs:{filter:t.filter.filter,price:t.filter.price}})],1),e("div",{staticClass:"apps"},[t.isLoading||t.apps.length?t._e():e("p",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.$t("NO_REQUESTS_FOUND")))]),t._l(t.apps,(function(s){return e("app",{key:s.id,ref:"app",refInFor:!0,attrs:{isRequestable:!0,type:"ios",app:s},on:{request:function(e){return t.requestOld(s)}}})})),e("loader",{directives:[{name:"show",rawName:"v-show",value:!t.isLastPage,expression:"!isLastPage"}]})],2),e("aside",{staticClass:"notifications"},[e("div",{staticClass:"notification"},[e("h3",{staticClass:"notification__heading"},[t._v(t._s(t.$t("REQUEST_FOR_APP")))]),e("p",{staticClass:"notification__text"},[t._v("\n        "+t._s(t.$t("AUTOMATIC_REQUESTS_TERMS"))+"\n      ")]),t.$store.getters.isDeviceLinked?e("button",{staticClass:"notification__link",on:{click:t.requestNew}},[t._v("\n        "+t._s(t.$t("REQUEST_APP_TO_BE_UPLOADED"))+"\n      ")]):e("router-link",{staticClass:"notification__link",attrs:{to:"/link"}},[t._v("\n        "+t._s(t.$t("LINK_YOUR_DEVICE"))+"\n      ")])],1)]),e("v-popup",{staticClass:"request-modal",attrs:{name:"request"},on:{closed:t.clearRequestPopup},scopedSlots:t._u([{key:"footer",fn:function(){return[e("button",{staticClass:"g-button",on:{click:function(e){return t.$modal.hide("request")}}},[t._v("\n        "+t._s(t.$t("CANCEL"))+"\n      ")]),e("button",{staticClass:"g-button g-button_primary",on:{click:t.request}},[e("loader",{directives:[{name:"show",rawName:"v-show",value:t.requesting,expression:"requesting"}],attrs:{size:"13px",border:"3px",absolute:""}}),t._v("\n        "+t._s(t.$t("OK_BUTTON"))+"\n      ")],1)]},proxy:!0}])},[t._v("\n    "+t._s(t.$t("COPY_PASTE_APPSTORE_URL"))+"\n\n    "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.requestUrl,expression:"requestUrl"}],ref:"requestUrlInput",staticClass:"input",domProps:{value:t.requestUrl},on:{input:function(e){e.target.composing||(t.requestUrl=e.target.value)}}}),e("v-checkbox",{staticClass:"request-modal__checkbox",model:{value:t.isRequestVersionInputVisible,callback:function(e){t.isRequestVersionInputVisible=e},expression:"isRequestVersionInputVisible"}},[t._v(t._s(t.$t("OLDER_VERSION")))]),t.isRequestVersionInputVisible?[e("div",[t._v(t._s(t.$t("ENTER_VERSION")))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.requestVersion,expression:"requestVersion"}],ref:"requestVersionInput",staticClass:"input",domProps:{value:t.requestVersion},on:{input:function(e){e.target.composing||(t.requestVersion=e.target.value)}}})]:t._e()],2)],1)},n=[],r=s("612c"),a=s("555f"),o=function(){var t=this,e=t._self._c;return e("modal",{staticClass:"modal",attrs:{name:t.name,pivotY:.1,width:300,height:"auto",overlayTransition:""},on:{closed:function(e){return t.$emit("closed")}}},[e("div",{staticClass:"text"},[t._t("default")],2),e("div",{staticClass:"buttons"},[t._t("footer")],2)])},c=[],l={props:["name"]},u=l,p=(s("c4f3"),s("2877")),d=Object(p["a"])(u,o,c,!1,null,"e9730d58",null),f=d.exports,_=function(){var t=this,e=t._self._c;return e("label",{staticClass:"checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.modelValue,expression:"modelValue"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.modelValue)?t._i(t.modelValue,null)>-1:t.modelValue},on:{change:function(e){var s=t.modelValue,i=e.target,n=!!i.checked;if(Array.isArray(s)){var r=null,a=t._i(s,r);i.checked?a<0&&(t.modelValue=s.concat([r])):a>-1&&(t.modelValue=s.slice(0,a).concat(s.slice(a+1)))}else t.modelValue=n}}}),e("span",{staticClass:"box"}),t._t("default")],2)},v=[],h={props:["value"],computed:{modelValue:{set:function(t){this.$emit("input",t)},get:function(){return this.value}}}},m=h,b=(s("d9c6"),Object(p["a"])(m,_,v,!1,null,"019ac39f",null)),g=b.exports,y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"filters"},[e("h2",{staticClass:"filters__heading"},[e("img",{staticClass:"filters__icon",attrs:{src:s("47d0")("./".concat(t.BRAND_KEY,"/images/icon-filter.svg"))}}),t._v("\n    "+t._s(t.$t("FILTER_BY"))+"\n  ")]),e("v-select",{staticClass:"select",attrs:{options:[{label:t.$t("NEW"),value:"new"},{label:t.$t("NOT_FULFILLED"),value:"not_fulfilled"}],reduce:function(t){return t.value},value:t.filter,searchable:!1,placeholder:t.$t("STATUS")},on:{input:function(e){return t.updateParams({filter:e})}}}),e("v-select",{staticClass:"select",attrs:{value:t.price,options:[{label:t.$t("PAID"),value:"1"},{label:t.$t("FREE"),value:"2"}],reduce:function(t){return t.value},searchable:!1,placeholder:t.$t("PRICE")},on:{input:function(e){return t.updateParams({price:e})}}})],1)},q=[];function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function A(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function S(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?A(Object(s),!0).forEach((function(e){C(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):A(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function C(t,e,s){return e=$(e),e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function $(t){var e=E(t,"string");return"symbol"===O(e)?e:String(e)}function E(t,e){if("object"!==O(t)||null===t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var i=s.call(t,e||"default");if("object"!==O(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var I={props:["filter","price"],methods:{updateParams:function(t){var e=S(S({},this.$route.query),t);Object.keys(e).forEach((function(t){e[t]||delete e[t]})),this.$router.push({query:e})}}},w=I,P=(s("1a24b"),Object(p["a"])(w,y,q,!1,null,"3e4ad7bc",null)),k=P.exports,R=s("2ef0");function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function U(t){return V(t)||x(t)||L(t)||T()}function T(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function L(t,e){if(t){if("string"===typeof t)return D(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?D(t,e):void 0}}function x(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function V(t){if(Array.isArray(t))return D(t)}function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,i=new Array(e);s<e;s++)i[s]=t[s];return i}function N(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function B(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?N(Object(s),!0).forEach((function(e){F(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):N(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function F(t,e,s){return e=z(e),e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function z(t){var e=M(t,"string");return"symbol"===j(e)?e:String(e)}function M(t,e){if("object"!==j(t)||null===t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var i=s.call(t,e||"default");if("object"!==j(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var Q={components:{App:r["a"],Loader:a["a"],VPopup:f,VCheckbox:g,RequestsFilter:k},data:function(){return{isLoading:!1,isLastPage:!1,page:1,apps:[],requesting:!1,isRequestVersionInputVisible:!1,requestUrl:"",requestVersion:"",params:B({},this.$route.query)}},computed:{title:function(){return this.$t("REQUESTS")},filter:function(){return{filter:this.params.filter,price:this.params.price}}},watch:{isRequestVersionInputVisible:function(t){var e=this;t&&this.$nextTick().then((function(){return e.$refs.requestVersionInput.focus()}))},"$route.query":{handler:function(){"requests"!==this.$route.name||Object(R["isEqual"])(this.$route.query,this.params)||(this.params=B({},this.$route.query),this.isLastPage=!1,this.apps=[],this.page=1,this.getApps())},deep:!0}},methods:{getApps:function(){var t=this;this.isLoading=!0;var e=B({},this.filter);return this.$api.getRequests(this.page,e).then((function(s){Object(R["isEqual"])(e,t.filter)&&(s=s.map((function(t){return"0.00"===t.price?t.price="free":t.price+=" EUR",t})),t.apps=[].concat(U(t.apps),U(s)),t.isLoading=!1,s.length<25&&(t.isLastPage=!0))}))},requestOld:function(t){t.am_i_requested||(t.am_i_requested=1,t.requesters_amount-=-1,this.$api.requestApp("/app/id".concat(t.trackid)).catch((function(){t.requested=!1,t.am_i_requested=0,t.requesters_amount-=1})))},requestNew:function(){var t=this;this.$modal.show("request"),this.$nextTick().then((function(){return t.$refs.requestUrlInput.focus()}))},request:function(){var t=this;this.requesting||(this.requesting=!0,this.$api.requestApp(this.requestUrl,this.requestVersion).then((function(){t.$modal.hide("request"),t.$notify({type:"success",text:t.$t("APP_REQUESTED_SUCCESSFULLY")}),t.apps=[],t.page=1,t.getApps()})).finally((function(){t.requesting=!1})))},clearRequestPopup:function(){this.requestUrl="",this.requestVersion="",this.isRequestVersionInputVisible=!1},handleScroll:Object(R["throttle"])((function(){if(!this.isLoading&&!this.isLastPage&&this.$refs.app){var t=this.apps.length-20,e=this.$refs.app[t>=0?t:0].$el.offsetTop;window.scrollY>e&&(this.page+=1,this.getApps())}}),1e3)},serverPrefetch:function(){return this.getApps()},created:function(){this.getApps()},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},Y=Q,G=(s("3072"),Object(p["a"])(Y,i,n,!1,null,"2b9f1a32",null));e["default"]=G.exports},"2a3e":function(t,e,s){},3072:function(t,e,s){"use strict";s("2a3e")},"3b9d":function(t,e,s){},"47d0":function(t,e,s){var i={"./AppAddict/images/icon-filter.svg":"cccc","./appdb/images/icon-filter.svg":"0316"};function n(t){var e=r(t);return s(e)}function r(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=r,t.exports=n,n.id="47d0"},"51a9":function(t,e,s){},"5d09":function(t,e,s){t.exports=s.p+"img/icon-arrow.73c1f51b.svg"},"612c":function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"app",class:{app_store:t.isInStore},attrs:{tag:"div",to:t.computedLink}},[[t.icon&&!t.iconFailedToLoad?e("v-lazy-image",{staticClass:"app__icon",attrs:{src:t.icon,"intersection-options":{rootMargin:"500px"}},on:{error:function(e){t.iconFailedToLoad=!0},load:function(e){t.iconLoaded=!0}}}):e("div",{staticClass:"app__empty-icon"})],e("div",{staticClass:"app__desc"},[e("span",{staticClass:"app__title"},[t._v("\n      "+t._s(t.app.name)+" "),t.isInStore?e("span",[t._v("("+t._s(t.app.bundle_id)+")")]):t._e(),t.app.original_trackid&&"0"!==t.app.original_trackid?e("span",{staticClass:"app__badge"},[t._v(t._s(t.$t("TWEAKED")))]):t._e()]),t.isUpdatable?t._e():e("div",{staticClass:"app__info"},[t.app.version||t.app.bundle_version?e("span",{staticClass:"app__version"},[t._v("v "+t._s(t.app.version||t.app.bundle_version))]):t._e(),t.app.size?e("span",{staticClass:"app__size"},[t._v(t._s(t.prettysize(t.app.size)))]):t._e(),t.isInStore?e("span",{staticClass:"app__public"},[t._v("\n        "+t._s(t.app.is_public?t.$t("PUBLIC"):t.$t("PRIVATE"))+"\n      ")]):t._e(),t.app.price?e("span",{staticClass:"app__price"},[e("img",{staticClass:"app__price-icon",attrs:{src:s("8663")}}),t._v("\n        "+t._s(t.$t(t.app.price.toUpperCase())))]):t._e(),t.isInStore?t._e():e("router-link",{staticClass:"app__category",attrs:{to:"/search/?type=".concat(t.type,"&genre=").concat(t.app.genre_id)}},[t._v(t._s(t.app.genre_id&&t.genres[t.type][t.app.genre_id]&&t.$t(t.genres[t.type][t.app.genre_id].name.toUpperCase())))])],1),t.isRequestable||t.isUpdatable||t.isInStore||!+t.app.artist_id?t._e():e("router-link",{staticClass:"app__publisher",attrs:{to:"/search/?type=".concat(t.type,"&dev=").concat(t.app.artist_id)}},[t._v(t._s(t.app.pname))]),t.isRequestable?e("p",{staticClass:"app__status"},[t._v("\n      "+t._s(t.$t([t.app.status.toUpperCase(),t.app.status]))+" "+t._s(t.$t("SINCE"))+"\n      "+t._s(t.formatDate(1e3*t.app.status_changed_at))+"\n    ")]):t._e(),t.isUpdatable?e("span",{staticClass:"app__update"},[t._v("\n      v "+t._s(t.app.version_old)),e("img",{staticClass:"app__update-icon",attrs:{src:s("5d09")}}),t._v("v\n      "+t._s(t.app.version_new)+"\n    ")]):t._e(),t.isUpdatable&&!t.app.updateable?e("span",{staticClass:"app__update-warning"},[t._v(t._s(t.$t("NOT_UPDATEABLE")))]):t._e(),t.compatibilityString?e("span",[t._v("\n      "+t._s(t.compatibilityString)+"\n    ")]):t._e()],1),t.isRequestable?e("div",{staticClass:"app__request request",class:{request_active:t.app.am_i_requested}},[e("div",{staticClass:"request__info",on:{click:function(e){return e.preventDefault(),t.$emit("request")}}},[e("span",{staticClass:"request__button"},[t._v("+1")]),e("svg",{staticClass:"request__icon",attrs:{version:"1.1",viewBox:"0 0 14 9",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{staticClass:"request__icon-fill",attrs:{transform:"translate(-893 -259)",fill:"#8D8D8D","fill-rule":"nonzero"}},[e("g",{attrs:{transform:"translate(825 248)"}},[e("g",{attrs:{transform:"translate(28)"}},[e("g",{attrs:{transform:"translate(4 4)"}},[e("g",{attrs:{transform:"translate(36 2)"}},[e("path",{attrs:{d:"m9.324 9.674c0.504 0 1.064 0.074666 1.68 0.224 0.68134 0.17733 1.2367 0.406 1.666 0.686 0.504 0.336 0.756 0.714 0.756 1.134v1.456h-3.5v-1.456c0-0.79334-0.38266-1.4653-1.148-2.016 0.13067-0.018667 0.31267-0.028 0.546-0.028zm-4.648 0c0.504 0 1.0593 0.074666 1.666 0.224 0.68134 0.17733 1.232 0.406 1.652 0.686 0.504 0.336 0.756 0.714 0.756 1.134v1.456h-8.176v-1.456c0-0.42 0.252-0.798 0.756-1.134 0.42934-0.28 0.98466-0.50867 1.666-0.686 0.616-0.14933 1.176-0.224 1.68-0.224zm0-1.148c-0.308 0-0.59733-0.079333-0.868-0.238s-0.48533-0.37333-0.644-0.644-0.238-0.56-0.238-0.868 0.079333-0.59733 0.238-0.868 0.37333-0.48533 0.644-0.644 0.56-0.238 0.868-0.238 0.595 0.079333 0.861 0.238 0.476 0.371 0.63 0.637 0.231 0.55767 0.231 0.875-0.076999 0.609-0.231 0.875-0.364 0.47833-0.63 0.637-0.553 0.238-0.861 0.238zm4.648 0c-0.308 0-0.59733-0.079333-0.868-0.238s-0.48533-0.37333-0.644-0.644-0.238-0.56-0.238-0.868 0.079333-0.59733 0.238-0.868 0.37333-0.48533 0.644-0.644 0.56-0.238 0.868-0.238 0.59733 0.079333 0.868 0.238c0.27067 0.15867 0.48533 0.37333 0.644 0.644s0.238 0.56 0.238 0.868-0.079332 0.59733-0.238 0.868-0.37333 0.48533-0.644 0.644c-0.27067 0.15867-0.56 0.238-0.868 0.238z"}})])])])])])])]),e("span",{staticClass:"request__num"},[t._v(t._s(t.app.requesters_amount))])]),e("i18next",{directives:[{name:"show",rawName:"v-show",value:!t.app.am_i_requested,expression:"!app.am_i_requested"}],staticClass:"request__text",attrs:{tag:"span",path:"PLUS_1_IF_YOU_WANT_THIS"}},[e("span",{staticClass:"request__plus"},[t._v("+1")])])],1):t._e(),t.isInStore?e("div",{staticClass:"actions"},[e("button",{staticClass:"actions__install",class:{actions__install_disabled:t.installingIpa},on:{click:t.installIpa}},[e("img",{staticClass:"actions__install-icon",attrs:{src:s("8d1a")("./".concat(t.BRAND_KEY,"/images/icon-install-primary.svg"))}}),t._v("\n      "+t._s(t.$t("INSTALL"))+"\n      "),t.installingIpa?[e("div",{staticClass:"actions__loader"},[e("div",{staticClass:"actions__loader-dot"}),e("div",{staticClass:"actions__loader-dot"}),e("div",{staticClass:"actions__loader-dot"})]),e("div",{staticClass:"actions__tooltip"},[t._v(t._s(t.$t("REQUESTING"))+"...")])]:t._e()],2),e("router-link",{attrs:{to:"/details/".concat(t.app.universal_object_identifier,"?id=").concat(t.app.id,"&editMode")}},[t._v(t._s(t.$t("EDIT_METADATA")))]),e("button",{staticClass:"actions__remove",on:{click:function(e){return e.preventDefault(),t.deleteIpa.apply(null,arguments)}}},[t._v("\n      "+t._s(t.deletingIpa?t.$t("APP_REMOVING"):t.$t("REMOVE"))+"\n    ")])],1):t._e()],2)},n=[],r=s("222b"),a=s.n(r),o=s("7fe0"),c=s("d7a2"),l=s("f601"),u={mixins:[o["a"]],components:{VLazyImage:c["a"]},props:{isRequestable:Boolean,isUpdatable:Boolean,isInStore:Boolean,isInRepo:Boolean,app:Object,type:String,repoId:String,index:Number,link:String},data:function(){return{deletingIpa:!1,installingIpa:!1,iconFailedToLoad:!1,iconLoaded:!1}},computed:{computedLink:function(){return this.link?this.link:this.isInStore?"":"/app/".concat(this.type||this.app.type,"/").concat(this.isRequestable||this.isUpdatable?this.app.trackid:this.app.id)},genres:function(){return this.$store.getters.genres},compatibilityString:function(){var t=this,e=l["a"].filter((function(e){var s=e.name;return t.app["min_".concat(s,"_version")]})).map((function(t){var e=t.device;return e}));return e.length?this.$t("FOR_X",[e.join(", ")]):""},icon:function(){return this.app.image||this.app.iconURL||this.app.icon_uri}},methods:{formatDate:function(t){return new Date(t).toLocaleString()},deleteIpa:function(){var t=this;this.isInStore&&!this.deletingIpa&&this.$confirm(this.$t("DELETE_APP_WARNING")).then((function(){t.deletingIpa=!0,t.$api.deleteIpa(t.app.id).then((function(){t.$emit("deleted")}))}))},installIpa:function(){var t=this;this.installingIpa||(this.app.no_installation_ticket_failure_reason?this.$notify({type:"error",text:this.app.no_installation_ticket_failure_reason.translated}):(this.installingIpa=!0,this.installApp(this.app.id,"universal",{installationTicket:this.app.installation_ticket}).finally((function(){t.installingIpa=!1}))))},prettysize:a.a}},p=u,d=(s("09ab"),s("2877")),f=Object(d["a"])(p,i,n,!1,null,"5d9c736d",null);e["a"]=f.exports},8663:function(t,e,s){t.exports=s.p+"img/icon-price.86bac56f.svg"},"8d1a":function(t,e,s){var i={"./AppAddict/images/icon-install-primary.svg":"ffc5","./appdb/images/icon-install-primary.svg":"ea47"};function n(t){var e=r(t);return s(e)}function r(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=r,t.exports=n,n.id="8d1a"},bb531:function(t,e,s){},be00:function(t,e,s){},c4f3:function(t,e,s){"use strict";s("bb531")},d7a2:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));var i={props:{src:{type:String,required:!0},srcPlaceholder:{type:String,default:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},srcset:{type:String},intersectionOptions:{type:Object,default:function(){return{}}},usePicture:{type:Boolean,default:!1}},inheritAttrs:!1,data:function(){return{observer:null,intersected:!1,loaded:!1}},computed:{srcImage:function(){return this.intersected&&this.src?this.src:this.srcPlaceholder},srcsetImage:function(){return!(!this.intersected||!this.srcset)&&this.srcset}},methods:{load:function(){this.$el&&this.$el.getAttribute("src")!==this.srcPlaceholder&&(this.loaded=!0,this.$emit("load",this.$el))},error:function(){this.$emit("error",this.$el)}},render:function(t){var e=t("img",{attrs:{src:this.srcImage,srcset:this.srcsetImage},domProps:this.$attrs,class:{"v-lazy-image":!0,"v-lazy-image-loaded":this.loaded},on:{load:this.load,error:this.error}});return this.usePicture?t("picture",{on:{load:this.load}},this.intersected?[this.$slots.default,e]:[e]):e},mounted:function(){var t=this;"IntersectionObserver"in window&&(this.observer=new IntersectionObserver((function(e){var s=e[0];s.isIntersecting&&(t.intersected=!0,t.observer.disconnect(),t.$emit("intersect"))}),this.intersectionOptions),this.observer.observe(this.$el))},destroyed:function(){"IntersectionObserver"in window&&this.observer.disconnect()}}},d9c6:function(t,e,s){"use strict";s("3b9d")}}]);
//# sourceMappingURL=chunk-13e0460a.dee453ff.js.map