
import modules from './modules'
import Vue from 'vue'
import Router, {RouterMount} from '../js_sdk/hhyang-uni-simple-router/index.js'
// import store from '../store'
Vue.use(Router)
//初始化
const router = new Router({
	//#ifndef H5
	encodeURI:true,
	//#endif
	//#ifdef H5
	encodeURI:false,
	//#endif
    routes: [...modules]//路由表
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
	if(to.name==='index'||to.name==='sign'||to.name==='forgetpassword'||to.name==='uploadapp'){
		next()
	}else{
		if(uni.getStorageSync('token')!==''){
			// console.log(uni.getStorageSync('token'))
			next()
		}else{
			next({
						  name:'index',
						  params:{
							  msg:'未登录'
						  },
						  NAVTYPE: 'push'
					  })
			}
	}
})
// 全局路由后置守卫
router.afterEach((to, from) => {
})
export default router