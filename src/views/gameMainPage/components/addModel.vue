<!--
 * @Date: 2022-06-16 22:11:33
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-06-18 14:00:00
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
        <div class="chooseRoleStyle">
          <div class="title">选择角色样式</div>
          <ul class="roleListBox">
            <li class="roleItem">
              <div class="imgBox">
                <img src="@/assets/game/center.png" alt="">
              </div>
              <div class="name">
                暮年男
              </div>
            </li>
          </ul>
        </div>
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
      font-size: 40px;
      font-style: italic;
      font-weight: bold;
    }
    .nameAndAgeBox {
      margin-left: 25px;
      input {
        color: #333;
        width: 162px;
        height: 38px;
        margin-right: 28px;
        border-radius: 6px;
        padding: 0 10px;
      }
    }
    .chooseRoleStyle {
      padding: 36px 0 26px 25px;
      .title {
        font-size: 17px;
        width: 200px;
        background: -webkit-linear-gradient(left, rgba(0, 114, 255, 0.68), rgba(45, 124, 255, 0));
        padding: 6px 0 6px 10px;
      }
      .roleListBox {
        .roleItem {
          width: 92px;
          height: 92px;
          background-color: #fff;
          .imgBox {
            height: 75px;
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
  }
}
</style>