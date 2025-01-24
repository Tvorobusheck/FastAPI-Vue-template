import { expect, test } from 'vitest'
import { setJwtToken } from '@/utils/auth'
import { apiConfiguration } from '@/utils/server'
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
    setJwtToken(responseValid.accessToken)
    const usersApiInstance = new api.UsersApi(apiConfiguration())
    const profile = await usersApiInstance.usersCurrentUserUsersAuthMeGet() as api.UserRead
    expect(profile).toBeDefined()
    expect(profile.email).toBe(newUser.email)
})