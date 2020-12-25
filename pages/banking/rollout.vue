<template>
	<view class="rollout-box">
		<view class="rollout-num-box">
			<text>转出金额</text>
			<view class="rollout-ipt">
				￥<input type="digit" class="rollout-int" v-model="zcmoney" value=""placeholder="请输入转出金额" />
			</view>
			<view class="roll-all-box">
				可转出金额<text>{{kzmoney}}</text>元 
				<text class="roll-all" @click="rolloutMoney">全部转出</text>
			</view>
		</view>
		<button type="" class="roll-btn" @click="rolloutFn">确认转出</button>
		<view class="remindyou">
			注：转出到余额的资金，若提现至银行卡将收取提现服务费，请对资金合理安排
		</view>
		<uni-popup ref="popupcenter" type="center">
			<view class="popupCenter-box">
				{{popupCenterMessage}}
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
			kzmoney:'',//可转出金额,
			zcmoney:'',//转出金额
			popupCenterMessage:'',//弹框信息
		}
	},
	onLoad() {
	// 用户分润初始化
	uni.request({
		method:'GET',
	    url: this.$baseUrl+'/api/v1/pri/my/myRevenueAmount', 
	    data: {
	    },
	    header: {
			'token': uni.getStorageSync('token'),
			'Content-Type':'application/json' //自定义请求头信息
	    },
	    success: (res) => {
			// console.log(res)
			if(res.data.code==0){
				this.kzmoney=res.data.data.revenue;
			}else if(res.data.code==-1){
				this.popupMessage=res.data.msg;
				// this.$refs.popup.open();
			}else{
				// console.log(res)
			}
	       
	    }
	});	
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
			}else if(this.kzmoney<=0){
				this.popupCenterMessage='转出金额太少，请重新填写'
					this.$refs.popupcenter.open();
			}else{
				
			}
		}
	}
}
</script>

<style>
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
</style>
