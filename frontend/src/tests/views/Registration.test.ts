import { expect, test } from 'vitest'
import { flushPromises, mount, VueWrapper } from '@vue/test-utils'
import { generateRandomString } from '@/utils/helpers'
import Registration from '@/views/Registration.vue'
import * as api from '@/api'
import i18n from '@/i18n'
import router from '@/router';
import { generateUserCreate } from '../test_utils/auth'
import { testIsSuccessResponseMessage, testMessageContains, testNoResponseMessage } from '../test_utils/responsemessage'
import { waitForTestTriggers } from '../test_utils/helpers'
import { clearJwtToken, isLogedIn } from '@/utils/auth'
import { HOME_ROUTE } from '@/router/routes'


const createWrapper = async () => {
  clearJwtToken()
  const wrapper = mount(Registration, {
      global: {
        plugins: [i18n, router]
      }
    }
  )
  router.push(HOME_ROUTE);
  await router.isReady();
  return wrapper
}

test('write text in registration', async () => {
  const wrapper = await createWrapper()
  const newMsg = 'test@example.com'  // New message
  const input = wrapper.find('#email')
  await input.setValue(newMsg)  // Set the input value
  const inputMsg = (input.element as HTMLInputElement).value  // Get the input value
  expect(inputMsg).toBe(newMsg)
  expect(wrapper.vm.regData.email).toBe(newMsg)  // Check if regData.email is updated
})

test('change and read regData directly', async () => {
  const wrapper = await createWrapper()
  const newEmail = 'test@example.com'
  
  // Directly change regData.email
  wrapper.vm.regData.email = newEmail
  
  // Force Vue to re-render
  await wrapper.vm.$nextTick()
  
  // Check if the input value is updated
  const input = wrapper.find('#email')
  const inputMsg = (input.element as HTMLInputElement).value
  expect(inputMsg).toBe(newEmail)
  
  // Check if regData.email is updated
  expect(wrapper.vm.regData.email).toBe(newEmail)
})

test('check password input for hide option', async () => {
  const wrapper = await createWrapper()
  const newPassword = generateRandomString(10)
  wrapper.vm.regData.password = newPassword
  
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

async function clickSubmit(wrapper: VueWrapper) {
  const submitButton = wrapper.find('#submitRegistration')
  await submitButton.trigger('click')
  await waitForTestTriggers()
}

test('check submit registration', async () => {
  const wrapper = await createWrapper()
  const newUser = generateUserCreate()
  wrapper.vm.regData = newUser
  await wrapper.vm.$nextTick()
  await testNoResponseMessage(wrapper)
  await clickSubmit(wrapper)
  await testIsSuccessResponseMessage(wrapper)
  expect(isLogedIn()).toBeTruthy()
  expect(wrapper.vm.$route.path).toBe(HOME_ROUTE)
})


test('check submit existed registration', async () => {
  const wrapper = await createWrapper()
  const newUser = generateUserCreate()
  wrapper.vm.regData = newUser
  await wrapper.vm.$nextTick()
  
  await clickSubmit(wrapper)
  await clickSubmit(wrapper)
  await testMessageContains(wrapper, i18n.global.t('messages.REGISTRATION_ERROR'))
})


test('check submit registration with invalid data', async () => {
  const wrapper = await createWrapper()
  const newUser = generateUserCreate()
  newUser.email = generateRandomString() // not valid email
  wrapper.vm.regData = newUser
  await wrapper.vm.$nextTick()

  await clickSubmit(wrapper)
  await testMessageContains(wrapper, i18n.global.t('messages.INVALID_DATA'))
})



test('check submit registration with empty data', async () => {
  const wrapper = await createWrapper()
  const newUser = new api.UserCreate()
  wrapper.vm.regData = newUser
  await wrapper.vm.$nextTick()
  
  await clickSubmit(wrapper)
  await testMessageContains(wrapper, i18n.global.t('messages.INVALID_DATA'))
})