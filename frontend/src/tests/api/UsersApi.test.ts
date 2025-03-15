import { expect, test, beforeEach } from 'vitest'
import { apiConfiguration } from '@/utils/server'
import { generateRandomString } from '@/utils/helpers'
import * as api from '@/api'
import { clearJwtToken } from '@/utils/auth'
import { createAndLoginUser } from '../test_utils/auth'

let usersApiInstance: api.UsersApi

const createApi = () => {
    return new api.UsersApi(apiConfiguration())
}

beforeEach(() => {
    usersApiInstance = createApi()
})

test('read user\'s profile (with auth)', async () => {
    const user = await createAndLoginUser()
    usersApiInstance = createApi()
    const profile = await usersApiInstance.usersCurrentUserUsersAuthMeGet() as api.UserRead
    expect(profile).toBeDefined()
    expect(profile.email).toBe(user.email)
})

test('read user\'s profile (without auth)', async () => {
    clearJwtToken()
    usersApiInstance = createApi()
    await expect(usersApiInstance.usersCurrentUserUsersAuthMeGet()).rejects.toThrow(api.ApiException)
})