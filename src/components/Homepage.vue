<template>
<NavigationVue/>

<!-- welcoem section  -->
<WelcomesectionVue/>
</template>

<script>

import NavigationVue from './Navigation.vue';
import WelcomesectionVue from './Welcomesection.vue';

export default{
    components:{
        NavigationVue,
        WelcomesectionVue
    }
}
</script>

<style scoped></style>