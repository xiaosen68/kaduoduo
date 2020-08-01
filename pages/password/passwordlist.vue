<template>
	<view class="password-box">
		<view class="password-item">
			<view @click="gopwd1">
				<image src="../../static/img/bank/zhanghusafe.png" class="my-app-item-pic" mode=""></image>
				<text>重置登录密码</text>
				<uni-icons type="arrowright" class="my-app-item-arrow"></uni-icons>
			</view>
		</view>
		<view class="password-item">
			<view @click="gopwd2">
				<image src="../../static/img/bank/zhanghusafe.png" class="my-app-item-pic" mode=""></image>
				<text>重置交易密码</text>
				<uni-icons type="arrowright" class="my-app-item-arrow"></uni-icons>
			</view>
		</view>
		
	</view>
</template>

<script>
	import bottomtag from '../components/bottomtag.vue'
	export default{
		components:{
				'bottomtag':bottomtag,
		},
		data() {
			return {
	
			}
		},
		methods: {
			gopwd1:function(){
				this.$Router.push({
					name:'changepassword',
					params:{
						type:'1'
					}
				})
			},
			gopwd2:function(){
				this.$Router.push({
					name:'changepassword',
					params:{
						type:'1'
					}
				})
			}
		}
	}
	
</script>

<style>
.password-item{
	position: relative;
	padding: 20upx 20upx;
	height: 90upx;
	line-height: 80upx;
	font-weight: 600;
	border-bottom: 2upx solid #f4f8fb;
}
.my-app-item-pic{
	width: 80upx;
	height: 80upx;
	margin-right: 28upx;
	vertical-align: middle;
}
.my-app-item-arrow{
	position: absolute;
	right: 40upx;
	/* top: 40upx; */
}
</style>
