<template>
  <div>
    <button @click="onClickAlertEnque">Alert Button</button>
    <BackButton to="/back" />
  </div>
</template>

<script setup lang="ts">
import { useAlertAction } from '@/components/common/alert/alert.store'
import BackButton from '@/components/common/backButton/BackButton.vue'

const { alertEnqueue } = useAlertAction()

const onClickAlertEnque = () => {
  alertEnqueue({
    type: 'success',
    message: new Date().toLocaleString(),
  })
}
</script>
