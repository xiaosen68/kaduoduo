<template>
	<view class="shop-center-box">
		<router-link class="shop-center" to="{name:'shop'}" navType="pushTab">商城首页</router-link>
		<view class="shop-jifen-box">
			<view class="shop-jifen-wrap">
				<text> 我的积分</text>
				<view class="shop-jifen">{{score}}</view>
			</view>
			<view class="shop-jifen-class">
				<router-link to="{name:'integraldetail'}" class="shop-jifen-item">
					<uni-icons type="star"  color="#ffffff"></uni-icons>
					积分明细
				</router-link>
				<router-link to="{name:'integralexchange'}" class="shop-jifen-item">
					<uni-icons type="compose" class="shop-jifen-icon" color="#ffffff"></uni-icons>
					兑换订单
				</router-link>
				<view class="shop-jifen-item"  @click="popuFn">
					<uni-icons type="help" class="shop-jifen-icon" color="#ffffff"></uni-icons>
					积分规则
				</view>
			</view>
			
		</view>
		<view class="shop-deal-box">
			<view class="shop-deal-title">
				消费订单
				<router-link class="shop-deal-title-btn" to="{name:'shoporderlist'}">
					全部
					<uni-icons type="forward" color="#a3a3a3" style="vertical-align: bottom;"></uni-icons>
				</router-link>
			</view>
			<view class="shop-deal-title" v-if="yishouif">
				已售订单
				<router-link class="shop-deal-title-btn" to="{name:'yishoulist'}">
					全部
					<uni-icons type="forward" color="#a3a3a3" style="vertical-align: bottom;"></uni-icons>
				</router-link>
			</view>
			<!-- <view class="shop-deal-class-box">
				<router-link  class="shop-deal-class-item" to="{name:'delivery'}">
					<image class="shop-deal-icon" src="../../static/img/daifu.png" mode=""></image>
					<view class="">
						去发货
					</view>
				</router-link>
				<router-link class="shop-deal-class-item" to="{name:'shoporderlist'}">
					<image  class="shop-deal-icon" src="../../static/img/daifa.png" mode=""></image>
					<view class="">
						待发货
					</view>
				</router-link>
				<router-link class="shop-deal-class-item" to="{name:'shoporderlist'}">
					<image class="shop-deal-icon" src="../../static/img/daishou.png" mode=""></image>
					<view class="">
						待收货
					</view>
				</router-link>
				<router-link class="shop-deal-class-item" to="{name:'shoporderlist'}">
					<image class="shop-deal-icon" src="../../static/img/daiping.png" mode=""></image>
					<view class="">
						待评价
					</view>
				</router-link>
				
			</view> -->
		</view>
		<router-link class="shop-area-box" to="{name:'selectlocation'}" >
			我的收货地址
			<uni-icons type="forward" color="#a3a3a3" style="vertical-align: bottom; float: right;"></uni-icons>
		</router-link>
		<uni-popup ref="popupcenter" type="center">
			<view class="popupCenter-box">
				<view class="popup-info-item">
					1、平台没消费100元积一分；
				</view>
				<view class="popup-info-item">
					2、积分可用于平台商品兑换(仅限积分商品)；
				</view>
				<view class="popup-info-item">
					3、最终解释权归平台所有；
				</view>
			</view>		
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
export default {
	components:{
		uniPopup
	},
	data (){
		return{
		score:'',
		yishouif:false,
		}
	},
	onLoad() {
	// 是否为商家
	if(uni.getStorageSync('role')=='BUSINESS'){
	this.yishouif=true	
	}else{
		this.yishouif=false
	}
	this.score=uni.getStorageSync('score');	
	},
	methods:{
		popuFn:function(){
			this.$refs.popupcenter.open()
		}
	}
}
</script>

<style scoped>
	page{
		background-color:#f4f8fb;
	}
	.shop-center-box{
		min-height: 90vh;
			background-color:#f4f8fb;
		/* padding-top: 40upx; */
	}
	.shop-center{
		width: 160upx;
		height: 50upx;
		font-size: 20upx;
		line-height: 50upx;
		text-align: center;
		/* background-color: #007AFF; */
		border: 1px #e5e9ef solid;
		position: fixed;
		right: 0;
		top: 140upx;
		color:#FF0000;
		background-color: #FFFFFF;
		border-radius: 40upx 0 0 40upx;
		z-index: 99;
	}
	.shop-jifen-box{
		/* width: 750upx; */
		/* height: 240upx; */
		color: #FFFFFF;
		font-size: 24upx;
		
		background-color: #f13b2f;
		border-radius:0 0 20upx 20upx ;
	}
	.shop-jifen{
		font-size: 60upx;
		
	}
	.shop-jifen-wrap{
		padding: 40upx;
		
	}
	.shop-jifen-class{
		height: 100upx;
		/* border-top: 2upx solid #d1d1d1; */
		display: flex;
		justify-content: space-around;
	}
	.shop-jifen-item{
		/* line-height: 70upx; */
		/* padding-top: 20upx; */
		height: 34upx;
	}
	.shop-jifen-icon{
		vertical-align: bottom;
	}
	.shop-deal-box{
		width: 680upx;
		margin: 0 auto;
		/* height: 200upx; */
		background-color: #FFFFFF;
		border-radius: 40upx;
		margin-top: -30upx;
		padding: 8upx 20upx;
	}
	.shop-deal-title{
		font-size: 24upx;
		line-height: 70upx;
		padding: 0 20upx;
		/* border-bottom: 2upx solid #d1d1d1; */
	}
	.shop-deal-title-btn{
		display: inline;
		float: right;
		color: #A3A3A3;
	}
	.shop-deal-class-box{
		display: flex;
		font-size: 20upx;
		justify-content: space-around;
	}
	.shop-deal-class-item{
		padding: 20upx;
		text-align: center;
		width: 100upx;
		/* font-size: 24upx; */
	}
	.shop-deal-icon{
		width: 50upx;
		height: 50upx;
	}
	.shop-area-box{
		width: 640upx;
		line-height: 100upx;
		background-color: #FFFFFF;
		margin: 20upx auto;
		font-size: 20upx;
		padding: 0 40upx;
		border-radius: 10upx;
	}

	.popupCenter-box{
		width: 600upx;
		margin: 0 auto;
		padding: 20upx ;
		border-radius: 20upx;
		border-radius: 20upx;
		font-size: 28upx;
		line-height: 2em;
		background-color: #FFFFFF;
	}
</style>
