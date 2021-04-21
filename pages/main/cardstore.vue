<template>
	<view class="cardstore">
		<view class="store-box" >
			<view class="store-item " v-for="(item,index) in goodsList"  >
				<image class="good-pic" :src="item.productUrl" mode="aspectFit"></image>
				<view class="goods-name">
					{{item.productName}}
				</view>
				<view class="goods-prices">
					<view class="goods-js-pri">
						价格：{{item.mailingPrice}}
					</view>
					<view class="goods-cj-pri">
						团购：{{item.transactionPrice}} 
					</view>
				</view>
				<view class="input-box-wrap">
						<view class="input-btn">
							<uni-icons class="in-btn" size="24"  type="minus" color="#8a8a8a" @click="minus(index)"></uni-icons>
							<input class="input-btn-box" type="number" min="0" v-model="item.amount" maxlength="2" @input="outinput" />
							<uni-icons class="in-btn" size="24"  type="plus" color="#fb2e03" @click="plus(index)"></uni-icons>
						</view>
				</view>
			</view>
			
		</view>
		<view class="get-more" @click="getmoreFn">
			{{getMoretext}}
		</view>
		<view class="buy-car">
			<view class="car-but" @click="arrowClick">
				<uni-icons :type="arrow" ></uni-icons>
				<uni-icons :type="arrow" class="arrowps"></uni-icons>
			</view>
			<view class="buy-car-product" :class="[arrow==='arrowup' ? 'buy-car-product-arrow':'']">
				<view class="product-item" v-for="(item, index) in buycarList">
					<uni-icons type="circle-filled"style="font-size: 30upx;
					color: #D41C26" class="buy-filled-icon" @click="circleItemClick(index)" v-if="item.select"></uni-icons>
					<uni-icons type="circle"style="font-size: 30upx" class="buy-filled-icon" v-else @click="circleItemClick(index)"></uni-icons>
					<view class="product-item-name">
						{{item.productName}}
					</view>
					<view class="product-pri">
						<text>价格:￥{{item.mailingPrice*item.amount}}</text>
						<text class="product-cj">团购:￥{{item.transactionPrice*item.amount}} </text>
					</view>
				</view>
			</view>
			<view class="buy-car-statistic">
				
				<uni-icons type="circle-filled"style="font-size: 40upx;
				color: #D41C26" class="circle-filled-icon" @click="circleClick" v-if="circleShow"></uni-icons>
				<uni-icons type="circle"style="font-size: 40upx" class="circle-filled-icon" v-else @click="circleClick"></uni-icons>
				<text>全选</text>
				<view class="statistic-pri">
					<text> 价格:￥{{allGoodsjs}}</text>
					<text class="statistic-cj">团购:￥{{allGoodscj}} </text>
				</view>
				<view @click="nevTo()" class="buy-button">购买并寄售</view>
				
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
	export default{
		components:{
		},
		data() {
			return {
			popupCenterMessage:'',
				goodsList:[],
				arrow:"arrowup",
				circleShow:true,
				buycarList:[
				],
				buyList:[],
				allGoodsjs:0,
				allGoodscj:0,
				size:20,
				getMoretext:'点击加载更多',
				currentPage:1,
				totalSize:0,
			}
		},
		onLoad() {
			// console.log(uni.getStorageSync('token'))
			if(this.$Route.query.pageType){
				uni.setStorageSync('pageType',this.$Route.query.pageType)//从哪里跳转来的。
			}
			
			this.getdeposit();
			this.getcredit();
			this.getgoodsList();
		},
		methods: {
			// 获取产品列表
			getgoodsList:function(){
				uni.request({
					method:'POST',
				    // url: this.$baseUrl+'/api/v1/pri/shop/mailingProduct', 
				  // url: this.$baseUrl+'/api/v1/pri/shop/getProductList',
				  url:this.$baseUrl+'/ucandy/mall/product',
					data: {
						"productType":'MAILING',//MAILING、GENERAL
						"lable":'',
						page:this.currentPage,
						size:this.size
				    },
				    header: {
						'token':uni.getStorageSync('token'),
						'Content-Type':'application/json' //自定义请求头信息
				    },
				    success: (res) => {
						// console.log(res)
						if(res.statusCode==200){
							if(res.data.current_page==1){
								this.goodsList=res.data.list;
							}else{
								this.goodsList=this.goodsList.concat(res.data.list);
							}
							this.currentPage=res.data.current_page;
							this.totalPage=res.data.total_page;
							this.goodsList.map((item)=>{
								item.amount=0
								return item
							})
							
						}else if(res.data.code==-1){
							this.popupMessage=res.data.msg;
							uni.showToast({
							    title:this.popupMessage,
								mask:true,
								icon:'none',
							    duration: 2000
							});
						}else{
						}
				       
				    }
				});	
			},
			// 加载更多
			getmoreFn:function(){
				if(this.currentPage<this.totalPage){
					this.currentPage++;
					this.getgoodsList();
				}else{
					this.getMoretext="没有更多数据了"
				}
				
			},
			// 获取信用卡
			getcredit(){
				uni.request({
					method:'GET',
				    url: this.$baseUrl+'/api/v1/pri/my/getUserCreditCard', 
				    data: {
				    },
				    header: {
						'token': uni.getStorageSync('token'),
						'Content-Type':'application/json' //自定义请求头信息
				    },
				    success: (res) => {
						if(res.data.code==0){
							if(res.data.data.length=0){
								this.popupCenterMessage='请绑定信用卡';
								uni.showToast({
								    title: this.popupCenterMessage,
									mask:true,
									icon:'none',
								    duration: 2000
								});
								this.$Router.push({ name: 'addcredit'})
							}
						}
				       
				    }
				});	
			},
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
						if(res.data.code==0){
							if(res.data.data.length=0){
								this.popupCenterMessage='请绑定储蓄卡';
								uni.showToast({
								    title: this.popupCenterMessage,
									mask:true,
									icon:'none',
								    duration: 2000
								});
									this.$Router.push({ name: 'adddeposit'})
							}
						}
				       
				    }
				});	
			},
			
			
			
			// 输入框输入数字0~99
			outinput:function(e){
				if(e.detail.value>99){
					e.detail.value=99
				};
				if(e.detail.value<0){
					e.detail.value=0
				}
				this.addbuyCar();
			},
			// 减少
			minus:function(n){
				if(Math.floor(this.goodsList[n].amount)>0){
					this.goodsList[n].amount=Math.floor(this.goodsList[n].amount)-1;
				}else{
					this.goodsList[n].amount=0;
				}
				this.addbuyCar();
			},
			// 增加
			plus:function(n){
				if(Math.floor(this.goodsList[n].amount)==0){
					this.goodsList[n].amount=0;
				}
				if(Math.floor(this.goodsList[n].amount)<99){
					this.goodsList[n].amount=Math.floor(this.goodsList[n].amount)+1;
				}else if(Math.floor(this.goodsList[n].amount)>=99){
					this.goodsList[n].amount=99;
				}
				this.addbuyCar();
			},
			// 判断商品个数，设置列表布局
			iflast:function(n){
				if(n%2>0){
					return true 
				}else{
					return false
				}
			},
			// 以选购物品的上拉下拉
			arrowClick:function(){
				if(this.arrow==='arrowup'){
					this.arrow="arrowdown"
				}else{
					this.arrow="arrowup"
				}
				                                                                                                                                                                                                                                
			},
			// 全选按钮
			circleClick:function(){
				this.circleShow = !this.circleShow;
				if(this.circleShow){
					for (var i=0;i<this.buycarList.length;i++){
						this.buycarList[i].select=true;
					}
				}
				this.allGoodsJs();
				this.allGoodsCj();
				
			},
			// 单个商品的选择
			circleItemClick:function(n){
				this.buycarList[n].select= !this.buycarList[n].select
				this.buycarList[n]=Object.assign({}, this.buycarList[n])
				this.allGoodsJs();
				this.allGoodsCj();
				this.ifAllSelect();
			},
			ifAllSelect:function(){
			if(this.buycarList.every((item)=>{
				return item.select
			})){
					this.circleShow=true
				}else{
					this.circleShow=false
				}		
			},
			// 加入购物车
			addbuyCar: function(){
				this.buycarList=[];
				var goods={};
				for(var i=0;i<this.goodsList.length;i++){
					if(this.goodsList[i].amount>0){
						goods=this.goodsList[i];
						goods.select=true
						this.buycarList.push(goods)
					};
				}
				
				this.allGoodsJs();
				this.allGoodsCj();
				this.ifAllSelect();
			},
			// 计算商品总成交额
			allGoodsCj:function(){
				var allcj=0;
				for (var i=0;i<this.buycarList.length;i++){
					if(this.buycarList[i].amount>0){
						if(this.buycarList[i].select){
							allcj+=this.buycarList[i].transactionPrice*this.buycarList[i].amount;
							
						}
					}
				}
				this.allGoodscj= allcj;
			},
			// 设置选择商品的总寄售金额
			allGoodsJs:function(){
				var alljs=0;
				for (var i=0;i<this.buycarList.length;i++){
					if(this.buycarList[i].amount>0){
						if(this.buycarList[i].select){
						alljs+=this.buycarList[i].mailingPrice*this.buycarList[i].amount
						}
					}
				}
				this.allGoodsjs= alljs;
			},
			nevTo:function(){
				this.buyList=this.buycarList.filter((item)=>{
					return item.select;
				})
				if(this.buyList.length>0&&this.allGoodscj>=100&&this.allGoodscj<50000){
					if(uni.getStorageSync('pageType')==='1'){
						this.$Router.push({path:'/pages/jishou/consume1',
						query:{
							buyList:JSON.stringify(this.buyList),
							allGoodsjs:this.allGoodsjs,
							allGoodscj:this.allGoodscj
						}})
					}else if(uni.getStorageSync('pageType')==='3'){
						this.$Router.push({path:'/pages/kuaijie/kaquankj1',
						query:{
							buyList:JSON.stringify(this.buyList),
							allGoodsjs:this.allGoodsjs,
							allGoodscj:this.allGoodscj
						}})
					}else if(uni.getStorageSync('pageType')==='5'){
						this.$Router.push({path:'/pages/kuaijie/kaquankj1',
						query:{
							buyList:JSON.stringify(this.buyList),
							allGoodsjs:this.allGoodsjs,
							allGoodscj:this.allGoodscj
						}})
					}
					
				}else {
					if(this.allGoodscj<100){
						this.popupCenterMessage='选择商品需大于100元'
					}else if(this.allGoodscj>50000){
						this.popupCenterMessage='请选择商品需小于50000元'
					}else{
							this.popupCenterMessage='请选择商品'
					}
					uni.showToast({
					    title: this.popupCenterMessage,
						mask:true,
						icon:'none',
					    duration: 2000
					});
				}
			
			}
		},
		computed:{
			
			
		}
	};
	
