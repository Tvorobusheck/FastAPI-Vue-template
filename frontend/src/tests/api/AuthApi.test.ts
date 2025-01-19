import { expect, test } from 'vitest'
import { apiConfiguration, backendUrl } from '@/utils/config'
import { generateRandomString } from '@/utils/helpers'
import * as api from '@/api'

test('test env', async () => {
    expect(backendUrl).toBe('http://localhost:8001')
})

test('create user', async () => {
    const apiInstance = new api.AuthApi(apiConfiguration);
    const newUser = new api.UserCreate()
    newUser.email = generateRandomString() + '@example.com'
    newUser.password = generateRandomString()
    const user: api.UserRead = await apiInstance.registerRegisterUsersAuthRegisterPost(newUser)
    expect(user).toBeDefined()
})