<!--
 * @Date: 2022-06-12 16:47:33
 * @LastEditors: 'wanghq18' 'wanghq18@lenovo.com'
 * @LastEditTime: 2022-06-21 17:33:44
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
      <van-button type="primary" class="btn" size="large">查看报告</van-button>
      <van-button type="primary" class="btn" size="large">退出</van-button>
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
    font-size: 100px;
    margin: 160px 0 50px 0;
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
</style>