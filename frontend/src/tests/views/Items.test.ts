import { expect, test } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { generateRandomString } from '@/utils/helpers'
import { apiConfiguration } from '@/utils/server'
import * as api from '@/api'
import { isLogedIn } from '@/utils/auth'
import Items from '@/views/Items.vue'
import { createAndLoginUser } from '../test_utils/auth'

test('check items', async () => {
    const newUser = await createAndLoginUser()
    expect(isLogedIn()).toBeTruthy()
    const wrapper = mount(Items)
    // await wrapper.vm.initProfile()
    await wrapper.vm.$nextTick()
    await flushPromises()
    const itemsSearchInput = wrapper.find('#items-search')
    expect(itemsSearchInput.exists()).toBeTruthy()
    const itemsList = wrapper.find('#items-list')
    expect(itemsList.exists()).toBeTruthy()
})