<!--
 * @Date: 2022-06-12 18:03:44
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-06-12 23:48:21
 * @FilePath: \zb\src\views\gameMainPage\index.vue
-->
<template>
  <div class="gameMainPage">
    <TopUserinfo></TopUserinfo>
    <div class="game-box">
      <div class="top-btns-box">
        <van-button
          round
          type="primary"
          v-for="item in stepInfo"
          :key="item.key"
          :disabled="gameStepNumber !== item.key"
        >
          {{item.value}}
        </van-button>
        <span class="line"></span>
        <van-button round type="primary">完成</van-button>
      </div>
      <van-steps :active="gameStepNumber">
        <van-step></van-step>
        <van-step></van-step>
        <van-step></van-step>
        <van-step></van-step>
        <van-step></van-step>
        <van-step></van-step>
        <van-step></van-step>
      </van-steps>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import TopUserinfo from '@/components/TopUserInfo.vue'
export default {
  components: {
    TopUserinfo
  },
  setup () {
    const gameStepNumber = ref(2)
    const stepInfo = ref([
      {
        value: '角色',
        key: 0
      },
      {
        value: '情绪',
        key: 1
      },
      {
        value: '人际关系',
        key: 2
      },
      {
        value: '心境属性',
        key: 3
      },
      {
        value: '生理',
        key: 4
      },
      {
        value: '环境',
        key: 5
      },
    ])

    return {
      gameStepNumber,
      stepInfo,
    }
  }
}
</script>

<style lang="scss" scoped>
$bk_blur: #031428;
.gameMainPage{
  color: #fff;
  width: 100vw;
  height: 100vh;
  background-color: $bk_blur;
  .game-box{
    border: 2px solid #fff;
    padding: 26px;
    box-sizing: border-box;
    width: calc(100% - 52px);
    margin: 0 auto;
    min-height: 200px;
    .top-btns-box{
      display: flex;
      justify-content: space-between;
      .line {
        display: inline-block;
        width: 2px;
        height: 44px;
        background-color: #fff;
      }
      .van-button--normal{
        font-size: 16px;
        min-width: 102px;
      }
    }
  }
  
}

</style>