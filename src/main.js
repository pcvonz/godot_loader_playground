// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as svgicon from 'vue-svgicon'
import VueHead from 'vue-head'
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(svgicon, {
  tagName: 'svgicon'
})

Vue.use(VueRouter)

Vue.use(VueHead)

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
