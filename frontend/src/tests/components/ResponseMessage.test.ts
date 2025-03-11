import { expect, test, beforeEach } from 'vitest'
import { flushPromises, mount, VueWrapper } from '@vue/test-utils'
import ResponseMessage from '@/components/ResponseMessage.vue'
import i18n from '@/i18n'
import { clickCloseResponseMessage, findAnyResponseMessage, testIsAccessDeniedResponseMessage, testIsCloseResponseMessage, testIsInvalidDataResponseMessage, testIsNotFoundResponseMessage, testIsServerErrorResponseMessage, testIsSuccessResponseMessage, testMessageContains, testNoResponseMessage, testRedirectResponseMessage } from '../test_utils/responsemessage'

type ResponseMessageWrapper = VueWrapper<Partial<{
    responseCode: number;
    customText: string;
    redirectRoute: string;
}>>

let wrapper: ResponseMessageWrapper

const createWrapper = () : ResponseMessageWrapper => {
    return mount(ResponseMessage, {
        global: {
            plugins: [i18n]
        }
    })
}

beforeEach(() => {
    wrapper = createWrapper()
})

test('test show message', async () => {
    await testNoResponseMessage(wrapper)
    wrapper.vm.responseCode = undefined
    await testNoResponseMessage(wrapper)
    wrapper.vm.responseCode = 200
    expect((await findAnyResponseMessage(wrapper)).exists()).toBeTruthy()
})

test('test show success message', async () => {
    wrapper.vm.responseCode = 200
    await testIsSuccessResponseMessage(wrapper)
})

test('test show access denied message', async () => {
    wrapper.vm.responseCode = 403
    await testIsAccessDeniedResponseMessage(wrapper)
})

test('test show not found message', async () => {
    wrapper.vm.responseCode = 404
    await testIsNotFoundResponseMessage(wrapper)
})

test('test show invalid data', async () => {
    wrapper.vm.responseCode = 422
    await testIsInvalidDataResponseMessage(wrapper)
})

test('test internal error message', async () => {
    for (let responseCode = 405; responseCode < 600; responseCode++) {
        if (responseCode == 422)
            continue
        wrapper.vm.responseCode = responseCode
        await testIsServerErrorResponseMessage(wrapper, responseCode)
    }
})

test('test close error message', async () => {
    wrapper.vm.responseCode = 200
    await testIsSuccessResponseMessage(wrapper)
    await testIsCloseResponseMessage(wrapper)
    await clickCloseResponseMessage(wrapper)
    await testNoResponseMessage(wrapper)
})

test('test custom text message', async () => {
    const customText = "Hello, world!"
    wrapper.vm.customText = customText
    await testMessageContains(wrapper, customText)
})

test('test redirect message', async () => {
    const redirectRoute = "/test-path"
    wrapper.vm.redirectRoute = redirectRoute
    expect((await findAnyResponseMessage(wrapper)).exists()).toBeTruthy()
    await testRedirectResponseMessage(wrapper, redirectRoute)
})