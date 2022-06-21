<!--
 * @Author: 'wanghq18' 'wanghq18@lenovo.com'
 * @Date: 2022-06-21 17:20:00
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-06-21 20:57:58
 * @FilePath: \zb\src\views\selectBackGround\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<div class="selectBackGround">
		<TopUserinfo></TopUserinfo>
		<div class="contentBox">
			<div class="title">
				<img src="@/assets/gameSection/choseYourWorld.png" alt="">
			</div>
			<van-swipe class="my-swipe" indicator-color="white">
				<van-swipe-item>
					<img src="@/assets/gameSection/banner01.png" alt="">
				</van-swipe-item>
				<van-swipe-item>
					<img src="@/assets/gameSection/banner02.png" alt="">
				</van-swipe-item>
			</van-swipe>
		</div>
		<div class="confirmBtnBox">
			<span @click="goTo('gameMainPage')">确定</span>
		</div>
	</div>
</template>

<script>
import { useRouter } from 'vue-router'
import TopUserinfo from '@/components/TopUserInfo.vue'
export default {
  components: {
    TopUserinfo,
  },
	setup () {
    const router = useRouter()
    const goTo = (path) => {
      router.push(
        {
          path: path
        }
      )
    }
		return {
			goTo,
		}
	}
}
</script>

<style lang="scss" scoped>
$bk_blur: #031428;
.selectBackGround {
  color: #fff;
  width: 100vw;
  height: 100vh;
  background-color: $bk_blur;
	.confirmBtnBox {
		position: absolute;
		bottom: 20px;
		left: 0;
		right: 0;
		font-size: 30px;
	}
}
</style>