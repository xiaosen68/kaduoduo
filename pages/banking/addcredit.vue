<template>
	<view class=" card-box">
		<view class="card-message">
			<view class="input-box">
				<text>持卡人:</text>
				<text class="card-text">{{cardholder}}</text>
			</view>
			<view class="input-box">
				<text>信用卡号:</text>
				<input type="number" class="input-num card-input" maxlength="16" @blur="getBank" 
				v-model="cardNo" value=""placeholder="请输入信用卡卡号" />
				<uni-icons type="camera" class="card-icons" size="20" @click="getcardFn"></uni-icons>
			</view><view class="input-box">
				<text>预留手机:</text>
				<!-- <text class="card-text">{{reservePhone}}</text> -->
				<input type="number" class="input-num"  maxlength="11" @blur="iftel" v-model="reservePhone" value=""placeholder="请输入预留手机号" />
			</view>
			<view class="input-box">
				<text>发卡行:</text>
				<input type="text" class="input-num" maxlength="10" v-model="bank" value=""placeholder="请输入发卡行" />
				
			</view>
			<view class="input-box">
				<text>安全码:</text>
				<input type="number" class="input-num" maxlength="3" length="3" @blur="ifc2v2" v-model="safetyCode" :disabled="cvdisabled" value=""placeholder="信用卡CVN2后三位" />
			</view><view class="input-box">
				<text>有效期:</text>
				<input type="text" class="input-num" maxlength="5" v-model="termOfValidity" @input="ifydate" value=""placeholder="信用卡有效期,如:09/22" />
			</view>
			<view class="input-box">
				<text>账单日:</text>
				<input type="number" maxlength="2" class="input-num" v-model="billingDate" @input="ifzdate" @blur="zdate" value=""placeholder="信用卡账单日,如:(23)"  />
	
			</view>
			<view class="input-box">
				<text>还款日:</text>
				<input type="number"  maxlength="2" class="input-num" v-model="repaymentDate" @input="ifhdate" @blur="hdate" value=""placeholder="信用卡还款日,如:(23)" />
			</view>
			<view class="input-box">
				<text>额度:</text>
				<input type="number" class="input-num" maxlength="7" v-model="quota" value=""placeholder="请输入信用卡额度" />
			</view>
		</view>
		<view class="btn-box">
			<view type="" class="next-btn" @click="addcredit">确认添加</view>
		</view>
		<uni-popup ref="popup"  type="center" class="popupstyle">
			<view class="popupCenter-box">{{popupMessage}}</view>
		</uni-popup>
		
	</view>
</template>

<script>
	
	export default {
	  components: {
	  },
	data (){
		return{
			cardType:"CREDIT_CARD",
			cardholder:'',
			bank:"",
			cardNo:"",
			reservePhone:"",
			safetyCode:"",
			termOfValidity:"",
			billingDate:"",
			repaymentDate:"",
			quota:'',
			cvdisabled:false,
			popupMessage:'',
			cardPic:''
		}
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
			uni.showLoading({
				title:'识别中',
					mask:true
			})
			
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
						this.cardNo=res.data.data.card_number;
						this.bank=res.data.data.bank_name;
					}else{
						uni.showToast({
							title:"识别失败",
							mask:true,
							icon:'none',
							duration: 2000
						});
					}
					uni.hideLoading()
			    },
				complete: () => {
					uni.hideLoading()
				}
			});	
		},
		// 填写卡号后，获取发卡行
		getBank(){
			if(this.cardNo==''){
				return false
			}
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
						this.bank=res.data.data.bank;
					}else{
					}
			       
			    }
			});	
		},
		// 添加卡片
		addcredit(){
		
		uni.showLoading({
			title:'请求中'
		})
		
		uni.request({
			method:'POST',
		    url: this.$baseUrl+'/api/v1/pri/my/addUserCreditCard', 
		    data: {
					cardType:"CREDIT_CARD",
					cardholder:this.cardholder,
					bank:this.bank,
					cardNo:this.cardNo,
					reservePhone:this.reservePhone,
					safetyCode:this.safetyCode,
					termOfValidity:this.termOfValidity,
					billingDate:this.billingDate,
					repaymentDate:this.repaymentDate,
					quota:this.quota
		
		    },
		    header: {
				'token': uni.getStorageSync('token'),
				'Content-Type':'application/json' //自定义请求头信息
		    },
		    success: (res) => {
				if(res.data.code==0){
					this.popupMessage=res.data.data;
					uni.showToast({
						title:this.popupMessage,
						mask:true,
						icon:'none',
						duration: 2000
					});
					this.$Router.back(1)
				}else if(res.data.code==-1){
					this.popupMessage=res.data.msg;
					uni.showToast({
						title:this.popupMessage,
						mask:true,
						icon:'none',
						duration: 2000
					});
				}
		       
		    },
			complete: () => {
				uni.hideLoading()
			}
		});	
		},
		ifcredit (n){
			let p =/^\d{15,16}$/;
			return p.test(n)
		},
		iftel(){
			let t =/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
			if(!t.test(this.reservePhone)){
				this.popupMessage='请输入正确手机号';
				this.$refs.popup.open()
			}
		},
		ifc2v2(){
			let c=/^\d{3}$/;
			if(!c.test(this.safetyCode)){
				this.popupMessage='请正确输入安全码';
				this.$refs.popup.open()
			}
		},
		ifzdate(e){
			if(Number(e.detail.value)>31){
				this.billingDate=31
			}
		},
		
		ifhdate(e){
			if(Number(e.detail.value)>31){
				this.repaymentDate=31
			}
		},
		zdate(){
			if(Number(this.billingDate)<10&&Number(this.billingDate)>0){
				this.billingDate='0'+Number(this.billingDate)
			}
		},
		hdate(){
			if(Number(this.repaymentDate)<10&&Number(this.repaymentDate)>0){
				this.repaymentDate='0'+Number(this.repaymentDate)
			}
		},
		ifydate(e){
			if(e.detail.value.length==1){
				if(Number(e.detail.value)>1){
					this.termOfValidity=1
				}
			}else if(e.detail.value.length==2){
				if(Number(e.detail.value)>12){
					this.termOfValidity=12
				}
				this.termOfValidity=this.termOfValidity+'/'
			}else if(e.detail.value.length==4){
				if(Number(e.detail.value.charAt(3))>3){
					this.termOfValidity=this.termOfValidity.substr (0,3);
					this.termOfValidity=this.termOfValidity+'3';
				}
			}else if(e.detail.value.length==5){
				if(Number(e.detail.value.charAt(3))==3){
					if(Number(e.detail.value.charAt(4))>1){
						this.termOfValidity=this.termOfValidity.substr (0,4);
						this.termOfValidity=this.termOfValidity+'1';
					}
				}
			}else if(e.detail.value.length>5){
				this.termOfValidity=this.termOfValidity.substr (0,5);
			}
			
		},
		
	},
	computed: {
		
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
		position: relative;
		width: 650upx;
		padding: 30upx 50upx;
		font-size: 30upx;
		/* line-height: 100upx; */
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
		vertical-align: middle;
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
	.card-text{
		padding-left: 20upx;
	}
	.card-icons{
		position: absolute;
		right: 40upx;
		top:10upx;
		font-size: 24upx;
	}
</style>
