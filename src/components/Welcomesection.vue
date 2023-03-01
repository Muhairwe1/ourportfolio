<template>
  <div class="welcome">
    <!-- profile image -->
    <div>
        <img src="../assets/europeana-SMWPYQhVRuY-unsplash.jpg" class="profile_image" alt="" srcset="">
    </div>
    <!-- welcome message -> heading & description -->
    <div class="message">
        <h1>{{ welcomeTitle }}</h1>
        <p> {{ welcomeMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
 data(){
    return{
        welcomeTitle:"Hi there!",
        welcomeMessage:"I am an energetic, ambitious person who has developed a mature and responsible approach to any task that I undertake, or situation that I am presented with. As a graduate with three years’ experience in management, I am excellent in working with others to achieve a certain objective on time and with excellence. In my previous role, I improved the performance, operations and productivity of my team by 35%."
    }
 }
}
</script>

<style>
.profile_image{
    width: 310px;
    height: 340px;
    border-radius: 16px;
    margin:16px;
}

.welcome{
    margin-top: 100px;
    margin-left:200px;
    margin-right:200px; 
    display:flex;
}
.message{
    margin-top:auto;
    margin-bottom:auto;
    margin-right:80px;
    margin-left:90px;
    font-size: 24px;
    color:#555454
}
h1{
    font-size:58px;
    color:#000000;
}
</style>