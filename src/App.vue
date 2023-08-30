<template>
  <div id="app" class="body">
    <title>Brandon Simmons | Software Developer</title>
    <meta name="keywords" content="bsimmons123, Brandon Simmons, Kotlin" />
    <meta name="description" content="Brandon Simmons | Software Developer" />
    <b-container>
      <b-row class="justify-content-md-center text-center">
        <general-info/>
      </b-row>
      <b-row class="justify-content-md-center text-center">
        <about-info/>
      </b-row>
      <b-row class="justify-content-md-center text-center">
        <project-list/>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GeneralInfo from '@/components/GeneralInfo.vue'
import AboutInfo from "@/components/AboutInfo.vue";
import ProjectList from "@/components/ProjectList.vue";

export default {
  name: 'App',
  components: {
    ProjectList,
    GeneralInfo,
    AboutInfo
  }
}
</script>

<style>
.body {
  background: #FF979F;
}
</style>