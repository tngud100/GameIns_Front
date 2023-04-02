<template>
  <!-- 비디오 section -->
  <section class="video_section">
    <!-- <div data-scroll class="filter" /> -->
    <img
      src="../../assets/intro/rllast_bg.svg"
      class="main_video"
      style="width: 100vw; height: 100vh; background-size: cover"
    />
    <div>
      <v-row style="height: 40vh"> </v-row>
      <v-row class="vision_text">
        <v-col class="vision_title" cols="12">
          <span class="fir_coment">SIMPLE </span>
          <span class="third_coment">IS </span>
          <span class="second_coment">THE </span>
          <span class="fourth_coment">BEST</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="vision_text vision_dec">
          <p>‘위대한 진리는 단순하고 소박하다.’라고 했던 톨스토이의 말처럼</p>
          <p>
            무언가를 넘치도록 하기보다 핵심을 편하고 간결하게 필요한 것으로
            전달하기 위함입니다.
          </p>
        </v-col>
      </v-row>
      <v-row> </v-row>
    </div>
    <div class="scroll_icon">
      <div class="scroll_line">
        <span class="line-1"></span>
        <span class="line-2"></span>
      </div>
      <p class="scroll_text">Scroll</p>
    </div>
  </section>
</template>

<script>
import ScrollOut from "scroll-out";

export default {
  name: "first_section",
  data() {
    return {};
  },

  mounted() {
    this.$anime({
      targets: [".vision_title"],
      duration: 800,
      delay: 500,
      opacity: 1,
      easing: "easeInSine",
    }),
      this.$anime({
        targets: [".fir_coment"],
        color: "rgba(255,255,255,1)",
        delay: 1500,
        duration: 1500,
        easing: "easeInSine",
      });
    this.$anime({
      targets: [".second_coment"],
      color: "rgba(255,255,255,1)",
      delay: 2250,
      duration: 1500,
      easing: "easeInSine",
    });
    this.$anime({
      targets: [".third_coment"],
      color: "rgba(255,255,255,1)",
      delay: 3000,
      duration: 1500,
      easing: "easeInSine",
    });
    this.$anime({
      targets: [".fourth_coment"],
      color: "rgba(255,255,255,1)",
      delay: 3500,
      duration: 1000,
      easing: "easeInSine",
    });
    // // // // // //
    this.$anime({
      targets: [
        ".fir_coment",
        ".second_coment",
        ".third_coment",
        ".fourth_coment",
      ],
      margin: ["-2% 1%"],
      delay: 3600,
      duration: 2000,
      easing: "easeInOutQuad",
    });
    this.$anime({
      targets: [".vision_dec"],
      bottom: -100,
      opacity: 1,
      delay: 5000,
      duration: 1000,
      easing: "easeInOutQuad",
    });

    this.so = ScrollOut({
      scope: this.$el,
    });
    ScrollOut({
      cssProps: {
        visibleY: true,
      },
      threshold: 0.3,
    });

    const section = document.querySelector(".video_section");
    section.addEventListener(
      "wheel",
      function (e) {
        e.preventDefault();
        if (e.deltaY > 0) {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }
      },
      { passive: false }
    );
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1920px) {
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
}

@media screen and (min-width: 1025px) {
}
[data-scroll] {
  transition: opacity 1s;
}

.filter[data-scroll="in"] {
}

.filter[data-scroll="out"] {
  opacity: 1;
}

/* 메인 Video */

.filter {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: -1;
  opacity: 1;
}

.video_section {
  position: fixed;
  top: 0;
  z-index: -100;
  width: 100vw;
  height: 100vh;
  box-shadow: 0px 0px 300px 0px;
}

.main_video {
  position: absolute;
  z-index: -999;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.vision_text {
  color: rgba(255, 255, 255, 0);
  text-align: center;
  z-index: 1000;
  // -webkit-text-stroke: 1px rgb(255, 255, 255);
}

.vision_dec {
  opacity: 0;
  color: rgb(255, 255, 255);
  font-family: "Pretendard-Regular";
  font-size: 1.375rem;
  margin-top: 3vh;
}

.vision_title {
  font-size: 6.25rem;
  opacity: 0;
  display: flex;
  place-content: center;
  font-family: sans-serif;
  font-style: italic;
  font-weight: bold;
}

.vision_detail {
  font-size: 7rem;
  padding-right: 15%;
}

.scroll_line {
  width: 40px;
  height: 40px;
  position: absolute;
  margin-top: 17%;
  margin-left: 50.4%;
}

.line-1 {
  width: 15px;
  height: 3px;
  transform: rotate3d(1, 1, -5, -45deg);
  display: block;
  margin-left: 5px;
  background-color: white;
  border-radius: 12px;
}

.line-2 {
  width: 15px;
  height: 3px;
  transform: rotate3d(1, 1, 5, -45deg);
  display: block;
  border-radius: 12px;
  background-color: white;
  margin-left: 15px;
  margin-top: -2px;
}

.scroll_text {
  position: absolute;
  margin-top: 18%;
  margin-left: 50%;
  color: white;
  font-size: 1.25rem;
}

// .underline--magical {
//   background-image: linear-gradient(120deg, #ddd3ad 0%, #877ae5 100%);
//   background-repeat: no-repeat;
//   background-size: 100% 0.2em;
//   background-position: 0 88%;
//   transition: background-size 0.25s ease-in;
//   &:hover {
//     background-size: 100% 88%;
//   }
// }
</style>
