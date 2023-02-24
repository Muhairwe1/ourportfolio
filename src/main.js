import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//router maneno
import { createRouter, createWebHistory } from "vue-router";

/*
a route is composed of three parts
: - name, 
 - path
- component
*/

// router components: 
import Navigation from "./components/Navigation.vue"
import Dashboard from  "./components/Dashboard.vue"
/// hosts an array of object routes 
const routes = [
{ 
    path:'/',
    name:'HOME',
    component:Navigation
},
{ 
  path:'/dashboard',
  name:'DASHBOARD',
  component:Dashboard
},
];

// creates an instance of our routes 
const router = createRouter({
    history: createWebHistory(),
    routes,
  });


  // mount the routes to the application instance 
createApp(App).use(router).mount('#app')
