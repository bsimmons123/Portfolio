import { createRouter, createWebHistory } from 'vue-router'
import ProjectList from '@/components/ProjectList.vue'
import GeneralInfo from '@/components/GeneralInfo.vue'
import ContactMe from '@/components/ContactMe.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: GeneralInfo
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectList
  },
  {
    path: '/contact-me',
    name: 'ContactMe',
    component: ContactMe
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router
