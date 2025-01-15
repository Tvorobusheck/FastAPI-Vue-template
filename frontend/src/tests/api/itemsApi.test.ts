import { expect, test } from 'vitest'
import { apiConfiguration } from '@/utils/config'

import * as api from '@/api'

test('test 1 + 1', async () => {     
  expect(1).toBe(1)
})

test('test read items', async () => {    
  const apiInstance = new api.ItemsApi(apiConfiguration);

  const data = await apiInstance.endpointItemsGet();
  expect(data).toBeDefined()
})

test('test create item', async () => {    
  const apiInstance = new api.ItemsApi(apiConfiguration);

  const data = await apiInstance.endpointItemsPost({
    name: "name_example",
    description: "description_example",
  });
  expect(data).toBeDefined()
})