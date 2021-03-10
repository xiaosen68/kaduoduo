<template>
	<view class="rollout-box">
		<view class="deposit-list" @click="opencuxv">
			<image class="deposit-icon" :src="defaultCard.bankLogo" mode=""></image>
			<view class="deposit-sttus">
				<view class="deposit-name">
					{{defaultCard.bank}}
				</view>
				<view class="deposit-num">
					尾号{{defaultCard.cardNo|bankCardFilter}}
				</view>
			</view>
			<view class="loop-btn" @click="opencuxv">
				更换
			</view>
		</view>
		<view class="rollout-num-box">
			 <view class="rollout-box-item">
			 	<view class="rollout-label">可提现金额</view>
			 	<view class="rollout-ipt">
			 		￥{{zcmoney}}元
			 	</view>
			 </view>
			 <view class="rollout-box-item">
			 	<view class="rollout-label">提现手续费</view>
			 	<view class="rollout-ipt">
			 		￥3.0元/笔
			 	</view>
			 </view>
		</view>
		<view class="rollout-num-box" v-if="zcmoney>=100">
			 <view class="rollout-box-item">
			 	<view class="rollout-label">税费</view>
			 	<view class="rollout-ipt">
			 		￥{{sjmoney}}元
			 	</view>
			 </view>
			 <view class="rollout-box-item">
			 	<view class="rollout-label">到账金额</view>
			 	<view class="rollout-ipt">
			 		￥{{dzmoney}}元
			 	</view>
			 </view>
		</view>
		<button type="" class="roll-btn" @click="rolloutFn">确认提现</button>
		
		<uni-popup ref="popupcenter" type="center">
			<view class="popupCenter-box">
				{{popupCenterMessage}}
			</view>		
		</uni-popup>
		<!-- 遮罩层 -->
		<view class="cover" v-if="coverShow" @click="coverClose()">
		</view>
		
	
		<view class="bank-card-list" v-if="cuxvkaListShow">
			<view class="esc-btn">
					<uni-icons type="closeempty" class="close-btn" style="font-size: 50upx;" @click="coverClose"></uni-icons>
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
		
		
		
	</view>
</template>

<script>	
export default {
  components: {
  },
	data (){
		return{
			zcmoney:'',//转出金额
			dzmoney:'',//到账金额
			sjmoney:'',//税金
			popupCenterMessage:'',//弹框信息
			defaultCard:'',
			cardList:[],
			cuxvkaListShow:false,//储蓄卡弹框
			coverShow:false,//遮罩层弹框
		}
	},
	onLoad() {
		this.zcmoney=this.$Route.query.amount;
		// this.zcmoney=201.22
		this.sjmoney=Math.ceil(this.zcmoney*7)/100;
		this.dzmoney=this.zcmoney-this.sjmoney-3;
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
				}else if(res.data.code==-1){
				}
		       
		    }
		});	
	},
	methods:{
	coverClose:function(){
		this.coverShow=false;
		this.cuxvkaListShow=false;
	},
	opencuxv:function(){
		this.cuxvkaListShow=true;
		this.coverShow=true;
	},
		rolloutFn:function(){
			if(this.zcmoney==''){
				this.popupCenterMessage='请正确填写金额';
				uni.showToast({
				    title:this.popupCenterMessage,
					mask:true,
					icon:'none',
				    duration: 2000
				});
				return false;
					// 大于20元
			}else if(this.zcmoney<100){
				this.popupCenterMessage='金额需不少于100元';
				uni.showToast({
				    title:this.popupCenterMessage,
					mask:true,
					icon:'none',
				    duration: 2000
				});
				return false;
			}else{
				uni.showLoading({
					title:'申请中',
						mask:true
				})
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
						if(res.data.code==0){
							this.popupCenterMessage=res.data.data;
							uni.showToast({
							    title:this.popupCenterMessage,
								mask:true,
								icon:'none',
							    duration: 2000
							});
						}else if(res.data.code==-1){
							this.popupCenterMessage=res.data.msg;
							uni.showToast({
							    title:this.popupCenterMessage,
								mask:true,
								icon:'none',
							    duration: 2000
							});
						}else{
						}
				       
				    },
					complete: () => {
						uni.hideLoading()
					}
				});	
				
			}
		},
		changeCard:function(item){
			this.defaultCard =item;
			this.coverClose();
		},
		adddeposit:function(){
			this.coverClose();
			this.$Router.push({name:'adddeposit'})
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
	.loop-btn{
		display: inline-block;
		float: right;
		width: 120upx;
		text-align: left;
		font-size: 30upx;
		color: #3cb4f1;
		line-height: 100upx;
		vertical-align: bottom;
		text-align: center;
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
	background-color: #FFFFFF;
	border-top: solid 20upx #f7f7f7;
	padding: 40upx;
}
.rollout-box-item{
	display: flex;
	justify-content: space-between;
	padding-bottom:20upx ;
	padding-top: 20upx;
	border-bottom: solid 2upx #f7f7f7;
}
.rollout-ipt{
	/* padding-top: 20upx; */
	/* font-size: 60upx; */
	/* border-bottom: solid 2upx #f7f7f7; */
}
.rollout-dao{
	display: inline-block;
	width: 400upx;
	text-align: right;
	font-size: 40upx;
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
.rollout-label{
	color:#595a57;
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
