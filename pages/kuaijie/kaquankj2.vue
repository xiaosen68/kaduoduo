<template>
	<view class="consume-box">
		<view class="popupCenter-box" @click="changeTd()">
			<view class="popup-title">
				请选择支付通道
			</view>
			<view class="popup-name">
				<image class="popup-icon" src="../../static/img/yinlian.png" mode=""></image>
				<view class=" popup-name-status">
					<view class="popup-name-title">
						快捷TFT
					</view>
					<text class="popup-warning">提示：2小时内到账(不限日期，快速到账)</text>
				</view>
			</view>
			<view class="pupou-tongdao">
				<view class="popup-td-item">
					<text>单笔限额：</text><text>10元-2万元</text>
				</view>
				<view class="popup-td-item">
					<text>每日限额：</text><text>10元-2万元</text>
				</view>
				<view class="popup-td-item">
					<text>交易时间：</text><text>07:00:00-23:00:00</text>
				</view>
				<view class="popup-td-item">
					<text>交易费率：</text><text>10元-2万元</text>
				</view>
				<view class="popup-td-item">
					<text>手续费用：</text><text>10元-2万元</text>
				</view>
				<view class="popup-td-item">
					<text>实际到账：</text><text>10元-2万元</text>
				</view>
			</view>
		</view>		
	</view>
</template>

<script>
	export default{
		data() {
			return {
				buyList:[],
				allGoodsjs:0,
				allGoodscj:0,
				coverif:false
			}
		},
		onLoad: function () {
			// this.buyList=JSON.parse(this.$Route.query.buyList)
			// this.allGoodsjs=this.$Route.query.allGoodsjs
			// this.allGoodscj=this.$Route.query.allGoodscj
			// console.log(this.buyList)
		},
		methods: {
			changeTd:function(){
				this.$Router.push({name:'kaquankj3'})
			}
		},
	};
	
</script>

<style>
	.consume-box{
		width: 100%;
		min-height: 92vh;
		background-color: #f4f8fb;
		/* text-align: center; */
		padding-top: 30upx;
	
	}
	
	.popupCenter-box{
		margin: 0 auto;
		width: 600upx;
		/* height: 200upx; */
		background-color: #FFFFFF;
		border-radius: 10upx;
		padding: 20upx;
	}
	.popup-title{
		text-align: center;
		font-size: 24upx;
	}
	.popup-icon{
		width: 60upx;
		height: 40upx;
	}
	.popup-warning{
		font-size: 20upx;
		color: #ff0000;
	}
	.popup-name-status{
		padding-left: 20upx;
		display: inline-block;
		font-size: 24upx;
		line-height: 1em;
	}
	.pupou-tongdao{
		width: 600upx;
		font-size: 20upx;
		vertical-align: top;
		padding: 20upx 0 20upx 0;
		/* border-bottom: #A3A3A3 solid 2upx; */
	}
	.popup-td-item{
			vertical-align: top;
		display: inline-block;
		width: 300upx;
	}
	.popup-btn-one,.popup-btn-two{
		display: inline-block;
		width: 300upx;
		text-align: center;
		font-size: 24upx;
	}
	
</style>
