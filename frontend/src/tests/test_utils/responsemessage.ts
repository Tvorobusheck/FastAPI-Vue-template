import { expect, test } from 'vitest'
import { flushPromises, mount, VueWrapper } from '@vue/test-utils'
import i18n from '@/i18n'

export async function findAnyResponseMessage(wrapper: VueWrapper) {
    await wrapper.vm.$nextTick()
    await flushPromises()
    let responseMessage = wrapper.find("#response-message")
    return responseMessage
}

export async function testNoResponseMessage(wrapper: VueWrapper) {
    expect((await findAnyResponseMessage(wrapper)).exists()).toBeFalsy()  
}

  
export async function testMessageContains(wrapper: VueWrapper, expectedMessage: string) {
    const responseMessage = await findAnyResponseMessage(wrapper)
    expect(responseMessage.exists()).toBeTruthy()
    expect(responseMessage.text()).toContain(expectedMessage)
}

export async function testIsSuccessResponseMessage(wrapper: VueWrapper) {
    await testMessageContains(wrapper, i18n.global.t('messages.SUCCESS'))
}

export async function testIsAccessDeniedResponseMessage(wrapper: VueWrapper) {
    await testMessageContains(wrapper, i18n.global.t('messages.ACCESS_DENIED'))
}

export async function testIsNotFoundResponseMessage(wrapper: VueWrapper) {
    await testMessageContains(wrapper, i18n.global.t('messages.NOT_FOUND'))
}

export async function testIsInvalidDataResponseMessage(wrapper: VueWrapper) {
    await testMessageContains(wrapper, i18n.global.t('messages.INVALID_DATA'))
}

export async function testIsServerErrorResponseMessage(wrapper: VueWrapper, responseCode: number) {
    await testMessageContains(wrapper, i18n.global.t('messages.SERVER_ERROR').replace('{code}', responseCode.toString()))
}

export async function testIsCloseResponseMessage(wrapper: VueWrapper) {
    await wrapper.vm.$nextTick()
    await flushPromises()
    let closeButton = wrapper.find("#close-response-message")
    expect(closeButton.exists()).toBeTruthy()
}

export async function clickCloseResponseMessage(wrapper: VueWrapper) {
    let closeButton = wrapper.find("#close-response-message")
    await closeButton.trigger('click')
    await wrapper.vm.$nextTick()
    await flushPromises()
}

export async function testRedirectResponseMessage(wrapper: VueWrapper, redirectRoute: string) {
    await wrapper.vm.$nextTick()
    await flushPromises()
    let redirectText = wrapper.find("#redirect-response-message")
    expect(redirectText.attributes('href')).toBe(redirectRoute)
}