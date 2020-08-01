import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token:'huqingeyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ4ZGNsYXNzIiwiaWQiOjE3LCJ1c2VyTmFtZSI6IjEzMDcxMDM1MzY5IiwicGhvbmUiOiIxMzA3MTAzNTM2OSIsImlhdCI6MTU5NjE2ODU2MSwiZXhwIjoxNTk2NzczMzYxfQ.eiqzLzv9jF6VHSwBoXy0wOYFZZCIDOxDm7zSrm5WVL0',
		// 使用方法this.$store.state.data1
	},
	mutations: {
		setToken (state,payload){
			state.token=payload
		}
	}
})

export default store
