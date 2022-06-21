<!--
 * @Date: 2022-06-12 18:03:44
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-06-22 00:57:41
 * @FilePath: \zb\src\views\gameMainPage\index.vue
-->
<template>
  <div class="gameMainPage">
    <TopUserinfo></TopUserinfo>
    <div class="center-stage"></div>
    <div class="game-box">
      <Vue3DraggableResizable
        style="z-index: 3;"
        v-for="(item, index) in modelImgDataList"
        :key="index"
        :initW="item.initW"
        :initH="item.initH"
        v-model:x="item.x"
        v-model:y="item.y"
        v-model:w="item.w"
        v-model:h="item.h"
        :active="item.active"
        :draggable="item.draggable"
        :resizable="item.resizable"
        @activated="print('activated')"
        @deactivated="print('deactivated')"
        @drag-start="print('drag-start', modelImgDataList[index], index)"
        @drag-end="print('drag-end', modelImgDataList[index], index)"
        @resize-start="print('resize-start')"
        @dragging="print('dragging')"
        @resizing="print('resizing')"
        @resize-end="print('resize-end')"
        @click="draggableClick(index)"
      >
        <img style="width:100%;" :style="{transform: `rotate(${item.towards}deg)`}" :src="getImgUrl(item.imgUrl)" alt="">
      </Vue3DraggableResizable>
      <div class="top-box">
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
      </div>
      <!--  底部操作按钮 -->
      <div class="bottom-box">
        <div class="left">
          <span @click="rotateRole(-15)" class="add">
            <img src="@/assets/game/add.png" alt="">
          </span>
          <span class="center">
            <img src="@/assets/game/center.png" alt="">
          </span>
          <span @click="rotateRole(15)" class="subtract">
            <img src="@/assets/game/subtract.png" alt="">
          </span>
        </div>
        <div class="right">
          <div
            class="item"
            v-for="(item, index) in addModelBoxList[gameStepNumber]"
            :key="index"
          >
            <span class="name" v-show="item.showAdd">
              {{item.defaultName}}
            </span>
            <img
              v-show="item.showAdd"
              @click="goEditaddModelData(index)"
              src="@/assets/game/imgBk.png"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <addModel
    ref="addModelModal"
    @addModelData="addModelData"
    :modelData="modelImgDataList"
  ></addModel>
</template>

<script>
import { ref } from '@vue/reactivity'
import { watchEffect } from '@vue/runtime-core'
import TopUserinfo from '@/components/TopUserInfo.vue'
import addModel from "./components/addModel.vue"
import { ADD_MODEL_BOX_LIST } from './data'
export default {
  components: {
    TopUserinfo,
    addModel,
  },
  setup () {
    // 添加模型弹框
    const addModelModal = ref(null)
    const gameStepNumber = ref(1)
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
    const currentModelImgIndex = ref(null)
    // 所有添加进来的模型数据
    const modelImgDataList = ref([
      {
        name: 'name',
        imgUrl: `images/model/红色/俯视/中年男`,
        initW: 100,
        initH: 100,
        x: 302,
        y: 520,
        w: 100,
        h: 100,
        towards: 0,
        active: true,
        draggable: true,
        resizable: false,
      }
    ])
    // 底部模型添加框
    const addModelBoxList = ref(ADD_MODEL_BOX_LIST) 

    // 获取图片
    /**
     * @description: 获取图片
     * @param {*} name
     * @return {void}
     */
    const getImgUrl = (name) => {
      if(name){
        return require(`@/assets/${name}.png`) ? require(`@/assets/${name}.png`) : ''
      }
    }
    let modelBeginCoords = {
      x: 0,
      y: 0
    }
    const print = (val, obj, index) => {
      
      switch (true) {
        // 拖拽开始
        case val === 'drag-start':
          currentModelImgIndex.value = index
          console.log(modelImgDataList.value[index]);
          modelBeginCoords.x = modelImgDataList.value[index].x
          modelBeginCoords.y = modelImgDataList.value[index].y
        console.log('drag-start')
        break
        // 拖拽中
        case val === 'dragging':
          console.log(modelBeginCoords)
          console.log('dragging')
        break
        // 拖拽结束
        case val === 'drag-end':
          if(obj.x > 700 || obj.x < 170 || obj.y < 125 || obj.y > 420) {
            modelImgDataList.value[index].x = modelBeginCoords.x
            modelImgDataList.value[index].y = modelBeginCoords.y
          }
        console.log('drag-end', index)
        break

      }
    }
    
    // 点击组件事件
    /**
     * @description: 点击拖拽组件
     * @param {*} index 
     * @return {void}
     */
    const draggableClick = index => {
      console.log(index,'----index')
      currentModelImgIndex.value = index
    }
    
    /**
     * @description: 添加模型
     * @param {*} obj 模型对象
     * @return {void}
     */
    const addModelData = obj => {
      if(obj){
        modelImgDataList.value = [...modelImgDataList.value, obj]
      }
    }

    /**
     * @description: 跳转编辑模型
     * @param {*} index
     * @return {*}
     */
    const goEditAddModel = index => {
      router.push({
        name: 'AddModel',
        params: {
          index: index,
        }
      })
    }

    
    /**
     * @description: 添加编辑模型
     * @param {*} index
     * @return {*}
     */
    const goEditaddModelData = (index) => {
      addModelModal.value.showModal(index)
      addModelBoxList.value[gameStepNumber.value][index].showAdd = false
    }

    const rotateRole = val => {
      modelImgDataList.value[currentModelImgIndex.value].towards += val
      if(modelImgDataList.value[currentModelImgIndex.value].towards >= 360 || modelImgDataList.value[currentModelImgIndex.value].towards <= -360){
        modelImgDataList.value[currentModelImgIndex.value].towards = 0
      }
      console.log(modelImgDataList.value[currentModelImgIndex.value].towards)
    }

    addModelData()
    watchEffect(() => {
      console.log(111111,modelImgDataList.value)
    })
    return {
      gameStepNumber,
      stepInfo,
      modelImgDataList,
      currentModelImgIndex,
      addModelModal,
      addModelBoxList,
      print,
      getImgUrl,
      draggableClick,
      addModelData,
      goEditAddModel,
      goEditaddModelData,
      rotateRole,
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
  .center-stage{
    width: 620px;
    height: 620px;
    border-radius: 50%;
    left: 50%;
    margin-left: -310px;
    position: absolute;
    background-color: #fff;
  }
  .game-box{
    position: relative;
    z-index: 1;
    border: 2px solid #fff;
    box-sizing: border-box;
    // width: calc(100% - 52px);
    // min-height: calc(100% - 145px);
    width: 966px;
    height: 622px;
    margin: 0 auto;
    .top-box {
      background: linear-gradient(#031429, #0B3972);
      padding: 15px 20px;
    }
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
    .bottom-box {
      width: 100%;
      height: 100px;
      background: #00152E;
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        align-items: center;
        
        .add {
          margin: 0 20px 0 20px;
        }
        .center {
          margin-right: 20px;
        }
        .subtract {
          margin-right: 20px;
        }
      }
      .right {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .item {
          font-size: 0;
          width: 120px;
          height: 92px;
          background-color: #fff;
          border-radius: 6px;
          overflow: hidden;
          margin-right: 10px;
          position: relative;
          .name {
            position: absolute;
            font-size: 10px;
            font-weight: bold;
            color: #999;
            display: inline-block;
            bottom: 5px;
            left: 0;
            right: 0;
          }
        }
      }
    }
  }
  
}

</style>