import { createApp } from 'vue';
import { createPinia } from "pinia";
import { Quasar } from "quasar";
import Vue3Santitize from "vue-3-Sanitize";

import App from './App.vue'
import router from './router'

const app = createApp(App);
const allowedTagesAndAttributes = {
    allowedTags : ["a", "img", "br", "span", "u", "p", "li", "strong"],
    allowedAttributes : {
        a: ["href", "class", "download"],
        span: ["class", "id"],
    },
};

app.use(createPinia())
app.use(router)
app.use(Quasar, {
    plugins: {}, 
});
app.use(Vue3Santitize , allowedTagesAndAttributes);

app.mount('#app')
