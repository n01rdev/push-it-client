<template>
  <form @submit.prevent="login">
    <AlertComponent :message="error" :type="'danger'" v-if="error" @close="resetAlerts" />
    <AlertComponent :message="'Logged in successfully'" :type="'success'" v-if="success" @close="resetAlerts" />
    <input v-model="user.email" type="email" placeholder="Email">
    <input v-model="user.password" type="password" placeholder="Password">
    <button type="submit">Login</button>
  </form>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
import { User } from '../../domain/model/User';
import authService from "../../application/service/authService.ts";
import AlertComponent from '../../../ui/component/common/AlertComponent.vue';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default defineComponent({
  components: { AlertComponent },
  setup() {
    const user = ref(new User('', ''));
    const success = ref(false);
    const error = ref('');

    const resetAlerts = () => {
      error.value = '';
    };

    const login = async () => {
      try {
        await authService.login(user.value);
        success.value = true;
        error.value = '';

        NProgress.start();

        setTimeout(() => {
          window.location.href = '/posits/create';
          NProgress.done();
        }, 2000);

      } catch (error) {
        error.value = error.message;
        success.value = false;
      }
    };

    return { user, login, success, error, resetAlerts };
  }
});
</script>