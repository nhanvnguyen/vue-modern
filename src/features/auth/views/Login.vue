<template>
  <div class="login">
    <h2>Sign in</h2>
    <form @submit.prevent="submit">
      <BaseInput v-model="form.email" placeholder="Email" />
      <BaseInput v-model="form.password" type="password" placeholder="Password" />
      <BaseButton type="submit">Sign in</BaseButton>
    </form>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'AuthLogin' })
import { reactive } from 'vue'
import { useAuthStore } from '@/features/auth/store/useAuth'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'

const auth = useAuthStore()
const form = reactive({ email: '', password: '' })

const submit = async () => {
  await auth.login(form)
}
</script>

<style module lang="scss">
.login { display:flex; flex-direction:column; gap:12px; }
form { display:flex; flex-direction:column; gap:8px; }
</style>
