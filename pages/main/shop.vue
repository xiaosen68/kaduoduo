<template>
	<view class="shop-box">
		
		<router-link class="shop-center" to="{name:'shopcenter'}">个人中心</router-link>
		<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
		    <swiper class="swiper-box" @change="change" autoplay="true">
		        <swiper-item v-for="(item ,index) in info" :key="index">
		            <view class="swiper-item">
		                <image :src="item.url" mode="widthFix" class="banner-img"></image>
		            </view>
		        </swiper-item>
		    </swiper>
		</uni-swiper-dot>
		<view class="card-shop-box">
			<view class="shop-class-box">
				<view class="shop-class-item" v-for="(item,index) in shopClass" @click="sleceShopClass(item.name)">
					<image class="shop-class-icon" :src="'../../static/img/shop/'+item.icon" mode="" ></image>
					<view >{{item.label}}</view>
				</view>
			</view>
			<view class="store-box" >
				<view class="shop-list">
					<router-link :to="{name:'goodsstatus',params: {id: item.id}}" class="store-item" v-for="(item,index) in goodsList"  >
						<image class="good-pic" :src="item.productUrl" mode="aspectFit"></image>
						<view class="goods-name">
							{{item.productName}}
						</view>
						<view class="goods-prices">
							<view class="goods-cj-pri">
								价格：{{item.transactionPrice|numberFilters}} 
							</view>
						</view>
						<view class="goods-prices">
							<view class="goods-cj-pri">
								团购：{{ item.transactionPrice*item.discount |numberFilters}} 
							</view>
						</view>
					</router-link>
				</view>
	
				<view class="get-more" @click="getmoreFn">
					{{getMoretext}}
				</view>
			</view>
			
		</view>
		
		<uni-popup ref="popup" type="center">
			<view class="popupCenter-box">
				{{popupCenterMessage}}
			</view>
		</uni-popup>
		
	</view>
</template>

<script>
import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
export default {
    components: {
		uniSwiperDot
  
  },
	data (){
		return{
			 info: [
				{
					content: '内容 A',
					url:'../../static/img/1.jpg'
				}, {
					content: '内容 B',
					url:'../../static/img/2.jpg'
				}, {
					content: '内容 C',
					url:'../../static/img/3.jpg'
				}],
			current: 0,
			currentPage:1,
			totalSize:0,
			size:20,
			labelName:'',
			totalPage:0,
			mode: 'default',
			popupCenterMessage:'',
			goodsList:[],
			getMoretext:'点击加载更多',
			shopClass:[
				{
					label:'海淘优品',
					name:'海淘优品',
					icon:'haitao.png',
				},{
					label:'营养保健',
					name:'保健品',
					icon:'baojian.png'
				},{
					label:'美妆护理',
					name:'美妆护理',
					icon:'meizhuang.png',
				},{
					label:'茶品天下',
					name:'茶品天下',
					icon:'chapin.png',
				},{
					label:'工艺珠宝',
					name:'工艺珠宝',
					icon:'zhubao.png',
				},{
					label:'服饰箱包',
					name:'服饰箱包',
					icon:'fushi.png',
				},{
					label:'百货超市',
					name:'百货超市',
					icon:'baihuo.png',
				},{
					label:'数码家电',
					name:'数码家电',
					icon:'shuma.png',
				},{
					label:'母婴呵护',
					name:'母婴呵护',
					icon:'muying.png',
				},{
					label:'更多分类',
					name:'',
					icon:'shopmore.png',
				},
			]
		}
	},
	onLoad() {
		this.getPruductList();
	},
	methods:{
		   change:function(e) {
		            this.current = e.detail.current;
		        },
		trigger:function(e){
			// console.log(e)
		},
		sleceShopClass:function(labelName){
			// if(label=='更多分类'){
			// 	this.labelName='';
			// }else{
			// 	this.labelName=labelName;
			// }
			this.labelName=labelName;
			this.currentPage=1;
			this.getPruductList();
		},
		// 获取产品列表
		getPruductList:function(){
			uni.showLoading({
				title:'加载中',
					mask:true
			})
			uni.request({
				method:'POST',
			    // url: this.$baseUrl+'/api/v1/pri/shop/generalProduct',
				// http://47.96.91.58:8088/huqing/ucandy/mall/product
				url:this.$baseUrl+'/ucandy/mall/product',
				 // url: this.$baseUrl+'/api/v1/pri/shop/getProductList',
			    data: {
					"productType":'GENERAL',//MAILING、GENERAL
					"lable":this.labelName,
					"page":this.currentPage,
					"size":this.size
			
			    },
			    header: {
					'token': uni.getStorageSync('token'),
					'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					if(res.statusCode==200){
						
						if(res.data.current_page==1){
							this.goodsList=res.data.list;
						}else{
							this.goodsList=this.goodsList.concat(res.data.list);
						}
						this.totalSize=res.data.total_size;
						this.currentPage=res.data.current_page;
						this.totalPage=res.data.total_page;
						if(this.currentPage<this.totalPage){
							this.getMoretext="点击加载更多"
						}else{
							this.getMoretext="没有更多数据了"
						}
					}
			    },
				complete: () => {
					uni.hideLoading()
				}
			});
		},
		// 获取更多产品
		getmoreFn:function(){
			if(this.totalPage>this.currentPage){
				this.currentPage++;
				this.getPruductList();
			}else{
				this.getMoretext="没有更多数据了"
			}
			
		},
	},
	onPullDownRefresh(){
		// console.log('刷新')
	},
	onReachBottom:function(){
		
	},
	filters:{
		numberFilters:function(val){
			if(val){
				return val.toFixed(2)
			}else{
				return val
			}
		}
	}
}
</script>

