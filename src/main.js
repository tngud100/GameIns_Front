import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import anime from "animejs/lib/anime.es.js";

import VueSlick from "vue-slick";

// import "./assets/font/public/variable/PretendardVariable.ttf";

// import jQuery from "jquery";

const vuetify = createVuetify({
  icons: {
    iconfont: "mdiSvg", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
  components,
  directives,
});

const app = createApp(App);

app.use(vuetify);
app.use(router);

app.component("slick", VueSlick);
app.config.globalProperties.$anime = anime;
// global.$ = jQuery;

app.mount("#app");
