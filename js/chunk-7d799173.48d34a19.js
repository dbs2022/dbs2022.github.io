(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d799173"],{"07a7":function(t,e,i){"use strict";i("a40b")},"0d28":function(t,e,i){"use strict";i("90b1")},"1b08":function(t,e,i){"use strict";i("45fe")},"1ca7":function(t,e,i){"use strict";i("c438")},"2a7d":function(t,e,i){"use strict";function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function n(t,e,i){return e=a(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t){var e=o(t,"string");return"symbol"===s(e)?e:String(e)}function o(t,e){if("object"!==s(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var r=function(){var t,e=this,i=e._self._c;return i("button",{staticClass:"button",class:(t={},n(t,"button_".concat(e.type),!0),n(t,"button_loading",e.loading),n(t,"button_disabled",e.disabled),t)},[e.loading?i("loader",{attrs:{size:"15px",border:"3px",absolute:""}}):e._e(),e._t("default")],2)},l=[],_=i("555f"),c={props:["type","loading","disabled"],components:{Loader:_["a"]}},d=c,u=(i("1ca7"),i("2877")),p=Object(u["a"])(d,r,l,!1,null,"4923320a",null);e["a"]=p.exports},"45fe":function(t,e,i){},"4fde":function(t,e,i){"use strict";i("8fa4")},"555f":function(t,e,i){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper",class:{wrapper_absolute:t.absolute}},[e("div",{staticClass:"loader",style:{width:t.size,height:t.size,"border-width":t.border}})])},n=[],a={props:{size:{default:"70px"},border:{default:"6px"},absolute:{type:Boolean,default:!1}}},o=a,r=(i("4fde"),i("2877")),l=Object(r["a"])(o,s,n,!1,null,"37663d0c",null);e["a"]=l.exports},6199:function(t,e,i){"use strict";function s(t,e){return l(t)||r(t,e)||a(t,e)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"===typeof t)return o(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}function r(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){var s,n,a,o,r=[],l=!0,_=!1;try{if(a=(i=i.call(t)).next,0===e){if(Object(i)!==i)return;l=!1}else for(;!(l=(s=a.call(i)).done)&&(r.push(s.value),r.length!==e);l=!0);}catch(t){_=!0,n=t}finally{try{if(!l&&null!=i.return&&(o=i.return(),Object(o)!==o))return}finally{if(_)throw n}}return r}}function l(t){if(Array.isArray(t))return t}var _=function(){var t=this,e=t._self._c;return e("div",{staticClass:"yesno",class:{yesno_clearable:t.clearable,yesno_vertical:t.vertical}},t._l(Object.entries(t.options||t.defaultOptions),(function(i){var n=s(i,2),a=n[0],o=n[1];return e("span",{key:a,staticClass:"yesno__option",class:{yesno__option_active:t.value==a},on:{click:function(e){return t.onClick(a)}}},[t._v("\n    "+t._s(o)+"\n  ")])})),0)},c=[],d={props:{value:{},options:{},clearable:{type:Boolean},vertical:{type:Boolean},clearValue:{default:null}},computed:{defaultOptions:function(){return{yes:this.$t("YES"),no:this.$t("NO")}}},methods:{onClick:function(t){this.clearable&&this.value===t?this.$emit("input",this.clearValue):this.$emit("input",t)}}},u=d,p=(i("0d28"),i("2877")),f=Object(p["a"])(u,_,c,!1,null,"08a1a7a7",null);e["a"]=f.exports},"7d07":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main"},[e("h1",{staticClass:"intro"},[t._v(t._s(t.$t("CONFIGURE_FEATURES")))]),e("div",{staticClass:"row"},[t.inited?t._e():e("loader"),t.inited?e("form",{staticClass:"features"},[e("h2",{staticClass:"heading"},[t._v(t._s(t.$t("GENERAL DEVICE CONFIGURATION")))]),t._l(t.basic,(function(i,s){return e("div",{key:s,staticClass:"feature"},[e("p",{staticClass:"feature__text g-text",domProps:{innerHTML:t._s(i)}}),e("yes-no",{staticClass:"feature__select",model:{value:t.config[s],callback:function(e){t.$set(t.config,s,e)},expression:"config[feature]"}})],1)})),e("div",{staticClass:"feature"},[e("p",{staticClass:"feature__text g-text"},[t._v("\n          "+t._s(t.$t("FREE_CERTIFICATE_FOR_SIGNING"))+"\n        ")]),0===t.enterpriseCertificates.length?[e("html-with-links",{attrs:{tag:"span",html:t.$t("FREE_SIGNINIG_IS_NOT_AVAILABLE")}})]:t._e(),t.enterpriseCertificates.length?[e("yes-no",{staticClass:"feature__select",attrs:{options:t.enterpriseCertificates,vertical:""},model:{value:t.config.enterprise_cert_id,callback:function(e){t.$set(t.config,"enterprise_cert_id",e)},expression:"config.enterprise_cert_id"}})]:t._e()],2),e("p",{staticClass:"warning"},[t._v("\n        "+t._s(t.$t("ADVANCED_USAGE_ZONE_NOTICE"))+"\n      ")]),t._l(t.advanced,(function(i,s){return e("div",{key:s,staticClass:"feature"},[e("p",{staticClass:"feature__text g-text",domProps:{innerHTML:t._s(i)}}),e("yes-no",{staticClass:"feature__select",model:{value:t.config[s],callback:function(e){t.$set(t.config,s,e)},expression:"config[feature]"}})],1)})),e("div",{staticClass:"feature"},[e("p",{staticClass:"feature__text g-text"},[t._v("\n          "+t._s(t.$t("IDENTITY_TYPE_TO_USE_FOR_SIGNING"))+"\n        ")]),e("yes-no",{staticClass:"feature__select",attrs:{options:{auto:t.$t("AUTO"),development:t.$t("DEVELOPMENT"),distribution:t.$t("distribution")}},model:{value:t.config.signing_identity_type,callback:function(e){t.$set(t.config,"signing_identity_type",e)},expression:"config.signing_identity_type"}})],1),e("h2",{staticClass:"heading",domProps:{innerHTML:t._s(t.$t("CONFIGURE_DEV_CERTIFICATE_TITLE"))}}),t.devCredentialsProviders.length?e("div",{staticClass:"inline-buttons"},[t._l(t.devCredentialsProviders,(function(i){return[e("btn",{key:i.name,attrs:{type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.importDevCredetials(i.href)}}},[t._v(t._s(t.$t("IMPORT_FROM",{from:i.name}))+"\n          ")]),t._v(" \n        ")]}))],2):t._e(),e("html-with-links",{staticStyle:{"text-align":"center"},attrs:{tag:"div",html:t.$t("INTEGRATE_EASY_LINKING_NOTICE",{link:"https://a.appdb.to/acp.php?action=pluscerts&mode=manage_website"})}}),e("div",{staticClass:"feature"},[e("p",{staticClass:"feature__text g-text"},[t._v("\n          "+t._s(t.$t("DEV_CERTIFICATE_BUNDLE"))+" (development)\n          "),t.details.dev_p12?e("span",{staticClass:"feature__info"},[t._v(t._s(t.$t("ATTACHED")))]):t._e(),!0===t.details.dev_p12_validation_result?e("span",{staticClass:"feature__info",staticStyle:{color:"green"}},[t._v(t._s(t.$t("VALID")))]):t._e(),t.details.dev_p12_validation_issues.length?e("span",{staticClass:"feature__info",staticStyle:{color:"orange"}},[t._v(t._s(t.$t("ISSUES"))+": "+t._s(t.details.dev_p12_validation_issues.join(", ")))]):t._e(),!1===t.details.dev_p12_validation_result?e("span",{staticClass:"feature__info",staticStyle:{color:"red"}},[t._v(t._s(t.$t("INVALID"))+", "+t._s(t.details.dev_p12_validation_error))]):t._e()]),e("file",{staticClass:"feature__file",model:{value:t.config.dev_p12,callback:function(e){t.$set(t.config,"dev_p12",e)},expression:"config.dev_p12"}})],1),e("div",{staticClass:"feature"},[e("p",{staticClass:"feature__text g-text"},[t._v("\n          "+t._s(t.$t("DEV_CERTIFICATE_BUNDLE_PASSWORD"))+" (development)\n        ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.config.dev_p12_password,expression:"config.dev_p12_password"}],staticClass:"feature__input",attrs:{placeholder:"Enter password",type:"text"},domProps:{value:t.config.dev_p12_password},on:{input:function(e){e.target.composing||t.$set(t.config,"dev_p12_password",e.target.value)}}})]),e("div",{staticClass:"feature"},[e("p",{staticClass:"feature__text g-text"},[t._v("\n          "+t._s(t.$t("MOBILE_PROVISIONING_PROFILE"))+" (development, explicit)\n          "),t.details.dev_provision?e("span",{staticClass:"feature__info"},[t._v(t._s(t.$t("ATTACHED")))]):t._e(),!0===t.details.dev_provision_validation_result?e("span",{staticClass:"feature__info",staticStyle:{color:"green"}},[t._v(t._s(t.$t("VALID")))]):t._e(),t.details.dev_provision_validation_issues.length?e("span",{staticClass:"feature__info",staticStyle:{color:"orange"}},[t._v(t._s(t.$t("ISSUES"))+": "+t._s(t.details.dev_provision_validation_issues.join(", ")))]):t._e(),!1===t.details.dev_provision_validation_result?e("span",{staticClass:"feature__info",staticStyle:{color:"red"}},[t._v(t._s(t.$t("INVALID"))+", "+t._s(t.details.dev_provision_validation_error))]):t._e()]),e("file",{staticClass:"feature__file",model:{value:t.config.dev_provision,callback:function(e){t.$set(t.config,"dev_provision",e)},expression:"config.dev_provision"}})],1),e("div",{staticClass:"feature"},[e("p",{staticClass:"feature__text g-text"},[t._v("\n          "+t._s(t.$t("MOBILE_PROVISIONING_PROFILE"))+" (development, wildcard)\n          "),t.details.dev_wildcard_provision?e("span",{staticClass:"feature__info"},[t._v(t._s(t.$t("ATTACHED")))]):t._e(),!0===t.details.dev_wildcard_provision_validation_result?e("span",{staticClass:"feature__info",staticStyle:{color:"green"}},[t._v(t._s(t.$t("VALID")))]):t._e(),t.details.dev_wildcard_provision_validation_issues.length?e("span",{staticClass:"feature__info",staticStyle:{color:"orange"}},[t._v(t._s(t.$t("ISSUES"))+": "+t._s(t.details.dev_wildcard_provision_validation_issues.join(", ")))]):t._e(),!1===t.details.dev_wildcard_provision_validation_result?e("span",{staticClass:"feature__info",staticStyle:{color:"red"}},[t._v(t._s(t.$t("INVALID"))+", "+t._s(t.details.dev_wildcard_provision_validation_error))]):t._e()]),e("file",{staticClass:"feature__file",model:{value:t.config.dev_wildcard_provision,callback:function(e){t.$set(t.config,"dev_wildcard_provision",e)},expression:"config.dev_wildcard_provision"}})],1),e("div",{staticClass:"feature"},[e("p",{staticClass:"feature__text g-text"},[t._v("\n          "+t._s(t.$t("DEV_CERTIFICATE_BUNDLE"))+" (distribution)\n          "),t.details.p12?e("span",{staticClass:"feature__info"},[t._v(t._s(t.$t("ATTACHED")))]):t._e(),!0===t.details.p12_validation_result?e("span",{staticClass:"feature__info",staticStyle:{color:"green"}},[t._v(t._s(t.$t("VALID")))]):t._e(),!1===t.details.p12_validation_issues.length?e("span",{staticClass:"feature__info",staticStyle:{color:"orange"}},[t._v(t._s(t.$t("ISSUES"))+": "+t._s(t.details.p12_validation_issues.join(", ")))]):t._e(),!1===t.details.p12_validation_result?e("span",{staticClass:"feature__info",staticStyle:{color:"red"}},[t._v(t._s(t.$t("INVALID"))+", "+t._s(t.details.p12_validation_error))]):t._e()]),e("file",{staticClass:"feature__file",model:{value:t.config.p12,callback:function(e){t.$set(t.config,"p12",e)},expression:"config.p12"}})],1),e("div",{staticClass:"feature"},[e("p",{staticClass:"feature__text g-text"},[t._v("\n          "+t._s(t.$t("DEV_CERTIFICATE_BUNDLE_PASSWORD"))+" (distribution)\n        ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.config.p12_password,expression:"config.p12_password"}],staticClass:"feature__input",attrs:{placeholder:"Enter password",type:"text"},domProps:{value:t.config.p12_password},on:{input:function(e){e.target.composing||t.$set(t.config,"p12_password",e.target.value)}}})]),e("div",{staticClass:"feature"},[e("p",{staticClass:"feature__text g-text"},[t._v("\n          "+t._s(t.$t("MOBILE_PROVISIONING_PROFILE"))+" (distribution, explicit)\n          "),t.details.provision?e("span",{staticClass:"feature__info"},[t._v(t._s(t.$t("ATTACHED")))]):t._e(),!0===t.details.provision_validation_result?e("span",{staticClass:"feature__info",staticStyle:{color:"green"}},[t._v(t._s(t.$t("VALID")))]):t._e(),t.details.provision_validation_issues.length?e("span",{staticClass:"feature__info",staticStyle:{color:"orange"}},[t._v(t._s(t.$t("ISSUES"))+": "+t._s(t.details.provision_validation_issues.join(", ")))]):t._e(),!1===t.details.provision_validation_result?e("span",{staticClass:"feature__info",staticStyle:{color:"red"}},[t._v(t._s(t.$t("INVALID"))+", "+t._s(t.details.provision_validation_error))]):t._e()]),e("file",{staticClass:"feature__file",model:{value:t.config.provision,callback:function(e){t.$set(t.config,"provision",e)},expression:"config.provision"}})],1),e("div",{staticClass:"feature"},[e("p",{staticClass:"feature__text g-text"},[t._v("\n          "+t._s(t.$t("MOBILE_PROVISIONING_PROFILE"))+" (distribution, wildcard)\n          "),t.details.wildcard_provision?e("span",{staticClass:"feature__info"},[t._v(t._s(t.$t("ATTACHED")))]):t._e(),!0===t.details.wildcard_provision_validation_result?e("span",{staticClass:"feature__info",staticStyle:{color:"green"}},[t._v(t._s(t.$t("VALID")))]):t._e(),t.details.wildcard_provision_validation_issues.length?e("span",{staticClass:"feature__info",staticStyle:{color:"orange"}},[t._v(t._s(t.$t("ISSUES"))+": "+t._s(t.details.wildcard_provision_validation_issues.join(", ")))]):t._e(),!1===t.details.wildcard_provision_validation_result?e("span",{staticClass:"feature__info",staticStyle:{color:"red"}},[t._v(t._s(t.$t("INVALID"))+", "+t._s(t.details.wildcard_provision_validation_error))]):t._e()]),e("file",{staticClass:"feature__file",model:{value:t.config.wildcard_provision,callback:function(e){t.$set(t.config,"wildcard_provision",e)},expression:"config.wildcard_provision"}})],1),e("div",{staticClass:"buttons"},[e("button",{staticClass:"buttons__delete",on:{click:function(e){return e.preventDefault(),t.reset("clear_developer_entity")}}},[t.pending?e("loader",{attrs:{size:"15px",border:"3px",absolute:""}}):t._e(),t._v("\n          "+t._s(t.$t("CLEAR_DEVELOPER_IDENTITY"))+"\n        ")],1),e("button",{staticClass:"buttons__save",on:{click:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[t.pending?e("loader",{attrs:{size:"15px",border:"3px",absolute:""}}):t._e(),t._v("\n          "+t._s(t.$t("SAVE_FEATURE_CONFIGURATION"))+"\n        ")],1)])],2):t._e(),e("html-with-links",{staticClass:"desc g-text",attrs:{html:"<p>"+t.$t("CONFIGURE_SUMMARY_DESC",{buyLink:"/my/buy",privacyLink:"/info/privacy"})+"<br/><br/><a href='https://www.youtube.com/watch?v=cQiRDQ2ijGg' target='_blank'>"+t.$t("VIDEO_TUTORIAL")+"</a></p>"}})],1)])},n=[],a=i("6199"),o=i("555f"),r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"file",on:{click:function(e){return t.$refs.input.click()}}},[t._v("\n  "+t._s(this.name||t.$t("CHOOSE_FILE"))+"\n  "),e("input",{ref:"input",staticClass:"input",attrs:{type:"file"},on:{change:t.onChange}})])},l=[],_={data:function(){return{name:""}},methods:{onChange:function(t){var e=this,i=t.target.files[0];if(i){this.name=i.name;var s=new FileReader;s.onload=function(t){e.$emit("input",t.target.result.replace(/^.*,/,""))},s.readAsDataURL(i)}else this.name=""}}},c=_,d=(i("1b08"),i("2877")),u=Object(d["a"])(c,r,l,!1,null,"2983d559",null),p=u.exports,f=i("2a7d"),v=i("13a2");function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function C(t,e,i){return e=b(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function b(t){var e=y(t,"string");return"symbol"===g(e)?e:String(e)}function y(t,e){if("object"!==g(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var s=i.call(t,e||"default");if("object"!==g(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var h={components:{YesNo:a["a"],Loader:o["a"],File:p,HtmlWithLinks:v["a"],Btn:f["a"]},data:function(){return{inited:!1,pending:!1,config:{free_appleid:"",free_appleid_password:"",appsync:"no",ignore_compatibility:"no",ask_for_installation_options:"no",enable_psychic_paper:"no",disable_protection_checks:"no",disable_revocation_checks:"no",enable_inapp_patch:"no",enable_trainer:"no",is_pro_disabled:"no",p12:null,p12_password:null,provision:null,wildcard_provision:null,dev_p12:null,dev_p12_password:null,dev_provision:null,dev_wildcard_provision:null,enterprise_cert_id:"0",model:"",signing_identity_type:"auto",ios_version:"",is_opted_out_from_emails:"no"},details:{is_apple_silicon:"",is_pro:"",plus_account:{status:""},ios_version:"",free_last_error:null,free_appleid:"",free_appleid_password:"",p12:"",provision:"",wildcard_provision:"",provision_validation_result:!1,provision_validation_error:"",wildcard_provision_validation_result:!1,wildcard_provision_validation_error:"",p12_validation_result:!1,p12_validation_error:"",p12_validation_issues:[],provision_validation_issues:[],wildcard_provision_validation_issues:[],dev_p12:"",dev_provision:"",dev_wildcard_provision:"",dev_provision_validation_result:!1,dev_provision_validation_error:"",dev_wildcard_provision_validation_result:!1,dev_wildcard_provision_validation_error:"",dev_p12_validation_result:!1,dev_p12_validation_error:"",dev_p12_validation_issues:[],dev_provision_validation_issues:[],dev_wildcard_provision_validation_issues:[]},devCredentialsProviders:[],enterpriseCertificates:[]}},computed:{title:function(){return this.$t("CONFIGURE_FEATURES")},majorIOSVersion:function(){return this.config.ios_version?+this.config.ios_version.split(".")[0]:0},basic:function(){return{appsync:this.$t("IS_JAILBROKEN_WITH_APPSYNC",{appsyncLink:"https://cydia.akemi.ai/"}),ignore_compatibility:this.$t("FORCE_APP_INSTALLATION"),ask_for_installation_options:this.$t("ASK_FOR_CUSTOM_INSTALLATION"),is_opted_out_from_emails:this.$t("OPT_OUT_DESCRIPTION")}},advanced:function(){return{disable_revocation_checks:this.$t("DISABLE_REVOCATION_CHECKS_DESC"),disable_protection_checks:this.$t("DISABLE_PROTECTION_CHECKS_DESC"),is_pro_disabled:this.$t("IS_PRO_DISABLED_DESC")}}},methods:{save:function(){var t=this;this.pending||(this.pending=!0,this.$api.saveConfiguration(this.config).then((function(){t.$notify({type:"success",text:t.$t("FEATURE_CONFIGURATION_SAVED")})})).then(this.getConfig).then((function(){return new Promise((function(e){setTimeout((function(){t.$store.dispatch("getDevices").finally(e)}),300)}))})).finally((function(){t.pending=!1})))},reset:function(t){var e=this;this.pending||(this.pending=!0,this.$api.saveConfiguration(C({},t,"yes")).then(this.getConfig).finally((function(){e.pending=!1})))},getConfig:function(){var t=this;return this.$store.dispatch("getConfig").then((function(e){Object.keys(e).forEach((function(i){t.config.hasOwnProperty(i)&&null!==t.config[i]&&(t.config[i]=e[i]),t.details.hasOwnProperty(i)&&(t.details[i]=e[i])})),t.inited=!0}))},importDevCredetials:function(t){this.$confirm(this.$t("IMPORT_DEV_CREDENTIALS_PROVIDER_CONFIRMATION")).then((function(){window.location.href=t}))}},created:function(){var t=this;this.getConfig(),this.$api.getDevCredentialsProviders().then((function(e){t.devCredentialsProviders=e})),this.$api.getEnterpriseCertificates().then((function(e){t.enterpriseCertificates=[],Object.values(e).forEach((function(e){t.enterpriseCertificates[e.id]=e.name}))}))}},m=h,E=(i("07a7"),Object(d["a"])(m,s,n,!1,null,"164632b5",null));e["default"]=E.exports},"8fa4":function(t,e,i){},"90b1":function(t,e,i){},a40b:function(t,e,i){},c438:function(t,e,i){}}]);
//# sourceMappingURL=chunk-7d799173.48d34a19.js.map