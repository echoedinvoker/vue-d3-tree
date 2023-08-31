import { createApp } from 'vue'
import { VueQueryPlugin } from "@tanstack/vue-query";
import 'vue-toast-notification/dist/theme-sugar.css';
import './style.css'
import App from './App.vue'

import TheButton from './components/TheButton.vue'
import TheHeading from './components/TheHeading.vue'
import Modal from './components/Modal.vue'

const app = createApp(App)

app.component('TheButton', TheButton)
app.component('TheHeading', TheHeading)
app.component('Modal', Modal)

app.use(VueQueryPlugin)

app.mount('#app')
