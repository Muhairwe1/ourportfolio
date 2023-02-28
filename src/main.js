import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

//import componets
import Homepage from "./components/Homepage.vue"
import Aboutpage from "./components/Aboutpage.vue"
import Contactspage from "./components/Contactspage.vue"
import Myworkpage from "./components/Myworkpage.vue"
const routes = [
    {
        path:"/",
        name:"HOME",
        component:Homepage
    },
    {
        path:"/about",
        name:"ABOUT",
        component:Aboutpage
    },
    {
        path:"/contact-me",
        name:"CONTACT",
        component:Contactspage
    },
    {
        path:"/my-work",
        name:"VIEWWORK",
        component:Myworkpage
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app');
