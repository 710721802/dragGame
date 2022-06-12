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
    padding: 26px;
    display: flex;
    justify-content: space-between;
  }
</style>