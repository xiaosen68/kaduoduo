<template>
	<view class=" card-box">
		<view class="card-message">
			<view class="input-box disable-change">
				<text>持卡人:</text>
				<text class="card-text">{{cardholder}}</text>
			</view>
			<view class="input-box disable-change">
				<text>信用卡号:</text>
				<text class="card-text">{{cardNo}}</text>
			</view><view class="input-box disable-change">
				<text>预留手机:</text>
				<text class="card-text">{{reservePhone}}</text>
			</view>
			<view class="input-box disable-change">
				<text>发卡行:</text>
				<text class="card-text">{{bank}}</text>
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
			<view type="" class="next-btn" @click="changeCredit">确认修改</view>
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
			cardNo:"6217002430009199648",
			reservePhone:"",
			safetyCode:"",
			termOfValidity:"",
			billingDate:"",
			repaymentDate:"",
			quota:'',
			id:'',
			cvdisabled:false,
			popupMessage:''
		}
	},
	onLoad() {
		this.id=this.$Route.query.id
		console.log(this.id)
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
					console.log(res)
					if(res.statusCode==200){
						this.cardNo=res.data.data.card_no;
						this.bank=res.data.data.bank;
						this.cardholder=res.data.data.cardholder;
						this.reservePhone=res.data.data.reserve_phone;
						this.safetyCode=res.data.data.safety_code;
						this.termOfValidity=res.data.data.term_of_validity;
						this.billingDate=res.data.data.billing_date;
						this.repaymentDate=res.data.data.repayment_date;
						this.quota=res.data.data.quota;
					}else{
						// this.popupMessage='错误码：'+res.code+'信息：'+res.msg;
						// this.$refs.popup.open();
					}
			       
			    }
			});	
		}
	},
	onShow() {
		this.cardholder=uni.getStorageSync('userName');
		// console.log(this.cardholder)
	},
	methods:{
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
					console.log(res)
					
					if(res.statusCode==200){
						this.bank=res.data.data.bank;
						console.log(this.bank)
						// console.log(this.accountBalance)
					}else{
						// this.popupMessage='错误码：'+res.code+'信息：'+res.msg;
						// this.$refs.popup.open();
					}
			       
			    }
			});	
		},
		// 修改卡片
		changeCredit(){
		
		uni.request({
			method:'POST',
		    url: this.$baseUrl+'/api/v1/pri/my/updateUserCreditCard', 
		    data: {
					id:this.id,
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
				console.log(res)
				if(res.data.code==0){
					this.popupMessage=res.data.data;
					this.$refs.popup.open();
				}else if(res.data.code==-1){
					this.popupMessage=res.data.msg;
					this.$refs.popup.open();
				}else{
					console.log(res)
				}
		       
		    }
		});	
		},
		ifcredit (n){
			let p =/^\d{16}$/;
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
					console.log(this.termOfValidity)
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
	.disable-change{
		color: #a3a3a3;
	}
</style>
