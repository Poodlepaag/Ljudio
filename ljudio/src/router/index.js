import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import About from '../views/About.vue'
import Artist from '../views/Artist.vue'
import Song from '../views/Song.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/artist/:browseId',
    name: 'Artist',
    component: Artist,
    props: true
  },
  {
    path: '/song/:videoId',
    name: 'Song',
    component: Song,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
