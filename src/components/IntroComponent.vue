<template>
  
  <div class="flex-container">

  <div>
    <img src="/public/tree.jpg" alt="profilepic" height="300"/>
    </div>
   <div>
    <span class="intro_one">{{ intro_1 }}</span> 
    <br><br>
    <span  class="intro_two">{{ intro_2 }}</span>
   
   </div>

   </div>
   

</template>
<script>
export default {
  name: "introComponent",
  data() {
    return {
      intro_1: "Welcome To Awesomeness!",
      intro_2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus unde exercitationem rem molestias reprehenderit voluptatum praesentium officiis illo sint aliquid ut sapiente facere, fugiat architecto, reiciendis consequatur deleniti dolorem labore!",
    };
  },
};
</script>
<style>
.flex-container {
  display: flex;
  background-colo: ;
  margin-top: 100px;
}

.flex-container > div {
  background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
}
.intro_one{
    font-weight: bold;
    font-size: 30px;
}

.intro_two{
    font-size: 20px;
}

</style>
