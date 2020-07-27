<template>
	<view class=" card-box">
		<view class="card-message">
			<view class="input-box">
				<text>持卡人:</text>
				<text>王小森</text>
			</view>
			<view class="input-box">
				<text>银行卡号:</text>
				<input type="text" class="input-num" disabled="true" value="21312312312"placeholder="请输入信用卡卡号" />
			</view><view class="input-box">
				<text>预留手机:</text>
				<input type="text" class="input-num" disabled="true" maxlength="11" value="213123123" placeholder="请输入预留手机号" />
			</view>
			<view class="input-box">
				<text>开户行省市:</text>
				<input type="text" v-model="bankaddress" @click="btnClick" class="input-num city-input" value=""placeholder="选择省市" />
			</view>
		</view>
		<view class="btn-box">
			<view type="" class="next-btn" @click="addcredit">确认修改</view>
		</view>
		<selectAddress ref='selectAddress' @selectAddress="successSelectAddress"></selectAddress>
	</view>
</template>

<script>
	
import selectAddress from '@/components/yixuan-selectAddress/yixuan-selectAddress.vue'
export default {
	components: {selectAddress},
	data (){
		return{
			bankaddress:"",
			depositStatus:{}
		}
	},
	methods:{
		  btnClick() {
		        this.$refs.selectAddress.show()
		    },
		    successSelectAddress(address){ //选择成功回调
		   this.bankaddress=address
		        },  
		addcredit(){
			// uni.navigateBack({
			// 	delta:1
			// })
			this.$Router.back(1)
		}
	},
	onLoad:function(){
		this.depositStatus = this.$Route.query.depositStatus
	}
}
</script>

<style>
	.card-box{
		height: 94vh;
		background-color: #f4f8fb;
	}
	.card-message{
		background-color: #FFFFFF;
		padding-top: 20upx;
	}
	.input-box{
		width: 650upx;
		padding: 0 50upx;
		line-height: 100upx;
		/* margin-top: 10upx; */
		border-bottom:solid 2upx #dfd9d9;
	}
	.input-num{
		display: inline-block;
		border: none;
		line-height: 40upx;
		width: 470upx;
		padding-left: 20upx;
		font-size: 36upx;
		vertical-align: text-bottom;
		}
		.city-input{
			width: 400upx;
		}
		.next-btn{
				height: 80upx;
				width: 600upx;
				text-align: center;
				margin: 0 auto;
				line-height: 80upx;
				border-radius: 80upx 80upx;
				border: solid 2upx #a3a3a3;
				background-color: #d71518;
				color: #FFFFFF;
			}
	.btn-box{
		margin-top: 90upx;
	}
</style>
