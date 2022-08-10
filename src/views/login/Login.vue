<!--
 * @Date: 2022-06-11 17:42:59
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-08-11 00:25:32
 * @FilePath: \zb\src\views\login\Login.vue
-->
<template>
  <div class="loginPage">
    <div class="contentBox">
      <img src="@/assets/index_icon.png" alt="">
      <div class="login-box">
        <div class="login-box-title">登录</div>
        <van-form @submit="onSubmit">
          <van-cell-group inset>
            <div class="label-title">用户名:</div>
            <van-field
              v-model="username"
              name="userName"
              label=""
              :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <div class="label-title">密码:</div>
            <van-field
              v-model="password"
              type="password"
              name="password"
              label=""
              :rules="[{ required: true, message: '请填写密码' }]"
            />
          </van-cell-group>
          <div class="form-submit-btn">
            <van-button block type="primary" native-type="submit">
              提交
            </van-button>
          </div>
        </van-form>
        <div class="bottom-logo">
          <img src="@/assets/images/login/xiaoyuzhou.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import request from '@/utils/request'
export default {
  setup() {
    const router = useRouter()
    const username = ref('');
    const password = ref('');
    const onSubmit = (values) => {
      console.log('submit', values);
      localStorage.setItem('userName',values.userName)
      router.push(
        {
          path: 'start'
        }
      )
    }
    
    let login = () => {
      request.get('/pet/2').then(res=>{
        console.log(res)
      })
    }
    login()

    return {
      username,
      password,
      onSubmit,
    };
  },
}

</script>

<style lang="scss" scoped>
$bk_blur: #031428;
.loginPage {
  width: 100vw;
  height: 100vh;
  background-color: $bk_blur;
  display: flex;
  justify-content: center;
  align-items: center;
  .contentBox{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      margin-left: 40px;
    }
    .login-box{
      width: 350px;
      min-height: 500px;
      background-color: #192437;
      margin-right: 40px;
      .login-box-title{
        font-size: 30px;
        color: #fff;
        text-align: left;
        padding: 68px 30px 10px 30px;
        margin-bottom: 48px;
        &::after{
          content: "";
          display: block;
          width: 100%;
          height: 1px;
          margin-top: 8px;
          background-color: #fff;
        }
      }
      .label-title{
        text-align: left;
        color: #fff;
        padding: 0 16px;
        font-size: 20px;
      }
      .bottom-logo{
        padding: 40px 0 26px 0;
        font-size: 0;
        text-align: center;
        img{
          margin: 0;
        }
      }
      .form-submit-btn{
        padding: 10px 30px 0 30px;
      }
    }
  }
}
:deep(.van-cell-group){
  background: none;
}
:deep(.van-field__label){
  font-size: 20px;
  color: #fff;
  // display: block;
  // width: 100%;
}
.van-cell{
  // flex-wrap: wrap;
  background: none;
}
:deep(.van-field__control){
  background-color: #29354C;
  height: 34px;
  border-radius: 6px;
  color: #586378;
  padding: 0 10px;
}
@media screen and (max-width: 1000px) {
.loginPage {
  .contentBox {
    img{
      width: 40%;
    }
    .login-box {
      width: 40%;
      min-height: unset;
      .login-box-title {
        font-size: .24rem;
        padding: 20px 30px 10px 30px;
        margin-bottom: 10px;
      }
      .label-title {
        font-size: .14rem;
      }
      .bottom-logo {
        padding: 20px 0;
      }
    }
  }
}

}
</style>