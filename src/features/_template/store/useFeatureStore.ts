import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFeatureStore = defineStore('feature-template', () => {
  const items = ref<string[]>([])
  const loading = ref(false)

  const load = async () => {
    loading.value = true
    items.value = []
    loading.value = false
  }

  return { items, loading, load }
})
