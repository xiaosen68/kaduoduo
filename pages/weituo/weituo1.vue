<template>
	<view class="consume-box">
		<view class="consume-money">
			<text class="consume-money-cj">购买金额：<text class="consume-money-num">￥: {{allGoodscj}}</text></text>
			<text>挂牌金额：<text class="consume-money-num">￥: {{allGoodsjs}}</text></text>
		</view>
		<view class="bank-card">
			<view class="bank-name-box">
				<image src="../../static/img/model1.png" mode="" class="bank-head"></image>
				<view class="bank-name">
					<text class="bank-name-strong">招商银行</text>
					<text>信用卡(0968)</text>
				</view>
				<view class="bank-owner-name">
					<text class="bank-owner-strong">王**</text>
					<text>额度40000(元)</text>
				</view>
			</view>
			<view class="bank-plan">
				计划<text class="planing">执行中</text>，预计完成时间<text class="planing">2020-03-23</text>
			</view>
			<view class="bank-date">
				<text class="date-zd">
					账单日:03/10
				</text>
				<text class="date-hk">
					还款日：03/28
				</text>
				<text class="look-plan">
					查看计划列表>
				</text>
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
				allGoodscj:0
			}
		},
		methods: {
			onLoad: function (option) {
				this.buyList = JSON.parse(decodeURIComponent(option.buyList));
				this.allGoodsjs=JSON.parse(decodeURIComponent(option.allGoodsjs));
				this.allGoodscj=JSON.parse(decodeURIComponent(option.allGoodscj));
			}
		},
		computed:{
			
			
		}
	};
	
</script>

<style>
	.consume-box{
		width: 100%;
		min-height: 94vh;
		background-color: #f4f8fb;
		/* text-align: center; */
		padding-top: 30upx;
	
	}
	.consume-money{
		width: 660upx;
		/* height: 80upx; */
		background-color: #FFFFFF;
		margin: 0 auto;
		border-radius: 12upx;
		padding: 20upx 30upx;
		line-height: 52upx;
		font-weight: 400;
		font-size: 28upx;
	}
	.consume-money-cj{
		display: inline-block;
		width: 336upx;
	}
	.consume-money-num{
		font-size: 40upx;
	}
	.bank-card{
		width: 660upx;
		height: 280upx;
		position: relative;
		background-color: #FFFFFF;
		margin: 0 auto;
		margin-top: 20upx;
		border-radius: 12upx;
		padding: 20upx 30upx;
		color: #a4a4a4;
	}
	.bank-head{
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
	}
	.bank-name,.bank-owner-name{
		display: inline-block;
		width: 260upx;
		font-size: 34upx;
		vertical-align: top;
	}
	.bank-owner-name{
		position: absolute;
		right: 30upx;
		text-align: right;
	}
	.bank-name-strong{
		display: block;
		color: #000000;
	}
	.bank-owner-strong{
		display: block;
		color: #333333;
	}
	.bank-name-box{
		padding: 10upx 0;
		border-bottom: 2upx solid #f4f4f4;
	}
	.bank-plan{
		color: #000000;
		text-align: center;
		line-height: 100upx;
		font-size: 30upx;
	}
	.planing{
		color: #ffaa36;
	}
	.bank-date{
		color: #a4a4a4;
		font-size: 28upx;
	}
	.date-zd,.date-hk,.look-plan{
		display: inline-block;
		width: 220upx;
	}
	.look-plan{
		text-align: right;
		color: #1eb5ff;
	}
</style>
