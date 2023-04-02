<template>
  <section class="employ_section">
    <div class="title">인재상</div>
    <div class="talent">
      <div>
        <img src="@/assets/sub/employ_trend.svg" />
        <p>Zero in on Trend</p>
        (트렌드)
      </div>
      <div>
        <img src="@/assets/sub/employ_tech.svg" />
        <p>High Technology</p>
        (첨단기술)
      </div>
      <div>
        <img src="@/assets/sub/employ_communicate.svg" />
        <p>Communication Skill</p>
        (의사소통 능력)
      </div>
    </div>

    <div class="jobs">채용 - 추후 공지 예정</div>
  </section>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.employ_section {
  height: 80vh;
  margin: 5% 16%;

  .title {
    margin: 12px;
    font-size: 1.9rem;
    font-family: "Pretendard-Regular";
    font-weight: bold;
    text-align: center;
    margin-top: 12%;
    margin-bottom: 5%;
  }

  .talent {
    font-size: 1.25rem;
    font-family: "Pretendard-Regular";
    display: flex;
    margin: auto;
    justify-content: space-around;
    text-align: center;
  }
}
.jobs {
  display: block;
  text-align: center;
  height: 15vh;
  font-size: 1.9rem;
  font-family: "Pretendard-Regular";
  font-weight: bold;
  margin-top: 10%;
  margin-bottom: 5%;
}
</style>
