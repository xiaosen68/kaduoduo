<template>
	<view class="">
		<view  class="home-nav">
			<uni-icons type="back" class="home-nav-item home-nav-item1" @click="backFn" color="#ffffff" size="24"></uni-icons>
			<view >
				余额
			</view>
			<view class=" home-nav-item"  @click="looktixianList">
				提现明细
			</view>
		</view>
		<view class="yue-box">
			<view class="kzfenrun-box">
				<text>当前可提现余额(元)</text>
				<view class="kzfr-num">{{accountBalance.withdrawableAmount}}</view>
					<view @click="gorollout" class="roll-out-btn">
					我要结算
					</view>
				<view class="circle">
					
				</view>
			</view>
			
			</view>
			<view class="all-fenrun-box">
				<text class="all-fenrun-num">{{accountBalance.totalRevenue}}</text>
				<view class="">
					共累计收益(元)
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
			cardtype:true, 
			accountBalance:{},
		}
	},
	onLoad() {
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
						console.log(this.accountBalance)
					}else if(res.data.code==-1){
						this.popupMessage=res.data.msg;
						// this.$refs.popup.open();
					}else{
						console.log(res)
					}
			       
			    }
			});	
	},
	methods:{
		backFn(){
			// uni.navigateBack({
			// 	delta:1
			// })
			this.$Router.back(1)
		},
		gorollout(){
			this.$Router.push({name:'rolloutmoney',params: { amount:this.accountBalance.withdrawableAmount }})
		},
		looktixianList(){
			this.$Router.push({name:'rolloutlist'})
		}	

	}
}
</script>

<style>
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
	}
	.home-nav-item1{
		text-align: left;
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
