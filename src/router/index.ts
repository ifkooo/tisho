import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PhotoList from '../views/PhotoList.vue'
import ProfileView from '../views/ProfileView.vue'


// @ts-ignore
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/photos',
      name: 'photos',
      component: PhotoList,
    },
    {
      path: '/profile/:user_id',
      name: 'profile',
      component: ProfileView,
      props:true
    }
  ]
})

export default router
