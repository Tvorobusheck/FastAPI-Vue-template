// tests/HelloWorld.spec.js
import { mount } from '@vue/test-utils'
import api from '../api'
import { createApp, h } from 'vue'

describe('api.js', () => {
  it('test apollo import exists', async () => {
    expect(api.apolloClient).toBeTruthy()
  })
  
  it('test apollo is established', async () => {
    const app = createApp({
      render: () => h(App),
    })
    expect(api.apolloProvider).toBeTruthy()
    expect(app.use(api.apolloProvider)).toBeTruthy()
  })
  
  it('test apollo simple query', async () => {
    const app = createApp({
      render: () => h(App),
    })
    expect(api.apolloProvider).toBeTruthy()
    expect(app.use(api.apolloProvider)).toBeTruthy()
    const helloMsg = await api.fetchHelloWorld()
    expect(helloMsg).toBe("Hello from GQL server!")
  })
  
  it('test apollo items query', async () => {
    const app = createApp({
      render: () => h(App),
    })
    expect(api.apolloProvider).toBeTruthy()
    expect(app.use(api.apolloProvider)).toBeTruthy()
    const items = await api.fetchItems()
    expect(items).toBeTruthy()
  })

  it('test apollo add item', async () => {
    const app = createApp({
      render: () => h(App),
    })
    expect(api.apolloProvider).toBeTruthy()
    expect(app.use(api.apolloProvider)).toBeTruthy()
    const newName = "New Name"
    const newDescription = "New Description"
    const item = await api.addItem(newName, newDescription)
    expect(item.name).toBe(newName)
    expect(item.description).toBe(newDescription)
  })
})
