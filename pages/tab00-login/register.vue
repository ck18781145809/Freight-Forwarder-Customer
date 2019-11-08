<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status_bar">  
				<view class="top_view"></view>  
			</view>  
		<!-- #endif -->
		
		<view class="login_header">
			<view class="login_header_content">
				<view class="login_header_content_back">
					<wl-icon class="ml-5" name="back" theme="dark" size="24" @tap="uni.navigateBack()"></wl-icon>
				</view>
				<view class="login_header_content_title dark ml-10">注册新用户</view>
				<view class="login_header_content_form">
					<view class="login_header_content_form_item">
						<view class="login_header_content_form_item_label dark strong">用户名</view>
						<view class="login_header_content_form_item_input mt-5">
							<input class="light" type="text" placeholder="请输入用户名" placeholder-class="light"/>
						</view>
					</view>
					<view class="login_header_content_form_item mt-5">
						<view class="login_header_content_form_item_label dark strong">密码</view>
						<view class="login_header_content_form_item_input f-s-c mt-5">
							<input class="light flex-full" :type="isShowPassword ? 'text' : 'password'" placeholder="请输入用户名" placeholder-class="light"/>
							<text class="login_header_content_form_item_input_icon" :class="{active: isShowPassword}" @tap="showPassword('isShowPassword')"></text>
						</view>
					</view>
					<view class="login_header_content_form_item mt-5">
						<view class="login_header_content_form_item_label dark strong">确认密码</view>
						<view class="login_header_content_form_item_input f-s-c mt-5">
							<input class="light flex-full" :type="isShowPasswordConfirm ? 'text' : 'password'" placeholder="请输入用户名" placeholder-class="light"/>
							<text class="login_header_content_form_item_input_icon" :class="{active: isShowPasswordConfirm}" @tap="showPassword('isShowPasswordConfirm')"></text>
						</view>
					</view>
					<view class="login_header_content_form_item f-s-c">
						<view class="flex-full">
							<view class="login_header_content_form_item_label dark strong">验证码</view>
							<view class="login_header_content_form_item_input mt-5">
								<input class="light flex-full" type="text" placeholder="请输入验证码" placeholder-class="light"/>
							</view>
						</view>
						<wl-button :color="'green'">获取</wl-button>
					</view>
				</view>
				<view class="login_header_content_btn">
					<wl-button class="login_header_content_btn" :color="'red'" :size="'large'">注册</wl-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import WlIcon from '@/components/wl-icon.vue';
	import WlButton from '@/components/wl-button.vue';
	
	export default {
		data() {
			return {
				isShowPassword: false, //  显示密码
				isShowPasswordConfirm: false //  显示确认密码
			}
		},
		components: {
			WlIcon,
			WlButton
		},
		methods: {
			showPassword(itm) {
				this[itm] = !this[itm];
			}
		}
	}
</script>

