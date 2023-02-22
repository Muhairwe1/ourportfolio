<template>
    <nav>
        <!-- Title  -->
        <h1> Legends of Awesomeness! </h1>
        <!-- image -->
        <img src="../assets/budhaa.jpg" alt="profile photo" class="budhaa" srcset="">
        <!-- routes -->
        <ul>
            <li>home</li>
            <li>about me </li>
            <li>contact me </li>
        </ul>
        <ul>
            <li>Name:  {{ userName }}</li>
            <li>Email :  {{ userEmail }} </li>
            <li>Age:  {{ userAge }} </li>
            <li>ADMIN : {{ isAdmin }}</li>
        </ul>
        <button @click="switchName('Kamau wa Kale')"> switch name </button>
        <button @click="reverseName(userName)"> reverse name </button>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            userAge: 68,
            userName:"Mwaniki Njuguna",
            userEmail:"user@oursite.com",
            isAdmin:false,
        }
    },
    methods:{
   switchName(name){
        this.userName = name
    },

    reverseName(name){
     let reversedName = "";
     let splittedName =  this.userName.split(" ")
     reversedName = splittedName[1] + splittedName[0]
     this.userName = reversedName
    },

 countToName(name){

}
    },
    mounted(){

    }
}

</script>



<style scoped>
/* nav {
    display: flex !important;
} */

.budhaa {
    width: 150px;
    height: 150px;
}
button{
    background-color: black;
    color:white;
    margin-right: 10px;
}
button:hover{
color:yellow; 
}
</style>