import { createRouter, createWebHistory } from 'vue-router'

import PhotoList from '../views/PhotoList.vue'
import ProfileView from '../views/ProfileView.vue'
import UploadPhoto from '../views/UploadPhoto.vue'
import RegisterUser from '../views/RegisterUser.vue'
import LoginUser  from '../views/LoginUser.vue'


// @ts-ignore
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PhotoList
    },
    {
      path: '/upload',
      name: 'upload',
      component: UploadPhoto,
    },
    {
      path: '/profile/:user_id',
      name: 'profile',
      component: ProfileView,
      props:true
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterUser,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginUser,
    },
  ]
})

export default router
