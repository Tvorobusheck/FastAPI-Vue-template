import { expect, test } from 'vitest'
import { flushPromises, mount, VueWrapper } from '@vue/test-utils'
import ResponseMessage from '@/components/ResponseMessage.vue'
import i18n from '@/i18n'

test('test show message', async () => {
  const wrapper = mount(ResponseMessage, {
    global: {
      plugins: [i18n]
    }
  })
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
    const wrapper = mount(ResponseMessage, {
      global: {
        plugins: [i18n]
      }
    })
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
    await testResponseCodeMessage(i18n.global.t('messages.SUCCESS'), 200)
})
  

test('test show access denied message', async () => {
  await testResponseCodeMessage(i18n.global.t('messages.ACCESS_DENIED'), 403)
})

test('test show not found message', async () => {
    await testResponseCodeMessage(i18n.global.t('messages.NOT_FOUND'), 404)
})

test('test show invalid data', async () => {
    await testResponseCodeMessage(i18n.global.t('messages.INVALID_DATA'), 422)
})

test('test internal error message', async () => {
    for (let responseCode = 405; responseCode < 600; responseCode++) {
        if (responseCode == 422)
            continue
        await testResponseCodeMessage(i18n.global.t('messages.SERVER_ERROR').replace('{code}', responseCode.toString()), responseCode)
    }
})
  
test('test close error message', async () => {
    const wrapper = mount(ResponseMessage, {
      global: {
        plugins: [i18n]
      }
    })
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

export async function findResponseMessageWithCustomText(wrapper: VueWrapper, customText: string) {
    await wrapper.vm.$nextTick()
    await flushPromises()
    let responseMessage = wrapper.find("#response-message")
    expect(responseMessage.exists()).toBeTruthy()
    expect(responseMessage.text()).toContain(customText)
}
test('test custom text message', async () => {
    const wrapper = mount(ResponseMessage)
    const customText = "Hello, world!"
    wrapper.vm.customText = customText
    await findResponseMessageWithCustomText(wrapper, customText)
})