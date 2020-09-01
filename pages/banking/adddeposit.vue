<template>
	<view class=" card-box">
		<view class="card-message">
			<view class="input-box">
				<text>持卡人:</text>
				<text class="card-text">{{cardholder}}</text>
			</view>
			<view class="input-box">
				<text>银行卡号:</text>
				<input type="number" class="input-num" v-model="cardNo" @blur="getcard" maxlength="19" placeholder="请输入储蓄卡卡号" />
			</view>
			<view class="input-box">
				<text>发卡行:</text>
				<input type="text" class="input-num" v-model="bank" @blur="getcard" maxlength="19" placeholder="请输入发卡行" />
			</view>
			<view class="input-box">
				<text>预留手机:</text>
				<input type="number" class="input-num" v-model="reservePhone" maxlength="11" value=""placeholder="请输入预留手机号" />
			</view>
			<view class="input-box">
				<text>开户行省市:</text>
				<input type="text" v-model="accountOpeningProvince" @click="btnClick" class="input-num city-input" value=""placeholder="选择省市" />
			</view>
		</view>
		<view class="btn-box">
			<view type="" class="next-btn" @click="adddeposit">确认添加</view>
		</view>
		<selectAddress ref='selectAddress' @selectAddress="successSelectAddress"></selectAddress>
		<uni-popup ref="popup"  type="center" class="popupstyle">
			<view class="popupCenter-box">{{popupMessage}}</view>
		</uni-popup>
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
			popupMessage:'',
		}
	},
	onLoad() {
	
	},
	onShow() {
		this.cardholder=uni.getStorageSync('userName');
	},
	methods:{
		getcard(){
			if(this.cardNo==''){
				return false
			}
			console.log(this.cardNo)
				uni.request({
					method:'GET',
				    url: 'https://bankaddress.shumaidata.com/bankaddress', 
				    data: {
						bankcard:this.cardNo
				    },
				    header: {
						'Authorization': 'APPCODE fa541816acdc4234b18dff3ae5f98a26',
						'Content-Type':'application/json' //自定义请求头信息
				    },
				    success: (res) => {
						console.log(res)
						
						if(res.statusCode==200){
							this.accountOpeningProvince=res.data.data.province+res.data.data.city
							this.bank=res.data.data.bank;
							// console.log(this.bank)
							// console.log(this.accountBalance)
						}else{
							// this.popupMessage='错误码：'+res.code+'信息：'+res.msg;
							// this.$refs.popup.open();
						}
				       
				    }
				});	
		},
		// 三级联动
		  btnClick() {
		        this.$refs.selectAddress.show()
		    },
		    successSelectAddress(address){ //选择成功回调
		   this.accountOpeningProvince=address
		        },  
				
				// 添加储蓄卡
		adddeposit(){
			if(this.accountOpeningProvince==''||this.cardNo==''||this.cardholder==''||this.reservePhone==""){
				return false
				}
				console.log('33')
			uni.request({
				method:'POST',
			    url: this.$baseUrl+'/api/v1/pri/my/addUserSavingsCard', 
			    data: {
						cardType:"SAVINGS_CARD",
						cardholder:this.cardholder,
						bank:this.bank,
						cardNo:this.cardNo,
						reservePhone:this.reservePhone,
						accountOpeningProvince:this.accountOpeningProvince,

			    },
			    header: {
					'token': uni.getStorageSync('token'),
					'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					console.log(res)
					if(res.data.code==0){
						this.popupMessage=res.data.data;
						this.$refs.popup.open()
						console.log(this.accountBalance)
					}else if(res.data.code==-1){
						this.popupMessage=res.data.msg;
						// this.popupMessage=res.data.data;
						this.$refs.popup.open()
					}else{
						console.log(res)
					}
			       
			    }
			});	
		}
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
	.card-text{
		padding-left: 20upx;
	}
	.popupstyle{
		background-color: #FFFFFF;
		padding: 20upx 20upx;
	}
	.popupCenter-box{
		width: 400upx;
		padding: 40upx ;
		text-align: center;
		border-radius: 20upx;
	}
</style>
