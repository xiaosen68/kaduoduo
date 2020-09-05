<template>
	<view class="shop-center-box">
		<view class="alter-location-box">
			<view class="alter-item">
				<view class="alter-title">
					姓名
				</view>
				<view class="alter-input">
					<input type="text" value="" v-model="name"/>
				</view>
			</view>
			<view class="alter-item">
				<view class="alter-title">
					电话
				</view>
				<view class="alter-input">
					<input type="text" value="" v-model="phone"/>
				</view>
			</view>
			<view class="alter-item">
				<view class="alter-title">
					地区
				</view>
				<view class="alter-input">
					<input type="text" v-model="address" @click="btnClick" class="input-num city-input" value=""placeholder="选择省市" />
				</view>
			</view>
			<view class="alter-item">
				<view class="alter-title">
					详细地址
				</view>
				<view class="alter-input">
					<input type="text" value="" v-model="addressStatus" />
				</view>
			</view>
		</view>
		<view class="select-location">
			<view class="select-title">
				设为默认收货地址
			</view>
			<view class="select-switch">
				 <switch  checked @change="switch1Change" style="transform:scale(0.7)" />
			</view>
		</view>
		<view class="buy-button-box">
			<view class="buy-btn" @click="addlocation">
				{{changeType|changTypeFilter}}
			</view>
		</view>
		<uni-popup ref="popup" type="center">
			<view class="popupCenter-box">
				{{popupMessage}}
			</view>		
		</uni-popup>
		<selectAddress ref='selectAddress' @selectAddress="successSelectAddress" :jiji='3'></selectAddress>
	</view>
</template>

<script>
import selectAddress from '@/components/yixuan-selectAddress/yixuan-selectAddress.vue'
export default {
	components: {selectAddress},
	data (){
		return{
			selectDefault:true,
			isDefault:1,
			address:"",
			name:'',
			phone:'',
			id:'',
			addressStatus:'',
			popupMessage:'',
			changeType:true,
		}
	},
	onLoad() {
		
		if(this.$Route.query.id){
			this.id=this.$Route.query.id
			this.changeType=true;
			uni.request({
				method:'POST',
			    url: this.$baseUrl+'/api/v1/pri/my/getUserAddressById', 
			    data: {
					"id":this.id
			    },
			    header: {
					'token': uni.getStorageSync('token'),
					'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					console.log(res)
					if(res.data.code==0){
							if(res.data.data.is_default==1){
								this.selectDefault=true;
							}else{
								this.selectDefault=false;
							}
						this.isDefault=res.data.data.is_default;
						this.address=res.data.data.region;
						this.name=res.data.data.customer_name;
						this.phone=res.data.data.customer_phone;
						this.addressStatus=res.data.data.address_details;
					}else{
						console.log(res)
					}
			       
			    }
			});	
		}else{
			this.changeType=false;
		this.name=uni.getStorageSync('userName');
		this.phone=uni.getStorageSync('phone');
			
		}
	},
	methods:{
		btnClick() {
		      this.$refs.selectAddress.show()
		  },
		  successSelectAddress(address){ //选择成功回调
		 this.address=address
		      }, 
		   switch1Change:function(e){
			   console.log(e.target.value)
			   console.log(this.ch)
		   },
		   addlocation(){
			   if(this.selectDefault){
				    this.isDefault=1;
			   }else{
				   this.isDefault=0;
			   }
			   // 是否为修改地址
			if(this.changeType){
				uni.request({
					method:'POST',
				    url: this.$baseUrl+'/api/v1/pri/my/updateUserAddress', 
				    data: {
						"id":this.id,
						"customerName":this.name,
						"customerPhone":this.phone,
						"region":this.address,
						"addressDetails":this.addressStatus,
						"isDefault":this.isDefault
				
				    },
				    header: {
						'token': uni.getStorageSync('token'),
						'Content-Type':'application/json' //自定义请求头信息
				    },
				    success: (res) => {
						console.log(res)
						if(res.data.code==0){
						this.popupMessage=res.data.data;
						this.$refs.popup.open();
						}else{
							console.log(res)
						}
				       
				    }
				});	
			}else{
				uni.request({
					method:'POST',
				    url: this.$baseUrl+'/api/v1/pri/my/saveUserAddress', 
				    data: {
									   	"customerName":this.name,
									   	"customerPhone":this.phone,
									   	"region":this.address,
									   	"addressDetails":this.addressStatus,
									   	"isDefault":this.isDefault
				
				    },
				    header: {
						'token': uni.getStorageSync('token'),
						'Content-Type':'application/json' //自定义请求头信息
				    },
				    success: (res) => {
						console.log(res)
						if(res.data.code==0){
						this.popupMessage=res.data.data;
						this.$refs.popup.open();
						
						this.$Router.push({name:'selectlocation'})
						}else{
							console.log(res)
						}
				       
				    }
				});	
			}
			  
		   }
	},
	filters:{
		changTypeFilter:function(val){
			if(val){
				return '修改地址'
			}else{
				return '添加地址'
			}
		}
	}
}
</script>

<style scoped>
	page{
		background-color:#f4f8fb;
	}
	.shop-center-box{
		min-height: 90vh;
		background-color:#f4f8fb;
	}
	.alter-location-box{
		width: 680upx;
		padding: 20upx;
		padding-bottom: 40upx;
		margin:30upx auto;
		background-color: #FFFFFF;
		border-radius: 20upx;
		font-size: 28upx;
	}
	.alter-title{
		display: inline-block;
		width: 160upx;
		padding-left: 20upx;
		vertical-align: middle;
	}
	.alter-item{
		border-bottom: 2upx solid #bbbbbb;	
		line-height: 2em;
		padding: 20upx 0upx ;
	}
	.alter-input{
		display: inline-block;
		width: 400upx;
		vertical-align: middle;
	}
	.select-title{
		display: inline-block;
		width: 300upx;
	}
	.select-switch{
		display: inline-block;
		position: absolute;
		right: 10upx;
	}
	.select-location{
		padding: 0 20upx;
		margin: 0 auto;
		line-height: 80upx;
		font-size: 28upx;
		background-color: #FFFFFF;
		width: 680upx;
		border-radius: 10upx;
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
	.popupCenter-box{
		width: 400upx;
		padding: 40upx ;
		text-align: center;
		border-radius: 20upx;
	}
</style>
