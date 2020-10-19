<template>
	<view class="shop-center-box">
		<router-link class="shop-center" to="{name:'shop'}">商城首页</router-link>
		<view class="goods-pictures-box">
			<image :src="goodsStatus.productUrl" mode="widthFix"></image>
		</view>
		<view class="goods-status-box">
			<view class="goods-name-box">
				<text  class="goods-name">{{goodsStatus.productName}}</text>
				<text class="goods-num">数量：{{goodsStatus.amount}}</text>
			</view>
			<view class="goods-price">
				<text class="goods-price-zk">{{goodsStatus.transactionPrice*goodsStatus.discount | price}} 元</text>
				<text class="goods-price-cj">市场价：{{goodsStatus.transactionPrice}}元</text>
			</view>
			<view class="goods-picture-box">
				<image :src="goodsStatus.productDetailsUrl" mode="widthFix"></image>
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
				goodsId:'',
				goodsStatus:'',
		
		}
	},
	onLoad() {
			if(this.$Route.query.id){
				uni.setStorageSync('goodsId',this.$Route.query.id);
				this.goodsId=this.$Route.query.id;	
			}else{
				if(uni.getStorageSync('goodsId')){
					this.goodsId=uni.getStorageSync('goodsId');
				}else{
					uni.navigateTo({
					    delta: 1
					});
				}
				
			}
			
			uni.request({
				method:'POST',
			    url: this.$baseUrl+'/api/v1/pri/shop/generalProductById', 
			    data: {
					id:this.goodsId,
			
			    },
			    header: {
					'token': uni.getStorageSync('token'),
					'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					console.log(res)
					if(res.data.code==0){
					this.goodsStatus=res.data.data;	
					}
			       
			    }
			});
			console.log(this.goodsId)
	},
	methods:{
		change:function(e) {
		         this.current = e.detail.current;
		     },
		goNextFn:function(){
			this.$Router.push({
				name:'shoporder',
				params: { id:this.goodsId }
			})
		}
	},
	filters:{
		price:function(value){
			return value.toFixed(2)
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
	.goods-name-box{
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
	.goods-name{
		/* font-size: 28upx; */
		display: inline-block;
		width: 400upx;
	}
	.goods-num{
		font-size: 20upx;
		color: #A3A3A3;
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
.goods-pictures-box{
	text-align: center;
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
