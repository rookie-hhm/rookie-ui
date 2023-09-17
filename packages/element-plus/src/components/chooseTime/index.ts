import _chooseTime from './src/index.vue'
import { withInstall } from '@rookie-ui/utils';
// 让这个组件可以通过use的形式使用
export const EaChooseTime = withInstall(_chooseTime)

export default EaChooseTime