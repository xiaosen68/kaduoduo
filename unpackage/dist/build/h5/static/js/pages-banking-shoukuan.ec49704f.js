(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-banking-shoukuan"],{"0be6":function(a,t,e){var n=e("24fb");t=n(!1),t.push([a.i,".scanpay-wary[data-v-3cbb2567]{height:90vh;background-color:#ffaa36;padding-top:6vh}.scanpay-box[data-v-3cbb2567]{width:%?660?%;height:%?720?%;margin:0 auto 0 auto;padding:%?20?% 0;-webkit-border-radius:%?20?%;border-radius:%?20?%;background-color:#fff}.scanpay-name-box[data-v-3cbb2567]{padding-top:%?60?%;text-align:center}.scanpay-name[data-v-3cbb2567]{font-size:%?40?%\r\n\t/* color: #FFFFFF; */}.ercode-box[data-v-3cbb2567]{padding-top:%?40?%;text-align:center}.ercode-wrang[data-v-3cbb2567]{padding-top:%?20?%;text-align:center;font-size:%?30?%\r\n\t/* color: #FFFFFF; */}",""]),a.exports=t},"1f8e":function(a,t,e){"use strict";var n=e("7dbc"),o=e.n(n);o.a},6199:function(a,t,e){"use strict";var n=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(e("6f80")),c={components:{tkiQrcode:o.default},data:function(){return{name:"哈哈",code:"",codeVal:"",size:400,unit:"upx",show:!0,loadMake:!0,x:0,y:0,paystatus:""}},created:function(){this.codeVal="收款?phone="+uni.getStorageSync("phone")+"&name="+uni.getStorageSync("userName"),this.name=uni.getStorageSync("userName")},methods:{resultqr:function(a){this.code=a}},computed:{},onLoad:function(){}};t.default=c},"7dbc":function(a,t,e){var n=e("0be6");"string"===typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);var o=e("4f06").default;o("50d92432",n,!0,{sourceMap:!1,shadowMode:!1})},8401:function(a,t,e){"use strict";e.r(t);var n=e("6199"),o=e.n(n);for(var c in n)"default"!==c&&function(a){e.d(t,a,(function(){return n[a]}))}(c);t["default"]=o.a},b005:function(a,t,e){"use strict";e.r(t);var n=e("c6aa"),o=e("8401");for(var c in o)"default"!==c&&function(a){e.d(t,a,(function(){return o[a]}))}(c);e("1f8e");var i,r=e("f0c5"),s=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"3cbb2567",null,!1,n["a"],i);t["default"]=s.exports},c6aa:function(a,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return n}));var n={tkiQrcode:e("6f80").default},o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",{staticClass:"scanpay-wary"},[e("v-uni-view",{staticClass:"scanpay-box"},[e("v-uni-view",{staticClass:"scanpay-name-box"},[e("v-uni-view",{staticClass:"scanpay-name"},[a._v(a._s(a.name))])],1),e("v-uni-view",{staticClass:"ercode-box"},[e("tki-qrcode",{ref:"qrcode",staticClass:"code-pic",attrs:{size:a.size,unit:a.unit,show:a.show,loadMake:a.loadMake,val:a.codeVal},on:{result:function(t){arguments[0]=t=a.$handleEvent(t),a.resultqr.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"ercode-wrang"},[a._v("扫一扫，向我付款")])],1)],1)},c=[]}}]);