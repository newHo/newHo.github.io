webpackJsonp([0],{"6XcM":function(t,e){},I32r:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},o,!1,function(t){n("6XcM")},null,null).exports,c=n("/ocq"),r=[{name:"热销",totalCount:0,foods:[{name:"脆皮炸鸡",description:"好好吃",count:0},{name:"鸡柳炸鸡",description:"好好吃",count:0},{name:"脆皮",description:"好吃",count:0}]},{name:"优惠",totalCount:0,foods:[{name:"脆皮炸鸡11",description:"好好吃",count:0},{name:"鸡柳炸鸡11",description:"好好吃",count:0},{name:"脆皮11",description:"好吃",count:0}]},{name:"折扣",totalCount:0,foods:[{name:"脆皮炸鸡22",description:"好好吃",count:0},{name:"鸡柳炸鸡22",description:"好好吃",count:0},{name:"脆皮22",description:"好吃",count:0},{name:"脆皮33",description:"好吃",count:0}]},{name:"汉堡",totalCount:0,foods:[{name:"脆皮炸鸡32",description:"好好吃",count:0},{name:"鸡柳炸鸡32",description:"好好吃",count:0},{name:"脆皮32",description:"好吃",count:0},{name:"鸡柳炸鸡33",description:"好好吃",count:0},{name:"脆皮34",description:"好吃",count:0}]}],a={name:"Home",data:function(){return{leftList:r,activedIndex:0,listHeight:[]}},methods:{changeIndex:function(t){this.activedIndex=t;var e=this.$refs.lists[t],n=this.$refs.rightLists;clearInterval(i);var i=setInterval(function(){n.scrollTop+n.offsetTop<=e.offsetTop?(n.scrollTop+=5,(n.scrollTop+n.offsetTop>=e.offsetTop||n.scrollTop+n.clientHeight>=n.scrollHeight)&&clearInterval(i)):(n.scrollTop+n.offsetTop<=e.offsetTop&&clearInterval(i),n.scrollTop-=5)},1)},listScroll:function(t){this.listHeightAll;for(var e=t.srcElement.scrollTop,n=this.listHeight.length,i=0;i<n-1;i++){var o=this.listHeight[i],s=this.listHeight[i+1];(!s||e>=o&&e<s)&&(this.activedIndex=i)}}},computed:{listHeightAll:function(){var t=this.$refs.lists,e=0;this.listHeight.push(e);for(var n=0;n<t.length;n++){e+=t[n].offsetHeight,this.listHeight.push(e)}}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Home"},[n("div",{staticClass:"content"},[n("ul",{staticClass:"leftList"},t._l(t.leftList,function(e,i){return n("li",{class:{active:i==t.activedIndex},on:{click:function(e){t.changeIndex(i)}}},[t._v(t._s(e.name))])})),t._v(" "),n("div",{ref:"rightLists",staticClass:"rightLists",on:{scroll:function(e){t.listScroll(e)}}},t._l(t.leftList,function(e,i){return n("div",{ref:"lists",refInFor:!0,staticClass:"sectionList"},[n("dl",[t._v(t._s(e.name))]),t._v(" "),t._l(e.foods,function(e){return n("dt",{staticClass:"smallList"},[n("p",[t._v(t._s(e.name))]),t._v(" "),n("p",[t._v(t._s(e.description))])])})],2)}))])])},staticRenderFns:[]};var d=n("VU/8")(a,l,!1,function(t){n("I32r")},"data-v-f03bb8ea",null).exports;i.a.use(c.a);var u=new c.a({routes:[{path:"/",name:"HelloWorld",component:d}],mode:"history"});n("UYOp"),n("xgGU");i.a.config.productionTip=!1,new i.a({el:"#app",router:u,components:{App:s},template:"<App/>"})},UYOp:function(t,e){var n,i,o,s,c;n=document,i=window,o=n.documentElement,s="orientationchange"in window?"orientationchange":"resize",c=function(){var t=o.clientWidth;t&&(o.style.fontSize=t/375*20+"px")},n.addEventListener&&(i.addEventListener(s,c,!1),n.addEventListener("DOMContentLoaded",c,!1))},xgGU:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.22386274ef49eaf781a4.js.map