<template>
	<view class="shop-order-list-box">
		<load-refresh
			  ref="loadRefresh"
			  :heightReduce="10"
			  :backgroundCover="'#F3F5F5'"
			  :pageNo="currPage"
			  :totalPageNo="totalPage" 
			  @loadMore="loadMore" 
			  @refresh="refresh" class="">
			<view slot="content-list">
				<router-link class="shop-order-item" to="{name:'shoporderitem'}" v-for="item in showList">
					<view class=" order-category-box">
						<text class="order-category">{{item.passageWayName}}</text> 
						<text class="order-date-box">{{item.orderTime}}</text>
					</view>
					<view class="order-status-box">
						<text class="order-money">
							{{item.totalTransactionPrice}}
						</text>
						<text class="order-status">
							已支付
						</text>
						
					</view>
				</router-link>
			</view>
			
		</load-refresh>		  
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
				showList: [], // 数据集
				currPage: 1, // 当前页码
				totalPage: 1 ,// 总页数
		}
	},
	onLoad() {
	this.getxiaofei();	
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
		},
		getxiaofei:function(){
				  uni.request({
				  	method:'POST',
				      url: this.$baseUrl+'/api/v1/pri/my/generalOrderStore', 
				      data: {
						  size:this.size,
						  page:this.currPage
				      },
				      header: {
				  		'token':uni.getStorageSync('token'),
				  		'Content-Type':'application/json' //自定义请求头信息
				      },
				      success: (res) => {
				  		console.log(res)
				  		if(res.data.code==0){
							this.showList=res.data.data.list;
							this.totalPage=res.data.total_page;
				  		}else if(res.data.code==-1){
				  			this.popupMessage=res.data.msg;
				  		}else{
				  		}
				         
				      }
				  });	
		},
	},
}
</script>

<style scoped>
	page{
		background-color:#f4f8fb;
	}
	.shop-order-item{
		display: flex;
		justify-content: space-between;
		width: 660upx;
		padding: 20upx;
		line-height:1.5em ;
		/* height: 160upx; */
		margin: 0 auto;
		margin-top: 20upx;
		background-color: #FFFFFF;
	}
	
	.order-category-box{
		width: 300upx;
	}
	.order-status-box{
		width: 300upx;
		text-align: right;
	}
	.order-category{
		font-size: 32upx;
		font-weight: 600;
	}
	.order-date-box{
		display: block;
		font-size: 24upx;
		color: #A3A3A3;
	}
	.order-money{
		display: block;
		color: #007AFF;
		font-size: 24upx;
	}
	.order-status{
		font-size: 32upx;
		color: #FF0000;
	}
</style>
