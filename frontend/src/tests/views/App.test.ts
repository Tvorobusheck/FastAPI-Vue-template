import { expect, test } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import App from '@/views/App.vue'
import router from '@/router';


test('check redirect button to registration', async () => {
  router.push('/')
  // Wait for the router to be ready
  await router.isReady()
  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  })
  

  const submitButton = wrapper.find('#nav-registration')
  await submitButton.trigger('click')
  await wrapper.vm.$nextTick()
  
  await flushPromises()
  const emailInput = wrapper.find('#email')
  expect(emailInput.exists()).toBe(true)
})

