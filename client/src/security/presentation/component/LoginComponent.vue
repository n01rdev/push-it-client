<template>
  <form @submit.prevent="login">
    <input v-model="user.email" type="email" placeholder="Email">
    <input v-model="user.password" type="password" placeholder="Password">
    <button type="submit">Login</button>
    <p v-if="error">{{ error }}</p>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import authenticateService from "../../application/service/authenticateService";

export default defineComponent({
  setup() {
    const user = ref({ email: '', password: '' });
    const error = ref('');

    const login = async () => {
      try {
        await authenticateService.login(user.value);
        console.log('Logged in successfully');
      } catch (error) {
        console.error(error);
        error.value = 'Failed to login. Please try again.';
      }
    };

    return { user, error, login };
  }
});
</script>