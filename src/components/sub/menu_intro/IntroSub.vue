<template>
  <section class="intro_section">
    <div class="bg">
      <span class="back_text">GAMEINS</span>
    </div>

    <div class="contain">
      <div class="img_text">
        <img class="circle_img" src="@/assets/sub/circle_frame.svg" />
        <div class="intro_text">
          <p>기업명 _ 주식회사 게임인스</p>
          <p>설립일 _ 2016년 6월 29일</p>
          <p>본사 _ 부산광역시 사상구 백양대로 684, 5층</p>
          <p>대표이사 _ 김웅겸</p>
          <p>사업분야 _ 인터넷 플랫폼 개발 및 운영업</p>
        </div>
      </div>

      <div class="sub_intro_text">
        <span class="sub_text"><span class="blue_font">㈜게임인스는</span> 기술 지향적 솔루션 구축,
          인터넷 플랫폼 서비스 개발 등 한 차원 높은 서비스를 제공하기 위한
          목표를 가지고 매년 성장 중인 Total IT 활용 솔루션 개발
          전문기업입니다.</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IntroSub",
  components: {},
};
</script>

<style lang="scss" scoped>
.intro_section {
  width: 100vw;
  height: 850px;
  text-align: center;
  padding-top: 11%;

  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    z-index: -1;

    .back_text {
      font-size: 15.625rem;
      margin: auto;
      color: #fafafa;
      font-family: sans-serif;
      font-style: italic;
      font-weight: bold;
    }
  }

  .img_text {
    position: relative;
    width: 100%;
    height: 300px;

    .circle_img {
      width: 688px;
      height: 300px;
    }

    .intro_text {
      font-family: "Pretendard-Regular";
      font-size: 1.25rem;
      position: absolute;
      display: inline-block;
      text-align: left;
      line-height: 37px;
      left: 48%;
      top: 31%;
    }
  }

  .sub_intro_text {
    font-family: "Pretendard-Regular";
    font-size: 1.125rem;
    text-align: -webkit-center;

    .sub_text {
      display: block;
      width: 34%;
      margin-top: 6%;
      text-align: left;
      margin-left: 6%;

      .blue_font {
        color: #0174f5;
        font-weight: bold;
      }
    }
  }
}</style>
