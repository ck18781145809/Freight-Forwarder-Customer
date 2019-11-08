<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->  
			<view class="status_bar">  
				<view class="top_view"></view>  
			</view>  
		<!-- #endif -->
		
		<view class="header">
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
					{{item.content}}
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		
		<view class="mt-20">
			<view class="good">
				<view class="f-c light">本商品为专供商品</view>
				<view class="good_image bg-light mt-10"></view>
				<view class="f-s-c mt-5 ph-15 bb-light">
					<view class="flex-full flex-col f-s br-light">
						<text>雪花（SNOW）啤酒清爽8度 纸箱装</text>
						<text class="mt-5 light small">商品编号：6263666</text>
					</view>
					<view class="flex-col f-s-c mv-15">
						<text class="red">1.3万</text>
						<text class="mt-5 light small">关注商家</text>
					</view>
				</view>
				<view class="f-b-c mt-15">
					<text class="red">预售时间：10月22日</text>
					<text class="light">今日已订500份/10件起订</text>
				</view>
				<view class="f-b-c mt-20 mb-10">
					<view class="f-s-e red strong">
						<text>￥</text>
						<text class="large">61.90</text>
					</view>
					<wl-button :color="'red'" self-style="padding: 18rpx 70rpx;">加入购物车</wl-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import WlIcon from '@/components/wl-icon.vue';
	import WlButton from '@/components/wl-button.vue';
	import uniSwiperDot from '@/components/uni/uni-swiper-dot.vue';
	
	export default {
		data() {
			return {
				//  轮播
				sliderCurrent: 0,
				sliderInfo: [{
						content: '内容 A'
					},
					{
						content: '内容 B'
					},
					{
						content: '内容 C'
					}
				],
			}
		},
		components: {
			WlIcon,
			WlButton,
			uniSwiperDot
		},
		methods: {
			sliderChangeHandler(e) {
				this.sliderCurrent = e.detail.current
			}
		},
		onPullDownRefresh() {
			//  取消刷新状态
			uni.stopPullDownRefresh()
		}
	}
</script>

<style lang="scss">
	@import "@/common/scss/settings/_variable.scss";
	
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
	
	
	.header {
		position: fixed;
		top: 0;
		/* #ifdef APP-PLUS */
			top: var(--status-bar-height);
		/* #endif */
		left: 0;
		right: 0;
		z-index: 99999;
		width: 100%;
		height: 170rpx;
		padding: 25rpx 20rpx 30rpx;
		background-color: $themeColor;
		box-sizing: border-box;
		
		.header_input {
			height: 60rpx;
			padding: 0 20rpx;
			background-color: #fff;
			border-radius: 40rpx;
			box-sizing: border-box;
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
	
		.good_image {
			height: 340rpx;
		}
</style>
