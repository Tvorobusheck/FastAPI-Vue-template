import { expect, test } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { generateRandomString } from '@/utils/helpers'
import Login from '@/views/Login.vue'
import { apiConfiguration } from '@/utils/server'
import * as api from '@/api'
import { isLogedIn } from '@/utils/auth'

test('write text in login', async () => {
  const wrapper = mount(Login)
  const newMsg = generateRandomString()  // New message
  const input = wrapper.find('#username')
  await input.setValue(newMsg)  // Set the input value
  const inputMsg = (input.element as HTMLInputElement).value  // Get the input value
  expect(inputMsg).toBe(newMsg)
  expect(wrapper.vm.username).toBe(newMsg)  // Check if regData.email is updated
})

test('change and read username directly', async () => {
  const wrapper = mount(Login)
  const newEmail = generateRandomString() + '@example.com'
  
  wrapper.vm.username = newEmail
  await wrapper.vm.$nextTick()
  
  const input = wrapper.find('#username')
  const inputMsg = (input.element as HTMLInputElement).value
  expect(inputMsg).toBe(newEmail)
  
  expect(wrapper.vm.username).toBe(newEmail)
})

test('check password input for hide option', async () => {
  const wrapper = mount(Login)
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
  const wrapper = mount(Login)
  const apiInstance = new api.AuthApi(apiConfiguration());
  const newUser = new api.UserCreate()
  newUser.email = generateRandomString() + '@example.com'
  newUser.password = generateRandomString()
  const user: api.UserRead = await apiInstance.registerRegisterUsersAuthRegisterPost(newUser)
  expect(user).toBeDefined()

  wrapper.vm.username = newUser.email
  wrapper.vm.password = newUser.password
  // Force Vue to re-render
  await wrapper.vm.$nextTick()
  
  const submitButton = wrapper.find('#submitLogin')
  const successMessage = wrapper.find('#successMessage')
  expect(successMessage.exists()).toBe(false)
  await wrapper.vm.submitLogin()
  // await submitButton.trigger('click')

  await wrapper.vm.$nextTick()
  await flushPromises()
  const successMessage2 = wrapper.find('#successMessage')
  expect(successMessage2.exists()).toBe(true)
  expect(successMessage2.text()).toBe("Login successful!")
  expect(isLogedIn()).toBeTruthy()
})