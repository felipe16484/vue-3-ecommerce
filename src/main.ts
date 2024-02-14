// Composition & Options API Examples
//import Contador from './examples/ContadorOptions.vue'
//import Contador from './examples/ContadorOptions.vue'

// Mount
import { createApp } from 'vue'
import App from './App.vue'

// Vue Router
import router from './router'

// Pinia
import { createPinia } from 'pinia'

// Icons
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  }
})

// Mounting

const app = createApp(App)

app.use(vuetify)
app.use(router)
app.use(createPinia())
app.mount('#app')