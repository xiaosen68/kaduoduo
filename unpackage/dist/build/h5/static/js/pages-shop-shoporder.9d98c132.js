(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-shoporder"],{"172a":function(t,o,a){"use strict";var e=a("dd5a"),i=a.n(e);i.a},"1a08":function(t,o,a){"use strict";a.r(o);var e=a("f7aa"),i=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(o,t,(function(){return e[t]}))}(n);o["default"]=i.a},7419:function(t,o,a){"use strict";var e=a("ca39"),i=a.n(e);i.a},"8eb3":function(t,o,a){"use strict";a.r(o);var e=a("e5bc"),i=a("1a08");for(var n in i)"default"!==n&&function(t){a.d(o,t,(function(){return i[t]}))}(n);a("7419"),a("172a");var s,d=a("f0c5"),u=Object(d["a"])(i["default"],e["b"],e["c"],!1,null,"270d3eba",null,!1,e["a"],s);o["default"]=u.exports},b77e:function(t,o,a){t.exports=a.p+"static/img/goods1.e9841106.png"},ca39:function(t,o,a){var e=a("fadf");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("9e2f1732",e,!0,{sourceMap:!1,shadowMode:!1})},d030:function(t,o,a){var e=a("24fb");o=e(!1),o.push([t.i,".popupCenter-box[data-v-270d3eba]{width:%?400?%;padding:%?40?%;text-align:center;border-radius:%?20?%}.shop-center-box[data-v-270d3eba]{min-height:90vh;background-color:#f4f8fb}.location-status-box[data-v-270d3eba],.shop-goods-allpri[data-v-270d3eba],.shop-goods[data-v-270d3eba]{margin-top:%?20?%;padding:%?20?% %?20?%;background-color:#fff;font-size:%?24?%}.goods-pic[data-v-270d3eba]{width:%?200?%;height:%?200?%;vertical-align:top}.shop-goods-status[data-v-270d3eba]{display:inline-block;padding-left:%?20?%;width:%?300?%;font-size:%?24?%;line-height:2em}.shop-money[data-v-270d3eba]{color:red}.input-box-wrap[data-v-270d3eba]{display:inline-block;width:%?160?%;text-align:left\n\t/* padding-left: 20upx; */}.in-btn[data-v-270d3eba]{display:inline-block;font-size:%?30?%;vertical-align:middle}.input-btn-box[data-v-270d3eba]{display:inline-block;width:%?56?%;line-height:%?20?%;vertical-align:middle;font-size:%?30?%}.input-btn[data-v-270d3eba]{display:inline-block;position:relative;left:%?0?%;text-align:center;vertical-align:middle;font-size:%?30?%}.shop-goods-allpri[data-v-270d3eba]{position:relative}.shop-allpri-title[data-v-270d3eba]{display:inline-block;width:%?300?%}.shop-allpri-money[data-v-270d3eba]{position:absolute;right:%?40?%;color:red}.shop-yuan-money[data-v-270d3eba]{padding-left:%?40?%;font-size:%?20?%;text-decoration:line-through}.buy-button-box[data-v-270d3eba]{margin-top:%?80?%}.buy-btn[data-v-270d3eba]{width:%?700?%;font-size:%?24?%;margin:%?10?% auto;color:#fff;background-color:red;text-align:center;line-height:3em;border-radius:%?20?%}",""]),t.exports=o},dd5a:function(t,o,a){var e=a("d030");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("1e553186",e,!0,{sourceMap:!1,shadowMode:!1})},e5bc:function(t,o,a){"use strict";a.d(o,"b",(function(){return i})),a.d(o,"c",(function(){return n})),a.d(o,"a",(function(){return e}));var e={uniIcons:a("73a6").default,uniPopup:a("714b").default},i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-uni-view",{staticClass:"shop-center-box"},[e("router-link",{staticClass:"location-status-box",attrs:{to:{name:"selectlocation",params:{beforePage:"shoporder"}}}},[t._v(t._s(t.locationStatus.region)+t._s(t.locationStatus.address_details)+t._s(t.locationStatus.customer_name)+t._s(t.locationStatus.customer_phone))]),e("v-uni-view",{staticClass:"shop-goods"},[e("v-uni-view",{staticClass:"shop-goods-pic"},[e("v-uni-image",{staticClass:"goods-pic",attrs:{mode:"widthFix",src:a("b77e").replace(/^\./,"")}}),e("v-uni-view",{staticClass:"shop-goods-status"},[e("v-uni-view",{staticClass:"shop-name"},[t._v(t._s(t.productName))]),e("v-uni-view",{staticClass:"shop-money"},[e("v-uni-text",[t._v(t._s(t._f("price")(t.transactionPrice*t.discount))+"元")]),e("v-uni-text",{staticClass:"shop-yuan-money"},[t._v(t._s(t.transactionPrice)+"元")])],1),e("v-uni-view",{staticClass:"input-box-wrap"},[e("v-uni-view",{staticClass:"input-btn"},[e("uni-icons",{staticClass:"in-btn",attrs:{size:"24",type:"minus",color:"#8a8a8a"},on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.minus()}}}),e("v-uni-input",{staticClass:"input-btn-box",attrs:{type:"number",min:"0",maxlength:"2"},on:{input:function(o){arguments[0]=o=t.$handleEvent(o),t.outinput.apply(void 0,arguments)}},model:{value:t.goodsNum,callback:function(o){t.goodsNum=o},expression:"goodsNum"}}),e("uni-icons",{staticClass:"in-btn",attrs:{size:"24",type:"plus",color:"#fb2e03"},on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.plus()}}})],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"shop-goods-allpri"},[e("v-uni-view",{staticClass:"shop-allpri-money"},[t._v(t._s(t.allMoney)+"元")]),e("v-uni-view",{staticClass:"shop-allpri-title"},[t._v("商品总金额")])],1),e("v-uni-view",{staticClass:"buy-button-box"},[e("v-uni-view",{staticClass:"buy-btn",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.selectPay.apply(void 0,arguments)}}},[t._v("确认订单")])],1),e("uni-popup",{ref:"popup",attrs:{type:"center"}},[e("v-uni-view",{staticClass:"popupCenter-box"},[t._v(t._s(t.popupCenterMessage))])],1)],1)},n=[]},f7aa:function(t,o,a){"use strict";a("b680"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={components:{},data:function(){return{current:0,mode:"default",goodsNum:1,goodsId:"",goodsStatus:"",locationId:"",locationStatus:"",productName:"",discount:"",transactionPrice:"",popupCenterMessage:""}},onLoad:function(){var t=this;this.goodsId=uni.getStorageSync("goodsId"),this.locationId=uni.getStorageSync("locationId"),uni.request({method:"POST",url:this.$baseUrl+"/api/v1/pri/shop/generalProductById",data:{id:this.goodsId},header:{token:uni.getStorageSync("token"),"Content-Type":"application/json"},success:function(o){console.log(o),0==o.data.code&&(t.productName=o.data.data.productName,t.goodsId=o.data.data.id,t.transactionPrice=o.data.data.transactionPrice,t.discount=o.data.data.discount)}}),this.locationId?uni.request({method:"POST",url:this.$baseUrl+"/api/v1/pri/my/getUserAddressById",data:{id:this.locationId},header:{token:uni.getStorageSync("token"),"Content-Type":"application/json"},success:function(o){console.log(o),0==o.data.code&&(t.locationStatus=o.data.data)}}):uni.request({method:"POST",url:this.$baseUrl+"/api/v1/pri/my/getUserAddress",data:{},header:{token:uni.getStorageSync("token"),"Content-Type":"application/json"},success:function(o){console.log(o),0==o.data.code&&(t.locationStatus=o.data.data.list[0])}}),console.log(this.locationStatus)},methods:{minus:function(){Math.floor(this.goodsNum)>0?this.goodsNum=Math.floor(this.goodsNum)-1:this.goodsNum=0,console.log(this.goodsNum)},plus:function(t){Math.floor(this.goodsNum)<99?this.goodsNum=Math.floor(this.goodsNum)+1:Math.floor(this.goodsNum)>=99&&(this.goodsNum=99),console.log(this.goodsNum)},outinput:function(t){t.detail.value>99&&(t.detail.value=99),t.detail.value<0&&(t.detail.value=0),console.log(t.detail.value)},selectPay:function(){this.allMoney>=100&&this.allMoney<=5e4?this.$Router.push({path:"/pages/shop/selectpay",query:{product:JSON.stringify({productName:this.productName,id:this.goodsId,transactionPrice:this.transactionPrice,amount:this.goodsNum}),totalTransactionPrice:this.allMoney,addressId:this.locationId}}):this.allMoney<=100?(this.popupCenterMessage="请选择商品需大于100元",this.$refs.popup.open()):this.allMoney>5e4&&(this.popupCenterMessage="请选择商品需小于50000元",this.$refs.popup.open())}},computed:{allMoney:function(){return((this.transactionPrice*this.discount).toFixed(2)*this.goodsNum).toFixed(2)}},filters:{price:function(t){return t.toFixed(2)}}};o.default=e},fadf:function(t,o,a){var e=a("24fb");o=e(!1),o.push([t.i,"uni-page-body[data-v-270d3eba]{background-color:#f4f8fb}body.?%PAGE?%[data-v-270d3eba]{background-color:#f4f8fb}",""]),t.exports=o}}]);