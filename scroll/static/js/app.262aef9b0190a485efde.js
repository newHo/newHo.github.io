webpackJsonp([0],{"675q":function(t,n){},NHnr:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=o("7+uW"),i={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var s=o("VU/8")({name:"App"},i,!1,function(t){o("af7L")},null,null).exports,c=o("/ocq"),a=[{name:"热销",totalCount:0,foods:[{name:"脆皮炸鸡",description:"好好吃",count:0},{name:"鸡柳炸鸡",description:"好好吃",count:0},{name:"脆皮",description:"好吃",count:0}]},{name:"优惠",totalCount:0,foods:[{name:"脆皮炸鸡11",description:"好好吃",count:0},{name:"鸡柳炸鸡11",description:"好好吃",count:0},{name:"脆皮11",description:"好吃",count:0}]},{name:"小吃",totalCount:0,foods:[{name:"脆皮炸鸡22",description:"好好吃",count:0},{name:"鸡柳炸鸡22",description:"好好吃",count:0},{name:"脆皮22",description:"好吃",count:0},{name:"脆皮33",description:"好吃",count:0}]},{name:"汉堡",totalCount:0,foods:[{name:"脆皮炸鸡32",description:"好好吃",count:0},{name:"鸡柳炸鸡32",description:"好好吃",count:0},{name:"脆皮32",description:"好吃",count:0},{name:"鸡柳炸鸡33",description:"好好吃",count:0},{name:"脆皮34",description:"好吃",count:0}]},{name:"折扣",totalCount:0,foods:[{name:"脆皮炸鸡22",description:"好好吃",count:0},{name:"鸡柳炸鸡22",description:"好好吃",count:0},{name:"脆皮22",description:"好吃",count:0},{name:"脆皮33",description:"好吃",count:0}]},{name:"饮料",totalCount:0,foods:[{name:"脆皮炸鸡22",description:"好好吃",count:0},{name:"鸡柳炸鸡22",description:"好好吃",count:0},{name:"脆皮22",description:"好吃",count:0},{name:"脆皮33",description:"好吃",count:0}]},{name:"主食",totalCount:0,foods:[{name:"脆皮炸鸡22",description:"好好吃",count:0},{name:"鸡柳炸鸡22",description:"好好吃",count:0},{name:"脆皮22",description:"好吃",count:0},{name:"脆皮33",description:"好吃",count:0}]},{name:"肯德基",totalCount:0,foods:[{name:"脆皮炸鸡22",description:"好好吃",count:0},{name:"鸡柳炸鸡22",description:"好好吃",count:0},{name:"脆皮22",description:"好吃",count:0},{name:"脆皮33",description:"好吃",count:0},{name:"脆皮炸鸡22",description:"好好吃",count:0},{name:"鸡柳炸鸡22",description:"好好吃",count:0},{name:"脆皮22",description:"好吃",count:0},{name:"脆皮33",description:"好吃",count:0}]}],r={name:"Home",data:function(){return{leftList:a,activedIndex:0,listHeight:[],fingerTimer:null,btnTimer:null,startPos:{}}},methods:{changeIndex:function(t){var n=t,o=this.activedIndex;this.activedIndex=t;var e=this.$refs.lists[t],i=this.$refs.rightLists;n>o?this.tapBtnScroll(i,e,15):this.tapBtnScroll(i,e,-15)},tapBtnScroll:function(t,n,o){var e=this;clearInterval(this.btnTimer),this.btnTimer=setInterval(function(){t.scrollTop+=o,o>0?(t.scrollTop+t.offsetTop>=n.offsetTop||t.scrollTop+t.clientHeight>=n.offsetTop)&&(clearInterval(e.btnTimer),t.scrollTop=n.offsetTop):t.scrollTop+t.offsetTop<=n.offsetTop&&(clearInterval(e.btnTimer),t.scrollTop=n.offsetTop)},1)},fingerScroll:function(t){this.listHeightAll;var n=t.srcElement.scrollTop,o=this;clearTimeout(this.fingerTimer),this.fingerTimer=setTimeout(function(){if(t.srcElement.scrollTop==n)for(var e=o.listHeight.length,i=0;i<e-1;i++){var s=o.listHeight[i],c=o.listHeight[i+1];(!c||n+2>=s&&n<c)&&(o.activedIndex=i,clearTimeout(this.fingerTimer))}},10)},increase:function(t,n){this.leftList[t].foods[n].count+=1,this.leftList[t].foods[n].off=!0,this.common(t)},subtract:function(t,n){this.leftList[t].foods[n].count-=1,0==this.leftList[t].foods[n].count&&(this.leftList[t].foods[n].off=!1),this.common(t)},common:function(t){var n=0,o=this.leftList[t];o.foods.forEach(function(t){n+=t.count}),o.totalCount=n,o.totalCount>0?o.totalCountOff=!0:o.totalCountOff=!1},end:function(t){console.log("手指离开屏幕、、、");if(0!=t.targetTouches[0].pageY-this.startPos.y){var n=this.$refs.rightLists.scrollTop;console.log(n),this.listHeightAll;for(var o=this.listHeight.length,e=0;e<o-1;e++){var i=this.listHeight[e],s=this.listHeight[e+1];console.log(i,s),(!s||n>=i&&n<s)&&(console.log(n+"============"),this.activedIndex=e)}}}},computed:{listHeightAll:function(){var t=this.$refs.lists,n=0;this.listHeight.push(n);for(var o=0;o<t.length;o++){n+=t[o].offsetHeight,this.listHeight.push(n)}}},mounted:function(){console.log("页面渲染完成");var t=this,n=n||window.event;this.$refs.rightLists.addEventListener("touchstart",function(n){console.log("移动端滑动开始、、、");var o=n.targetTouches[0];t.startPos={y:o.pageY}}),this.$refs.rightLists.addEventListener("touchmove",this.end)}},l={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"Home"},[o("div",{staticClass:"content"},[o("ul",{staticClass:"leftList"},t._l(t.leftList,function(n,e){return o("li",{class:{active:e==t.activedIndex},on:{click:function(n){t.changeIndex(e)}}},[o("p",[t._v(t._s(n.name))]),t._v(" "),n.totalCountOff?o("span",{staticClass:"totalNumIcon"},[t._v(t._s(n.totalCount))]):t._e()])})),t._v(" "),o("div",{ref:"rightLists",staticClass:"rightLists",on:{scroll:function(n){t.fingerScroll(n)}}},t._l(t.leftList,function(n,e){return o("div",{ref:"lists",refInFor:!0,staticClass:"sectionList"},[o("dl",[t._v(t._s(n.name))]),t._v(" "),t._l(n.foods,function(n,i){return o("dt",{staticClass:"smallList"},[o("p",[t._v(t._s(n.name))]),t._v(" "),o("p",[t._v(t._s(n.description))]),t._v(" "),o("div",{staticClass:"icons"},[n.off?o("i",{staticClass:"iconfont icon-jianhao",on:{click:function(n){t.subtract(e,i)}}}):t._e(),t._v(" "),n.count>0?o("span",[t._v(t._s(n.count))]):t._e(),t._v(" "),o("i",{staticClass:"iconfont icon-jiahao",on:{click:function(n){t.increase(e,i)}}})])])})],2)}))])])},staticRenderFns:[]};var u=o("VU/8")(r,l,!1,function(t){o("675q")},"data-v-012f97b4",null).exports;e.a.use(c.a);var f=new c.a({routes:[{path:"/",name:"HelloWorld",component:u}]});o("UYOp"),o("xgGU");e.a.config.productionTip=!1,new e.a({el:"#app",router:f,components:{App:s},template:"<App/>"})},UYOp:function(t,n){var o,e,i,s,c;o=document,e=window,i=o.documentElement,s="orientationchange"in window?"orientationchange":"resize",c=function(){var t=i.clientWidth;t&&(i.style.fontSize=t/375*20+"px")},o.addEventListener&&(e.addEventListener(s,c,!1),o.addEventListener("DOMContentLoaded",c,!1))},af7L:function(t,n){},xgGU:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.262aef9b0190a485efde.js.map