
import Vue from 'vue'
// const Vue = { extend () {} }
import infoTooltip from './src/main.vue'

// const infoTooltip = {}

const InfoTooltip = Vue.extend(infoTooltip)
// const InfoTooltip = () => {}
let instance = null;

export default function tip () {
  if (instance) {
    return instance
  }
  instance = new InfoTooltip({
      el: document.createElement('div')
  });
  return instance
}
