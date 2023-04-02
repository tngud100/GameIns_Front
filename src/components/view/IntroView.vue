<template>
  <HeaderNav />
  <IntroSub />
  <Ceo />
  <Value />
  <CI />
  <History />
  <Organ />
  <Location />
  <Footer />
</template>

<script>
import HeaderNav from "./../header/ScrollNav.vue";
import IntroSub from "./../sub/menu_intro/IntroSub.vue";
import Ceo from "./../sub/menu_intro/Ceo.vue";
import Value from "./../sub/menu_intro/Value.vue";
import CI from "./../sub/menu_intro/CI.vue";
import History from "./../sub/menu_intro/History.vue";
import Organ from "./../sub/menu_intro/Organ.vue";
import Location from "./../sub/menu_intro/Location.vue";
import Footer from "./../footer/Footer.vue";

export default {
  name: "Intro",
  components: {
    HeaderNav,
    IntroSub,
    Ceo,
    Value,
    CI,
    History,
    Organ,
    Location,
    Footer,
  },
};
</script>

<style>
@font-face {
  font-family: "Pretendard-Regular";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
}
</style>
