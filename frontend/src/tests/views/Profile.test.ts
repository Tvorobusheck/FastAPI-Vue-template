import { expect, test } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { generateRandomString } from '@/utils/helpers'
import { apiConfiguration } from '@/utils/server'
import * as api from '@/api'
import { isLogedIn } from '@/utils/auth'
import Profile from '@/views/Profile.vue'
import { createAndLoginUser } from '../test_utils/auth'

test('check profile view', async () => {
    const newUser = await createAndLoginUser()
    expect(isLogedIn()).toBeTruthy()
    const wrapper = mount(Profile)
    await wrapper.vm.initProfile()
    await wrapper.vm.$nextTick()
    await flushPromises()
    const emailField = wrapper.find('#email')
    expect(emailField.exists()).toBeTruthy()
    expect(emailField.text()).toBe(newUser.email)
})