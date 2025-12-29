import { ref } from 'vue'
import api from '@/api/axios'

export const useFetch = <T>(url: string) => {
  const data = ref<T | null>(null)
  const loading = ref(false)
  const error = ref<unknown | null>(null)

  const execute = async () => {
    loading.value = true
    try {
      const res = await api.get<T>(url)
      data.value = res.data
    } catch (err: unknown) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return { data, loading, error, execute }
}
