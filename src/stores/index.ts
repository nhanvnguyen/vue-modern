import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    version: '0.1.0'
  })
})
