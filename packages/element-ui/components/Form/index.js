import Form from './index.vue'

Form.install = _Vue => {
  _Vue.component(Form.name, Form)
}
export default Form