(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0856f9c6"],{"222b":function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}var i=["Bytes","kB","MB","GB","TB","PB","EB"];t.exports=function(t,e,r,o,a){if("object"===n(e)){var s=e;e=s.nospace,r=s.one,o=s.places||1,a=s.numOnly}else o=o||1;for(var c,u=0;u<i.length;++u){var l=i[u];r&&(l=l.slice(0,1));var p,f=Math.pow(1024,u);t>=f&&(p=String((t/f).toFixed(o)),p.indexOf(".0")===p.length-2&&(p=p.slice(0,-2)),c=p+(e?"":" ")+l)}if(!c){var h=r?i[0].slice(0,1):i[0];c="0"+(e?"":" ")+h}return a&&(c=Number.parseFloat(c)),c}},"3b9d":function(t,e,r){},"47d0":function(t,e,r){var n={"./AppAddict/images/icon-filter.svg":"cccc","./appdb/images/icon-filter.svg":"0316"};function i(t){var e=o(t);return r(e)}function o(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=o,t.exports=i,i.id="47d0"},"5ba2":function(t,e,r){},"5d09":function(t,e,r){t.exports=r.p+"img/icon-arrow.73c1f51b.svg"},"612c":function(t,e,r){"use strict";var n=function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"app",class:{app_store:t.isInStore,"app_no-link":!t.computedLink},attrs:{tag:"div",to:t.computedLink}},[[t.icon&&!t.iconFailedToLoad?e("v-lazy-image",{staticClass:"app__icon",attrs:{src:t.icon,"intersection-options":{rootMargin:"500px"}},on:{error:function(e){t.iconFailedToLoad=!0},load:function(e){t.iconLoaded=!0}}}):e("div",{staticClass:"app__empty-icon"})],e("div",{staticClass:"app__desc"},[e("span",{staticClass:"app__title"},[t._v("\n      "+t._s(t.app.name)+" ")]),t.isUpdatable?t._e():e("div",{staticClass:"app__info"},[t.app.version||t.app.bundle_version?e("span",{staticClass:"app__version"},[t._v("v "+t._s(t.app.version||t.app.bundle_version))]):t._e(),t.app.size?e("span",{staticClass:"app__size"},[t._v(t._s(t.prettysize(t.app.size)))]):t._e(),t.isInStore?e("span",{staticClass:"app__public"},[t._v("\n        "+t._s(t.app.is_public?t.$t("PUBLIC"):t.$t("PRIVATE"))+"\n      ")]):t._e(),t.isInStore?t._e():e("router-link",{staticClass:"app__category",attrs:{to:"/search/?type=".concat(t.type,"&genre=").concat(t.app.genre_id)}},[t._v(t._s(t.app.genre_id&&t.genres[t.type][t.app.genre_id]&&t.$t(t.genres[t.type][t.app.genre_id].name.toUpperCase())))])],1),t.isRequestable||t.isUpdatable||t.isInStore||!+t.app.artist_id?t._e():e("router-link",{staticClass:"app__publisher",attrs:{to:"/search/?type=".concat(t.type,"&dev=").concat(t.app.artist_id)}},[t._v(t._s(t.app.pname))]),t.isRequestable?e("p",{staticClass:"app__status"},[t._v("\n      "+t._s(t.$t([t.app.status.toUpperCase(),t.app.status]))+" "+t._s(t.$t("SINCE"))+"\n      "+t._s(t.formatDate(1e3*t.app.status_changed_at))+"\n    ")]):t._e(),t.isUpdatable?e("span",{staticClass:"app__update"},[t._v("\n      v "+t._s(t.app.version_old)),e("img",{staticClass:"app__update-icon",attrs:{src:r("5d09")}}),t._v("v\n      "+t._s(t.app.version_new)+"\n    ")]):t._e(),t.isUpdatable&&!t.app.updateable?e("span",{staticClass:"app__update-warning"},[t._v(t._s(t.$t("NOT_UPDATEABLE")))]):t._e(),t.compatibilityString?e("span",[t._v("\n      "+t._s(t.compatibilityString)+"\n    ")]):t._e()],1),t.isRequestable?e("div",{staticClass:"app__request request"},[t.isDeviceLinked&&"fulfilled"!==t.app.status?e("v-button",{attrs:{type:"primary"},nativeOn:{"!click":function(e){return e.stopPropagation(),t.$emit("tryFulfill",t.app)}}},[t._v("\n      "+t._s(t.$t("FULFILL"))+"\n    ")]):t._e()],1):t._e(),t.isInStore?e("div",{staticClass:"actions"},[e("button",{staticClass:"actions__install",class:{actions__install_disabled:t.installingIpa},on:{click:t.installIpa}},[e("img",{staticClass:"actions__install-icon",attrs:{src:r("8d1a")("./".concat(t.BRAND_KEY,"/images/icon-install-primary.svg"))}}),t._v("\n      "+t._s(t.$t("INSTALL"))+"\n      "),t.installingIpa?[e("div",{staticClass:"actions__loader"},[e("div",{staticClass:"actions__loader-dot"}),e("div",{staticClass:"actions__loader-dot"}),e("div",{staticClass:"actions__loader-dot"})]),e("div",{staticClass:"actions__tooltip"},[t._v(t._s(t.$t("REQUESTING"))+"...")])]:t._e()],2),e("router-link",{attrs:{to:"/details/".concat(t.app.universal_object_identifier,"?id=").concat(t.app.id,"&editMode")}},[t._v(t._s(t.$t("EDIT_METADATA")))]),e("button",{staticClass:"actions__remove",on:{click:function(e){return e.preventDefault(),t.deleteIpa.apply(null,arguments)}}},[t._v("\n      "+t._s(t.deletingIpa?t.$t("APP_REMOVING"):t.$t("REMOVE"))+"\n    ")])],1):t._e()],2)},i=[],o=r("222b"),a=r.n(o),s=r("7fe0"),c=r("d7a2"),u=r("f601"),l=r("2a7d"),p=r("2f62");function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){v(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function v(t,e,r){return e=y(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function y(t){var e=m(t,"string");return"symbol"===f(e)?e:String(e)}function m(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var g={mixins:[s["a"]],components:{VLazyImage:c["a"],VButton:l["a"]},props:{isRequestable:Boolean,isUpdatable:Boolean,isInStore:Boolean,isInRepo:Boolean,app:Object,type:String,repoId:String,index:Number,link:String},data:function(){return{deletingIpa:!1,installingIpa:!1,iconFailedToLoad:!1,iconLoaded:!1}},computed:d(d({},Object(p["d"])(["isDeviceLinked"])),{},{computedLink:function(){return this.link?this.link:this.isInStore?"":this.isRequestable?"fulfilled"===this.app.status?"/details/".concat(this.app.fulfilled_universal_object_identifier):"":"/app/".concat(this.type||this.app.type,"/").concat(this.isRequestable||this.isUpdatable?this.app.trackid:this.app.id)},genres:function(){return this.$store.getters.genres},compatibilityString:function(){var t=this,e=u["a"].filter((function(e){var r=e.name;return t.app["min_".concat(r,"_version")]})).map((function(t){var e=t.device;return e}));return e.length?this.$t("FOR_X",[e.join(", ")]):""},icon:function(){return this.app.image||this.app.iconURL||this.app.icon_uri}}),methods:{formatDate:function(t){return new Date(t).toLocaleString()},deleteIpa:function(){var t=this;this.isInStore&&!this.deletingIpa&&this.$confirm(this.$t("DELETE_APP_WARNING")).then((function(){t.deletingIpa=!0,t.$api.deleteIpa(t.app.id).then((function(){t.$emit("deleted")}))}))},installIpa:function(){var t=this;this.installingIpa||(this.app.no_installation_ticket_failure_reason?this.$notify({type:"error",text:this.app.no_installation_ticket_failure_reason.translated}):(this.installingIpa=!0,this.installApp(this.app.id,"universal",{installationTicket:this.app.installation_ticket}).finally((function(){t.installingIpa=!1}))))},prettysize:a.a}},b=g,_=(r("f3ae"),r("2877")),w=Object(_["a"])(b,n,i,!1,null,"24de4722",null);e["a"]=w.exports},"8d1a":function(t,e,r){var n={"./AppAddict/images/icon-install-primary.svg":"ffc5","./appdb/images/icon-install-primary.svg":"ea47"};function i(t){var e=o(t);return r(e)}function o(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=o,t.exports=i,i.id="8d1a"},b91a:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main"},[e("h1",{staticClass:"heading"},[t._v(t._s(t.$t("REQUESTS")))]),e("aside",{staticClass:"filters"},[e("requests-filter",{attrs:{filter:t.filter.filter,price:t.filter.price}})],1),e("div",{staticClass:"apps"},[t.isLoading||t.apps.length?t._e():e("p",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.$t("NO_REQUESTS_FOUND")))]),t._l(t.apps,(function(r){return e("app",{key:r.id,ref:"app",refInFor:!0,attrs:{isRequestable:!0,type:"ios",app:r},on:{tryFulfill:t.tryFulfill}})})),e("loader",{directives:[{name:"show",rawName:"v-show",value:!t.isLastPage,expression:"!isLastPage"}]})],2),e("aside",{staticClass:"notifications"},[e("div",{staticClass:"notification"},[e("h3",{staticClass:"notification__heading"},[t._v(t._s(t.$t("REQUEST_FOR_APP")))]),e("html-with-links",{staticClass:"notification__text",attrs:{tag:"p",html:t.$t("AUTOMATIC_REQUESTS_TERMS",{href:"/"})}}),t.$store.getters.isDeviceLinked?e("button",{staticClass:"notification__link",on:{click:t.requestNew}},[t._v("\n        "+t._s(t.$t("REQUEST_APP_TO_BE_UPLOADED"))+"\n      ")]):e("router-link",{staticClass:"notification__link",attrs:{to:"/link"}},[t._v("\n        "+t._s(t.$t("LINK_YOUR_DEVICE"))+"\n      ")])],1)]),e("v-popup",{staticClass:"request-modal",attrs:{name:"request"},on:{closed:t.clearRequestPopup},scopedSlots:t._u([{key:"footer",fn:function(){return[e("button",{staticClass:"g-button",on:{click:function(e){return t.$modal.hide("request")}}},[t._v("\n        "+t._s(t.$t("CANCEL"))+"\n      ")]),e("button",{staticClass:"g-button g-button_primary",on:{click:t.request}},[e("loader",{directives:[{name:"show",rawName:"v-show",value:t.requesting,expression:"requesting"}],attrs:{size:"13px",border:"3px",absolute:""}}),t._v("\n        "+t._s(t.$t("OK_BUTTON"))+"\n      ")],1)]},proxy:!0}])},[t._v("\n    "+t._s(t.$t("COPY_PASTE_APPSTORE_URL"))+"\n\n    "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.requestUrl,expression:"requestUrl"}],ref:"requestUrlInput",staticClass:"input",domProps:{value:t.requestUrl},on:{input:function(e){e.target.composing||(t.requestUrl=e.target.value)}}}),e("v-checkbox",{staticClass:"request-modal__checkbox",model:{value:t.isRequestVersionInputVisible,callback:function(e){t.isRequestVersionInputVisible=e},expression:"isRequestVersionInputVisible"}},[t._v(t._s(t.$t("OLDER_VERSION"))+"\n    ")]),t.isRequestVersionInputVisible?[e("div",[t._v(t._s(t.$t("ENTER_VERSION")))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.requestVersion,expression:"requestVersion"}],ref:"requestVersionInput",staticClass:"input",domProps:{value:t.requestVersion},on:{input:function(e){e.target.composing||(t.requestVersion=e.target.value)}}})]:t._e()],2),e("universal-search-modal",{attrs:{request:t.fulfillingRequest},on:{fulfilled:t.onFulfilled}})],1)},i=[],o=r("612c"),a=r("555f"),s=function(){var t=this,e=t._self._c;return e("modal",{staticClass:"modal",attrs:{name:t.name,pivotY:.1,width:300,height:"auto",overlayTransition:""},on:{closed:function(e){return t.$emit("closed")}}},[e("div",{staticClass:"text"},[t._t("default")],2),e("div",{staticClass:"buttons"},[t._t("footer")],2)])},c=[],u={props:["name"]},l=u,p=(r("c4f3"),r("2877")),f=Object(p["a"])(l,s,c,!1,null,"e9730d58",null),h=f.exports,d=function(){var t=this,e=t._self._c;return e("label",{staticClass:"checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.modelValue,expression:"modelValue"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.modelValue)?t._i(t.modelValue,null)>-1:t.modelValue},on:{change:function(e){var r=t.modelValue,n=e.target,i=!!n.checked;if(Array.isArray(r)){var o=null,a=t._i(r,o);n.checked?a<0&&(t.modelValue=r.concat([o])):a>-1&&(t.modelValue=r.slice(0,a).concat(r.slice(a+1)))}else t.modelValue=i}}}),e("span",{staticClass:"box"}),t._t("default")],2)},v=[],y={props:["value"],computed:{modelValue:{set:function(t){this.$emit("input",t)},get:function(){return this.value}}}},m=y,g=(r("d9c6"),Object(p["a"])(m,d,v,!1,null,"019ac39f",null)),b=g.exports,_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"filters"},[e("h2",{staticClass:"filters__heading"},[e("img",{staticClass:"filters__icon",attrs:{src:r("47d0")("./".concat(t.BRAND_KEY,"/images/icon-filter.svg"))}}),t._v("\n    "+t._s(t.$t("FILTER_BY"))+"\n  ")]),e("v-select",{staticClass:"select",attrs:{options:[{label:t.$t("NEW"),value:"new"},{label:t.$t("NOT_FULFILLED"),value:"not_fulfilled"}],reduce:function(t){return t.value},value:t.filter,searchable:!1,placeholder:t.$t("STATUS")},on:{input:function(e){return t.updateParams({filter:e})}}})],1)},w=[];function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(Object(r),!0).forEach((function(e){L(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function L(t,e,r){return e=x(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function x(t){var e=j(t,"string");return"symbol"===O(e)?e:String(e)}function j(t,e){if("object"!==O(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var P={props:["filter","price"],methods:{updateParams:function(t){var e=S(S({},this.$route.query),t);Object.keys(e).forEach((function(t){e[t]||delete e[t]})),this.$router.push({query:e})}}},q=P,A=(r("e66b"),Object(p["a"])(q,_,w,!1,null,"6f09f606",null)),$=A.exports,k=r("2ef0"),I=r("13a2"),C=function(){var t,e=this,r=e._self._c;return r("v-modal",{attrs:{name:e.modalName,width:700,height:"100%","close-button":""}},[r("universal-search",{key:null===(t=e.request)||void 0===t?void 0:t.id,attrs:{filters:e.filters},on:{"update:filters":e.updateFilters},scopedSlots:e._u([{key:"app-custom-action",fn:function(t){var n=t.app;return[r("v-button",{attrs:{type:"primary",loading:n.universal_object_identifier===e.fulfillingAppUoid},nativeOn:{click:function(t){return e.fulfill(n)}}},[e._v("\n                "+e._s(e.$t("SELECT"))+"\n            ")])]}}])})],1)},R=[],T=r("eacb"),U=r("55c3"),N=r("2a7d");function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function F(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */F=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),s=new A(n||[]);return i(a,"_invoke",{value:x(t,r,s)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var f="suspendedStart",h="suspendedYield",d="executing",v="completed",y={};function m(){}function g(){}function b(){}var _={};u(_,a,(function(){return this}));var w=Object.getPrototypeOf,O=w&&w(w($([])));O&&O!==r&&n.call(O,a)&&(_=O);var E=b.prototype=m.prototype=Object.create(_);function S(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(i,o,a,s){var c=p(t[i],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==V(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,i){r(t,n,e,i)}))}return o=o?o.then(i,i):i()}})}function x(e,r,n){var i=f;return function(o,a){if(i===d)throw new Error("Generator is already running");if(i===v){if("throw"===o)throw a;return{value:t,done:!0}}for(n.method=o,n.arg=a;;){var s=n.delegate;if(s){var c=j(s,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===f)throw i=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=d;var u=p(e,r,n);if("normal"===u.type){if(i=n.done?v:h,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(i=v,n.method="throw",n.arg=u.arg)}}}function j(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var o=p(i,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function $(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(V(e)+" is not iterable")}return g.prototype=b,i(E,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:g,configurable:!0}),g.displayName=u(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},S(L.prototype),u(L.prototype,s,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new L(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(E),u(E,c,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=$,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(q),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),q(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;q(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:$(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function D(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,i)}function B(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){D(o,n,i,a,s,"next",t)}function s(t){D(o,n,i,a,s,"throw",t)}a(void 0)}))}}var G={components:{VModal:T["a"],UniversalSearch:U["a"],VButton:N["a"]},props:{request:Object},data:function(){return{modalName:"fulfillRequestFromUniversalSearch",fulfillingAppUoid:null,filters:{name:""}}},methods:{fulfill:function(t){var e=this;return B(F().mark((function r(){var n;return F().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!e.fulfillingAppUoid){r.next=2;break}return r.abrupt("return");case 2:return e.fulfillingAppUoid=t.universal_object_identifier,r.prev=3,r.next=6,e.$api.setPublishRequestStatus({status:"fulfilled",id:e.request.id,uoid:t.universal_object_identifier,type:"ios"});case 6:n=r.sent,e.$emit("fulfilled",n),e.$modal.hide(e.modalName);case 9:return r.prev=9,e.fulfillingAppUoid=null,r.finish(9);case 12:case"end":return r.stop()}}),r,null,[[3,,9,12]])})))()},updateFilters:function(t){for(var e in t)this.$set(this.filters,e,t[e])}},watch:{request:{handler:function(){var t;this.filters={},this.$set(this.filters,"name",(null===(t=this.request)||void 0===t?void 0:t.name)||"")},deep:!0}}},M=G,Y=Object(p["a"])(M,C,R,!1,null,null,null),z=Y.exports;function Q(t){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q(t)}function K(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */K=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),s=new A(n||[]);return i(a,"_invoke",{value:x(t,r,s)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var f="suspendedStart",h="suspendedYield",d="executing",v="completed",y={};function m(){}function g(){}function b(){}var _={};u(_,a,(function(){return this}));var w=Object.getPrototypeOf,O=w&&w(w($([])));O&&O!==r&&n.call(O,a)&&(_=O);var E=b.prototype=m.prototype=Object.create(_);function S(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(i,o,a,s){var c=p(t[i],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==Q(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,i){r(t,n,e,i)}))}return o=o?o.then(i,i):i()}})}function x(e,r,n){var i=f;return function(o,a){if(i===d)throw new Error("Generator is already running");if(i===v){if("throw"===o)throw a;return{value:t,done:!0}}for(n.method=o,n.arg=a;;){var s=n.delegate;if(s){var c=j(s,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===f)throw i=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=d;var u=p(e,r,n);if("normal"===u.type){if(i=n.done?v:h,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(i=v,n.method="throw",n.arg=u.arg)}}}function j(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var o=p(i,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function $(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(Q(e)+" is not iterable")}return g.prototype=b,i(E,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:g,configurable:!0}),g.displayName=u(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},S(L.prototype),u(L.prototype,s,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new L(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(E),u(E,c,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=$,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(q),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),q(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;q(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:$(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function W(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,i)}function H(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){W(o,n,i,a,s,"next",t)}function s(t){W(o,n,i,a,s,"throw",t)}a(void 0)}))}}function J(t){return et(t)||tt(t)||Z(t)||X()}function X(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Z(t,e){if(t){if("string"===typeof t)return rt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?rt(t,e):void 0}}function tt(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function et(t){if(Array.isArray(t))return rt(t)}function rt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function nt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function it(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?nt(Object(r),!0).forEach((function(e){ot(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):nt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function ot(t,e,r){return e=at(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function at(t){var e=st(t,"string");return"symbol"===Q(e)?e:String(e)}function st(t,e){if("object"!==Q(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==Q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var ct={components:{HtmlWithLinks:I["a"],App:o["a"],Loader:a["a"],VPopup:h,VCheckbox:b,RequestsFilter:$,UniversalSearchModal:z},data:function(){return{isLoading:!1,isLastPage:!1,page:1,apps:[],requesting:!1,isRequestVersionInputVisible:!1,requestUrl:"",requestVersion:"",params:it({},this.$route.query),fulfillingRequest:null,fulfilledRequestsIds:[]}},computed:{title:function(){return this.$t("REQUESTS")},filter:function(){return{filter:this.params.filter,price:this.params.price}}},watch:{isRequestVersionInputVisible:function(t){var e=this;t&&this.$nextTick().then((function(){return e.$refs.requestVersionInput.focus()}))},"$route.query":{handler:function(){"requests"!==this.$route.name||Object(k["isEqual"])(this.$route.query,this.params)||(this.params=it({},this.$route.query),this.isLastPage=!1,this.apps=[],this.page=1,this.getApps())},deep:!0}},methods:{mapRequest:function(t){return"0.00"===t.price?t.price="free":t.price+=" EUR",t},getApps:function(){var t=this;this.isLoading=!0;var e=it({},this.filter);return this.$api.getRequests(this.page,e).then((function(r){Object(k["isEqual"])(e,t.filter)&&(r=r.map(t.mapRequest),t.apps=[].concat(J(t.apps),J(r)),t.isLoading=!1,r.length<25&&(t.isLastPage=!0))}))},tryFulfill:function(t){var e=this;return H(K().mark((function r(){return K().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.fulfillingRequest=null,r.next=3,e.$nextTick();case 3:e.fulfillingRequest=t,e.$modal.show("fulfillRequestFromUniversalSearch");case 5:case"end":return r.stop()}}),r)})))()},onFulfilled:function(t){this.$notify({type:"success",text:this.$t("REQUEST_FULFILLED_SUCCESSFULLY")});var e=this.apps.findIndex((function(e){return e.id===t.id}));-1!==e&&this.apps.splice(e,1,this.mapRequest(t))},requestOld:function(t){t.am_i_requested||(t.am_i_requested=1,t.requesters_amount-=-1,this.$api.requestApp("/app/id".concat(t.trackid)).catch((function(){t.requested=!1,t.am_i_requested=0,t.requesters_amount-=1})))},requestNew:function(){var t=this;this.$modal.show("request"),this.$nextTick().then((function(){return t.$refs.requestUrlInput.focus()}))},request:function(){var t=this;this.requesting||(this.requesting=!0,this.$api.requestApp(this.requestUrl,this.requestVersion).then((function(){t.$modal.hide("request"),t.$notify({type:"success",text:t.$t("APP_REQUESTED_SUCCESSFULLY")}),t.apps=[],t.page=1,t.getApps()})).finally((function(){t.requesting=!1})))},clearRequestPopup:function(){this.requestUrl="",this.requestVersion="",this.isRequestVersionInputVisible=!1},handleScroll:Object(k["throttle"])((function(){if(!this.isLoading&&!this.isLastPage&&this.$refs.app){var t=this.apps.length-20,e=this.$refs.app[t>=0?t:0].$el.offsetTop;window.scrollY>e&&(this.page+=1,this.getApps())}}),1e3)},serverPrefetch:function(){return this.getApps()},created:function(){this.getApps()},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},ut=ct,lt=(r("ef92"),Object(p["a"])(ut,n,i,!1,null,"2693e5b3",null));e["default"]=lt.exports},bb531:function(t,e,r){},c4f3:function(t,e,r){"use strict";r("bb531")},c912:function(t,e,r){},d7a2:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n={props:{src:{type:String,required:!0},srcPlaceholder:{type:String,default:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},srcset:{type:String},intersectionOptions:{type:Object,default:function(){return{}}},usePicture:{type:Boolean,default:!1}},inheritAttrs:!1,data:function(){return{observer:null,intersected:!1,loaded:!1}},computed:{srcImage:function(){return this.intersected&&this.src?this.src:this.srcPlaceholder},srcsetImage:function(){return!(!this.intersected||!this.srcset)&&this.srcset}},methods:{load:function(){this.$el&&this.$el.getAttribute("src")!==this.srcPlaceholder&&(this.loaded=!0,this.$emit("load",this.$el))},error:function(){this.$emit("error",this.$el)}},render:function(t){var e=t("img",{attrs:{src:this.srcImage,srcset:this.srcsetImage},domProps:this.$attrs,class:{"v-lazy-image":!0,"v-lazy-image-loaded":this.loaded},on:{load:this.load,error:this.error}});return this.usePicture?t("picture",{on:{load:this.load}},this.intersected?[this.$slots.default,e]:[e]):e},mounted:function(){var t=this;"IntersectionObserver"in window&&(this.observer=new IntersectionObserver((function(e){var r=e[0];r.isIntersecting&&(t.intersected=!0,t.observer.disconnect(),t.$emit("intersect"))}),this.intersectionOptions),this.observer.observe(this.$el))},destroyed:function(){"IntersectionObserver"in window&&this.observer.disconnect()}}},d817:function(t,e,r){},d9c6:function(t,e,r){"use strict";r("3b9d")},e66b:function(t,e,r){"use strict";r("5ba2")},ef92:function(t,e,r){"use strict";r("d817")},f3ae:function(t,e,r){"use strict";r("c912")}}]);
//# sourceMappingURL=chunk-0856f9c6.7b3c62c5.js.map