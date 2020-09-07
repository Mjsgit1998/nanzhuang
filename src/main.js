import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@vant/touch-emulator'
import { Icon, NavBar, Col, Row, Tab, Tabs, Cell, CellGroup, Button, AddressEdit, Search, DatetimePicker, Popup, Swipe, SwipeItem, Card } from 'vant'
import './views/styles/index.less'

Vue.use(Card)

Vue.use(Swipe)
Vue.use(SwipeItem)

Vue.use(Popup)

Vue.use(DatetimePicker)

Vue.use(Search)

Vue.use(AddressEdit)

Vue.use(Button)

Vue.use(Cell)
Vue.use(CellGroup)

Vue.use(Tab)
Vue.use(Tabs)

Vue.use(Col)
Vue.use(Row)
Vue.use(NavBar)

Vue.use(Icon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
