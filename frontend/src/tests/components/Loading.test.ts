import { expect, test } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import Loading, { withLoading } from '@/components/Loading.vue'
import { setTimeout } from 'timers/promises';

test('test loading', async () => {
  const wrapper = mount(Loading)
  expect(wrapper.find(".loader").exists()).not.toBeTruthy()
  withLoading(() => setTimeout(2000))
  await wrapper.vm.$nextTick()
  expect(wrapper.find(".loader").exists()).toBeTruthy()
  await flushPromises()
})