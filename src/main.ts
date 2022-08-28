import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import element-ui
import ElementUI from 'element-ui'
// @ts-ignore
import locale from 'element-ui/lib/locale/lang/en' // element-ui lang
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, { locale })

// import scss
import '@/assets/styles/index.scss'

// import module
import listModules from '@/modules'
import forEach from 'lodash/forEach'
forEach(listModules, module => {
  // register route
  forEach(module.router, value => {
    router.addRoute(value)
  })

  // // register store
  forEach(module.stores, (value, key) => {
    store.registerModule(key, value)
  })

  // //register component
  forEach(module.components, (value, key) => {
    Vue.component(key, value)
  })
})

// base components
import components from './components/base'
forEach(components, (value, key) => {
  Vue.component(key, value)
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
