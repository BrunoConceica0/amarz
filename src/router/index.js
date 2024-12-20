import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    nome: "Login",
    component: () => import("@/views/Login"),
  },
  {
    path: "/home",
    nome: "home",
    component: () => import("@/views/Home"),
    children: [],
  },
  {
    path: "/registerItems",
    nome: "registerItems",
    component: () => import("@/views/RegisterItems"),
  },
  {
    path: "/register",
    nome: "Register",
    component: () => import("@/components/Register"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
