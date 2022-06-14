<!--
 * @Date: 2022-06-12 18:03:44
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-06-13 23:51:45
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
      <!-- 步骤线 -->
      <van-steps :active="gameStepNumber">
        <van-step></van-step>
        <van-step></van-step>
        <van-step></van-step>
        <van-step></van-step>
        <van-step></van-step>
        <van-step></van-step>
        <van-step></van-step>
      </van-steps>
      <Vue3DraggableResizable
        v-for="(item, index) in modelImgDataList"
        :key="item"
        :initW="item.initW"
        :initH="item.initH"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :active="item.active"
        :draggable="item.draggable"
        :resizable="item.resizable"
        @activated="print('activated')"
        @deactivated="print('deactivated')"
        @drag-start="print('drag-start')"
        @resize-start="print('resize-start')"
        @dragging="print('dragging')"
        @resizing="print('resizing')"
        @drag-end="print('drag-end')"
        @resize-end="print('resize-end')"
        @click="draggableClick(index)"
      >
        <img :src="getImgUrl(item.imgUrl)" alt="">
      </Vue3DraggableResizable>
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
    // 可拖拽模型图片数据
    const modelImgDataList = ref([
      {
        name: 'name',
        imgUrl: 'images/model/橙色/正视/正-老年男-橙',
        initW: 100,
        initH: 100,
        x: 100,
        y: 100,
        w: 100,
        h: 100,
        active: true,
        draggable: true,
        resizable: false,
      },
      {
        name: 'name',
        imgUrl: 'images/model/橙色/正视/正-老年女-橙',
        initW: 100,
        initH: 100,
        x: 100,
        y: 100,
        w: 100,
        h: 100,
        active: false,
        draggable: true,
        resizable: false,
      },
    ])
    // 获取图片
    const getImgUrl = (name) => {
      return require(`@/assets/${name}.png`)
    }
    const print = (val) => {
      console.log(val)
    }
    // 点击组件事件
    const draggableClick = index => {
      console.log(index,'----index');
    }
    return {
      gameStepNumber,
      stepInfo,
      modelImgDataList,
      print,
      getImgUrl,
      draggableClick,
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
    min-height: calc(100% - 145px);
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