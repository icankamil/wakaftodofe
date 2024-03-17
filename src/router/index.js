//import vue router
import { createRouter, createWebHistory } from "vue-router";

//define a routes
const routes = [
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/auth/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(
        /* webpackChunkName: "register" */ "@/views/auth/RegisterView.vue"
      ),
  },
  {
    path: "/todo",
    name: "todo",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "@/views/todo/IndexTodo.vue"),
  },
];

//create router
const router = createRouter({
  history: createWebHistory(),
  routes, // config routes
});

export default router;
