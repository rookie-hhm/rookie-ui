export const formConfig = {
  size: 'mini',
  'show-message': false
}

export const formItemConfig = {
  size: 'mini',
  'show-message': false
}


export function normalizeFormConfig (config) { /* 格式化表单的配置项 */
  let noneSlotConfig = config
  let result = [], j = 0
  for (let i = 0; i < noneSlotConfig.length; i++) {
    if (!result[j]) {
      result[j] = []
    }
    result[j].push(noneSlotConfig[i])
    if (noneSlotConfig[i].isEnd) {
      j++
    }
  }
  return result
}