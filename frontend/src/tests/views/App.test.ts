import { expect, test } from 'vitest'
import { mount, flushPromises, VueWrapper } from '@vue/test-utils'
import App from '@/views/App.vue'
import router from '@/router';


async function initRouter() : Promise<VueWrapper> {
  router.push('/')
  // Wait for the router to be ready
  await router.isReady()
  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  })
  return wrapper
}

async function clickNav(wrapper: VueWrapper, elementId: string) {
  const submitButton = wrapper.find(elementId)
  await submitButton.trigger('click')
  await wrapper.vm.$nextTick()
  await flushPromises()
}

test('check redirect button to registration', async () => {
  const wrapper = await initRouter()
  await clickNav(wrapper, "#nav-registration")
  const emailInput = wrapper.find('#email')
  expect(emailInput.exists()).toBe(true)
})

test('check redirect button to login', async () => {
  const wrapper = await initRouter()
  await clickNav(wrapper, "#nav-login")
  const emailInput = wrapper.find('#username')
  expect(emailInput.exists()).toBe(true)
})

test('check redirect button to profile', async () => {
  const wrapper = await initRouter()
  await clickNav(wrapper, "#nav-profile")
  expect(wrapper.find('#profile-info').exists()).toBe(true)
})

test('check redirect button to logout', async () => {
  const wrapper = await initRouter()
  await clickNav(wrapper, "#nav-logout")
  expect(wrapper.find('#logout-success').exists()).toBe(true)
})
