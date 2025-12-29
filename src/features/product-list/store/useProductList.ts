import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Product } from '../types'
import { fetchProducts } from '../api'

export const useProductListStore = defineStore('products', () => {
  const items = ref<Product[]>([])
  const loading = ref(false)

  const load = async () => {
    loading.value = true
    items.value = await fetchProducts()
    loading.value = false
  }

  return { items, loading, load }
})
