import { expect, test, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

let wrapper: VueWrapper

beforeEach(() => {
  wrapper = mount(HelloWorld)
})

test('write text in input', async () => {
  const newMsg = 'It\'s me!'
  const input = wrapper.find('#message')
  await input.setValue(newMsg)  // Set the input value
  const inputMsg = (input.element as HTMLInputElement).value  // Get the input value
  expect(inputMsg).toBe(newMsg)
})

test('check echo messaging', async () => {
  const input = wrapper.find('#message')  // Find the input field
  const msg = 'Hello, Vue!'
  await input.setValue(msg)  // Set the input value
  const button = wrapper.find('button')  // Find the button
  await button.trigger('click')  // Simulate the button click
  let answer = wrapper.find('#answer').text()
  expect(answer).toBe(msg)
})

