import * as api from '@/api'
import { ConfigurationParameters } from '@/api/configuration'
import { getJwtToken, setJwtToken } from '@/utils/auth'

const backendUrl = import.meta.env.VITE_BACKEND_URL

function configuration(): api.Configuration {
    const jwtAuth: api.OAuth2Configuration = {
        accessToken: getJwtToken()
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

export { backendUrl, configuration as apiConfiguration }