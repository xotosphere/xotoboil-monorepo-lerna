import { createApp } from 'vue'
import UI from '@xotoboil-monorepo-lerna/ui'
import App from './App.vue'
import 'virtual:windi.css'
import './index.css'

const app = createApp(App)

app.use(UI)
app.mount('#app')
