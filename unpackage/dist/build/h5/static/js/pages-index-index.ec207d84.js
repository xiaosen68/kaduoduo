(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0c5b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{popupMessage:"",password:"",phone:""}},onReady:function(){try{this.phone=uni.getStorageSync("phone")}catch(t){}},methods:{isPoneAvailable:function(t){var e=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;return""==t?(this.popupMessage="请输入手机号",!1):!!e.test(t)||(this.popupMessage="手机号格式错误",!1)},login:function(){var t=this;if(!this.isPoneAvailable(this.phone))return uni.showToast({title:this.popupMessage,mask:!0,icon:"none",duration:2e3}),!1;if(""==this.password)return this.popupMessage="请输入密码",uni.showToast({title:this.popupMessage,mask:!0,icon:"none",duration:2e3}),!1;try{uni.setStorageSync("phone",this.phone)}catch(e){}uni.request({method:"POST",url:this.$baseUrl+"/api/v1/pri/login/login",data:{phone:this.phone,password:this.password},header:{"Content-Type":"application/json"},success:function(e){0==e.data.code?(uni.setStorageSync("token",e.data.data.token),uni.setStorageSync("userId",e.data.data.userId),t.$Router.pushTab("/pages/main/homepage")):-1==e.data.code&&(t.popupMessage=e.data.msg,uni.showToast({title:t.popupMessage,mask:!0,icon:"none",duration:2e3}))},fail:function(){t.popupMessage="请稍后重试",uni.showToast({title:t.popupMessage,mask:!0,icon:"none",duration:2e3})}})}}};e.default=a},1127:function(t,e,n){t.exports=n.p+"static/img/niubei.68d86d68.jpg"},6348:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uniPopup:n("714b").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",[a("v-uni-image",{staticClass:"image",attrs:{src:n("1127"),mode:""}})],1),a("v-uni-view",[a("v-uni-text",{staticClass:"company-name"},[t._v("有粒糖商城")])],1),a("v-uni-view",{staticClass:"login-input"},[a("v-uni-input",{staticClass:"input-num uniinput",attrs:{type:"number",maxlength:"11",placeholder:"请输入手机号",value:""},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),a("v-uni-view",{staticClass:"login-input"},[a("v-uni-input",{staticClass:"uniinput",attrs:{type:"text",password:!0,maxlength:"12",placeholder:"请输入密码",value:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("v-uni-view",{staticClass:"btn-grop-box "},[a("v-uni-view",{staticClass:" btn-grop"},[a("router-link",{staticClass:"sign-but",attrs:{to:"{name:sign}"}},[t._v("去注册")]),a("router-link",{staticClass:"forget-psw",attrs:{to:"{name:forgetpassword}"}},[t._v("忘记密码")])],1)],1),a("v-uni-view",{},[a("v-uni-view",{staticClass:"login-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login.apply(void 0,arguments)}}},[t._v("登录")])],1),a("uni-popup",{ref:"popup",staticClass:"popupstyle",attrs:{type:"center"}},[a("v-uni-view",{staticClass:"popupCenter-box"},[t._v(t._s(t.popupMessage))])],1)],1)},o=[]},a303:function(t,e,n){var a=n("b18a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("de0c7cb4",a,!0,{sourceMap:!1,shadowMode:!1})},b18a:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".container[data-v-1af7ec7e]{box-sizing:border-box;padding:%?20?%;width:100%;text-align:center;font-size:%?24?%;line-height:%?48?%}.uniinput[data-v-1af7ec7e]{border:#9fa0a0 %?2?% solid;height:%?100?%;width:%?600?%;text-align:center;margin:0 auto;line-height:%?100?%;border-radius:%?100?% %?100?%;font-size:%?28?%\n\t/* text-indent: 60upx; */}.input-num[data-v-1af7ec7e]{margin-top:%?60?%;margin-bottom:%?20?%}.image[data-v-1af7ec7e]{width:%?166?%;height:%?166?%;margin:%?120?% auto %?20?% auto}.company-name[data-v-1af7ec7e]{font-size:%?40?%;font-weight:700}.btn-grop-box[data-v-1af7ec7e]{display:inline-block;width:%?580?%}.btn-grop[data-v-1af7ec7e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;\n\t/* width: 600upx; */margin-top:%?20?%;margin-bottom:%?40?%\n\t/* text-align: left; */\n\t/* text-indent: 30upx; */}.sign-but[data-v-1af7ec7e],\n.forget-psw[data-v-1af7ec7e]{\n\t/* display: inline-block; */}.forget-psw[data-v-1af7ec7e]{\n\t/* position: relative; */\n\t/* left: 330upx; */}.login-btn[data-v-1af7ec7e]{height:%?80?%;width:%?600?%;font-size:%?24?%;text-align:center;margin:0 auto;line-height:%?80?%;border-radius:%?80?% %?80?%;background-color:#d71518;color:#fff}.popupstyle[data-v-1af7ec7e]{background-color:#fff;padding:%?20?% %?20?%}.popupCenter-box[data-v-1af7ec7e]{width:%?400?%;padding:%?40?%;text-align:center;border-radius:%?20?%}",""]),t.exports=e},bd44:function(t,e,n){"use strict";var a=n("a303"),i=n.n(a);i.a},c58d:function(t,e,n){"use strict";n.r(e);var a=n("0c5b"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},ff1f:function(t,e,n){"use strict";n.r(e);var a=n("6348"),i=n("c58d");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("bd44");var s,u=n("f0c5"),p=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"1af7ec7e",null,!1,a["a"],s);e["default"]=p.exports}}]);