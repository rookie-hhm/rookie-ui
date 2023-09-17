import ChooseTime from '../src/index.vue'
import { mount } from '@vue/test-utils'
import { ElTimeSelect } from 'element-plus'
import { nextTick } from 'vue'
let wrapper: any
describe('test chooseTime component', () => {
  beforeEach(() => {
    wrapper = mount(ChooseTime, {
      global: {
        components: {
          ElTimeSelect
        }
      }
    })
  })
  it('test props', () => {
    expect(wrapper.props('endStep')).toBe('00:30')
  })
  it('test watch start Time', async () => {
    wrapper.vm.startTime = ''
    await nextTick()
    expect(wrapper.vm.endTime).toBe('')
    expect(wrapper.vm.endTimeDisabled).toBeTruthy()
    wrapper.vm.startTime = '00:30'
    await nextTick()
    expect(wrapper.vm.endTimeDisabled).toBeFalsy()
    expect(wrapper.emitted()).toHaveProperty('startChange')
  })
  it('test end change', async () => {
    wrapper.vm.endTime = '234'
    await nextTick()
    const endEvent = wrapper.emitted('endChange')
    expect(endEvent).toHaveLength(1)
    expect(wrapper.emitted()).toHaveProperty('endChange')
  })
  afterEach(() => {
    wrapper = null
  })
})