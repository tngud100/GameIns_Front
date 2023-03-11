<template>
  <!-- 비디오 section -->
  <section class="video_section">
    <video
      src="../../assets/intro/Walking.mp4"
      class="main_video"
      autoplay="autoplay"
      muted="muted"
      playsinline
      loop
    ></video>
    <div>
      <v-row style="height: 35vh"> </v-row>
      <v-row class="vision_text">
        <v-col class="vision_title" cols="12"> VISION </v-col>
        <v-col class="vision_detail" cols="12">
          <p>4차 산업혁명의 시작으로 어느 곳에서나 통합적으로 커뮤니케이션</p>
          <p>
            혁신적 사고와 미래 지향의 경영을 통해 지역사회와 상생하며 함께
            성장하는
          </p>
          <p>기업이 되도록 최선을 다할 것을 약속드립니다.</p>
        </v-col>
      </v-row>
      <v-row> </v-row>
    </div>
  </section>
</template>

<script>
export default {
  name: "first_section",

  mounted() {
    this.$anime({
      targets: [".vision_title"],
      top: "0px",
      duration: 800,
      translateX: -100,
      delay: 6500,
      opacity: 1,
      easing: "easeInSine",
    }),
      this.$anime({
        targets: [".vision_detail"],
        top: "0px",
        duration: 800,
        translateX: -100,
        delay: 7000,
        opacity: 1,
        easing: "easeInSine",
      });
  },
};
</script>

<style scoped>
/* 메인 Video */
.video_section {
  position: fixed;
  top: 0;
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
  color: rgb(255, 255, 255);
  text-align: right;
}
.vision_title {
  font-size: 5rem;
  padding-right: 15%;
  opacity: 0;
}
.vision_detail {
  font-size: 1rem;
  padding-right: 15%;
  opacity: 0;
}
.filter {
  position: absolute;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  z-index: -998;
  width: 100vw;
  height: 100vh;
}
</style>
