import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@vant/touch-emulator'
import axios from 'axios'
import { Form, Cell, CellGroup, NumberKeyboard, PasswordInput, Divider, Col, Row, Uploader, ActionSheet, Picker, Popup, Area, DatetimePicker, Search } from 'vant'
Vue.config.productionTip = false
Vue.use(Form)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(NumberKeyboard)
// Vue.use(Toast)
Vue.use(PasswordInput)
Vue.use(Divider)
Vue.use(Col)
Vue.use(Row)
Vue.use(Uploader)
Vue.use(ActionSheet)
Vue.use(Picker)
Vue.use(Popup)
Vue.use(Search)
Vue.prototype.$axios = axios
// Vue.use(calendar)
Vue.use(DatetimePicker)
Vue.use(Area)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
