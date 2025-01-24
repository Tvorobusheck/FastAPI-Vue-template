import * as api from '@/api'
import { SecurityAuthentication, OAuth2PasswordBearerAuthentication } from '@/api'
import { ConfigurationParameters } from '@/api/configuration'
import { ref } from 'vue'

const backendUrl = import.meta.env.VITE_BACKEND_URL
  
const jwtToken = ref('')
function setJwtToken(token: string) {
    jwtToken.value = token
}
function configuration(): api.Configuration {
    const jwtAuth: api.OAuth2Configuration = {
        accessToken: jwtToken.value
    }
    const authConfig: api.AuthMethodsConfiguration = {
        "OAuth2PasswordBearer": jwtAuth
    }
    // Create configuration parameter object
    const configurationParameters: ConfigurationParameters = {
        baseServer: new api.ServerConfiguration(backendUrl, {}), // First server is default
        authMethods: authConfig,
    }
    return api.createConfiguration(configurationParameters);
}

export { backendUrl, setJwtToken as saveJwtToken, configuration as apiConfiguration }