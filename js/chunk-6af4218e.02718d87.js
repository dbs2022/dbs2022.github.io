(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6af4218e"],{"4fde":function(t,e,s){"use strict";s("8fa4")},"543d":function(t,e,s){},"555f":function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper",class:{wrapper_absolute:t.absolute}},[e("div",{staticClass:"loader",style:{width:t.size,height:t.size,"border-width":t.border}})])},a=[],r={props:{size:{default:"70px"},border:{default:"6px"},absolute:{type:Boolean,default:!1}}},n=r,l=(s("4fde"),s("2877")),c=Object(l["a"])(n,i,a,!1,null,"37663d0c",null);e["a"]=c.exports},"8fa4":function(t,e,s){},d885:function(t,e,s){"use strict";s("543d")},de56:function(t,e,s){t.exports=s.p+"img/icon-nodevice.cc369346.svg"},eb88:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main"},[t.loaded?t._e():e("loader"),t.loaded?e("aside",{staticClass:"sidebar"},[e("div",{staticClass:"sidebar__my"},[e("div",{staticClass:"header"},[t.isDeviceLinked?[e("span",{staticClass:"header__active"},[t._v(t._s(this.$t("ACTIVE_DEVICE")))]),e("img",{staticClass:"header__img",attrs:{src:t.currentDevice.icon}}),e("div",{staticClass:"header__desc"},[e("span",{staticClass:"header__title"},[t._v(t._s(t.currentDevice.name))]),e("span",{staticClass:"header__device"},[t._v(t._s(t.currentDevice.title)+")")]),e("ul",{staticClass:"header__list"},[e("li",{staticClass:"header__status header__status_jail",class:{"header__status_jail-active":"JAILBROKEN"===t.currentDevice.jailbreak&&"? "!==t.currentDevice.jailbreakPrefix}},[t._v("\n                "+t._s(t.currentDevice.jailbreakPrefix+t.$t(t.currentDevice.jailbreak))+"\n              ")]),t.currentDevice.plus?[e("li",{staticClass:"header__divider"}),e("li",{staticClass:"header__status header__status_pro"},[t._v("Plus")])]:t._e()],2)])]:[e("img",{staticClass:"header__img",attrs:{src:s("de56")}}),e("div",{staticClass:"header__desc"},[e("span",{staticClass:"header__error-status g-status g-status_error"},[t._v(t._s(t.$t("NO_DEVICE_LINKED")))]),e("router-link",{staticClass:"g-button",attrs:{to:"/link"}},[t._v(t._s(t.$t("LINK_YOUR_DEVICE")))])],1)]],2),e("nav",[e("ul",{staticClass:"nav",class:{nav_disabled:!t.isDeviceLinked}},t._l(t.nav,(function(s){return e("li",{key:s.title,staticClass:"nav__item"},[s.external?e("a",{staticClass:"nav__link",attrs:{href:s.link,target:s.target}},[t._v("\n              "+t._s(s.title)+"\n            ")]):e("router-link",{staticClass:"nav__link",attrs:{to:"/my"+s.link}},[t._v(t._s(s.title))])],1)})),0)])])]):t._e(),t.loaded?t._t("default",(function(){return[e("router-view")]})):t._e()],2)},a=[],r=s("555f"),n={components:{Loader:r["a"]},computed:{nav:function(){return[{title:this.$t("MY_DEVICES"),link:"/devices"},{title:"".concat(this.$t("INSTALL CUSTOM APPLICATION")," (MyAppStore)"),link:"/store"},{title:this.$t("MY_DYLIBS"),link:"/dylibs"},{title:this.$t("MY_ALTSTORE_REPOSITORIES"),link:"/repos"},{title:this.$t("CHECK FOR UPDATES"),link:"/updates"},{title:this.$t("CONFIGURE_FEATURES"),link:"/configure"},{title:this.$t("VIEW_PLUS_STATUS"),link:"/plus"},{title:this.$t("P2P_SIGNING_MARKETPLACE"),link:"/p2p-certificates"},{title:this.$t("VIEW DEVICE STATUS"),link:"/status"},{title:this.$t("VIEW_IPA_CACHE_STATUS"),link:"/ipa-cache"},{title:this.$t("UNLINK THIS DEVICE"),link:"/unlink"},{title:this.$t("TROUBLESHOOTING"),link:"https://telegra.ph/App-installation-troubleshooting-03-20",external:!0,target:"_blank"}]},loaded:function(){var t=this.$store.getters,e=t.configLoaded,s=t.devicesLoaded;return e&&s},isDeviceLinked:function(){return this.$store.getters.isDeviceLinked},currentDevice:function(){var t=this;return this.$store.getters.devices.find((function(e){return e.lt===t.$store.getters.lt}))||{}}}},l=n,c=(s("d885"),s("2877")),_=Object(c["a"])(l,i,a,!1,null,"003b1af7",null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-6af4218e.02718d87.js.map