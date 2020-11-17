<template>
	<view class="shimingbox">
		<view class="shiming-one">
			<view class="shiming-item">
				<view class="shiming-text">
					姓名:
				</view>
				<input type="text" value="" v-model="name" class="shiming-input" placeholder="请输入姓名" />
			</view>
			<view class="shiming-item">
				<view class="shiming-text">
					身份证号:
				</view>
				<input type="text" value="" maxlength="18" v-model="idNumber" 
				class="shiming-input" placeholder="请输入身份证号码"/>
				<uni-icons type="camera" class="card-icons" size="20" @click="getcardFn"></uni-icons>
				
			</view>
		</view>
		<view class="shiming-two">
			<view class="shiming-two-title">
				请拍摄如下照片用于认证
			</view>
			<view class="shiming-pics">
				<image class="shiming-pic" src="../../static/img/shiming1.jpg" mode=""></image>
				<image class="shiming-pic" src="../../static/img/shiming2.jpg" mode=""></image>
				<image class="shiming-pic" src="../../static/img/shiming3.jpg" mode=""></image>
			</view>
			<view class="shiming-upload">
				<view class="upload one" @click="uploadPic(0)">
					<text  v-if="!picList[0]">+</text>
					<image class="uploadpic one" :src="picList[0]"  mode=""></image>
				</view>
				<view class="upload two" @click="uploadPic(1)">
					<text v-if="!picList[1]">+</text>
					<image class="uploadpic one" :src="picList[1]"  mode=""></image>
				</view>
				<view class="upload three" @click="uploadPic(2)">
					<text v-if="!picList[2]">+</text>
					<image class="uploadpic one" :src="picList[2]"  mode=""></image>
				</view>
			</view>
		</view>
		<view class="shiming-wrang">
			<view class="">
				请保证您的年龄符合18-80周岁
			</view>
			<view class="">
				必须上传身份证正反面照片
			</view>
			<view class="">
				手持证件照片需拍到持有人五官，请勿佩戴眼镜、帽子等遮罩物
			</view>
			<view class="">
				未达到示例标准、照片不清晰、经过编辑处理等非正常拍摄都不予通过
			</view>
		</view>
		<view class="btn-load">
			<view type="" class="next-btn" @click="uploading">确认上传</view>
		</view>
		<uni-popup ref="popup" type="center">
			<view class="popupCenter-box">
				{{popupMessage}}
			</view>
		</uni-popup>
	</view>
</template>

