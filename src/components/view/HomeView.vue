<template>
  <!-- <Intro class="intro" :state="nav_state" @change-state="handleChangeState" /> -->
  <!-- <HeaderNav class="nav" v-if="nav_state"> </HeaderNav> -->
  <HeaderNav class="nav" />
  <SubNav style="display: none" />
  <First class="first" />
  <Second />
  <Divide />
  <Service />
  <!-- <Info /> -->
  <contact />
  <Footer />
</template>

<script>
import HeaderNav from "./../header/HeaderNav.vue";
import SubNav from "./../header/SubNav.vue";
import Footer from "./../footer/Footer.vue";
// import Intro from "./../main/1intro.vue";
import First from "./../main/2first_section.vue";
import Divide from "./../main/2divide_section.vue";
// import Second from "./../main/3second_section.vue";
import Service from "./../main/3service_section.vue";
// import Info from "./../main/4info_section.vue";
import Contact from "./../main/5contact_section.vue";

export default {
  name: "Home",
  components: {
    HeaderNav,
    SubNav,
    // Intro,
    First,
    Divide,
    // Second,
    Service,
    // Info,
    Contact,
    Footer,
  },
  data: () => ({
    nav_state: false,
  }),
  methods: {
    handleChangeState(state) {
      this.nav_state = state;
    },
  },
};
</script>

<style scoped>
.intro {
  z-index: 5;
}
.first {
  top: 0;
  z-index: 0;
}
</style>
