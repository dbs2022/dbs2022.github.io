(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02c35d2c"],{"2a7d":function(t,n,e){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(t,n,e){return n=o(n),n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t){var n=a(t,"string");return"symbol"===r(n)?n:String(n)}function a(t,n){if("object"!==r(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,n||"default");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}var c=function(){var t,n=this,e=n._self._c;return e(n.tag,n._b({directives:[{name:"tooltip",rawName:"v-tooltip",value:n.tooltip,expression:"tooltip"}],tag:"component",staticClass:"button",class:(t={},i(t,"button_".concat(n.type),!0),i(t,"button_size-".concat(n.size),n.size),i(t,"button_loading",n.loading),i(t,"button_disabled",n.disabled),t)},"component",n.$attrs,!1),[n.loading?e("loader",{attrs:{size:"15px",border:"3px",absolute:""}}):n._e(),n._t("default")],2)},s=[],u=e("555f"),l={props:{type:String,loading:Boolean,disabled:Boolean,size:String,tag:{type:String,default:"button"}},components:{Loader:u["a"]},data:function(){return{tooltip:null,tooltipTimeout:null}},methods:{showTooltip:function(t){var n=this,e=t.content,r=t.duration,i=void 0===r?5e3:r;clearTimeout(this.tooltipTimeout),this.tooltip={content:e,trigger:"manual",show:!0},this.tooltipTimeout=setTimeout((function(){n.tooltip=null}),i)}}},f=l,p=(e("f783"),e("2877")),h=Object(p["a"])(f,c,s,!1,null,"bd48b20e",null);n["a"]=h.exports},"4e08":function(t,n,e){"use strict";var r=function(){var t=this,n=t._self._c;return n("div",t._l(t.options,(function(e){return n("div",{key:e.name,staticClass:"options-wrapper"},[t.hideName?t._e():n("p",{staticClass:"options-name"},[t._v(t._s(e.name))]),n("div",{staticClass:"options"},t._l(e.options,(function(r){return n("div",{key:r.name,staticClass:"options__option",on:{click:function(n){return t.submitForm(r.html,{requiresDeviceLink:e.requires_device_link,showInformationShareWarning:e.show_information_share_warning})}}},[n("p",{staticClass:"options__time"},[t._v(t._s(r.name))]),n("p",{staticClass:"options__price"},[t._v(t._s(r.price))])])})),0),n("html-with-links",{staticClass:"tip",attrs:{tag:"div",html:t.$t("SIDELOADING_OPTIONS_TIP",{href:"/my/plus"})}})],1)})),0)},i=[],o=e("2f62"),a=e("d262"),c=e("13a2");function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function u(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */u=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,n,e){t[n]=e.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function f(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{f({},"")}catch(t){f=function(t,n,e){return t[n]=e}}function p(t,n,e,r){var o=n&&n.prototype instanceof m?n:m,a=Object.create(o.prototype),c=new x(r||[]);return i(a,"_invoke",{value:T(t,e,c)}),a}function h(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=p;var d="suspendedStart",v="suspendedYield",_="executing",y="completed",g={};function m(){}function b(){}function w(){}var O={};f(O,a,(function(){return this}));var E=Object.getPrototypeOf,S=E&&E(E(I([])));S&&S!==e&&r.call(S,a)&&(O=S);var C=w.prototype=m.prototype=Object.create(O);function L(t){["next","throw","return"].forEach((function(n){f(t,n,(function(t){return this._invoke(n,t)}))}))}function A(t,n){function e(i,o,a,c){var u=h(t[i],t,o);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==s(f)&&r.call(f,"__await")?n.resolve(f.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):n.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var o;i(this,"_invoke",{value:function(t,r){function i(){return new n((function(n,i){e(t,r,n,i)}))}return o=o?o.then(i,i):i()}})}function T(n,e,r){var i=d;return function(o,a){if(i===_)throw new Error("Generator is already running");if(i===y){if("throw"===o)throw a;return{value:t,done:!0}}for(r.method=o,r.arg=a;;){var c=r.delegate;if(c){var s=P(c,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===d)throw i=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=_;var u=h(n,e,r);if("normal"===u.type){if(i=r.done?y:v,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(i=y,r.method="throw",r.arg=u.arg)}}}function P(n,e){var r=e.method,i=n.iterator[r];if(i===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,P(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var o=h(i,n.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var a=o.arg;return a?a.done?(e[n.resultName]=a.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function $(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function N(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function I(n){if(n||""===n){var e=n[a];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var i=-1,o=function e(){for(;++i<n.length;)if(r.call(n,i))return e.value=n[i],e.done=!1,e;return e.value=t,e.done=!0,e};return o.next=o}}throw new TypeError(s(n)+" is not iterable")}return b.prototype=w,i(C,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:b,configurable:!0}),b.displayName=f(w,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===b||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,l,"GeneratorFunction")),t.prototype=Object.create(C),t},n.awrap=function(t){return{__await:t}},L(A.prototype),f(A.prototype,c,(function(){return this})),n.AsyncIterator=A,n.async=function(t,e,r,i,o){void 0===o&&(o=Promise);var a=new A(p(t,e,r,i),o);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(C),f(C,l,"Generator"),f(C,a,(function(){return this})),f(C,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=I,x.prototype={constructor:x,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function i(r,i){return c.type="throw",c.arg=n,e.next=r,i&&(e.method="next",e.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var i=r.arg;N(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:I(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),g}},n}function l(t,n,e,r,i,o,a){try{var c=t[o](a),s=c.value}catch(u){return void e(u)}c.done?n(s):Promise.resolve(s).then(r,i)}function f(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var o=t.apply(n,e);function a(t){l(o,r,i,a,c,"next",t)}function c(t){l(o,r,i,a,c,"throw",t)}a(void 0)}))}}function p(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?p(Object(e),!0).forEach((function(n){d(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function d(t,n,e){return n=v(n),n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function v(t){var n=_(t,"string");return"symbol"===s(n)?n:String(n)}function _(t,n){if("object"!==s(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,n||"default");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}var y={components:{HtmlWithLinks:c["a"]},props:{options:Array,hideName:Boolean},computed:h(h({},Object(o["d"])(["isDeviceLinked","config","devices","lt"])),{},{currentDevice:function(){var t=this;return this.devices.find((function(n){return n.lt===t.lt}))||{}}}),methods:{checkDeviceLinkingForPurchase:function(){var t=this;return this.isDeviceLinked||this.$confirm(this.$t("LINKED_DEVICE_REQUIRED")).then((function(){t.$router.push("/link")})).catch((function(){})),this.isDeviceLinked},submitForm:function(t){var n=arguments,e=this;return f(u().mark((function r(){var i,o,c,s,l;return u().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(i=n.length>1&&void 0!==n[1]?n[1]:{},o=i.requiresDeviceLink,c=i.showInformationShareWarning,s=document.createElement("div"),s.style.display="none",s.innerHTML=t,document.body.appendChild(s),l=s.firstChild,o){r.next=9;break}return l.submit(),r.abrupt("return");case 9:if(e.checkDeviceLinkingForPurchase()){r.next=11;break}return r.abrupt("return");case 11:if(!c){r.next=14;break}return r.next=14,e.$confirm(e.$t("IMPORT_DEV_CREDENTIALS_PROVIDER_CONFIRMATION"));case 14:e.$confirm("".concat(e.$t("IS_CORRECT_DEVICE")," ").concat(e.currentDevice.name," - ").concat(e.currentDevice.model,"?")).then((function(){return l.submit()})).catch((function(){return e.devices.length>1?e.$confirm(e.$t("SWITCH_TO_ANOTHER_DEVICE_REDIRECT")).then((function(){e.$router.push("/my/devices")})):Promise.reject()})).catch((function(){return e.$confirm(e.$t("DO_YOU_WANT_LINK_ANOTHER_DEVICE")).then((function(){e.$router.push("/my/devices")}))})).catch((function(){Object(a["a"])()?(e.$notify({type:"success",text:e.$t("ORPHANED_LINK_DESC")}),e.$api.getLinkCode().then((function(t){e.$notify({type:"success",text:e.$t("DEVICE_IS_BEING_LINKED_RELOAD")}),e.$store.commit("lt",""),e.$api.link({code:t,type:"new"},!0).then((function(t){e.$store.commit("lt",t.link_token),window.location=t.profile_service}))}))):e.$notify({type:"error",text:e.$t("VISIT_FROM_IDEVICE")})}));case 15:case"end":return r.stop()}}),r)})))()}}},g=y,m=(e("5a7f"),e("2877")),b=Object(m["a"])(g,r,i,!1,null,"0d75db81",null);n["a"]=b.exports},"5a7f":function(t,n,e){"use strict";e("c193")},6199:function(t,n,e){"use strict";var r=function(){var t=this,n=t._self._c;return n("div",{staticClass:"yesno",class:{yesno_clearable:t.clearable,yesno_vertical:t.vertical,"yesno_fit-content":t.fitContent}},t._l(t.finalOptions,(function(e){return n("span",{key:e.value,staticClass:"yesno__option",class:{yesno__option_active:t.value==e.value},on:{click:function(n){return t.onClick(e.value)}}},[t._v("\n    "+t._s(e.label)+"\n  ")])})),0)},i=[];function o(t,n){return l(t)||u(t,n)||c(t,n)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,n){if(t){if("string"===typeof t)return s(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?s(t,n):void 0}}function s(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function u(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,i,o,a,c=[],s=!0,u=!1;try{if(o=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;s=!1}else for(;!(s=(r=o.call(e)).done)&&(c.push(r.value),c.length!==n);s=!0);}catch(t){u=!0,i=t}finally{try{if(!s&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(u)throw i}}return c}}function l(t){if(Array.isArray(t))return t}var f={props:{value:{},options:{type:[Object,Array]},clearable:{type:Boolean},vertical:{type:Boolean},clearValue:{default:null},fitContent:{type:Boolean}},computed:{finalOptions:function(){return this.options?this.parseOptions(this.options):this.defaultOptions},defaultOptions:function(){return[{value:"yes",label:this.$t("YES")},{value:"no",label:this.$t("NO")}]}},methods:{parseOptions:function(t){return Array.isArray(t)?t:Object.entries(t).map((function(t){var n=o(t,2),e=n[0],r=n[1];return{value:e,label:r}}))},onClick:function(t){this.clearable&&this.value===t?this.$emit("input",this.clearValue):this.$emit("input",t)}}},p=f,h=(e("f172"),e("2877")),d=Object(h["a"])(p,r,i,!1,null,"6fe47fde",null);n["a"]=d.exports},"81f7":function(t,n,e){"use strict";e("c4b9")},ba63:function(t,n,e){t.exports=e.p+"img/icon-support.fb598bb5.svg"},c193:function(t,n,e){},c2b9:function(t,n,e){},c4b9:function(t,n,e){},c923:function(t,n,e){},d262:function(t,n,e){"use strict";function r(){var t=window.navigator.userAgent;if(t.indexOf("iPad")>-1)return!0;if(t.indexOf("Macintosh")>-1)try{return document.createEvent("TouchEvent"),!0}catch(n){}return!1}function i(){var t=document.createElement("canvas").getContext("webgl"),n=t.getExtension("WEBGL_debug_renderer_info"),e=n&&(t.getParameter(n.UNMASKED_RENDERER_WEBGL)||"");return!(!e.match(/Apple/)||e.match(/Apple GPU/))||-1===t.getSupportedExtensions().indexOf("WEBGL_compressed_texture_s3tc_srgb")}function o(){return!!window.navigator.userAgent.match(/Safari/)||(!!r()||!!i())}n["a"]=o},ed7c:function(t,n,e){"use strict";e.r(n);var r=function(){var t,n,r,i,o,a,c,s,u,l,f,p,h,d,v,_,y,g,m,b,w,O=this,E=O._self._c;return E("section",{staticClass:"main"},[O.configLoaded?O._e():E("loader"),O.configLoaded&&O.isDeviceLinked?E("h1",{staticClass:"intro"},[E("span",{staticClass:"intro__inner"},[O._v(O._s(O.$t("PLUS_STATUS_FOR_DEVICE")))]),E("span",{staticClass:"intro__status g-status",class:{"g-status_success":O.hasPlus}},[O._v("\n      "+O._s(O.$t(O.status))+"\n    ")])]):O._e(),O.configLoaded?E("div",{staticClass:"row"},[E("div",{staticClass:"col col_1"},[O.hasPlus?O._e():E("sideloading-options",{staticClass:"buy",attrs:{options:O.plusOptions,"hide-name":""}}),O.isDeviceLinked?[E("table",{staticClass:"table"},[null===(t=O.config.plus_account)||void 0===t||!t.appleid||0===(null===(n=O.config.plus_account)||void 0===n?void 0:n.is_yours)||O.configuring||O.showConfigure?[E("tr",[E("td",{staticClass:"cell"},[O._v("\n                Apple ID "+O._s(O.$t("OF_YOUR_OWN_DEV_ACCOUNT"))),E("br"),E("a",{attrs:{href:"https://www.youtube.com/watch?v=-ShhaoaLWyE",target:"_blank"}},[O._v(O._s(O.$t("VIDEO_TUTORIAL")))])]),E("td",{staticClass:"td"},[E("input",{directives:[{name:"model",rawName:"v-model",value:O.appleid,expression:"appleid"}],staticClass:"input",domProps:{value:O.appleid},on:{input:function(t){t.target.composing||(O.appleid=t.target.value)}}})])]),E("tr",[E("td",{staticClass:"cell"},[O._v("\n                "+O._s(O.$t("PASSWORD"))+"\n              ")]),E("td",{staticClass:"td"},[E("input",{directives:[{name:"model",rawName:"v-model",value:O.password,expression:"password"}],staticClass:"input",attrs:{type:"password"},domProps:{value:O.password},on:{input:function(t){t.target.composing||(O.password=t.target.value)}}})])]),E("tr",[E("td",{staticClass:"cell"}),E("td",{staticClass:"td"},[E("html-with-links",{staticClass:"hint",attrs:{tag:"span",html:O.$t("PLUS_PRIVACY_HINT",{privacy_href:"/info/privacy"})}})],1)]),E("tr",[E("td",{staticClass:"cell"},[O._v("\n                "+O._s(O.$t("SEND_SMS_TO_VERIFY_ACCOUNT"))+"\n              ")]),E("td",{staticClass:"td"},[E("yes-no",{attrs:{options:[{label:O.$t("YES"),value:1},{label:O.$t("NO"),value:0}],"fit-content":""},model:{value:O.isSMSAuth,callback:function(t){O.isSMSAuth=t},expression:"isSMSAuth"}}),E("html-with-links",{staticClass:"hint hint_mt",attrs:{tag:"span",html:O.$t("SMS_AUTH_HINT")}})],1)]),E("tr",[E("td",{staticClass:"cell"}),E("td",{staticClass:"td"},[E("btn",{staticClass:"configure-button",attrs:{type:"primary",loading:O.configuring,disabled:!O.appleid||!O.password},nativeOn:{click:function(t){return O.configurePlusAccount.apply(null,arguments)}}},[O._v("\n                  "+O._s(O.$t("CONFIGURE_PLUS_ACCOUNT"))+"\n                ")])],1)])]:O._e(),null!==(r=O.config.plus_account)&&void 0!==r&&r.appleid&&0!==(null===(i=O.config.plus_account)||void 0===i?void 0:i.is_yours)?E("tr",[E("td",{staticClass:"cell"},[O._v("\n              Apple ID"),E("br"),E("a",{attrs:{href:"https://www.youtube.com/watch?v=-ShhaoaLWyE",target:"_blank"}},[O._v(O._s(O.$t("VIDEO_TUTORIAL")))])]),E("td",{staticClass:"td"},[O._v("\n              "+O._s(null===(o=O.config.plus_account)||void 0===o?void 0:o.appleid)+"\n              "),O.showConfigure?O._e():[E("br"),E("btn",{staticClass:"configure-button",attrs:{type:"primary"},nativeOn:{click:function(t){O.showConfigure=!0}}},[O._v("\n                  "+O._s(O.$t("RECONFIGURE_YOUR_ACCOUNT"))+"\n                ")])]],2)]):O._e(),null!==(a=O.config.plus_account)&&void 0!==a&&a.shared_by||null===(c=O.config.plus_account)||void 0===c||!c.appleid?O._e():E("tr",[E("td",{staticClass:"cell"}),E("td",{staticClass:"td"},[E("btn",{staticClass:"delete-account-button",attrs:{type:"negative",loading:O.deletingAccount},nativeOn:{click:function(t){return O.deleteAccount.apply(null,arguments)}}},[O._v("\n                "+O._s(O.$t("DELETE_PLUS_DEV_ACCOUNT"))+"\n              ")])],1)]),null!==(s=O.config.plus_account)&&void 0!==s&&s.shared_by?E("tr",[E("td",{staticClass:"cell"},[O._v("\n              "+O._s(O.$t("SHARED_WITH_YOU_BY"))+"\n            ")]),E("td",{staticClass:"td"},[O._v(O._s(null===(u=O.config.plus_account)||void 0===u?void 0:u.shared_by))])]):O._e(),null!==(l=O.config.plus_account)&&void 0!==l&&l.status_translated?E("tr",[E("td",{staticClass:"cell"},[O._v("\n              "+O._s(O.$t("STATUS"))+"\n            ")]),E("td",{staticClass:"td"},[E("span",{domProps:{innerHTML:O._s(null===(f=O.config.plus_account)||void 0===f?void 0:f.status_translated)}}),"otp_required"!==(null===(p=O.config.plus_account)||void 0===p?void 0:p.status)||O.configuring?O._e():[E("br"),E("btn",{staticClass:"configure-button",attrs:{type:"primary",loading:O.sendingOtp},nativeOn:{click:function(t){return O.sendOtp.apply(null,arguments)}}},[O._v("\n                  "+O._s(O.$t("ENTER_OTP_SHORT"))+"\n                ")])],"ok"!==(null===(h=O.config.plus_account)||void 0===h?void 0:h.status)||null!==(d=O.config.plus_account)&&void 0!==d&&d.shared_by?O._e():[E("br"),E("btn",{staticClass:"configure-button",attrs:{type:"primary"},nativeOn:{click:function(t){return O.downloadArchive.apply(null,arguments)}}},[O._v("\n                  "+O._s(O.$t("DOWNLOAD_ARCHIVE_FOR_DEVELOPMENT"))+"\n                ")])]],2)]):O._e(),null===(v=O.config.plus_account)||void 0===v||!v.appleid||null!==(_=O.config.plus_account)&&void 0!==_&&_.shared_by?O._e():E("tr",[E("td",{staticClass:"cell"},[O._v("\n              "+O._s(O.$t("SHARED_WITH_FRIENDS"))),E("br"),E("a",{attrs:{href:"https://www.youtube.com/watch?v=v0u7c4z59-s",target:"_blank"}},[O._v(O._s(O.$t("VIDEO_TUTORIAL")))])]),E("td",{staticClass:"td"},[O._l(null===(y=O.config.plus_account)||void 0===y?void 0:y.shared_with,(function(t){return E("div",{key:t.email,staticClass:"shared-row"},[O._v("\n                "+O._s(t.email)+"\n                "),E("span",{staticStyle:{"white-space":"nowrap"}},[O._v("\n                  ("+O._s(O.$t("DEVICES_COUNT",{n:t.devices_amount}))+")\n                ")]),O._v("  "),E("btn",{staticClass:"unsh-button",attrs:{type:"negative",loading:O.unsharing.includes(t.email)},nativeOn:{click:function(n){return O.unshare(t.email)}}},[O._v(O._s(O.$t("Remove")))])],1)})),E("btn",{staticClass:"sh-action",attrs:{type:"primary",loading:O.sharing},nativeOn:{click:function(t){return O.share.apply(null,arguments)}}},[O._v(O._s(O.$t("SHARE_WITH_FRIEND"))+"\n              ")])],2)]),O.config.plus_account&&0!==(null===(g=O.config.plus_account)||void 0===g?void 0:g.is_yours)?E("tr",[E("td",{staticClass:"cell"},[O._v("\n              "+O._s(O.$t("P2P_TRADING"))+"\n              "),E("br"),E("router-link",{attrs:{to:"/my/p2p-certificates"}},[O._v(O._s(O.$t("LEARN_MORE")))])],1),E("td",{staticClass:"td"},[null!==(m=O.config.plus_account)&&void 0!==m&&m.is_p2p?[O._v("\n                "+O._s(O.$t("ENABLED"))+" "),E("btn",{attrs:{type:"primary"},nativeOn:{click:function(t){return O.$router.push("/my/p2p-certificates")}}},[O._v(O._s(O.$t("VIEW_STATUS"))+"\n                ")])]:[O._v("\n                "+O._s(O.$t("DISABLED"))+" "),E("btn",{attrs:{type:"primary"},nativeOn:{click:function(t){return O.$router.push("/my/p2p-certificates")}}},[O._v(O._s(O.$t("ENABLE"))+"\n                ")])]],2)]):O._e(),1===(null===(b=O.config.plus_account)||void 0===b?void 0:b.is_yours)&&0===(null===(w=O.config.plus_account)||void 0===w?void 0:w.is_p2p)?E("tr",[E("td",{attrs:{colspan:"2"}},[E("router-link",{staticClass:"banner",attrs:{to:"/my/p2p-certificates"}},[E("span",{staticClass:"banner__title"},[O._v("\n                  "+O._s(O.$t("GET_N_CASHBACK",{amount:"100%"}))+"\n                ")]),E("span",{staticClass:"banner__desc"},[O._v("\n                  "+O._s(O.$t("LEARN_MORE"))+"\n                ")])])],1)]):O._e(),+new Date(1e3*O.config.plus_till)?E("tr",[E("td",{staticClass:"cell"},[O._v("\n              "+O._s(O.hasActivePlus?O.$t("NEXT_BILLING_CYCLE_STARTS_ON"):O.$t("PLUS_SUBSCRIPTION_ENDS_ON"))+"\n            ")]),E("td",{staticClass:"td"},[O._v("\n              "+O._s(new Date(1e3*O.config.plus_till).toLocaleString())+"\n              "),O.hasActivePlus?[E("br"),E("btn",{staticClass:"cancel-button",attrs:{type:"negative"},nativeOn:{click:function(t){return O.cancelSubscription.apply(null,arguments)}}},[O._v(O._s(O.$t("CANCEL_SUBSCRIPTION"))+"\n                ")])]:O._e()],2)]):O._e()],2),O.config.plus_provider&&O.config.plus_support_uri?E("div",{staticClass:"provided"},[E("span",{staticClass:"cell provided__desc"},[O._v("\n            "+O._s(O.$t("PLUS_PROVIDED_BY"))+"\n          ")]),E("div",{staticClass:"provided__val"},[O._v("\n            "+O._s(O.config.plus_provider)+"\n            "),E("a",{staticClass:"provided__link",attrs:{href:O.config.plus_support_uri,target:"_blank"}},[E("img",{staticClass:"provided__icon",attrs:{src:e("ba63")}}),O._v("\n              "+O._s(O.$t("GET_SUPPORT"))+"\n            ")]),E("span",{staticClass:"provided__support"},[O._v("\n              "+O._s(O.$t("SUPPORT_BY_3RD_PARTY"))+"\n            ")])])]):O._e()]:O._e()],2),E("aside",{staticClass:"sidebar col col_2"},[E("h2",{staticClass:"sidebar__heading"},[O._v(O._s(O.$t("PLUS_TERMS_TITLE")))]),E("p",{staticClass:"sidebar__text g-text",domProps:{innerHTML:O._s(O.$t("PLUS_FEATURES_DESC"))}})])]):O._e()],1)},i=[],o=e("555f"),a=e("4e08"),c=e("2a7d"),s=e("6199"),u=e("13a2"),l=e("2f62");function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t){return _(t)||v(t)||d(t)||h()}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t,n){if(t){if("string"===typeof t)return y(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?y(t,n):void 0}}function v(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _(t){if(Array.isArray(t))return y(t)}function y(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function g(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */g=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,n,e){t[n]=e.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(t){u=function(t,n,e){return t[n]=e}}function l(t,n,e,r){var o=n&&n.prototype instanceof m?n:m,a=Object.create(o.prototype),c=new x(r||[]);return i(a,"_invoke",{value:T(t,e,c)}),a}function p(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=l;var h="suspendedStart",d="suspendedYield",v="executing",_="completed",y={};function m(){}function b(){}function w(){}var O={};u(O,a,(function(){return this}));var E=Object.getPrototypeOf,S=E&&E(E(I([])));S&&S!==e&&r.call(S,a)&&(O=S);var C=w.prototype=m.prototype=Object.create(O);function L(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function A(t,n){function e(i,o,a,c){var s=p(t[i],t,o);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==f(l)&&r.call(l,"__await")?n.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):n.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,c)}))}c(s.arg)}var o;i(this,"_invoke",{value:function(t,r){function i(){return new n((function(n,i){e(t,r,n,i)}))}return o=o?o.then(i,i):i()}})}function T(n,e,r){var i=h;return function(o,a){if(i===v)throw new Error("Generator is already running");if(i===_){if("throw"===o)throw a;return{value:t,done:!0}}for(r.method=o,r.arg=a;;){var c=r.delegate;if(c){var s=P(c,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===h)throw i=_,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=v;var u=p(n,e,r);if("normal"===u.type){if(i=r.done?_:d,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(i=_,r.method="throw",r.arg=u.arg)}}}function P(n,e){var r=e.method,i=n.iterator[r];if(i===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,P(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var o=p(i,n.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var a=o.arg;return a?a.done?(e[n.resultName]=a.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function $(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function N(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function I(n){if(n||""===n){var e=n[a];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var i=-1,o=function e(){for(;++i<n.length;)if(r.call(n,i))return e.value=n[i],e.done=!1,e;return e.value=t,e.done=!0,e};return o.next=o}}throw new TypeError(f(n)+" is not iterable")}return b.prototype=w,i(C,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:b,configurable:!0}),b.displayName=u(w,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===b||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,s,"GeneratorFunction")),t.prototype=Object.create(C),t},n.awrap=function(t){return{__await:t}},L(A.prototype),u(A.prototype,c,(function(){return this})),n.AsyncIterator=A,n.async=function(t,e,r,i,o){void 0===o&&(o=Promise);var a=new A(l(t,e,r,i),o);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(C),u(C,s,"Generator"),u(C,a,(function(){return this})),u(C,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=I,x.prototype={constructor:x,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function i(r,i){return c.type="throw",c.arg=n,e.next=r,i&&(e.method="next",e.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),y},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),y}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var i=r.arg;N(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:I(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),y}},n}function m(t,n,e,r,i,o,a){try{var c=t[o](a),s=c.value}catch(u){return void e(u)}c.done?n(s):Promise.resolve(s).then(r,i)}function b(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var o=t.apply(n,e);function a(t){m(o,r,i,a,c,"next",t)}function c(t){m(o,r,i,a,c,"throw",t)}a(void 0)}))}}function w(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?w(Object(e),!0).forEach((function(n){E(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function E(t,n,e){return n=S(n),n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function S(t){var n=C(t,"string");return"symbol"===f(n)?n:String(n)}function C(t,n){if("object"!==f(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,n||"default");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}var L={components:{Loader:o["a"],SideloadingOptions:a["a"],Btn:c["a"],HtmlWithLinks:u["a"],YesNo:s["a"]},data:function(){return{loading:!1,configuring:!1,sendingOtp:!1,showConfigure:!1,deletingAccount:!1,sharing:!1,unsharing:[],appleid:"",password:"",isSMSAuth:0,plusOptions:[]}},computed:O(O({},Object(l["d"])(["hasPlus","hasActivePlus","hasCanceledPlus","devicesLoaded","isDeviceLinked"])),{},{title:function(){return this.$t("INSTALL_CONFIGURE_YOUR_DEV_ACCOUNT_PLUS")},configLoaded:function(){return!!this.config.model||this.devicesLoaded&&!this.isDeviceLinked},config:function(){return this.$store.getters.config},status:function(){return this.hasPlus?"ACTIVATED":"NOT_ACTIVATED"}}),methods:{cancelSubscription:function(){var t=this;this.$confirm(this.$t("PLUS_SUBSCRIPTION_CANCEL_CONFIRMATION")).then((function(){return t.$api.cancelPlusSubscription()})).then((function(n){n?window.location.href=n:t.$notify({type:"error",text:t.$t("SOMETHING_WENT_WRONG")})}))},configurePlusAccount:function(){var t=this;return b(g().mark((function n(){var e,r,i,o;return g().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(null!==(e=t.config.plus_account)&&void 0!==e&&e.appleid){n.next=10;break}return n.prev=1,n.next=4,t.$confirm(t.$t("PLUS_DEV_ACCOUNT_FIRST_CONFIGURE_CONFIRMATION"),{yesOrNo:!0});case 4:n.next=10;break;case 6:return n.prev=6,n.t0=n["catch"](1),t.$router.push("/my/buy?accent=step-1#official"),n.abrupt("return");case 10:return t.configuring=!0,n.next=13,t.$api.editPlusDevAccount({appleid:t.appleid,password:t.password,isSMSAuth:t.isSMSAuth,status:null!==(r=t.config.plus_account)&&void 0!==r&&r.appleid?"new":"",sharedWithEmails:(null===(i=t.config.plus_account)||void 0===i||null===(i=i.shared_with)||void 0===i?void 0:i.map((function(t){return t.email})))||[]}).catch((function(t){return t}));case 13:if(o=n.sent,!(o instanceof Error)){n.next=17;break}return t.configuring=!1,n.abrupt("return");case 17:t.handleStatus(t.appleid).finally((function(){t.configuring=!1}));case 18:case"end":return n.stop()}}),n,null,[[1,6]])})))()},handleStatus:function(t){var n=this;return b(g().mark((function e(){var r,i;return g().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$store.dispatch("getConfig");case 2:if(r=n.config.plus_account.status,"ok"!==r){e.next=6;break}return n.$notify({type:"success",text:n.$t("PLUS_ACCOUNT_CONFIGURED")}),e.abrupt("return",!0);case 6:if("error"!==r){e.next=9;break}return n.$notify({type:"error",text:n.config.plus_account.status_translated}),e.abrupt("return",!1);case 9:if("otp_required"!==r){e.next=15;break}return e.next=12,n.$prompt(n.$t("ENTER_OTP"));case 12:return i=e.sent,e.next=15,n.$api.editPlusDevAccount({appleid:t,otp:i,sharedWithEmails:n.config.plus_account.shared_with.map((function(t){return t.email}))});case 15:return e.abrupt("return",new Promise((function(e){setTimeout((function(){e(n.handleStatus(t))}),1e3)})));case 16:case"end":return e.stop()}}),e)})))()},unshare:function(t){var n=this;return b(g().mark((function e(){return g().wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.$confirm(n.$t("DEV_ACCOUNT_SHARE_REMOVAL_CONFIRMATION",{email:t})).then((function(){return n.unsharing.push(t),n.$api.editPlusDevAccount({appleid:n.config.plus_account.appleid,status:"new",sharedWithEmails:n.config.plus_account.shared_with.map((function(t){return t.email})).filter((function(n){return n!==t}))})})).then((function(){return n.handleStatus(n.config.plus_account.appleid)})).finally((function(){var e=n.unsharing.indexOf(t);n.unsharing.splice(e,1)}));case 1:case"end":return e.stop()}}),e)})))()},share:function(){var t=this;this.$prompt(this.$t("DEV_ACCOUNT_SHARE_PROMPT")).then((function(n){return t.sharing=!0,t.$api.editPlusDevAccount({appleid:t.config.plus_account.appleid,status:"new",sharedWithEmails:[].concat(p(t.config.plus_account.shared_with.map((function(t){return t.email}))),[n])})})).then((function(){return t.handleStatus(t.config.plus_account.appleid)})).finally((function(){t.sharing=!1}))},deleteAccount:function(){var t=this;this.$confirm(this.$t("DELETE_PLUS_DEV_ACCOUNT_CONFIRMATION")).then((function(){return t.deletingAccount=!0,t.$api.deletePlusDevAccount()})).then((function(){return t.$store.dispatch("getConfig")})).finally((function(){t.deletingAccount=!1}))},sendOtp:function(){var t=this;this.sendingOtp=!0,this.handleStatus(this.config.plus_account.appleid).finally((function(){t.sendingOtp=!1}))},downloadArchive:function(){var t=this;this.$api.getPlusDevAccountArchive().then((function(n){n?window.location.href=n:t.$notify({type:"error",text:t.$t("SOMETHING_WENT_WRONG")})}))}},mounted:function(){var t=this.$route.hash&&document.querySelector(this.$route.hash);t&&t.scrollIntoView()},created:function(){var t=this;this.$api.getSideloadingOptions("plus").then((function(n){t.plusOptions=n}))}},A=L,T=(e("81f7"),e("2877")),P=Object(T["a"])(A,r,i,!1,null,"47235140",null);n["default"]=P.exports},f172:function(t,n,e){"use strict";e("c923")},f783:function(t,n,e){"use strict";e("c2b9")}}]);
//# sourceMappingURL=chunk-02c35d2c.1ec2711f.js.map