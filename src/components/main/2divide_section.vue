<template>
  <div class="back_img">
    <section class="divide_ment">
      <div class="filter_black"></div>
      <div class="coment"></div>
    </section>
  </div>
  <!-- 단락 나누는 코멘트 -->
</template>

<script>
import TypeIt from "typeit";
export default {
  data() {
    return {
      speed: 100,
      loop: false,
    };
  },
  // <p class="ment1" style="padding: 5px">
  //         (주)게임인스는 기술 지향적 솔루션 구축,
  //       </p>
  //       <p class="ment2" style="padding: 5px">
  //         인터넷 플랫폼 서비스 개발 등 한 차원 높은 서비스를
  //       </p>
  //       <p class="ment3" style="padding: 5px">
  //         제공하기 위한 목표를 가지고 매년 성장 중인 Total IT활용 솔루션
  //       </p>
  //       <p class="ment4" style="padding: 5px">개발 전문기업입니다.</p>
  mounted() {
    new TypeIt(".coment", {
      strings: this.strings,
      loop: this.loop,
      speed: this.speed,
    })
      .type(
        "<p class='ment1' style='padding: 5px'>(주)게임인스는 기술 지향적 솔루션 구축,</p>"
      )
      .type("인터넷 플랫폼 서비스 개발 등 한 차원 높은 서비스를")
      .pause(300)
      .delete(12)
      .type("두 차원 높은 서비스를")
      .type(
        "<p class='ment3' style='padding: 5px'>제공하기 위한 목표를 가지고 매년 성장 중인 Total IT활용 솔루션</p>"
      )
      .type("개발기업 입니다.")
      .move(-5)
      .delete(2)
      .pause(300)
      .type("전문 기업")
      .move(null, { to: "END" })
      .break({ delay: 1000 })
      .go();
  },
};
</script>

<style>
/* 중간 코멘트 */
.back_img {
  background-image: url("https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80");
  background-size: cover;
  position: relative;
  width: 100%;
  height: 50vh;
  margin-top: 100vh;
  object-fit: fill;
  background-attachment: fixed;
}
.filter_black {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
}
.coment {
  z-index: 10;
}
.divide_ment {
  z-index: 0;
  padding: 20vh;
  color: rgb(255, 255, 255);

  position: relative;
  display: inline-grid;
  width: 100vw;
  justify-content: center;
  text-align: center;
}
</style>
