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
					<input type="text" value="" v-model="tel"/>
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
			<view class="buy-btn">
				添加地址
			</view>
		</view>
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
			address:"",
			name:'',
			tel:'',
			addressStatus:'',
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
		   }
	},
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
</style>
