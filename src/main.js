/*
 * @Date: 2022-06-11 20:37:00
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-06-23 23:01:35
 * @FilePath: \zb\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Form, Field, CellGroup, Step, Steps, Overlay, Swipe, SwipeItem } from 'vant';
import Vue3DraggableResizable from 'vue3-draggable-resizable'
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
import 'vant/lib/index.css';
import '@/css/base.css'

createApp(App).use(store).use(router)
.use(Vue3DraggableResizable)
.use(Button)
.use(Form)
.use(Field)
.use(CellGroup)
.use(Step)
.use(Steps)
.use(Overlay)
.use(Swipe)
.use(SwipeItem)
.mount('#app')
