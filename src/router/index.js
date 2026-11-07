import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserList from '../views/UserList.vue'

const routes = [
  { path: '/', redirect: '/home'},
  { path: '/home', component: Home },
  { path: '/user', component: UserList }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
