
import modules from './modules'
import Vue from 'vue'
import Router, {RouterMount} from '../js_sdk/hhyang-uni-simple-router/index.js'

Vue.use(Router)
//初始化
const router = new Router({
	encodeURI:true, 
    routes: [...modules]//路由表
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
	if(to.name==='index'||to.name==='sign'){
		next()
	}else{
		uni.getStorage({
		    key: 'userKey',
		    success: function (res) {
		      if(res.data==='hello'){
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
		});
	}
})
// 全局路由后置守卫
router.afterEach((to, from) => {
})
export default router