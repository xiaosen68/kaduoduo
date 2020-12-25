<template>
	<view class="shop-center-box">
		<view class="location-item add-location" @click="addLocation">
			添加新地址
		</view>
		<view class="location-item" v-for="item in locationList" @click="selectLocation(item)">
			<view class="user-name">
				<text>收货人：{{item.customer_name}}</text>
				<text class="user-tel">{{item.customer_phone}}</text>
				<view color="#a3a3a3">{{item.region+item.address_details}}</view>
			</view>
			<view class="location-status">
				<view class=" seting-default">
					设为默认地址
					 <switch @change="changeDefault(item.id)" style="transform:scale(0.7)" :checked="item.is_default==1?true:false"/>
				</view>
				
				<view  class="alter-btn"  @click="changeLocation(item.id)"> <uni-icons type="compose" color="#a3a3a3" ></uni-icons>修改</view>
			</view>
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
			selectDefault:true,
			locationList:'',
			popupMessage:'',
			beforePage:'',
		}
	},
	onLoad() {
		this.locationrefresh();
		this.beforePage=this.$Route.query.beforePage;
	},
	methods:{
		// 选择地址，跳转到消费订单
		selectLocation:function(item){
			if(this.beforePage=='shoporder'){
				uni.setStorageSync('locationId',item.id)
				this.$Router.push({
					name:'shoporder'
				})
			}
		},
		alterlocationFn:function(){
			this.$Router.push({
				name:'alterlocation'
			})
		},
		addLocation:function(){
			this.$Router.push({
				name:'alterlocation'
			})
		},
		changeDefault:function(id){
			uni.request({
				method:'POST',
			    url: this.$baseUrl+'/api/v1/pri/my/isDefaultUserAddress', 
			    data: {
					id:id
			    },
			    header: {
					'token': uni.getStorageSync('token'),
					'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					// console.log(res)
					if(res.data.code==0){
						this.popupMessage=res.data.data;
						this.$refs.popup.open();
						uni.redirectTo({
						    url: 'selectlocation'
						});
					}else{
						// console.log(res)
					}
			       
			    }
			});	
		},
		locationrefresh(){
			uni.request({
				method:'POST',
			    url: this.$baseUrl+'/api/v1/pri/my/getUserAddress', 
			    data: {
			    },
			    header: {
					'token': uni.getStorageSync('token'),
					'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					// console.log(res)
					if(res.data.code==0){
						this.locationList=res.data.data.list;
						// console.log(this.locationList)
					}else{
						// console.log(res)
					}
			       
			    }
			});	
		},
		changeLocation:function(id){
			this.$Router.push({ name: 'alterlocation', params: { id: id }})
		}
	},
}
</script>

<style scoped>
	page{
		background-color:#f4f8fb;
	}
	.select-box{
		font-size: 24upx;
		/* width: 40upx; */
	}
	.add-location{
		text-align: center;
	}
	.location-item{
		width: 660upx;
		/* height: 200upx; */
		font-size: 24upx;
		margin: 0 auto;
		background-color: #FFFFFF;
		border-radius: 20upx;
		padding: 20upx;
		position: relative;
		margin-top: 20upx;
	}
	.alter-btn{
		float: right;
		color: #A3A3A3;
	}
	.user-name{
		line-height: 2em;
		padding-bottom: 10upx;
		border-bottom: 1upx solid #A3A3A3;
	}
	.user-tel{
		position: absolute;
		right: 20upx;
	}
.location-status{
	margin-top: 10upx;
	line-height: 2em;
}
.popupCenter-box{
		width: 400upx;
		padding: 40upx ;
		text-align: center;
		border-radius: 20upx;
	}
	.seting-default{
		display: inline-block;
		width: 400upx;
	}
</style>
