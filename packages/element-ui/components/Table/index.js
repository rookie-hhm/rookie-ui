import Table from './index.vue'

Table.install = _Vue => {
  _Vue.component(Table.name, Table)
}
export default Table