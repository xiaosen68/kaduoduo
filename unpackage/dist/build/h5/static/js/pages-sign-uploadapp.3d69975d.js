(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sign-uploadapp"],{"4f03":function(t,n,o){"use strict";var a;o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return e})),o.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-uni-view",{staticClass:"uploadapp"},[o("v-uni-view",{staticClass:"upload-btn-box"},[o("v-uni-view",{staticClass:"upload-btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.checkVersionToLoadUpdate()}}},[t._v("Android下载")]),o("v-uni-view",{staticClass:"upload-btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.copyFn.apply(void 0,arguments)}}},[t._v("Android下载链接复制")]),o("v-uni-view",{staticClass:"upload-btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.uploadIos()}}},[t._v("Iphone下载")]),o("v-uni-view",{staticClass:"upload-btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.copyIosFn()}}},[t._v("Iphone下载链接复制")])],1)],1)},e=[]},"6ec0":function(t,n,o){"use strict";var a=o("c357"),i=o.n(a);i.a},"8c5e":function(t,n,o){"use strict";o.r(n);var a=o("4f03"),i=o("e5fe");for(var e in i)"default"!==e&&function(t){o.d(n,t,(function(){return i[t]}))}(e);o("6ec0");var u,s=o("f0c5"),d=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"06b4010f",null,!1,a["a"],u);n["default"]=d.exports},a9ba:function(t,n,o){var a=o("24fb");n=a(!1),n.push([t.i,".uploadapp[data-v-06b4010f]{width:100%;height:100vh;padding:%?1?% 0;\n\t/* background-color: #f7f7f7; */background-color:#ff5722}.upload-btn-box[data-v-06b4010f]{padding:%?280?% 0;width:%?600?%;margin:0 auto;margin-top:%?40?%;border-radius:%?20?%\n\t/* background-color: #8F8F94; */}.upload-btn[data-v-06b4010f]{width:%?400?%;margin:%?40?% auto;padding:%?16?% 0;border-radius:%?8?%;border:#fff %?2?% solid;text-align:center;color:#fff}.upload-box-small[data-v-06b4010f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.upload-btn-small[data-v-06b4010f]{width:%?200?%;margin:%?40?% auto;padding:%?10?% %?10?%;border-radius:%?8?%;border:#fff %?2?% solid;text-align:center;color:#fff}.upload-href-title[data-v-06b4010f]{font-size:%?20?%;color:#fff}.upload-href[data-v-06b4010f]{border:%?2?% solid #fff;padding:%?6?%;font-size:%?20?%;color:#fff}.popupCenter-box[data-v-06b4010f]{width:%?600?%;\n\t/* height: 200upx; */background-color:#fff;border-radius:%?10?%;padding:%?20?%}.image_yindao[data-v-06b4010f]{position:fixed;top:%?0?%;width:100vw;height:100vh}.yindao_image[data-v-06b4010f]{width:100%;height:100%}",""]),t.exports=n},c357:function(t,n,o){var a=o("a9ba");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=o("4f06").default;i("422e7b4e",a,!0,{sourceMap:!1,shadowMode:!1})},cdb6:function(t,n,o){"use strict";o("acd8"),o("e25e"),o("ac1f"),o("466d"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{apkPath:"",showYindao:!1,iosPath:""}},onLoad:function(){var t=navigator.userAgent.toLowerCase();"micromessenger"==t.match(/MicroMessenger/i)?this.showYindao=!0:this.showYindao=!1},onShow:function(){this.getIosFn()},methods:{clickyindao:function(){this.showYindao=!1},getIosFn:function(){var t=this;uni.request({method:"GET",url:this.$baseUrl+"/ucandy/mall/m/app/ios/link",header:{"Content-Type":"application/json"},success:function(n){200==n.statusCode?t.iosPath=n.data.url:uni.showToast({title:"ios安装包链接获取失败",duration:2e3})},fail:function(){}})},copyFn:function(t){this.$copyText("http://47.96.91.58:8088/huqing/apkUrl/youlitang.apk").then((function(t){uni.showToast({title:"复制成功,去浏览器下载",duration:3e3})}))},checkVersionToLoadUpdate:function(){return this.$copyText("http://47.96.91.58:8088/huqing/apkUrl/youlitang.apk").then((function(t){uni.showToast({title:"复制成功,去浏览器下载",duration:3e3})})),!1},copyIosFn:function(){var t=this;uni.request({method:"GET",url:this.$baseUrl+"/ucandy/mall/m/app/ios/link",header:{"Content-Type":"application/json"},success:function(n){200==n.statusCode?(t.iosPath=n.data.url,t.$copyText(n.data.url).then((function(t){uni.showToast({title:"复制成功,去浏览器下载",duration:3e3})}))):uni.showToast({title:"ios安装包链接获取失败",duration:2e3})},fail:function(){}})},uploadIos:function(){var t=this;uni.request({method:"GET",url:this.$baseUrl+"/ucandy/mall/m/app/ios/link",header:{"Content-Type":"application/json"},success:function(n){200==n.statusCode?(t.iosPath=n.data.url,window.location.href=n.data.url):uni.showToast({title:"ios安装包链接获取失败",duration:2e3})},fail:function(){}})}}};n.default=a},e5fe:function(t,n,o){"use strict";o.r(n);var a=o("cdb6"),i=o.n(a);for(var e in a)"default"!==e&&function(t){o.d(n,t,(function(){return a[t]}))}(e);n["default"]=i.a}}]);