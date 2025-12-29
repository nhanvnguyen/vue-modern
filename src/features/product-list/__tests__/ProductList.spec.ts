import { mount } from '@vue/test-utils'
import ProductList from '../views/ProductList.vue'
import { describe, it, expect } from 'vitest'

describe('ProductList', () => {
  it('renders products', async () => {
    const wrapper = mount(ProductList)
    expect(wrapper.text()).toContain('Products')
  })
})
