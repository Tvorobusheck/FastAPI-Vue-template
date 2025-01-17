import { expect, test } from 'vitest'
import { apiConfiguration } from '@/utils/config'
import { generateRandomString } from '@/utils/func'
import * as api from '@/api'

async function createTestItem(apiInstance: api.ItemsApi, name: string = generateRandomString()): Promise<api.ItemSchema> {    
  const item: api.ItemSchema = await apiInstance.endpointItemsPost({
    name: name,
    description: generateRandomString(),
  });
  return item
}

test('test create item', async () => {
  const apiInstance = new api.ItemsApi(apiConfiguration);
  const name = generateRandomString()
  const item = await createTestItem(apiInstance, name)
  expect(item).toBeDefined()
  expect(item.name).toBe(name)
  expect(item.id).toBeGreaterThan(0)
})

test('test update item', async () => {    
  const apiInstance = new api.ItemsApi(apiConfiguration);
  const createdItem = await createTestItem(apiInstance)
  const newName = generateRandomString()
  await apiInstance.endpointItemsIdPatch(
    createdItem.id, {
    name: newName,
    description: createdItem.description,
  });
  const updatedItem: api.ItemSchema = await apiInstance.endpointItemsIdGet(createdItem.id);
  expect(updatedItem).toBeDefined()
  expect(createdItem.name).not.toBe(newName)
  expect(updatedItem.name).toBe(newName)
})

test('test delete item', async () => {    
  const apiInstance = new api.ItemsApi(apiConfiguration);
  const createdItem = await createTestItem(apiInstance)
  await apiInstance.endpointItemsIdDelete(createdItem.id);
  await expect(apiInstance.endpointItemsIdGet(createdItem.id)).rejects.not.toThrow(api.HttpException)
  await expect(apiInstance.endpointItemsIdGet(createdItem.id)).rejects.toThrow(api.ApiException)
})


test('test read items (paginated)', async () => {    
  const apiInstance = new api.ItemsApi(apiConfiguration);
  const n = 3
  for (let i = 0; i < n; i++) {
    await createTestItem(apiInstance)
  }
  const data: api.DynamicPaginatedResponse = await apiInstance.endpointItemsGet(undefined, undefined, 1, 10);
  expect(data).toBeDefined()
  expect(data.totalCount).toBeDefined()
  const items: Array<api.ItemSchema> = data.data
  expect(items).toBeDefined()
})


test('test read items (list)', async () => {    
  const apiInstance = new api.ItemsApi(apiConfiguration);
  const n = 3
  for (let i = 0; i < n; i++) {
    await createTestItem(apiInstance)
  }
  const data: api.DynamicListResponse = await apiInstance.endpointItemsGet(0, 100);
  expect(data).toBeDefined()
  const items: Array<api.ItemSchema> = data.data
  expect(items).toBeDefined()
})