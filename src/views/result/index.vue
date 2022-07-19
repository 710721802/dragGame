<!--
 * @Date: 2022-06-25 23:18:00
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-07-19 21:33:17
 * @FilePath: \zb\src\views\result\index.vue
-->
<template>
  <div class="result">
		<TopUserinfo></TopUserinfo>
    <div class="contentBox">
      <div class="topBox">
        <van-button
          class="btn cancelBtn"
          type="primary"
        >
          取消
        </van-button>
        <img class="title" src="@/assets/gameSection/get-result.png" alt="">
        <van-button
          class="btn okBtn"
          type="primary"
          @click="goTo('Start')"
        >
          确认
        </van-button>
      </div>
      <div class="resultBox">
        <div class="top"></div>
        <div class="content">
          <div class="wordBox">
            您好！您的评估结果为：<span class="green">健康</span>
          </div>
          <div class="imgBox">
            <img src="@/assets/gameSection/ma.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopUserinfo from '@/components/TopUserInfo.vue'
import { useRouter } from 'vue-router'
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
    return {
      goTo,
    }
  }
}
</script>

<style lang="scss" scoped>
$bk_blur: #031428;
.result{
  width: 100vw;
  height: 100vh;
  background-color: $bk_blur;
  .topBox {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 30px 0;
    .title {
      margin: 0 180px;
    }
    .btn {
      width: 100px;
      height: 40px;
      border-radius: 20px;
    }
    .cancelBtn {
      background: linear-gradient(#006DF2, #0063DC);
    }
    .okBtn {
      background: linear-gradient(#EFCB49, #DA7700);
    }
  }
  .resultBox {
    width: 800px;
    height: 380px;
    background: #fff;
    margin: 0 auto;
    border: 4px solid #AEAEAE;
    border-radius: 4px;
    .top {
      height: 46px;
      background-color: #000;
      opacity: .6;
    }
    .content {
      text-align: center;
      .wordBox {
        font-size: 30px;
        margin-top: 58px;
        .green {
          color: #00D99E;
        }
      }
      .imgBox {
        margin-top: 20px;
        img {
          width: 200px;
        }
      }
    }
  }
}
</style>