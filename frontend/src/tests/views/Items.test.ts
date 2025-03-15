import { expect, test, beforeEach } from 'vitest'
import { flushPromises, mount, VueWrapper } from '@vue/test-utils'
import { generateRandomString } from '@/utils/helpers'
import { apiConfiguration } from '@/utils/server'
import * as api from '@/api'
import { isLogedIn } from '@/utils/auth'
import Items from '@/views/Items.vue'
import { createAndLoginUser } from '../test_utils/auth'
import router from '@/router'
import ViewItem from '@/views/ViewItem.vue'
import { waitForTestTriggers } from '../test_utils/helpers'

let wrapper: VueWrapper

const createWrapper = async () => {
  const wrapper = mount(Items, {
    global: {
      plugins: [router]
    }
  })
  router.push('/')
  await router.isReady()
  return wrapper
}

beforeEach(async () => {
  await createAndLoginUser()
  wrapper = await createWrapper()
})

test('check items', async () => {
  expect(isLogedIn()).toBeTruthy()
  await wrapper.vm.$nextTick()
  await flushPromises()
  const itemsSearchInput = wrapper.find('#items-search')
  expect(itemsSearchInput.exists()).toBeTruthy()
  const itemsList = wrapper.find('#items-list')
  expect(itemsList.exists()).toBeTruthy()
})

test('create, search, and view item', async () => {
  // Create an item
  const apiInstance = new api.ItemsApi(apiConfiguration())
  const itemName = generateRandomString()
  const itemDescription = generateRandomString()
  const createdItem = await apiInstance.endpointItemsPost({
    name: itemName,
    description: itemDescription
  })

  // Search for the item
  const searchInput = wrapper.find('#items-search')
  await searchInput.setValue(itemName)
  
  await searchInput.trigger('input')

  await flushPromises()
  await wrapper.vm.$nextTick()
  await waitForTestTriggers()

  await flushPromises()
  await wrapper.vm.$nextTick()
  // Check if the item appears in the search results
  const itemsList = wrapper.find('#items-list')
  expect(itemsList.exists()).toBeTruthy()
  const itemLink = itemsList.find(`a[href="/items/view/${createdItem.id}"]`)
  expect(itemLink.exists()).toBeTruthy()
})