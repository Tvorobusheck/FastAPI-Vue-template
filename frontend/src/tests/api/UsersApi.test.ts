import { expect, test } from 'vitest'
import { apiConfiguration, saveJwtToken } from '@/utils/config'
import { generateRandomString } from '@/utils/helpers'
import * as api from '@/api'
import exp = require('constants')

test('read user\'s profile (with auth)', async () => {
    const apiInstance = new api.AuthApi(apiConfiguration());
    const newUser = new api.UserCreate()
    newUser.email = generateRandomString() + '@example.com'
    newUser.password = generateRandomString()
    const user: api.UserRead = await apiInstance.registerRegisterUsersAuthRegisterPost(newUser)
    expect(user).toBeDefined()
    const responseValid = await apiInstance.authJwtLoginUsersJwtLoginPost(newUser.email, newUser.password)
    expect(responseValid.accessToken).toBeDefined()
    saveJwtToken(responseValid.accessToken)
    const usersApiInstance = new api.UsersApi(apiConfiguration())
    const profile = await usersApiInstance.usersCurrentUserUsersAuthMeGet() as api.UserRead
    expect(profile).toBeDefined()
    expect(profile.email).toBe(newUser.email)
})