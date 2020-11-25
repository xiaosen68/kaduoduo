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
				<!-- <router-link to="{name:fenrunstatus}" class="fen-item-box" v-for="item in list"> -->
				<view  class="fen-item-box" v-for="item in list">
					<view class="date-box">
						<text class="date1">{{item.revenue_reason}}</text>
						<view>{{item.revenue_time}}</view>
					</view>
					<view class="fen-state">
						<text class="fen1">+{{item.revenue_amount}}</text>
						<view>来自尾号<text>6345</text>的收益</view>
					</view>
				</view>
				<!-- </router-link> -->
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
			size:20,
		}
	},
	onLoad() {
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
					this.list=res.data.data.list;
					this.currPage=res.data.data.current_page;
					this.totalPage=res.data.data.total_page;
				}else if(res.data.code==-1){
					this.popupMessage=res.data.msg;
				}else{
					console.log(res)
				}
		       
		    }
		});	
	},
	methods:{
		loadMore() {
        console.log('loadMore')
        // 请求新数据完成后调用 组件内loadOver()方法
        // 注意更新当前页码 currPage
        this.$refs.loadRefresh.loadOver()
      },
      // 下拉刷新数据列表
      refresh() {
        console.log('refresh')
      }
	}
}
</script>

<style>
.fen-item-box{
	padding: 20upx 40upx;
	/* height: 100upx; */
	background-color: #FFFFFF;
	margin-top: 14upx;
}
.date1{
	font-size: 40upx;
	font-weight: 600;
}
.date-box{
	display: inline-block;
	width: 200upx;
}
.fen-state{
	display: inline-block;
	width: 440upx;
	vertical-align: top;
}
.fen1{
	font-size: 46upx;
	color: #ff5500;
}
</style>
