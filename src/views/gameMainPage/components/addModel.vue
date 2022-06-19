<!--
 * @Date: 2022-06-16 22:11:33
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-06-19 17:11:24
 * @FilePath: \zb\src\views\gameMainPage\components\addModel.vue
-->
<template>
  <van-overlay class="addModel" :show="show">
    <div class="wrapper" @click.stop>
      <TopUserinfo></TopUserinfo>
      <div class="game-box">
        <van-button class="okBtn" type="primary" @click="hideModal">确认</van-button>
        <div class="cjjs">
          创建角色
        </div>
        <div class="nameAndAgeBox">
          <label for="name">角色昵称 </label>
          <input
            type="text"
            name="name"
          >
          <label for="age">角色年龄 </label>
          <input
            type="number"
            value="10"
            name="age"
          >
        </div>
        <!-- 选择角色样式 -->
        <div class="chooseRoleStyle">
          <div class="title">选择角色样式</div>
          <ul class="roleListBox">
            <li
              class="roleItem"
              v-for="(item, index) in ROLE_STYLE"
              :key="index"
              :class="{current: currenStyleIndex === index}"
              @click="currenStyleIndex = index"
            >
              <div class="imgBox">
                <img :src="getImgUrl(`images/model/灰色/正视/${item.value}`)" alt="">
              </div>
              <div class="name">
                {{item.value}}
              </div>
            </li>
          </ul>
        </div>
        <!-- 选择角色颜色 -->
        <div class="chooseRoleColor">
          <div class="title">选择角色颜色</div>
          <ul class="colorBox">
            <li
              v-for="(item, index) in ROLE_COLOR"
              :key="item.key"
              :style="{backgroundColor: item.value}"
              :class="{current: currentColorIndex === index}"
              @click="currentColorIndex = index"
            >
            </li>
          </ul>
        </div>
        <!-- 模型选择结果展示 -->
        <div class="showModelImg">
          <img :src="getImgUrl(`images\/model\/${ROLE_COLOR[currentColorIndex].colorName}\/正视\/${ROLE_STYLE[currenStyleIndex].value}`)" alt="">
        </div>
      </div>
    </div>
  </van-overlay>
</template>

<script>
import { ref } from '@vue/reactivity'
import TopUserinfo from '@/components/TopUserInfo.vue'
import { ROLE_COLOR, ROLE_STYLE } from './data'
export default {
  components: {
    TopUserinfo,
  },
  setup () {
    const show = ref(false)
    // 选中的颜色index
    const currentColorIndex = ref(0)
    // 选中的角色样式index
    const currenStyleIndex = ref(0)
    const showModal = (index) => {
      console.log(index,'添加模型')
      show.value = true
    }
    const hideModal = () => {
      show.value = false
    }
    
    
    // 获取图片
    /**
     * @description: 获取图片
     * @param {*} name
     * @return {void}
     */
    const getImgUrl = (name) => {
      return require(`@\/assets\/${name}.png`)
    }

    return {
      show,
      ROLE_COLOR,
      ROLE_STYLE,
      currentColorIndex,
      currenStyleIndex,
      showModal,
      hideModal,
      getImgUrl,
    }
  }
}
</script>

<style lang="scss" scoped>
$bk_blur: #031428;
@mixin linearBkTitle {
  font-size: 17px;
  width: 200px;
  background: -webkit-linear-gradient(left, rgba(0, 114, 255, 0.68), rgba(45, 124, 255, 0));
  padding: 2px 0 2px 10px;
  margin-bottom: 5px;
}
@mixin currentChoseBlock {
  content: '√';
  display: inline-block;
  text-align: center;
  width: 20px;
  height: 20px;
  line-height: 20px;
  background-color: #FFBA00;
  position: absolute;
}
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
    text-align: left;
    .okBtn {
      width: 100px;
      height: 40px;
      border-radius: 20px;
      position: absolute;
      right: 24px;
      top: 32px;
      background: linear-gradient(#EFCB49, #DA7700);
    }
    .cjjs {
      padding: 33px 0 29px 25px;
      font-size: 36px;
      font-style: italic;
      font-weight: bold;
      line-height: 1em;
    }
    .nameAndAgeBox {
      margin-left: 25px;
      input {
        color: #333;
        width: 140px;
        height: 38px;
        margin-right: 28px;
        border-radius: 6px;
        padding: 0 10px;
      }
    }
    .chooseRoleStyle {
      padding: 30px 0 16px 25px;
      .title {
        @include linearBkTitle;
      }
      .roleListBox {
        display: flex;
        flex-wrap: wrap;
        width: 500px;
        .roleItem {
          width: 92px;
          height: 92px;
          background-color: #fff;
          margin: 0 8px 10px 0;
          position: relative;
          &.current::before {
            @include currentChoseBlock;
          }
          .imgBox {
            height: 75px;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              height: 80%;
            }
          }
          .name {
            height: 17px;
            line-height: 17px;
            font-size: 12px;
            text-align: center;
            background-color: #0A305F;
          }
        }
      }
    }
    .chooseRoleColor {
      padding: 0 0 26px 25px;
      .title {
        @include linearBkTitle;
      }
      .colorBox {
        display: flex;
        li {
          width: 36px;
          height: 36px;
          margin-right: 6px;
          &.current::before {
            @include currentChoseBlock;
          }
        }
      }
    }
    .showModelImg {
      position: absolute;
      right: 64px;
      bottom: 80px;
    }
  }
}
</style>