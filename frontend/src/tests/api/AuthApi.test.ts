import { expect, test } from 'vitest'
import { apiConfiguration, backendUrl } from '@/utils/config'
import { generateRandomString } from '@/utils/helpers'
import * as api from '@/api'

test('test env backendUrl', async () => {
    expect(process.env.BASE_URL).toBeDefined()
    expect(process.env.VITE_BACKEND_URL).toBeDefined()
    expect(process.env.VITE_BACKEND_URL).toBe('http://localhost:8001')
    expect(backendUrl).toBe(process.env.VITE_BACKEND_URL)
})

test('create user', async () => {
    const apiInstance = new api.AuthApi(apiConfiguration);
    const newUser = new api.UserCreate()
    newUser.email = generateRandomString() + '@example.com'
    newUser.password = generateRandomString()
    const user: api.UserRead = await apiInstance.registerRegisterUsersAuthRegisterPost(newUser)
    expect(user).toBeDefined()
})
test('create multiple users async', async () => {
    const apiInstance = new api.AuthApi(apiConfiguration);
    for (let i = 0; i < 10; i++) {
        const newUser = new api.UserCreate()
        newUser.email = generateRandomString() + '@example.com'
        newUser.password = generateRandomString()
        apiInstance.registerRegisterUsersAuthRegisterPost(newUser).then((user: api.UserRead) => {
            expect(user).toBeDefined()
            expect(user.email).toBe(newUser.email)
        })
    }
})