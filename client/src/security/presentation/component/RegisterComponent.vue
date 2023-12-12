<template>
  <form @submit.prevent="register" class="space-y-4 md:space-y-6">
    <AlertComponent :message="error" :type="'danger'" v-if="error" />
    <AlertComponent :message="'Registered successfully'" :type="'success'" v-if="success" />
    <div>
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input v-model="user.email" type="email" id="email" placeholder="name@company.com" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
    </div>
    <div>
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
      <input v-model="user.password" type="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
    </div>
    <div>
      <label for="confirmPassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
      <input v-model="confirmPassword" type="password" id="confirmPassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
    </div>
    <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Register</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { User } from '../../domain/model/User'
import authService from '../../application/service/authService';
import AlertComponent from '../../../ui/component/common/AlertComponent.vue';

export default defineComponent({
  components: {AlertComponent},
  setup() {
    const user = ref(new User());
    const confirmPassword = ref('');
    const error = ref('');
    const success = ref(false);

    const register = async () => {
      try {
        user.value.validatePassword(confirmPassword.value);
        const response = await authService.register(user.value);
        localStorage.setItem('authToken', response.data);
        success.value = true;
      } catch (err) {
        error.value = err.message;
      }
    };

    return { user, confirmPassword, error, success, register };
  }
});
</script>