import {createApp} from 'vue'
import {createPinia} from 'pinia'
import piniaPersistence from 'pinia-plugin-persistedstate'
import 'scss-flex'
import 'default-passive-events'
import 'normalize.css'
import App from '@/App.vue'
import router from '@/router'
import '@/assets/main.css'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPersistence)

app.use(pinia)
app.use(router)

app.mount('#app')
