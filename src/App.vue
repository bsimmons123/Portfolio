<template>
  <div id="app" class="body">
    <nav-bar v-show="!loading" />
    <b-container v-show="!loading" class="content-container">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </b-container>
    <water-filling-animation
        v-show="loading"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import WaterFillingAnimation from "@/components/WaterFillingAnimation.vue";
import NavBar from "@/components/NavBar.vue";

const loading = ref(true)
const loadingAnimationTime = 500

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, loadingAnimationTime)
})
</script>

<style>
.body {
  background: teal;
}

.content-container {
  padding-top: 2rem;
}
</style>
