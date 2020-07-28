<template>
	<view class="shop-center-box">
		<router-link class="shop-center" to="{name:'shop'}">商城首页</router-link>
		<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
		    <swiper class="swiper-box" @change="change">
		        <swiper-item v-for="(item ,index) in info" :key="index">
		            <view class="swiper-item">
		                {{item.content}}
		            </view>
		        </swiper-item>
		    </swiper>
		</uni-swiper-dot>
		<view class="goods-status-box">
			<view class="goods-name">
				{{goodsName}}
			</view>
			<view class="goods-price">
				<text class="goods-price-zk">{{goodsCj*zhekou | price}} 元</text>
				<text class="goods-price-cj">市场价：{{goodsCj}}元</text>
			</view>
			<view class="goods-picture-box">
				<image src="../../static/img/goods1.png" mode="widthFix"></image>
			</view>
			
		</view>
		<view class="buy-button-box">
			<view class="buy-btn" @click="goNextFn()">
				立即购买
			</view>
		</view>
	</view>
</template>

<script>
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
	export default {
	    components: {
			uniSwiperDot
	  
	  },
		data (){
			return{
				 info: [
					{
						content: '内容 A'
					}, {
						content: '内容 B'
					}, {
						content: '内容 C'
					}],
				current: 0,
				mode: 'default',
				goodsName:'哈哈哈',
				goodsCj:23123,
				zhekou:0.7,
				goodsNum:123,
		
		}
	},
	methods:{
		change:function(e) {
		         this.current = e.detail.current;
		     },
		goNextFn:function(){
			this.$Router.push({
				name:'shoporder'
			})
		}
	},
	filters:{
		price:function(value){
			return Math.floor(value)
		}
	}
}
</script>
<style>
	page{
		background-color:#f4f8fb;
	}
</style>
<style scoped>
	.shop-center-box{
		background-color:#f4f8fb;
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
	.goods-name{
		font-size: 28upx;
		line-height: 3em;
		padding: 0 40upx;
		border-top: 1upx solid #cacaca;
	}
	.goods-price{
		padding: 0 40upx;
		padding-bottom: 10upx;
		border-bottom: 1upx solid #cacaca;
		
	}
.goods-price-zk{
	font-size: 28upx;
	display: inline-block;
	width: 400upx;
	color: #FF0000;
}
.goods-price-cj{
	font-size: 20upx;
	color: #A3A3A3;
	text-decoration: line-through;
}
.goods-status-box{
	padding: 40upx 0;
	
}
.goods-picture-box{
	text-align: center;
	padding-bottom: 200upx;
}
.buy-button-box{
	position: fixed;
	bottom: 0;
	width: 750upx;
	/* height: 200upx; */
	background-color: #FFFFFF;
}
.buy-btn{
	width: 700upx;
	font-size: 24upx;
	margin: 10upx auto;
	color: #FFFFFF;
	background-color: #FF0000;
	text-align: center;
	line-height: 3em;
	border-radius: 20upx;
}
</style>
