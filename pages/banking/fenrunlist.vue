<template>
	<view class="fenrun-box">
		<view class="card-list">
			    <!-- 数据列表 -->
				<!-- <router-link to="{name:fenrunstatus}" class="fen-item-box" v-for="item in list"> -->
				<view  class="fen-item-box" v-for="item in list">
					<view class="date-box">
						<text class="date1">{{item.revenueReason}}</text>
						<view>{{item.revenueTime}}</view>
					</view>
					<view class="fen-state">
						<text class="fen1">+{{item.revenueAmount}}</text>
						<view>来自尾号<text>{{item.orderUserPhone|cardFilters}}</text>的收益</view>
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
			totalPage: 0 ,// 总页数
			size:20,
			popupMessage:''
		}
	},
	onLoad() {
		 uni.startPullDownRefresh();
	},
	methods:{
		getfenrunFn:function(){
			uni.request({
				method:'POST',
			    url: this.$baseUrl+'/api/v1/pri/my/getUserRevenue', 
			    data: {
				page:this.currPage,
				size:this.size
			    },
			    header: {
					'token': uni.getStorageSync('token'),
					'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					console.log(res)
					
					if(res.data.code==0){
						if(res.data.data.current_page==1){
							this.list=res.data.data.list;
						}else{
							this.list=this.list.concat( res.data.data.list);
						}
						this.currPage=res.data.data.current_page;
						this.totalPage=res.data.data.total_page;
					}else if(res.data.code==-1){
						this.popupMessage=res.data.msg;
						uni.showToast({
						    title: this.popupMessage,
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
		}
	},
	// 下拉刷新
	onPullDownRefresh(){
		 this.currPage=1;
		 this.getfenrunFn();
		  console.log(this.list)
	},
	// 上拉加载更多
	onReachBottom(){
		if(this.currPage<this.totalPage){
			this.currPage++;
			this.getfenrunFn();
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
		cardFilters:function(card){
			return card.substring(7)
		},
	}
}
</script>

<style>
.fen-item-box{
	padding: 20upx 40upx;
	/* height: 100upx; */
	background-color: #FFFFFF;
	border-bottom: 8upx solid #f4f8fb;
	margin-top: 14upx;
}
.date1{
	font-size: 40upx;
	font-weight: 600;
}
.date-box{
	display: inline-block;
	width: 280upx;
}
.fen-state{
	display: inline-block;
	text-align: right;
	width: 380upx;
	vertical-align: top;
}
.fen1{
	font-size: 46upx;
	color: #ff5500;
}
</style>
