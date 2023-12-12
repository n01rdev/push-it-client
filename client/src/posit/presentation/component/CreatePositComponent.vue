<template>
  <form @submit.prevent="createPosit" class="space-y-4 md:space-y-6">
    <AlertComponent :message="error" :type="'danger'" v-if="error" />
    <AlertComponent :message="'Posit created successfully'" :type="'success'" v-if="success" />
    <div>
      <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
      <input v-model="posit.title" type="text" id="title" placeholder="Title" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
    </div>
    <div>
      <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
      <textarea v-model="posit.content" id="content" placeholder="Content" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></textarea>
    </div>
    <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create Posit</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Posit } from '../../domain/model/Posit';
import createPositService from "../../application/service/createPositService";
import AlertComponent from '../../../ui/component/common/AlertComponent.vue';

export default defineComponent({
  components: { AlertComponent },
  setup() {
    const userUuid = localStorage.getItem('userUuid');
    const posit = ref(new Posit('', '', userUuid));
    const success = ref(false);
    const error = ref('');

    const createPosit = async () => {
      try {
        await createPositService.create(posit.value);
        success.value = true;
        error.value = '';
      } catch (error) {
        error.value = error.message;
        success.value = false;
      }
    };

    return { posit, createPosit, success, error };
  }
});
</script>