<!--
 * @Date: 2022-06-12 17:39:22
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-06-13 23:47:45
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
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
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
</style>