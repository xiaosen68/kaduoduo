import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token:'huqingeyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ4ZGNsYXNzIiwiaWQiOjE3LCJ1c2VyTmFtZSI6IueOi-ajriIsInBob25lIjoiMTMwNzEwMzUzNjkiLCJpYXQiOjE1OTYyNjExMjIsImV4cCI6MTU5Njg2NTkyMn0.OATJexNZBRGJ3YXDNiZWbIqQqXIvH_ALCi-S6OMi5uA',
		// 使用方法this.$store.state.data1
		userName:'',
		userPhone:'',
	},
	mutations: {
		setToken(state,payload){
			state.token=payload;
			// 获取个人基本信息
		},
		setUserInfo(state,data){
			state.userName=data.userName;
			state.userPhone=data.userPhone
		}
	}
})

export default store
