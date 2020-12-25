<template>
	<view class="shop-order-list-box">
		<view class="shop-order-item" @click="goItem(item)" v-for="item in showList">
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
		</view>
	</view>
</template>

<script>
export default {
	data (){
		return{
				showList: [], // 数据集
				currPage: 1, // 当前页码
				totalPage: 1 ,// 总页数
				size:10,
		}
	},
	onLoad() {
		uni.startPullDownRefresh();
	},
	methods:{
		goItem:function(item){
			this.$Router.push({path:'/pages/shop/shoporderitem',
			query:{
				item:JSON.stringify(item),
			}})
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
				  		if(res.data.code==0){
							if(res.data.data.current_page==1){
								this.showList=res.data.data.list;
							}else{
								this.showList=this.showList.concat(res.data.data.list);
							}
							this.currPage=res.data.data.current_page;
							this.totalPage=res.data.data.total_page;
				  		}else if(res.data.code==-1){
							uni.showToast({
							    title: res.data.msg,
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
	},
	onPullDownRefresh(){
		this.currPage=1;
		this.getxiaofei();
	},
	onReachBottom(){
		if(this.currPage<this.totalPage){
			this.currPage++;
			this.getxiaofei();
		}else{
			uni.showToast({
			    title: "没有更多数据了",
				mask:true,
				icon:'none',
			    duration: 2000
			});
		}
	}
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
