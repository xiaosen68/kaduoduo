<template>
	<view class="fenrun-box">
		<view class="card-list">
			<!-- 数据列表 -->
			<view  class="roll-item" v-for="item in list" @click="rollmoneystatusFn(item.wId)">
				<view class="roll-item-box1">
					<view class="roll-title">
						余额提现
					</view>
					<view class="roll-time">
						{{item.createTime}}
					</view>
				</view>
				<view class="roll-item-box2">
					<view class="roll-bank">
						到账银行
					</view>
					<view class="roll-bank-card">
						{{item.cashOutBank}}{{item.cashOutBankNo|cardFilter}}
					</view>
				</view>
				<view class="roll-item-box3">
					<view class="roll-title roll-money">
						-{{item.frozenAmount}}
					</view>
					<view class="roll-state">
						{{item.state| stateFilter}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>	
export default {
	data (){
		return{
			list: [], // 数据集
			currPage: 1, // 当前页码
			totalPage: 1 ,// 总页数
			size:20,
		}
	},
	onLoad() {
	 uni.startPullDownRefresh();
	},
	methods:{
	  getrollmoneyList:function(){
		  uni.request({
		  	method:'POST',
		      url: this.$baseUrl+'/api/v1/pri/my/getWithdrawalAmountByUserIdAll', 
		      data: {
		  		page:this.currPage,
		  		size:this.size
		      },
		      header: {
		  		'token': uni.getStorageSync('token'),
		  		'Content-Type':'application/json' //自定义请求头信息
		      },
		      success: (res) => {
		  		// console.log(res)
		  		if(res.data.code==0){
					if(res.data.data.current_page==1){
						this.list=res.data.data.list
					}else{
						this.list=this.list.concat(res.data.data.list);
					}
					 this.currPage=res.data.data.current_page;
					 this.totalPage=res.data.data.total_page;
		  		}else{
					uni.showToast({
					    title:res.data.msg ,
						mask:true,
						icon:'none',
					    duration: 2000
					});
				}
		      },
			  complete() {
			  	uni.stopPullDownRefresh();
			  }
		  });
	  },
	  rollmoneystatusFn:function(id){
		  this.$Router.push({name:'rolloutmoneystatus',params: { id: id }})
	  }
	},
	onPullDownRefresh(){
		this.currPage=1;
		this.getrollmoneyList();
	},
	onReachBottom(){
		if(this.currPage<this.totalPage){
			this.currPage++;
			this.getrollmoneyList();
		}else{
			uni.showToast({
			    title: '没有更多数据了',
				mask:true,
				icon:'none',
			    duration: 2000
			});
		}
	},
	filters:{
		cardFilter:function (val){
			return val.slice(-4)
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
.roll-item{
	background-color: #f0f0f0;
	border-bottom: #dedede 2upx solid;
	padding: 20upx 20upx;
	/* height: 120upx; */
}
.roll-item-box1{
	display: inline-block;
	width: 240upx;
	text-align: left;
}
.roll-item-box2{
	display: inline-block;
	width: 260upx;
	text-align: center;
	font-size: 28upx;
	/* color: #a3a3a3; */
}
.roll-item-box3{
	display: inline-block;
	width: 200upx;
	
	text-align: right;
}
.roll-title{
	font-size: 30upx;
	font-weight: 600;
	line-height: 46upx;
	color: #393939;
}
.roll-time{
	font-size: 24upx;
}
.roll-money{
	color: #0065d1;
}
.roll-state{
	font-size: 24upx;
	color: #767676;
}
</style>
