import { expect, test } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import Loading, { withLoading } from '@/components/Loading.vue'
import { setTimeout } from 'timers/promises';
import { waitForMS, waitForTestTriggers } from '../test_utils/helpers';

test('test loading', async () => {
  const wrapper = mount(Loading)
  expect(wrapper.find("#loader").exists()).toBeFalsy()
  const process = withLoading(() => setTimeout(1500))
  await waitForMS(100)
  await wrapper.vm.$nextTick()
  expect(wrapper.find("#loader").exists()).toBeFalsy()
  await waitForMS(1000)
  await wrapper.vm.$nextTick()
  expect(wrapper.find("#loader").exists()).toBeTruthy()
  await process  
  await flushPromises()
  await wrapper.vm.$nextTick()
  expect(wrapper.find("#loader").exists()).toBeFalsy()
})