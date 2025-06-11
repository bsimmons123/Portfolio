<template>
  <div class="project-card">
    <div class="project-image-container">
      <img
        alt="Project Image"
        class="project-image"
        :src="require('@/assets/' + project.image)"
        data-tilt
        data-tilt-max="4"
        data-tilt-glare="true"
        data-tilt-max-glare="0.5"
      />
    </div>
    <div class="project-content">
      <h3 class="project-title">{{ project.title }}</h3>
      <div class="project-description" v-html="getShortDescription()"></div>
      <div class="project-links">
        <a
          v-if="project.viewLink"
          rel="noreferrer"
          target="_blank"
          :href="project.viewLink"
          class="project-link"
        >
          <font-awesome-icon :icon="['fas', 'eye']" />
          <span>View</span>
        </a>
        <span 
          v-else
          class="project-link disabled"
        >
          <font-awesome-icon :icon="['fas', 'eye']" />
          <span>View</span>
        </span>
        <a
          rel="noreferrer"
          target="_blank"
          :href="project.githubLink"
          class="project-link"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
          <span>Code</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import initTiltAnimation from "@/helpers/ImageTiltAnimation";
import ProjectAdapter from "@/helpers/ProjectAdapter";

export default {
  name: "ProjectView",
  props: {
    project: {
      required: true,
      type: ProjectAdapter
    }
  },
  methods: {
    getShortDescription() {
      // Extract the first sentence or first 150 characters
      const fullDesc = this.project.description;
      const firstSentence = fullDesc.split('.')[0] + '.';
      return firstSentence.length < 150 ? firstSentence : fullDesc.substring(0, 150) + '...';
    }
  },
  mounted() {
    initTiltAnimation()
  }
}
</script>

<style scoped>
.project-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 100%;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.project-image-container {
  overflow: hidden;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #333;
  font-size: 1.25rem;
}

.project-description {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1.25rem;
  line-height: 1.5;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #f0f0f0;
  color: #333;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background-color 0.3s, transform 0.2s;
}

.project-link:hover {
  background-color: #e0e0e0;
  transform: translateY(-2px);
  color: #333;
  text-decoration: none;
}

.project-link.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
