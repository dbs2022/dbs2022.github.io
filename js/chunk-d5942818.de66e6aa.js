(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d5942818"],{3597:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main"},[e("html-with-links",{staticClass:"intro",attrs:{tag:"h1",html:t.$t("THIS_"+(t.isMobile?"DEVICE":"COMPUTER")+"_IS_LINKED_TO_APPDB",{email:(t.devices[0]||{}).email,emailChangeLink:"/my/change-email"})}}),e("p",{staticClass:"instruction"},[t._v("\n    "+t._s(t.$t("CLICK_DEVICE_TO_SWITCH"))+"\n  ")]),e("div",{staticClass:"row"},[e("div",{staticClass:"devices"},t._l(t.devices,(function(r){return e("div",{key:r.lt,staticClass:"device",class:{device_active:r.lt===t.$store.getters.lt,device_disabled:t.deviceRemoving===r.lt},on:{click:function(e){return t.switchDeviceMobile(r.lt,e)}}},[e("div",{staticClass:"device__img-wrapper"},[e("img",{staticClass:"device__img",attrs:{src:r.icon}})]),e("div",{staticClass:"device__desc"},[e("span",{staticClass:"device__title"},[t._v("\n            "+t._s(r.name)+"\n            "),r.plus?e("span",{staticClass:"device__pro"},[t._v("Plus")]):t._e(),r.lt!==t.$store.getters.lt?e("a",{ref:"removeDevice",refInFor:!0,staticClass:"device__remove",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.removeDevice(r.lt)}}},[t._v(t._s(t.deviceRemoving===r.lt?t.$t("APP_REMOVING"):t.$t("REMOVE")))]):t._e()]),e("span",{staticClass:"device__info"},[t._v(t._s(r.title)+") "),e("span",{staticClass:"device__jail",class:{device__jail_active:"JAILBROKEN"===r.jailbreak&&"? "!==r.jailbreakPrefix}},[t._v(t._s(r.jailbreakPrefix+t.$t(r.jailbreak)))])])]),r.lt!==t.$store.getters.lt?e("div",{staticClass:"device__switch"},[e("button",{staticClass:"device__button",on:{click:function(e){return e.preventDefault(),t.switchDevice(r.lt)}}},[t._v("\n            "+t._s(t.$t("SWITCH"))+"\n          ")]),e("div",{staticClass:"device__switch-text"},[t._v(t._s(t.$t("TO_THIS_DEVICE")))])]):t._e()])})),0),e("div",{staticClass:"link"},[e("h2",{staticClass:"link__title"},[t._v(t._s(t.$t("LINK_NEW_DEVICE"))),e("br"),e("a",{attrs:{href:"https://www.youtube.com/watch?v=Tp3chHFX0NE",target:"_blank"}},[t._v(t._s(t.$t("VIDEO_TUTORIAL")))])]),e("p",{staticClass:"link__text"},[t._v("\n        "+t._s(t.$t("IF_YOU_NEED_TO_LINK_NEW_DEVICE_HERES_CODE"))+"\n      ")]),e("span",{staticClass:"link__code"},[t._v(t._s(t.code))]),e("qrcode",{staticClass:"link__qr",attrs:{background:t.qrCodeBg,value:"https://a.appdb.to/add/?".concat(t.code)}}),e("h2",{staticClass:"link__title"},[t._v(t._s(t.$t("TO_LINK_APPLE_TV")))]),e("ul",{staticClass:"link__list",domProps:{innerHTML:t._s(t.$t("LINK_APPLE_TV_STEPS",{link:"https://a.appdb.to/add/?".concat(t.code)}))}})],1)])],1)},i=[],o=r("d262"),s={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8};function a(t){this.mode=s.MODE_8BIT_BYTE,this.data=t}a.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}};var u=a,l={L:1,M:0,Q:3,H:2};function c(t,e){this.totalCount=t,this.dataCount=e}c.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],c.getRSBlocks=function(t,e){var r=c.getRsBlockTable(t,e);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=r.length/3,i=new Array,o=0;o<n;o++)for(var s=r[3*o+0],a=r[3*o+1],u=r[3*o+2],l=0;l<s;l++)i.push(new c(a,u));return i},c.getRsBlockTable=function(t,e){switch(e){case l.L:return c.RS_BLOCK_TABLE[4*(t-1)+0];case l.M:return c.RS_BLOCK_TABLE[4*(t-1)+1];case l.Q:return c.RS_BLOCK_TABLE[4*(t-1)+2];case l.H:return c.RS_BLOCK_TABLE[4*(t-1)+3];default:return}};var h=c;function f(){this.buffer=new Array,this.length=0}f.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};for(var d=f,g={glog:function(t){if(t<1)throw new Error("glog("+t+")");return g.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return g.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},v=0;v<8;v++)g.EXP_TABLE[v]=1<<v;for(v=8;v<256;v++)g.EXP_TABLE[v]=g.EXP_TABLE[v-4]^g.EXP_TABLE[v-5]^g.EXP_TABLE[v-6]^g.EXP_TABLE[v-8];for(v=0;v<255;v++)g.LOG_TABLE[g.EXP_TABLE[v]]=v;var m=g;function _(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var r=0;while(r<t.length&&0==t[r])r++;this.num=new Array(t.length-r+e);for(var n=0;n<t.length-r;n++)this.num[n]=t[n+r]}_.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var n=0;n<t.getLength();n++)e[r+n]^=m.gexp(m.glog(this.get(r))+m.glog(t.get(n)));return new _(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=m.glog(this.get(0))-m.glog(t.get(0)),r=new Array(this.getLength()),n=0;n<this.getLength();n++)r[n]=this.get(n);for(n=0;n<t.getLength();n++)r[n]^=m.gexp(m.glog(t.get(n))+e);return new _(r,0).mod(t)}};var p=_,C={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},E={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(E.getBCHDigit(e)-E.getBCHDigit(E.G15)>=0)e^=E.G15<<E.getBCHDigit(e)-E.getBCHDigit(E.G15);return(t<<10|e)^E.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(E.getBCHDigit(e)-E.getBCHDigit(E.G18)>=0)e^=E.G18<<E.getBCHDigit(e)-E.getBCHDigit(E.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return E.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case C.PATTERN000:return(e+r)%2==0;case C.PATTERN001:return e%2==0;case C.PATTERN010:return r%3==0;case C.PATTERN011:return(e+r)%3==0;case C.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case C.PATTERN101:return e*r%2+e*r%3==0;case C.PATTERN110:return(e*r%2+e*r%3)%2==0;case C.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new p([1],0),r=0;r<t;r++)e=e.multiply(new p([1,m.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case s.MODE_NUMBER:return 10;case s.MODE_ALPHA_NUM:return 9;case s.MODE_8BIT_BYTE:return 8;case s.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case s.MODE_NUMBER:return 12;case s.MODE_ALPHA_NUM:return 11;case s.MODE_8BIT_BYTE:return 16;case s.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case s.MODE_NUMBER:return 14;case s.MODE_ALPHA_NUM:return 13;case s.MODE_8BIT_BYTE:return 16;case s.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,n=0;n<e;n++)for(var i=0;i<e;i++){for(var o=0,s=t.isDark(n,i),a=-1;a<=1;a++)if(!(n+a<0||e<=n+a))for(var u=-1;u<=1;u++)i+u<0||e<=i+u||0==a&&0==u||s==t.isDark(n+a,i+u)&&o++;o>5&&(r+=3+o-5)}for(n=0;n<e-1;n++)for(i=0;i<e-1;i++){var l=0;t.isDark(n,i)&&l++,t.isDark(n+1,i)&&l++,t.isDark(n,i+1)&&l++,t.isDark(n+1,i+1)&&l++,0!=l&&4!=l||(r+=3)}for(n=0;n<e;n++)for(i=0;i<e-6;i++)t.isDark(n,i)&&!t.isDark(n,i+1)&&t.isDark(n,i+2)&&t.isDark(n,i+3)&&t.isDark(n,i+4)&&!t.isDark(n,i+5)&&t.isDark(n,i+6)&&(r+=40);for(i=0;i<e;i++)for(n=0;n<e-6;n++)t.isDark(n,i)&&!t.isDark(n+1,i)&&t.isDark(n+2,i)&&t.isDark(n+3,i)&&t.isDark(n+4,i)&&!t.isDark(n+5,i)&&t.isDark(n+6,i)&&(r+=40);var c=0;for(i=0;i<e;i++)for(n=0;n<e;n++)t.isDark(n,i)&&c++;var h=Math.abs(100*c/e/e-50)/5;return r+=10*h,r}},w=E;function P(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var T=P.prototype;T.addData=function(t){var e=new u(t);this.dataList.push(e),this.dataCache=null},T.isDark=function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},T.getModuleCount=function(){return this.moduleCount},T.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=h.getRSBlocks(t,this.errorCorrectLevel),r=new d,n=0,i=0;i<e.length;i++)n+=e[i].dataCount;for(i=0;i<this.dataList.length;i++){var o=this.dataList[i];r.put(o.mode,4),r.put(o.getLength(),w.getLengthInBits(o.mode,t)),o.write(r)}if(r.getLengthInBits()<=8*n)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},T.makeImpl=function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[r][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=P.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},T.setupPositionProbePattern=function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+r][e+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},T.getBestMaskPattern=function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=w.getLostPoint(this);(0==r||t>n)&&(t=n,e=r)}return e},T.createMovieClip=function(t,e,r){var n=t.createEmptyMovieClip(e,r),i=1;this.make();for(var o=0;o<this.modules.length;o++)for(var s=o*i,a=0;a<this.modules[o].length;a++){var u=a*i,l=this.modules[o][a];l&&(n.beginFill(0,100),n.moveTo(u,s),n.lineTo(u+i,s),n.lineTo(u+i,s+i),n.lineTo(u,s+i),n.endFill())}return n},T.setupTimingPattern=function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},T.setupPositionAdjustPattern=function(){for(var t=w.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var n=t[e],i=t[r];if(null==this.modules[n][i])for(var o=-2;o<=2;o++)for(var s=-2;s<=2;s++)this.modules[n+o][i+s]=-2==o||2==o||-2==s||2==s||0==o&&0==s}},T.setupTypeNumber=function(t){for(var e=w.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(r=0;r<18;r++){n=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},T.setupTypeInfo=function(t,e){for(var r=this.errorCorrectLevel<<3|e,n=w.getBCHTypeInfo(r),i=0;i<15;i++){var o=!t&&1==(n>>i&1);i<6?this.modules[i][8]=o:i<8?this.modules[i+1][8]=o:this.modules[this.moduleCount-15+i][8]=o}for(i=0;i<15;i++){o=!t&&1==(n>>i&1);i<8?this.modules[8][this.moduleCount-i-1]=o:i<9?this.modules[8][15-i-1+1]=o:this.modules[8][15-i-1]=o}this.modules[this.moduleCount-8][8]=!t},T.mapData=function(t,e){for(var r=-1,n=this.moduleCount-1,i=7,o=0,s=this.moduleCount-1;s>0;s-=2){6==s&&s--;while(1){for(var a=0;a<2;a++)if(null==this.modules[n][s-a]){var u=!1;o<t.length&&(u=1==(t[o]>>>i&1));var l=w.getMask(e,n,s-a);l&&(u=!u),this.modules[n][s-a]=u,i--,-1==i&&(o++,i=7)}if(n+=r,n<0||this.moduleCount<=n){n-=r,r=-r;break}}}},P.PAD0=236,P.PAD1=17,P.createData=function(t,e,r){for(var n=h.getRSBlocks(t,e),i=new d,o=0;o<r.length;o++){var s=r[o];i.put(s.mode,4),i.put(s.getLength(),w.getLengthInBits(s.mode,t)),s.write(i)}var a=0;for(o=0;o<n.length;o++)a+=n[o].dataCount;if(i.getLengthInBits()>8*a)throw new Error("code length overflow. ("+i.getLengthInBits()+">"+8*a+")");i.getLengthInBits()+4<=8*a&&i.put(0,4);while(i.getLengthInBits()%8!=0)i.putBit(!1);while(1){if(i.getLengthInBits()>=8*a)break;if(i.put(P.PAD0,8),i.getLengthInBits()>=8*a)break;i.put(P.PAD1,8)}return P.createBytes(i,n)},P.createBytes=function(t,e){for(var r=0,n=0,i=0,o=new Array(e.length),s=new Array(e.length),a=0;a<e.length;a++){var u=e[a].dataCount,l=e[a].totalCount-u;n=Math.max(n,u),i=Math.max(i,l),o[a]=new Array(u);for(var c=0;c<o[a].length;c++)o[a][c]=255&t.buffer[c+r];r+=u;var h=w.getErrorCorrectPolynomial(l),f=new p(o[a],h.getLength()-1),d=f.mod(h);s[a]=new Array(h.getLength()-1);for(c=0;c<s[a].length;c++){var g=c+d.getLength()-s[a].length;s[a][c]=g>=0?d.get(g):0}}var v=0;for(c=0;c<e.length;c++)v+=e[c].totalCount;var m=new Array(v),_=0;for(c=0;c<n;c++)for(a=0;a<e.length;a++)c<o[a].length&&(m[_++]=o[a][c]);for(c=0;c<i;c++)for(a=0;a<e.length;a++)c<s[a].length&&(m[_++]=s[a][c]);return m};var b=P;function L(t){for(var e="",r=0;r<t.length;r++){var n=t.charCodeAt(r);n<128?e+=String.fromCharCode(n):n<2048?(e+=String.fromCharCode(192|n>>6),e+=String.fromCharCode(128|63&n)):n<55296||n>=57344?(e+=String.fromCharCode(224|n>>12),e+=String.fromCharCode(128|n>>6&63),e+=String.fromCharCode(128|63&n)):(r++,n=65536+((1023&n)<<10|1023&t.charCodeAt(r)),e+=String.fromCharCode(240|n>>18),e+=String.fromCharCode(128|n>>12&63),e+=String.fromCharCode(128|n>>6&63),e+=String.fromCharCode(128|63&n))}return e}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=[];return t.forEach((function(t,n){var i=null;t.forEach((function(o,s){if(!o&&null!==i)return r.push("M".concat(i+e," ").concat(n+e,"h").concat(s-i,"v1H").concat(i+e,"z")),void(i=null);if(s!==t.length-1)o&&null===i&&(i=s);else{if(!o)return;null===i?r.push("M".concat(s+e,",").concat(n+e," h1v1H").concat(s+e,"z")):r.push("M".concat(i+e,",").concat(n+e," h").concat(s+1-i,"v1H").concat(i+e,"z"))}}))})),r.join("")}var A={props:{value:{type:String,required:!0,default:""},className:{type:String,default:""},size:{type:[Number,String],default:100,validator:function(t){return!0!==isNaN(Number(t))}},level:{type:String,default:"L",validator:function(t){return["L","Q","M","H"].indexOf(t)>-1}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},renderAs:{type:String,required:!1,default:"canvas",validator:function(t){return["canvas","svg"].indexOf(t)>-1}}},data:function(){return{numCells:0,fgPath:""}},updated:function(){this.render()},mounted:function(){this.render()},methods:{render:function(){var t=this.value,e=this.size,r=this.level,n=this.background,i=this.foreground,o=this.renderAs,s=e>>>0,a=new b(-1,l[r]);a.addData(L(t)),a.make();var u=a.modules,c=s/u.length,h=s/u.length,f=window.devicePixelRatio||1;if("svg"===o)this.numCells=u.length,this.fgPath=y(u);else{var d=this.$refs["qrcode-vue"],g=d.getContext("2d");d.height=d.width=s*f,g.scale(f,f),u.forEach((function(t,e){t.forEach((function(t,r){g.fillStyle=t?i:n;var o=Math.ceil((r+1)*c)-Math.floor(r*c),s=Math.ceil((e+1)*h)-Math.floor(e*h);g.fillRect(Math.round(r*c),Math.round(e*h),o,s)}))}))}}},render:function(t){var e=this.className,r=this.value,n=this.level,i=this.background,o=this.foreground,s=this.size,a=this.renderAs,u=this.numCells,l=this.fgPath;return t("div",{class:this.class||e,attrs:{value:r,level:n,background:i,foreground:o}},["svg"===a?t("svg",{attrs:{height:s,width:s,shapeRendering:"crispEdges",viewBox:"0 0 ".concat(u," ").concat(u)},style:{width:s+"px",height:s+"px"}},[t("path",{attrs:{fill:i,d:"M0,0 h".concat(u,"v").concat(u,"H0z")}}),t("path",{attrs:{fill:o,d:l}})]):t("canvas",{attrs:{height:s,width:s},style:{width:s+"px",height:s+"px"},ref:"qrcode-vue"},[])])}},D=A,B=r("2f62"),k=r("13a2");function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function N(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){I(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function I(t,e,r){return e=S(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function S(t){var e=R(t,"string");return"symbol"===M(e)?e:String(e)}function R(t,e){if("object"!==M(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==M(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var H={components:{qrcode:D,HtmlWithLinks:k["a"]},data:function(){return{title:"My devices",code:"",isMobile:Object(o["a"])(),deviceRemoving:null}},computed:N(N({},Object(B["e"])(["theme"])),{},{qrCodeBg:function(){return this.theme&&getComputedStyle(document.documentElement).getPropertyValue("--secondary-bg")},devices:function(){return this.$store.getters.devices},deviceStr:function(){return Object(o["a"])()?"iPhone/iPad/iPod":"PC/Mac"}}),methods:{switchDevice:function(t){this.$store.commit("lt",t),this.$store.commit("setConfig",{}),this.$store.dispatch("getConfig"),this.getCode()},switchDeviceMobile:function(t,e){window.innerWidth>=1250||this.$refs.removeDevice.some((function(t){return t===e.target}))||this.switchDevice(t)},removeDevice:function(t){var e=this;this.$confirm(this.$t("DEVICE_REMOVAL_WARNING")).then((function(){e.deviceRemoving=t})).then((function(){return e.$api.unlinkDevice(t)})).then((function(){return e.$store.dispatch("getDevices")})).finally((function(){e.deviceRemoving=null}))},getCode:function(){var t=this;this.$api.getLinkCode().then((function(e){t.code=e}))}},created:function(){this.getCode()}},j=H,x=(r("767b"),r("2877")),$=Object(x["a"])(j,n,i,!1,null,"6fad939d",null);e["default"]=$.exports},"767b":function(t,e,r){"use strict";r("98b5")},"98b5":function(t,e,r){},d262:function(t,e,r){"use strict";function n(){var t=window.navigator.userAgent;if(t.indexOf("iPad")>-1)return!0;if(t.indexOf("Macintosh")>-1)try{return document.createEvent("TouchEvent"),!0}catch(e){}return!1}function i(){var t=document.createElement("canvas").getContext("webgl"),e=t.getExtension("WEBGL_debug_renderer_info"),r=e&&(t.getParameter(e.UNMASKED_RENDERER_WEBGL)||"");return!(!r.match(/Apple/)||r.match(/Apple GPU/))||-1===t.getSupportedExtensions().indexOf("WEBGL_compressed_texture_s3tc_srgb")}function o(){return!!window.navigator.userAgent.match(/Safari/)||(!!n()||!!i())}e["a"]=o}}]);
//# sourceMappingURL=chunk-d5942818.de66e6aa.js.map