<template>
  <input :class="$style.input" v-bind="$attrs" />
</template>

<script setup lang="ts">
</script>

<style module lang="scss">
@use "../styles/_variables.scss" as *;
.input { display:block; width:100%; padding:8px 10px; border:1px solid $border; border-radius:6px; }
</style>
