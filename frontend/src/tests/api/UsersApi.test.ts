import { expect, test } from 'vitest'
import { apiConfiguration } from '@/utils/server'
import { generateRandomString } from '@/utils/helpers'
import { createAndLoginUser, generateEmail } from './AuthApi.test'
import * as api from '@/api'
import { clearJwtToken } from '@/utils/auth'


const createApi = () => {
    return new api.UsersApi(apiConfiguration())
}

test('read user\'s profile (with auth)', async () => {
    const email = generateEmail()
    await createAndLoginUser({email: email})
    const usersApiInstance = createApi()
    const profile = await usersApiInstance.usersCurrentUserUsersAuthMeGet() as api.UserRead
    expect(profile).toBeDefined()
    expect(profile.email).toBe(email)
})

test('read user\'s profile (without auth)', async () => {
    clearJwtToken()
    const usersApiInstance = createApi()
    await expect(usersApiInstance.usersCurrentUserUsersAuthMeGet()).rejects.toThrow(api.ApiException)
})