<template>
<NavigationVue/>

<!-- welcoem section  -->
<WelcomesectionVue/>
<!-- careeer section -->
<CareerInfoVue/>
</template>

<script>

import NavigationVue from './Navigation.vue';
import WelcomesectionVue from './Welcomesection.vue';
import CareerInfoVue from './CareerInfo.vue';

export default{
    components:{
        NavigationVue,
        WelcomesectionVue,
        CareerInfoVue
    }
}
</script>

<style scoped></style>