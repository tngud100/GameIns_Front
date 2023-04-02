<template>
  <HeaderNav />
  <First />
  <Second />
  <Service />
  <Slide />
  <contact />
  <Footer />
</template>

<script>
import HeaderNav from "./../header/HeaderNav.vue";
import First from "./../main/2first_section.vue";
import Second from "./../main/3second_section.vue";
import Service from "./../main/3service_section.vue";
import Slide from "../main/4slider.vue";
import Contact from "./../main/5contact_section.vue";
import Footer from "@/components/footer/Footer_Home.vue";

export default {
  name: "Home",
  components: {
    HeaderNav,
    Slide,
    First,
    Second,
    Service,
    Contact,
    Footer,
  },
  data: () => ({}),
  mounted() {
      // window.addEventListener(
      //   "wheel",
      //   (e) => {
      //     e.preventDefault();
      //   },
      //   { passive: false }
      // );
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Pretendard-Regular";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
}
</style>
