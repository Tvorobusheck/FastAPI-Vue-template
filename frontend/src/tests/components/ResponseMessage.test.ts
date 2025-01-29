import { expect, test } from 'vitest'
import { flushPromises, mount, VueWrapper } from '@vue/test-utils'
import ResponseMessage from '@/components/ResponseMessage.vue'
import i18n from '@/i18n'

async function findAnyResponseMessage(wrapper: VueWrapper) {
    await wrapper.vm.$nextTick()
    await flushPromises()
    let responseMessage = wrapper.find("#response-message")
    return responseMessage
}

export async function testNoResponseMessage(wrapper: VueWrapper) {
    expect((await findAnyResponseMessage(wrapper)).exists()).toBeFalsy()  
}

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

async function setResponseCodeMessage(expectedMessage: string, responseCode?: number) {
    const wrapper = createWrapper()
    await testNoResponseMessage(wrapper)
    wrapper.vm.responseCode = responseCode
    await wrapper.vm.$nextTick()
    await flushPromises()
    let responseMessage = await findAnyResponseMessage(wrapper)
    expect(responseMessage.exists()).toBeTruthy()
    expect(responseMessage.text()).toContain(expectedMessage)
}

async function testMessageContains(wrapper: VueWrapper, expectedMessage: string) {
    const responseMessage = await findAnyResponseMessage(wrapper)
    expect(responseMessage.exists()).toBeTruthy()
    expect(responseMessage.text()).toContain(expectedMessage)
}

export async function testIsSuccessResponseMessage(wrapper: VueWrapper) {
    await testMessageContains(wrapper, i18n.global.t('messages.SUCCESS'))
}

test('test show success message', async () => {
    const wrapper = createWrapper()
    wrapper.vm.responseCode = 200
    await testIsSuccessResponseMessage(wrapper)
})

export async function testIsAccessDeniedResponseMessage(wrapper: VueWrapper) {
    await testMessageContains(wrapper, i18n.global.t('messages.ACCESS_DENIED'))
}

test('test show access denied message', async () => {
    const wrapper = createWrapper()
    wrapper.vm.responseCode = 403
    await testIsAccessDeniedResponseMessage(wrapper)
})

export async function testIsNotFoundResponseMessage(wrapper: VueWrapper) {
    await testMessageContains(wrapper, i18n.global.t('messages.NOT_FOUND'))
}

test('test show not found message', async () => {
    const wrapper = createWrapper()
    wrapper.vm.responseCode = 404
    await testIsNotFoundResponseMessage(wrapper)
})

export async function testIsInvalidDataResponseMessage(wrapper: VueWrapper) {
    await testMessageContains(wrapper, i18n.global.t('messages.INVALID_DATA'))
}

test('test show invalid data', async () => {
    const wrapper = createWrapper()
    wrapper.vm.responseCode = 422
    await testIsInvalidDataResponseMessage(wrapper)
})

export async function testIsServerErrorResponseMessage(wrapper: VueWrapper, responseCode: number) {
    await testMessageContains(wrapper, i18n.global.t('messages.SERVER_ERROR').replace('{code}', responseCode.toString()))
}

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