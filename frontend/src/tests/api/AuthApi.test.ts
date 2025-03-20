import { expect, test, beforeEach } from 'vitest'
import { apiConfiguration, backendUrl } from '@/utils/server'
import { generateRandomString } from '@/utils/helpers'
import * as api from '@/api'
import { clearJwtToken, getJwtToken, isLogedIn, setJwtToken } from '@/utils/auth'
import { createAndLoginUser, createApi, createUser, generateEmail, logoutUser } from '../test_utils/auth'
import { waitForMS } from '../test_utils/helpers'

let apiInstance: api.AuthApi

const createApiInstance = () => {
    return new api.AuthApi(apiConfiguration())
}

beforeEach(() => {
    apiInstance = createApiInstance()
})

test('test env backendUrl', async () => {
    expect(process.env.BASE_URL).toBeDefined()
    expect(process.env.VITE_BACKEND_URL).toBeDefined()
    expect(process.env.VITE_BACKEND_URL).toBe('http://localhost:8001')
    expect(backendUrl).toBe(process.env.VITE_BACKEND_URL)
})

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
    for (let i = 0; i < 10; i++) {
        const email = generateEmail()
        createUser({ apiInstance: apiInstance, email: email }).then((user: api.UserRead) => {
            expect(user).toBeDefined()
            expect(user.email).toBe(email)
        })
    }
})

test('login user', async () => {
    expect(isLogedIn()).toBeFalsy()
    const user = await createAndLoginUser({ apiInstance: apiInstance })
    expect(isLogedIn()).toBeTruthy()
    expect(user.email).toBeDefined()
})

test('logout user', async () => {
    clearJwtToken()
    expect(isLogedIn()).toBeFalsy()
    await createAndLoginUser({ apiInstance: apiInstance })
    expect(isLogedIn()).toBeTruthy()
    const refreshedApiInstance = createApiInstance() // Old apiInstance has no JWT
    await logoutUser({ apiInstance: refreshedApiInstance })
    expect(isLogedIn()).toBeFalsy()
})

test('refresh token', async () => {
    clearJwtToken()
    try {
        await apiInstance.refreshJwtUsersJwtRefreshPost();
        expect(false).toBeTruthy();
    } catch (error) {
        expect(isLogedIn()).toBeFalsy();
    }
    await createAndLoginUser({ apiInstance: apiInstance });
    expect(isLogedIn()).toBeTruthy();
    const refreshedApiInstance = createApiInstance() // Old apiInstance has no JWT
    const old_token = getJwtToken()
    await waitForMS(2000)
    const new_token = await refreshedApiInstance.refreshJwtUsersJwtRefreshPost();
    expect(old_token).not.toEqual(new_token.access_token)
});