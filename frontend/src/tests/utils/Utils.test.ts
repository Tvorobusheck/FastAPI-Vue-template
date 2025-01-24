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
