import Area from './index.vue'

Area.install = _Vue => {
  _Vue.component(Area.name, Area)
}

export default Area
