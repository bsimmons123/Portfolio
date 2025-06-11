<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="logo">
        <font-awesome-icon :icon="['fas', 'code']" />
        <span>Portfolio</span>
      </div>
      <div class="nav-links" :class="{ 'active': mobileMenuOpen }">
        <div class="nav-item" :class="{ 'active': activeIndex === 0 }" @click="setActiveIndex(0)">
          <router-link to="/">
            <font-awesome-icon :icon="['fas', 'house']" />
            <span>Home</span>
          </router-link>
        </div>
        <div class="nav-item" :class="{ 'active': activeIndex === 2 }" @click="setActiveIndex(2)">
          <router-link to="/projects">
            <font-awesome-icon :icon="['fas', 'bars-progress']" />
            <span>Projects</span>
          </router-link>
        </div>
        <div class="nav-item" :class="{ 'active': activeIndex === 4 }" @click="setActiveIndex(4)">
          <router-link to="/contact-me">
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <span>Contact</span>
          </router-link>
        </div>
      </div>
      <div class="social-icons">
        <a href="https://github.com/bsimmons123" target="_blank" class="social-icon">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a href="https://www.linkedin.com/in/brandon-simmons-145b88223/" target="_blank" class="social-icon">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a href="mailto:bs@brandon-simmons.work" class="social-icon">
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </a>
      </div>
      <div class="mobile-toggle" @click="toggleMobileMenu">
        <font-awesome-icon :icon="['fas', mobileMenuOpen ? 'xmark' : 'bars']" />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(0)
const mobileMenuOpen = ref(false)

const setActiveIndex = (index) => {
  activeIndex.value = index
  mobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

:root {
  --primary-color: #00a8cc;
  --text-color: #ffffff;
  --bg-color: rgba(0, 128, 128, 0.8);
  --hover-color: #00c2c2;
  --transition-speed: 0.3s;
}

.navbar {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  background-color: var(--bg-color);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all var(--transition-speed) ease;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--primary-color);
  padding-right: inherit;
}

.logo svg {
  margin-right: 0.5rem;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-item {
  position: relative;
}

.nav-item a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color var(--transition-speed) ease;
}

.nav-item a:hover {
  color: var(--primary-color);
}

.nav-item.active a {
  color: var(--primary-color);
}

.nav-item.active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--primary-color);
  border-radius: 3px;
  transform: scaleX(1);
  transition: transform var(--transition-speed) ease;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--primary-color);
  border-radius: 3px;
  transform: scaleX(0);
  transition: transform var(--transition-speed) ease;
}

.nav-item:hover::after {
  transform: scaleX(1);
}

.social-icons {
  display: flex;
  gap: 1rem;
  padding-left: inherit;
}

.social-icon {
  color: var(--text-color);
  font-size: 1.2rem;
  transition: color var(--transition-speed) ease, transform var(--transition-speed) ease;
}

.social-icon:hover {
  color: var(--primary-color);
  transform: translateY(-3px);
}

.mobile-toggle {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-color);
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 1rem;
  }

  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: var(--bg-color);
    padding: 1rem;
    gap: 1rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-150%);
    transition: transform var(--transition-speed) ease;
    z-index: 999;
  }

  .nav-links.active {
    transform: translateY(0);
  }

  .nav-item {
    width: 100%;
    text-align: center;
  }

  .nav-item a {
    justify-content: center;
    padding: 0.5rem 0;
  }

  .social-icons {
    display: none;
  }

  .mobile-toggle {
    display: block;
  }
}
</style>
