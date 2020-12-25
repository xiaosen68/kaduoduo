<template>
	<view class="status-box">
		<view class="status-title">
			提现详情
		</view>
		<view class="status-item">
			<view class="status-item-title">
				提现订单号:
			</view>
			<view class="status-item-status">
				{{rollStatus.turnover_order}} 
			</view>
		</view>
		<view class="status-item">
			<view class="status-item-title">
				提现金额:
			</view>
			<view class="status-item-status">
				{{rollStatus.turnover_kou_amount}} 元
			</view>
		</view>
		<view class="status-item">
			<view class="status-item-title">
				消费金额:
			</view>
			<view class="status-item-status">
				{{rollStatus.turnover_amount}} 元
			</view>
		</view>
		<view class="status-item">
			<view class="status-item-title">
				消费费率:
			</view>
			<view class="status-item-status">
				{{rollStatus.rate}} 
			</view>
		</view>
		<view class="status-item">
			<view class="status-item-title">
				营业额来源:
			</view>
			<view class="status-item-status">
				{{rollStatus.turnover_reason}} 
			</view>
		</view>
		<!-- <view class="status-item">
			<view class="status-item-title">
				提现手续费:
			</view>
			<view class="status-item-status">
				3.00元/笔
			</view>
		</view> -->
		
		<view class="status-item">
			<view class="status-item-title">
				消费时间
			</view>
			<view class="status-item-status">
				{{rollStatus.turnover_time}}
			</view>
		</view>
		<view class="status-item">
			<view class="status-item-title">
				提现时间
			</view>
			<view class="status-item-status">
				{{rollStatus.withdrawn_time}}
			</view>
		</view>
		<view class="status-item">
			<view class="status-item-title">
				更新时间
			</view>
			<view class="status-item-status">
				{{rollStatus.update_time}}
			</view>
		</view>
		
		<view class="status-item">
			<view class="status-item-title">
				提现状态
			</view>
			<view class="status-item-status">
				{{rollStatus.turnover_state|stateFilter}}
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
			turnoverOrder:'',
			rollStatus:'',
		}
	},
	onLoad() {
		this.turnoverOrder=this.$Route.query.id;
		uni.request({
			method:'POST',
		    url: this.$baseUrl+'/api/v1/pri/my/getUserTurnoverByOrderNo', 
		    data: {
				orderNo:this.turnoverOrder
		    },
		    header: {
				'token': uni.getStorageSync('token'),
				'Content-Type':'application/json' //自定义请求头信息
		    },
		    success: (res) => {
				// console.log(res)
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
		if(val==='NO_WITHDRAWAL'){
			return '未提现'
		}else if(val==='TO_WITHDRAW_CASH'){
			return '已提现'
		}else if(val==='UNABLE_TO_WITHDRAW_CASH'){
			return '不可提现'
		}else if(val==='REQUEST_FAILED'){
			return '请求失败'
		}else if(val==='PROCESSING'){
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
