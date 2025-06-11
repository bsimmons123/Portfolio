<template>
  <section id="projects">
    <div class="container">
      <h2 class="section-title">Projects</h2>
      <p class="section-subtitle">Some of my recent work</p>
      <div class="row project-grid">
        <div class="col-lg-4 col-md-6 mb-4" v-for="project in projects()" :key="project.title">
          <project-view :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectView from "@/components/ProjectView.vue";
import projects from "@/helpers/ProjectList";

export default {
  name: "ProjectList",
  methods: {
    projects() {
      return projects
    },
  },
  components: {ProjectView},
}
</script>

<style scoped>
.section-title {
  color: white;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
}

.section-subtitle {
  color: #e0e0e0;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  text-align: center;
}

.project-grid {
  margin-top: 1.5rem;
}
</style>
