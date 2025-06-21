<template>
  <div v-if="queue.length > 0" class="alert-list">
    <AlertBase
      v-for="alert in queue"
      :key="`${alert.uuid}`"
      :type="alert.type"
      :uuid="`${alert.uuid}`"
      :message="alert.message"
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import AlertBase from './AlertBase.vue'
import { useAlertStore } from './alert.store'

const alertStore = useAlertStore()
const { queue } = storeToRefs(alertStore)
</script>

<style scoped>
.alert-list {
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
