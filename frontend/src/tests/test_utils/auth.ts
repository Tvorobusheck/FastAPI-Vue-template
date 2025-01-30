import { expect, test } from 'vitest'
import { apiConfiguration, backendUrl } from '@/utils/server'
import { generateRandomString } from '@/utils/helpers'
import * as api from '@/api'
import { clearJwtToken, isLogedIn, setJwtToken } from '@/utils/auth'

export const createApi = () => {
    return new api.AuthApi(apiConfiguration())
}

export function generateEmail() {
    return generateRandomString().toLocaleLowerCase() + '@' + 
                        generateRandomString().toLocaleLowerCase() + '.com'
}

export function generateUserCreate() : api.UserCreate {
    const newUser = new api.UserCreate()
    newUser.email = generateEmail()
    newUser.password = generateRandomString()
    return newUser
}

export async function createUser({ apiInstance, email, password }: 
                                    { apiInstance?: api.AuthApi, 
                                        email?: string, 
                                        password?: string } = {}
                                    ): Promise<api.UserRead> {
    apiInstance ??= createApi()
    const newUser = new api.UserCreate()
    newUser.email = email ?? generateEmail()
    newUser.password = password ?? generateRandomString()
    const user: api.UserRead = await apiInstance.registerRegisterUsersAuthRegisterPost(newUser)
    return user
}

export async function loginUser(email: string, password: string, { apiInstance }: { apiInstance?: api.AuthApi } = {}): Promise<string> {
    apiInstance ??= createApi()
    const responseValid = await apiInstance.authJwtLoginUsersJwtLoginPost(email, password)
    const token = responseValid.accessToken
    setJwtToken(token)
    return token
}


export async function createAndLoginUser({ apiInstance }: { apiInstance?: api.AuthApi} = {}) {
    apiInstance ??= createApi()
    const password = generateRandomString()
    const user = await createUser({password: password, apiInstance: apiInstance})
    await loginUser(user.email, password, {apiInstance: apiInstance})
    return user
}

export async function logoutUser({ apiInstance }: { apiInstance?: api.AuthApi } = {}) {
    apiInstance ??= createApi()
    await expect(apiInstance.authJwtLogoutUsersJwtLogoutPost()).rejects.toThrow(new Error("Cannot parse content. No Content-Type defined."))
    clearJwtToken()
}
