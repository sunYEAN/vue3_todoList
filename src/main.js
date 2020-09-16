import 'reset.css'
import './assets/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('./pages/home.vue')
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: () => import('./pages/detail.vue')
        },
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
