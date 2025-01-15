import * as api from '@/api'

// Create configuration parameter object
const configurationParameters = {
    baseServer: new api.ServerConfiguration('http://localhost:8000', {}), // First server is default
}

  
const configuration = api.createConfiguration(configurationParameters);

export { configuration as apiConfiguration }