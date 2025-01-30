import { expect, test } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { generateRandomString } from '@/utils/helpers'
import { apiConfiguration } from '@/utils/server'
import * as api from '@/api'
import { isLogedIn } from '@/utils/auth'
import Logout from '@/views/Logout.vue'
import { createAndLoginUser } from '../test_utils/auth'

test('check logout view', async () => {
    await createAndLoginUser()
    expect(isLogedIn()).toBeTruthy()

    const wrapper = mount(Logout)
    await flushPromises()

    // Call the logout method
    await wrapper.vm.logout()
    await wrapper.vm.$nextTick()
    await flushPromises()

    expect(wrapper.find('#logout-success').exists()).toBeTruthy()
})