<template>
	<view class="delivery-box">
		<view class="goods-status-box">
			<image src="../../static/img/goods12.png" class="goods-img" mode="widthFix"></image>
			<view class="goods-status">
				<text class="goods-name">精品提货卡</text>
				<text class="goods-price">￥23.32</text>
			</view>
			<view class="goods-all-num">
				<text class="goods-num">X2</text>
				<text class="goods-money">￥2321</text>
			</view>
		</view>	
		<view class="consignee-info-box">
			<view class="consignee-item">
				<view class="consignee-title">
					收货人：
				</view>
				<view class="consignee-status">
					小黑
				</view>
			</view>
			<view class="consignee-item">
				<view class="consignee-title">
					手机号：
				</view>
				<view class="consignee-status" @click="callPhone(123123123123)">
					123123123123
				</view>
			</view>
			<view class="consignee-item">
				<view class="consignee-title">
					地址：
				</view>
				<view class="consignee-status">
					阿斯加德黄金卡山东矿机按时的
				</view>
			</view>
			<view class="copy-btn">
				复制信息
			</view>
		</view>
		<view class="delivery-status-box" v-if="type=='1'">
			<view class="express-number-box">
				<input class="express-input" type="text" value="" placeholder="请填写快递编号" />
				<view class="express-btn">
					确认发货
				</view>
			</view>
		</view>
		<view class="delivery-status-box"v-if="type=='2'">
			<view class="delivery-item">
				<view class="ddelivery-title">
					订单状态：
				</view>
				<view class="delivery-status">
					未确认收货
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	components: {
	},
	data (){
		return{
			type:'',
		}
	},
	methods:{
		callPhone:function(phone){
			uni.makePhoneCall({
			    phoneNumber: phone //仅为示例
			});
		}
	},
	onLoad:function(option){
		this.type=this.$Route.query.type;
		console.log(this.type)
	},
}
</script>

<style scoped>
	page{
		background-color:#f4f8fb;
	}
	.goods-status-box{
		display: flex;
		justify-content: space-between;
		line-height: 1.5em;
		padding: 20upx;
		background-color: #FFFFFF;
	}
	.goods-status{
		width: 300upx;
	}
	.consignee-info-box,.delivery-status-box{
		padding: 20upx;
		margin-top: 20upx;
		background-color: #FFFFFF;
	}
	.consignee-item{
		font-size: 28upx;
		line-height: 1.5em;
	}
	.consignee-title{
		display: inline-block;
		width: 120upx;
		text-align: right;
	}
	.consignee-status{
		display: inline-block;
	}
	.goods-img{
		width: 200upx;
	}
	.copy-btn{
		width: 600upx;
		margin: 20upx auto;
		font-size: 28upx;
		background-color: #FF0000;
		color: #FFFFFF;
		padding: 14upx;
		text-align: center;
		border-radius: 10upx;
	}
	.goods-price,.goods-money{
		display: block;
		color: #FF0000;
	}
	.express-number-box{
		/* width: 400upx; */
		font-size: 24upx;
		display: flex;
		justify-content: space-between;
	}
	.express-input{
		display: inline-block;
		width: 500upx;
		vertical-align: middle;
		border: 2upx solid #bdbdbd;
		padding: 10upx 10upx;
	}
	.express-btn{
		display: inline-block;
		vertical-align: middle;
		width: 100upx;
		padding: 14upx;
		text-align: center;
		background-color: #FF0000;
		color: #FFFFFF;
	}
	.delivery-item{
		font-size: 30upx;
		padding: 10upx 20upx;
		display: flex;
		justify-content: space-between;
	}
	.delivery-status{
		color: #FF0000;
	}
</style>
