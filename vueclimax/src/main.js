import Vue from 'vue'
import App from './App.vue'

/*Vue.config.productionTip = false*/

import "../public/css/line-awesome.css"
import "../public/css/normalize.css"
import "../public/css/skeleton.css"
import "../public/css/climax.css"

import router from './Router'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
