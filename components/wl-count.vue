<template>
	<view class="count">
		<view class="count_min" @tap="countMinHandler">-</view>
		<text class="count_value" :class="{active: isAnimationMoving}">{{countValue}}</text>
		<view class="count_add" @tap="countAddHandler">+</view>
	</view>
</template>

<script>
	export default {
		props: {
			goodId: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				id: this.goodId,
				countValue: 0,
				isAnimationMoving: false
			}
		},
		methods: {
			countAddHandler() {
				this.countValue += 1
				
				this.countNumberBounce()
				
				this.$emit('change', [this.id, this.countValue])
			},
			countMinHandler() {
				if(this.countValue <= 0) {return}
				
				this.countValue -= 1
				
				this.countNumberBounce()
				
				this.$emit('change', [this.id, this.countValue])
			},
			countNumberBounce() {
				const _vm = this
				
				this.isAnimationMoving = true
				
				setTimeout(function() {
					_vm.isAnimationMoving = false
				}, 200)
			}
		}
	}
</script>

<style lang="scss">
	@import "@/common/scss/settings/_variable.scss";
	
	.count {
		display: flex;
		align-items: center;
	}
	
		.count_min,
		.count_add {
			width: 28rpx;
			height: 28rpx;
			text-align: center;
			line-height: 28rpx;
		}
			
		.count_min {
			color: #959393;
			background-color: $backgroundColorPage;
		}
		
		.count_add {
			color: #fff;
			background-color: $themeColor;
		}
		
		.count_value {
			margin: 0 15rpx;
			
			&.active {
				animation: big .2s 1;
			} 
			
			@keyframes big {
				to {
					transform: scale(1.2);
				}
			}
		}
</style>
