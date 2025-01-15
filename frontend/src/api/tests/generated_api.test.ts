import { expect, test } from 'vitest'
import * as api from '../'

test('test 1 + 1', async () => {     
  expect(1).toBe(1)
})

test('test read items', async () => {    
  // Create configuration parameter object
  const configurationParameters = {
      baseServer: new api.ServerConfiguration('http://localhost:8000', {}), // First server is default
  }
  
  const configuration = api.createConfiguration(configurationParameters);
  const apiInstance = new api.ItemsApi(configuration);

  const data = await apiInstance.endpointItemsGet();
  expect(data).toBeDefined()
})

test('test create item', async () => {    
  // Create configuration parameter object
  const configurationParameters = {
      baseServer: new api.ServerConfiguration('http://localhost:8000', {}), // First server is default
  }
  
  const configuration = api.createConfiguration(configurationParameters);
  const apiInstance = new api.ItemsApi(configuration);

  const data = await apiInstance.endpointItemsPost({
    name: "name_example",
    description: "description_example",
  });
  expect(data).toBeDefined()
})