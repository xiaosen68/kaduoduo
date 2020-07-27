<template>
	<view class="rollout-box">
		<view class="deposit-list" @click="open1">
			<image class="deposit-icon" src="../../static/img/bank/gongshang.png" mode=""></image>
			<view class="deposit-sttus">
				<view class="deposit-name">
					建设银行
				</view>
				<view class="deposit-num">
					尾号9087
				</view>
			</view>
			<uni-icons class="forward-icon" type="forward" size="30"></uni-icons>
		</view>
		<view class="rollout-num-box">
			<text>提现金额</text>
			<view class="rollout-ipt">
				￥<input type="digit" class="rollout-int" v-model="zcmoney" value=""placeholder="请输入转出金额" />
			</view>
			<view class="roll-all-box">
				可提现金额<text>{{kzmoney}}</text>元 
				<text class="roll-all" @click="rolloutMoney">全部提现</text>
			</view>
		</view>
		<button type="" class="roll-btn" @click="rolloutFn">确认提现</button>
		<view class="remindyou">
			注：提现手续费3.0元/笔
		</view>
		<uni-popup ref="popupcenter" type="center">
			<view class="popupCenter-box">
				{{popupCenterMessage}}
			</view>		
		</uni-popup>
		<uni-popup ref="popup1" type="bottom">
			<view class="bank-card-list">
			<view class="esc-btn">
					<uni-icons type="closeempty" class="close-btn" style="font-size: 50upx;" @click="closedia1"></uni-icons>
						选择储蓄卡
					<text class="add-card" @click="adddeposit">添加</text>
				</view>
				<view class="bank-card-item">
					<image class="bank-item-head" src="../../static/img/bank/guangfa.png" mode=""></image>
					<view class="bank-card-name">
						<text>广发银行</text>
						<text>\n</text>
						<text>62**** **** **** 78</text>
					</view>
				</view>
				</view>
		</uni-popup>
	</view>
</template>

<script>	
export default {
  components: {
  },
	data (){
		return{
			kzmoney:12.00,//可转出金额,
			zcmoney:'',//转出金额
			popupCenterMessage:'',//弹框信息
		}
	},
	methods:{
		rolloutMoney:function(){
			this.zcmoney=this.kzmoney;
		},
		rolloutFn:function(){
			if(this.zcmoney>this.kzmoney){
				this.popupCenterMessage='转出金额大于可转出金额'
					this.$refs.popupcenter.open();
					this.zcmoney=this.kzmoney;
			}
		},
		adddeposit:function(){
			this.$refs.popup1.close();
			// uni.navigateTo({
			// 	url:"../banking/adddeposit"
			// })
			this.$Router.push({name:'adddeposit'})
		}, 
		open1:function(){
			         this.$refs.popup1.open()
			}, closedia1:function(done){
				  this.$refs.popup1.close()
			},
	}
}
</script>

<style>
	.bank-card-list{
		width: 710upx;
		height: 200upx;
		background-color: #FFFFFF;
		position: absolute;
		bottom: 0;
		padding: 20upx;
		z-index: 100;
	}
	.esc-btn{
		text-align: center;
		position: relative;
		color: #000000;
		padding-bottom: 20upx;
		border-bottom: 2upx solid #e5e5e5;
	}
	.close-btn{
		position: absolute;
		left: 20upx;
		color: #A3A3A3;
	}
	.add-card{
		position: absolute;
		right: 20upx;
		color: #A3A3A3;
		font-size: 28upx;
	}.bank-card-item{
		width: 750upx;
		height: 100upx;
		padding: 20upx 0;
		border-bottom: 2upx solid #e5e5e5;
	}
	.bank-item-head{
		width: 100upx;
		height: 100upx;
		vertical-align: bottom;
	}
	.bank-card-name{
		display: inline-block;
		margin-left: 30upx;
	}
	.rollout-box{
		width: 100%;
		height: 94vh;
		background-color: #f7f7f7;
	}
.rollout-num-box{
	width: 100%;
	/* height: 200upx; */
	background-color: #FFFFFF;
	border-top: solid 20upx #f7f7f7;
	padding-left: 40upx;
	font-size: 28upx;
	padding-top: 40upx;
}
.rollout-ipt{
	padding-top: 20upx;
	font-size: 60upx;
	border-bottom: solid 2upx #f7f7f7;
}
.rollout-int{
	display: inline-block;
	width: 600upx;
}
.roll-all-box{
	padding-top: 10upx;
	color: #A3A3A3;
	line-height: 60upx;
	height: 60upx;
}
.roll-all{
	color: #d5af24;
	position: absolute;
	right: 40upx;
}
	.roll-btn{
		height: 80upx;
		width: 600upx;
		text-align: center;
		margin: 0 auto;
		line-height: 80upx;
		border-radius: 80upx 80upx;
		background-color: #d71518;
		color: #FFFFFF;
		margin: 80upx auto 20upx auto;
		
	}
	.remindyou{
		padding: 0 40upx;
		font-size: 20upx;
		color: #a3a3a3;
	}
	.popupCenter-box{
		width: 400upx;
		padding: 40upx ;
		text-align: center;
		border-radius: 20upx;
	}
	.popup-pic{
		display: block;
		margin: 0 auto;
		width: 360upx;
		height: 360upx;
	}
	.deposit-list{
		padding: 20upx 40upx;
		background-color: #FFFFFF;
	}
	.deposit-icon{
		display: inline-block;
		width: 100upx;
		height: 100upx;
		margin-right: 20upx;
		vertical-align: middle;
	}
	.deposit-sttus{
		display: inline-block;
		width: 300upx;
		vertical-align: middle;
	}
	.deposit-name{
		font-size: 32upx;
	}
	.deposit-num{
		font-size: 24upx;
		color: #A3A3A3;
	}
	.forward-icon{
		position: fixed;
		vertical-align: middle;
		right: 0;
		line-height: 100upx;
	}
</style>
