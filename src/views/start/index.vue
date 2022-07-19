<!--
 * @Date: 2022-06-12 16:47:33
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-07-17 19:20:26
 * @FilePath: \zb\src\views\start\index.vue
-->
<template>
  <div class="startPage">
    <TopUserinfo></TopUserinfo>
    <div class="title-box">
      我的小宇宙
    </div>
    <div class="btn-box">
      <van-button
        type="primary"
        class="btn"
        size="large"
        @click="goTo('SelectLevel')"
      >
        开始
      </van-button>
      <van-button
        type="primary"
        class="btn"
        size="large"
        @click="goTo('Result')"
      >
        查看报告
      </van-button>
      <van-button
        type="primary"
        class="btn"
        size="large"
        @click="goTo('Login')"
      >
        退出
      </van-button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import TopUserinfo from '@/components/TopUserInfo.vue'
export default {
  components: {
    TopUserinfo
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
.startPage{
  color: #fff;
  width: 100vw;
  height: 100vh;
  background-color: $bk_blur;
  .title-box{
    font-size: 80px;
    margin: 60px 0 50px 0;
  }
  .btn-box{
    width: 356px;
    margin: 0 auto;
    .btn {
      margin-bottom: 20px;
      border-radius: 6px;
    }
  }
}
@media screen and (max-width: 1000px) {
// .startPage{
//   .title-box{
//     font-size: .6rem;
//     margin: .3rem 0 .2rem 0;
//   }
//   .btn-box{
//     width: 4rem;
//     margin: 0 auto;
//     .btn {
//       margin-bottom: .1rem;
//       border-radius: 6px;
//     }
//   }
// }
}
</style>