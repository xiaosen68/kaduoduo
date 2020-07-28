<template>
	<view class="consume-box">
		<view class="credit-box">
				<view class="bank-icon">
					<image class="bank-img" src="../../static/img/yinlian.png" mode=""></image>
				</view>
				<view class="bank-name-box">
					<view >
						招商银行
					</view>
					<text class="bank-name">招商银行信用卡</text>
				</view>
				<view class="bank-class">
					支付信用卡
				</view>
				<view class="bank-num">
					<text>6233</text>
					<text>****</text>
					<text>****</text>
					<text>8898</text>
				</view>
		</view>
		<view class="btn-box">
			<view type="" class="next-btn" @click="payFn">确认支付</view>
		</view>
		<uni-popup ref="popupcenter" type="center">
			<view class="popupCenter-box">
				<view class="yanzhen-title">
					<input type="number" number maxlength="6" placeholder="输入验证码" class=" sign-input yanz-input" v-model="verifyNum" />
					 <button type="primary" plain="true" class="yanz-btn" :disabled="verifyDisabled" @click="sendyanzheng()">{{sendVerify}}</button>
				</view>
				<view class="next-btn popupbtn" @click="payBtnFn">
					购买并寄售
				</view>
			</view>		
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default{
		components:{
			uniPopup,		
		},
		data() {
			return {
				buyList:[],
				allGoodsjs:0,
				allGoodscj:0,
				sendVerify: '获取验证码',
				verifyDisabled:false,
				verifyNum:'',
			}
		},
		onLoad: function () {
			// this.buyList=JSON.parse(this.$Route.query.buyList)
			// this.allGoodsjs=this.$Route.query.allGoodsjs
			// this.allGoodscj=this.$Route.query.allGoodscj
			// console.log(this.buyList)
		},
		methods: {
			sendyanzheng:function(){
				this.sendVerify=60;
				this.verifyDisabled=true;
				let setyanzheng='';
				 setyanzheng=setInterval(()=>{
					if(this.sendVerify>0){
						this.sendVerify--;
					}else{
						this.sendVerify="重新获取验证码"
						clearInterval(setyanzheng)
						this.verifyDisabled=false;
					}
				
				},1000)
					
			},
			payFn:function(){
				let _this=this;
				_this.$refs.popupcenter.open();
				// uni.showLoading({
				// 	title:'支付中',
				// 	success() {
				// 		 // uni.hideLoading()
				// 		_this.$Router.push({name:'state'})
				// 	}
				// })
				
			},
			payBtnFn:function(){
				this.$Router.push({name:'state'})
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
	.credit-box{
		width: 600upx;
		/* height: 400upx; */
		border-radius: 20upx;
		margin: 20upx auto;
		padding: 20upx ;
		background-color: #3f51b5;
		color: #FFFFFF;
		font-size: 32upx;
		font-weight: 600;
	}
	.deposit-box{
		width: 600upx;
		border-radius: 20upx;
		margin: 20upx auto;
		padding: 20upx ;
		background-color: #A3A3A3;
		color: #FFFFFF;
		font-size: 32upx;
		font-weight: 600;
	}
	.bank-icon{
		display: inline-block;
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		background-color: #FFFFFF;
		text-align: center;
		line-height: 90upx;
		vertical-align: middle;
	}
	.bank-img{
		width: 80upx;
		height: 80upx;
		vertical-align: middle;
	}
	.bank-name-box{
		padding-left: 20upx;
		/* padding-bottom: 40upx; */
		display: inline-block;
		width: 200upx;
		vertical-align: middle;
	}
	.bank-name{
		font-size: 24upx;
	}
	.bank-num{
		display: flex;
		width: 600upx;
		margin: 20upx auto;
		justify-content: space-between;
	}
	.bank-class{
		display: inline-block;
		width: 280upx;
		text-align: right;
		}
	.next-btn{
				height: 80upx;
				width: 600upx;
				text-align: center;
				margin: 0 auto;
				line-height: 80upx;
				border-radius: 80upx 80upx;
				border: solid 2upx #a3a3a3;
				background-color: #d71518;
				color: #FFFFFF;
			}
	.popupbtn{
		width: 400upx;
		margin-top: 30upx;
	}
	.btn-box{
		margin-top: 90upx;
	}
	.popupCenter-box{
		width: 500upx;
		padding: 40upx ;
		text-align: center;
		border-radius: 20upx;
	}
	.sign-input{
		display: inline-block;
		width: 200upx;
		line-height: 60upx;
		height: 96upx;
		vertical-align: middle;
		border-bottom: #9fa0a0 2upx solid;
		
	}
	.yanz-btn{
		display: inline-block;
		vertical-align: bottom;
		width: 160upx;
		margin-left: 40upx;
		height: 76upx;
		line-height: 76upx;
		font-size: 28upx;
		padding: 0 20upx;
	}
	.yanzhen-title{
		
	}
</style>
