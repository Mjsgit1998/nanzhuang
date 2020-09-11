import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/shouye'
import shishang from '../components/shishang'
import homeview from '../views/shouye/homeview.vue'
import danpin from '../components/danpin'
import shopcar from '../components/shopcar'
import jiesuan from '../components/jiesuan'
import login from '../components/login'
import zhuce from '../components/zhuce'

import Money from '../components/money'
import Endorse from '../components/endorse'
import Vip from '../components/vip'
import Fen from '../components/fen'
import Fenchange from '../components/fenchange'
import Discount from '../components/discount'
import Bill from '../components/bill'
import Myfans from '../components/myfans'
import Indent from '../components/indent'
import Location from '../components/location'
import Addlocation from '../components/addLocation'
import message from '../cao/tide-message'
import abstract from '../cao/tide-abstract'
import order from '../cao/order'
import details from '../cao/order-details'
import evaluate from '../cao/evaluate'
import evaluation from '../cao/All-evaluation'
import Flash from '../cao/Flash'
import measurenone from '../view/measurenone'
import mysizenone from '../mycomponent/mysizenone'
import stature from '../mycomponent/stature'
import weight from '../mycomponent/weight'
import myshoulder from '../mycomponent/myshoulder'
import mychest from '../mycomponent/mychest'
import mywaistline from '../mycomponent/mywaistline'
import myhip from '../mycomponent/myhip'
import mysize from '../mycomponent/mysize'
import neck from '../view/neck'
import chest from '../view/chest'
import waistline from '../view/waistline'
import shoulder from '../view/shoulder'
import clothes from '../view/clothes'
import sleeve from '../view/sleeve'
import outside from '../view/outside'
import cuff from '../view/cuff'
import measure from '../view/measure'

import axios from 'axios'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/login'
}, {
  path: '/login',
  component: login
}, {
  path: '/zhuce',
  component: zhuce
}, {
  path: '/home',
  component: homeview,
  children: [{
    path: '/',
    component: home
  }, {
    path: '/shopcar',
    component: shopcar
  }, {
    path: '/shopcar/jiesuan',
    component: jiesuan
  }, {
    path: '/home/2',
    component: shishang

  }, {
    path: '/home/shishang/:good_id',
    component: danpin
  }, {
    path: '/money',
    component: Money
  },
  {
    path: '/myfans',
    component: Myfans
  },
  {
    path: '/indent',
    component: Indent
  },
  {
    path: '/endorse',
    component: Endorse
  },
  {
    path: '/vip',
    component: Vip
  },
  {
    path: '/fen',
    component: Fen
  },
  {
    path: '/fenchange',
    component: Fenchange
  },
  {
    path: '/discount',
    component: Discount
  },
  {
    path: '/bill',
    component: Bill
  },
  {
    path: '/location',
    component: Location
  },
  {
    path: '/addlocation',
    component: Addlocation
  }, {
    path: '/addlocation/:addId',
    component: Addlocation
  },
  {
    path: '/home/3',
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
    path: '/home/4',
    component: Flash
  }, {
    path: '/mysizenone',
    component: mysizenone
  },
  {
    path: '/stature',
    component: stature
  },
  {
    path: '/weight',
    component: weight
  },
  {
    path: '/myshoulder',
    component: myshoulder
  },
  {
    path: '/mychest',
    component: mychest
  }, {
    path: '/mywaistline',
    component: mywaistline
  }, {
    path: '/myhip',
    component: myhip
  }, {
    path: '/mysize',
    component: mysize
  },
  {
    path: '/measurenone',
    component: measurenone
  },
  {
    path: '/neck',
    component: neck
  }, {
    path: '/chest',
    component: chest
  }, {
    path: '/waistline',
    component: waistline
  },
  {
    path: '/shoulder',
    component: shoulder
  }, {
    path: '/clothes',
    component: clothes
  }, {
    path: '/sleeve',
    component: sleeve
  }, {
    path: '/outside',
    component: outside
  }, {
    path: '/cuff',
    component: cuff
  }, {
    path: '/measure',
    component: measure
  }]
}
]

const router = new VueRouter({
  routes
})

axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 在请求去拦截器 中config 是本次请求的一些相关配置 对象
  // config 就是最后要发给后台的那个配置对象
  // 我们可以在拦截器中对congig 进行统一配置 token
  // console.log('请求拦截器', config)
  const tokenn = window.localStorage.getItem('token')
  const userId = window.localStorage.getItem('user-id')
  // 统一添加 token
  if (tokenn || userId) {
    config.headers.token = tokenn
    config.data.user_id = userId
  }
  // return config 是通行的规则
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
    return
  }
  const token = window.localStorage.getItem('user-token')
  if (token) {
    next()
  } else {
    next('/login')
  }
})
export default router
