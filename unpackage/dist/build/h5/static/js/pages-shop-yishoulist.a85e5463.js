(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-yishoulist"],{"04d0":function(t,a,e){"use strict";var o;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return o}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"shop-order-list-box"},t._l(t.showList,(function(a){return e("v-uni-view",{staticClass:"shop-order-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goItem(a)}}},[e("v-uni-view",{staticClass:" order-category-box"},[e("v-uni-text",{staticClass:"order-category"},[t._v(t._s(a.passageWayName))]),e("v-uni-text",{staticClass:"order-date-box"},[t._v(t._s(a.orderTime))])],1),e("v-uni-view",{staticClass:"order-status-box"},[e("v-uni-text",{staticClass:"order-money"},[t._v(t._s(a.totalTransactionPrice))]),e("v-uni-text",{staticClass:"order-status"},[t._v("已支付")])],1)],1)})),1)},n=[]},"0fa4":function(t,a,e){var o=e("24fb");a=o(!1),a.push([t.i,"uni-page-body[data-v-0c722c76]{background-color:#f4f8fb}.shop-order-item[data-v-0c722c76]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:%?660?%;padding:%?20?%;line-height:1.5em ;\n\t/* height: 160upx; */margin:0 auto;margin-top:%?20?%;background-color:#fff}.order-category-box[data-v-0c722c76]{width:%?300?%}.order-status-box[data-v-0c722c76]{width:%?300?%;text-align:right}.order-category[data-v-0c722c76]{font-size:%?32?%;font-weight:600}.order-date-box[data-v-0c722c76]{display:block;font-size:%?24?%;color:#a3a3a3}.order-money[data-v-0c722c76]{display:block;color:#007aff;font-size:%?24?%}.order-status[data-v-0c722c76]{font-size:%?32?%;color:red}body.?%PAGE?%[data-v-0c722c76]{background-color:#f4f8fb}",""]),t.exports=a},"46f5":function(t,a,e){"use strict";e.r(a);var o=e("fa1b"),i=e.n(o);for(var n in o)"default"!==n&&function(t){e.d(a,t,(function(){return o[t]}))}(n);a["default"]=i.a},"86ea":function(t,a,e){"use strict";var o=e("dc53"),i=e.n(o);i.a},dc53:function(t,a,e){var o=e("0fa4");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("45afea99",o,!0,{sourceMap:!1,shadowMode:!1})},f999:function(t,a,e){"use strict";e.r(a);var o=e("04d0"),i=e("46f5");for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);e("86ea");var r,s=e("f0c5"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"0c722c76",null,!1,o["a"],r);a["default"]=c.exports},fa1b:function(t,a,e){"use strict";e("99af"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o={data:function(){return{showList:[],currPage:1,totalPage:1,size:10}},onLoad:function(){uni.startPullDownRefresh()},methods:{goItem:function(t){this.$Router.push({path:"/pages/shop/shoporderitem",query:{item:JSON.stringify(t)}})},getxiaofei:function(){var t=this;uni.request({method:"POST",url:this.$baseUrl+"/api/v1/pri/my/generalOrderStore",data:{size:this.size,page:this.currPage},header:{token:uni.getStorageSync("token"),"Content-Type":"application/json"},success:function(a){0==a.data.code?(1==a.data.data.current_page?t.showList=a.data.data.list:t.showList=t.showList.concat(a.data.data.list),t.currPage=a.data.data.current_page,t.totalPage=a.data.data.total_page):-1==a.data.code&&uni.showToast({title:a.data.msg,mask:!0,icon:"none",duration:2e3})},complete:function(){uni.stopPullDownRefresh()}})}},onPullDownRefresh:function(){this.currPage=1,this.getxiaofei()},onReachBottom:function(){this.currPage<this.totalPage?(this.currPage++,this.getxiaofei()):uni.showToast({title:"没有更多数据了",mask:!0,icon:"none",duration:2e3})}};a.default=o}}]);