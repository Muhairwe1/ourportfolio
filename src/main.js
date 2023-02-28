import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

//import componets
import Homepage from "./components/Homepage.vue"


const routes = [
    {
        path:"/",
        name:"HOME",
        component:Homepage
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app');
