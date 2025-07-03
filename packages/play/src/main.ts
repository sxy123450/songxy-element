import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import songxy from 'songxy-element'
import 'songxy-element/dist/index.css'

createApp(App).use(songxy).mount('#app')
