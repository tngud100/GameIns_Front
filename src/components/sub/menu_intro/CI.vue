<template>
  <section class="ci_section">
    <div class="ci_con">
      <span class="ci_title">CI</span>
      <div class="ci_content">
        <p>
          게임인스의 CI는 IT 웹 개발 전문 기업으로서 전문성과 도전정신을
          표현하였습니다.
        </p>
        <br />
        <p>
          곡선과 직선을 결합해 부드러움과 힘 있게 뻗어나가는 로고 타입를 통해
          IT기업으로 성장하는 기업의 현재와 미래를 나타내었습니다.
        </p>
        <p>
          또한 틀에 박혀있지 않고, 자유로움과 힘 있는 이미지를 전달하는 Blue
          색상과 Black 색상을 통해
        </p>
        <p>힘 있게 뻗어나갈 수 있는 게임인스의 의지를 담았습니다.</p>
      </div>
      <img class="ci_logo" src="@/assets/sub/CI_logo.svg" />
    </div>
    <div class="color_system">
      <span class="system_title">COLOR SYSTEM</span>
      <div style="margin: 10px">
        <v-row>
          <v-col cols="6">
            <v-card class="gradient_card">
              <v-img class="image" height="200" cover :src="getImagePath(0)">
                <v-title class="card_title">GAMEINS Gradient</v-title>
              </v-img>
              <v-card-text class="card_text">
                <v-row>
                  <v-col cols="6">
                    <p>RGB Color : R54 G132 B245</p>
                    <p>HEX Color :3684F5</p>
                    <p>CMYK Color : C78 M46 Y0 K4</p>
                  </v-col>
                  <v-col cols="6">
                    <p>RGB Color : R1 G54 B158</p>
                    <p>HEX Color : 01369E</p>
                    <p>CMYK Color : C99 M66 Y0 K38</p>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card class="color_card">
              <v-img class="image" height="200" :src="getImagePath(1)">
                <v-card-title class="card_title">GAMEINS Blue</v-card-title>
              </v-img>
              <v-card-text class="card_text"
                ><p>RGB Color : R0 G83 B201</p>
                <p>HEX Color : 0053C9</p>
                <p>CMYK Color : C90 M68 Y0 K0</p></v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card class="color_card">
              <v-img class="image" height="200" :src="getImagePath(2)">
                <v-card-title class="card_title">GAMEINS Black</v-card-title>
              </v-img>
              <v-card-text class="card_text"
                ><p>RGB Color : R64 G64 B64</p>
                <p>HEX Color : 404040</p>
                <p>CMYK Color : C76 M71 Y68 K34</p></v-card-text
              >
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      srcs: ["CI_gradient.svg", "CI_blue.svg", "CI_black.svg"],
    };
  },
  methods: {
    getImagePath(index) {
      return require(`@/assets/sub/${this.srcs[index]}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.ci_section {
  height: 1200px;
  width: 100vw;

  .ci_con {
    margin: 5% 16% 0% 16%;
    padding: 12px;

    .ci_title {
      font-family: sans-serif;
      font-size: 3rem;
      font-weight: bold;
    }
    .ci_content {
      font-family: "Pretendard-Regular";
      font-size: 1.1rem;
      top: 30px;
      left: 3%;
      line-height: 30px;
      color: rgb(63, 57, 57);
      position: relative;
    }
    .ci_logo {
      border-style: none;
      position: relative;
      margin-top: 5%;
    }
  }

  .color_system {
    margin: 2% 16%;

    .system_title {
      font-family: "Pretendard-Regular";
      font-size: 1.4rem;
      font-weight: bold;
      color: #404040;
    }

    .gradient_card {
      height: 330px;
    }

    .color_card {
      height: 330px;
    }
  }
}

.card_title {
  font-family: sans-serif;
  font-size: 1.625rem;
  font-weight: bold;
  color: white;
  padding: 12px;
  bottom: 0;
  position: absolute;
}
.card_text {
  font-size: 1.125rem;
  font-family: sans-serif;
  color: #6b6b6b;
  line-height: 30px;
}
</style>
