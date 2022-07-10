<!--
 * @Date: 2022-06-12 18:03:44
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-07-10 16:11:08
 * @FilePath: \zb\src\views\gameMainPage\index.vue
-->
<template>
  <div class="gameMainPage">
    <TopUserinfo></TopUserinfo>
    <div class="game-box" :style="{backgroundImage: 'url(' + imgData[bkImgIndex].url + ')'}">
      <div class="center-stage" :style="{transform: `scale(${stageWidthScale})`}">
        <Vue3DraggableResizable
          class="dragBoxItem"
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
          <div class="name">
            {{item.name}} - {{item.defaultName}}
          </div>
          <img style="width:60%;" :style="{transform: `rotate(${item.towards}deg)`}" :src="getImgUrl(item.imgUrl)" alt="">
        </Vue3DraggableResizable>
      </div>
      <!-- 模型 -->
      
      <!-- 顶部 -->
      <div class="top-box" :class="{hide: isHideTop}">
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
          <van-button
            round
            type="primary"
            @click="handelFinish"
            v-if="showFinishBtn"
          >
            完成
          </van-button>
          <van-button
            round
            type="primary"
            :disabled="!isGoNext"
            @click="handelNextStep"
            v-else
          >
            下一步
          </van-button>
        </div>
        <div
          @click="isHideTop=!isHideTop"
          class="toggleTopMenuShow"
        >
          <van-icon name="arrow-down" />
        </div>
      </div>
      <!--  底部操作按钮 -->
      <div class="bottom-box" :class="{hide: isHideTop}">
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
              @click="goEditaddModelData(index, item)"
              src="@/assets/game/imgBk.png"
              alt=""
            >
          </div>
        </div>
        <div
          @click="isHideTop=!isHideTop"
          class="toggleTopMenuShow"
        >
          <van-icon name="arrow-up" />
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
import TopUserinfo from '@/components/TopUserInfo.vue'
import addModel from "./components/addModel.vue"
import { ADD_MODEL_BOX_LIST, IMG_DATA, STEP } from './data'
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from '@vue/runtime-core'
import { windowWidth } from 'vant/lib/utils'
export default {
  components: {
    TopUserinfo,
    addModel,
  },
  setup () {
    const route = useRoute()
    const router = useRouter()
    const stageWidthScale = ref(1)
    const bkImgIndex = route.query.bkImgindex
    const isHideTop = ref(true)
    // 添加模型弹框
    const addModelModal = ref(null)
    const gameStepNumber = ref(2)
    // 每一步的模型是否添加完成
    const isAddFinish = ref(false)
    // 是否全部拖入舞台
    const isAllAtStage = ref(false)
    // 是否可点击下一步
    const isGoNext = ref(false)
    const showFinishBtn = ref(false)
    const stepInfo = ref(STEP)
    // 可拖拽模型图片数据
    const currentModelImgIndex = ref(null)
    // 所有添加进来的模型数据
    const modelImgDataList = ref([])
    // 底部模型添加框
    const addModelBoxList = ref(ADD_MODEL_BOX_LIST)
    const imgData = ref(IMG_DATA)

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
          modelBeginCoords.x = modelImgDataList.value[index].x
          modelBeginCoords.y = modelImgDataList.value[index].y
          break

        // 拖拽中
        case val === 'dragging':
          // console.log('dragging')
          break
        // 拖拽结束

        case val === 'drag-end':
          console.log(obj.x,obj.y)
          let dx = Math.abs(obj.x + 40 - 250)
          let dy = Math.abs(obj.y + 40 - 250)
          let dis = Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2))
          console.log(dis,'dis')
          if(dis > 250) {
            modelImgDataList.value[index].x = modelBeginCoords.x
            modelImgDataList.value[index].y = modelBeginCoords.y
          }
          // 拖拽模型，如果都在圆盘中，并且这一步骤的所有模型已添加 >> 可进行下一步
          // 模型是否添加完成
          isAddFinish.value = true
          addModelBoxList.value[gameStepNumber.value].forEach((item) => {
            if(item.showAdd == true){
              isAddFinish.value = false
            }
          })
          // 是否全部拖入舞台
          isAllAtStage.value = true
          modelImgDataList.value.forEach((item) => {
            if(item.y > 418){
              isAllAtStage.value = false
            }
          })
          
          isGoNext.value = isAddFinish.value && isAllAtStage.value
          // 如果是人际关系，则只需拖动一个模型就可以进行下一步
          if (gameStepNumber.value == 2) {
            isGoNext.value = true
          }
          // 如果是最后一部，切满足下一步条件，就可以点击完成
          if (gameStepNumber.value == 5 && isAllAtStage.value) {
            showFinishBtn.value = true
          }
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
      // 如果是第六步环境，只让选择一个模型加入
      if (gameStepNumber.value == 5) {
        addModelBoxList.value[5].forEach(item => {
          item.showAdd = false
        })
      }
    }
    
    /**
     * @description: 添加编辑模型
     * @param {*} index
     * @return {*}
     */
    const goEditaddModelData = (index, item) => {
      addModelModal.value.showModal(index, item)
      addModelBoxList.value[gameStepNumber.value][index].showAdd = false
    }

    /**
     * @description: 旋转模型
     * @param {number} val 每一步旋转角度
     * @return {void}
     */
    const rotateRole = val => {
      modelImgDataList.value[currentModelImgIndex.value].towards += val
      if(modelImgDataList.value[currentModelImgIndex.value].towards >= 360 || modelImgDataList.value[currentModelImgIndex.value].towards <= -360){
        modelImgDataList.value[currentModelImgIndex.value].towards = 0
      }
    }

    /**
     * @description: 下一步
     * @return {void}
     */
    const handelNextStep = () => {
      gameStepNumber.value++
      isGoNext.value = false
    }

    /**
     * @description: 提交数据-完成-返回结果
     * @return {void}
     */
    const handelFinish = () => {
      router.push({
        name: 'Result',
        // params: {
        //   index: index,
        // }
      })
    }

    const setStateSize = () => {
      // let windowWidth = window.innerWidth
      // stageWidthScale.value = window.innerWidth / 1920

    }
    onMounted(() => {
      setStateSize()
      window.onresize = setStateSize
    })
    return {
      stageWidthScale,
      bkImgIndex,
      gameStepNumber,
      stepInfo,
      modelImgDataList,
      currentModelImgIndex,
      addModelModal,
      addModelBoxList,
      imgData,
      isAllAtStage,
      isAddFinish,
      isGoNext,
      showFinishBtn,
      isHideTop,
      print,
      getImgUrl,
      draggableClick,
      addModelData,
      goEditaddModelData,
      rotateRole,
      handelNextStep,
      handelFinish,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./scss/index.scss";
</style>