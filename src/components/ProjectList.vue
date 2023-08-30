<template>
  <section id="projects">
    <div class="container">
        <h2>Projects</h2>
          <div v-for="project in projects()" :key="project.title">
            <project-view
                :project="project"
            />
            <hr>
          </div>
      </div>
  </section>
</template>

<script>
import ProjectView from "@/components/ProjectView.vue";
import projects from "@/helpers/ProjectList";
import ProjectAdapter from "@/helpers/ProjectAdapter";

export default {
  name: "ProjectList",
  methods: {
    projects() {
      return projects.map((project) => new ProjectAdapter(project))
    },
  },
  components: {ProjectView},
}
</script>

<style scoped>

</style>