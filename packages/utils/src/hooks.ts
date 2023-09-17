import { getCurrentInstance } from 'vue';
import { extend } from './utils';

// expose public api
export function useExpose<T = Record<string, any>>(apis: T) {
  const instance = getCurrentInstance();
  // 合并到 getCurrentInstance().proxy 上
  if (instance) {
    extend(instance.proxy as object, apis);
  }
}
