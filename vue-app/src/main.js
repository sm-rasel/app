import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/vue-fontawesome'
// import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import store from './store'
import vueSweetalert2 from 'vue-sweetalert2'
import {toast} from "vue3-toastify";
import 'vue3-toastify'
import 'bootstrap'

import {defineRules} from 'vee-validate'
import AllRules from '@vee-validate/rules'

Object.keys(AllRules).forEach(rule => {
    defineRules(rule, AllRules[rule]);
});

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router, store, vueSweetalert2, toast)
app.config.globalProperties.$store=store
// app.component("fa", FontAwesomeIcon)

app.mount('#app')
