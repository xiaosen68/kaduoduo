<template>
	<view class=" card-box">
		<view class="card-message">
			<view class="input-box">
				<text>持卡人:</text>
				<text class="card-text">{{cardholder}}</text>
			</view>
			<view class="input-box">
				<text>银行卡号:</text>
				<input type="number" class="input-num" v-model="cardNo" 
				maxlength="19" placeholder="请输入储蓄卡卡号" @blur="getcard" />
				<uni-icons type="camera" class="card-icons" size="20" @click="getcardFn"></uni-icons>
			</view>
			<view class="input-box">
				<text>发卡行:</text>
				<input type="text" class="input-num" v-model="bank" @click="getcard"  maxlength="19" placeholder="请输入发卡行如'中国建设银行'" />
			</view>
			<view class="input-box">
				<text>预留手机:</text>
				<!-- <text class="card-text">{{reservePhone}}</text> -->
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
		<selectAddress ref='selectAddress' @selectAddress="successSelectAddress" :jiji='3'></selectAddress>
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
		//获取银行卡图片，
		getcardFn:function(){
			let _this = this
			uni.chooseImage({
			    count: 1, //默认9
			    success: function (res) {
					let str = res.tempFilePaths[0];
					var reader = new FileReader()
						reader.onloadend = function() {
							_this.cardPic= reader.result;
							_this.popupMessage=	_this.cardPic;
							_this.$refs.popup.open();
							// alert(_this.cardPic)
							_this.getCardBase();
						}
						if (res.tempFiles[0]) {
						 reader.readAsDataURL(res.tempFiles[0])
					   }
			    },
				fail: function() {
					
				}
			});
		},
		// 上传图片，获取卡号；
		getCardBase:function(){
			// alert(this.cardPic);
			uni.request({
				method:'POST',
			    url: 'http://bankocrb.shumaidata.com/getbankocrb', 
				data:{
					image:this.cardPic
				},
			    header: {
					'Content-Type':'application/x-www-form-urlencoded',
					'Authorization': 'APPCODE fa541816acdc4234b18dff3ae5f98a26'	
			    },
			    success: (res) => {
					if(res.statusCode==200){
						alert(res.data)
						this.cardNo=res.data.data.card_number;
						this.bank=res.data.data.bank_name;
						// console.log(this.accountBalance)
					}else{
					}
			    }
			});	
		},
		getcard(){
			if(this.cardNo==''||this.bank!==''){
				return false
			}
			// console.log(this.cardNo)
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
						
						if(res.statusCode==200){
							// this.accountOpeningProvince=res.data.data.province+res.data.data.city
							this.bank=res.data.data.bank;
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
				uni.showLoading({
					title:'请求中'
				})
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
					if(res.data.code==0){
						this.popupMessage=res.data.data;
						this.$refs.popup.open()
						this.$Router.back(1)
					}else if(res.data.code==-1){
						this.popupMessage=res.data.msg;
						this.$refs.popup.open()
					}
			       
			    },
				complete: () => {
					uni.hideLoading()
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
	.card-icons{
		position: absolute;
		right: 40upx;
		font-size: 24upx;
	}
</style>
