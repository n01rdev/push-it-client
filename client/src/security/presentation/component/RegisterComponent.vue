<template>
  <form @submit.prevent="register">
    <input v-model="user.email" type="email" placeholder="Email">
    <input v-model="user.password" type="password" placeholder="Password">
    <button type="submit">Register</button>
    <p v-if="error">{{ error }}</p>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import createSecurityService from "../../application/service/createSecurityService";

export default defineComponent({
  setup() {
    const user = ref({ email: '', password: '' });
    const error = ref('');

    const register = async () => {
      try {
        const response = await createSecurityService.register(user.value);
        localStorage.setItem('authToken', response.data);
        console.log('Registered successfully');
      } catch (error) {
        console.error(error);
        error.value = 'Failed to register. Please try again.';
      }
    };

    return { user, error, register };
  }
});
</script>