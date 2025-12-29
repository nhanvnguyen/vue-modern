<template>
  <button :class="$style.root" v-bind="$attrs"><slot /></button>
</template>

<script setup lang="ts">
defineProps<{ type?: string }>()
</script>

<style module lang="scss">
@use "../styles/_variables.scss" as *;
.root {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  background: $primary;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
