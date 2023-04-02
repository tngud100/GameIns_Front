<template>
  <section class="value_section">
    <div class="filter"></div>
    <div class="value_text">
      <span style="
            font-size: 3rem;
            line-height: 70px;
            font-family: sans-serif;
            font-weight: bold;
          ">Core Value</span>
      <span style="font-size: 1.25rem; font-family: 'Pretendard-Regular'">게임인스는 이렇게 생각합니다</span>
    </div>
    <div class="circle_con">
      <img class="line" src="@/assets/sub/value_line.svg" />
      <div class="center">
        <div class="circle">
          <span class="keyword_icon"></span>
          <span class="keyword">소통/협업</span>
        </div>
        <div class="circle">
          <span class="keyword_icon"></span>
          <span class="keyword">혁신</span>
        </div>
        <div class="circle">
          <span class="keyword_icon"></span>
          <span class="keyword">사회공헌</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.value_section {
  width: 100vw;
  height: 520px;
  background-image: url("@/assets/sub/value_back.svg");
  background-attachment: fixed;
  background-size: cover;

  .value_text {
    display: grid;
    color: white;
    left: 18%;
    top: 13%;
    line-height: 70px;
    position: relative;
  }

  .circle_con {
    width: 100vw;
    position: relative;
    margin: auto;
    display: flex;

    .line {
      position: absolute;
      margin-top: 7%;
      width: 100%;
      left: 0;
      z-index: 1;
    }

    .center {
      width: 43%;
      margin: auto;
      position: relative;
      display: flex;
      justify-content: space-between;

    }

    .circle {
      width: 230px;
      height: 230px;
      border-radius: 100%;
      box-shadow: 0px 0px 0px 1px white;
      display: flex;
      align-items: center;
      justify-content: center;

      .keyword {
        margin-top: 50px;
        font-size: 1.1rem;
        font-family: "Pretendard-Regular";
        color: white;
      }

      .keyword_icon {
        background-color: grey;
        border-radius: 100%;
        position: absolute;
        top: 26%;
        width: 45px;
        height: 45px;
      }
    }
  }
}

.filter {
  width: 100%;
  height: 520px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
