<template>
  <div class="product-list">
    <h2>Products</h2>
    <ul>
      <li v-for="p in products" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const products = ref<Array<{ id: string; name: string }>>([])

onMounted(async () => {
  products.value = [
    { id: '1', name: 'Product A' },
    { id: '2', name: 'Product B' }
  ]
})
</script>

<style module lang="scss">
.product-list { padding: 12px; }
</style>
