<template>
  <div class="alert" :class="type">
    <span class="icon">
      <template v-if="type === 'success'">✔️</template>
      <template v-else>⚠️</template>
    </span>
    <span>{{ message }}</span>
  </div>
</template>

<script setup lang="ts">
import { type AlertTypes } from './alert.store'

const { message, type } = defineProps<AlertTypes>()
</script>

<style scoped>
.alert {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: white;
  animation: fadeIn 0.3s ease;
}

.success {
  background-color: green;
}

.error {
  background-color: red;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
