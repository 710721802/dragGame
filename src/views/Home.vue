<!--
 * @Date: 2022-06-01 14:04:39
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-07-17 19:19:08
 * @FilePath: \zb\src\views\Home.vue
-->
<template>
  <div class="homePage">
    <div class="centerBox">
      <div class="top-title">
        Hi！欢迎来到小宇宙~
      </div>
      <img class="indexLogo" alt="Vue logo" src="@/assets/index_icon.png">
      <div class="bottom-box">
        <button class="btn" @click="goTo('login')">
          立即进入
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  setup() {
    const router = useRouter()
    const goTo = (path) => {
      router.push(
        {
          path: path
        }
      )
    }
    return {
      goTo,
    }
  }
}
</script>
<style lang="scss" scoped>
$bk_blur: #031428;
.homePage {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: $bk_blur;
  display: flex;
  justify-content: center;
  align-items: center;
  .top-title {
    font-size: 30px;
    color: #fff;
    margin-bottom: 16px;
  }
  .bottom-box {
    margin-top: 57px;
    .btn {
      width: 257px;
      height: 60px;
      border-radius: 30px;
      font-size: 24px;
      font-weight: bold;
    }
  }
  .indexLogo {
    width: 400px;
  }
}
@media screen and (max-width: 1000px) {
.homePage {
  .top-title {
    transform: scale(.6);
  }
  .bottom-box {
    .btn {
      transform: scale(.6);
    }
  }
  .indexLogo {
    width: 200px;
  }
}
}
</style>
