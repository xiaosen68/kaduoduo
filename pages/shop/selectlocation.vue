<template>
	<view class="shop-center-box">
		<!-- <router-link class="shop-center" to="{name:'shop'}">商城首页</router-link> -->
		<view class="location-item">
			<view class="user-name">
				<text>收货人：哈哈哈</text>
				<text class="user-tel">13071031213</text>
				<view color="#a3a3a3">国贸创意楼阿斯达所大所</view>
			</view>
			<view class="location-status">
				<label>
					<checkbox value="" :checked="selectDefault" class="select-box" color="#FFCC33"  style="transform:scale(0.6)" /><text>设置默认地址</text>
				</label>
				<text  class="alter-btn" @click="alterlocationFn"> <uni-icons type="compose" color="#a3a3a3" ></uni-icons>修改</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
	data (){
		return{
			selectDefault:true
		}
	},
	methods:{
		alterlocationFn:function(){
			this.$Router.push({
				name:'alterlocation'
			})
		}
	},
}
</script>

<style scoped>
	page{
		background-color:#f4f8fb;
	}
	.select-box{
		font-size: 24upx;
		/* width: 40upx; */
	}
	.location-item{
		width: 660upx;
		/* height: 200upx; */
		font-size: 24upx;
		margin: 0 auto;
		background-color: #FFFFFF;
		border-radius: 20upx;
		padding: 20upx;
		position: relative;
		margin-top: 20upx;
	}
	.alter-btn{
		
		position: absolute;
		right: 20upx;
		color: #A3A3A3;
	}
	.user-name{
		line-height: 2em;
		padding-bottom: 10upx;
		border-bottom: 1upx solid #A3A3A3;
	}
	.user-tel{
		position: absolute;
		right: 20upx;
	}
.location-status{
	margin-top: 10upx;
	line-height: 2em;
}
</style>
