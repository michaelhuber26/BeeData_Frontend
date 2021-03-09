import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Data from "../views/Data.vue";
import Charts from "../views/Charts.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/data",
    name: "Data",
    component: Data,
  },
  {
    path: "/charts",
    name: "Charts",
    component: Charts,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
