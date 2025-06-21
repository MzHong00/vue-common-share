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
    uuid: Math.floor(Math.random() * 100).toString(),
    type: 'success',
    message: new Date().toLocaleString(),
  })
}
</script>
