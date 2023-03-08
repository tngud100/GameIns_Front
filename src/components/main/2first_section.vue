<template>
  <!-- 비디오 section -->
  <div class="filter"></div>
  <section class="video_section">
    <video
      src="../../assets/intro/main_video.mp4"
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
          <p>
            4차 산업혁명의 시작으로 어느 곳에서나 통합적이고 집약된 커뮤니케이션
            능력을 요구하는
          </p>
          <p>
            시대에 맞추어 사람과 사람, 기술이 모여 더 나은 미래를 논의하는 곳에
            함께 하겠습니다.
          </p>
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

  <!-- 단락 나누는 코멘트 -->
  <section class="divide_ment">
    <p class="ment1" style="padding: 5px">
      (주)게임인스는 기술 지향적 솔루션 구축,
    </p>
    <p class="ment2" style="padding: 5px">
      인터넷 플랫폼 서비스 개발 등 한 차원 높은 서비스를
    </p>
    <p class="ment3" style="padding: 5px">
      제공하기 위한 목표를 가지고 매년 성장 중인 Total IT활용 솔루션
    </p>
    <p class="ment4" style="padding: 5px">개발 전문기업입니다.</p>
  </section>
</template>

<script>
export default {
  name: "first_section",
  mounted() {
    this.$anime({
      targets: [".vision_title"],
      top: "0px",
      duration: 500,
      translateX: -100,
      delay: 6500,
      opacity: 1,
      easing: "easeInSine",
    });
    this.$anime({
      targets: [".vision_detail"],
      top: "0px",
      duration: 500,
      translateX: -100,
      delay: 6650,
      opacity: 1,
      easing: "easeInSine",
    });
  },
};
</script>

<style>
/* 메인 Video */
.video_section {
  position: relative;
  top: 0;
  width: 100vw;
  height: 100vh;
}
.main_video {
  position: absolute;
  z-index: -999;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
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

/* 중간 코멘트 */
.divide_ment {
  padding: 20vh;

  color: rgb(0, 0, 0);
  position: relative;
  display: inline-grid;
  width: 100vw;
  justify-content: center;
  text-align: center;
}
</style>
