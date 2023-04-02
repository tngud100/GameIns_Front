<template>
  <section class="service_section">
    <div class="back_img">
      <span class="back_span">SERVICE</span>
    </div>
    <div class="goal">
      <span class="blue_line" />
      <span class="text-center">
        <p>
          고객을 위한 웹/앱 맞춤 설계, 유지보수 서비스 제공 다양한플랫폼과
          새로운 기술로
        </p>
        <p>
          빠르게 변화하는 환경에 능동적으로 대응하여, 커뮤니케이션을 통해
          만족감을 총족시켜드립니다.
        </p>
      </span>
    </div>
    <div style="margin-top: 15%">
      <v-row>
        <v-spacer />
        <v-col cols="2">
          <div class="title">
            <span>의뢰 기반 서비스</span>
          </div>
        </v-col>
        <v-col cols="6"> </v-col>
        <v-spacer />
      </v-row>
      <v-row style="margin-top: 3%">
        <v-spacer />
        <v-col class="service_title" cols="2">
          <span>단순 웹/앱 개발</span>
        </v-col>
        <v-col class="service_desc" cols="6">
          <span
            >개인/기업 홈페이지 제작 의뢰 ￫ 1차 자료 제작 ￫ 미팅 ￫ 최종
            견적/기획서 작성 ￫ 웹/앱 제작</span
          >
        </v-col>
        <v-spacer />
        <span class="under_line" />
      </v-row>
      <v-row style="margin-top: 3%">
        <v-spacer />
        <v-col class="service_title" cols="2">
          <span>단순 웹/앱 개발 및 위탁 운영</span>
        </v-col>
        <v-col class="service_desc" cols="6">
          <span
            >개인/기업 홈페이지 제작 및 위탁 운영 의뢰 ￫ 1차 자료 제작 ￫ 미팅 ￫
            최종 견적/기획서 작성 ￫ 웹/앱 제작 ￫ 완성된 웹/앱 위탁 운영 모집
            기반 서비스</span
          >
        </v-col>
        <v-spacer />
        <span class="under_line" />
      </v-row>
      <v-row style="margin-top: 3%">
        <v-spacer />
        <v-col class="service_title" cols="2">
          <span>중계플랫폼</span>
        </v-col>
        <v-col class="service_desc" cols="6">
          <span
            >자사 중계플랫폼 제작 및 회원사 모집 ￫ 중계, 경영 컨설팅, 법무 지원
            등 다양한 서비스 제공</span
          >
        </v-col>
        <v-spacer />
        <span class="under_line" />
      </v-row>
    </div>
  </section>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.service_section {
  height: 1400px;
  color: white;
  position: relative;

  .back_img {
    position: absolute;
    width: 100vw;
    height: 1400px;
    background-image: url("@/assets/sub/service_bg.svg");
    background-size: cover;
    z-index: -1;

    .back_span {
      font-size: 17.5rem;
      font-family: sans-serif;
      font-weight: bold;
      color: #313538;
      display: flex;
      justify-content: center;
      margin-top: 10%;
    }
  }

  .goal {
    padding-top: 28%;
    height: 20vh;
    position: inherit;
    font-family: "Pretendard-Regular";
    font-size: 1.25rem;

    .blue_line {
      width: 2.5%;
      height: 3px;
      background-color: #0174f5;
      display: block;
      margin: 1% auto;
    }
  }

  .title {
    font-family: "Pretendard-Regular";
    font-size: 1.9rem;
    font-weight: bold;
    margin-top: 3%;
  }

  .service_title {
    font-family: "Pretendard-Regular";
    font-size: 1.25rem;
    font-weight: bold;
  }

  .service_desc {
    font-family: "Pretendard-Regular";
    font-size: 1.125rem;
  }

  .under_line {
    box-shadow: 0px 1px 0px 0px;
    width: 65%;
    margin: 1% 17%;
    height: 1px;
  }
}
</style>
