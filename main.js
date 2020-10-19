import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store'
import Router, {RouterMount} from './js_sdk/hhyang-uni-simple-router/index.js'
import routerLink from './node_modules/uni-simple-router/component/router-link.vue'
import { dianji } from './common/common'
Vue.prototype.$dianji = dianji;

Vue.use(Router)
Vue.component('router-link',routerLink)
// Vue.prototype.$store = store
Vue.config.productionTip = false
// Vue.prototype.$baseUrl="/prefix"  //线下接口
Vue.prototype.$baseUrl="http://47.96.91.58:8088/huqing"  //线上接口
Vue.prototype.$shareUrl="http://47.96.91.58:8088/#/pages/sign/sign"  //线上分享接口?phone=12312313&storeName='asdas'


App.mpType = 'app'

const app = new Vue({
	...App,
	// store,
})
// #ifdef H5
	RouterMount(app,'#app');
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif