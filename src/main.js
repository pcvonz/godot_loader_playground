// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as svgicon from 'vue-svgicon'
import VueHead from 'vue-head'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(svgicon, {
  tagName: 'svgicon'
})

Vue.use(VueHead)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
