/*
 * @Date: 2022-06-11 20:37:00
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-06-12 23:29:55
 * @FilePath: \zb\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Form, Field, CellGroup, Step, Steps } from 'vant';
import 'vant/lib/index.css';
import '@/css/base.css'

createApp(App).use(store).use(router)
.use(Button)
.use(Form)
.use(Field)
.use(CellGroup)
.use(Step)
.use(Steps)
.mount('#app')
