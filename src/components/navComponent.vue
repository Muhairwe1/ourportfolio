<template lang="">
        <nav>
      
      <ul>
        <li style="float:left"><a class="active" href="#about">LOGO</a></li>
          <li v-for="(link, index) in links" :key="index"><a v-bind:href="link.url">{{ link.text }}</a></li>
      </ul>
  </nav>
   
</template>
<script scoped>
export default {
  
  name: "navComponent",
    data() {
    return {
        links: [
         {text: 'View More', url: 'home.html'},
        {text: 'Contact', url: 'home.html'},
        {text: 'About', url: 'about.html'},
        {text: 'Home', url: 'home.html'}
      ] 
    };
  },

    
}
</script>
<style>



.logo{
 color: blue;

}


li{
    
    display: inline;
    float: right;
    
}
ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: fixed;

  
  background-color: aqua;
  top: 0;
  width: 100%;
  
}
li a{
    
  display: block;
  color: black;
  text-align: center;
  padding:  14px 16px;
  text-decoration: none;

}
    
</style>