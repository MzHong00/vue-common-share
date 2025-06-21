<!-- 뒤로가기 버튼 -->
<template>
  <button @click="onClickGoBack">{{ label }}</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const { to, label = '뒤로가기' } = defineProps<{
  to: string
  label?: string
}>()

const router = useRouter()

const onClickGoBack = () => {
  // 🔁 히스토리가 없으면 홈으로 이동
  if (!window.history.state.back) {
    return router.replace(to)
  }

  router.back()
}
</script>
