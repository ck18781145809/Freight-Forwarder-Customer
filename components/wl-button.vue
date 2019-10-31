<template>
	<view class="btn" :class="{'btn--inline': inline, 'btn--red': (color === 'red')}" @tap="buttonTapHandler" :hover-class="hoverClass">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			inline: {
				type: Boolean,
				default: false
			},
			color: {
				type: String,
				default: 'default'
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
	@import '@/static/scss/settings/_variable.scss';
	
	.btn {
		border-radius: 40rpx;
	}
	
	.btn--red {
		color: #fff;
		background-color: $buttonColorRed;
	}
	
	.btn--red--hover {
		background-color: $buttonColorRedHover;
	}
	
	.btn--inline {
		padding: 18rpx 70rpx;
	}
</style>
