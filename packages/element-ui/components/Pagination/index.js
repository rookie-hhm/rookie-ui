import Pagination from './index.vue'

Pagination.install = _Vue => {
  _Vue.component(Pagination.name, Pagination)
}
export default Pagination