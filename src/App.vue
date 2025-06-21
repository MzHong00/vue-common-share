<script setup lang="ts">
import { RouterView } from 'vue-router'

import AlertList from './components/common/alert/AlertList.vue'
</script>

<template>
  <RouterView />

  <AlertList />
</template>
