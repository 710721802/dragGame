<!--
 * @Date: 2022-06-16 23:37:48
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-06-18 00:08:06
 * @FilePath: \zb\src\views\selectLevel\index.vue
-->
<template>
  <van-overlay :show="show" @click="show = false">
    <div class="wrapper" @click.stop>
      <div class="block" />
    </div>
  </van-overlay>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>