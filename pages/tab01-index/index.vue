<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->  
			<view class="status_bar">  
				<view class="top_view"></view>  
			</view>  
		<!-- #endif -->
		
		<view class="header" :class="{close: isHeaderClose}">
			<view class="header_menu">
				<view class="f-b-c">
					<view class="f-c">
						<wl-icon name="map" size="18" theme="snow"></wl-icon>
						<text class="ml-5 snow">绵阳</text>
					</view>
					
					<view class="f-c">
						<wl-icon name="scanning" size="18" theme="snow"></wl-icon>
						<wl-icon class="ml-10" name="message" size="18" theme="snow" badge badgeText="14"></wl-icon>
					</view>
				</view>
			</view>
			
			<view class="header_input f-s-c mt-10">
				<wl-icon name="search" size="16" theme="light"></wl-icon>
				<input class="flex-full ml-5" type="text" value="" placeholder="雪花纯生"/>
			</view>
		</view>
		
		<view class="placeholder"></view>
		
		<uni-swiper-dot :info="sliderInfo" :current="sliderCurrent" mode="default"  field="content">
			<swiper class="slider swiper-box bg-light" @change="sliderChangeHandler">
				<swiper-item v-for="(item, index) in sliderInfo" :key="index">
					<image style="width: 100%;" :src="item.content" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		
		<view class="mt-20">
			<view class="good" v-for="(itm, idx) in goods" :key="itm.id">
				<view class="f-c light">本商品为专供商品</view>
				<view class="good_thumb mt-10">
					<image :src="itm.iamge" mode="aspectFill"></image>
				</view>
				<view class="f-s-c mt-5 ph-15 bb-light">
					<view class="flex-full flex-col f-s pr-5 br-light">
						<text class="good_name">{{itm.name}}</text>
						<text class="mt-5 light small">商品编号：{{itm.id}}</text>
					</view>
					<view class="flex-col f-s-c mv-15">
						<text class="red">1.3万</text>
						<text class="mt-5 light small">关注商家</text>
					</view>
				</view>
				<view class="f-b-c mt-15">
					<text class="red">预售时间：{{itm.open_date}}</text>
					<text class="light">今日已订{{itm.on_order}}份/{{itm.minimum_orde}}件起订</text>
				</view>
				<view class="f-b-c mt-20 mb-10">
					<view class="f-s-e red strong">
						<text>￥</text>
						<text class="large">{{itm.price}}</text>
					</view>
					<wl-button :color="'red'" self-style="padding: 18rpx 70rpx;">加入购物车</wl-button>
				</view>
			</view>
		</view>
		
		<uni-load-more :status="uploadMoreStatus"></uni-load-more>
	</view>
</template>

<script>
	import WlIcon from '@/components/wl-icon.vue';
	import WlButton from '@/components/wl-button.vue';
	import UniSwiperDot from '@/components/uni/uni-swiper-dot.vue';
	import UniLoadMore from '@/components/uni/uni-load-more.vue';
	
	export default {
		data() {
			return {
				//  组件信息
				windowHeight: this.$tools.getWindowHeight(),
				
				//  header状态
				isHeaderClose: false,
				
				//  轮播
				sliderCurrent: 0,
				sliderInfo: [{
						content: 'http://pica.nipic.com/2008-03-22/2008322181251736_2.jpg'
					},
					{
						content: 'http://docs.ebdoor.com/Image/Company/61/617238_intro3.jpg'
					},
					{
						content: 'http://p8.qhimg.com/t01a039572f7e51eb1b.jpg'
					}
				],
				
				//  货物信息
				goods: [],
				
				//  加载更多状态
				uploadMoreStatus: 'more',
				
				//  页面滚动
				scrollTop: 0
			}
		},
		components: {
			WlIcon,
			WlButton,
			UniSwiperDot,
			UniLoadMore
		},
		methods: {
			sliderChangeHandler(e) {
				this.sliderCurrent = e.detail.current 
			},
			//  重新加载数据
			async reloadData() {
				const MINIMUM_GOODS = 5 //  最小展示数据条数，小于即为暂无更多数据
				
				this.$tools.showLoadingToast()
				
				const requestGoods = await this.$tools.get('getGoods')
				
				this.goods = requestGoods.data.data
				
				uni.hideToast()
				
				if(requestGoods.length < MINIMUM_GOODS) this.uploadMoreStatus = 'noMore'
			},
			//  加载更多数据
			async loadData() {
				this.uploadMoreStatus = 'loading'
				
				const requestGoods = await this.$tools.get('getGoods')

				if(requestGoods.length === 0) {
					this.uploadMoreStatus = 'noMore'
					
					return
				}
				
				this.goods.push(...requestGoods.data.data)
				
				this.uploadMoreStatus = 'more'
			}
		},
		async onLoad() {
			await this.reloadData()
		},
		onHide() {
			uni.hideToast()
		},
		async onPullDownRefresh() {
			await this.reloadData()
			
			//  取消刷新状态
			uni.stopPullDownRefresh()
		},
		async onReachBottom() {
			this.uploadMoreStatus = 'loading'
			
			await this.loadData()
			
			this.uploadMoreStatus = 'more'
		},
		onPageScroll(obj) {
			if(obj.scrollTop < this.windowHeight - 100) return
			
			if(obj.scrollTop - this.scrollTop < 0) {
				this.isHeaderClose = false
			} else {
				this.isHeaderClose = true
			}
			
			this.scrollTop = obj.scrollTop
		}
	}
</script>

<style lang="scss">
	@import "@/common/scss/settings/_variable.scss";
	@import "@/common/scss/settings/_mixin.scss";
	
	.status_bar {  
	    height: var(--status-bar-height);  
	    width: 100%;  
	    background-color: #eee;  
		
		.top_view {
		    height: var(--status-bar-height);  
		    width: 100%;  
		    position: fixed;  
		    background-color: $themeColor;  
		    top: 0;  
		    z-index: 999;  
		}
	}
	
	
	$headerMovingSpeed: .2s; //  导航栏收起速度
	
	.header {
		position: fixed;
		top: 0;
		/* #ifdef APP-PLUS */
			top: var(--status-bar-height);
		/* #endif */
		left: 0;
		right: 0;
		z-index: 99999;
		overflow: hidden;
		width: 100%;
		height: 170rpx;
		padding: 25rpx 20rpx 30rpx;
		background-color: $themeColor;
		box-sizing: border-box;
		transition: all $headerMovingSpeed;
		
		&.close {
			height: 80rpx;
			
			.header_input {
				transform: scale(0);
			}
		}
		
		.header_input {
			height: 60rpx;
			padding: 0 20rpx;
			background-color: #fff;
			border-radius: 40rpx;
			box-sizing: border-box;
			transform-origin: left top;
			transition: all $headerMovingSpeed;
		}
	}
	
	
	.placeholder {
		height: 170rpx;
	}
	
	
	.slider {
		height: 270rpx;
	}
	
	.good {
		margin: 40rpx 20rpx 20rpx;
		padding: 15rpx;
		background-color: #fff;
	}
	
		.good_thumb {
			height: 340rpx;
			
			image {
				width: 100%;
				height: 100%;
			}
		}
		
		.good_name {
			@include TextOverflow-2;
			
			line-height: 36rpx;
			height: 72rpx;
			overflow: hidden;
		}
</style>
