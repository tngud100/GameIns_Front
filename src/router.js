import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/components/view/HomeView.vue"),
  },
  {
    path: "/Intro",
    name: "intro",
    component: () => import("@/components/view/IntroView.vue"),
  },

  {
    path: "/service",
    name: "service",
    component: () => import("@/components/view/ServiceView.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () => import("@/components/view/NewsView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/components/view/ContactView.vue"),
  },
  {
    path: "/employ",
    name: "employ",
    component: () => import("@/components/view/EmployView.vue"),
  },
  {
    path: "/header",
    name: "Header",
    component: () => import("@/components/header/HeaderNav.vue"),
  },
  // {
  //   path: "/ScrollNav",
  //   name: "ScrollNav",
  //   component: () => import("@/components/header/ScrollNav.vue"),
  // },
  // {
  //   path: "/intro",
  //   name: "intro",
  //   component: () => import("@/components/main/1intro.vue"),
  // },
  // {
  //   path: "/first",
  //   name: "first_section",
  //   component: () => import("@/components/main/2first_section.vue"),
  // },
  // {
  //   path: "/second",
  //   name: "service_section",
  //   component: () => import("@/components/main/3service_section.vue"),
  // },
  // {
  //   path: "/third",
  //   name: "info_section",
  //   component: () => import("@/components/main/4info_section.vue"),
  // },
  // {
  //   path: "/fourth",
  //   name: "contact_section",
  //   component: () => import("@/components/main/5contact_section.vue"),
  // },
  // {
  //   path: "/fifth",
  //   name: "lineUp_section",
  //   component: () => import("@/components/main/3second_section.vue"),
  // },
  // {
  //   path: "/sixth",
  //   name: "divide_section",
  //   component: () => import("@/components/main/2divide_section.vue"),
  // },
  // {
  //   path: "/seven",
  //   name: "slide_section",
  //   component: () => import("@/components/main/4slider.vue"),
  // },

  // {
  //   path: "/nine",
  //   name: "nine",
  //   component: () => import("@/components/view/section_one.vue"),
  // },
  // {
  //   path: "/ten",
  //   name: "ten",
  //   component: () => import("@/components/view/section_two.vue"),
  // },
  // {
  //   path: "/11",
  //   name: "11",
  //   component: () => import("@/components/view/section_Three.vue"),
  // },

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
