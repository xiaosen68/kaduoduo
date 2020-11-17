<template>
	<view class="fenrun-box">
		<view class="card-list">
			<load-refresh
			  ref="loadRefresh"
			  :heightReduce="10"
			  :backgroundCover="'#F3F5F5'"
			  :pageNo="currPage"
			  :totalPageNo="totalPage" 
			  @loadMore="loadMore" 
			  @refresh="refresh" >
			  <view slot="content-list">
			    <!-- 数据列表 -->
				<view  class="roll-item" v-for="item in list" @click="rollmoneystatusFn(item.turnoverOrder)">
					<view class="roll-item-box1">
						<view class="roll-title">
							营业额提现
						</view>
						<view class="roll-time">
							{{item.createTime}}
						</view>
					</view>
					<view class="roll-item-box2">
					<!-- 	<view class="roll-bank">
							到账银行
						</view>
						<view class="roll-bank-card">
							{{item.cashOutBank}}{{item.cashOutBankNo|cardFilter}}
						</view> -->
					</view>
					<view class="roll-item-box3">
						<view class="roll-title roll-money">
							{{item.turnoverKouAmount}}
						</view>
						<view v-if="item.turnoverState=='NO_WITHDRAWAL'" class="roll-btns" @click.stop="turnoverWithdrawal(item)">
							去提现
						</view>
						<view class="roll-state" v-else>
							{{item.turnoverState| cashstateFilter}}
						</view>
					</view>
					
					
				</view>
			  </view>
			</load-refresh>
		</view>
		<uni-popup ref="popup" type="center">
			<view class="popupCenter-box">
				{{popupCenterMessage}}
			</view>
		</uni-popup>
		
	</view>
	
	
	
</template>

<script>	
import loadRefresh from '@/components/load-refresh/load-refresh.vue'
export default {
  components: {
    loadRefresh
  },
	data (){
		return{
			list: [], // 数据集
			currPage: 1, // 当前页码
			totalPage: 1 ,// 总页数
			cardItem:'',//默认银行卡
			depositlist:'',//银行卡列表
			popupCenterMessage:'',
		}
	},
	onLoad() {
		this.refresh();	
		this.getdeposit();
	},
	methods:{
		// 获取储蓄卡
		getdeposit(){
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
						// 默认卡排序
						this.depositlist=res.data.data.sort(function(a,b){return b.defaultCard-a.defaultCard});
						this.cardItem=this.depositlist[0];
					}else if(res.data.code==-1){
						this.popupCenterMessage=res.data.msg;
						this.$refs.popup.open();
					}else{
						console.log(res)
					}
			       
			    }
			});	
		},
		// 加载更多
		loadMore() {
			if(this.currPage<this.totalPage){
				this.currPage++;
				this.getUserTurnover();
			}else{
				return false;
			}
        console.log('loadMore')
        // 请求新数据完成后调用 组件内loadOver()方法
        // 注意更新当前页码 currPage
        this.$refs.loadRefresh.loadOver()
      },
      // 下拉刷新数据列表
      refresh() {
		  this.list=[];
		this.currPage=1;
		this.getUserTurnover();
      },
	  // 获取营业额列表
	  getUserTurnover:function(){
		  uni.request({
		  	method:'POST',
		      url: this.$baseUrl+'/api/v1/pri/my/getUserTurnover', 
		      data: {
		  		page:this.currPage,
		  		size:20
		      },
		      header: {
		  		'token': uni.getStorageSync('token'),
		  		'Content-Type':'application/json' //自定义请求头信息
		      },
		      success: (res) => {
		  		console.log(res)
		  		if(res.data.code==0){
					
		  			 this.list=res.data.data.list;
					 console.log(this.list)
					 this.currPage=res.data.data.current_page;
					 this.totalPage=res.data.data.total_page;
		  		}else if(res.data.code==-1){
					this.popupCenterMessage=res.data.msg;
					   this.$refs.popup.open();
				}
		         
		      }
		  });
	  },
	  // 营业额提现
	  turnoverWithdrawal:function(item){
		  
		  uni.showLoading({
		  	title:'申请中',
		  	mask:true
		  })
		  uni.request({
		  	method:'POST',
		      url: this.$baseUrl+'/api/v1/pri/my/turnoverWithdrawal', 
		      data: {
		  		orderId:item.orderId,
		  		cardId:this.cardItem.id,
				orderNo:item.turnoverOrder,
		      },
		      header: {
		  		'token': uni.getStorageSync('token'),
		  		'Content-Type':'application/json' //自定义请求头信息
		      },
		      success: (res) => {
		  		console.log(res)
		  		if(res.data.code==0){
					this.popupCenterMessage=res.data.data
		  		}else if (res.data.code==-1){
					this.popupCenterMessage=res.data.msg;
				}
		         this.$refs.popup.open();
		      },
			  complete: () => {
			  	uni.hideLoading()
			  }
		  });
	  },
	  rollmoneystatusFn:function(id){
		  this.$Router.push({name:'rolloutmoneystatus',params: { id: id }})
	  }
	},
	filters:{
		cardFilter:function (val){
			return val.slice(-4)
		},
		// 是否可提现
		cashstateFilter:function(val){
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
.roll-btns{
	background-color: #ff0000;
	color: #FFFFFF;
	width: 100upx;
	text-align: center;
	border-radius: 10upx;
	float: right;
}
	.popupCenter-box{
		width: 400upx;
		padding: 40upx ;
		text-align: center;
		border-radius: 20upx;
	}
	.shop-center-box{
		min-height: 90vh;
		background-color:#f4f8fb;
	}
</style>
