<!--
 * @Date: 2022-06-12 18:03:44
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-08-10 00:17:54
 * @FilePath: \zb\src\views\gameMainPage\index.vue
-->
<template>
  <div class="gameMainPage">
    <TopUserinfo></TopUserinfo>
    <div class="game-box" :style="{backgroundImage: 'url(' + imgData[bkImgIndex].url + ')'}">
      <!-- <div class="center-stage" :style="{transform: `scale(${stageWidthScale})`}"> -->
      <div class="center-stage" ref="centerStage">
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
          @dblclick="draggableDblclick(index)"
          
        >
          <div class="name">
            {{item.name}}
             <!-- - {{item.defaultName}} -->
          </div>
          <img style="width:60%;" :style="{transform: `rotate(${item.towards}deg)`}" :src="getImgUrl(item.imgUrl)" alt="">
        </Vue3DraggableResizable>
        <img class="center-stage-door" src="@/assets/door.png" alt="">
      </div>
      <!-- 模型 -->
      
      <!-- 顶部 -->
      <div class="top-box" :class="{hide: isHideTop}">
        <div class="top-btns-box">
          <van-button
            round
            type="primary"
            v-for="(item, index) in stepInfo"
            :key="item.key"
            :disabled="item.isFinished"
            @click="clickStep(index)"
            :class="{current: index === gameStepNumber}"
          >
            {{item.value}}
          </van-button>
          <span class="line"></span>
          <van-button
            round
            type="primary"
            @click="handelFinish"
            :disabled="!showFinishBtn"
          >
            完成
          </van-button>
          <!-- <van-button
            round
            type="primary"
            :disabled="!isGoNext"
            @click="handelNextStep"
            v-else
          >
            下一步
          </van-button> -->
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
            <div class="con">
              <img
                v-show="item.showAdd"
                @click="goEditaddModelData(index, item)"
                src="@/assets/game/imgBk.png"
                alt=""
              ><br>
              <span class="name">
                {{item.defaultName}}
              </span>
            </div>
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
    @editModelData="editModelData"
    :modelData="modelImgDataList"
  ></addModel>
  <van-dialog v-model:show="showInfoModal">
    <div class="tipsContentBox">
      {{tipsContent}}
    </div>
  </van-dialog>
</template>

<script>
import { ref } from '@vue/reactivity'
import TopUserinfo from '@/components/TopUserInfo.vue'
import addModel from "./components/addModel.vue"
import { ADD_MODEL_BOX_LIST, IMG_DATA, STEP } from './data'
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from '@vue/runtime-core'
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
    const isHideTop = ref(false)
    const showInfoModal = ref(false)
    const tipsContent = ref('')
    // 舞台弹框
    const centerStage = ref()
    // 添加模型弹框
    const addModelModal = ref(null)
    const gameStepNumber = ref(0)
    // 每一步的模型是否添加完成
    const isAddFinish = ref(false)
    // 是否全部拖入舞台
    const isAllAtStage = ref(false)
    // 是否可点击下一步
    const isGoNext = ref(true)
    // show 完成按钮
    const showFinishBtn = ref(false)
    const stepInfo = ref(STEP)
    // 可拖拽模型图片数据
    const currentModelImgIndex = ref(null)
    // 所有添加进来的模型数据
    const modelImgDataList = ref([])
    // 底部模型添加框
    const addModelBoxList = ref(ADD_MODEL_BOX_LIST)
    // 获取图片
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
    // 保存拖拽前的位置
    // let modelBeginCoords = {
    //   x: 0,
    //   y: 0
    // }
    const print = (val, obj, index) => {
      switch (true) {
        // 拖拽开始
        case val === 'drag-start':
          currentModelImgIndex.value = index
          // modelBeginCoords.x = modelImgDataList.value[index].x
          // modelBeginCoords.y = modelImgDataList.value[index].y
          break

        // 拖拽中
        case val === 'dragging':
          // console.log('dragging')
          break
        // 拖拽结束

        case val === 'drag-end':
          // 超出圆盘>>拖拽失败
          // let dx = Math.abs(obj.x + 40 - 250)
          // let dy = Math.abs(obj.y + 40 - 250)
          // let dis = Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2))
          // if(dis > 250) {
          //   modelImgDataList.value[index].x = modelBeginCoords.x
          //   modelImgDataList.value[index].y = modelBeginCoords.y
          // }
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
          
          // isGoNext.value = isAddFinish.value && isAllAtStage.value
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
    let touchTime = ref(0)
    const draggableClick = index => {
      
      touchTime.value++
      if(touchTime.value == 2) {
        touchTime.value = 0
        addModelModal.value.editModel(index)
      }
      setTimeout(function () {
        if (touchTime.value == 1) {
            touchTime.value = 0 
            currentModelImgIndex.value = index
        }
      }, 250)
    }
    
    /**
     * @description: 双击模型
     * @param {*} index
     * @return {void}
     */
    const draggableDblclick = (index) => {
      console.log(index)
      currentModelImgIndex.value = index
      addModelModal.value.editModel(index)
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
      // 定义一个数组，判断是否模型全部添加
      const ArrFlag = []
      // 如果有模型没添加，往数组中push一个true
      addModelBoxList.value.forEach(item => {
        item.forEach(item02 => {
          if(item02.showAdd){
            ArrFlag.push(true)
          }
        })
      })
      // 如果数组中没有元素，说明已经添加完成
      if(ArrFlag?.length) {
        showFinishBtn.value = false
      } else {
        showFinishBtn.value = true
      }
    }
    
    const editModelData = obj => {
      console.log('222222222');
      if(obj){
        modelImgDataList.value[currentModelImgIndex.value] = obj
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
      // isGoNext.value = false
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

    const clickStep = index => {
      gameStepNumber.value = index
      if (gameStepNumber.value === 2) {
        showInfoModal.value = true
        tipsContent.value = '请邀请至少一位你生活中很重要的人来到这个舞台'
      } else if (gameStepNumber.value === 4) {
        showInfoModal.value = true
        tipsContent.value = '请邀请生理角色进入舞台,TA可以是某个让你在意的身体部位或生理感受'
      } else if (gameStepNumber.value === 5) {
        tipsContent.value = '请邀请环境角色进入舞台,TA是近期让你印象深刻或对你造成一定影响的地方'
        showInfoModal.value = true
      }
    }

    const setStateSize = () => {
      history.go(0)
    }
    onMounted(() => {
      localStorage.setItem('stageWidth', centerStage.value.clientWidth)
      localStorage.setItem('stageHeight', centerStage.value.clientHeight)
      localStorage.setItem('stageCoordX', centerStage.value.offsetLeft + centerStage.value.clientWidth / 2)
      localStorage.setItem('stageCoordY', centerStage.value.offsetTop + centerStage.value.clientHeight / 2)
      window.onresize = setStateSize
    })
    return {
      centerStage,
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
      touchTime,
      showInfoModal,
      tipsContent,
      print,
      getImgUrl,
      draggableClick,
      draggableDblclick,
      addModelData,
      editModelData,
      goEditaddModelData,
      rotateRole,
      handelNextStep,
      handelFinish,
      clickStep,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./scss/index.scss";
</style>