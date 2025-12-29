import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import Login from '../views/Login.vue'
import { describe, it, expect } from 'vitest'

describe('Login', () => {
  it('renders sign in form', () => {
    const wrapper = mount(Login, { global: { plugins: [createPinia()] } })
    expect(wrapper.text()).toContain('Sign in')
  })
})
