<!--
 * @Date: 2022-06-16 23:37:48
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-07-16 13:17:50
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
      <img src="@/assets/gameSection/begin.png" @click="goTo('SelectBackGround')" alt="">
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import TopUserinfo from '@/components/TopUserInfo.vue'
export default {
  components: {
    TopUserinfo,
  },
  setup () {
    const router = useRouter()
    const goTo = (path) => {
      router.push(
        {
          path: path
        }
      )
    }

    

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
      goTo,
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
@media screen and (max-width: 1000px) {
.selectLevel {
  .contentBox {
    display: flex;
    justify-content: center;
    .levelBox {
      margin-top: .6rem;
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
      padding: 0 .3rem;
      justify-content: center;
      align-items: center;
      .levelItem {
        width: 20%;
        img {
          width: 100%;
        }
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
      width: 5rem;
    }
  }
}
}
</style>