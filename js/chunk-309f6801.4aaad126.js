(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-309f6801"],{"305f":function(t,s,i){"use strict";i("52b9")},"4fde":function(t,s,i){"use strict";i("8fa4")},"52b9":function(t,s,i){},"555f":function(t,s,i){"use strict";var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"wrapper",class:{wrapper_absolute:t.absolute}},[s("div",{staticClass:"loader",style:{width:t.size,height:t.size,"border-width":t.border}})])},a=[],n={props:{size:{default:"70px"},border:{default:"6px"},absolute:{type:Boolean,default:!1}}},r=n,o=(i("4fde"),i("2877")),c=Object(o["a"])(r,e,a,!1,null,"37663d0c",null);s["a"]=c.exports},"6b39":function(t,s,i){var e={"./appaddict/images/icon-chevron.svg":"34d2","./appdb/images/icon-chevron.svg":"0b1a"};function a(t){var s=n(t);return i(s)}function n(t){if(!i.o(e,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e[t]}a.keys=function(){return Object.keys(e)},a.resolve=n,t.exports=a,a.id="6b39"},"8fa4":function(t,s,i){},a2f9:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t._self._c;return s("section",{staticClass:"main"},[s("loader",{directives:[{name:"show",rawName:"v-show",value:!t.isListLoaded||!t.isNewsLoaded,expression:"!isListLoaded || !isNewsLoaded"}]}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isNewsLoaded,expression:"isNewsLoaded"}],staticClass:"news"},[s("div",{staticClass:"news__item"},[s("h1",{staticClass:"news__heading"},[t._v(t._s(t.current.title))]),s("span",{staticClass:"news__date"},[t._v(t._s(t.formatDate(1e3*t.current.added))+" ")]),s("html-with-links",{staticClass:"news__text",attrs:{tag:"p",html:t.current.text}})],1),s("div",{staticClass:"pagination"},[s("router-link",{staticClass:"pagination__link",class:{pagination__link_disabled:1==t.id},attrs:{to:"/news/".concat(t.id-1)}},[s("img",{staticClass:"pagination__icon pagination__icon_rotate",attrs:{src:i("6b39")("./".concat(t.BRAND_KEY,"/images/icon-chevron.svg"))}}),t._v(t._s(t.$t("PREVIOUS_NEWS")))]),s("router-link",{staticClass:"pagination__link",class:{pagination__link_disabled:!t.news.length||t.id==t.news[0].id},attrs:{to:"/news/".concat(+t.id+1)}},[t._v(t._s(t.$t("NEXT_NEWS"))),s("img",{staticClass:"pagination__icon",attrs:{src:i("6b39")("./".concat(t.BRAND_KEY,"/images/icon-chevron.svg"))}})])],1)]),s("aside",{directives:[{name:"show",rawName:"v-show",value:t.isListLoaded,expression:"isListLoaded"}],staticClass:"sidebar"},[s("div",{staticClass:"list"},[s("h2",{staticClass:"list__heading"},[s("img",{staticClass:"list__icon",attrs:{src:i("e8d0")}}),t._v(t._s(t.$t("NEWS_HISTORY"))+"\n      ")]),s("ul",{staticClass:"list__links"},t._l(t.news,(function(i){return s("li",{key:i.id},[s("router-link",{staticClass:"list__link",class:{list__link_active:i.id==t.id},attrs:{to:"/news/".concat(i.id)}},[t._v(t._s(i.title))])],1)})),0)])])],1)},a=[],n=i("555f"),r=i("13a2"),o={components:{Loader:n["a"],HtmlWithLinks:r["a"]},data:function(){return{isListLoaded:!1,isNewsLoaded:!1,news:[],current:{}}},computed:{id:function(){return this.$route.params&&this.$route.params.id||this.news[0]&&this.news[0].id},title:function(){return this.current.title}},methods:{getCurrent:function(){var t=this;return+this.id?(this.isNewsLoaded=!1,this.$api.getNews({id:this.id}).then((function(s){t.current=s,t.isNewsLoaded=!0}))):(this.$router.go(-1),null)},formatDate:function(t){return new Date(t).toLocaleString()},getData:function(){var t=this;return this.$api.getNews({limit:999}).then((function(s){return t.news=s,t.isListLoaded=!0,t.getCurrent()}))}},watch:{id:function(){this.getCurrent()}},serverPrefetch:function(){return this.getData()},created:function(){this.getData()}},c=o,d=(i("305f"),i("2877")),l=Object(d["a"])(c,e,a,!1,null,"f86facf2",null);s["default"]=l.exports},e8d0:function(t,s,i){t.exports=i.p+"img/icon-news-sidebar.70f41b0b.svg"}}]);
//# sourceMappingURL=chunk-309f6801.4aaad126.js.map