<script>
export default {
	data (){
		return{
			showone:false,
			showtwo:true,
			showthree:true,
			picList:[],//图片地址
			// pic:[],//图片内容
			picuploadName:[],//上传后的地址信息
			idNumber:'',
			name:'',
			popupMessage:'',
			
		}
	},
	onLoad:function(){
		// console.log(this.$store.state.baseUrl)
	},
	methods:{
		//获取银行卡图片，
		getcardFn:function(){
			let _this = this
			uni.chooseImage({
			    count: 1, //默认9
			    success: function (res) {
					let str = res.tempFilePaths[0];
					console.log(res)
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
			
			console.log(this.cardPic);
			uni.request({
				method:'POST',
			    url: 'http://idcardocrc.shumaidata.com/getidcardocrc', 
				data:{
					image:this.cardPic
				},
			    header: {
					'Content-Type':'application/x-www-form-urlencoded',
					'Authorization': 'APPCODE fa541816acdc4234b18dff3ae5f98a26'	
			    },
			    success: (res) => {
					if(res.statusCode==200){
						console.log(res.data)
						this.idNumber=res.data.data.info.number;
						this.name=res.data.data.info.name;
						// this.cardNo=res.data.data.card_number;
						// console.log(this.cardNo)
						// console.log(this.accountBalance)
					}else{
					}
			    }
			});	
		},
		// 加载图片，获取图片信息
		uploadPic: function(n){
			let _this = this
			uni.chooseImage({
			    count: 1, //默认9
			    // sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			    // sourceType: ['album'], //从相册选择
			    success: function (res) {
					let str=JSON.stringify(res.tempFilePaths[0]);
					console.log(res)
					str=str.substring(1,str.length-1);
					_this.$set(_this.picList,n,str);
					// _this.$set(_this.pic,n,res.tempFiles[0]);
					_this.uploadImage(n)
					console.log(_this.picList)
					// console.log(_this.pic)
			    },
				fail: function() {
					
				}
			});
		
		},
		// 上传图片，获取返回的图片返回路径
		uploadImage:function(n){
			let _this=this;
					uni.uploadFile({
						url:this.$baseUrl+'/api/v1/admin/upload/image',
						// file:this.pic[n],
						filePath:this.picList[n],
						name:'file',
						header:{
							'token':uni.getStorageSync('token')
						},
						formData:{
							uploadType:'ID_CARD_URL'
						},
						success:(res)=>{
							console.log(res)
							let ress=JSON.parse((res.data));
							_this.$set(_this.picuploadName,n,JSON.parse((res.data)).data.url);
							if(ress.data.url){
								this.popupMessage='上传图片成功';
								this.$refs.popup.open()
							}else{
								this.popupMessage='上传图片失败，请重新上传';
								this.$refs.popup.open()
							}
						}
					})
		},
		// 身份证验证
		shenfenzhengFn:function(n){
			let p= /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
			return p.test(n)
		},
		// 姓名验证
		namefn:function(n){
				let namep=/[\u4e00-\u9fa5]/gm;
				return namep.test(n)
		},
		// 上传个人实名信息，即图片名称
		uploading:function(){
			console.log(this.picuploadName)
			if(this.name==''){
				this.popupMessage='请填写姓名';
				this.opens()
				return false
			}else if(!this.namefn(this.name)){
				this.popupMessage='请填写中文姓名';
				this.opens()
				return false
			}
			if(this.idNumber==''){
				this.popupMessage='请填写身份证号码';
				this.opens()
				return false
			}else if(!this.shenfenzhengFn(this.idNumber)){
				this.popupMessage='身份证号码错误请重新填写';
				this.opens()
				return false
			}
			if(this.picuploadName.length<3){
				this.popupMessage='请上传身份证正、反面及手持身份证照片';
				this.opens()
				return false
			}else {
				// console.log(this.picuploadName[2])
				uni.request({
					method:'POST',
				    url: this.$baseUrl+'/api/v1/pri/my/realNameAuthentication', 
				    data: {
						userId:uni.getStorageSync('userId'),
						realName:this.name,
						idNumber:this.idNumber,
				        phone: uni.getStorageSync('userPhone'),
						frontPhotoOfIdCard:this.picuploadName[0],
						reversePhotoOfIdCard:this.picuploadName[1],
						holdingIdCard:this.picuploadName[2]
				    },
				    header: {
						'Content-Type':'application/json' ,//自定义请求头信息
						'token':uni.getStorageSync('token'),
				    },
				    success: (res) => {
						console.log(res)
						if(res.data.code===0){
							this.popupMessage=res.data.msg;
							this.$refs.popup.open();
								this.$Router.pushTab('/pages/main/mycenter')
							
						}else if(res.data.code===-1){
							this.popupMessage=res.data.msg;
							console.log(res.data.msg)
							this.$refs.popup.open();
						}else{
							this.popupMessage=res.data.msg;
							this.$refs.popup.open();
						}
				       
				    }
				});
			}
			
	
		},
		opens:function(){
			this.$refs.popup.open();
		},
	},
	
}
</script>

<style>
	.shiming-item{
	
		border-bottom:2upx solid #f4f8fb ;
		line-height: 80upx;
		font-size: 28upx;
	}
.shimingbox{
	font-size: 28upx;
}
.shiming-text{
	display: inline-block;
	vertical-align: middle;
}
.shiming-input{
	display: inline-block;
	width: 400upx;
	vertical-align: middle;
	padding-left: 12upx;
	font-size: 28upx;
}
.shiming-one{
	padding: 40upx;
	border-bottom: 12upx solid #f4f8fb;
}
.shiming-two{
	padding: 40upx;
}
.shiming-two-title{
	text-align: center;
	font-size: 28upx;
}
.shiming-pics{
	padding-top: 40upx;
	display: flex;
	justify-content: space-around;
}
.shiming-pic{
	width: 200upx;
	height: 200upx;
}

.shiming-upload{
	padding-top: 40upx;
	display: flex;
	justify-content: space-around;
}
.upload{
	width: 200upx;
	height: 200upx;
	background-color: #dfe2e4;
	color: #FFFFFF;
	font-size: 200upx;
	line-height: 160upx;
	text-align: center;
}
.uploadpic{
	width: 200upx;
	height: 200upx;
}
.shiming-wrang{
	padding: 0upx 40upx;
	color: #d91829;
	font-size: 20upx;
}
.next-btn{
	height: 80upx;
	width: 600upx;
	text-align: center;
	margin: 0 auto;
	font-size: 28upx;
	line-height: 80upx;
	border-radius: 80upx 80upx;
	border: solid 2upx #a3a3a3;
	background-color: #d71518;
	color: #FFFFFF;
}
.btn-load{
	margin-top: 40upx;
}
.popupCenter-box{
	width: 400upx;
	padding: 40upx ;
	font-size: 28upx;
	text-align: center;
	border-radius: 20upx;
}
.card-icons{
		position: absolute;
		right: 40upx;
		font-size: 24upx;
	}
</style>
