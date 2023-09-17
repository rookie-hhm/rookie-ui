import Area from '../src/index.vue'
import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest'
import { ElOption, ElSelect } from 'element-plus';
import { nextTick } from 'vue';
let wrapper: any
describe("test chooseArea component", () => {
  beforeEach(() => {
    wrapper = mount(Area, {
      GlobalComponents: {
        'el-select': ElSelect,
        'el-option': ElOption
      }
    })
  })
  it('test mount element exists', async () => {
    
    const exists = wrapper.find('.choose-area').exists()
    expect(exists).toBe(true)
  })
  it('test change event', async () => {
    console.log(wrapper.vm.province)
    wrapper.vm.province = '12'
    await nextTick()
    wrapper.vm.city = '1201'
    await nextTick()
    wrapper.vm.area = '120101'
    await nextTick()
    // await wrapper.setData({ province: '12' })
    expect(wrapper.vm.province).toBe('12')
    expect(wrapper.vm.city).toBe('1201')
    expect(wrapper.vm.area).toBe('120101')
    expect(wrapper.emitted()).toHaveProperty('change')
    expect(wrapper.emitted('change')).toHaveLength(1)
  })
  it('test province value change', async () => {
    wrapper.vm.province = ''
    await nextTick()
    expect(wrapper.vm.city).toBe('')
    expect(wrapper.vm.area).toBe('')
  })
  it('test city & area value change', async () => {
    wrapper.vm.province = '12'
    await nextTick()
    wrapper.vm.city = '1201'
    await nextTick()
    wrapper.vm.area = '120101'
    await nextTick()
    expect(wrapper.vm.city).toBe('1201')
    wrapper.vm.province = ''
    await nextTick()
    expect(wrapper.vm.city).toBe('')
    expect(wrapper.vm.area).toBe('')
  })
  it('test area value', async () => {
    wrapper.vm.area = ''
    await nextTick()
    expect(wrapper.emitted('change')).toBeFalsy()
  })
  afterEach(() => {
    wrapper = null
  })
})