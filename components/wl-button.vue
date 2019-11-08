<template>
	<view 
	class="btn" 
	:class="{
			'btn--red': (color === 'red'),
			'btn--green': (color === 'green'),
			'btn--large': (size === 'large'),
			'btn--square': square
		}" 
	:style="selfStyle"
	:hover-class="hoverClass"
	@tap="buttonTapHandler" >
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			color: {
				type: String,
				default: 'default'
			},
			size: {
				type: String,
				default: 'normal'
			},
			square: {
				type: Boolean,
				default: false
			},
			selfStyle: {
				type: String,
				default: ''
			}
		},
		computed: {
			hoverClass() {
				return `btn--${this.color}--hover`;
			}
		},
		methods: {
			buttonTapHandler() {
				uni.$emit('tap')
			}
		}
	}
</script>

<style lang="scss">
	@import '@/common/scss/settings/_variable.scss';
	
	.btn {
		padding: 12rpx 20rpx 14rpx;
		text-align: center;
		border-radius: 40rpx;
	}
	
	.btn--red {
		color: #fff;
		background-color: $buttonColorRed;
	}
	
	.btn--green {
		color: #fff;
		background-color: $buttonColorGreen;
	}
	
	.btn--red--hover {
		background-color: $buttonColorRedHover;
	}
	
	.btn--green--hover {
		background-color: $buttonColorGreenHover;
	}
	
	.btn--large {
		border-radius: 48rpx;
		padding: 32rpx 0 34rpx;
	}
	
	.btn--square {
		border-radius: 8rpx;
	}
</style>
