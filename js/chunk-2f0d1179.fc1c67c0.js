(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f0d1179"],{3095:function(t,e,s){"use strict";s("dd64")},"3b8c":function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("section",[e("h2",{staticClass:"heading"},[t.isRepo?e("span",{staticClass:"heading__text"},[t._v(t._s(t.heading))]):e("router-link",{staticClass:"heading__link",attrs:{to:"/search/?type=".concat(t.type)}},[e("span",{staticClass:"heading__label"},[t.labelIcon?e("img",{staticClass:"heading__label-icon",class:{"heading__label-icon_alone":!t.label},attrs:{src:t.labelIcon}}):t._e(),t._v("\n        "+t._s(t.label)+"\n      ")]),e("span",{staticClass:"heading__text"},[t._v(t._s(t.heading||t.$t("APPS")))]),e("img",{staticClass:"heading__icon",attrs:{src:s("6b39")("./".concat(t.BRAND_KEY,"/images/icon-chevron.svg"))}})])],1),t._t("new",(function(){return[(t.isRepo?t.list.new.length:t.list.new.length&&t.list.top.length)?e("div",{directives:[{name:"show",rawName:"v-show",value:"new"===t.tab,expression:"tab === 'new'"}],staticClass:"apps"},[t._l(t.list.new,(function(s,i){return e("div",{key:s.id,staticClass:"app",class:{app_repo:t.isRepo}},[e("router-link",{staticClass:"app__link",attrs:{to:t.isRepo?"/repos/".concat(t.repoId,"/app/").concat(s.idxKey):"/app/".concat(t.type,"/").concat(s.id)}},[e("app-icon",{attrs:{src:s.image||s.iconURL,vertical:t.vertical}}),e("span",{staticClass:"app__title"},[t._v(t._s(s.name))]),t.isRepo?e("span",{staticClass:"app__category app__category_wrap"},[t._v("\n            "+t._s(s.developerName)+"\n          ")]):e("router-link",{staticClass:"app__category",attrs:{to:"/search/?type=".concat(t.type,"&genre=").concat(s.genre_id)}},[t._v("\n            "+t._s(t.$t(t.genres[t.type][s.genre_id].name.toUpperCase())))])],1)],1)})),t.list.new.length%8?e("div",{staticClass:"apps__spacer"}):t._e()],2):e("div",{staticClass:"apps"},t._l(24,(function(s){return e("div",{key:s,staticClass:"app app_stub"},[e("div",{staticClass:"app__link"},[e("app-icon",{attrs:{vertical:t.vertical}}),e("span",{staticClass:"app__title"},[t._v("t")]),e("div",{staticClass:"app__category"},[t._v("t")])],1)])})),0)]}))],2)},n=[],r=function(){var t=this,e=t._self._c;return t.src&&!t.failedToLoad?e("v-lazy-image",{staticClass:"icon icon_filled",class:{icon_vertical:t.vertical,icon_loading:!t.isLoaded},attrs:{src:t.src,"intersection-options":{rootMargin:"500px"}},on:{error:function(e){t.failedToLoad=!0},load:function(e){t.isLoaded=!0}}}):e("div",{staticClass:"icon",class:{icon_vertical:t.vertical}})},a=[],o=s("d7a2"),c={props:{src:String,vertical:Boolean},components:{VLazyImage:o["a"]},data:function(){return{isLoaded:!1,failedToLoad:!1}}},l=c,p=(s("a6f3"),s("2877")),u=Object(p["a"])(l,r,a,!1,null,"d1635b64",null),d=u.exports,_={props:{label:String,labelIcon:String,heading:String,list:Object,type:String,vertical:Boolean},components:{AppIcon:d},data:function(){return{tab:"new",iconsFailedToLoad:{},loadedIcons:{}}},computed:{genres:function(){return this.$store.getters.genres},repoId:function(){return this.$route.params.id},isRepo:function(){return"repo"===this.type}}},f=_,b=(s("7342"),Object(p["a"])(f,i,n,!1,null,"c712b380",null));e["a"]=b.exports},"4a2f":function(t,e,s){"use strict";s("d984")},"6b39":function(t,e,s){var i={"./AppAddict/images/icon-chevron.svg":"ae9c","./appdb/images/icon-chevron.svg":"0b1a"};function n(t){var e=r(t);return s(e)}function r(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=r,t.exports=n,n.id="6b39"},7342:function(t,e,s){"use strict";s("fb5d")},7890:function(t,e,s){t.exports=s.p+"img/icon-device-sidebar.cece4489.svg"},a6f3:function(t,e,s){"use strict";s("b9b2")},adcf:function(t,e,s){"use strict";s("d790")},b9b2:function(t,e,s){},bb51:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main"},[e("div",{staticClass:"main__content"},[e("promo"),e("apps",{staticClass:"main__apps",attrs:{label:"appdb Store",list:t.cydia,type:"cydia"}}),e("apps",{staticClass:"main__apps",attrs:{label:"Apple AppStore",list:t.ios,type:"ios"}}),e("apps",{staticClass:"main__apps",attrs:{"label-icon":s("f9f6"),label:"tv",list:t.tvos,type:"tvos"}})],1),e("sidebar",{staticClass:"main__sidebar"})],1)},n=[],r=function(){var t=this,e=t._self._c;return t.apps.length?e("swiper",{staticClass:"swiper",attrs:{options:t.swiperOptions}},[t._l(t.apps,(function(s){return e("swiper-slide",{key:s.id},[e("router-link",{staticClass:"app",attrs:{to:"/app/".concat(s.type,"/").concat(s.trackid),tag:"div"}},[e("div",{staticClass:"app__icon",style:{"background-image":"url(".concat(s.image,")")}}),e("div",{staticClass:"app__info"},[e("span",{staticClass:"app__name"},[t._v(t._s(s.name))]),e("span",{staticClass:"app__lead"},[t._v(t._s(s.lead))])])])],1)})),e("div",{staticClass:"pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()},a=[],o=s("7212"),c=(s("a7a3"),{components:{Swiper:o["Swiper"],SwiperSlide:o["SwiperSlide"]},data:function(){return{swiperOptions:{pagination:{el:".pagination",bulletActiveClass:"pagination__bullet_active",clickable:!0,renderBullet:function(t,e){return'<span class="pagination__bullet '.concat(e,'"></span>')}}}}},computed:{apps:function(){return this.$store.getters.promos.content}}}),l=c,p=(s("4a2f"),s("2877")),u=Object(p["a"])(l,r,a,!1,null,"7f7b9daa",null),d=u.exports,_=s("3b8c"),f=function(){var t=this,e=t._self._c;return e("aside",[e("div",{staticClass:"block block_yellow"},[e("div",{staticClass:"block__top"},[t._m(0),e("div",{staticClass:"block__right"},[e("h2",{staticClass:"block__heading"},[t._v(t._s(t.$t("LATEST NEWS")))]),t.news.length?e("ul",t._l(t.news,(function(s){return e("li",{key:s.id,staticClass:"block__item"},[e("router-link",{staticClass:"block__link",attrs:{to:"/news/".concat(s.id)}},[t._v(t._s(s.title))])],1)})),0):e("ul",{staticClass:"block__list"},t._l(3,(function(s){return e("li",{key:s,staticClass:"block__item block__item_stub"},[t._v("\n            n\n          ")])})),0)])]),e("div",{staticClass:"block__bottom"},[e("router-link",{staticClass:"block__more",attrs:{to:"/news"}},[t._v(t._s(t.$t("MORE_NEWS"))+"\n        "),e("img",{staticClass:"block__more-icon",attrs:{src:s("6b39")("./".concat(t.BRAND_KEY,"/images/icon-chevron.svg"))}})])],1)]),e("div",{staticClass:"devices block block_purple",class:{block_devices:t.devices.length}},[e("div",{staticClass:"block__top"},[t._m(1),e("div",{staticClass:"block__right"},[t.devices.length?[e("h2",{staticClass:"block__heading block__heading_small"},[t._v("\n            "+t._s(t.$t("DEVICES_LINKED_COUNT",{count:t.devices.length}))+"\n            "),e("img",{staticClass:"block__heading-icon",attrs:{src:s("c25b")}})]),t._l(t.devices,(function(s,i){return[e("p",{key:i,staticClass:"block__device-name"},[t._v("\n              "+t._s(t.$t("DEVICE_NAME",{name:s.name}))+"\n            ")]),e("p",{key:i+"t",staticClass:"block__device-desc"},[t._v("\n              "+t._s(s.title)+")\n            ")])]})),e("router-link",{staticClass:"block__device-page",attrs:{to:"/my/devices"}},[t._v(t._s(t.$t("VIEW_DEVICES_PAGE"))+"\n            "),e("img",{staticClass:"block__more-icon",attrs:{src:s("6b39")("./".concat(t.BRAND_KEY,"/images/icon-chevron.svg"))}})])]:[e("h2",{staticClass:"block__heading block__heading_small"},[e("i18next",{staticClass:"block__heading block__heading_small",attrs:{path:"YOUR_DEVICE"}},[e("img",{staticClass:"block__heading-icon",attrs:{src:s("a0d7")}})])],1),e("p",{staticClass:"block__text"},[t._v(t._s(t.$t("NO_DEVICE_LINKED_TO_APPDB")))]),e("router-link",{staticClass:"block__link-device",attrs:{to:"/link"}},[t._v(t._s(t.$t("LINK_YOUR_DEVICE")))])]],2)])]),t.BRAND_CONFIG.telegramDiscussion?e("telegram-discussion",{staticClass:"telegram",attrs:{discussion:t.BRAND_CONFIG.telegramDiscussion,"comments-limit":3,height:540}}):t._e()],1)},b=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"block__left"},[e("img",{attrs:{src:s("e8d0")}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"block__left"},[e("img",{attrs:{src:s("7890")}})])}],g=s("2f62"),h=function(){var t=this,e=t._self._c;return e("div",{ref:"widget"})},m=[];function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function y(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function C(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?y(Object(s),!0).forEach((function(e){w(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):y(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function w(t,e,s){return e=k(e),e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function k(t){var e=O(t,"string");return"symbol"===v(e)?e:String(e)}function O(t,e){if("object"!==v(t)||null===t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var i=s.call(t,e||"default");if("object"!==v(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var A={props:{discussion:String,commentsLimit:Number,height:Number},computed:C(C({},Object(g["f"])(["theme"])),{},{primaryColor:function(){return getComputedStyle(document.body).getPropertyValue("--primary")}}),methods:{init:function(){this.$refs.widget.innerHTML="";var t=document.createElement("script");t.src="https://telegram.org/js/telegram-widget.js?22",t.async=!0,t.dataset.telegramDiscussion=this.discussion,t.dataset.commentsLimit=this.commentsLimit,"dark"===this.theme&&(t.dataset.dark=1),this.height&&(t.dataset.height=this.height),this.primaryColor&&(t.dataset.color=this.primaryColor.slice(1)),this.$refs.widget.appendChild(t)}},watch:{discussion:"init",commentsLimit:"init",height:"init",theme:"init"},mounted:function(){this.init()}},S=A,j=Object(p["a"])(S,h,m,!1,null,null,null),E=j.exports;function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function I(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function D(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?I(Object(s),!0).forEach((function(e){$(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):I(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function $(t,e,s){return e=N(e),e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function N(t){var e=L(t,"string");return"symbol"===P(e)?e:String(e)}function L(t,e){if("object"!==P(t)||null===t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var i=s.call(t,e||"default");if("object"!==P(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var x={components:{TelegramDiscussion:E},data:function(){return{news:[],langKey:0}},computed:D({devices:function(){return this.$store.getters.devices}},Object(g["f"])(["theme"])),watch:{"$store.getters.lang":function(){this.langKey+=1}},methods:{getNews:function(){var t=this;return this.$api.getNews().then((function(e){t.news=e}))}},serverPrefetch:function(){return this.getNews()},created:function(){this.getNews()}},R=x,T=(s("adcf"),Object(p["a"])(R,f,b,!1,null,"01298ec2",null)),B=T.exports,K={components:{Promo:d,Apps:_["a"],Sidebar:B},data:function(){return{ios:{new:[],top:[]},cydia:{new:[],top:[]},tvos:{new:[],top:[]}}},computed:{title:function(){return this.$t("SITE_TITLE")}},serverPrefetch:function(){return Promise.allSettled(this.getApps())},created:function(){this.getApps()},methods:{getApps:function(){var t=this,e=[];return["ios","cydia","tvos"].forEach((function(s){["new","top"].forEach((function(i){e.push(t.$api.search({type:s,order:"new"===i?"added":"clicks_day"}).then((function(e){t[s][i]=e.slice(0,24)})))}))})),e}}},V=K,U=(s("3095"),Object(p["a"])(V,i,n,!1,null,"631b0a00",null));e["default"]=U.exports},c25b:function(t,e,s){t.exports=s.p+"img/icon-check.ce62c51a.svg"},d790:function(t,e,s){},d7a2:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));var i={props:{src:{type:String,required:!0},srcPlaceholder:{type:String,default:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},srcset:{type:String},intersectionOptions:{type:Object,default:function(){return{}}},usePicture:{type:Boolean,default:!1}},inheritAttrs:!1,data:function(){return{observer:null,intersected:!1,loaded:!1}},computed:{srcImage:function(){return this.intersected&&this.src?this.src:this.srcPlaceholder},srcsetImage:function(){return!(!this.intersected||!this.srcset)&&this.srcset}},methods:{load:function(){this.$el&&this.$el.getAttribute("src")!==this.srcPlaceholder&&(this.loaded=!0,this.$emit("load",this.$el))},error:function(){this.$emit("error",this.$el)}},render:function(t){var e=t("img",{attrs:{src:this.srcImage,srcset:this.srcsetImage},domProps:this.$attrs,class:{"v-lazy-image":!0,"v-lazy-image-loaded":this.loaded},on:{load:this.load,error:this.error}});return this.usePicture?t("picture",{on:{load:this.load}},this.intersected?[this.$slots.default,e]:[e]):e},mounted:function(){var t=this;"IntersectionObserver"in window&&(this.observer=new IntersectionObserver((function(e){var s=e[0];s.isIntersecting&&(t.intersected=!0,t.observer.disconnect(),t.$emit("intersect"))}),this.intersectionOptions),this.observer.observe(this.$el))},destroyed:function(){"IntersectionObserver"in window&&this.observer.disconnect()}}},d984:function(t,e,s){},dd64:function(t,e,s){},e8d0:function(t,e,s){t.exports=s.p+"img/icon-news-sidebar.70f41b0b.svg"},f9f6:function(t,e,s){t.exports=s.p+"img/icon-apple-white.3e284782.svg"},fb5d:function(t,e,s){}}]);
//# sourceMappingURL=chunk-2f0d1179.fc1c67c0.js.map