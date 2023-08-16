import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router'
import pinia from './store'
import App from './App.vue'
import 'element-plus/dist/index.css'
import './style.css'

createApp(App)
  .use(router)
  .use(pinia)
  .use(ElementPlus)
  .mount('#app')
