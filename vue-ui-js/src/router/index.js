import { createRouter, createWebHistory } from 'vue-router'
import MenuView from '../views/MenuView.vue'
import VuetifyComponent from '../components/vuetify/ComponentSample.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MenuView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/vuetify/component',
      name: 'component',
      component: VuetifyComponent
    }
  ]
})

export default router
