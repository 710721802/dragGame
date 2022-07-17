<!--
 * @Date: 2022-06-12 17:39:22
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-07-17 18:39:15
 * @FilePath: \zb\src\components\TopUserInfo.vue
-->
<template>
  <div class="top-box">
    <div class="logo">
      <img src="@/assets/logo.png" alt="">
    </div>
    <div class="user">
      <span>
        用户: {{userName}}
      </span>
    </div>
  </div>
  <OrientLayer></OrientLayer>
</template>

<script>
import { ref } from '@vue/reactivity'
import OrientLayer from '@/components/OrientLayer.vue'
export default {
  components: {
    OrientLayer,
  },
  setup () {
    // 用户名
    const userName = ref(localStorage.getItem('userName'))

    return {
      userName,
    }
  }
}
</script>

<style lang="scss" scoped>
  .top-box{
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
@media screen and (max-width: 1000px) {
  .top-box{
    padding: .2rem .4rem;
    .logo {
      img {
        width: 1rem;
      }
    }
  }
}
</style>