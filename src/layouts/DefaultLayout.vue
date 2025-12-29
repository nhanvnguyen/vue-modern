<template>
  <div class="layout">
    <header class="header">Vue Modern</header>
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style module lang="scss">
.layout { padding: 16px; }
.header { font-weight: 700; margin-bottom: 12px; }
.main { min-height: calc(100vh - 64px); }
</style>
