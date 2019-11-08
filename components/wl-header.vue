<template>
	<view class="header">
		<text class="header_back"></text>
		<slot></slot>
	</view>
</template>

<script>
	import WlIcon from '@/components/wl-icon.vue'
	export default {
		props: {
			back: {
				type: Boolean,
				default: true
			}
		}
	}
</script>

<style lang="scss">
	@import "@/common/scss/settings/_variable.scss";
	
	.header {
		position: fixed;
		top: 0;
		/* #ifdef APP-PLUS */
			top: var(--status-bar-height);
		/* #endif */
		left: 0;
		right: 0;
		z-index: 99;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100rpx;
		font-size: 32rpx;
		color: #030303;
		border-bottom: 1rpx solid $borderColorLight;
		background-color: #fff;
		box-sizing: border-box;
	}
	
		.header_back {
			position: absolute;
			top: 50%;
			left: 25rpx;
			width: 40rpx;
			height: 40rpx;
			background-position: center;
			background-size: contain;
			background-image: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath d='M363.84 472.979c-26.901 24.38-26.538 64.507.89 88.507l309.222 270.569c8.867 7.759 22.344 6.86 30.103-2.007s6.86-22.344-2.007-30.103L392.827 529.376c-8.231-7.202-8.325-17.54-.335-24.782l309.834-280.786c8.73-7.912 9.394-21.403 1.482-30.134-7.912-8.73-21.403-9.394-30.134-1.482L363.841 472.98z' fill='%23303030'/%3E%3C/svg%3E");
			transform: translate(0, -50%);
		}
</style>
