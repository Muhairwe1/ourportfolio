<template>
    <!--  
    - enable page routing
    - display logo 
    - display "viewwork" button   
-->

    <nav>
        
        <!-- logo -->
        <div class="logo">
            <!-- icon + name -->
            <img src="../assets/logo.svg" alt="my logo" srcset="">
            
              <!-- mouse over and mousleave -->
              
            <div class="trigger" @mouseenter="activeHover = true" @mouseleave="activeHover = false" >
                <p v-if="activeHover"> Our Portfolio </p>
                <p v-if ="!activeHover"> <div id="username">{{ username }}</div> </p>
            </div>
     </div>
        <!-- routes -->
        <div class="routes">
            <router-link to="/" class="nav-item">home</router-link>
            <router-link to="/about" class="nav-item">about</router-link>
            <router-link to="/contact-me" class="nav-item">contact</router-link>
            <router-link to="/my-work" class="nav-item" id="view-work">view work</router-link>
        </div>
        <!-- view work button -->
    </nav>
</template>
<script>
export default {
    data() {
        return {
            username: "Wa Kamau",
            activeHover : false
        }
    }
}
</script>
<style scoped>
nav {
    background-color: rgb(244, 248, 255);
    /* padding-left: 100px;
    padding-right: 100px; */
    position: absolute;
    overflow-y: hidden;
    overflow-x: hidden;
    top: 0;
    left: 0;
    width: 100vw;
    height: 64px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
.logo {
    display: flex;
    position: absolute;
    margin-left: 100px;
    left: 0;
}
#username { 
    margin-top: 20px;
    margin-bottom: 16px; 
    margin-left: 8px;
    font-size: 14px;
    color: rgb(81, 81, 81);
}
.routes {
    position: absolute;
    margin-top: 16px;
    margin-bottom: 16px; 
    justify-content: center ;
    margin-right: 100px;
    right: 0 !important;  
}
.nav-item {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 18px;
    text-decoration: none;
    color: black;
    font-weight: bold;
}
#view-work{
    background-color: black;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 12px;
    font-size: 14px;
    color: white;
    text-decoration: none;
    font-weight:normal;
}
.trigger{
    background: "#ffffff";
  }
</style>