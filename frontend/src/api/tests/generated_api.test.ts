import { expect, test } from 'vitest'
import * as backend_api from '../../../api/'

test('test 1 + 1', async () => {     
  expect(1).toBe(1)
})

test('test read items', async () => {    
  // Create configuration parameter object
  const configurationParameters = {
      baseServer: new backend_api.ServerConfiguration('http://localhost:8000', {}), // First server is default
  }
  
  const configuration = backend_api.createConfiguration(configurationParameters);
  const apiInstance = new backend_api.ItemsApi(configuration);

  const data = await apiInstance.endpointItemsGet();
  console.log('API called successfully. Returned data:', data);
})
