import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import '@/index.css'
import App from './App.vue'
import router from './router'

const pinia = createPinia()

// prettier-ignore
createApp(App)
  .use(pinia)
  .use(router)
  .use(PrimeVue)
  .mount('#app')
