import { expect, test, beforeEach } from 'vitest'
import { apiConfiguration } from '@/utils/server'
import { generateRandomString } from '@/utils/helpers'
import * as api from '@/api'
import { createAndLoginUser } from '../test_utils/auth'

let apiInstance: api.ItemsApi

const createApiInstance = () => {
    return new api.ItemsApi(apiConfiguration())
}

beforeEach(async () => {
    await createAndLoginUser()
    apiInstance = createApiInstance()
})

async function createTestItem(apiInstance: api.ItemsApi, name: string = generateRandomString()): Promise<api.ItemSchema> {    
  const item: api.ItemSchema = await apiInstance.endpointItemsPost({
    name: name,
    description: generateRandomString(),
  });
  return item
}

test('test create item', async () => {
  const name = generateRandomString()
  const item = await createTestItem(apiInstance, name)
  expect(item).toBeDefined()
  expect(item.name).toBe(name)
  expect(item.id).toBeGreaterThan(0)
})

test('test update item', async () => {  
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
  const createdItem = await createTestItem(apiInstance)
  await apiInstance.endpointItemsIdDelete(createdItem.id);
  await expect(apiInstance.endpointItemsIdGet(createdItem.id)).rejects.not.toThrow(api.HttpException)
  await expect(apiInstance.endpointItemsIdGet(createdItem.id)).rejects.toThrow(api.ApiException)
})

async function createTestItems(apiInstance: api.ItemsApi, n: number = 3) {
  for (let i = 0; i < n; i++) {
    await createTestItem(apiInstance)
  }
}

test('test read items (paginated)', async () => {    
  await createTestItems(apiInstance);
  const data: api.DynamicPaginatedResponse = await apiInstance.endpointItemsGet(undefined, undefined, 1, 10);
  expect(data).toBeDefined()
  expect(data.totalCount).toBeDefined()
  const items: Array<api.ItemSchema> = data.data
  expect(items).toBeDefined()
})

test('test read items (list)', async () => {    
  await createTestItems(apiInstance);
  const data: api.DynamicListResponse = await apiInstance.endpointItemsGet(0, 100);
  expect(data).toBeDefined()
  expect((data as api.DynamicPaginatedResponse).totalCount).not.toBeDefined()
  const items: Array<api.ItemSchema> = data.data
  expect(items).toBeDefined()
})

test('create multiple items async', async () => {
    for (let i = 0; i < 100; i++) {
        const name = generateRandomString()
        createTestItem(apiInstance, name).then((item: api.ItemSchema) => {
          expect(item).toBeDefined()
          expect(item.name).toBe(name)
        })
    }
})
