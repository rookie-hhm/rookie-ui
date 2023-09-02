import _drag from './drag'

// const install = function(Vue) {
//   Vue.directive('el-drag-dialog', drag)
// }

// if (window.Vue) {
//   window['el-drag-dialog'] = drag
//   Vue.use(install); // eslint-disable-line
// }
const makeInstall = function(comp, directiveName) {
  comp.install = (Vue) => {
    Vue.directive(directiveName, comp)
  }
  return comp
}
const drag = makeInstall(_drag, 'el-drag-dialog')
// const drag = _drag
export default drag
