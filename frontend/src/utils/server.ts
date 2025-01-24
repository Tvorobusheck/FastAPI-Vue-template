import * as api from '@/api'
import { ConfigurationParameters } from '@/api/configuration'


const backendUrl = import.meta.env.VITE_BACKEND_URL

function getJwtToken(): string {
    return JSON.parse( localStorage.getItem('token') )
}
function setJwtToken(token: string) {
    localStorage.setItem( 'token', JSON.stringify(token) );
}
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

export { backendUrl, setJwtToken as saveJwtToken, configuration as apiConfiguration }