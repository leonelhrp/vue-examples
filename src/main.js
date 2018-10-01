import Vue from 'vue'
import App from './App.vue'

Vue.component('tecnology', {
  props: [
    'tecnology'
  ],
  methods: {
    onchange(ev) {
      this.$emit('checked', this.tecnology.value, ev.target.checked)
    }
  },
  template: `
      <div>
        <input type="checkbox" :id="tecnology.value" :value="tecnology.value" @change="onchange">
        <label :for="tecnology.value">{{ tecnology.name }}</label>
      </div>
  `
})

new Vue({
  el: '#app',
  render: h => h(App)
})
