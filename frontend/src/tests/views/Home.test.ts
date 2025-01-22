import { expect, test } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils';
import Home from '@/views/Home.vue';

test('check welcome message', async () => {
  const wrapper = mount(Home)
  const welcomeMsg = wrapper.find('#welcome')
  expect(welcomeMsg.exists()).toBe(true)
})
