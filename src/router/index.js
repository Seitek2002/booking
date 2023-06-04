import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Result from "../views/Result.vue"
import ResultBus from "../views/ResultBus.vue"
import OwnRoom from "../views/OwnRoom.vue"

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
    },
    {
        path: "/result-bus",
        name: "result-bus",
        component: ResultBus
    },
    {
        path: "/own-room",
        name: "own-room",
        component: OwnRoom
    }
  ],
})
