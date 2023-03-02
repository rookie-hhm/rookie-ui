import Select from './index.vue'

Select.install = _Vue => {
  _Vue.component(Select.name, Select)
}

export default Select