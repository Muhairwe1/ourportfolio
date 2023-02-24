<template>
    <nav>
        <!-- Title  -->
        <h1> Legends of Awesomeness! from Navigation</h1> </nav>
        <!-- image -->
        <!-- <img v-show="isAdmin" src="../assets/budhaa.jpg" alt="profile photo" class="budhaa" srcset="">
          routes -- 
        <ul>
            <li>home</li>
            <li>about me </li>
            <li>contact me </li>
        </ul>


        <ul>
            <li>Name: {{ userName }}</li>
            <li>Email : {{ userEmail }} </li>
            <li>Age: {{ userAge }} </li>
            <li>ADMIN : {{ isAdmin }}</li>
        </ul>
        <button @click="switchName('Kamau wa Kale')"> switch name </button>
        <button @click="reverseName(userName)"> reverse name </button>
    </nav> -->

    <!-- <div class="userdetails">
        <label>
            Alias :
        </label>
        <input type="text" v-model="targetName">
    </div>
    <div> {{ targetName }}</div> -->
    <!--  v-for directive -->
    <!-- <div>
        <ul v-for="(car, platenumber) in cars" :key="platenumber">
            <div @mouseenter="dispalayIndex(index)"> <span v-show="display==index"> {{ index }}</span> {{ skill }}</div> 
            <li> BRAND : {{ car.brand }} | PLATE# : {{ car.platenumber }} | YOM : {{ car.year }}</li>
        </ul>

        </div> -->
        <!-- mouse over and mousleave -->
        <!-- <button @mouseover="changeButtonNameOnHover()" @mouseleave="changeButtonNameOnLeaveHover">{{buttonName}}</button> -->
        <!-- <div> <button class="submit_details" @click="getAliasName(targeName)">submit details</button>
        </div> -->
</template>

<script>
export default {
    data() {
        return {
            userAge: 68,
            userName: "Mwaniki Njuguna",
            userEmail: "user@oursite.com",
            isAdmin: false,
            targetName: "",
            buttonName:"intial",
            cars: [
                { brand: 'mercedes', year: 2019, platenumber: "KMD 1234Y" },
                { brand: 'toyota', year: 2020, platenumber: "KMX 1000Y" },
                { brand: 'nissan', year: 2016, platenumber: "KMY 234Y" },
                { brand: 'volvo', year: 2016, platenumber: "KMY 004Y" },]
        }
    },
    computed:{},
    methods: {
        switchName(name) {
            this.userName = name
        },

        reverseName(name) {
            let reversedName = "";
            let splittedName = this.userName.split(" ")
            reversedName = splittedName[1] + splittedName[0]
            this.userName = reversedName
        },

        changeButtonNameOnHover() {
this.buttonName = "hovered"
        },
        changeButtonNameOnLeaveHover() {
this.buttonName = "LEFT !"
        }
    },
    mounted() {

    }
}

</script>



<style scoped>
/* nav {
    display: flex !important;
} */

.submit_details {
    margin-top: 20px;
}

.userdetails {
    margin-top: 20px;
}

.budhaa {
    width: 150px;
    height: 150px;
}

button {
    background-color: black;
    color: white;
    margin-right: 10px;
}

button:hover {
    color: yellow;
}
</style>