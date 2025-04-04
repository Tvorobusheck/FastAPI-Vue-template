import { expect, test } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { generateRandomString } from '@/utils/helpers'
import Login from '@/views/Login.vue'
import router from '@/router';
import i18n from '@/i18n'
import { createUser, generateEmail } from '../test_utils/auth'
import { testIsCloseResponseMessage, testIsServerErrorResponseMessage, testIsSuccessResponseMessage, testRedirectResponseMessage } from '../test_utils/responsemessage'
import { waitForTestTriggers } from '../test_utils/helpers'
import { HOME_ROUTE } from '@/router/routes';

const createWrapper = async () => {
  const wrapper = mount(Login, {
      global: {
        plugins: [i18n, router]
      }
    }
  )
  router.push(HOME_ROUTE);
  await router.isReady();
  return wrapper
}

test('write text in login', async () => {
  const wrapper = await createWrapper()
  const newMsg = generateRandomString()  // New message
  const input = wrapper.find('#username')
  await input.setValue(newMsg)  // Set the input value
  const inputMsg = (input.element as HTMLInputElement).value  // Get the input value
  expect(inputMsg).toBe(newMsg)
  expect(wrapper.vm.username).toBe(newMsg)  // Check if regData.email is updated
})

test('change and read username directly', async () => {
  const wrapper = await createWrapper()
  const newEmail = generateEmail()
  
  wrapper.vm.username = newEmail
  await wrapper.vm.$nextTick()
  
  const input = wrapper.find('#username')
  const inputMsg = (input.element as HTMLInputElement).value
  expect(inputMsg).toBe(newEmail)
  
  expect(wrapper.vm.username).toBe(newEmail)
})

test('check password input for hide option', async () => {
  const wrapper = await createWrapper()
  const newPassword = generateRandomString(10)
  wrapper.vm.password = newPassword
  
  // Force Vue to re-render
  await wrapper.vm.$nextTick()
  
  // Check if the input value is updated
  const inputPassword = wrapper.find('#password')
  const updatedPassword = (inputPassword.element as HTMLInputElement).value
  expect(updatedPassword).toBe(newPassword)
  
  // Check if password is hidden by default
  expect(inputPassword.attributes('type')).toBe('password')
  
  // Toggle password visibility
  const checkbox = wrapper.find('input[type="checkbox"]')
  await checkbox.setValue(true)
  
  // Check if password is visible
  expect(inputPassword.attributes('type')).toBe('text')
})


test('check submit login', async () => {
  const wrapper = await createWrapper()
  const password = generateRandomString()
  const newUser = await createUser({password: password})

  wrapper.vm.username = newUser.email
  wrapper.vm.password = password

  const submitButton = wrapper.find('#submit-login')
  await submitButton.trigger('click')
  await waitForTestTriggers()
  expect(wrapper.vm.$route.path).toBe(HOME_ROUTE)
})



test('check submit incorrect login', async () => {
  const wrapper = await createWrapper()
  wrapper.vm.username = generateEmail()
  wrapper.vm.password = generateRandomString()
  const submitButton = wrapper.find('#submit-login')
  await submitButton.trigger('click')
  await waitForTestTriggers()
  await testIsServerErrorResponseMessage(wrapper, 400)
  await testIsCloseResponseMessage(wrapper)
})