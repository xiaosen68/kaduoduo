(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-main-shop"],{"16bc":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return o}));var o={uniSwiperDot:i("1e4e").default,uniPopup:i("714b").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"shop-box"},[i("router-link",{staticClass:"shop-center",attrs:{to:"{name:'shopcenter'}"}},[t._v("个人中心")]),i("uni-swiper-dot",{attrs:{info:t.info,current:t.current,field:"content",mode:t.mode}},[i("v-uni-swiper",{staticClass:"swiper-box",attrs:{autoplay:"true"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},t._l(t.info,(function(t,e){return i("v-uni-swiper-item",{key:e},[i("v-uni-view",{staticClass:"swiper-item"},[i("v-uni-image",{staticClass:"banner-img",attrs:{src:t.url,mode:"widthFix"}})],1)],1)})),1)],1),i("v-uni-view",{staticClass:"card-shop-box"},[i("v-uni-view",{staticClass:"shop-class-box"},t._l(t.shopClass,(function(e,o){return i("v-uni-view",{staticClass:"shop-class-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.sleceShopClass(e.name)}}},[i("v-uni-image",{staticClass:"shop-class-icon",attrs:{src:"../../static/img/shop/"+e.icon,mode:""}}),i("v-uni-view",[t._v(t._s(e.label))])],1)})),1),i("v-uni-view",{staticClass:"store-box"},[i("v-uni-view",{staticClass:"shop-list"},t._l(t.goodsList,(function(e,o){return i("router-link",{staticClass:"store-item",attrs:{to:{name:"goodsstatus",params:{id:e.id}}}},[i("v-uni-image",{staticClass:"good-pic",attrs:{src:e.productUrl,mode:"aspectFit"}}),i("v-uni-view",{staticClass:"goods-name"},[t._v(t._s(e.productName))]),i("v-uni-view",{staticClass:"goods-prices"},[i("v-uni-view",{staticClass:"goods-cj-pri"},[t._v("价格："+t._s(t._f("numberFilters")(e.transactionPrice)))])],1),i("v-uni-view",{staticClass:"goods-prices"},[i("v-uni-view",{staticClass:"goods-cj-pri"},[t._v("团购："+t._s(t._f("numberFilters")(e.transactionPrice*e.discount)))])],1)],1)})),1),i("v-uni-view",{staticClass:"get-more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getmoreFn.apply(void 0,arguments)}}},[t._v(t._s(t.getMoretext))])],1)],1),i("uni-popup",{ref:"popup",attrs:{type:"center"}},[i("v-uni-view",{staticClass:"popupCenter-box"},[t._v(t._s(t.popupCenterMessage))])],1)],1)},n=[]},1786:function(t,e,i){var o=i("76a3");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=i("4f06").default;a("3da8334a",o,!0,{sourceMap:!1,shadowMode:!1})},"1e4e":function(t,e,i){"use strict";i.r(e);var o=i("d72a"),a=i("9fe2");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("e3e8");var s,r=i("f0c5"),d=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"2e16d9df",null,!1,o["a"],s);e["default"]=d.exports},"30d4":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,".shop-class-box[data-v-11e11a69]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:space-around;justify-content:space-around}.shop-class-item[data-v-11e11a69]{width:%?120?%;font-size:%?14?%;margin:0 %?10?%;text-align:center}.shop-class-icon[data-v-11e11a69]{border-radius:%?10?%;width:%?100?%;height:%?100?%}.swiper-item[data-v-11e11a69]{text-align:center}.banner-img[data-v-11e11a69]{width:%?720?%}.shop-box[data-v-11e11a69]{padding:%?20?%}.shop-title[data-v-11e11a69]{font-size:%?34?%;font-weight:600;line-height:2em}.shop-list[data-v-11e11a69]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;\n\t\t/* justify-content: flex-start; */-webkit-justify-content:space-around;justify-content:space-around;\n\t\t/* display: inline-block; */width:%?700?%}.shop-list2[data-v-11e11a69]{display:inline-block;width:%?330?%;vertical-align:top}.shop-item[data-v-11e11a69]{width:%?290?%;text-align:center;padding:%?20?%;border:%?10?% solid #f4f8fb}.shop-img[data-v-11e11a69]{width:%?270?%;height:%?180?%}.shop-name[data-v-11e11a69]{font-size:%?26?%;padding-left:%?40?%;text-align:left}.jishou-title[data-v-11e11a69]{margin-top:%?40?%}.shop-center[data-v-11e11a69]{width:%?160?%;height:%?50?%;font-size:%?20?%;line-height:%?50?%;text-align:center;border:1px #e5e9ef solid;position:fixed;right:0;top:%?140?%;color:red;background-color:#fff;border-radius:%?40?% 0 0 %?40?%;z-index:99}\n\t/* *{\n\t\tbox-sizing: border-box;\n\t} */.popupCenter-box[data-v-11e11a69]{width:%?400?%;padding:%?40?%;text-align:center;border-radius:%?20?%}.cardstore[data-v-11e11a69]{height:90vh}.store-box[data-v-11e11a69]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;width:%?710?%;padding:%?20?%;text-align:center;margin-bottom:%?200?%}.store-item[data-v-11e11a69]{width:%?300?%;display:inline-block;border:solid %?10?% #f4f8fb\n\t\t/* text-align: left; */}.good-box[data-v-11e11a69]{width:%?330?%;height:%?376?%;border-radius:%?20?%;background-color:#fff;text-align:center;padding:%?20?% %?20?%;margin-bottom:%?20?%}.goodboxlastleft[data-v-11e11a69]{position:relative;left:%?-176?%}.good-pic[data-v-11e11a69]{width:%?280?%;height:%?230?%}.good-value[data-v-11e11a69]{display:inline-block;font-size:%?20?%;color:#fb2e03}.trans-pri[data-v-11e11a69]{display:inline-block;font-size:%?24?%;color:#fb2e03}.trans-price-box[data-v-11e11a69]{text-align:left}.input-btn[data-v-11e11a69]{display:inline-block;position:relative;left:%?0?%;text-align:center;vertical-align:middle;font-size:%?30?%}.input-btn-box[data-v-11e11a69]{display:inline-block;width:%?56?%;line-height:%?20?%;vertical-align:middle;font-size:%?30?%}.in-btn[data-v-11e11a69]{display:inline-block;font-size:%?30?%;vertical-align:middle}.buy-car[data-v-11e11a69]{width:100%;\n\t\t/* height: 110upx; */position:fixed;bottom:%?100?%;background-color:#fff}.car-but[data-v-11e11a69]{width:%?48?%;height:%?40?%;border-radius:50%;background-color:#fff;margin:0 auto;text-align:center;line-height:%?20?%;position:relative;top:0}.arrowps[data-v-11e11a69]{display:block;position:relative;top:%?-10?%}.buy-car-statistic[data-v-11e11a69]{position:fixed;bottom:%?100?%;width:100%;height:%?104?%;background-color:#fff;border-top:%?2?% solid #ececf4}.circle-filled-icon[data-v-11e11a69]{margin-left:%?16?%;margin-right:%?10?%;line-height:%?104?%}.buy-car-product[data-v-11e11a69]{min-height:%?80?%;\n\t\t/* height: 200upx; */padding-bottom:%?100?%}.buy-car-product-arrow[data-v-11e11a69]{height:%?80?%}.statistic-pri[data-v-11e11a69]{display:inline-block;width:%?280?%;font-size:%?28?%;margin-left:%?60?%;vertical-align:middle;color:#333;line-height:%?40?%}.buy-button[data-v-11e11a69]{display:inline-block;background-color:#f33;color:#fff;text-align:center;line-height:%?104?%;width:%?260?%;position:absolute;right:%?0?%}.product-item[data-v-11e11a69]{width:100%;height:%?80?%\n\t\t/* line-height: 80upx; */}.buy-filled-icon[data-v-11e11a69]{margin-left:%?16?%;margin-right:%?10?%\n\t\t/* line-height: 80upx; */}.product-item-name[data-v-11e11a69]{display:inline-block;overflow:hidden;width:%?200?%;\n\t\t/* max-width: 80upx; */\n\t\t/* overflow: hidden; */font-size:%?32?%;vertical-align:middle;\n\t\t/* line-height: 80upx; */word-break:break-all;  /* break-all(允许在单词内换行。) */text-overflow:ellipsis  /* 超出部分省略号 */}.product-pri[data-v-11e11a69]{display:inline-block;width:%?480?%;font-size:%?24?%;color:#d41c26\n\t\t/* line-height: 80upx; */}.product-cj[data-v-11e11a69]{display:inline-block;font-size:%?32?%;width:%?260?%\n\t\t/* line-height: 80upx; */}.statistic-cj[data-v-11e11a69]{display:block;font-size:%?32?%}.store-list1[data-v-11e11a69]{display:inline-block;width:%?350?%\n\t\t/* border: solid 20upx #f4f8fb;*/}.store-list2[data-v-11e11a69]{display:inline-block;width:%?350?%\n\t\t/* border: solid 20upx #f4f8fb; */}.goods-prices[data-v-11e11a69]{\n\t\t/* display: inline-block; */text-align:left;padding-left:%?20?%\n\t\t/* width: 166upx; */}.goods-name[data-v-11e11a69]{text-align:left;font-size:%?28?%;font-weight:600;width:%?240?%;padding-left:%?20?%}.goods-cj-pri[data-v-11e11a69]{text-align:left;font-size:%?22?%;color:#d41c26;line-height:2em}.input-box-wrap[data-v-11e11a69]{\n\t\t/* display: inline-block; */\n\t\t/* width: 160upx; */text-align:left;padding-left:%?20?%}.get-more[data-v-11e11a69]{text-align:center;line-height:%?40?%;margin-top:%?40?%;color:#d41c26}",""]),t.exports=e},4449:function(t,e,i){"use strict";i.r(e);var o=i("e050"),a=i.n(o);for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);e["default"]=a.a},"76a3":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,".uni-swiper__warp[data-v-2e16d9df]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:relative;overflow:hidden}.uni-swiper__dots-box[data-v-2e16d9df]{position:absolute;bottom:10px;left:0;right:0;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-swiper__dots-item[data-v-2e16d9df]{width:8px;border-radius:100px;margin-left:6px;background-color:rgba(0,0,0,.4)\n\t\t/* transition: width 0.2s linear;  不要取消注释，不然会不能变色\n */}.uni-swiper__dots-item[data-v-2e16d9df]:first-child{margin:0}.uni-swiper__dots-default[data-v-2e16d9df]{border-radius:100px}.uni-swiper__dots-long[data-v-2e16d9df]{border-radius:50px}.uni-swiper__dots-bar[data-v-2e16d9df]{border-radius:50px}.uni-swiper__dots-nav[data-v-2e16d9df]{bottom:0;height:40px;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:rgba(0,0,0,.2)}.uni-swiper__dots-nav-item[data-v-2e16d9df]{\n\t\t/* overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; */font-size:%?28?%;color:#fff;margin:0 15px}.uni-swiper__dots-indexes[data-v-2e16d9df]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n\n\t\t/* flex: 1;\n */-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-swiper__dots-indexes-text[data-v-2e16d9df]{color:#fff;font-size:%?24?%}",""]),t.exports=e},8296:function(t,e,i){var o=i("30d4");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=i("4f06").default;a("9f3eb452",o,!0,{sourceMap:!1,shadowMode:!1})},"9fe2":function(t,e,i){"use strict";i.r(e);var o=i("e65b"),a=i.n(o);for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);e["default"]=a.a},b3de:function(t,e,i){"use strict";i.r(e);var o=i("16bc"),a=i("4449");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("c760");var s,r=i("f0c5"),d=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"11e11a69",null,!1,o["a"],s);e["default"]=d.exports},c760:function(t,e,i){"use strict";var o=i("8296"),a=i.n(o);a.a},d72a:function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-swiper__warp"},[t._t("default"),"default"===t.mode?i("v-uni-view",{key:"default",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,o){return i("v-uni-view",{key:o,staticClass:"uni-swiper__dots-item uni-swiper__dots-bar",style:{width:(o===t.current?2*t.dots.width:t.dots.width)+"px",height:t.dots.width/3+"px","background-color":o!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,"border-radius":"0px"}})})),1):t._e(),"dot"===t.mode?i("v-uni-view",{key:"dot",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,o){return i("v-uni-view",{key:o,staticClass:"uni-swiper__dots-item",style:{width:t.dots.width+"px",height:t.dots.height+"px","background-color":o!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:o!==t.current?t.dots.border:t.dots.selectedBorder}})})),1):t._e(),"round"===t.mode?i("v-uni-view",{key:"round",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,o){return i("v-uni-view",{key:o,staticClass:"uni-swiper__dots-item ",class:[o===t.current&&"uni-swiper__dots-long"],style:{width:(o===t.current?3*t.dots.width:t.dots.width)+"px",height:t.dots.height+"px","background-color":o!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:o!==t.current?t.dots.border:t.dots.selectedBorder}})})),1):t._e(),"nav"===t.mode?i("v-uni-view",{key:"nav",staticClass:"uni-swiper__dots-box uni-swiper__dots-nav",style:{"background-color":t.dotsStyles.backgroundColor,bottom:"0"}},[i("v-uni-text",{staticClass:"uni-swiper__dots-nav-item",style:{color:t.dotsStyles.color}},[t._v(t._s(t.current+1+"/"+t.info.length+" "+t.info[t.current][t.field]))])],1):t._e(),"indexes"===t.mode?i("v-uni-view",{key:"indexes",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,o){return i("v-uni-view",{key:o,staticClass:"uni-swiper__dots-item uni-swiper__dots-indexes",style:{width:t.dots.width+"px",height:t.dots.height+"px",color:o===t.current?t.dots.selectedColor:t.dots.color,"background-color":o!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:o!==t.current?t.dots.border:t.dots.selectedBorder}},[i("v-uni-text",{staticClass:"uni-swiper__dots-indexes-text"},[t._v(t._s(o+1))])],1)})),1):t._e()],2)},n=[]},e050:function(t,e,i){"use strict";(function(t){var o=i("4ea4");i("99af"),i("b680"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(i("1e4e")),n={components:{uniSwiperDot:a.default},data:function(){return{info:[{content:"内容 A",url:"../../static/img/1.jpg"},{content:"内容 B",url:"../../static/img/2.jpg"},{content:"内容 C",url:"../../static/img/3.jpg"}],current:0,currentPage:1,totalSize:0,size:20,labelName:"",totalPage:0,mode:"default",popupCenterMessage:"",goodsList:[],getMoretext:"点击加载更多",shopClass:[{label:"海淘优品",name:"海淘优品",icon:"haitao.png"},{label:"营养保健",name:"保健品",icon:"baojian.png"},{label:"美妆护理",name:"美妆护理",icon:"meizhuang.png"},{label:"茶品天下",name:"茶品天下",icon:"chapin.png"},{label:"工艺珠宝",name:"工艺珠宝",icon:"zhubao.png"},{label:"服饰箱包",name:"服饰箱包",icon:"fushi.png"},{label:"百货超市",name:"百货超市",icon:"baihuo.png"},{label:"数码家电",name:"数码家电",icon:"shuma.png"},{label:"母婴呵护",name:"母婴呵护",icon:"muying.png"},{label:"更多分类",name:"",icon:"shopmore.png"}]}},onLoad:function(){this.getPruductList()},methods:{change:function(t){this.current=t.detail.current},trigger:function(t){},sleceShopClass:function(t){this.labelName=t,this.currentPage=1,this.getPruductList()},getPruductList:function(){var t=this;uni.showLoading({title:"加载中",mask:!0}),uni.request({method:"POST",url:this.$baseUrl+"/ucandy/mall/product",data:{productType:"GENERAL",lable:this.labelName,page:this.currentPage,size:this.size},header:{token:uni.getStorageSync("token"),"Content-Type":"application/json"},success:function(e){200==e.statusCode&&(1==e.data.current_page?t.goodsList=e.data.list:t.goodsList=t.goodsList.concat(e.data.list),t.totalSize=e.data.total_size,t.currentPage=e.data.current_page,t.totalPage=e.data.total_page,t.currentPage<t.totalPage?t.getMoretext="点击加载更多":t.getMoretext="没有更多数据了")},complete:function(){uni.hideLoading()}})},getmoreFn:function(){this.totalPage>this.currentPage?(this.currentPage++,this.getPruductList()):this.getMoretext="没有更多数据了"}},onPullDownRefresh:function(){t("log","刷新"," at pages/main/shop.vue:210")},onReachBottom:function(){},filters:{numberFilters:function(t){return t?t.toFixed(2):t}}};e.default=n}).call(this,i("0de9")["log"])},e3e8:function(t,e,i){"use strict";var o=i("1786"),a=i.n(o);a.a},e65b:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"UniSwiperDot",props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:8,height:8,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(t){"indexes"===t?(this.dots.width=20,this.dots.height=20):(this.dots.width=8,this.dots.height=8)}},created:function(){"indexes"===this.mode&&(this.dots.width=20,this.dots.height=20),this.dots=Object.assign(this.dots,this.dotsStyles)}};e.default=o}}]);