<template>
  <section class="ceo_section">
    <div class="contain">
      <img class="ceo_img" src="@/assets/sub/ceo_img.svg" />
      <div class="text">
        <p>안녕하십니까? 게임인스의 대표이사 김웅겸입니다.</p>
        <p>
          게임인스는 분야별 전문가들의 축적된 경험과 능력을 바탕으로 매년 성장
          중인
        </p>
        <p>인터넷 플랫폼 개발 전문기업입니다.</p>
        <br />
        <p>
          4차 산업혁명의 시작으로 어느 곳에서나 통합적이고 집약된 커뮤니케이션
          능력을
        </p>
        <p>
          요구하고 있습니다. 시대에 맞추어 사람과 사람, 기술이 모여 더 나은 미래를
          논의하는
        </p>
        <p>
          곳에 함께 하겠습니다. 또한 지속적인 발전과 통합적인 프로젝트 수행
          능력으로
        </p>
        <p>당신의 미래에 대한 비전을 함께 발맞춰 가는 게임인스가 되겠습니다.</p>
        <br />

        <p>
          다시 한번, 더 좋은 서비스를 제공함과 더불어 사회적 책임을 성실히
          이행하며
        </p>
        <p>
          혁신적 사고와 미래 지향적 책임 경영을 통해 지역사회와 상생하며 성장하는
          기업이
        </p>
        <p>되도록 최선을 다할 것을 약속해 드립니다.</p>
        <p>감사합니다.</p>
      </div>
      <div class="back_color"></div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.ceo_section {
  position: relative;
  height: 900px;
  .contain {
    display: flex;
  }
}

.ceo_img {
  width: 600px;
  height: 600px;
  margin-left: 19%;
  margin-top: 10%;
}

.text {
  font-family: "Pretendard-Regular";
  font-size: 1.125;
  margin-left: 5%;
  margin-top: 19%;
}

.back_color {
  position: absolute;
  width: 70vw;
  height: 65vh;
  bottom: 0;
  right: 0;
  z-index: -1;
  background-color: rgba(1, 116, 245, 0.1);
}</style>
