import Vue from 'vue'
import App from './App.vue'

Vue.component('component', {
  template: `<h1>Componente</h1>`
})

new Vue({
  el: '#app',
  render: h => h(App)
})
