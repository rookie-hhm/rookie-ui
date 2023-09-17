import Progress from '../src/index.vue'
import { mount } from '@vue/test-utils';
import { ElProgress } from 'element-plus';
import { nextTick } from 'vue';
let wrapper: any
const sleep = (time: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  })
}
describe('test progress component', () => {
  beforeEach(() => {
    wrapper = mount(Progress, {
      props: {
        percentage: 10,
        isAnimate: true
      },
      global: {
        components: {
          ElProgress
        }
      }
    })
  })
  it('test element exists', () => {
    const element = wrapper.find('.ea-progress').exists()
    expect(element).toBe(true)
  })

  it('test it change ?', async () => {
    await sleep(4000)
    const p = wrapper.vm.p
    expect(p).toBe(10)
  })

  it('test isAnimation work fine', async () => {
    wrapper.setProps({ isAnimate: true })
    await nextTick()
    wrapper.vm.$forceUpdate()
    // // await nextTick()
    await sleep(4000)
    expect(wrapper.vm.p).toBe(10)

  })

  afterEach(() => {
    wrapper = null
  })
})