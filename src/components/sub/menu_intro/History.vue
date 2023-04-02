<template>
  <section class="history_section">
    <span class="back_text">HISTORY</span>
    <div class="title">HISTORY</div>
    <div class="history_con">
      <img class="history_img" src="@/assets/sub/history_frame.svg" />
      <div class="text_div">
        <div
          v-for="(text, index) in text"
          :key="index"
          :class="'his_' + text.year"
        >
          <span class="year">{{ text.year }}</span>
          <p class="text">{{ text.text1 }}</p>
          <p class="text">{{ text.text2 }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      text: [
        {
          year: "2016",
          text1: "(주) 게임인스 설립",
          text2: "플랫폼 개발 운영 개시",
        },
        {
          year: "2017",
          text1: "주식증좌",
          text2: "(총 11,000주)",
        },
        {
          year: "2021",
          text1: "웹/앱 개발 분야",
          text2: "사업확장",
        },
        {
          year: "2022",
          text1: "본사 확장 이전",
          text2: "티키앤타카 런칭",
        },
        {
          year: "2023",
          text1: "MCN 사업부 신설",
          text2: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.history_section {
  height: 100vh;

  .title {
    top: 15%;
    left: 15%;
    position: relative;
    font-size: 3rem;
    font-family: sans-serif;
    color: #404040;
    font-weight: bold;
  }
}

.history_con {
  margin-top: 15%;
  .history_img {
    position: absolute;
  }
  .year {
    font-size: 1.625rem;
    font-family: "Pretendard-Regular";
    color: white;
  }
  .text {
    font-size: 1.1rem;
    font-family: "Pretendard-Regular";
  }
}

.back_text {
  position: absolute;
  font-size: 15.625rem;
  color: #fafafa;
  margin: 18% 20%;
  z-index: -1;
  font-family: sans-serif;
  font-style: italic;
  font-weight: bold;
}

.text_div {
  top: 9px;
  margin-left: 22.4%;
  line-height: 36px;
  position: relative;
  text-align: center;

  .his_2016 {
    width: 200px;
    height: 100px;
  }
  .his_2017 {
    margin-left: -56.7%;
    margin-top: 9.4%;
  }
  .his_2021 {
    margin-left: -27.6%;
    margin-top: -23.8%;
  }
  .his_2022 {
    margin-left: 2%;
    margin-top: 8.7%;
  }
  .his_2023 {
    margin-left: 31.7%;
    margin-top: -24.8%;
    line-height: 55px;
  }
}
</style>
