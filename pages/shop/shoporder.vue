<template>
	<view class="shop-center-box">
		<router-link v-if="locationStatus" :to="{name:'selectlocation',params: {beforePage:'shoporder'}}" class="location-status-box">
			{{locationStatus.region}}{{locationStatus.address_details}}{{locationStatus.customer_name}}{{locationStatus.customer_phone}}
		</router-link>
		<router-link v-else :to="{name:'alterlocation'}" class="location-status-box">
			添加地址
		</router-link>
		<view class="shop-goods">
			<view class="shop-goods-pic">
				<image class="goods-pic" mode="widthFix" :src="product.productUrl" ></image>
				<view class="shop-goods-status">
					<view class="shop-name">
						{{product.productName}}
					</view>
					<view class="shop-money">
						<text> {{product.transactionPrice*product.discount | price}}元</text>
						<text class="shop-yuan-money"> {{product.transactionPrice| price}}元</text>
					</view>
					<view class="input-box-wrap">
						<view class="input-btn">
							<uni-icons class="in-btn" size="24" type="minus" color="#8a8a8a" @click="minus"></uni-icons>
							<input class="input-btn-box" type="number"  v-model="goodNum" maxlength="2" @input="outinput" />
							<uni-icons class="in-btn" size="24" type="plus" color="#fb2e03" @click="plus"></uni-icons>
							<!-- <uni-icons class="in-btn" size="24"  type="plus" color="#fb2e03" @click="plus(index)"></uni-icons> -->
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
		<uni-popup ref="popup" type="center">
			<view class="popupCenter-box">
				{{popupCenterMessage}}
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data (){
			return{
				product:'',
				goodNum:0,
				locationId:'',
				locationStatus:'',
				popupCenterMessage:'',
				allMoney:0,
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
				// console.log(res)
				if(res.data.code==0){
					this.product=res.data.data
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
					// console.log(res)
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
					// console.log(res)
					if(res.data.code==0){
					this.locationStatus=res.data.data.list[0];
					this.locationId=res.data.data.list[0].id;
					}
			       
			    }
			});
		}
		console.log(this.locationStatus)
	},
	methods:{
		// 总价格
		getallMoney:function(){
			this.allMoney=(this.product.transactionPrice*this.product.discount*this.goodNum).toFixed(2)
			console.log(this.allMoney)
		},
		// 减少
		minus:function(){
			if(Math.floor(this.goodNum)>0){
				this.goodNum=Math.floor(this.goodNum)-1;
			}else{
				this.goodNum=0;
			}
			this.getallMoney();
			console.log(this.goodNum);
			// this.addbuyCar();
		},
		// 增加
		plus:function(){
			if(Math.floor(this.goodNum)<99){
				this.goodNum=Math.floor(this.goodNum)+1;
			}else if(Math.floor(this.goodNum)>=99){
				this.goodNum=99;
			}
			this.getallMoney();
			console.log(this.goodNum);
		},
		// 输入框输入数字0~99
		outinput:function(e){
			if(e.detail.value>99){
				e.detail.value=99
			};
			if(e.detail.value<0){
				e.detail.value=0
			}
			this.getallMoney();
			// console.log(this.goodNum)
			// this.addbuyCar();
		},
		selectPay:function(){
			if(!this.locationId){
				this.popupCenterMessage='请添加地址'
					this.$refs.popup.open();
					return false;
			}
			// 
			//
			 // 
			if(this.allMoney>=100&&this.allMoney<=50000){
				this.$Router.push({
					path:'/pages/shop/selectpay',
					query:{
						product:JSON.stringify({
							productName:this.product.productName,
							id:this.product.id,
							transactionPrice:this.product.transactionPrice,
							amount:this.goodNum
						}),
						totalTransactionPrice:this.allMoney,
						addressId:this.locationId,
					}})
			}else if(this.allMoney<100){
					this.popupCenterMessage='请选择商品需大于100元'
						this.$refs.popup.open()
			}else if(this.allMoney>50000){
				this.popupCenterMessage='请选择商品需小于50000元'
					this.$refs.popup.open()
			}
			
		
		}
		
	},
	
	filters:{
		price:function(value){
			if(value){
				return value.toFixed(2)
			}else{
				return value
			}
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
	.popupCenter-box{
		width: 400upx;
		padding: 40upx ;
		text-align: center;
		border-radius: 20upx;
	}
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
