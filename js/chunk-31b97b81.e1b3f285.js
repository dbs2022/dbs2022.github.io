(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31b97b81"],{5720:function(t,e,s){},"77e5":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t._self._c;return e("info",[e("div",{domProps:{innerHTML:t._s(t.$t("RESELLER_PROGRAM_DESC_9",{staffSignUpLink:"https://a.appdb.to/acp.php?action=signup",paymentForRef:t.pay_for_ref,paymentPlusForRef:t.plus_pay_for_ref,paidToRefs:t.paidToRefs,paidToStaff:t.paid_staff_funds,appRequestsLink:"/requests",spentOnRequests:t.requests_paid_funds}))}}),e("br"),e("br"),e("br"),e("br"),e("div",{domProps:{innerHTML:t._s(t.$t("RESELLER_PROGRAM_DESC_1",{paidToResellers:t.paidToResellers,privacyIconLink:"https://oldstatic.appdb.to/img/privacy-icon@2x.png"}))}}),e("div",{domProps:{innerHTML:t._s(t.$t("RESELLER_PROGRAM_DESC_2",{pricePerDevice:t.price_per_device}))}}),e("div",{domProps:{innerHTML:t._s(t.$t("RESELLER_PROGRAM_DESC_3"))}}),e("div",{domProps:{innerHTML:t._s(t.$t("RESELLER_PROGRAM_DESC_4"))}}),e("div",{domProps:{innerHTML:t._s(t.$t("CREATE_STAFF_ACCOUNT_TO_CONTINUE",{staffSignUpLink:"https://a.appdb.to/acp.php?action=signup"}))}}),e("template",{slot:"sidebar"},[e("html-with-links",{attrs:{html:t.$t("RESELLER_PROGRAM_SIDEBAR",{staffSignUpLink:"https://a.appdb.to/acp.php?action=signup",refProgramLink:"#ref_program",devAccountProgramLink:"#dev_account_program",staffSupportLink:"#staff_support",requestsFundLink:"#requests_fund"})}})],1)],2)},n=[],i=s("8f33"),a=s("13a2"),p={components:{Info:i["a"],HtmlWithLinks:a["a"]},data:function(){return{paidToResellers:null,paidToRefs:null,pay_for_ref:null,plus_pay_for_ref:null,paid_staff_funds:null,requests_paid_funds:null,price_per_device:null}},computed:{title:function(){return"".concat(this.BRAND_CONFIG.name,"'s developer account reseller program")}},methods:{getStats:function(){var t=this;return this.$api.getStats().then((function(e){t.paidToResellers=e.dev_program_paid,t.paidToRefs=e.ref_program_paid_funds,t.pay_for_ref=e.pay_for_ref,t.plus_pay_for_ref=e.plus_pay_for_ref,t.paid_staff_funds=e.paid_staff_funds,t.requests_paid_funds=e.requests_paid_funds,t.price_per_device=e.price_per_device}))}},serverPrefetch:function(){return this.getStats()},created:function(){this.getStats()}},_=p,o=s("2877"),f=Object(o["a"])(_,r,n,!1,null,null,null);e["default"]=f.exports},8182:function(t,e,s){"use strict";s("5720")},"8f33":function(t,e,s){"use strict";var r=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main"},[e("div",{staticClass:"content"},[t._t("default")],2),t.$slots.sidebar?e("aside",{staticClass:"sidebar"},[e("div",{staticClass:"sidebar__block"},[t._t("sidebar")],2)]):t._e()])},n=[],i=(s("8182"),s("2877")),a={},p=Object(i["a"])(a,r,n,!1,null,"4c357e11",null);e["a"]=p.exports}}]);
//# sourceMappingURL=chunk-31b97b81.e1b3f285.js.map