<!--
 * @Date: 2022-06-16 23:37:48
 * @LastEditors: 'wanghq18' 'wanghq18@lenovo.com'
 * @LastEditTime: 2022-06-21 16:45:09
 * @FilePath: \zb\src\views\selectLevel\index.vue
-->
<template>
  <div class="selectLevel">
    <TopUserinfo></TopUserinfo>
    <div class="contentBox">
      <ul class="levelBox">
        <li class="levelItem level01" @click="goToGame(true)">
          <img src="@/assets/gameSection/jichu.png" alt="">
        </li>
        <li class="levelItem level02" @click="goToGame(false)">
          <img src="@/assets/gameSection/renji.png" alt="">
        </li>
        <li class="levelItem level03" @click="goToGame(false)">
          <img src="@/assets/gameSection/zhichang.png" alt="">
        </li>
      </ul>
    </div>
    <div class="beginBtnBox">
      <img src="@/assets/gameSection/begin.png" alt="">
    </div>
  </div>
</template>

<script>
import TopUserinfo from '@/components/TopUserInfo.vue'
export default {
  components: {
    TopUserinfo,
  },
  setup () {

    /**
     * @description: 进入游戏
     * @return {*}
     */
    const goToGame = val => {
      if(val) {
        console.log('进入基础游戏')
      } else {
        alert('需要关联角色授权、台本管理授权')
      }
    }

    return {
      goToGame,
    }
  }
}
</script>

<style lang="scss" scoped>
$bk_blur: #031428;
.selectLevel {
  color: #fff;
  width: 100vw;
  height: 100vh;
  background-color: $bk_blur;
  .contentBox {
    display: flex;
    justify-content: center;
    .levelBox {
      display: flex;
      margin-top: 160px;
      .levelItem {
        
      }
    }
  }
  .beginBtnBox {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 0;
    img {
      cursor: pointer;
    }
  }
}
</style>