<style lang="scss">
	@import '@/common/scss/settings/_variable.scss';
	
	page {
		background-color: #fff;
	}
	
		.login_header_content {
			margin: 0 30rpx;
		}
		
			.login_header_content_back {
				padding: 50rpx 0 30rpx;
				box-sizing: border-box;
			}
			
			
			.login_header_content_title {
				margin-top: 100rpx;
				font-size:36rpx;
				font-weight: 700;
			}
			
			
			.login_header_content_form {
				margin-top: 40rpx;
				padding: 60rpx 30rpx;
				border-radius: $borderRadius;
			}
			
				.login_header_content_form_item {
					padding: 20rpx 15rpx;
					border-bottom: 1rpx solid $borderColorLight;
					
					&:last-child {
						padding-top: 50rpx;
						border-bottom: none;
					}
				}
				
					.login_header_content_form_item_input_icon {
						position: relative;
						display: inline-block;
						width: 36rpx;
						height: 36rpx;
						vertical-align: middle;
						background-position: center;
						background-size: contain;
						background-image: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath d='M1012.444 500.673l-1.523-2.54C865.194 280.838 701.537 170.667 524.419 170.667c-297.93 0-511.238 326.831-512.838 330.006-10.032 19.48-10.032 40.127 0 59.683l2.286 3.657C175.568 779.505 338.514 884.267 512 884.267c76.394 0 146.083-21.004 207.848-52.699 32.254-16.533 68.342-37.866 89.98-56.914 4.521-4.013 6.934-10.971 6.934-17.829 0-14.044-11.378-25.396-25.397-25.396-5.587 0-10.463 2.184-14.654 5.206 0 0-60.241 40.736-93.867 56.61-51.733 24.482-109.003 40.203-170.844 40.203-155.886 0-305.041-97.473-455.975-297.905-1.701-4.089-1.498-7.34.508-11.226 1.727-3.022 200.28-302.857 467.886-302.857 158.756 0 307.886 102.121 443.378 303.543.584 1.32.914 2.438 1.117 3.251l-2.235 3.352c-16.736 25.397-87.67 111.924-95.365 120.356-7.695 8.432-10.895 11.784-10.895 20.292 0 14.044 11.378 25.397 25.397 25.397 7.263 0 12.978-2.641 18.362-8.026 5.384-5.358 86.73-102.476 104.914-130.057l.787-1.193c12.369-14.299 13.46-36.496 2.565-57.702z' fill='%23959393'/%3E%3Cpath d='M393.498 524.394c0 62.146 55.39 116.647 118.502 116.647 64.203 0 118.476-53.435 118.476-116.647 0-63.213-54.273-116.597-118.476-116.597-63.111 0-118.502 54.476-118.502 116.597zm186.185 0c0 34.463-32.28 65.854-67.683 65.854-35.454 0-67.708-31.39-67.708-65.854 0-34.438 32.28-65.804 67.708-65.804 35.429 0 67.683 31.366 67.683 65.804z' fill='%23959393'/%3E%3C/svg%3E");
						
						&.active {
							background-image: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath d='M1012.444 500.673l-1.523-2.54C865.194 280.838 701.537 170.667 524.419 170.667c-297.93 0-511.238 326.831-512.838 330.006-10.032 19.48-10.032 40.127 0 59.683l2.286 3.657C175.568 779.505 338.514 884.267 512 884.267c76.394 0 146.083-21.004 207.848-52.699 32.254-16.533 68.342-37.866 89.98-56.914 4.521-4.013 6.934-10.971 6.934-17.829 0-14.044-11.378-25.396-25.397-25.396-5.587 0-10.463 2.184-14.654 5.206 0 0-60.241 40.736-93.867 56.61-51.733 24.482-109.003 40.203-170.844 40.203-155.886 0-305.041-97.473-455.975-297.905-1.701-4.089-1.498-7.34.508-11.226 1.727-3.022 200.28-302.857 467.886-302.857 158.756 0 307.886 102.121 443.378 303.543.584 1.32.914 2.438 1.117 3.251l-2.235 3.352c-16.736 25.397-87.67 111.924-95.365 120.356-7.695 8.432-10.895 11.784-10.895 20.292 0 14.044 11.378 25.397 25.397 25.397 7.263 0 12.978-2.641 18.362-8.026 5.384-5.358 86.73-102.476 104.914-130.057l.787-1.193c12.369-14.299 13.46-36.496 2.565-57.702z' fill='%23dd131a'/%3E%3Cpath d='M393.498 524.394c0 62.146 55.39 116.647 118.502 116.647 64.203 0 118.476-53.435 118.476-116.647 0-63.213-54.273-116.597-118.476-116.597-63.111 0-118.502 54.476-118.502 116.597zm186.185 0c0 34.463-32.28 65.854-67.683 65.854-35.454 0-67.708-31.39-67.708-65.854 0-34.438 32.28-65.804 67.708-65.804 35.429 0 67.683 31.366 67.683 65.804z' fill='%23dd131a'/%3E%3C/svg%3E");
						}
					}
				
					
			.login_header_content_btn {
				margin-top: 45rpx;
			}
</style>
