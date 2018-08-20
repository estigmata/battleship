import Vue from 'vue'
import App from './App.vue'
import router from './router'

import DragDropShip from './lib/DragDropShip.js'

Vue.config.productionTip = false

Vue.directive('drag-drop-ship', DragDropShip)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
