import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@vant/touch-emulator'
import axios from 'axios'
import './components/styles/index.less'
// 设置常态路径
import { Overlay, Toast, Dialog, GridItem, Grid, Icon, NavBar, DatetimePicker, Search, Tab, Tabs, Swipe, SwipeItem, AddressEdit, Image as VanImage, Popup, Cell, CellGroup, Button, Col, Row, Rate, Divider, Checkbox, CheckboxGroup, Card, Stepper, SubmitBar, Switch, Form, Field } from 'vant'
Vue.use(Grid)
Vue.use(GridItem)
Vue.prototype.$axios = axios
// axios.defaults.baseURL = 'http://'
Vue.use(AddressEdit)

Vue.use(Field)
Vue.use(Form)
Vue.use(Switch)
Vue.use(DatetimePicker)
Vue.use(Search)
Vue.use(Tab)
Vue.use(Tabs)

Vue.use(Toast)
Vue.use(Dialog)
Vue.use(SubmitBar)
Vue.use(Stepper)
Vue.use(Card)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Divider)
Vue.use(Rate)
Vue.use(Overlay)
Vue.use(Col)
Vue.use(Row)
Vue.use(VanImage)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Popup)
Vue.use(NavBar)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
