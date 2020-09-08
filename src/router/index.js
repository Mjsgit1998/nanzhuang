import Vue from 'vue'
import VueRouter from 'vue-router'
import message from '../views/tide-message'
import abstract from '../views/tide-abstract'
import order from '../views/order'
import details from '../views/order-details'
import evaluate from '../views/evaluate'
import evaluation from '../views/All-evaluation'
import Flash from '../views/Flash'
import login from '../views/login'
import enroll from '../views/enroll'
import axios from 'axios'

Vue.use(VueRouter)
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 在请求去拦截器 中config 是本次请求的一些相关配置 对象
  // config 就是最后要发给后台的那个配置对象
  // 我们可以在拦截器中对congig 进行统一配置 token
  // console.log('请求拦截器', config)
  const token = window.localStorage.getItem('user-token')
  // 统一添加 token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  // return config 是通行的规则
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
const routes = [
  {
    path: '/login',
    component: login
  },
  {
    path: '/enroll',
    component: enroll
  },
  {
    path: '/',
    component: message
  },
  {
    path: '/abstract',
    component: abstract
  },
  {
    path: '/order',
    component: order
  },
  {
    path: '/details',
    component: details
  },
  {
    path: '/evaluate',
    component: evaluate
  },
  {
    path: '/evaluation',
    component: evaluation
  },
  {
    path: '/Flash',
    component: Flash
  }
]

const router = new VueRouter({
  routes
})

export default router
