import {createApp} from 'vue'
import 'scss-flex'
import 'default-passive-events'
import 'normalize.css'
import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(router)

app.mount('#app')
