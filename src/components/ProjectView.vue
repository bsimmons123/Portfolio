<template>
  <div class="row">
    <div class="col-lg-4 col-sm-12">
      <div>
        <h3>{{ project.title }}</h3>
        <div>
          <div class="mb-4" v-html="project.description"></div>
        </div>
        <a
            rel="noreferrer"
            target="_blank"
            style="padding-right: 5px; color: #000000; text-decoration: none;"
            :href="project.viewLink"
        >
          <template v-if="project.viewLink">
            <font-awesome-icon
                size="3x"
                :icon="['fas', 'eye']"
                class="clickable"
            />
          </template>
          <template v-else>
            <font-awesome-icon
                size="3x"
                :icon="['fas', 'eye']"
                class="disable-clickable"
                v-b-tooltip="'Unavailable to view'"
            />
          </template>
        </a>

        <a
            rel="noreferrer"
            target="_blank"
            :href="project.githubLink"
            style="color: #000000; text-decoration: none;"
        >
          <font-awesome-icon
              size="3x"
              :icon="['fab', 'github']"
              class="clickable"
          />
        </a>
      </div>
    </div>
    <div class="col-lg-8 col-sm-12">
      <div>
        <div
            data-tilt
            data-tilt-max="4"
            data-tilt-glare="true"
            data-tilt-max-glare="0.5"
            class="js-tilt"
        >
          <img
              alt="Project Image"
              class="img-fluid"
              :src="require('@/assets/' + project.image)"
          />
        </div>
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
  mounted() {
    initTiltAnimation()
  }
}
</script>

<style scoped>
.clickable {
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.clickable:hover {
  transform: scale(1.05);
}

.disable-clickable {
  opacity: 0.6; /* Adjust the opacity to your preference */
}

.disable-clickable:hover {
  transform: scale(1.05);
}
</style>