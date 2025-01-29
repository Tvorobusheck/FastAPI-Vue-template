import { expect, test } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { generateRandomString } from '@/utils/helpers'
import Registration from '@/views/Registration.vue'
import * as api from '@/api'


test('write text in registration', async () => {
  const wrapper = mount(Registration)
  const newMsg = 'test@example.com'  // New message
  const input = wrapper.find('#email')
  await input.setValue(newMsg)  // Set the input value
  const inputMsg = (input.element as HTMLInputElement).value  // Get the input value
  expect(inputMsg).toBe(newMsg)
  expect(wrapper.vm.regData.email).toBe(newMsg)  // Check if regData.email is updated
})

test('change and read regData directly', async () => {
  const wrapper = mount(Registration)
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
  const wrapper = mount(Registration)
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
  const wrapper = mount(Registration)
  const newUser = new api.UserCreate()
  newUser.email = generateRandomString() + '@example.com'
  newUser.password = generateRandomString()
  wrapper.vm.regData = newUser
  // Force Vue to re-render
  await wrapper.vm.$nextTick()
  
  const submitButton = wrapper.find('#submitRegistration')
  const successMessage = wrapper.find('#successMessage')
  expect(successMessage.exists()).toBe(false)
  await wrapper.vm.submitRegistration()
  // await submitButton.trigger('click')
  await wrapper.vm.$nextTick()
  
  await wrapper.vm.$nextTick()
  await flushPromises()
  const successMessage2 = wrapper.find('#response-message')
  expect(successMessage2.exists()).toBeFalsy()
})


test('check submit existend registration', async () => {
  const wrapper = mount(Registration)
  const newUser = new api.UserCreate()
  newUser.email = generateRandomString()
  newUser.password = generateRandomString()
  wrapper.vm.regData = newUser
  // Force Vue to re-render
  await wrapper.vm.$nextTick()
  
  const submitButton = wrapper.find('#submitRegistration')
  const successMessage = wrapper.find('#successMessage')
  expect(successMessage.exists()).toBe(false)
  await wrapper.vm.submitRegistration()
  // await submitButton.trigger('click')
  await wrapper.vm.$nextTick()
  
  await wrapper.vm.$nextTick()
  await flushPromises()
  const successMessage2 = wrapper.find('#response-message')
  expect(successMessage2.exists()).toBeTruthy()
})