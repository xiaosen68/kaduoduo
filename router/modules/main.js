const main = [
	{
      path: '/pages/index/index',
      aliasPath:'/',  //对于h5端你必须在首页加上aliasPath并设置为/
      name: 'index',
        meta: {
	        title: '登录',
	    },
    },
    {
	    path: '/pages/sign/sign',
        name: 'sign',
        meta: {
	        title: '注册',
	    },
	},
	{
	    path: '/pages/main/cardstore',
        name: 'cardstore',
        meta: {
	        title: '有粒糖商城',
	    },
	},
	{
	    path: '/pages/main/homepage',
	    name: 'homepage',
	    meta: {
	        title: '首页',
	    },
	},
	{
	    path: '/pages/index/index',
	    name: 'index',
	    meta: {
	        title: '首页',
	    },
	},
	{
	    path: '/pages/jishou/consume1',
	    name: 'consume1',
	    meta: {
	        title: '订单确定',
	    },
	},
	{
	    path: '/pages/kuaijie/kaquankj1',
	    name: 'kaquankj1',
	    meta: {
	        title: '订单确定',
	    },
	},
	{
	    path: '/pages/kuaijie/kaquankj2',
	    name: 'kaquankj2',
	    meta: {
	        title: '选择通道',
	    },
	},
	{
	    path: '/pages/kuaijie/kaquankj3',
	    name: 'kaquankj3',
	    meta: {
	        title: '确认支付',
	    },
	},
	{
	    path: '/pages/shop/shopcenter',
	    name: 'shopcenter',
	    meta: {
	        title: '个人中心',
	    },
	},
	{
	    path: '/pages/shop/shoporder',
	    name: 'shoporder',
	    meta: {
	        title: '确认订单',
	    },
	},
	{
	    path: '/pages/shop/selectpay',
	    name: 'selectpay',
	    meta: {
	        title: '选择支付方式',
	    },
	},
	{
	    path: '/pages/shop/goodsstatus',
	    name: 'goodsstatus',
	    meta: {
	        title: '商品详情',
	    },
	},
	{
	    path: '/pages/shop/alterlocation',
	    name: 'alterlocation',
	    meta: {
	        title: '修改地址',
	    },
	},
	{
	    path: '/pages/shop/selectlocation',
	    name: 'selectlocation',
	    meta: {
	        title: '选择收货地址',
	    },
	},
	{
	    path: '/pages/shop/selectpay1',
	    name: 'selectpay1',
	    meta: {
	        title: '选择支付通道',
	    },
	},
	{
	    path: '/pages/shop/selectpay2',
	    name: 'selectpay2',
	    meta: {
	        title: '确认支付',
	    },
	},
	{
	    path: '/pages/shop/integraldetail',
	    name: 'integraldetail',
	    meta: {
	        title: '积分明细',
	    },
	},
	{
	    path: '/pages/shop/integralexchange',
	    name: 'integralexchange',
	    meta: {
	        title: '积分兑换',
	    },
	},
	{
	    path: '/pages/shop/shoporderlist',
	    name: 'shoporderlist',
	    meta: {
	        title: '订单列表',
	    },
	},
	{
	    path: '/pages/shop/shoporderitem',
	    name: 'shoporderitem',
	    meta: {
	        title: '消费订单详情',
	    },
	},
	{
	    path: '/pages/main/scanpayment',
	    name: 'scanpayment',
	    meta: {
	        title: '扫码去支付',
	    },
	},
	{
	    path: '/pages/main/scanstatus',
	    name: 'scanstatus',
	    meta: {
	        title: '支付状态',
	    },
	},
	{
	    path: '/pages/shop/delivery',
	    name: 'delivery',
	    meta: {
	        title: '去发货',
	    },
	},
	{
	    path: '/pages/shop/deliverystatus',
	    name: 'deliverystatus',
	    meta: {
	        title: '去发货',
	    },
	},
	{
	    path: '/pages/main/feilv',
	    name: 'feilv',
	    meta: {
	        title: '我的费率',
	    },
	},
	{
	    path: '/pages/main/feilv',
	    name: 'feilv',
	    meta: {
	        title: '费率',
	    },
	},
	{
	    path: '/pages/jishou/consume2',
	    name: 'consume2',
	    meta: {
	        title: '订单支付',
	    },
	},
	{
	    path: '/pages/password/forgetpassword',
	    name: 'forgetpassword',
	    meta: {
	        title: '查找密码',
	    },
	},
	{
	    path: '/pages/password/changepassword',
	    name: 'changepassword',
	    meta: {
	        title: '重置密码',
	    },
	},
	{
	    path: '/pages/password/passwordlist',
	    name: 'passwordlist',
	    meta: {
	        title: '账户安全',
	    },
	},
	{
	    path: '/pages/states/state',
	    name: 'state',
	    meta: {
	        title: '操作状态',
	    },
	},
	{
	    path: '/pages/main/seting',
	    name: 'seting',
	    meta: {
	        title: '设置',
	    },
	},
	{
	    path: '/pages/main/aboutme',
	    name: 'aboutme',
	    meta: {
	        title: '关于我们',
	    },
	},
	{
	    path: '/pages/states/waiting',
	    name: 'waiting',
	    meta: {
	        title: '敬请期待',
	    },
	},
	{
	    path: '/pages/main/myteam',
	    name: 'myteam',
	    meta: {
	        title: '我的团队',
	    },
	},
	{
	    path: '/pages/main/myteamstatus',
	    name: 'myteamstatus',
	    meta: {
	        title: '团队列表',
	    },
	},
	{
	    path: '/pages/shiming/shimingone',
	    name: 'shimingone',
	    meta: {
	        title: '实名认证',
	    },
	},
	{
	    path: '/pages/main/myinfo',
	    name: 'myinfo',
	    meta: {
	        title: '个人信息',
	    },
	},
		{
	    path: '/pages/main/shop',
	    name: 'shop',
	    meta: {
	        title: '商城',
	    },
	},
	{
	    path: '/pages/main/share',
	    name: 'share',
	    meta: {
	        title: '分享',
	    },
	},
	
	{
	    path: '/pages/main/message',
	    name: 'message',
	    meta: {
	        title: '信息中心',
	    },
	},
	{
	    path: '/pages/main/mycenter',
	    name: 'mycenter',
	    meta: {
	        title: '个人中心',
	    },
	},
	
]
export default main