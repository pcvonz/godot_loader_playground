import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`./components/${component}.vue`)
}

export default new VueRouter({
  routes: [
    { path: '/strokeoffset', component: load('StrokeOffset') },
    { path: '/nodes', component: load('Nodes') },
    { path: '/dotloader', component: load('DotLoader') },
    { path: '/circlespinner', component: load('CircleSpinner') },
    { path: '/Spin', component: load('Spin') },
    { path: '/nodetree', component: load('NodeTree') },
    { path: '/nodespin', component: load('NodeSpin') },
    { path: '/', component: load('Nodes') }
  ]
})

