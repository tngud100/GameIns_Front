<template>
  <div class="back_img">
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
  </div>
  <!-- 단락 나누는 코멘트 -->
</template>

<script>
export default {};
</script>

<style>
/* 중간 코멘트 */
.back_img {
  background-image: url("../../assets/home/second_backimg.jpg");
  background-size: cover;
  width: 100%;
  height: 50vh;

  object-fit: fill;
  background-attachment: fixed;
}
.divide_ment {
  z-index: 0;
  padding: 20vh;
  color: rgb(0, 0, 0);
  position: relative;
  display: inline-grid;
  width: 100vw;
  justify-content: center;
  text-align: center;
}
</style>
