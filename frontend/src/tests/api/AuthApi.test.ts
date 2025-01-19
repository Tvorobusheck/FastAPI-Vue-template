import { expect, test } from 'vitest'
import { apiConfiguration, backendUrl } from '@/utils/config'
import { generateRandomString } from '@/utils/helpers'
import * as api from '@/api'
import exp = require('constants')

test('test env', async () => {
    expect(backendUrl).toBe('http://localhost:8000')
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