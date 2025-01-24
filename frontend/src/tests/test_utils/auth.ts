import { setJwtToken } from '@/utils/auth'
import { expect, test } from 'vitest'
import * as api from '@/api'
import { generateRandomString } from '@/utils/helpers'

export async function createAndLoginUser(apiInstance: api.AuthApi, newUser: api.UserCreate = null) {
    if (!newUser) {
        newUser = new api.UserCreate()
        newUser.email = generateRandomString() + '@example.com'
        newUser.password = generateRandomString()
    }
    const user: api.UserRead = await apiInstance.registerRegisterUsersAuthRegisterPost(newUser)
    expect(user).toBeDefined()
    const responseValid = await apiInstance.authJwtLoginUsersJwtLoginPost(newUser.email, newUser.password)
    const token = responseValid.accessToken
    expect(token).toBeDefined()
    setJwtToken(token)
}