import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Router, {RouterMount} from './js_sdk/hhyang-uni-simple-router/index.js'
import routerLink from './node_modules/uni-simple-router/component/router-link.vue'


Vue.use(Router)
Vue.component('router-link',routerLink)
Vue.prototype.$store = store
Vue.config.productionTip = false
// 数据请求
Vue.prototype.$goaxios=function(method,url,data){
	return new Promise((resolve,reject)=>{
		uni.request({
			url: url,
			method:method,
			data:data,
			header:{
				'Content-Type':'application/x-www-form-urlencoded'
			},
			success:(res)=>{
				resolve(res.data)
			},
			fail:(err)=>{
				reject(err)
			}
		})
	})
}

App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
// #ifdef H5
	RouterMount(app,'#app');
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif