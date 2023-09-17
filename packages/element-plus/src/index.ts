// import * as components from './components/index';

import { App } from 'vue';
import EaButton from './components/button'
import EaIcon from './components/icon'
import EaChooseArea from './components/chooseArea';
import EaChooseDate from './components/chooseDate';
import EaChooseTime from './components/chooseTime';
import EaChooseIcon from './components/chooseIcon';
import EaChooseCity from './components/chooseCity';
import EaTable from './components/table'
import EaProgress from './components/progress';
// import AgelCheckBox from './components/AgelCheckbox'
// import AgelDynamicTags from './components/AgelDynamicTags';
// import AgelFormDesc from './components/AgelFormDesc';
// import AgelFormGrid from './components/AgelFormGrid';
// import AgelIcon from './components/AgelIcon';
// import AgelUploadVue from './components/AgelUpload';
// import AgelSelect from './components/AgelSelect';
// import AgelFormTableditor from './components/AgelFormTableditor';
// import AgelNavTabs from './components/AgelNavTabs';
// import AgelRadio from './components/AgelRadio';
// import AgelMenu from './components/AgelMenu';
// import AgelTable from './components/AgelTable';
console.log(1, 2)
const components = [
  EaButton,
  EaIcon,
  EaChooseArea,
  EaChooseCity,
  EaChooseDate,
  EaChooseTime,
  EaChooseIcon,
  EaTable,
  EaProgress
  // AgelCheckBox,
  // AgelDynamicTags,
  // AgelFormDesc,
  // AgelFormGrid,
  // AgelIcon,
  // AgelUploadVue,
  // AgelSelect,
  // AgelFormTableditor,
  // AgelNavTabs,
  // AgelRadio,
  // AgelMenu,
  // AgelTable
]
export default {
  install: (app: App) => {
    for (const c in components) {
      app.use((components as any)[c]);
    }
  }
};

export {
  EaButton,
  EaIcon,
  EaChooseArea,
  EaChooseCity,
  EaChooseDate,
  EaChooseTime,
  EaChooseIcon,
  EaTable,
  EaProgress
  // AgelCheckBox,
  // AgelDynamicTags,
  // AgelFormDesc,
  // AgelFormGrid,
  // AgelIcon,
  // AgelUploadVue,
  // AgelSelect,
  // AgelFormTableditor,
  // AgelNavTabs,
  // AgelRadio,
  // AgelMenu,
  // AgelTable
}
