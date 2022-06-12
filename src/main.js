/*
 * @Date: 2022-06-11 20:37:00
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-06-12 14:39:58
 * @FilePath: \zb\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/css/base.css'
import { Button } from 'vant';
import 'vant/lib/index.css';

createApp(App).use(store).use(router).use(Button).mount('#app')
