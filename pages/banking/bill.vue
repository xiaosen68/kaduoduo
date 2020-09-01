<template>
	<view class="">
		<view class="card-list-type">
			<view class="card-list-credit " :class="{'type-select':cardtype}"  @click="typeclick(1)">
				消费订单
			</view>
			<view class="card-list-deposit":class="{'type-select':!cardtype}"  @click="typeclick(2)">
				寄售订单
			</view>
		</view>
		<view class="bill-box-list">
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
					<router-link :to="{name:url,params:{}}" class="bill-detil" v-for="(item,index) in showList">
						<view class="bill-date">
							<view class="bill-type">
								{{item.passageWayName}}
							</view>
							<text class="bill-date-box">{{item.orderTime}}</text>
						</view>
						<view class="bill-status">
							<view class="bill-money">
								{{item.totalTransactionPrice}}
							</view>
							<text>状态</text>
						</view>
					</router-link>
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
			cardtype:true, 
			url:'gmbilldetial',
			showList:'',
		}
	},
	onLoad(){
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
	  typeclick(n){
	  	if(n===1){
	  		this.cardtype=true;
	  		this.addcredit=true;
			this.url='gmbilldetial'
			this.getxiaofei()
	  		
	  	}else if(n===2){
	  		this.cardtype=false;
	  		this.addcredit=false;
			this.url='jsbilldetial';
			this.getjishou();
	  	}
	  },
	  getxiaofei:function(){
		  uni.request({
		  	method:'POST',
		      url: this.$baseUrl+'/api/v1/pri/shop/generalOrderByUserId', 
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
	  getjishou:function(){
		  uni.request({
		  	method:'POST',
		      url: this.$baseUrl+'/api/v1/pri/shop/mailingOrderByUserId', 
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
	  }
	}
}
</script>

<style>
	.card-list-type{
		position: fixed;
		/* top: 84upx; */
		border-top: 2upx solid #f4f8fb;
		text-align: center;
		z-index: 4;
		background-color: #FFFFFF;
	}
	.card-list-credit{
		display: inline-block;
		width: 374upx;
		line-height: 100upx;
		border-bottom:2upx solid #f4f8fb;
	}
	.card-list-deposit{
		display: inline-block;
		width: 374upx;
		line-height: 100upx;
		border-left: 2upx solid #f4f8fb;
		border-bottom:2upx solid #f4f8fb;
	}
	.type-select{
		color: #d91829;
		border-bottom:2upx solid #d91829;
	}
	.bill-detil{
		display: flex;
		justify-content: space-around;
		padding: 20upx 30upx;
		border-bottom:12upx solid #f4f8fb;
		font-size: 30upx;
		background-color: #ffff;
	}
	.bill-date{
		display: inline-block;
		width: 300upx;
	}
	.bill-type{
		font-weight: 600;
	}
	.bill-status{
		display: inline-block;
		width: 300upx;
		text-align: right;
	}
	.bill-date-box{
		font-size: 24upx;
		color: #a3a3a3;
	}
	.bill-money{
		color: #2969d3;
	}
	.bill-box-list{
		padding-top: 100upx;
	}
</style>