</script>

<style>
	*{
		box-sizing: border-box;
	}
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
		flex-wrap: wrap;
		justify-content: space-around;
		box-sizing: border-box;
		width: 750upx;
		padding: 28upx ;
		text-align: center;
		/* margin-bottom: 200upx; */
	}
	.store-item{
		border: solid 10upx #f4f8fb;
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
		bottom: 0;
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
		bottom: 0upx;
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
		display: inline-block;
		text-align: left;
		padding-left: 20upx;
		width: 166upx;
	}
	.goods-name{
		text-align: left;
		font-size: 28upx;
		font-weight: 600;
		width: 240upx;
		padding-left: 20upx;
	}
	.goods-cj-pri{
		display: inline-block;
		text-align: left;
		font-size: 22upx;
		color: #D41C26;
		/* padding-left: 20upx; */
	}
	.goods-js-pri{
		display: inline-block;
		text-align: left;
		font-size: 22upx;
		color: #D41C26;
		/* padding-left: 20upx; */
	}
	.input-box-wrap{
		display: inline-block;
		width: 160upx;
		text-align: left;
		/* padding-left: 20upx; */
	}
	.get-more{
		text-align: center;
		line-height: 40upx;
		margin-top: 20upx;
		color: #D41C26;
		margin-bottom: 200upx;
	}
</style>
