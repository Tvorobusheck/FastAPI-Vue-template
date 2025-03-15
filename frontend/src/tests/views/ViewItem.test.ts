import { expect, test, beforeEach } from 'vitest'
import { flushPromises, mount, VueWrapper } from '@vue/test-utils'
import { generateRandomString } from '@/utils/helpers'
import { apiConfiguration } from '@/utils/server'
import * as api from '@/api'
import { isLogedIn } from '@/utils/auth'
import ViewItem from '@/views/ViewItem.vue'
import { createAndLoginUser } from '../test_utils/auth'
import router from '@/router'
import { waitForTestTriggers } from '../test_utils/helpers'

let wrapper: VueWrapper

const createWrapper = async (id: number) => {
  const wrapper = mount(ViewItem, {
    global: {
      plugins: [router]
    },
    props: {
      id: id
    }
  })
  router.push(`/items/view/${id}`)
  await router.isReady()
  return wrapper
}

beforeEach(async () => {
  await createAndLoginUser()
})

test('create item and view it', async () => {
  // Create an item
  const apiInstance = new api.ItemsApi(apiConfiguration())
  const itemName = generateRandomString()
  const itemDescription = generateRandomString()
  const createdItem = await apiInstance.endpointItemsPost({
    name: itemName,
    description: itemDescription
  })

  // Navigate to the ItemView page
  wrapper = await createWrapper(createdItem.id)
  await flushPromises()
  await waitForTestTriggers()
  // Check if the view page displays the correct item details
  const itemNameElement = wrapper.find('[data-testid="item-name"]')
  const itemDescriptionElement = wrapper.find('[data-testid="item-description"]')
  expect(itemNameElement.text()).toContain(itemName)
  expect(itemDescriptionElement.text()).toContain(itemDescription)
})