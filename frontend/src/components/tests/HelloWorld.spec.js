// tests/HelloWorld.spec.js
import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('write text in input', async () => {
    const wrapper = mount(HelloWorld)
    const newMsg = 'It\'s me!'
    const input = wrapper.find('#message')
    await input.setValue(newMsg)  // Set the input value
    const inputMsg = input.element.value  // Get the input value
    expect(inputMsg).toBe(newMsg)
  })
  it('check echo messaging', async () => {
    const wrapper = mount(HelloWorld)
    const input = wrapper.find('#message')  // Find the input field
    const msg = 'Hello, Vue!'
    await input.setValue(msg)  // Set the input value
    const button = wrapper.find('button')  // Find the button
    await button.trigger('click')  // Simulate the button click
    let answer = wrapper.find('#answer').text()
    expect(answer).toBe(msg)

  })

})
