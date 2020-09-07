import Vue from 'vue'
import VueRouter from 'vue-router'
import Money from '../views/money'
import Endorse from '../views/endorse'
import Vip from '../views/vip'
import Fen from '../views/fen'
import Fenchange from '../views/fenchange'
import Discount from '../views/discount'
import Bill from '../views/bill'
import Myfans from '../views/myfans'
import Indent from '../views/indent'
import Location from '../views/location'
import Addlocation from '../views/addLocation'
import Tehui from '../views/tehui'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Money',
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
  },
  {
    path: '/tehui',
    component: Tehui
  }
]

const router = new VueRouter({
  routes
})

export default router
