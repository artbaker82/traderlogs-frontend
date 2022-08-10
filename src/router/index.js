import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/Login.vue"
import Dashboard from "@/views/Dashboard.vue"

const routes = [
  { path: '/', component: Dashboard },
  { path: '/login', component: Login }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
