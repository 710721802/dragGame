<!--
 * @Date: 2022-06-11 17:42:59
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-06-11 19:09:29
 * @FilePath: \gamecode\src\views\login\login.vue
-->
<template>
  <div class="loginPage">
    <div class="contentBox">
      <img src="@/assets/index_icon.png" alt="">
      <div class="login-box">

      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
$bk_blur: #031428;
.loginPage {
  width: 100vw;
  height: 100vh;
  background-color: $bk_blur;
  display: flex;
  justify-content: center;
  align-items: center;
  .contentBox{
    width: 100%;
    display: flex;
    justify-content: space-between;
    img {
      margin-left: 40px;
    }
    .login-box{
      width: 350px;
      height: 500px;
      background-color: #192437;
      margin-right: 40px;
    }
  }
}
</style>