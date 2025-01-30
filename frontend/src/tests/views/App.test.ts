import { expect, test } from 'vitest'
import { mount, flushPromises, VueWrapper } from '@vue/test-utils'
import App from '@/views/App.vue'
import router from '@/router';
import { clearJwtToken, isLogedIn } from '@/utils/auth';
import { createAndLoginUser, logoutUser } from '../test_utils/auth';
import { waitForTestTriggers } from '../test_utils/helpers';
import { describe } from 'node:test';
import { HOME_ROUTE, LOGIN_ROUTE, LOGOUT_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from '@/router/routes';


async function refreshAuth(wrapper: VueWrapper<InstanceType<typeof App>>) {
  wrapper.vm.handleAuthEvent()
  await wrapper.vm.$nextTick()
}

async function createWrapper(authorized: boolean = false): Promise<VueWrapper<InstanceType<typeof App>>> {
  router.push(HOME_ROUTE)
  // Wait for the router to be ready
  await router.isReady()
  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  })
  if (authorized) {
    await createAndLoginUser()
  }
  else {
    clearJwtToken()
  }
  await refreshAuth(wrapper)
  return wrapper
}


async function clickNav(wrapper: VueWrapper, elementId: string) {
  const submitButton = wrapper.find(elementId)
  await submitButton.trigger('click')
  await wrapper.vm.$nextTick()
  await flushPromises()
}

describe('registration tab', () =>{
  const tabName = '#nav-registration'
  test('check redirect button to registration', async () => {
    const wrapper = await createWrapper()
    await clickNav(wrapper, tabName)
    expect(wrapper.vm.$route.path).toBe(REGISTRATION_ROUTE)
  })

  test('hide registration for authorized user', async () => {
    const wrapper = await createWrapper(true)
    expect(wrapper.find(tabName).exists()).toBeFalsy()
  })
})

describe('login tab', () => {
  const tabName = '#nav-login'
  test('check redirect button to login', async () => {
    const wrapper = await createWrapper()
    await clickNav(wrapper, tabName)
    expect(wrapper.vm.$route.path).toBe(LOGIN_ROUTE)
  })
  test('hide login tab for auth user', async () => {
    const wrapper = await createWrapper(true)
    expect(wrapper.find(tabName).exists()).toBeFalsy()
  })
})

describe('profile tab', () => {
  const tabName = '#nav-profile'
  test('hide profile tab for unauth user', async () => {
    const wrapper = await createWrapper()
    expect(wrapper.find(tabName).exists()).toBeFalsy()
  })
  test('check redirect button to profile', async () => {
    const wrapper = await createWrapper(true)
    await clickNav(wrapper, tabName)
    expect(wrapper.vm.$route.path).toBe(PROFILE_ROUTE)
  })
})

describe('logout tab', () => {
  test('hide logout for unauth users', async () => {
    const wrapper = await createWrapper()
    expect(wrapper.find('#nav-logout').exists()).toBeFalsy()
  })
  
  test('show and logout for auth/logouted users', async () => {
    const wrapper = await createWrapper()
    await createAndLoginUser()
    await refreshAuth(wrapper)
    expect(wrapper.find('#nav-logout').exists()).toBeTruthy()
    await logoutUser()
    await refreshAuth(wrapper)
    expect(wrapper.find('#nav-logout').exists()).toBeFalsy()
  })
  
  
  test('click logout', async () => {
    const wrapper = await createWrapper()
    await createAndLoginUser()
    await refreshAuth(wrapper)
    await clickNav(wrapper, "#nav-logout")
    await waitForTestTriggers()
    await refreshAuth(wrapper)
    expect(wrapper.find('#nav-logout').exists()).toBeFalsy()
    expect(wrapper.vm.$route.path).toBe(LOGOUT_ROUTE)
  })
})
