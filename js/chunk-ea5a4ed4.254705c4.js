(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea5a4ed4"],{"2de8":function(t,a,s){"use strict";var e=function(){var t=this,a=t._self._c;return a("section",[a("h2",{staticClass:"heading"},[t.isRepo?a("span",{staticClass:"heading__text"},[t._v(t._s(t.heading))]):a("router-link",{staticClass:"heading__link",attrs:{to:"/search/?type=".concat(t.type)}},[a("span",{staticClass:"heading__label"},[t.labelIcon?a("img",{staticClass:"heading__label-icon",class:{"heading__label-icon_alone":!t.label},attrs:{src:t.labelIcon}}):t._e(),t._v("\n        "+t._s(t.label)+"\n      ")]),a("span",{staticClass:"heading__text"},[t._v(t._s(t.heading||t.$t("APPS")))]),a("img",{staticClass:"heading__icon",attrs:{src:s("6b39")("./".concat(t.BRAND_KEY,"/images/icon-chevron.svg"))}})]),t.isRepo?t._e():a("ul",{staticClass:"heading__nav nav"},[a("li",{staticClass:"nav__item",class:{nav__item_active:"new"===t.tab},on:{click:function(a){t.tab="new"}}},[a("img",{staticClass:"nav__icon",attrs:{src:s("e988")}}),t._v("\n        "+t._s(t.$t("NEW_MULTIPLE"))+"\n      ")]),a("li",{staticClass:"nav__item",class:{nav__item_active:"top"===t.tab},on:{click:function(a){t.tab="top"}}},[a("img",{staticClass:"nav__icon",attrs:{src:s("35bf")}}),a("i18next",{attrs:{path:"TOP24"}},[a("span",{staticClass:"nav__notebook-hide"},[t._v("24")])])],1)])],1),t._t("new",(function(){return[(t.isRepo?t.list.new.length:t.list.new.length&&t.list.top.length)?a("div",{directives:[{name:"show",rawName:"v-show",value:"new"===t.tab,expression:"tab === 'new'"}],staticClass:"apps"},[t._l(t.list.new,(function(s,e){return a("div",{key:s.id,staticClass:"app",class:{app_repo:t.isRepo}},[a("router-link",{staticClass:"app__link",attrs:{to:t.isRepo?"/repos/".concat(t.repoId,"/app/").concat(e):"/app/".concat(t.type,"/").concat(s.id)}},[a("div",{staticClass:"app__icon",class:{app__icon_filled:s.image||s.iconURL,app__icon_vertical:t.vertical},style:"background-image: url(".concat(s.image||s.iconURL,")")}),a("span",{staticClass:"app__title"},[t._v(t._s(s.name))]),t.isRepo?a("span",{staticClass:"app__category app__category_wrap"},[t._v("\n            "+t._s(s.developerName)+"\n          ")]):a("router-link",{staticClass:"app__category",attrs:{to:"/search/?type=".concat(t.type,"&genre=").concat(s.genre_id)}},[t._v("\n            "+t._s(t.$t(t.genres[t.type][s.genre_id].name.toUpperCase())))])],1)],1)})),t.list.new.length%8?a("div",{staticClass:"apps__spacer"}):t._e()],2):a("div",{staticClass:"apps"},t._l(24,(function(s){return a("div",{key:s,staticClass:"app app_stub"},[a("div",{staticClass:"app__link"},[a("div",{staticClass:"app__icon",class:{app__icon_vertical:t.vertical}}),a("span",{staticClass:"app__title"},[t._v("t")]),a("div",{staticClass:"app__category"},[t._v("t")])])])})),0)]})),t._t("top",(function(){return[a("div",{directives:[{name:"show",rawName:"v-show",value:"top"===t.tab,expression:"tab === 'top'"}],staticClass:"apps"},[t._l(t.list.top,(function(s){return a("div",{key:s.id,staticClass:"app"},[a("router-link",{staticClass:"app__link",attrs:{to:"/app/".concat(t.type,"/").concat(s.id)}},[a("div",{staticClass:"app__icon",class:{app__icon_filled:s.image,app__icon_vertical:t.vertical},style:"background-image: url(".concat(s.image,")")}),a("span",{staticClass:"app__title"},[t._v(t._s(s.name))]),a("router-link",{staticClass:"app__category",attrs:{to:"/search/?genre=".concat(s.genre_id)}},[t._v("\n            "+t._s(t.$t(t.genres[t.type][s.genre_id].name.toUpperCase())))])],1)],1)})),t.list.top.length%8?a("div",{staticClass:"apps__spacer"}):t._e()],2)]}))],2)},n=[],i={props:{label:String,labelIcon:String,heading:String,list:Object,type:String,vertical:Boolean},data:function(){return{tab:"new"}},computed:{genres:function(){return this.$store.getters.genres},repoId:function(){return this.$route.params.id},isRepo:function(){return"repo"===this.type}}},c=i,o=(s("a7bd"),s("2877")),l=Object(o["a"])(c,e,n,!1,null,"d04ab04c",null);a["a"]=l.exports},"32f4":function(t,a,s){"use strict";var e=function(){var t=this,a=t._self._c;return a("router-link",{staticClass:"link",attrs:{to:t.to}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"11",height:"20"}},[a("path",{attrs:{fill:"currentColor",d:"M.38 19.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996\n      0 0 0 0-1.41L2.15.98a1.25 1.25 0 0 0-1.77 0 1.25 1.25 0 0 0\n      0 1.77L7.62 10 .37 17.25c-.48.48-.48 1.28.01 1.76Z"}})]),t._t("default")],2)},n=[],i={props:["to"]},c=i,o=(s("8b0f"),s("2877")),l=Object(o["a"])(c,e,n,!1,null,"0bf903f3",null);a["a"]=l.exports},"35bf":function(t,a,s){t.exports=s.p+"img/icon-top.d282a7e2.svg"},"6b39":function(t,a,s){var e={"./appaddict/images/icon-chevron.svg":"34d2","./appdb/images/icon-chevron.svg":"0b1a"};function n(t){var a=i(t);return s(a)}function i(t){if(!s.o(e,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e[t]}n.keys=function(){return Object.keys(e)},n.resolve=i,t.exports=n,n.id="6b39"},"787a":function(t,a,s){},"879e":function(t,a,s){"use strict";s("a22c")},"8b0f":function(t,a,s){"use strict";s("787a")},"938a":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t._self._c;return a("section",{staticClass:"main"},[a("div",{staticClass:"main__content"},[t.loaded?[t.belongsToUser?a("back-link",{staticClass:"back-link",attrs:{to:"/my/repos"}},[t._v("\n        "+t._s(t.$t("MY_ALTSTORE_REPOSITORIES"))+"\n      ")]):a("back-link",{staticClass:"back-link",attrs:{to:"/repos"}},[t._v("\n        "+t._s(t.$t("PUBLIC_ALTSTORE_REPOS"))+"\n      ")])]:t._e(),a("apps",{staticClass:"main__apps",attrs:{heading:t.name,list:t.apps,type:"repo"},scopedSlots:t._u([t.loaded&&!t.apps.new.length?{key:"new",fn:function(){return[a("p",[t._v(t._s(t.$t("NO_APPS_IN_REPO")))])]},proxy:!0}:null],null,!0)})],2),a("aside",{staticClass:"main__sidebar"},[a("div",{staticClass:"block block_yellow"},[a("div",{staticClass:"block__top"},[t._m(0),a("div",{staticClass:"block__right"},[a("h2",{staticClass:"block__heading"},[t._v(t._s(t.$t("REPOSITORY_NEWS")))]),t.loaded?t.news.length?a("ul",{staticClass:"news"},t._l(t.news,(function(s){return a("li",{key:s.id,staticClass:"block__item"},[a("span",{staticClass:"news__title"},[t._v(t._s(s.title))]),a("span",{staticClass:"news__caption"},[t._v(t._s(s.caption))]),a("span",{staticClass:"news__date"},[t._v(t._s(new Date(s.date).toLocaleDateString()))])])})),0):a("p",[t._v("\n            "+t._s(t.$t("NO_NEWS_IN_REPO"))+"\n          ")]):a("ul",{staticClass:"block__list"},t._l(3,(function(s){return a("li",{key:s,staticClass:"block__item block__item_stub"},[t._v("\n              n\n            ")])})),0)])])])])])},n=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"block__left"},[a("img",{attrs:{src:s("e8d0")}})])}],i=s("2de8"),c=s("32f4"),o={components:{Apps:i["a"],BackLink:c["a"]},computed:{title:function(){return this.$t("SITE_TITLE")},id:function(){return this.$route.params.id}},data:function(){return{name:"",apps:{new:[],top:[]},news:[],belongsToUser:!0,loaded:!1}},methods:{getRepo:function(){var t=this;this.$api.getAltstoreRepo(this.id).then((function(a){if(!a.success)throw a;var s=a.data[0].contents;t.belongsToUser=1===a.data[0].is_yours,t.name=s.name,t.apps.new=s.apps,t.news=[],s.news&&(t.news=s.news.sort((function(t,a){return new Date(a.date)-new Date(t.date)})))})).catch((function(a){t.$router.replace({name:"error",params:{message:a.errors[0].translated,link:"/my/repos",linkText:"MY_ALTSTORE_REPOSITORIES"}})})).finally((function(){t.loaded=!0}))}},created:function(){this.getRepo()}},l=o,r=(s("879e"),s("2877")),_=Object(r["a"])(l,e,n,!1,null,"05a7852f",null);a["default"]=_.exports},a22c:function(t,a,s){},a7bd:function(t,a,s){"use strict";s("cf9c")},cf9c:function(t,a,s){},e8d0:function(t,a,s){t.exports=s.p+"img/icon-news-sidebar.70f41b0b.svg"},e988:function(t,a,s){t.exports=s.p+"img/icon-new.2e5b60a6.svg"}}]);
//# sourceMappingURL=chunk-ea5a4ed4.254705c4.js.map