import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus, {locale:zhCn})
app.mount('#app')
