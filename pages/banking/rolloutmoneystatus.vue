<template>
	<view class="status-box">
		<view class="status-title">
			提现详情
		</view>
		<view class="status-item">
			<view class="status-item-title">
				提现金额:
			</view>
			<view class="status-item-status">
				{{rollStatus.frozen_amount}} 元
			</view>
		</view>
		<view class="status-item">
			<view class="status-item-title">
				提现手续费:
			</view>
			<view class="status-item-status">
				{{rollStatus.fee}}.00元/笔
			</view>
		</view>
		<view class="status-item">
			<view class="status-item-title">
				剩余余额
			</view>
			<view class="status-item-status">
				{{rollStatus.amount}} 元
			</view>
		</view>
		<view class="status-item">
			<view class="status-item-title">
				提现时间
			</view>
			<view class="status-item-status">
				{{rollStatus.create_time}}
			</view>
		</view><view class="status-item">
			<view class="status-item-title">
				提现银行卡
			</view>
			<view class="status-item-status">
				{{rollStatus.cash_out_bank}}
			</view>
		</view>
		<view class="status-item">
			<view class="status-item-title">
				提现银行卡号
			</view>
			<view class="status-item-status">
				{{rollStatus.cash_out_bank_no|cardFilters}}
			</view>
		</view>
		<view class="status-item">
			<view class="status-item-title">
				提现状态
			</view>
			<view class="status-item-status">
				{{rollStatus.state|stateFilter}}
			</view>
		</view><view class="status-item">
			<view class="status-item-title">
				状态更新时间
			</view>
			<view class="status-item-status">
				{{rollStatus.update_time}}
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
			rollId:'',
			rollStatus:'',
		}
	},
	onLoad() {
		this.rollId=this.$Route.query.id;
		uni.request({
			method:'POST',
		    url: this.$baseUrl+'/api/v1/pri/my/getWithdrawalAmountById', 
		    data: {
				id:this.rollId
		    },
		    header: {
				'token': uni.getStorageSync('token'),
				'Content-Type':'application/json' //自定义请求头信息
		    },
		    success: (res) => {
				console.log(res)
				if(res.data.code==0){
					this.rollStatus=res.data.data;
				}
		       
		    }
		});	
	},
	methods:{
	
	},
	filters:{
		cardFilters:function(val){
			return val.slice(0,4)+'*********'+val.slice(-4);
		},
		stateFilter:function(val){
			if(val==='REFUSE'){
				return '拒绝'
			}else if(val==='PAYMENT_FAILED'){
				return '打款失败'
			}else if(val==='SUCCESSFUL_PAY'){
				return '打款成功'
			}else if(val==='PAYMENT_IN_PROGRESS'){
				return '打款中'
			}else if(val==='ACCEPTED'){
				return '受理中'
			}
		}
	}
}
</script>

<style>
	.status-box{
		padding: 40upx 20upx;
	}
.status-title{
	text-align: center;
	font-size: 30upx;
	font-weight: 600;
	padding-bottom: 40upx;
}
.status-item{
	padding: 0 20upx;
	line-height: 60upx;
	/* border-bottom:2upx solid #A3A3A3 ; */
}
.status-item-title{
	display: inline-block;
	width: 200upx;
	font-size: 28upx;
	}
.status-item-status{
	display: inline-block;
	width: 400upx;
	font-size: 28upx;
}
</style>
