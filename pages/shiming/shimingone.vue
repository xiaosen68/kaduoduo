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
				<input type="text" value="" maxlength="18" v-model="shenfeng" class="shiming-input" placeholder="请输入身份证号码"/>
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
				{{popupCenterMessage}}
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
			shenfeng:'',
			name:'',
			popupCenterMessage:'',
			
		}
	},
	onLoad:function(){
		// console.log(this.$store.state.baseUrl)
	},
	methods:{
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
						success:(uploadFileRes)=>{
							_this.$set(_this.picuploadName,n,JSON.parse(uploadFileRes.data).data);
							console.log(_this.picuploadName)
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
				this.popupCenterMessage='请填写姓名';
				this.opens()
				return false
			}else if(!this.namefn(this.name)){
				this.popupCenterMessage='请填写中文姓名';
				this.opens()
				return false
			}
			if(this.shenfeng==''){
				this.popupCenterMessage='请填写身份证号码';
				this.opens()
				return false
			}else if(!this.shenfenzhengFn(this.shenfeng)){
				this.popupCenterMessage='身份证号码错误请重新填写';
				this.opens()
				return false
			}
			if(this.picuploadName.length<3){
				this.popupCenterMessage='请上传身份证正、反面及手持身份证照片';
				this.opens()
				return false
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
</style>
