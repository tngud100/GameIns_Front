<template>
  <!-- 서비스 section -->
  <section class="service_section">
    <v-row>
      <div><span class="service_title">SERVICE</span></div>
    </v-row>
    <v-row style="height: 76%">
      <v-col
        cols="3"
        v-for="(item, index) of 3"
        :key="index"
        class="service_con"
      >
        <v-card class="service_card">
          <div class="service_con_hover">
            <div></div>
            <div>
              <span class="sub_title_hover">Web/App</span>
              <span class="sub_dec_hover">
                <p style="padding: 5px">
                  디테일한 퀄리티와 수준높은 IT기술력으로 최상의 결과물을 보여
                  드리겠습니다.
                </p>
              </span>
            </div>
            <div></div>
          </div>
          <v-img
            class="service_img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNi2bHAYvkw4GlUl_46IBqjBj555XHs9bMqYyI9l4DYROWsWq2G96wEgtjeECB5bPcfGE&usqp=CAU"
            cover
          >
          </v-img>

          <v-card-subtitle class="pt-4">Web/App</v-card-subtitle>

          <v-card-text>
            <div>
              디테일한 퀄리티와 수준높은 IT기술력으로 최상의 결과물을 이끌어
              보여드리겠습니다.
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import ScrollOut from "scroll-out";
export default {
  name: "service_section",
  setup() {},
  mounted() {
    ScrollOut({
      targets: ".service_con",
      onShown: function (el) {
        // use the web animation API
        el.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
      },
    });
    // this.$anime({
    //   targets: ".service_section",
    //   scale: [
    //     { value: 0.1, easing: "easeOutSine", duration: 500 },
    //     { value: 1, easing: "easeInOutQuad", duration: 1200 },
    //   ],
    //   delay: this.$anime.stagger(200, { grid: [1, 2], from: "center" }),
    // });
  },
};
</script>

<style scoped>
/* 서비스 */
.service_section {
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  background: white;
  height: 100vh;
}
.service_title {
  position: absolute;
  font-size: 3.5rem;
  padding-top: 4vh;
  padding-left: 26vw;
}
.service_card {
  height: 42vh;
  width: 15vw;
  box-shadow: 1px 1px 5px 0px;
}
.service_con {
  margin: 50px;
}

.service_con_hover {
  position: absolute;
  display: grid;
  height: 100%;
  width: 100%;
  z-index: 5;
  text-align: center;
  align-items: center;
  color: white;
  opacity: 0;
}
.sub_title_hover {
  font-size: 1.5rem;
  padding: 30px;
  display: block;
}
.sub_dec_hover {
  font-size: 1rem;
  display: block;
  padding: 12px;
}
.service_con_hover:hover {
  transition: 0.3s ease-in;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
}
.service_con_hover:not(:hover) {
  transition: 0.3s ease-out;
  opacity: 0;
}
</style>
