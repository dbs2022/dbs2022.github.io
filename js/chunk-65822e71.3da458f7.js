(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65822e71"],{"1a2c":function(t,e,n){"use strict";function r(t){return o(t)||s(t)||i(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function o(t){if(Array.isArray(t))return c(t)}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.r(e);var u=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main"},[t.loading?e("loader"):[e("h1",{staticClass:"intro"},[e("span",{staticClass:"intro__inner"},[t._v(t._s(t.$t("P2P_SIGNING_MARKETPLACE")))])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col col_1"},[e("html-with-links",{staticClass:"text g-text",attrs:{html:t.$t("P2P_SIGNING_MARKETPLACE_DESC")}}),t.plusAccount&&1===t.plusAccount.is_yours?["ok"!==t.plusAccount.status?e("html-with-links",{staticClass:"text status g-text-error",attrs:{tag:"p",html:t.$t("P2P_ACCOUNT_STATUS_NOT_OK",{plusStatusLink:"/my/plus"})}}):[t.configuringP2PSettings?[e("table",{staticClass:"table table_configure"},[e("tr",[e("td",{staticClass:"cell"},[t._v("\n                    "+t._s(t.$t("STATUS"))+"\n                  ")]),e("td",{staticClass:"td"},[e("yes-no",{attrs:{options:[{label:t.$t("DISABLED"),value:0},{label:t.$t("ENABLED"),value:1}]},model:{value:t.p2pSettings.isP2P,callback:function(e){t.$set(t.p2pSettings,"isP2P",e)},expression:"p2pSettings.isP2P"}})],1)]),e("tr",[e("td",{staticClass:"cell"},[t._v("\n                    "+t._s(t.$t("YOUR_NAME"))+" *\n                  ")]),e("td",{staticClass:"td"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.p2pSettings.p2pName,expression:"p2pSettings.p2pName"}],staticClass:"input",domProps:{value:t.p2pSettings.p2pName},on:{input:function(e){e.target.composing||t.$set(t.p2pSettings,"p2pName",e.target.value)}}})])]),e("tr",[e("td",{staticClass:"cell"},[t._v("\n                    "+t._s(t.$t("PRICE_PER_DEVICE"))+" *\n                  ")]),e("td",{staticClass:"td"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.p2pSettings.p2pPrice,expression:"p2pSettings.p2pPrice"}],staticClass:"input",domProps:{value:t.p2pSettings.p2pPrice},on:{input:function(e){e.target.composing||t.$set(t.p2pSettings,"p2pPrice",e.target.value)}}})])]),e("tr",[e("td",{staticClass:"cell"},[t._v("\n                    "+t._s(t.$t("CURRENCY"))+" *\n                  ")]),e("td",{staticClass:"td"},[e("v-select",{staticStyle:{width:"150px"},attrs:{options:t.currencySelectOptions,clearable:!1,compact:""},model:{value:t.p2pSettings.p2pCurrency,callback:function(e){t.$set(t.p2pSettings,"p2pCurrency",e)},expression:"p2pSettings.p2pCurrency"}})],1)]),e("tr",[e("td",{attrs:{colspan:"2"}},[e("p",{staticStyle:{"max-width":"330px","padding-bottom":"10px"},domProps:{innerHTML:t._s(t.$t("P2P_CURRENCY_HINT"))}})])]),e("tr",[e("td",{staticClass:"cell"},[t._v("\n                    PayPal email\n                  ")]),e("td",{staticClass:"td"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.p2pSettings.p2pPaypalEmail,expression:"p2pSettings.p2pPaypalEmail"}],staticClass:"input",domProps:{value:t.p2pSettings.p2pPaypalEmail},on:{input:function(e){e.target.composing||t.$set(t.p2pSettings,"p2pPaypalEmail",e.target.value)}}})])]),e("tr",[e("td",{attrs:{colspan:"2"}},[e("p",{staticStyle:{"max-width":"330px","padding-bottom":"10px"},domProps:{innerHTML:t._s(t.$t("P2P_PAYPAL_HINT"))}})])]),e("tr",[e("td",{staticClass:"cell"},[t._v("\n                    "+t._s(t.$t("MANUAL_INSTRUCTIONS"))+"\n                  ")]),e("td",{staticClass:"td"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.p2pSettings.p2pManualInstructions,expression:"p2pSettings.p2pManualInstructions"}],staticClass:"textarea",attrs:{rows:"5"},domProps:{value:t.p2pSettings.p2pManualInstructions},on:{input:function(e){e.target.composing||t.$set(t.p2pSettings,"p2pManualInstructions",e.target.value)}}})])]),e("tr",[e("td",{attrs:{colspan:"2"}},[e("p",{staticStyle:{"max-width":"480px","padding-bottom":"10px"},domProps:{innerHTML:t._s(t.$t("P2P_MANUAL_INSTRUCTIONS_HINT",{email:t.email}))}})])])]),e("p",{staticClass:"text g-text",domProps:{innerHTML:t._s(t.$t("P2P_SETTINGS_LEGAL_TEXT",{devicesLimit:t.stats.p2p_devices_limit}))}}),e("btn",{staticStyle:{"margin-top":"10px"},attrs:{type:"primary",loading:t.savingP2PSettings},nativeOn:{click:function(e){return t.saveP2PSettings.apply(null,arguments)}}},[t._v(t._s(t.$t("SAVE"))+"\n              ")])]:e("btn",{staticStyle:{"margin-top":"10px"},attrs:{type:"primary"},nativeOn:{click:function(e){t.configuringP2PSettings=!0}}},[t._v("\n              "+t._s(t.$t("CONFIGURE"))+"\n            ")])]]:t._e(),t.plusAccount&&1!==t.plusAccount.is_yours&&"ok"===t.plusAccount.status?e("html-with-links",{staticClass:"text g-text status",attrs:{tag:t.p,html:t.$t("YOU_DONT_NEED_P2P_CERTIFICATE")}}):t._e(),t.plusAccount&&1!==t.plusAccount.is_yours&&"p2p_pending"===t.plusAccount.status?e("html-with-links",{staticClass:"text g-text status",attrs:{tag:t.p,html:t.$t("P2P_PENDING_STATUS_DESCRIPTION",{href:"/my/plus"})}}):t._e(),t.plusAccount&&1!==t.plusAccount.is_yours&&"p2p_rejected"===t.plusAccount.status?e("html-with-links",{staticClass:"text g-text status",attrs:{tag:t.p,html:t.$t("P2P_REJECTED_STATUS_DESCRIPTION",{href:"/my/plus"})}}):t._e(),t.purchases.length?[e("h2",{staticClass:"intro"},[t._v("\n            "+t._s(t.$t("SALES"))+"\n          ")]),t.purchases.length?[t.isMobile?e("div",{staticClass:"commands"},t._l(t.purchases,(function(n){return e("div",{key:n.udid,staticClass:"command"},[e("span",{staticClass:"command__heading"},[t._v("UDID")]),e("span",[t._v("\n                    "+t._s(n.udid)+"\n                  ")]),e("span",{staticClass:"command__heading"},[t._v(t._s(t.$t("PURCHASE_DATE")))]),e("span",[t._v(t._s(new Date(1e3*n.added_at).toLocaleDateString()))]),e("span",{staticClass:"command__heading"},[t._v(t._s(t.$t("REMOVAL_DATE")))]),e("span",[t._v(t._s(new Date(1e3*n.expires_at).toLocaleDateString()))]),e("span",{staticClass:"command__heading"},[t._v(t._s(t.$t("STATUS")))]),e("span",[t._v(t._s(n.status_translated))]),e("span",{staticClass:"command__heading"}),e("span",[e("div",{staticStyle:{display:"flex","flex-wrap":"wrap",gap:"10px"}},["ok"===n.status?[n.is_banned?[e("btn",{attrs:{type:"primary",loading:t.unbanningPurchases.includes(n.udid)},nativeOn:{click:function(e){return t.unbanPurchase(n.udid)}}},[t._v("\n                          "+t._s(t.$t("UNBAN"))+"\n                        ")])]:[e("btn",{attrs:{type:"negative",loading:t.banningPurchases.includes(n.udid)},nativeOn:{click:function(e){return t.banPurchase(n.udid)}}},[t._v("\n                          "+t._s(t.$t("BAN"))+"\n                        ")])]]:t._e(),"pending"===n.status||"rejected"===n.status?e("btn",{attrs:{type:"primary",loading:t.approvingPurchases.includes(n.id)},nativeOn:{click:function(e){return t.approvePurchase(n.id)}}},[t._v("\n                        "+t._s(t.$t("APPROVE"))+"\n                      ")]):t._e(),"pending"===n.status?e("btn",{attrs:{type:"negative",loading:t.rejectingPurchases.includes(n.id)},nativeOn:{click:function(e){return t.rejectPurchase(n.id)}}},[t._v("\n                        "+t._s(t.$t("REJECT"))+"\n                      ")]):t._e()],2)])])})),0):e("div",{staticClass:"table-apps-wrapper"},[e("table",{staticClass:"table-apps"},[e("thead",{staticClass:"table-apps__head table-apps__row"},[e("tr",[e("th",{staticClass:"table-apps__cell"},[t._v("UDID")]),e("th",{staticClass:"table-apps__cell"},[t._v(t._s(t.$t("PURCHASE_DATE")))]),e("th",{staticClass:"table-apps__cell"},[t._v(t._s(t.$t("REMOVAL_DATE")))]),e("th",{staticClass:"table-apps__cell"},[t._v(t._s(t.$t("STATUS")))]),e("th",{staticClass:"table-apps__cell"},[t._v(t._s(t.$t("ACTIONS")))])])]),e("tbody",t._l(t.purchases,(function(n){return e("tr",{key:n.udid,staticClass:"table-apps__row"},[e("td",{staticClass:"table-apps__cell"},[t._v(t._s(n.udid))]),e("td",{staticClass:"table-apps__cell"},[t._v("\n                    "+t._s(new Date(1e3*n.added_at).toLocaleDateString())+"\n                  ")]),e("td",{staticClass:"table-apps__cell"},[t._v("\n                    "+t._s(new Date(1e3*n.expires_at).toLocaleDateString())+"\n                  ")]),e("td",{staticClass:"table-apps__cell"},[t._v("\n                    "+t._s(n.status_translated)+"\n                  ")]),e("td",{staticClass:"table-apps__cell"},[e("div",{staticStyle:{display:"flex","flex-wrap":"wrap",gap:"10px"}},["ok"===n.status?[n.is_banned?[e("btn",{attrs:{type:"primary",loading:t.unbanningPurchases.includes(n.udid)},nativeOn:{click:function(e){return t.unbanPurchase(n.udid)}}},[t._v("\n                            "+t._s(t.$t("UNBAN"))+"\n                          ")])]:[e("btn",{attrs:{type:"negative",loading:t.banningPurchases.includes(n.udid)},nativeOn:{click:function(e){return t.banPurchase(n.udid)}}},[t._v("\n                            "+t._s(t.$t("BAN"))+"\n                          ")])]]:t._e(),"pending"===n.status||"rejected"===n.status?e("btn",{attrs:{type:"primary",loading:t.approvingPurchases.includes(n.id)},nativeOn:{click:function(e){return t.approvePurchase(n.id)}}},[t._v("\n                        "+t._s(t.$t("APPROVE"))+"\n                      ")]):t._e(),"pending"===n.status?e("btn",{attrs:{type:"negative",loading:t.rejectingPurchases.includes(n.id)},nativeOn:{click:function(e){return t.rejectPurchase(n.id)}}},[t._v("\n                        "+t._s(t.$t("REJECT"))+"\n                      ")]):t._e()],2)])])})),0)])])]:e("p",[t._v(t._s(t.$t("NOTHING_WAS_FOUND")))])]:t._e(),e("h2",{staticClass:"intro"},[t._v("\n          "+t._s(t.$t("OFFERS"))+"\n        ")]),e("div",{staticClass:"currency-select"},[e("strong",[t._v(t._s(t.$t("FILTER_BY_CURRENCY")))]),e("v-select",{attrs:{options:[{label:t.$t("NOT_SELECTED"),value:null}].concat(r(t.currencySelectOptions)),clearable:!1,compact:""},model:{value:t.offersCurrency,callback:function(e){t.offersCurrency=e},expression:"offersCurrency"}})],1),t.isMobile?e("div",{staticClass:"commands"},t._l(t.offers,(function(n){return e("div",{key:n.id,staticClass:"command"},[e("span",{staticClass:"command__heading"},[t._v(t._s(t.$t("PRICE")))]),e("span",[t._v("\n                  "+t._s(n.price)+"\n                  "+t._s(n.currency)+"\n              "),t.plusAccount&&1===t.plusAccount.is_yours?t._e():[e("btn",{staticStyle:{"margin-left":"4px"},attrs:{type:"primary",loading:t.confirmingOffers.includes(n.id)},nativeOn:{click:function(e){return t.buy(n)}}},[n.manual_instructions?[t._v("\n                  "+t._s(t.$t("BUY_MANUALLY"))+"\n                ")]:n.purchase_uri?[t._v("\n                  "+t._s(t.$t("BUY_WITH_PAYPAL"))+"\n                ")]:[t._v("\n                  "+t._s(t.$t("BUY"))+"\n                ")]],2)]],2),e("span",{staticClass:"command__heading"},[t._v(t._s(t.$t("NAME")))]),e("span",[t._v(t._s(n.name))]),e("span",{staticClass:"command__heading"},[t._v(t._s(t.$t("EXPIRES_AT")))]),e("span",[t._v(t._s(new Date(1e3*n.expires_at).toLocaleString()))]),e("span",{staticClass:"command__heading"},[t._v(t._s(t.$t("REINSTALL_DATE"))+"*")]),e("span",[t._v(t._s(n.reinstallation_at?new Date(1e3*n.reinstallation_at).toLocaleString():"N/A"))])])})),0):e("div",{staticClass:"table-apps-wrapper"},[e("table",{staticClass:"table-apps"},[e("thead",{staticClass:"table-apps__head table-apps__row"},[e("tr",[e("th",{staticClass:"table-apps__cell"},[t._v(t._s(t.$t("PRICE")))]),e("th",{staticClass:"table-apps__cell"},[t._v(t._s(t.$t("NAME")))]),e("th",{staticClass:"table-apps__cell"},[t._v(t._s(t.$t("EXPIRES_AT")))]),e("th",{staticClass:"table-apps__cell"},[t._v(t._s(t.$t("REINSTALL_DATE"))+"*")]),e("th")])]),e("tbody",t._l(t.offers,(function(n){return e("tr",{key:n.id,staticClass:"table-apps__row"},[e("td",{staticClass:"table-apps__cell"},[t._v("\n                "+t._s(n.price)+"\n                "+t._s(n.currency)+"\n              ")]),e("td",{staticClass:"table-apps__cell"},[t._v(t._s(n.name))]),e("td",{staticClass:"table-apps__cell"},[t._v("\n                "+t._s(new Date(1e3*n.expires_at).toLocaleString())+"\n              ")]),e("td",{staticClass:"table-apps__cell"},[t._v("\n                "+t._s(n.reinstallation_at?new Date(1e3*n.reinstallation_at).toLocaleString():"N/A")+"\n              ")]),e("td",{staticClass:"table-apps__cell table-apps__cell_nw table-apps__cell_right"},[t.plusAccount&&1===t.plusAccount.is_yours?t._e():[e("btn",{attrs:{type:"primary",loading:t.confirmingOffers.includes(n.id)},nativeOn:{click:function(e){return t.buy(n)}}},[n.manual_instructions?[t._v("\n                      "+t._s(t.$t("BUY_MANUALLY"))+"\n                    ")]:n.purchase_uri?[t._v("\n                      "+t._s(t.$t("BUY_WITH_PAYPAL"))+"\n                    ")]:[t._v("\n                      "+t._s(t.$t("BUY"))+"\n                    ")]],2)]],2)])})),0)])]),t.offers.length?e("html-with-links",{staticClass:"text g-text",staticStyle:{"margin-top":"15px"},attrs:{tag:"p",html:"*".concat(t.$t("P2P_OFFERS_REINSTALL_DATE_DESC"))}}):e("p",{staticStyle:{"margin-top":"15px"}},[t._v(t._s(t.$t("NOTHING_WAS_FOUND")))])],2)])]],2)},l=[],p=n("2a7d"),f=n("555f"),_=n("13a2"),h=n("6199"),d=n("b26e"),v=n("2f62"),g=n("d262");function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function y(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */y=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,s=Object.create(i.prototype),o=new I(r||[]);return a(s,"_invoke",{value:$(t,n,o)}),s}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var f="suspendedStart",_="suspendedYield",h="executing",d="completed",v={};function g(){}function b(){}function P(){}var S={};u(S,s,(function(){return this}));var C=Object.getPrototypeOf,E=C&&C(C(L([])));E&&E!==n&&r.call(E,s)&&(S=E);var O=P.prototype=g.prototype=Object.create(S);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function A(t,e){function n(a,i,s,o){var c=p(t[a],t,i);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==m(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,s,o)}),(function(t){n("throw",t,s,o)})):e.resolve(l).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,o)}))}o(c.arg)}var i;a(this,"_invoke",{value:function(t,r){function a(){return new e((function(e,a){n(t,r,e,a)}))}return i=i?i.then(a,a):a()}})}function $(e,n,r){var a=f;return function(i,s){if(a===h)throw new Error("Generator is already running");if(a===d){if("throw"===i)throw s;return{value:t,done:!0}}for(r.method=i,r.arg=s;;){var o=r.delegate;if(o){var c=x(o,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===f)throw a=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=h;var u=p(e,n,r);if("normal"===u.type){if(a=r.done?d:_,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(a=d,r.method="throw",r.arg=u.arg)}}}function x(e,n){var r=n.method,a=e.iterator[r];if(a===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,x(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=p(a,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var s=i.arg;return s?s.done?(n[e.resultName]=s.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function L(e){if(e||""===e){var n=e[s];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(m(e)+" is not iterable")}return b.prototype=P,a(O,"constructor",{value:P,configurable:!0}),a(P,"constructor",{value:b,configurable:!0}),b.displayName=u(P,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,P):(t.__proto__=P,u(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},w(A.prototype),u(A.prototype,o,(function(){return this})),e.AsyncIterator=A,e.async=function(t,n,r,a,i){void 0===i&&(i=Promise);var s=new A(l(t,n,r,a),i);return e.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},w(O),u(O,c,"Generator"),u(O,s,(function(){return this})),u(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=L,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return o.type="throw",o.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],o=s.completion;if("root"===s.tryLoc)return a("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return a(s.catchLoc,!0);if(this.prev<s.finallyLoc)return a(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return a(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return a(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;T(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:L(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}function b(t,e,n,r,a,i,s){try{var o=t[i](s),c=o.value}catch(u){return void n(u)}o.done?e(c):Promise.resolve(c).then(r,a)}function P(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function s(t){b(i,r,a,s,o,"next",t)}function o(t){b(i,r,a,s,o,"throw",t)}s(void 0)}))}}function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){E(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function E(t,e,n){return e=O(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function O(t){var e=w(t,"string");return"symbol"===m(e)?e:String(e)}function w(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var A={components:{Btn:p["a"],Loader:f["a"],HtmlWithLinks:_["a"],YesNo:h["a"],VSelect:d["a"]},data:function(){return{isMobile:window.innerWidth<=767||window.innerHeight<=767,loading:!0,offers:[],offersCurrency:null,purchases:[],configuringP2PSettings:!1,savingP2PSettings:!1,p2pSettings:{isP2P:"0",p2pPrice:"",p2pName:"",p2pPaypalEmail:"",p2pCurrency:"",p2pManualInstructions:""},banningPurchases:[],unbanningPurchases:[],approvingPurchases:[],rejectingPurchases:[],confirmingOffers:[]}},computed:C(C(C({},Object(v["f"])(["devices","lt","stats","email"])),Object(v["d"])(["hasPlus","config","isDeviceLinked","devices","lt"])),{},{currentDevice:function(){var t=this;return this.devices.find((function(e){return e.lt===t.lt}))||{}},title:function(){return this.$t("P2P_SIGNING_MARKETPLACE")},configLoaded:function(){return!!this.config.model||this.devicesLoaded&&!this.isDeviceLinked},plusAccount:function(){return this.config.plus_account},currencySelectOptions:function(){return Object.keys(this.stats.p2p_currencies).map((function(t){return{label:t,value:t}}))}}),methods:C(C({},Object(v["c"])(["getStats"])),{},{buy:function(t){var e=this;return P(y().mark((function n(){var r,a;return y().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("ERROR_NO_DEVICE_LINKED"!==t.no_purchase_uri_reason){n.next=5;break}return n.next=3,e.$confirm(e.$t("LINKED_DEVICE_REQUIRED"));case 3:return e.$router.push("/link"),n.abrupt("return");case 5:if(t.purchase_uri||t.manual_instructions){n.next=9;break}return n.next=8,e.$alert(t.no_purchase_uri_reason_translated||e.$t(t.no_purchase_uri_reason));case 8:return n.abrupt("return");case 9:return n.next=11,e.$confirm("".concat(e.$t("IS_CORRECT_DEVICE")," ").concat(e.currentDevice.name," - ").concat(e.currentDevice.model,"?")).catch((function(){return e.devices.length>1?e.$confirm(e.$t("SWITCH_TO_ANOTHER_DEVICE_REDIRECT")).then((function(){e.$router.push("/my/devices")})):Promise.reject()})).catch((function(){return e.$confirm(e.$t("DO_YOU_WANT_LINK_ANOTHER_DEVICE")).then((function(){e.$router.push("/my/devices")}))})).catch((function(){Object(g["a"])()?(e.$notify({type:"success",text:e.$t("ORPHANED_LINK_DESC")}),e.$api.getLinkCode().then((function(t){e.$notify({type:"success",text:e.$t("DEVICE_IS_BEING_LINKED_RELOAD")}),e.$store.commit("lt",""),e.$api.link({code:t,type:"new"},!0).then((function(t){e.$store.commit("lt",t.link_token),window.location=t.profile_service}))}))):e.$notify({type:"error",text:e.$t("VISIT_FROM_IDEVICE")})}));case 11:if(r=n.sent,!0===r){n.next=14;break}return n.abrupt("return");case 14:if(!t.manual_instructions){n.next=29;break}return n.next=17,e.$confirm("".concat(e.$t("YOU_ARE_ABOUT_TO_BUY_DEV_CERT",{name:t.name,amount:t.price,currency:t.currency}),"\n\n").concat(t.manual_instructions),{okText:"I_MADE_PAYMENT"});case 17:return n.next=19,e.$confirm(e.$t("P2P_PAYMENT_CONFIRMATION_DESC"));case 19:return e.confirmingOffers.push(t.id),n.prev=20,n.next=23,e.$api.editP2POffer({id:t.id,operation:"request"});case 23:e.$notify({type:"success",text:e.$t("P2P_PAYMENT_CONFIRMATION_REQUEST_SUCCESS")});case 24:return n.prev=24,a=e.confirmingOffers.indexOf(t.id),e.confirmingOffers.splice(a,1),n.finish(24);case 28:return n.abrupt("return");case 29:if(!t.purchase_uri){n.next=33;break}return n.next=32,e.$confirm(e.$t("P2P_CERTIFICATE_BUY_CONFIRM_TEXT"));case 32:window.location.href=t.purchase_uri;case 33:case"end":return n.stop()}}),n,null,[[20,,24,28]])})))()},saveP2PSettings:function(){var t=this;this.savingP2PSettings=!0,this.$api.editPlusDevAccountP2PSettings(this.p2pSettings).then((function(){return t.$store.dispatch("getConfig")})).then((function(){t.configuringP2PSettings=!1,t.$notify({type:"success",text:t.$t("P2P_CONFIGURATION_SUCCESS")})})).finally((function(){t.savingP2PSettings=!1}))},banPurchase:function(t){var e=this;return P(y().mark((function n(){var r;return y().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$prompt(e.$t("P2P_PURCHASE_BAN_WARNING"));case 2:r=n.sent,e.banningPurchases.push(t),e.$api.banunbanDevice({udid:t,reason:r}).then((function(){e.$notify({type:"success",text:e.$t("P2P_PURCHASE_BAN_SUCCESS")}),e.$api.getP2PPurchases().then((function(t){e.purchases=t.data}))})).finally((function(){var n=e.banningPurchases.indexOf(t);e.banningPurchases.splice(n,1)}));case 5:case"end":return n.stop()}}),n)})))()},unbanPurchase:function(t){var e=this;return P(y().mark((function n(){var r;return y().wrap((function(n){while(1)switch(n.prev=n.next){case 0:r="",e.unbanningPurchases.push(t),e.$api.banunbanDevice({udid:t,reason:r}).then((function(){e.$notify({type:"success",text:e.$t("P2P_PURCHASE_UNBAN_SUCCESS")}),e.$api.getP2PPurchases().then((function(t){e.purchases=t.data}))})).finally((function(){var n=e.unbanningPurchases.indexOf(t);e.unbanningPurchases.splice(n,1)}));case 3:case"end":return n.stop()}}),n)})))()},approvePurchase:function(t){var e=this;return P(y().mark((function n(){var r;return y().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$confirm(e.$t("P2P_PURCHASE_APPROVAL_CONFIRMATION"));case 2:return e.approvingPurchases.push(t),n.prev=3,n.next=6,e.$api.editP2POffer({id:t,operation:"approve"});case 6:return n.prev=6,r=e.approvingPurchases.indexOf(t),e.approvingPurchases.splice(r,1),e.getPurchases(),n.finish(6);case 11:case"end":return n.stop()}}),n,null,[[3,,6,11]])})))()},rejectPurchase:function(t){var e=this;return P(y().mark((function n(){var r;return y().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$confirm(e.$t("P2P_PURCHASE_REJECTION_CONFIRMATION"));case 2:return e.rejectingPurchases.push(t),n.prev=3,n.next=6,e.$api.editP2POffer({id:t,operation:"reject"});case 6:return n.prev=6,r=e.rejectingPurchases.indexOf(t),e.rejectingPurchases.splice(r,1),e.getPurchases(),n.finish(6);case 11:case"end":return n.stop()}}),n,null,[[3,,6,11]])})))()},getOffers:function(){var t=this,e=this.offersCurrency;return this.$api.getP2POffers({currency:e}).then((function(n){e===t.offersCurrency&&(t.offers=n)}))},getPurchases:function(){var t=this;this.$api.getP2PPurchases().then((function(e){t.purchases=e.data}))}}),watch:{offersCurrency:function(){this.getOffers()}},created:function(){var t=this;return P(y().mark((function e(){var n;return y().wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=[],n.push(t.getStats().then((function(e){t.p2pSettings.p2pCurrency||(t.p2pSettings.p2pCurrency=Object.keys(e.p2p_currencies)[0])}))),n.push(t.$store.dispatch("getConfig").then((function(e){var n=e.plus_account;n&&(t.p2pSettings.isP2P=1===n.is_p2p?"1":"0",t.p2pSettings.p2pPrice=n.p2p_price,t.p2pSettings.p2pName=n.p2p_name,t.p2pSettings.p2pPaypalEmail=n.p2p_paypal_email,t.p2pSettings.p2pCurrency=n.p2p_currency||t.p2pSettings.p2pCurrency,t.p2pSettings.p2pManualInstructions=n.p2p_manual_instructions)}))),n.push(t.getOffers()),n.push(t.getPurchases()),Promise.allSettled(n).then((function(){t.loading=!1}));case 6:case"end":return e.stop()}}),e)})))()}},$=A,x=(n("9b2d"),n("2877")),N=Object(x["a"])($,u,l,!1,null,"35b5590a",null);e["default"]=N.exports},"1ac5":function(t,e,n){"use strict";n("4289")},"2a7d":function(t,e,n){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(t,e,n){return e=i(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t){var e=s(t,"string");return"symbol"===r(e)?e:String(e)}function s(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var a=n.call(t,e||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var o=function(){var t,e=this,n=e._self._c;return n(e.tag,e._b({directives:[{name:"tooltip",rawName:"v-tooltip",value:e.tooltip,expression:"tooltip"}],tag:"component",staticClass:"button",class:(t={},a(t,"button_".concat(e.type),!0),a(t,"button_size-".concat(e.size),e.size),a(t,"button_loading",e.loading),a(t,"button_disabled",e.disabled),t)},"component",e.$attrs,!1),[e.loading?n("loader",{attrs:{size:"15px",border:"3px",absolute:""}}):e._e(),e._t("default")],2)},c=[],u=n("555f"),l={props:{type:String,loading:Boolean,disabled:Boolean,size:String,tag:{type:String,default:"button"}},components:{Loader:u["a"]},data:function(){return{tooltip:null,tooltipTimeout:null}},methods:{showTooltip:function(t){var e=this,n=t.content,r=t.duration,a=void 0===r?5e3:r;clearTimeout(this.tooltipTimeout),this.tooltip={content:n,trigger:"manual",show:!0},this.tooltipTimeout=setTimeout((function(){e.tooltip=null}),a)}}},p=l,f=(n("f783"),n("2877")),_=Object(f["a"])(p,o,c,!1,null,"bd48b20e",null);e["a"]=_.exports},4289:function(t,e,n){},6199:function(t,e,n){"use strict";var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"yesno",class:{yesno_clearable:t.clearable,yesno_vertical:t.vertical,"yesno_fit-content":t.fitContent}},t._l(t.finalOptions,(function(n){return e("span",{key:n.value,staticClass:"yesno__option",class:{yesno__option_active:t.value==n.value},on:{click:function(e){return t.onClick(n.value)}}},[t._v("\n    "+t._s(n.label)+"\n  ")])})),0)},a=[];function i(t,e){return l(t)||u(t,e)||o(t,e)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,i,s,o=[],c=!0,u=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(o.push(r.value),o.length!==e);c=!0);}catch(t){u=!0,a=t}finally{try{if(!c&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw a}}return o}}function l(t){if(Array.isArray(t))return t}var p={props:{value:{},options:{type:[Object,Array]},clearable:{type:Boolean},vertical:{type:Boolean},clearValue:{default:null},fitContent:{type:Boolean}},computed:{finalOptions:function(){return this.options?this.parseOptions(this.options):this.defaultOptions},defaultOptions:function(){return[{value:"yes",label:this.$t("YES")},{value:"no",label:this.$t("NO")}]}},methods:{parseOptions:function(t){return Array.isArray(t)?t:Object.entries(t).map((function(t){var e=i(t,2),n=e[0],r=e[1];return{value:n,label:r}}))},onClick:function(t){this.clearable&&this.value===t?this.$emit("input",this.clearValue):this.$emit("input",t)}}},f=p,_=(n("f172"),n("2877")),h=Object(_["a"])(f,r,a,!1,null,"6fe47fde",null);e["a"]=h.exports},"9b2d":function(t,e,n){"use strict";n("dee1")},b26e:function(t,e,n){"use strict";var r=function(){var t,e=this,n=e._self._c;return n("v-select",{staticClass:"select",class:{select_compact:e.compact,select_error:e.error},attrs:{placeholder:e.placeholder,options:e.options,reduce:function(t){return t.value},value:e.value,clearable:null===(t=e.clearable)||void 0===t||t,searchable:e.inputMode,taggable:e.inputMode},on:{input:e.onInput,"option:selected":e.onOptionSelected,search:e.onSearch,close:e.onClose}})},a=[],i={props:{placeholder:String,options:{},value:{},clearable:Boolean,compact:Boolean,inputMode:Boolean,error:Boolean},data:function(){return{search:""}},methods:{onSearch:function(t){this.search=t},onInput:function(t){this.$emit("input",t),this.search=""},onClose:function(){this.inputMode&&this.search&&this.$emit("input",this.search)},onOptionSelected:function(t){this.inputMode&&t.label&&this.$emit("input",t.label)}}},s=i,o=(n("1ac5"),n("2877")),c=Object(o["a"])(s,r,a,!1,null,"21e9c7a9",null);e["a"]=c.exports},c2b9:function(t,e,n){},c923:function(t,e,n){},d262:function(t,e,n){"use strict";function r(){var t=window.navigator.userAgent;if(t.indexOf("iPad")>-1)return!0;if(t.indexOf("Macintosh")>-1)try{return document.createEvent("TouchEvent"),!0}catch(e){}return!1}function a(){var t=document.createElement("canvas").getContext("webgl"),e=t.getExtension("WEBGL_debug_renderer_info"),n=e&&(t.getParameter(e.UNMASKED_RENDERER_WEBGL)||"");return!(!n.match(/Apple/)||n.match(/Apple GPU/))||-1===t.getSupportedExtensions().indexOf("WEBGL_compressed_texture_s3tc_srgb")}function i(){return!!window.navigator.userAgent.match(/Safari/)||(!!r()||!!a())}e["a"]=i},dee1:function(t,e,n){},f172:function(t,e,n){"use strict";n("c923")},f783:function(t,e,n){"use strict";n("c2b9")}}]);
//# sourceMappingURL=chunk-65822e71.3da458f7.js.map