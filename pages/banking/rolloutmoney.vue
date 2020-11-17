<template>
	<view class="rollout-box">
		<view class="deposit-list" @click="open1">
			<image class="deposit-icon" :src="defaultCard.bankLogo" mode=""></image>
			<view class="deposit-sttus">
				<view class="deposit-name">
					{{defaultCard.bank}}
				</view>
				<view class="deposit-num">
					尾号{{defaultCard.cardNo|bankCardFilter}}
				</view>
			</view>
			<uni-icons class="forward-icon" type="forward" size="30"></uni-icons>
		</view>
		<view class="rollout-num-box">
			<text>提现金额</text>
			<view class="rollout-ipt">
				￥{{zcmoney}}元
			</view>
			<view class="roll-all-box">
				可提现金额<text>{{zcmoney}}</text>元 
				<!-- <text class="roll-all" @click="rolloutMoney">全部提现</text> -->
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
				<view class="bank-card-item" v-for="item in cardList" @click="changeCard(item)">
					<image class="bank-item-head" :src="item.bankLogo" mode=""></image>
					<view class="bank-card-name">
						<text>{{item.bank}}</text>
						<text>\n</text>
						<text>{{item.cardNo|cardFilter}}</text>
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
			zcmoney:'',//转出金额
			popupCenterMessage:'',//弹框信息
			defaultCard:'',
			cardList:[]
		}
	},
	onLoad() {
		this.zcmoney=this.$Route.query.amount;
		uni.request({
			method:'GET',
		    url: this.$baseUrl+'/api/v1/pri/my/getUserSavingsCard', 
		    data: {
		    },
		    header: {
				'token': uni.getStorageSync('token'),
				'Content-Type':'application/json' //自定义请求头信息
		    },
		    success: (res) => {
				console.log(res)
				if(res.data.code==0){
					this.cardList=res.data.data;
					this.defaultCard=res.data.data.filter((item)=>{
						if(item.defaultCard==1){
							return item
						}
					})[0];
					if(!this.defaultCard){
						this.defaultCard=this.cardList[0];
					}
					console.log(this.defaultCard)
				}else if(res.data.code==-1){
					// this.popupMessage=res.data.msg;
					// this.$refs.popup.open();
				}else{
					console.log(res)
				}
		       
		    }
		});	
	},
	methods:{
	
		rolloutFn:function(){
			if(this.zcmoney==''){
				this.popupCenterMessage='请正确填写金额'
					this.$refs.popupcenter.open();
					
					// 大于20元
			}else if(this.zcmoney<0){
				this.popupCenterMessage='提现金额需不少于20元'
					this.$refs.popupcenter.open();
			}else{
				console.log(this.zcmoney)
				console.log(this.defaultCard.id)
				uni.request({
					method:'POST',
				    url: this.$baseUrl+'/api/v1/pri/my/withdrawalAmount', 
				    data: {
						amount:this.zcmoney,
						cashOutBankId:this.defaultCard.id,
				    },
				    header: {
						'token': uni.getStorageSync('token'),
						'Content-Type':'application/json' //自定义请求头信息
				    },
				    success: (res) => {
						console.log(res)
						if(res.data.code==0){
							this.revenueAmount=res.data.data;
							console.log(this.revenueAmount)
						}else if(res.data.code==-1){
							this.popupMessage=res.data.msg;
							this.$refs.popupcenter.open();
						}else{
						}
				       
				    }
				});	
				
			}
		},
		changeCard:function(item){
			this.defaultCard =item;
			this.$refs.popup1.close();
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
	},
	filters:{
		bankCardFilter:function(str){
			return str.slice(-4)
		},
		cardFilter:function(str){
			return str.slice(0,4)+'******'+str.slice(-4)
		}
	}
}
</script>

<style>
	.bank-card-list{
		width: 710upx;
		/* height: 200upx; */
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
