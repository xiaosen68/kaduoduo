(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-main-share"],{"16b9":function(t,e,i){var n=i("6c4aa");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("37251e2c",n,!0,{sourceMap:!1,shadowMode:!1})},"1bed":function(t,e,i){var n=i("223b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4bec25fc",n,!0,{sourceMap:!1,shadowMode:!1})},"223b":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-popup-share[data-v-5c5db935]{background-color:#fff}.uni-share-title[data-v-5c5db935]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:40px}.uni-share-title-text[data-v-5c5db935]{font-size:14px;color:#666}.uni-share-content[data-v-5c5db935]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:10px}.uni-share-content-box[data-v-5c5db935]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;width:360px}.uni-share-content-item[data-v-5c5db935]{width:90px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:10px 0;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-share-content-item[data-v-5c5db935]:active{background-color:#f5f5f5}.uni-share-image[data-v-5c5db935]{width:30px;height:30px}.uni-share-text[data-v-5c5db935]{margin-top:10px;font-size:14px;color:#3b4144}.uni-share-button-box[data-v-5c5db935]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding:10px 15px}.uni-share-button[data-v-5c5db935]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-border-radius:50px;border-radius:50px;color:#666;font-size:16px}.uni-share-button[data-v-5c5db935]::after{-webkit-border-radius:50px;border-radius:50px}',""]),t.exports=e},"57eb":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-popup-share"},[i("v-uni-view",{staticClass:"uni-share-title"},[i("v-uni-text",{staticClass:"uni-share-title-text"},[t._v(t._s(t.title))])],1),i("v-uni-view",{staticClass:"uni-share-content"},[i("v-uni-view",{staticClass:"uni-share-content-box"},t._l(t.bottomData,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-share-content-item",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.select(e,n)}}},[i("v-uni-image",{staticClass:"uni-share-image",attrs:{src:e.icon,mode:"aspectFill"}}),i("v-uni-text",{staticClass:"uni-share-text"},[t._v(t._s(e.text))])],1)})),1)],1),i("v-uni-view",{staticClass:"uni-share-button-box"},[i("v-uni-button",{staticClass:"uni-share-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[t._v("取消")])],1)],1)},o=[]},"6c4aa":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".mycenter-box[data-v-2503d961]{position:relative}.share-box[data-v-2503d961]{width:%?540?%;margin:0 auto;\r\n\t/* margin-top: 40upx; */height:%?810?%;background-size:%?540?% %?810?%;background-repeat:no-repeat\r\n\t/* background: url(../../static/img/share3.jpg); */}.firstCanvas[data-v-2503d961]{width:%?540?%;height:%?810?%;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.firstCanvas22[data-v-2503d961]{z-index:20}.mova-view[data-v-2503d961]{display:block;width:%?120?%;height:%?120?%\r\n\t/* background-color: #2C405A; */}.share-btn-box[data-v-2503d961]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;padding:%?30?% %?20?% %?10?% %?20?%}.make-haibao[data-v-2503d961],.share-btn[data-v-2503d961]{width:%?200?%;background-color:#d91829;text-align:center;color:#fff;font-size:%?26?%;line-height:2em;height:%?52?%;-webkit-border-radius:%?52?%;border-radius:%?52?%}.popupCenter-box[data-v-2503d961]{width:%?400?%;padding:%?40?%;text-align:center;-webkit-border-radius:%?20?%;border-radius:%?20?%}.bj-box[data-v-2503d961]{\r\n\t\t/* width: 100%;*/padding:%?20?% %?40?%;height:%?200?%;overflow-x:auto}.bj-list[data-v-2503d961]{width:%?1400?%}.bj-item[data-v-2503d961]{width:%?200?%;float:left;height:%?300?%;margin:0 %?10?%}.share-info[data-v-2503d961]{font-size:%?20?%;color:#d91829;text-align:center;margin:%?10?% 0}",""]),t.exports=e},"8cad":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={tkiQrcode:i("6f80").default,uniPopup:i("714b").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"mycenter-box"},[i("v-uni-view",{staticClass:"share-btn-box"},[i("v-uni-view",{staticClass:"make-haibao",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.draw.apply(void 0,arguments)}}},[t._v("制作海报")]),i("v-uni-view",{staticClass:"share-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[t._v("去分享")])],1),i("v-uni-view",{staticClass:"share-info"},[t._v("移动二维码到合适位置，点击制作海报，然后去分享吧。")]),i("v-uni-canvas",{staticClass:"firstCanvas",class:{firstCanvas22:t.canvashow},attrs:{"canvas-id":"firstCanvas"}}),i("v-uni-movable-area",{staticClass:"share-box",staticStyle:{"{backgroundSize":"'270upx 405upx',backgroundRepeat: 'no-repeat'}"},style:{backgroundImage:t.backgroundimage}},[i("v-uni-movable-view",{staticClass:"mova-view",attrs:{x:t.x,y:t.y,direction:"all"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)}}},[i("tki-qrcode",{ref:"qrcode",staticClass:"code-pic",attrs:{size:t.size,unit:t.unit,show:t.show,loadMake:t.loadMake,val:t.codeVal},on:{result:function(e){arguments[0]=e=t.$handleEvent(e),t.resultqr.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"bj-box"},[i("v-uni-view",{staticClass:"bj-list",style:{width:t.bjListWidth}},t._l(t.imgList,(function(e,n){return i("v-uni-image",{staticClass:"bj-item",attrs:{src:e.url,mode:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.selectImg(e)}}})})),1)],1),i("uni-popup",{ref:"popup",attrs:{type:"share"}},[i("uni-popup-share",{attrs:{title:"分享到"},on:{select:function(e){arguments[0]=e=t.$handleEvent(e),t.select.apply(void 0,arguments)}}})],1),i("uni-popup",{ref:"popupcenter",attrs:{type:"center"}},[i("v-uni-view",{staticClass:"popupCenter-box"},[t._v(t._s(t.popupCenterMessage))])],1)],1)},o=[]},"8ff7":function(t,e,i){"use strict";var n=i("4ea4");i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("714b")),o=n(i("e31e")),s=n(i("6f80")),r={components:{uniPopup:a.default,uniPopupShare:o.default,tkiQrcode:s.default},data:function(){return{code:"",bj:"../../static/img/share1.jpg",codeVal:"",size:200,unit:"upx",show:!0,loadMake:!0,x:0,y:0,old:{x:0,y:0},backgroundimage:"",bjj:"",canvashow:!1,popupCenterMessage:"",bjListWidth:"",imgList:[]}},onLoad:function(){this.codeVal=this.$shareUrl+"?phone="+uni.getStorageSync("userPhone")+"&storeName="+uni.getStorageSync("userName"),this.getShareList(),console.log(this.codeVal)},methods:{getShareList:function(){var t=this;uni.request({method:"POSt",url:this.$baseUrl+"/api/v1/pri/my/findSharingPosters",data:{},header:{token:uni.getStorageSync("token"),"Content-Type":"application/json"},success:function(e){0==e.data.code?(t.imgList=e.data.data,t.getListWidth()):e.data.code},complete:function(t){}})},getListWidth:function(){this.backgroundimage="url("+this.imgList[0]+")",this.bjListWidth=220*this.imgList+"upx"},onChange:function(t){this.old.x=t.detail.x,this.old.y=t.detail.y},getQr:function(){this.$refs.qrcode._makeCode()},resultqr:function(t){this.code=t},draw:function(){var t=this,e={},i={},n=uni.createCanvasContext("firstCanvas"),a=uni.createSelectorQuery().select(".firstCanvas"),o=uni.createSelectorQuery().select(".code-pic");o.boundingClientRect((function(t){i=t,console.log(i)})).exec(),a.boundingClientRect((function(t){e=t,console.log(e)})).exec(),console.log(t.bj),uni.getImageInfo({src:t.bj.url,success:function(i){console.log(i),setTimeout((function(){n.drawImage(i.path,0,0,i.width,i.height,0,0,e.width,e.height),n.drawImage(t.code,t.old.x,t.old.y,t.size/2,t.size/2),n.draw()}),10),setTimeout((function(){uni.canvasToTempFilePath({canvasId:"firstCanvas",fileType:"jpg",success:function(e){console.log(e.tempFilePath),t.canvashow=!0,t.popupCenterMessage="长按保存并分享",t.opencenter(),t.bjj=e.tempFilePath}})}),100)},complete:function(t){console.log(t)}})},open:function(){this.$refs.popup.open()},opencenter:function(){this.$refs.popupcenter.open()},select:function(t){this.popupCenterMessage="请长按图片，保存相册后分享",this.opencenter()},savexc:function(t){uni.downloadFile({url:this.imgDownLoadUrl,success:function(e){uni.saveImageToPhotosAlbum({filePath:e.tempFilePath,success:function(){this.popupCenterMessage=t,this.opencenter()},fail:function(){this.popupCenterMessage="保存相册失败，请重试，或长按保存",this.opencenter()}})},fali:function(){}})},selectImg:function(t){console.log(t),this.canvashow=!1,this.backgroundimage="url("+t.url+")",this.bj=t}}};e.default=r},b292:function(t,e,i){"use strict";i.r(e);var n=i("8cad"),a=i("deb5");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("be39");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"2503d961",null,!1,n["a"],s);e["default"]=c.exports},b3cb:function(t,e,i){"use strict";var n=i("1bed"),a=i.n(n);a.a},be39:function(t,e,i){"use strict";var n=i("16b9"),a=i.n(n);a.a},deb5:function(t,e,i){"use strict";i.r(e);var n=i("8ff7"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},e31e:function(t,e,i){"use strict";i.r(e);var n=i("57eb"),a=i("e777");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("b3cb");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"5c5db935",null,!1,n["a"],s);e["default"]=c.exports},e777:function(t,e,i){"use strict";i.r(e);var n=i("f81b"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},f81b:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniPopupShare",props:{title:{type:String,default:"分享到"}},inject:["popup"],data:function(){return{bottomData:[{text:"微信",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png",name:"wx"},{text:"朋友圈",icon:"../../static/img/share/pyq.png",name:"py"},{text:"QQ",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png",name:"qq"},{text:"保存相册",icon:"../../static/img/share/bcxc.png",name:"xc"}]}},created:function(){},methods:{select:function(t,e){var i=this;this.$emit("select",{item:t,index:e},(function(){i.popup.close()}))},close:function(){this.popup.close()}}};e.default=n}}]);