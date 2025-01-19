import * as api from '@/api'

const backendUrl = 'http://localhost:8001'
// Create configuration parameter object
const configurationParameters = {
    baseServer: new api.ServerConfiguration(backendUrl, {}), // First server is default
}

  
const configuration = api.createConfiguration(configurationParameters);

export { backendUrl, configuration as apiConfiguration }