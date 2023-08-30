<template>
  <div id="app" class="body">
    <title>Brandon Simmons | Software Developer</title>
    <meta name="keywords" content="bsimmons123, Brandon Simmons, Kotlin" />
    <meta name="description" content="Brandon Simmons | Software Developer" />
    <b-container v-show="!loading">
      <b-row class="justify-content-md-center text-center" style="padding: 30px">
        <nav-bar />
      </b-row>
      <b-row class="justify-content-md-center text-center">
        <general-info/>
      </b-row>
      <b-row class="justify-content-md-center text-center">
        <about-info/>
      </b-row>
      <br>
      <b-row class="justify-content-md-center text-center">
        <project-list/>
      </b-row>
    </b-container>
    <water-filling-animation
        v-show="loading"
    />
  </div>
</template>

<script>
import GeneralInfo from '@/components/GeneralInfo.vue'
import AboutInfo from "@/components/AboutInfo.vue";
import ProjectList from "@/components/ProjectList.vue";
import WaterFillingAnimation from "@/components/WaterFillingAnimation.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'App',
  components: {
    NavBar,
    WaterFillingAnimation,
    ProjectList,
    GeneralInfo,
    AboutInfo
  },
  data() {
    return {
      loading: true,
      loadingAnimationTime: 500
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, this.loadingAnimationTime)
  }
}
</script>

<style>
.body {
  background: #222327;
}
</style>