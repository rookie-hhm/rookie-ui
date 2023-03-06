import Dialog from './index.vue'

Dialog.install = (_Vue) => {
  _Vue.component(Dialog.name, Dialog)
}

export default Dialog