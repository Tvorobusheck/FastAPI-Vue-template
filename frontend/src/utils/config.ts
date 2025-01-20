import * as api from '@/api'

const backendUrl = process.env.VITE_BACKEND_URL
// Create configuration parameter object
const configurationParameters = {
    baseServer: new api.ServerConfiguration(backendUrl, {}), // First server is default
}

  
const configuration = api.createConfiguration(configurationParameters);

export { backendUrl, configuration as apiConfiguration }