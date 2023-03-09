<template>
  <section class="second_section">
    <div class="second_content">
      <v-row data-scroll class="content_img first_img">
        <v-col cols="6">
          <img
            src="../../assets/home/slideimg1.png"
            style="width: 350px; height: 250px; box-shadow: 5px 5px 10px -5px"
            alt=""
          />
        </v-col>
        <v-col cols="6">
          <span>마음을 움직이는 스토리텔링 웹/앱 개발</span>
          <span>타협하지 않는 최고의 퀄리티</span>
        </v-col>
      </v-row>
      <v-row
        data-scroll
        class="content_img second_img"
        style="justify-content: right"
      >
        <v-col cols="8">
          <span>마음을 움직이는 스토리텔링 웹/앱 개발</span>
          <span>타협하지 않는 최고의 퀄리티</span>
        </v-col>
        <v-col cols="3">
          <img
            src="../../assets/home/slideimg2.png"
            style="width: 350px; height: 250px; box-shadow: 5px 5px 10px -5px"
            alt=""
          />
        </v-col>
      </v-row>
      <v-row data-scroll class="content_img third_img">
        <v-col cols="6">
          <img
            src="../../assets/home/aaaimg.png"
            style="width: 350px; height: 250px; box-shadow: 5px 5px 10px -5px"
            alt=""
          />
        </v-col>
        <v-col cols="6">
          <span>마음을 움직이는 스토리텔링 웹/앱 개발</span>
          <span>타협하지 않는 최고의 퀄리티</span>
        </v-col>
      </v-row>
    </div>
    <div class="LineUpWord">
      <v-row>
        <span class="purpose word">PURPOSE</span>
      </v-row>
      <v-row>
        <span class="opportunity word">OPPORTUNITY</span>
      </v-row>
      <v-row>
        <span class="grow word">GROW</span>
      </v-row>
      <v-row>
        <span class="needs word">NEEDS</span>
      </v-row>
    </div>
  </section>
</template>

<script>
import ScrollOut from "scroll-out";

export default {
  name: "second_section",
  setup() {
    ScrollOut();
  },
  mounted() {
    ScrollOut({
      cssProps: {
        visibleY: true,
      },

      onShown: function (el) {
        el.classList.add("animated");
      },

      onHidden: function (el) {
        el.classList.remove("animated");
      },
    });
  },
  // this.$anime({
  //   targets: [".first_img"],
  //   top: "0px",
  //   duration: 500,
  //   translateX: -100,
  //   delay: 500,
  //   opacity: 1,
  //   easing: "easeInSine",
  // });
  // this.$anime({
  //   targets: [".second_img"],
  //   top: "0px",
  //   duration: 500,
  //   translateX: 100,
  //   delay: 1500,
  //   opacity: 1,
  //   easing: "easeInSine",
  // });
  // this.$anime({
  //   targets: [".third_img"],
  //   top: "0px",
  //   duration: 500,
  //   translateX: -100,
  //   delay: 2500,
  //   opacity: 1,
  //   easing: "easeInSine",
  // });
};
</script>

<style>
[data-scroll] {
  transition: transform 100ms;
}

[data-scroll="in"] {
  --scale: calc(0.8 + (0.3 * var(--visible-y)));
  opacity: var(--visible-y);
  transform: scale(var(--scale));
  transform-origin: right center;
}

.second_section {
  position: relative;
  height: 130vh;
  width: 100vw;
}
.second_content {
  position: relative;
  margin: 0 20%;
  padding: 100px;
}
.content_img {
  padding-bottom: 15vh;
}
.LineUpWord {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: -100px;
  font-size: 12rem;
  color: #f6f6f6;
  left: 21%;
  z-index: -1000;
}
.word {
  padding-bottom: 5%;
}
.filter {
}
.purpose {
}
.opportunity {
}
.grow {
}
</style>
