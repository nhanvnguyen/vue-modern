<template>
  <router-view v-slot="{ Component }">
    <div class="view-root">
      <Suspense>
        <div class="suspense-inner">
          <component :is="Component" />
        </div>
        <template #fallback>
          <div class="page-loading">Loading...</div>
        </template>
      </Suspense>
    </div>
  </router-view>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.page-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
