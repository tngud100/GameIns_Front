import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/components/view/HomeView.vue"),
  },
  {
    path: "/header",
    name: "Header",
    component: () => import("@/components/header/HeaderNav.vue"),
  },
  {
    path: "/intro",
    name: "intro",
    component: () => import("@/components/main/1intro.vue"),
  },
  {
    path: "/first",
    name: "first_section",
    component: () => import("@/components/main/2first_section.vue"),
  },
  {
    path: "/second",
    name: "service_section",
    component: () => import("@/components/main/3service_section.vue"),
  },
  {
    path: "/third",
    name: "info_section",
    component: () => import("@/components/main/4info_section.vue"),
  },
  {
    path: "/fourth",
    name: "contact_section",
    component: () => import("@/components/main/5contact_section.vue"),
  },
  {
    path: "/fifth",
    name: "lineUp_section",
    component: () => import("@/components/main/3second_section.vue"),
  },
  {
    path: "/sixth",
    name: "divide_section",
    component: () => import("@/components/main/2divide_section.vue"),
  },

  {
    path: "/footer",
    name: "Footer",
    component: () => import("@/components/footer/Footer.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
