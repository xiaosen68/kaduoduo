<template>
	<view class="shop-center-box">
		<router-link :to="{name:'selectlocation',params: {beforePage:'shoporder'}}" class="location-status-box">
			{{locationStatus.region}}{{locationStatus.address_details}}{{locationStatus.customer_name}}{{locationStatus.customer_phone}}
		</router-link>
		<view class="shop-goods">
			<view class="shop-goods-pic">
				<image class="goods-pic" mode="widthFix" src="../../static/img/goods1.png" ></image>
				<view class="shop-goods-status">
					<view class="shop-name">
						{{productName}}
					</view>
					<view class="shop-money">
						<text> {{transactionPrice*discount | price}}元</text>
						<text class="shop-yuan-money"> {{transactionPrice}}元</text>
					</view>
					<view class="input-box-wrap">
							<view class="input-btn">
								<uni-icons class="in-btn" size="24" type="minus" color="#8a8a8a" @click="minus()"></uni-icons>
								<input class="input-btn-box" type="number" min="0" v-model="goodsNum" maxlength="2" @input="outinput" />
								<uni-icons class="in-btn" size="24" type="plus" color="#fb2e03" @click="plus()"></uni-icons>
							</view>
					</view>
				</view>
			</view>
		</view>
		<view class="shop-goods-allpri">
			<view class="shop-allpri-money">
				{{allMoney}}元
			</view>
			<view class="shop-allpri-title">
				商品总金额
			</view>
		
		</view>
		<view class="buy-button-box">
			<view class="buy-btn" @click="selectPay">
				确认订单
			</view>
		</view>
	</view>
</template>

<script>
	export default {
	    components: {
		
	  
	  },
		data (){
			return{
				current: 0,
				mode: 'default',
				goodsNum:1,
				goodsId:'',
				goodsStatus:'',
				locationId:'',
				locationStatus:'',
				productName:'',
				discount:'',
				transactionPrice:'',
		}
	},
	onLoad() {
		let _this=this;
		this.goodsId=uni.getStorageSync('goodsId');
		this.locationId=uni.getStorageSync('locationId');
		// 获取产品信息
		uni.request({
			method:'POST',
		    url: this.$baseUrl+'/api/v1/pri/shop/generalProductById', 
		    data: {
				id:this.goodsId,
		    },
		    header: {
				'token': uni.getStorageSync('token'),
				'Content-Type':'application/json' //自定义请求头信息
		    },
		    success: (res) => {
				console.log(res)
				if(res.data.code==0){
					this.productName=res.data.data.productName;
					this.goodsId=res.data.data.id;
					this.transactionPrice=res.data.data.transactionPrice;
					this.discount=res.data.data.discount;
				}
		       
		    }
		});
		// 获取地址信息
		if(this.locationId){
			uni.request({
				method:'POST',
			    url: this.$baseUrl+'/api/v1/pri/my/getUserAddressById', 
			    data: {
					id:this.locationId,
			
			    },
			    header: {
					'token': uni.getStorageSync('token'),
					'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					console.log(res)
					if(res.data.code==0){
					this.locationStatus=res.data.data;	
					}
			       
			    }
			});
			
		}else{
			uni.request({
				method:'POST',
			    url: this.$baseUrl+'/api/v1/pri/my/getUserAddress', 
			    data: {
			    },
			    header: {
					'token': uni.getStorageSync('token'),
					'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					console.log(res)
					if(res.data.code==0){
					this.locationStatus=res.data.data.list[0];	
					}
			       
			    }
			});
		}
		console.log(this.locationStatus)
	},
	methods:{
		// 减少
		minus:function(){
			if(Math.floor(this.goodsNum)>0){
				this.goodsNum=Math.floor(this.goodsNum)-1;
			}else{
				this.goodsNum=0;
			}
			console.log(this.goodsNum);
			// this.addbuyCar();
		},
		// 增加
		plus:function(n){
			
			if(Math.floor(this.goodsNum)<99){
				this.goodsNum=Math.floor(this.goodsNum)+1;
			}else if(Math.floor(this.goodsNum)>=99){
				this.goodsNum=99;
			}
			console.log(this.goodsNum);
			// this.addbuyCar();
		},
		// 输入框输入数字0~99
		outinput:function(e){
			if(e.detail.value>99){
				e.detail.value=99
			};
			if(e.detail.value<0){
				e.detail.value=0
			}
			console.log(e.detail.value)
			// this.addbuyCar();
		},
		selectPay:function(){
			this.$Router.push({
				path:'/pages/shop/selectpay',
				query:{
					product:JSON.stringify({
						productName:this.productName,
						id:this.goodsId,
						transactionPrice:this.transactionPrice,
						amount:this.goodsNum
					}),
					totalTransactionPrice:this.allMoney,
					addressId:this.locationId,
				}})
		}
		
	},
	computed:{
		allMoney:function(){
			return ((this.transactionPrice*this.discount).toFixed(2)*this.goodsNum).toFixed(2)
		}	
	},
	filters:{
		price:function(value){
			return value.toFixed(2)
		}
	}
}
</script>
<style>
	page{
		background-color:#f4f8fb;
	}
</style>
<style scoped>
	
	.shop-center-box{
		min-height: 90vh;
		background-color:#f4f8fb;
	}
	.location-status-box,.shop-goods-allpri,.shop-goods{
		margin-top: 20upx;
		padding: 20upx 20upx;
		background-color: #FFFFFF;
		font-size: 24upx;
	}
	.goods-pic{
		width: 200upx;
		height: 200upx;
		vertical-align: top;
	}

	.shop-goods-status{
		display: inline-block;
		padding-left: 20upx;
		width: 300upx;
		font-size: 24upx;
		line-height: 2em;
	}
	.shop-money{
		color: #FF0000;
	}
	.input-box-wrap{
		display: inline-block;
		width: 160upx;
		text-align: left;
		/* padding-left: 20upx; */
	}
	.in-btn{
		display: inline-block;
		font-size: 30upx;
		vertical-align: middle;
		
	}
	.input-btn-box{
		display: inline-block;
		width: 56upx;
		line-height: 20upx;
		vertical-align: middle;
		font-size: 30upx;
	}
	.input-btn{
		display: inline-block;
		position: relative;
		left: 0upx;
		text-align: center;
		vertical-align: middle;
		font-size: 30upx;
	}
	.shop-goods-allpri{
		position: relative;
	}
	.shop-allpri-title{
		display: inline-block;
		width: 300upx;
	}
	.shop-allpri-money{
		position: absolute;
		right: 40upx;
		color: #FF0000;
	}
	.shop-yuan-money{
		padding-left: 40upx;
		font-size: 20upx;
		text-decoration: line-through;
	}
	.btn-sure-box{
		
	}
	.buy-button-box{
		margin-top: 80upx;
	}
	.buy-btn{
		width: 700upx;
		font-size: 24upx;
		margin: 10upx auto;
		color: #FFFFFF;
		background-color: #FF0000;
		text-align: center;
		line-height: 3em;
		border-radius: 20upx;
	}
</style>
