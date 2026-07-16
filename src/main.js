import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css' // 전역 스타일링 파일

const app = createApp(App)
app.use(router)
app.mount('#app')