<template>
  <div class="auth-layout">
    <main class="auth-main">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style module lang="scss">
.auth-layout { display:flex; align-items:center; justify-content:center; height:100vh; }
.auth-main { width:100%; max-width:420px; padding:20px; border:1px solid rgba(0,0,0,0.06); border-radius:6px; }
</style>
