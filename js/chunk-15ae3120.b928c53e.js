(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15ae3120"],{"32f4":function(t,e,n){"use strict";var s=function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"link",attrs:{to:t.to}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"11",height:"20"}},[e("path",{attrs:{fill:"currentColor",d:"M.38 19.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996\n      0 0 0 0-1.41L2.15.98a1.25 1.25 0 0 0-1.77 0 1.25 1.25 0 0 0\n      0 1.77L7.62 10 .37 17.25c-.48.48-.48 1.28.01 1.76Z"}})]),t._t("default")],2)},a=[],i={props:["to"]},r=i,o=(n("8b0f"),n("2877")),c=Object(o["a"])(r,s,a,!1,null,"0bf903f3",null);e["a"]=c.exports},"35bf":function(t,e,n){t.exports=n.p+"img/icon-top.d282a7e2.svg"},"3b8c":function(t,e,n){"use strict";var s=function(){var t=this,e=t._self._c;return e("section",[e("h2",{staticClass:"heading"},[t.isRepo?e("span",{staticClass:"heading__text"},[t._v(t._s(t.heading))]):e("router-link",{staticClass:"heading__link",attrs:{to:"/search/?type=".concat(t.type)}},[e("span",{staticClass:"heading__label"},[t.labelIcon?e("img",{staticClass:"heading__label-icon",class:{"heading__label-icon_alone":!t.label},attrs:{src:t.labelIcon}}):t._e(),t._v("\n        "+t._s(t.label)+"\n      ")]),e("span",{staticClass:"heading__text"},[t._v(t._s(t.heading||t.$t("APPS")))]),e("img",{staticClass:"heading__icon",attrs:{src:n("6b39")("./".concat(t.BRAND_KEY,"/images/icon-chevron.svg"))}})]),t.isRepo?t._e():e("ul",{staticClass:"heading__nav nav"},[e("li",{staticClass:"nav__item",class:{nav__item_active:"new"===t.tab},on:{click:function(e){t.tab="new"}}},[e("img",{staticClass:"nav__icon",attrs:{src:n("e988")}}),t._v("\n        "+t._s(t.$t("NEW_MULTIPLE"))+"\n      ")]),e("li",{staticClass:"nav__item",class:{nav__item_active:"top"===t.tab},on:{click:function(e){t.tab="top"}}},[e("img",{staticClass:"nav__icon",attrs:{src:n("35bf")}}),e("i18next",{attrs:{path:"TOP24"}},[e("span",{staticClass:"nav__notebook-hide"},[t._v("24")])])],1)])],1),t._t("new",(function(){return[(t.isRepo?t.list.new.length:t.list.new.length&&t.list.top.length)?e("div",{directives:[{name:"show",rawName:"v-show",value:"new"===t.tab,expression:"tab === 'new'"}],staticClass:"apps"},[t._l(t.list.new,(function(n,s){return e("div",{key:n.id,staticClass:"app",class:{app_repo:t.isRepo}},[e("router-link",{staticClass:"app__link",attrs:{to:t.isRepo?"/repos/".concat(t.repoId,"/app/").concat(n.idxKey):"/app/".concat(t.type,"/").concat(n.id)}},[e("app-icon",{attrs:{src:n.image||n.iconURL,vertical:t.vertical}}),e("span",{staticClass:"app__title"},[t._v(t._s(n.name))]),t.isRepo?e("span",{staticClass:"app__category app__category_wrap"},[t._v("\n            "+t._s(n.developerName)+"\n          ")]):e("router-link",{staticClass:"app__category",attrs:{to:"/search/?type=".concat(t.type,"&genre=").concat(n.genre_id)}},[t._v("\n            "+t._s(t.$t(t.genres[t.type][n.genre_id].name.toUpperCase())))])],1)],1)})),t.list.new.length%8?e("div",{staticClass:"apps__spacer"}):t._e()],2):e("div",{staticClass:"apps"},t._l(24,(function(n){return e("div",{key:n,staticClass:"app app_stub"},[e("div",{staticClass:"app__link"},[e("app-icon",{attrs:{vertical:t.vertical}}),e("span",{staticClass:"app__title"},[t._v("t")]),e("div",{staticClass:"app__category"},[t._v("t")])],1)])})),0)]})),t._t("top",(function(){return[e("div",{directives:[{name:"show",rawName:"v-show",value:"top"===t.tab,expression:"tab === 'top'"}],staticClass:"apps"},[t._l(t.list.top,(function(n){return e("div",{key:n.id,staticClass:"app"},[e("router-link",{staticClass:"app__link",attrs:{to:"/app/".concat(t.type,"/").concat(n.id)}},[e("app-icon",{attrs:{src:n.image||n.iconURL,vertical:t.vertical}}),e("span",{staticClass:"app__title"},[t._v(t._s(n.name))]),e("router-link",{staticClass:"app__category",attrs:{to:"/search/?genre=".concat(n.genre_id)}},[t._v("\n            "+t._s(t.$t(t.genres[t.type][n.genre_id].name.toUpperCase())))])],1)],1)})),t.list.top.length%8?e("div",{staticClass:"apps__spacer"}):t._e()],2)]}))],2)},a=[],i=function(){var t=this,e=t._self._c;return t.src&&!t.failedToLoad?e("v-lazy-image",{staticClass:"icon icon_filled",class:{icon_vertical:t.vertical,icon_loading:!t.isLoaded},attrs:{src:t.src,"intersection-options":{rootMargin:"500px"}},on:{error:function(e){t.failedToLoad=!0},load:function(e){t.isLoaded=!0}}}):e("div",{staticClass:"icon",class:{icon_vertical:t.vertical}})},r=[],o=n("d7a2"),c={props:{src:String,vertical:Boolean},components:{VLazyImage:o["a"]},data:function(){return{isLoaded:!1,failedToLoad:!1}}},l=c,p=(n("a6f3"),n("2877")),_=Object(p["a"])(l,i,r,!1,null,"d1635b64",null),u=_.exports,d={props:{label:String,labelIcon:String,heading:String,list:Object,type:String,vertical:Boolean},components:{AppIcon:u},data:function(){return{tab:"new",iconsFailedToLoad:{},loadedIcons:{}}},computed:{genres:function(){return this.$store.getters.genres},repoId:function(){return this.$route.params.id},isRepo:function(){return"repo"===this.type}}},f=d,v=(n("f93d"),Object(p["a"])(f,s,a,!1,null,"69c58186",null));e["a"]=v.exports},"6b39":function(t,e,n){var s={"./AppAddict/images/icon-chevron.svg":"ae9c","./appdb/images/icon-chevron.svg":"0b1a"};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=i,t.exports=a,a.id="6b39"},"787a":function(t,e,n){},"7fe0e":function(t,e,n){"use strict";n("d6d7")},"8b0f":function(t,e,n){"use strict";n("787a")},"938a":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main"},[e("div",{staticClass:"main__content"},[t.loaded?[t.belongsToUser?e("back-link",{staticClass:"back-link",attrs:{to:"/my/repos"}},[t._v("\n        "+t._s(t.$t("MY_REPOSITORIES"))+"\n      ")]):e("back-link",{staticClass:"back-link",attrs:{to:"/repos"}},[t._v("\n        "+t._s(t.$t("PUBLIC_REPOS"))+"\n      ")])]:t._e(),e("h1",{staticClass:"heading"},[t._v(t._s(t.name))]),t.loaded&&t.apps.length?e("div",{staticClass:"filters"},[e("h2",{staticClass:"filters__heading"},[e("img",{staticClass:"filters__heading-icon",attrs:{src:n("47d0")("./".concat(t.BRAND_KEY,"/images/icon-filter.svg"))}}),t._v("\n        "+t._s(t.$t("FILTER_BY"))+"\n      ")]),e("input",{staticClass:"filters__input",attrs:{placeholder:t.$t("NAME")},on:{input:t.onFilterInput}})]):t._e(),t.loaded?t.apps.length?[t.isMobile?t._l(t.filteredApps,(function(n,s){return e("app",{key:s,attrs:{app:n,link:"/repos/".concat(t.id,"/app/").concat(n.idxKey),"is-in-repo":""}})})):t.filteredApps.length?e("apps",{staticClass:"main__apps",attrs:{list:{new:t.filteredApps,top:[]},type:"repo"}}):t._e()]:e("p",[t._v(t._s(t.$t("NO_APPS_IN_REPO")))]):e("loader")],2),e("aside",{staticClass:"main__sidebar"},[e("div",{staticClass:"block block_yellow"},[e("div",{staticClass:"block__top"},[t._m(0),e("div",{staticClass:"block__right"},[e("h2",{staticClass:"block__heading"},[t._v(t._s(t.$t("REPOSITORY_NEWS")))]),t.loaded?t.news.length?e("ul",{staticClass:"news"},t._l(t.news,(function(n){return e("li",{key:n.id,staticClass:"block__item"},[e("span",{staticClass:"news__title"},[t._v(t._s(n.title))]),e("span",{staticClass:"news__caption"},[t._v(t._s(n.caption))]),e("span",{staticClass:"news__date"},[t._v(t._s(new Date(n.date).toLocaleDateString()))])])})),0):e("p",[t._v("\n            "+t._s(t.$t("NO_NEWS_IN_REPO"))+"\n          ")]):e("ul",{staticClass:"block__list"},t._l(3,(function(n){return e("li",{key:n,staticClass:"block__item block__item_stub"},[t._v("\n              n\n            ")])})),0)])])])])])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"block__left"},[e("img",{attrs:{src:n("e8d0")}})])}],i=n("3b8c"),r=n("612c"),o=n("32f4"),c=n("555f"),l=n("2ef0"),p=n("bc3a"),_=n.n(p);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e=b(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t){var e=g(t,"string");return"symbol"===u(e)?e:String(e)}function g(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var s=n.call(t,e||"default");if("object"!==u(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var h={components:{Apps:i["a"],App:r["a"],BackLink:o["a"],Loader:c["a"]},computed:{title:function(){return this.$t("SITE_TITLE")},id:function(){return this.$route.params.id},filteredApps:function(){var t=this.filter.toLowerCase().trim();return this.apps.filter((function(e){return e.name.toLowerCase().includes(t)}))}},data:function(){return{isMobile:window.innerWidth<=767,name:"",apps:[],news:[],belongsToUser:!0,loaded:!1,filter:""}},methods:{getRepo:function(){var t=this;this.$api.getRepo(this.id).then((function(e){if(!e.success)throw e;t.belongsToUser=1===e.data[0].is_yours;var n=t;_.a.get(e.data[0].contents_uri).then((function(t){var e=t.data;n.name=e.name,n.apps=e.apps.map((function(t,e){return f({key:t.bundleIdentifier+t.size+t.version,idxKey:e},t)})),console.log(n.apps),n.news=[],e.news&&(n.news=e.news.sort((function(t,e){return new Date(e.date)-new Date(t.date)}))),n.loaded=!0}))})).catch((function(e){t.$router.replace({name:"error",params:{message:e.errors[0].translated,link:"/my/repos",linkText:"MY_REPOSITORIES"}})})).finally((function(){}))},onFilterInput:function(){},setOnFilterInputFn:function(){var t=this,e=this.apps.length>100?500:0;this.onFilterInput=Object(l["debounce"])((function(e){t.filter=e.target.value}),e)}},watch:{apps:{handler:function(){this.setOnFilterInputFn()},immediate:!0}},created:function(){this.getRepo()}},m=h,C=(n("7fe0e"),n("2877")),w=Object(C["a"])(m,s,a,!1,null,"5b768c8c",null);e["default"]=w.exports},a6f3:function(t,e,n){"use strict";n("b9b2")},b9b2:function(t,e,n){},d6d7:function(t,e,n){},df87:function(t,e,n){},e8d0:function(t,e,n){t.exports=n.p+"img/icon-news-sidebar.70f41b0b.svg"},e988:function(t,e,n){t.exports=n.p+"img/icon-new.2e5b60a6.svg"},f93d:function(t,e,n){"use strict";n("df87")}}]);
//# sourceMappingURL=chunk-15ae3120.b928c53e.js.map