import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils'
import Button from '../src/button.vue'
let wrapper: any
describe("just a test", () => {
  beforeEach(() => {
    wrapper = mount(Button, {
      props: {
        type: 'small',
        size: 'small'
      },
      slots: {
        default: '123'
      }
    })
  })
  it('test slots', () => {
    
    const slot = wrapper.text()
    expect(slot).toBe('123')
  })
  it('test class style', () => {
    const isExists = wrapper.find('button').exists()
    expect(isExists).toBe(true)
    const button = wrapper.get('button')
    expect(button.classes()).toContain('ea-button')
    expect(button.classes()).toContain('ea-button--small')
  })
  it('test click event', async () => {
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
    await button.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })
  afterEach(() => {
    wrapper = null
  })
})
