
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/sign/sign","pages/sign/uploadapp","pages/main/cardstore","pages/jishou/consume1","pages/jishou/consume2","pages/kuaijie/kaquankj1","pages/kuaijie/kaquankj2","pages/main/scanpayment","pages/main/scanstatus","pages/kuaijie/kaquankj3","pages/shop/shopcenter","pages/shop/goodsstatus","pages/shop/selectlocation","pages/shop/yishoulist","pages/shop/shoporder","pages/shop/selectpay","pages/shop/selectpay1","pages/shop/selectpay2","pages/shop/integraldetail","pages/shop/integralexchange","pages/shop/shoporderlist","pages/shop/shoporderitem","pages/shop/delivery","pages/shop/deliverystatus","pages/shop/alterlocation","pages/password/forgetpassword","pages/states/state","pages/password/changepassword","pages/password/passwordlist","pages/banking/cardlist","pages/banking/addcredit","pages/banking/rollout","pages/banking/yingyee","pages/banking/rolloutmoney","pages/main/seting","pages/main/aboutme","pages/states/waiting","pages/banking/changedeposit","pages/banking/changecredit","pages/banking/fenrunlist","pages/banking/shoukuan","pages/banking/fenrunstatus","pages/main/myteam","pages/main/myteamstatus","pages/shiming/shimingone","pages/main/feilv","pages/main/myinfo","pages/banking/adddeposit","pages/main/shop","pages/main/share","pages/banking/bill","pages/banking/gmbilldetial","pages/banking/jsbilldetial","pages/banking/rolloutmoneylist","pages/banking/rolloutmoneystatus","pages/main/message","pages/main/mycenter","pages/banking/yue","pages/banking/fenrun","pages/main/homepage"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"有粒糖","navigationBarBackgroundColor":"#d41c26","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#7A7E83","selectedColor":"#d41c26","borderStyle":"black","backgroundColor":"#ffffff","fontSize":"12px","list":[{"pagePath":"pages/main/homepage","iconPath":"static/img/tags1.png","selectedIconPath":"static/img/tag1.png","text":"首页"},{"pagePath":"pages/main/shop","iconPath":"static/img/tags2.png","selectedIconPath":"static/img/tag2.png","text":"商城"},{"pagePath":"pages/main/share","iconPath":"static/img/tags3.png","selectedIconPath":"static/img/tag3.png","text":"分享"},{"pagePath":"pages/main/mycenter","iconPath":"static/img/tags4.png","selectedIconPath":"static/img/tag4.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"有粒糖","compilerVersion":"3.0.5","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{"navigationBarTitleText":"登录"}},{"path":"/pages/sign/sign","meta":{},"window":{"navigationBarTitleText":"注册"}},{"path":"/pages/sign/uploadapp","meta":{},"window":{"navigationBarTitleText":"下载app"}},{"path":"/pages/main/cardstore","meta":{},"window":{"navigationBarTitleText":"有粒糖商城"}},{"path":"/pages/jishou/consume1","meta":{},"window":{"navigationBarTitleText":"订单确定"}},{"path":"/pages/jishou/consume2","meta":{},"window":{"navigationBarTitleText":"订单支付"}},{"path":"/pages/kuaijie/kaquankj1","meta":{},"window":{"navigationBarTitleText":"订单确定"}},{"path":"/pages/kuaijie/kaquankj2","meta":{},"window":{"navigationBarTitleText":"选择通道"}},{"path":"/pages/main/scanpayment","meta":{},"window":{"navigationBarTitleText":"扫码支付"}},{"path":"/pages/main/scanstatus","meta":{},"window":{"navigationBarTitleText":"支付状态"}},{"path":"/pages/kuaijie/kaquankj3","meta":{},"window":{"navigationBarTitleText":"确认支付"}},{"path":"/pages/shop/shopcenter","meta":{},"window":{"navigationBarTitleText":"个人中心"}},{"path":"/pages/shop/goodsstatus","meta":{},"window":{"navigationBarTitleText":"商品详情"}},{"path":"/pages/shop/selectlocation","meta":{},"window":{"navigationBarTitleText":"确认收货地址"}},{"path":"/pages/shop/yishoulist","meta":{},"window":{"navigationBarTitleText":"销售订单","enablePullDownRefresh":true}},{"path":"/pages/shop/shoporder","meta":{},"window":{"navigationBarTitleText":"确认订单"}},{"path":"/pages/shop/selectpay","meta":{},"window":{"navigationBarTitleText":"选择支付方式"}},{"path":"/pages/shop/selectpay1","meta":{},"window":{"navigationBarTitleText":"选择支付通道"}},{"path":"/pages/shop/selectpay2","meta":{},"window":{"navigationBarTitleText":"确认支付"}},{"path":"/pages/shop/integraldetail","meta":{},"window":{"navigationBarTitleText":"积分明细","enablePullDownRefresh":true}},{"path":"/pages/shop/integralexchange","meta":{},"window":{"navigationBarTitleText":"积分兑换"}},{"path":"/pages/shop/shoporderlist","meta":{},"window":{"navigationBarTitleText":"订单列表","enablePullDownRefresh":true}},{"path":"/pages/shop/shoporderitem","meta":{},"window":{"navigationBarTitleText":"消费订单"}},{"path":"/pages/shop/delivery","meta":{},"window":{"navigationBarTitleText":"去发货"}},{"path":"/pages/shop/deliverystatus","meta":{},"window":{"navigationBarTitleText":"去发货"}},{"path":"/pages/shop/alterlocation","meta":{},"window":{"navigationBarTitleText":"设置地址"}},{"path":"/pages/password/forgetpassword","meta":{},"window":{"navigationBarTitleText":"重置密码"}},{"path":"/pages/states/state","meta":{},"window":{"navigationBarTitleText":"操作状态"}},{"path":"/pages/password/changepassword","meta":{},"window":{"navigationBarTitleText":"重置密码"}},{"path":"/pages/password/passwordlist","meta":{},"window":{"navigationBarTitleText":"账户安全"}},{"path":"/pages/banking/cardlist","meta":{},"window":{"navigationBarTitleText":"卡片管理","enablePullDownRefresh":true}},{"path":"/pages/banking/addcredit","meta":{},"window":{"navigationBarTitleText":"添加信用卡"}},{"path":"/pages/banking/rollout","meta":{},"window":{"navigationBarTitleText":"转出到余额"}},{"path":"/pages/banking/yingyee","meta":{},"window":{"navigationBarTitleText":"营业额"}},{"path":"/pages/banking/rolloutmoney","meta":{},"window":{"navigationBarTitleText":"提现到储蓄卡"}},{"path":"/pages/main/seting","meta":{},"window":{"navigationBarTitleText":"设置"}},{"path":"/pages/main/aboutme","meta":{},"window":{"navigationBarTitleText":"关于我们"}},{"path":"/pages/states/waiting","meta":{},"window":{"navigationBarTitleText":"敬请期待"}},{"path":"/pages/banking/changedeposit","meta":{},"window":{"navigationBarTitleText":"修改储蓄卡"}},{"path":"/pages/banking/changecredit","meta":{},"window":{"navigationBarTitleText":"修改信用卡"}},{"path":"/pages/banking/fenrunlist","meta":{},"window":{"navigationBarTitleText":"佣金明细","enablePullDownRefresh":true}},{"path":"/pages/banking/shoukuan","meta":{},"window":{"navigationBarTitleText":"收款","navigationBarBackgroundColor":"#FFAA36"}},{"path":"/pages/banking/fenrunstatus","meta":{},"window":{"navigationBarTitleText":"佣金详情"}},{"path":"/pages/main/myteam","meta":{},"window":{"navigationBarTitleText":"我的团队"}},{"path":"/pages/main/myteamstatus","meta":{},"window":{"navigationBarTitleText":"团队列表","enablePullDownRefresh":true}},{"path":"/pages/shiming/shimingone","meta":{},"window":{"navigationBarTitleText":"实名认证"}},{"path":"/pages/main/feilv","meta":{},"window":{"navigationBarTitleText":"我的费率"}},{"path":"/pages/main/myinfo","meta":{},"window":{"navigationBarTitleText":"个人信息"}},{"path":"/pages/banking/adddeposit","meta":{},"window":{"navigationBarTitleText":"添加储蓄卡"}},{"path":"/pages/main/shop","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"商城"}},{"path":"/pages/main/share","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"分享"}},{"path":"/pages/banking/bill","meta":{},"window":{"navigationBarTitleText":"订单","enablePullDownRefresh":true}},{"path":"/pages/banking/gmbilldetial","meta":{},"window":{"navigationBarTitleText":"购买订单详情"}},{"path":"/pages/banking/jsbilldetial","meta":{},"window":{"navigationBarTitleText":"寄售订单详情"}},{"path":"/pages/banking/rolloutmoneylist","meta":{},"window":{"navigationBarTitleText":"提现列表","enablePullDownRefresh":true}},{"path":"/pages/banking/rolloutmoneystatus","meta":{},"window":{"navigationBarTitleText":"提现详情"}},{"path":"/pages/main/message","meta":{},"window":{"navigationBarTitleText":"信息列表"}},{"path":"/pages/main/mycenter","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/banking/yue","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/banking/fenrun","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":true,"titleNView":false}},{"path":"/pages/main/homepage","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","titleNView":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
