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
			  @refresh="refresh" class="">
			  <view slot="content-list">
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
			</load-refresh>
		</view>
		
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
		}
	},
	onLoad() {
		this.refresh();	
	},
	methods:{
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
		  			 this.list.push.apply(this.list,res.data.data.list);
					 this.currPage=res.data.data.current_page;
					 this.totalPage=res.data.data.total_page;
		  		}
		         
		      }
		  });
	  },
	  // 营业额提现
	  turnoverWithdrawal:function(){
		  uni.request({
		  	method:'POST',
		      url: this.$baseUrl+'/api/v1/pri/my/turnoverWithdrawal', 
		      data: {
		  		orderId:'',
		  		cardId:'',
				orderNo:''
		      },
		      header: {
		  		'token': uni.getStorageSync('token'),
		  		'Content-Type':'application/json' //自定义请求头信息
		      },
		      success: (res) => {
		  		console.log(res)
		  		if(res.data.code==0){
		  		}
		         
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
