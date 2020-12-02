<template>
	<view class=" card-box">
		<view class="card-message">
			<view class="input-box disable-change">
				<text>持卡人:</text>
				<text class="card-text">{{cardholder}}</text>
			</view>
			<view class="input-box disable-change">
				<text>银行卡号:</text>
				<text class="card-text">{{cardNo}}</text>
			</view><view class="input-box disable-change">
				<text>预留手机:</text>
				<text class="card-text">{{reservePhone}}</text>
			</view>
			<view class="input-box">
				<text>开户行省市:</text>
				<input type="text" v-model="accountOpeningProvince" @click="btnClick" class="input-num city-input" value=""placeholder="选择省市" />
			</view>
		</view>
		<view class="btn-box">
			<view type="" class="next-btn" @click="changedeposit">确认修改</view>
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
			accountOpeningProvince:"",
			cardNo:'',
			bank:'',
			cardholder:'',
			reservePhone:'',
			id:'',
			depositStatus:{}
		}
	},
	onLoad() {
		this.id=this.$Route.query.id
		// 获取储蓄卡信息
		if(this.$Route.query.id){
			uni.request({
				method:'GET',
			    url: this.$baseUrl+'/api/v1/pri/my/getUserCarById?cardId='+this.$Route.query.id, 
			    data: {
			    },
			    header: {
					'token': uni.getStorageSync('token'),
					'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					if(res.statusCode==200){
						this.accountOpeningProvince=res.data.data.account_opening_province;
						this.cardNo=res.data.data.card_no;
						this.bank=res.data.data.bank;
						this.cardholder=res.data.data.cardholder;
						this.reservePhone=res.data.data.reserve_phone;
					}
			    }
			});	
		}
	},
	methods:{
		  btnClick() {
		        this.$refs.selectAddress.show()
		    },
		    successSelectAddress(address){ //选择成功回调
					this.accountOpeningProvince=address
		        },  
				// 修改储蓄卡
		changedeposit(){
			uni.request({
				method:'POST',
			    url: this.$baseUrl+'/api/v1/pri/my/updateUserSavingsCard', 
			    data: {
					'id':this.id,
					bank:this.bank,
					cardNo:this.cardNo,
					reservePhone:this.reservePhone,
					accountOpeningProvince:this.accountOpeningProvince,
					
			    },
			    header: {
					'token':uni.getStorageSync('token'),
					'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					if(res.statusCode==200){
						this.accountOpeningProvince=res.data.data.account_opening_province;
						this.cardNo=res.data.data.card_no;
						this.bank=res.data.data.bank;
						this.cardholder=res.data.data.cardholder;
						this.reservePhone=res.data.data.reserve_phone;
					}
					if(res.data.code==0){
						this.popupMessage=res.data.data;	
					}else if(res.data.code==-1){
						this.popupMessage=res.data.msg;
					}
					uni.showToast({
					    title:this.popupMessage,
						mask:true,
						icon:'none',
					    duration: 2000
					});
			       
			    }
			});	
			// this.$Router.back(1)
		}
	},
	
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
	.card-text{
		padding-left: 20upx;
	}
	.disable-change{
		color: #a3a3a3;
	}
</style>
