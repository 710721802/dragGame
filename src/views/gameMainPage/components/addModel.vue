<!--
 * @Date: 2022-06-16 22:11:33
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-06-18 00:29:37
 * @FilePath: \zb\src\views\gameMainPage\components\addModel.vue
-->
<template>
  <van-overlay class="addModel" :show="show">
    <div class="wrapper" @click.stop>
      <TopUserinfo></TopUserinfo>
      <div class="game-box">
        <van-button class="okBtn" type="primary" @click="hideModal">确认</van-button>
      </div>
    </div>
  </van-overlay>
</template>

<script>
import { ref } from '@vue/reactivity'
import TopUserinfo from '@/components/TopUserInfo.vue'
export default {
  components: {
    TopUserinfo,
  },
  setup () {
    const show = ref(true)
    const showModal = (index) => {
      console.log(index,'添加模型')
      show.value = true
    }
    const hideModal = () => {
      show.value = false
    }
    
    return {
      show,
      showModal,
      hideModal,
    }
  }
}
</script>

<style lang="scss" scoped>
$bk_blur: #031428;
.addModel {
  color: #fff;
  width: 100vw;
  height: 100vh;
  background-color: $bk_blur;
  .game-box {
    position: relative;
    z-index: 1;
    border: 2px solid #fff;
    box-sizing: border-box;
    // width: calc(100% - 52px);
    // min-height: calc(100% - 145px);
    width: 966px;
    height: 622px;
    margin: 0 auto;
    .okBtn {
      width: 100px;
      height: 40px;
      border-radius: 20px;
      position: absolute;
      right: 24px;
      top: 32px;
      background: linear-gradient(#EFCB49, #DA7700);
    }
  }
}
</style>