<style>
	.shop-class-box{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
	}
	.shop-class-item{
		width: 120upx;
		font-size: 14upx;
		margin: 0 10upx;
		text-align: center;
	}
	.shop-class-icon{
		border-radius: 10upx;
		width: 100upx;
		height: 100upx;
	}
	.swiper-item{
		text-align: center;
	}
	.banner-img{
		width: 720upx;
	}
	.shop-box{
		padding: 20upx;
	}
	.card-shop-box{
	}
	.shop-title{
		font-size: 34upx;
		font-weight: 600;
		line-height: 2em;
	}
	.shop-list{
		display: flex;
		flex-wrap:wrap;
		/* justify-content: flex-start; */
		justify-content: space-around;
		/* display: inline-block; */
		width: 700upx;
		
	}
	.shop-list2{
		display: inline-block;
		width: 330upx;
		vertical-align: top;
	}
	.shop-item{
		width: 290upx;
		text-align: center;
		padding: 20upx;
		border: 10upx solid #f4f8fb;
	}
	.shop-img{
		width: 270upx;
		height: 180upx;
	}
	.shop-name{
		font-size: 26upx;
		padding-left: 40upx;
		text-align: left;
	}
	.jishou-title{
		margin-top: 40upx;
	}
	.shop-center{
		width: 160upx;
		height: 50upx;
		font-size: 20upx;
		line-height: 50upx;
		text-align: center;
		border: 1px #e5e9ef solid;
		position: fixed;
		right: 0;
		top: 140upx;
		color:#FF0000;
		background-color: #FFFFFF;
		border-radius: 40upx 0 0 40upx;
		z-index: 99;
	}
	/* *{
		box-sizing: border-box;
	} */
	.popupCenter-box{
		width: 400upx;
		padding: 40upx ;
		text-align: center;
		border-radius: 20upx;
	}
	.cardstore{
		height: 90vh;
	}
	.store-box{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		box-sizing: border-box;
		width: 710upx;
		padding: 20upx;
		text-align: center;
		margin-bottom: 200upx;
	}
	.store-item{
		width: 300upx;
		display: inline-block;
		border: solid 10upx #f4f8fb;
		/* text-align: left; */
	}
	.good-box{
		width: 330upx;
		height: 376upx;
		border-radius: 20upx;
		background-color: #FFFFFF;
		text-align: center;
		padding: 20upx 20upx;
		margin-bottom: 20upx;
	}
	.goodboxlastleft{
		position: relative;
		left: -176upx;
	}
	.good-pic{
		width: 280upx;
		height: 230upx;
	}
	
	
	.good-value{
		display: inline-block;
		font-size: 20upx;
		color: #fb2e03;
	}
	.trans-pri{
		display: inline-block;
		font-size: 24upx;
		color: #fb2e03;
	}
	.trans-price-box{
		text-align: left;
	}
	.input-btn{
		display: inline-block;
		position: relative;
		left: 0upx;
		text-align: center;
		vertical-align: middle;
		font-size: 30upx;
	}
	.input-btn-box{
		display: inline-block;
		width: 56upx;
		line-height: 20upx;
		vertical-align: middle;
		font-size: 30upx;
	}
	.in-btn{
		display: inline-block;
		font-size: 30upx;
		vertical-align: middle;
		
	}
	.buy-car{
		width: 100%;
		/* height: 110upx; */
		position: fixed;
		bottom: 100upx;
		background-color: #FFFFFF;
	}
	.car-but{
		width: 48upx;
		height: 40upx;
		border-radius: 50%;
		background-color: #FFFFFF;
		margin: 0 auto;
		text-align: center;
		line-height: 20upx;
		position: relative;
		top: -0;
	}
	.arrowps{
		display: block;
		position: relative;
		top: -10upx;
		
	}
	.buy-car-statistic{
		position: fixed;
		bottom: 100upx;
		width: 100%;
		height: 104upx;
		background-color: #FFFFFF;
		border-top: 2upx solid #ececf4;
	}
	.circle-filled-icon{
		margin-left:16upx;
		margin-right: 10upx;
		line-height: 104upx;
		
	}
	.buy-car-product{
		min-height: 80upx;
		/* height: 200upx; */
		
		padding-bottom: 100upx;
		}
	.buy-car-product-arrow{
		height: 80upx;
	}
	.statistic-pri{
		display: inline-block;
		width: 280upx;
		font-size: 28upx;
		margin-left: 60upx;
		vertical-align: middle;
		color: #333333;
		line-height: 40upx;
		
	}
	
	.buy-button{
		display: inline-block;
		background-color: #FF3333;
		color: #FFFFFF;
		text-align: center;
		line-height: 104upx;
		width: 260upx;
		position: absolute;
		right: 0upx;
	}
	.product-item{
		width: 100%;
		height: 80upx;
		/* line-height: 80upx; */
	}
	.buy-filled-icon{
		margin-left:16upx;
		margin-right: 10upx;
		/* line-height: 80upx; */
		
	}
	.product-item-name{
		display: inline-block;
		overflow: hidden;
		width: 200upx;
		/* max-width: 80upx; */
		/* overflow: hidden; */
		font-size: 32upx;
		vertical-align: middle;
		/* line-height: 80upx; */
		word-break: break-all;  /* break-all(允许在单词内换行。) */
		text-overflow: ellipsis;  /* 超出部分省略号 */
		
	}
	.product-pri{
		display: inline-block;
		width: 480upx;
		font-size: 24upx;
		color: #D41C26;
		/* line-height: 80upx; */
	}
	.product-cj{
		display: inline-block;
		font-size: 32upx;
		width: 260upx;
		/* line-height: 80upx; */
	}
	.statistic-cj{
		display: block;
		font-size: 32upx;
	}
	.store-list1{
		display: inline-block;
		width: 350upx;
		/* border: solid 20upx #f4f8fb;*/
	} 
	.store-list2{
		display: inline-block;
		width: 350upx;
		/* border: solid 20upx #f4f8fb; */
	}
	.goods-prices{
		/* display: inline-block; */
		text-align: left;
		padding-left: 20upx;
		/* width: 166upx; */
	}
	.goods-name{
		text-align: left;
		font-size: 28upx;
		font-weight: 600;
		width: 240upx;
		padding-left: 20upx;
	}
.goods-cj-pri{
	
		text-align: left;
		font-size: 22upx;
		color: #D41C26;
		line-height: 2em;
		
}

	.input-box-wrap{
		/* display: inline-block; */
		/* width: 160upx; */
		text-align: left;
		padding-left: 20upx;
	}
	.get-more{
		text-align: center;
		line-height: 40upx;
		margin-top: 40upx;
		color: #D41C26;
	}
</style>
