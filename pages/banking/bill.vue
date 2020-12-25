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
			<!-- 数据列表 -->
			<view @click="gobillStatus(item)" class="bill-detil" v-for="(item,index) in showList">
				<view class="bill-date">
					<view class="bill-type">
						{{item.displayName}}
					</view>
					<text class="bill-date-box">{{item.orderTime}}</text>
				</view>
				<view class="bill-status">
					<view class="bill-money">
						{{item.totalTransactionPrice}}
					</view>
					<text>{{item.stateMsg}}</text>
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
			totalPage:0 ,// 总页数
			size:10,
			cardtype:true, 
			url:'gmbilldetial',
			showList:'',
			typeNmuber:1
		}
	},
	onLoad(){
		// this.getxiaofei();
		 uni.startPullDownRefresh();
	},
	methods:{
	  typeclick(n){
		  this.currPage=1;
	  	if(n===1){
			this.typeNmuber=n;
	  		this.cardtype=true;
	  		this.addcredit=true;
			this.url='gmbilldetial';
			this.getxiaofei()
	  		
	  	}else if(n===2){
			this.typeNmuber=n;
	  		this.cardtype=false;
	  		this.addcredit=false;
			this.url='jsbilldetial';
			this.getjishou();
	  	}
	  },
	  gobillStatus:function(states){
		  if(this.cardtype){
			  this.$Router.push({ name: 'gmbilldetial', params: { states:JSON.stringify(states) }})
		  }else{
			  this.$Router.push({ name: 'jsbilldetial', params: { states:JSON.stringify(states) }})
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
		  		if(res.data.code==0){
					if(res.data.data.current_page==1){
						this.showList=res.data.data.list;
					}else{
						this.showList=this.showList.concat(res.data.data.list);
					}	
					// console.log(this.showList)
					this.currPage=res.data.data.current_page;
					this.totalPage=res.data.data.total_page;
		  		}else if(res.data.code==-1){
		  			this.popupMessage=res.data.msg;
		  		}
		         
		      },
			  complete() {
			  	uni.stopPullDownRefresh();
			  }
		  });	
	  },
	  getjishou:function(){
		  // console.log(2)
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
		  		if(res.data.code==0){
					if(res.data.data.current_page==1){
						this.showList=res.data.data.list;
					}else{
						this.showList=this.showList.concat(res.data.data.list);
					}
		  					
							this.currPage=res.data.data.current_page;
		  					this.totalPage=res.data.data.total_page;
		  		}else if(res.data.code==-1){
		  			this.popupMessage=res.data.msg;
		  		}
		         
		      },
			  complete() {
			  	uni.stopPullDownRefresh();
			  }
		  });	
	  }
	},
	onPullDownRefresh(){
		this.currPage=1;
		if(this.typeNmuber===1){
			this.cardtype=true;
			this.addcredit=true;
			this.url='gmbilldetial'
			this.getxiaofei()
			
		}else if(this.typeNmuber===2){
			this.cardtype=false;
			this.addcredit=false;
			this.url='jsbilldetial';
			this.getjishou();
		}
	},
	// 上滑加载更多
	onReachBottom(){
		if(this.currPage<this.totalPage){
			this.currPage++;
			if(this.typeNmuber===1){
				this.cardtype=true;
				this.addcredit=true;
				this.url='gmbilldetial'
				this.getxiaofei()
				
			}else if(this.typeNmuber===2){
				this.cardtype=false;
				this.addcredit=false;
				this.url='jsbilldetial';
				this.getjishou();
			}
		}else{
			uni.showToast({
			    title: '没有更多数据了',
				mask:true,
				icon:'none',
			    duration: 2000
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
