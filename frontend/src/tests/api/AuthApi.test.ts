import { expect, test } from 'vitest'
import { apiConfiguration, backendUrl } from '@/utils/server'
import { generateRandomString } from '@/utils/helpers'
import * as api from '@/api'
import { clearJwtToken, isLogedIn, setJwtToken } from '@/utils/auth'
import { createAndLoginUser, createApi, createUser, generateEmail, logoutUser } from '../test_utils/auth'

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
    const apiInstance = createApi()
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
    const user = await createAndLoginUser()
    expect(isLogedIn()).toBeTruthy()
    expect(user.email).toBeDefined()
})

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