import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectsPage from '@/views/ProjectsPage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/projects', name: 'projects', component: ProjectsPage }
  ],
  scrollBehavior(to) {
    if (to.hash && to.hash !== to.path) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

export default router