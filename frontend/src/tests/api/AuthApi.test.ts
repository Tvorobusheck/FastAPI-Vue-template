import { expect, test } from 'vitest'
import { apiConfiguration, backendUrl } from '@/utils/server'
import { generateRandomString } from '@/utils/helpers'
import * as api from '@/api'
import { clearJwtToken, isLogedIn, setJwtToken } from '@/utils/auth'

test('test env backendUrl', async () => {
    expect(process.env.BASE_URL).toBeDefined()
    expect(process.env.VITE_BACKEND_URL).toBeDefined()
    expect(process.env.VITE_BACKEND_URL).toBe('http://localhost:8001')
    expect(backendUrl).toBe(process.env.VITE_BACKEND_URL)
})

const createApi = () => {
    return new api.AuthApi(apiConfiguration())
}

export function generateEmail() {
    return generateRandomString().toLocaleLowerCase() + '@' + 
                        generateRandomString().toLocaleLowerCase() + '.com'
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
test('create random user', async () => {
    const user = await createUser()
    expect(user).toBeDefined()
})


test('create certain user', async () => {
    const email = generateEmail()
    const user = await createUser({ email: email })
    expect(user.email).toBe(email)
})
test('create multiple users async', async () => {
    const apiInstance = createApi()
    for (let i = 0; i < 10; i++) {
        const email = generateEmail()
        createUser({ apiInstance: apiInstance, email: email }).then((user: api.UserRead) => {
            expect(user).toBeDefined()
            expect(user.email).toBe(email)
        })
    }
})

export async function loginUser(email: string, password: string, { apiInstance }: { apiInstance?: api.AuthApi } = {}): Promise<string> {
    apiInstance ??= createApi()
    const responseValid = await apiInstance.authJwtLoginUsersJwtLoginPost(email, password)
    const token = responseValid.accessToken
    setJwtToken(token)
    return token
}


export async function createAndLoginUser({ apiInstance, email }: { apiInstance?: api.AuthApi, email?: string } = {}) {
    apiInstance ??= createApi()
    email ??= generateEmail()
    const password = generateRandomString()
    await createUser({apiInstance: apiInstance, email: email, password: password})
    await loginUser(email, password, {apiInstance: apiInstance})
}

test('login user', async () => {
    expect(isLogedIn()).toBeFalsy()
    await createAndLoginUser()
    expect(isLogedIn()).toBeTruthy()
})

export async function logoutUser({ apiInstance }: { apiInstance?: api.AuthApi } = {}) {
    apiInstance ??= createApi()
    await expect(apiInstance.authJwtLogoutUsersJwtLogoutPost()).rejects.toThrow(new Error("Cannot parse content. No Content-Type defined."))
    clearJwtToken()
}

test('logout user', async () => {
    const apiInstance = createApi()
    clearJwtToken()
    expect(isLogedIn()).toBeFalsy()
    await createAndLoginUser({apiInstance: apiInstance})
    expect(isLogedIn()).toBeTruthy()
    const refreshedApiInstance = createApi() // Old apiInstance has no JWT
    await logoutUser({apiInstance: refreshedApiInstance})
    expect(isLogedIn()).toBeFalsy()

})