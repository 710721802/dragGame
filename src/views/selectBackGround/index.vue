<!--
 * @Author: 'wanghq18' 'wanghq18@lenovo.com'
 * @Date: 2022-06-21 17:20:00
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-06-25 17:07:22
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
			{{bkImgIndex}}
			<div class="swiperBox">
				<img @click="goPrevNext('prev')" class="controlBtn left" src="@/assets/gameSection/icon-left.png" alt="">
				<van-swipe
					class="my-swipe"
					ref="mySwipe"
					indicator-color="white"
					@change="handelSwipeChange"
				>
					<van-swipe-item v-for="item in imgData" :key="item">
						<img :src="item.url" alt="">
					</van-swipe-item>
				</van-swipe>
				<img @click="goPrevNext('next')" class="controlBtn right" src="@/assets/gameSection/icon-right.png" alt="">
			</div>
			
		</div>
		<div class="confirmBtnBox">
			<img  @click="goTo('gameMainPage')" class="btnImg" src="@/assets/gameSection/confirm.png" alt="">
			<img class="bkImg" src="@/assets/gameSection/bottomBk.png" alt="">
		</div>
	</div>
</template>

<script>
import { useRouter } from 'vue-router'
import TopUserinfo from '@/components/TopUserInfo.vue'
import { ref } from '@vue/reactivity'
import { IMG_DATA } from '@/views/gameMainPage/data.js'
export default {
  components: {
    TopUserinfo,
  },
	setup () {
    const router = useRouter()
		// 轮播图
    const imgData = ref(IMG_DATA)
		// 获取swiper dom
		const mySwipe = ref(null)
		// 当前轮播图index
		const bkImgIndex = ref(0)
    const goTo = (path) => {
      router.push(
        {
          path: path,
					query: {
						bkImgindex: bkImgIndex.value
					}
        }
      )
    }
		const goPrevNext = (style) => {
			if(style == 'prev') {
				mySwipe.value.prev()
			} else {
				mySwipe.value.next()
			}
		}

  /**
   * @description: 轮播图变化时的事件
   * @param {*} index
   * @return {void}
   */
		const handelSwipeChange = (index) => {
			bkImgIndex.value = index
		}

		return {
			imgData,
			goTo,
			goPrevNext,
			mySwipe,
			handelSwipeChange,
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
	background-image: url('../../assets/gameSection/bkImg.png');
	background-size: 100% 100%;
	.contentBox {
		.title {
			margin-bottom: 47px;
		}
		.swiperBox {
			display: flex;
			align-items: center;
			justify-content: center;
			.controlBtn {
				width: 34px;
				height: 110px;
			}
			.my-swipe {
				width: 630px;
				height: 374px;
				margin: 0 32px;
				border-radius: 10px;
				overflow: hidden;
				font-size: 0;
				img {
					width: 100%;
					height: 100%;
					border: 4px solid #ccc;
					box-sizing: border-box;
					border-radius: 12px;
				}
		}
		
		}
	}
	.confirmBtnBox {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		font-size: 30px;
		font-size: 0;
		.btnImg {
			position: relative;
			margin-bottom: -50px;
		}
		.bkImg {
			width: 100%;
		}
	}
}
</style>