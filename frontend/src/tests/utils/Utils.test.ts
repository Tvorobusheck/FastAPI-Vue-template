import { expect, test } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { generateRandomString } from '@/utils/helpers'

import { getJwtToken, isLogedIn, setJwtToken } from '@/utils/auth'

test('test jwt', async () => {
    const token = generateRandomString()
    setJwtToken(token)
    expect(getJwtToken()).toBe(token)
    setJwtToken(generateRandomString())
    expect(getJwtToken()).not.toBe(token)
})

const validJwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NjdkYjFlYS0yOGRiLTRhMTQtYmI3OC05ODc2ZGM0MzlmMWMiLCJhdWQiOlsiZmFzdGFwaS11c2VyczphdXRoIl0sImV4cCI6MTczNzczMDQ1MH0.xWKIwKR8bMnaUNKHQrGt832D4LBrwf5vfaqqxGK-pDE'

test('test logedin', async () => {
    const token = generateRandomString()
    setJwtToken(token)
    expect(isLogedIn()).toBe(false)
    setJwtToken(validJwtToken)
    expect(isLogedIn()).toBe(true)
})