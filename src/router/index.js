/*
 * @Date: 2022-06-01 14:04:39
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-06-25 23:31:49
 * @FilePath: \zb\src\router\index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // 登录页面
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/Login.vue')
  },
  // 开始页面
  {
    path: '/start',
    name: 'Start',
    component: () => import(/* webpackChunkName: "start" */ '@/views/start/index.vue')
  },
  // 游戏主页面
  {
    path: '/gameMainPage',
    name: 'GameMainPage',
    component: () => import(/* webpackChunkName: "start" */ '@/views/gameMainPage/index.vue')
  },
  // 选择关卡
  {
    path: '/selectLevel',
    name: 'SelectLevel',
    component: () => import(/* webpackChunkName: "start" */ '@/views/selectLevel/index.vue')
  },
  // 选择背景
  {
    path: '/selectBackGround',
    name: 'SelectBackGround',
    component: () => import(/* webpackChunkName: "start" */ '@/views/selectBackGround/index.vue')
  },
  // 结果页
  {
    path: '/result',
    name: 'Result',
    component: () => import(/* webpackChunkName: "start" */ '@/views/result/index.vue')
  },
]
const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

export default router
