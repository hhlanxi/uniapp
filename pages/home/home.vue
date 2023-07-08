<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :circular="true" :duration="1000">
			<swiper-item   v-for="item in swiperList" :key="item.goods_id">
				<navigator  :url="`/subpkg/goods_detail/goods_detail?goods_id=${item.goods_id}`" class="swiper-item">
					<image :src="item.image_src"></image>
				</navigator>
			</swiper-item>
		</swiper>
		<view class="nav-list">
			<view v-for="(item,index) in navList" :key="index" @click="goNavigator(item)" class="nav">
					<image :src="item.image_src" ></image>
			</view>
		</view>
		<tab-list></tab-list>
	</view>
	
</template>

<script>

	export default {
	
	data(){
		return{
			swiperList:[],
			navList:[]
		}
	},
	onLoad() {
		this.getSwiperList()
		this.getNavList()
		
	},
		
	methods:{
	async getSwiperList(){
			const {data:res}= await uni.$http.get('/api/public/v1/home/swiperdata')
			
			if(res.meta.status === 200){
				this.swiperList=res.message
				uni.$showMsg("数据请求成功!")
			}else{
				uni.$showMsg()
			}
		}	,
		async getNavList(){
			const {data:res}= await uni.$http.get('/api/public/v1/home/catitems')
			if(res.meta.status === 200){
				this.navList=res.message
				uni.$showMsg("数据请求成功!")
			}else{
				uni.$showMsg()
			}
	},
	goNavigator(item){
		switch(item.name){
			case '分类': uni.switchTab({
				url:'/pages/cate/cate'
			});break;
		}
	},
}
}
</script>

<style lang="scss">
	swiper{
		height: 330rpx;
		navigator,swiper-item,image{
			width: 100%;
			height: 100%;
		}
	}
	.nav-list{
		margin-top: 10rpx;
		display: flex;
		justify-content: space-around;
		width: 100vw;
		height: 150rpx;
		.nav{
			width: 18%;
		}
		image{
			width: 100%;
			height: 100%;
		}
	}

</style>
