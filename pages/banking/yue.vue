<template>
	<view class="home-box1">
		<view  class="home-nav">
			<uni-icons type="back" class="home-nav-item home-nav-item1" @click="backFn" color="#ffffff" size="22"></uni-icons>
			<view class="home-title">
				余额
			</view>
			<view class="home-nav-item"  @click="looktixianList">
				提现明细
			</view>
		</view>
		<view class="yue-box">
			<view class="kzfenrun-box">
				<text>当前可提现佣金(元)</text>
				<view class="kzfr-num">{{revenueAmount}}</view>
					<view @click="gorollout" class="roll-out-btn">
					我要结算
					</view>
				<view class="circle">
					
				</view>
			</view>
			
			</view>
			<view class="all-fenrun-box" v-if="ifyue">
				<text class="all-fenrun-num">{{accountBalance.turnover}}</text>
				<view class="">
					营业额(元)
				</view>
				<router-link to="{name:'yingyee'}" class="yingye-out-btn">我要结算</router-link>
			</view>
	</view>
	
		
		
	
</template>

<script>	
export default {
  components: {
  },
	data (){
		return{
			cardtype:true, 
			accountBalance:{},
			revenueAmount:'',//可提现分润
			ifyue:false,
			withdrawableAmount:'',//可提现金额
		}
	},
	onLoad() {
		// 获取账户金额信息
			uni.request({
				method:'GET',
			    url: this.$baseUrl+'/api/v1/pri/my/myAccountBalance', 
			    data: {
			    },
			    header: {
					'token': uni.getStorageSync('token'),
					'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					console.log(res)
					if(res.data.code==0){
						this.accountBalance=res.data.data;
						this.withdrawableAmount=res.data.data.withdrawableAmount;
						// console.log(this.accountBalance)
					}else if(res.data.code==-1){
						this.popupMessage=res.data.msg;
						// this.$refs.popup.open();
					}else{
						// console.log(res)
					}
			       
			    }
			});	
			// 获取可提现分润金额
			this.getfenrun();
			
			
			// console.log(uni.getStorageSync('role'))
			if(uni.getStorageSync('role')=='BUSINESS'){
			this.ifyue=true	
			}else{
				this.ifyue=false
			}
	},
	methods:{
		getfenrun(){
			uni.request({
				method:'GET',
			    // url: this.$baseUrl+'/api/v1/pri/my/getWithdrawableAmountByBeforeThisMonth', 
				url: this.$baseUrl+'/ucandy/mall/a/user/profits/balance',
			    data: {
			    },
			    header: {
					'token': uni.getStorageSync('token'),
					'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					console.log(res)
					if(res.statusCode==200){
						this.revenueAmount=res.data.cashable;//可提现金额
						// cashable 为可提现金额， uncashable 为不可提现金额，processing 为处理中的金额
					}else{
						
					}
					
					
					// if(res.data.code==0){
					// 	this.revenueAmount=res.data.data.revenueAmount;
					// }else if(res.data.code==-1){
					// 	this.popupMessage=res.data.msg;
					// 	// this.$refs.popup.open();
					// }
			       
			    }
			});	
		},
		backFn(){
			this.$Router.back(1)
		},
		gorollout(){
			if(this.revenueAmount<=0){
				uni.showToast({
					icon:'none',
					title:'暂无可提现金额'
				})
			}else{
				this.$Router.push({name:'rolloutmoney'})
			}
		},
		looktixianList(){
			this.$Router.push({name:'rolloutmoneylist'})
		}	

	},
	onShow() {
		this.getfenrun();
	}
}
</script>

<style>
	.home-box1{
		padding-top: var(--status-bar-height);
		/* background-color:#d41c26; */
	}
	.home-nav{
			border: none;
			/* padding-top: var(--status-bar-height); */
			padding: 40upx 20upx 20upx 20upx ;
			font-size: 32upx;
			color:#ffffff;
			background-color:#d41c26;
			display: flex;
			justify-content: space-between;
	}
	.home-nav-item{
		width: 140upx;
		text-align: center;
		font-size: 24upx;
		line-height: 1em;
	}
	.home-nav-item1{
		text-align: left;
	}
	.home-title{
		font-size: 20px;
		line-height: 1em;
	}
.kzfenrun-box{
	background-color: #d91829;
	color: #FFFFFF;
}
.yue-box{
	width: 100%;
	/* height: 600upx; */
	padding-top: 200upx;
	background-color:  #d91829;
	text-align: center;
	/* font-size: 32upx; */
}
.kzfr-num{
	font-size: 60upx;
	line-height: 2em;
}
.roll-out-btn{
	display: inline-block;
	height: 60upx;
	line-height: 60upx;
	width: 180upx;
	padding: 10upx 20upx;
	margin-top: 20upx;
	border: 2upx solid #b7babe;
	background-color: #FFFFFF;
	border-radius: 60upx;
	color: #d91829;
}
.yingye-out-btn{
		display: inline-block;
		height: 60upx;
		line-height: 60upx;
		width: 180upx;
		padding: 10upx 20upx;
		margin-top: 20upx;
		color: #FFFFFF;
		border: 2upx solid #b7babe;
		background-color: #d91829;
		border-radius: 60upx;
	}
.circle{
	width: 100%;
	height: 164upx;
	margin-top: 100upx;
	border-radius: 50% 50% 0 0;
	background-color: #FFFFFF;
}
.all-fenrun-box{
	font-size: 40upx;
	text-align: center;
}
.all-fenrun-num{
	font-size: 60upx;
}
</style>
