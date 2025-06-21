<template>
  <div>
    <button @click="onClickAlertEnque">Alert Button</button>
  </div>
</template>

<script setup lang="ts">
import { useAlertAction } from '@/components/common/alert/alert.store'

const { alertEnqueue } = useAlertAction()

const onClickAlertEnque = () => {
  alertEnqueue({
    type: 'success',
    message: new Date().toLocaleString(),
  })
}
</script>
