<template>
  <div v-if="message" class="p-4 rounded-md bg-red-50">
    <div class="flex">
      <div class="flex-shrink-0">
        <!-- Heroicon name: solid/x-circle -->
        <svg class="w-5 h-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 102 0V5zm-.707 9.293a1 1 0 101.414 1.414 1 1 0 00-1.414-1.414z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-medium text-red-800">
          {{ message }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    message: {
      type: String,
      required: true
    }
  }
});
</script>