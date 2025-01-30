import { expect, test } from 'vitest'
import { flushPromises, mount, VueWrapper } from '@vue/test-utils'
import ResponseMessage from '@/components/ResponseMessage.vue'
import i18n from '@/i18n'
import { findAnyResponseMessage, testIsAccessDeniedResponseMessage, testIsInvalidDataResponseMessage, testIsNotFoundResponseMessage, testIsServerErrorResponseMessage, testIsSuccessResponseMessage, testMessageContains, testNoResponseMessage } from '../test_utils/responsemessage'

type ResponseMessageWrapper = VueWrapper<Partial<{
    responseCode: number;
    customText: string;
}>> 

const createWrapper = () : ResponseMessageWrapper => {
        return mount(ResponseMessage, {
        global: {
            plugins: [i18n]
        }
        })
    }
    
test('test show message', async () => {
  const wrapper = createWrapper()
  await testNoResponseMessage(wrapper)
  wrapper.vm.responseCode = undefined
  await testNoResponseMessage(wrapper)
  wrapper.vm.responseCode = 200
  expect((await findAnyResponseMessage(wrapper)).exists()).toBeTruthy()
})

test('test show success message', async () => {
    const wrapper = createWrapper()
    wrapper.vm.responseCode = 200
    await testIsSuccessResponseMessage(wrapper)
})


test('test show access denied message', async () => {
    const wrapper = createWrapper()
    wrapper.vm.responseCode = 403
    await testIsAccessDeniedResponseMessage(wrapper)
})

test('test show not found message', async () => {
    const wrapper = createWrapper()
    wrapper.vm.responseCode = 404
    await testIsNotFoundResponseMessage(wrapper)
})


test('test show invalid data', async () => {
    const wrapper = createWrapper()
    wrapper.vm.responseCode = 422
    await testIsInvalidDataResponseMessage(wrapper)
})

test('test internal error message', async () => {
    const wrapper = createWrapper()
    for (let responseCode = 405; responseCode < 600; responseCode++) {
        if (responseCode == 422)
            continue
        wrapper.vm.responseCode = responseCode
        await testIsServerErrorResponseMessage(wrapper, responseCode)
    }
})
  
test('test close error message', async () => {
    const wrapper = createWrapper()
    wrapper.vm.responseCode = 200
    await testIsSuccessResponseMessage(wrapper)
    let closeButton = wrapper.find("#close-response-message")
    await closeButton.trigger('click')
    await wrapper.vm.$nextTick()
    await flushPromises()
    await testNoResponseMessage(wrapper)
})

test('test custom text message', async () => {
    const wrapper = createWrapper()
    const customText = "Hello, world!"
    wrapper.vm.customText = customText
    await testMessageContains(wrapper, customText)
})