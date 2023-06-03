import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Result from "../views/Result.vue"

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/result",
        name: "result",
        component: Result
    }
  ],
})