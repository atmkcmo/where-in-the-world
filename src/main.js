import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Home from './views/Home.vue'
import Details from './views/Details.vue'

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            props: true,
        },
        {
            path: '/:country',
            name: 'details',
            component: Details
        }
    ],
})



// import "bootstrap/scss/bootstrap.scss";

import "./assets/scss/styles.scss";
// import "bootstrap";


createApp(App).use(router).mount('#app')
