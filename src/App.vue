<script setup lang="ts">
import Toast from 'primevue/toast'
import { onMounted } from 'vue-demi'
import { useBrowser } from './store/browser'

const { setShowFlag } = useBrowser()
onMounted(() => {
  console.log(import.meta.env)
  document.addEventListener('visibilitychange', () => {
    console.log('다른 탭으로 이동한 후 복귀하거나 창을 최소화 했었어요?')
    setShowFlag(document.visibilityState !== 'hidden')
  })
})
defineExpose({
  Toast,
})
</script>
<template>
  <Toast />
  <router-view />
</template>
