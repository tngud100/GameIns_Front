<template>
  <div v-if="!state" class="intro_section">
    <div class="intro"></div>
    <div class="intro_pic">
      <v-row class="intro_text">
        <v-col cols="12" id="first_text">SIMPLE IS</v-col>
        <v-col cols="12" id="second_text">THE BEST</v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";

export default {
  name: "intro",
  props: {
    state: Boolean,
  },
  setup(props, { emit }) {
    onMounted(() => {
      setTimeout(function () {
        const intro = document.getElementsByClassName("intro_section");
        intro[0].style.display = "none";
        emit("change-state", true); // use the emit function passed as the second argument
      }, 6000);
    });
  },
  mounted() {
    this.$anime({
      targets: [".intro_pic"],
      opacity: 1,
      duration: 1000,
      easing: "easeInSine",
    });
    this.$anime({
      targets: [".intro"],
      background: "rgba(0, 0, 0, 0.5)",
      duration: 2000,
      easing: "easeInQuint",
    });
    this.$anime({
      targets: ["#first_text"],
      duration: 1000,
      opacity: 1,
      left: "0px",
      delay: 2100,
      easing: "easeInQuad",
    });
    this.$anime({
      targets: ["#second_text"],
      duration: 1000,
      opacity: 1,
      right: "0px",
      delay: 2500,
      easing: "easeInQuad",
    });
    this.$anime({
      targets: [".intro_section"],
      duration: 1500,
      opacity: 0,
      delay: 4000,
      easing: "easeInSine",
    });
  },
};
</script>

<style scoped>
/* 인트로 PIC */
.intro_section {
  position: relative;
}
.intro {
  position: absolute;
  background: "rgba(0, 0, 0, 0)";
  height: 100%;
  width: 100%;
  object-fit: fill;
}
.intro_pic {
  background-image: url("../../assets/intro/intro_pic.svg");
  display: flex;
  justify-content: center;
  opacity: 1;
  height: 100vh;
}
.intro_text {
  position: relative;
  font-family: sans-serif;
  font-size: 10vw;
  width: 100vw;
  color: white;
  padding: 0vw 12vw 0vw 12vw;
}
#first_text {
  position: relative;
  text-align: left;
  opacity: 0;
  left: -100px;
  transform: translateY(75px);
}
#second_text {
  position: relative;
  text-align: right;
  opacity: 0;
  right: -100px;
  transform: translateY(-60px);
}
</style>
