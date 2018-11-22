import Vue from 'vue'
import App from './App.vue'
import HelloComponents from 'my-hello-module'

Object.keys(HelloComponents).forEach(name=>{
  Vue.component(name,HelloComponents[name])
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
