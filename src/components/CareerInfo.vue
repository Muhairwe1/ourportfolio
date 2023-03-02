<template>
    <div class="main-container">
        <!-- left side : details about my career-->
        <section class="info">
            <!-- titile -->
            <h1>{{ careerTitle }}</h1>
            <!-- description -->
            <p>{{ careerDescription }}</p>
        </section>
        <!-- right side: skills that i currently have-->

        <section class="summary" v-for="(skill, index) in currentSkills" :key="index">
            <div class="skill">{{ skill }}</div>

        </section>

    </div>
</template>
 
<script>
export default {
    data() {
        return {
            careerTitle: "My Career So Far",
            careerDescription: "You know I've always loved racing. My high-school grades weren't good enough to get into journalism school so I did a degree in sports science and worked in a stables until I earned enough money to put myself through the UDM sports writer course, after which I worked on several local newspapers, always trying to cover horse stories until five years ago when I got a job as a junior on the Racing Post. It was a wonderful place and I worked my way up to be editor of the betting column. Now I want to move into working at racecourses and this job would be just wonderful.",
            currentSkills: ["UI DESIGN", "UX DESIGN", "PROTOYPING", "BRANDING", "LEADERSHIP", "FIGMA", "WIREFRAMING", "INFORMATION ARCHITECTURE", "USER RESEARCH"]
        }
    }
}
</script>
 
<style>
.main-container {
    display: flex;
    display:100vw;
    margin-left:100px;
    overflow-x: hidden !important;
    overflow-y: hidden ;

}
.info{
    width: 50% !important;
}
.summary{
    width:50vw;
    margin-right: 100px; 
    justify-content: space-between; 
   flex-wrap: wrap;
}
.skill{
    border-style:solid  ;
    border-color:gray;
    border-width: 1px;
    padding-top: 4px;
    padding-bottom: 4px;
    border-radius: 12px;
    flex-wrap: no-wrap;
    padding-left:12px;
    padding-right:12px

}
</style>