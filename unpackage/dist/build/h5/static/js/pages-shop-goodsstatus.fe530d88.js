(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-goodsstatus"],{1786:function(t,e,o){var i=o("76a3");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=o("4f06").default;s("3da8334a",i,!0,{sourceMap:!1,shadowMode:!1})},"1a3e":function(t,e,o){"use strict";o.r(e);var i=o("ac33"),s=o.n(i);for(var n in i)"default"!==n&&function(t){o.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},"1e4e":function(t,e,o){"use strict";o.r(e);var i=o("d72a"),s=o("9fe2");for(var n in s)"default"!==n&&function(t){o.d(e,t,(function(){return s[t]}))}(n);o("e3e8");var a,d=o("f0c5"),r=Object(d["a"])(s["default"],i["b"],i["c"],!1,null,"2e16d9df",null,!1,i["a"],a);e["default"]=r.exports},"29c5":function(t,e,o){"use strict";var i=o("2c0a"),s=o.n(i);s.a},"2c0a":function(t,e,o){var i=o("ea63");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=o("4f06").default;s("ee4f04ca",i,!0,{sourceMap:!1,shadowMode:!1})},"33f3":function(t,e,o){"use strict";var i=o("d164"),s=o.n(i);s.a},"6ead":function(t,e,o){"use strict";o.r(e);var i=o("d3b4"),s=o("1a3e");for(var n in s)"default"!==n&&function(t){o.d(e,t,(function(){return s[t]}))}(n);o("29c5"),o("33f3");var a,d=o("f0c5"),r=Object(d["a"])(s["default"],i["b"],i["c"],!1,null,"aae25c94",null,!1,i["a"],a);e["default"]=r.exports},"76a3":function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,".uni-swiper__warp[data-v-2e16d9df]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:relative;overflow:hidden}.uni-swiper__dots-box[data-v-2e16d9df]{position:absolute;bottom:10px;left:0;right:0;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-swiper__dots-item[data-v-2e16d9df]{width:8px;-webkit-border-radius:100px;border-radius:100px;margin-left:6px;background-color:rgba(0,0,0,.4)\n\t\t/* transition: width 0.2s linear;  不要取消注释，不然会不能变色\n */}.uni-swiper__dots-item[data-v-2e16d9df]:first-child{margin:0}.uni-swiper__dots-default[data-v-2e16d9df]{-webkit-border-radius:100px;border-radius:100px}.uni-swiper__dots-long[data-v-2e16d9df]{-webkit-border-radius:50px;border-radius:50px}.uni-swiper__dots-bar[data-v-2e16d9df]{-webkit-border-radius:50px;border-radius:50px}.uni-swiper__dots-nav[data-v-2e16d9df]{bottom:0;height:40px;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:rgba(0,0,0,.2)}.uni-swiper__dots-nav-item[data-v-2e16d9df]{\n\t\t/* overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; */font-size:%?28?%;color:#fff;margin:0 15px}.uni-swiper__dots-indexes[data-v-2e16d9df]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n\n\t\t/* flex: 1;\n */-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-swiper__dots-indexes-text[data-v-2e16d9df]{color:#fff;font-size:%?24?%}",""]),t.exports=e},"9fe2":function(t,e,o){"use strict";o.r(e);var i=o("e65b"),s=o.n(i);for(var n in i)"default"!==n&&function(t){o.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},ac33:function(t,e,o){"use strict";(function(t){var i=o("4ea4");o("b680"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(o("1e4e")),n={components:{uniSwiperDot:s.default},data:function(){return{info:[{content:"内容 A"},{content:"内容 B"},{content:"内容 C"}],current:0,mode:"default",goodsName:"哈哈哈",goodsCj:23123,zhekou:.7,goodsNum:123,goodsId:"",goodsStatus:""}},onLoad:function(){var e=this;this.$Route.query.id?(uni.setStorageSync("goodsId",this.$Route.query.id),this.goodsId=this.$Route.query.id):uni.getStorageSync("goodsId")?this.goodsId=uni.getStorageSync("goodsId"):uni.navigateTo({delta:1}),uni.request({method:"POST",url:this.$baseUrl+"/api/v1/pri/shop/generalProductById",data:{id:this.goodsId},header:{token:uni.getStorageSync("token"),"Content-Type":"application/json"},success:function(o){t("log",o," at pages/shop/goodsstatus.vue:84"),0==o.data.code&&(e.goodsStatus=o.data.data)}}),t("log",this.goodsId," at pages/shop/goodsstatus.vue:91")},methods:{change:function(t){this.current=t.detail.current},goNextFn:function(){this.$Router.push({name:"shoporder",params:{id:this.goodsId}})}},filters:{price:function(t){return t.toFixed(2)}}};e.default=n}).call(this,o("0de9")["log"])},d164:function(t,e,o){var i=o("f893");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=o("4f06").default;s("4e0a6efa",i,!0,{sourceMap:!1,shadowMode:!1})},d3b4:function(t,e,o){"use strict";var i;o.d(e,"b",(function(){return s})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"shop-center-box"},[o("router-link",{staticClass:"shop-center",attrs:{to:"{name:'shop'}",navType:"pushTab"}},[t._v("商城首页")]),o("v-uni-view",{staticClass:"goods-pictures-box"},[o("v-uni-image",{attrs:{src:t.goodsStatus.productUrl,mode:"widthFix"}})],1),o("v-uni-view",{staticClass:"goods-status-box"},[o("v-uni-view",{staticClass:"goods-name-box"},[o("v-uni-text",{staticClass:"goods-name"},[t._v(t._s(t.goodsStatus.productName))]),o("v-uni-text",{staticClass:"goods-num"},[t._v("数量："+t._s(t.goodsStatus.amount))])],1),o("v-uni-view",{staticClass:"goods-price"},[o("v-uni-text",{staticClass:"goods-price-zk"},[t._v(t._s(t._f("price")(t.goodsStatus.transactionPrice*t.goodsStatus.discount))+" 元")]),o("v-uni-text",{staticClass:"goods-price-cj"},[t._v("市场价："+t._s(t.goodsStatus.transactionPrice)+"元")])],1),o("v-uni-view",{staticClass:"goods-picture-box"},[o("v-uni-image",{attrs:{src:t.goodsStatus.productDetailsUrl,mode:"widthFix"}})],1)],1),o("v-uni-view",{staticClass:"buy-button-box"},[o("v-uni-view",{staticClass:"buy-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goNextFn()}}},[t._v("立即购买")])],1)],1)},n=[]},d72a:function(t,e,o){"use strict";var i;o.d(e,"b",(function(){return s})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"uni-swiper__warp"},[t._t("default"),"default"===t.mode?o("v-uni-view",{key:"default",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,i){return o("v-uni-view",{key:i,staticClass:"uni-swiper__dots-item uni-swiper__dots-bar",style:{width:(i===t.current?2*t.dots.width:t.dots.width)+"px",height:t.dots.width/3+"px","background-color":i!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,"border-radius":"0px"}})})),1):t._e(),"dot"===t.mode?o("v-uni-view",{key:"dot",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,i){return o("v-uni-view",{key:i,staticClass:"uni-swiper__dots-item",style:{width:t.dots.width+"px",height:t.dots.height+"px","background-color":i!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:i!==t.current?t.dots.border:t.dots.selectedBorder}})})),1):t._e(),"round"===t.mode?o("v-uni-view",{key:"round",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,i){return o("v-uni-view",{key:i,staticClass:"uni-swiper__dots-item ",class:[i===t.current&&"uni-swiper__dots-long"],style:{width:(i===t.current?3*t.dots.width:t.dots.width)+"px",height:t.dots.height+"px","background-color":i!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:i!==t.current?t.dots.border:t.dots.selectedBorder}})})),1):t._e(),"nav"===t.mode?o("v-uni-view",{key:"nav",staticClass:"uni-swiper__dots-box uni-swiper__dots-nav",style:{"background-color":t.dotsStyles.backgroundColor,bottom:"0"}},[o("v-uni-text",{staticClass:"uni-swiper__dots-nav-item",style:{color:t.dotsStyles.color}},[t._v(t._s(t.current+1+"/"+t.info.length+" "+t.info[t.current][t.field]))])],1):t._e(),"indexes"===t.mode?o("v-uni-view",{key:"indexes",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,i){return o("v-uni-view",{key:i,staticClass:"uni-swiper__dots-item uni-swiper__dots-indexes",style:{width:t.dots.width+"px",height:t.dots.height+"px",color:i===t.current?t.dots.selectedColor:t.dots.color,"background-color":i!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:i!==t.current?t.dots.border:t.dots.selectedBorder}},[o("v-uni-text",{staticClass:"uni-swiper__dots-indexes-text"},[t._v(t._s(i+1))])],1)})),1):t._e()],2)},n=[]},e3e8:function(t,e,o){"use strict";var i=o("1786"),s=o.n(i);s.a},e65b:function(t,e,o){"use strict";o("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniSwiperDot",props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:8,height:8,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(t){"indexes"===t?(this.dots.width=20,this.dots.height=20):(this.dots.width=8,this.dots.height=8)}},created:function(){"indexes"===this.mode&&(this.dots.width=20,this.dots.height=20),this.dots=Object.assign(this.dots,this.dotsStyles)}};e.default=i},ea63:function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-aae25c94]{background-color:#f4f8fb}body.?%PAGE?%[data-v-aae25c94]{background-color:#f4f8fb}",""]),t.exports=e},f893:function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,".shop-center-box[data-v-aae25c94]{background-color:#f4f8fb}.shop-center[data-v-aae25c94]{width:%?160?%;height:%?50?%;font-size:%?20?%;line-height:%?50?%;text-align:center;\n\t\t/* background-color: #007AFF; */border:1px #e5e9ef solid;position:fixed;right:0;top:%?140?%;color:red;background-color:#fff;-webkit-border-radius:%?40?% 0 0 %?40?%;border-radius:%?40?% 0 0 %?40?%;z-index:99}.goods-name-box[data-v-aae25c94]{font-size:%?28?%;line-height:3em;padding:0 %?40?%;border-top:%?1?% solid #cacaca}.goods-price[data-v-aae25c94]{padding:0 %?40?%;padding-bottom:%?10?%;border-bottom:%?1?% solid #cacaca}.goods-name[data-v-aae25c94]{\n\t\t/* font-size: 28upx; */display:inline-block;width:%?400?%}.goods-num[data-v-aae25c94]{font-size:%?20?%;color:#a3a3a3}.goods-price-zk[data-v-aae25c94]{font-size:%?28?%;display:inline-block;width:%?400?%;color:red}.goods-price-cj[data-v-aae25c94]{font-size:%?20?%;color:#a3a3a3;text-decoration:line-through}.goods-status-box[data-v-aae25c94]{padding:%?40?% 0}.goods-pictures-box[data-v-aae25c94]{text-align:center}.goods-picture-box[data-v-aae25c94]{text-align:center;padding-bottom:%?200?%}.buy-button-box[data-v-aae25c94]{position:fixed;bottom:0;width:%?750?%;\n\t/* height: 200upx; */background-color:#fff}.buy-btn[data-v-aae25c94]{width:%?700?%;font-size:%?24?%;margin:%?10?% auto;color:#fff;background-color:red;text-align:center;line-height:3em;-webkit-border-radius:%?20?%;border-radius:%?20?%}",""]),t.exports=e}}]);