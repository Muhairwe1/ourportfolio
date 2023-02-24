<template>
    <button @click="addOneToAgeOne()">add 1 to age1</button>
    <button @click="addOneToAgeTwo()">add 1 to age2</button>
   <div style="margin-top:10px;">
     <button @click="add1ToAgeOne">add 11 to age1</button>
    <button @click="add1ToAgeTwo">add 11 to age2</button>
   </div>
    <div>
        <!-- age 1 -->
        <div class="age">AGE 1 : {{ age1 }}</div>
        <!--  age 2 -->
        <div class="age">AGE 2 : {{ age2 }}</div>
    </div>
    <div>
<div>CURRENT ROUTE : {{ $route.path }}</div>
    <router-link to="/"> home</router-link> |
    <router-link to="/dashboard"> dashboard </router-link>
    </div>
    <router-view></router-view>
</template>


<script>
export default {
    data() {
        return {
            age1: 15,
            age2: 15
        }
    },
    methods: {
        addOneToAgeOne() {
            console.log("AGE 1  added 1")
            this.age1 += 1
        },
        addOneToAgeTwo() {
            console.log("AGE 2 added 1")
            this.age2 += 1
        },
        currentRoute(path){
            
        }
    },
    computed: {
        add1ToAgeOne() {
            console.log("AGE 11  added 1")
            this.age1 += 11
        },
        add1ToAgeTwo() {
            console.log("AGE 22 added 1")
            this.age2 += 11
        }
    }

}
</script>


<style scoped>
button {
    background-color: blue;
    color: white;
    margin-right: 10px;
}
rouetr-view{
    background: crimson;
    width:90px;
    height: 90px;
}
.age {
    margin-top: 10px;
    font-size: 24px;
    font-weight: bold;
}
</style>