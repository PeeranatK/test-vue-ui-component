//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// tailwind
import './assets/tailwind.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Import Bootstrap and BootstrapVue CSS files (order is important)
// Import our custom CSS
import 'bootstrap/dist/css/bootstrap.css'
//import bootstrap  from 'bootstrap/dist/js/bootstrap.js'

const vuetify = createVuetify({
  components,
  directives,
})



const app = createApp(App)

app.use(router)
app.use(vuetify)
//app.use(bootstrap)

app.mount('#app')
