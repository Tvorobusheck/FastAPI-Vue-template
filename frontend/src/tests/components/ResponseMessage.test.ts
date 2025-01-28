import { expect, test } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import ResponseMessage from '@/components/ResponseMessage.vue'

test('test show message', async () => {
  const wrapper = mount(ResponseMessage)
  let responseMessage = wrapper.find("#response-message")
  expect(responseMessage.exists()).toBeFalsy()
  wrapper.vm.responseCode = undefined
  await wrapper.vm.$nextTick()
  await flushPromises()
  responseMessage = wrapper.find("#response-message")
  expect(responseMessage.exists()).toBeFalsy()
  wrapper.vm.responseCode = 200
  await wrapper.vm.$nextTick()
  await flushPromises()
  responseMessage = wrapper.find("#response-message")
  expect(responseMessage.exists()).toBeTruthy()
})

async function testResponseCodeMessage(expectedMessage: string, responseCode?: number) {
    const wrapper = mount(ResponseMessage)
    let responseMessage = wrapper.find("#response-message")
    expect(responseMessage.exists()).toBeFalsy()
    wrapper.vm.responseCode = responseCode
    await wrapper.vm.$nextTick()
    await flushPromises()
    responseMessage = wrapper.find("#response-message")
    expect(responseMessage.exists()).toBeTruthy()
    expect(responseMessage.text()).toContain(expectedMessage)
}

test('test show success message', async () => {
    await testResponseCodeMessage('Success', 200)
})
  

test('test show access denied message', async () => {
  await testResponseCodeMessage('Access denied', 403)
})

test('test show not found message', async () => {
    await testResponseCodeMessage('Not found', 404)
})
  
test('test internal error message', async () => {
    for (let responseCode = 405; responseCode < 600; responseCode++) {
        await testResponseCodeMessage(`Server Error: ${responseCode}`, responseCode)
    }
})
  
test('test close error message', async () => {
    const wrapper = mount(ResponseMessage)
    wrapper.vm.responseCode = 200
    await wrapper.vm.$nextTick()
    await flushPromises()
    let responseMessage = wrapper.find("#response-message")
    expect(responseMessage.exists()).toBeTruthy()
    let closeButton = wrapper.find("#close-response-message")
    await closeButton.trigger('click')
    await wrapper.vm.$nextTick()
    await flushPromises()
    responseMessage = wrapper.find("#response-message")
    expect(responseMessage.exists()).toBeFalsy()
})
