import VueRouter from "vue-router";

import Home from "./views/Home.vue";
import TaskII from "./views/TaskII.vue"
import TaskIII from "./views/TaskIII.vue";
import TaskI from './views/TaskI.vue';

const routes = [
  { path: "/", component: Home },
  { path: "/TaskII", component: TaskII },
  { path: "/TaskIII", component: TaskIII },
  { path: "/TaskI", component: TaskI },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
