import { expect, test } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { generateRandomString, waitForTestTriggers } from '@/utils/helpers'
import Registration from '@/views/Registration.vue'
import * as api from '@/api'
import i18n from '@/i18n'
import { generateEmail } from '../test_utils/auth'
import { testIsSuccessResponseMessage, testMessageContains, testNoResponseMessage } from '../test_utils/responsemessage'


const createWrapper = () => {
  return mount(Registration, {
      global: {
        plugins: [i18n]
      }
    }
  )
}

test('write text in registration', async () => {
  const wrapper = createWrapper()
  const newMsg = 'test@example.com'  // New message
  const input = wrapper.find('#email')
  await input.setValue(newMsg)  // Set the input value
  const inputMsg = (input.element as HTMLInputElement).value  // Get the input value
  expect(inputMsg).toBe(newMsg)
  expect(wrapper.vm.regData.email).toBe(newMsg)  // Check if regData.email is updated
})

test('change and read regData directly', async () => {
  const wrapper = createWrapper()
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
  const wrapper = createWrapper()
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

test('check submit registration', async () => {
  const wrapper = createWrapper()
  const newUser = new api.UserCreate()
  newUser.email = generateEmail()
  newUser.password = generateRandomString()
  wrapper.vm.regData = newUser
  await wrapper.vm.$nextTick()
  
  const submitButton = wrapper.find('#submitRegistration')
  await testNoResponseMessage(wrapper)
  //await submitButton.trigger('click')
  await wrapper.vm.submitRegistration()
  await wrapper.vm.$nextTick()
  await flushPromises()
  await waitForTestTriggers()
  await testIsSuccessResponseMessage(wrapper)
})


test('check submit existed registration', async () => {
  const wrapper = createWrapper()
  const newUser = new api.UserCreate()
  newUser.email = generateEmail()
  newUser.password = generateRandomString()
  wrapper.vm.regData = newUser
  // Force Vue to re-render
  await wrapper.vm.$nextTick()
  
  // const submitButton = wrapper.find('#submitRegistration')
  await testNoResponseMessage(wrapper)
  await wrapper.vm.submitRegistration()
  await wrapper.vm.submitRegistration()
  await wrapper.vm.$nextTick()
  await flushPromises()
  await testMessageContains(wrapper, i18n.global.t('messages.REGISTRATION_ERROR'))
})