<template>
  <!-- 서비스 section -->
  <section class="service_section">
    <div class="gab"></div>
    <v-row>
      <div><span class="service_title">SERVICE</span></div>
    </v-row>
    <v-row style="height: 76%">
      <v-col
        cols="3"
        v-for="(card, index) of CardText"
        :key="index"
        class="service_con"
      >
        <v-card class="service_card">
          <div class="service_con_hover">
            <div></div>
            <div>
              <span class="sub_title_hover">{{ card.title }}</span>
              <span class="sub_dec_hover">
                <p style="padding: 5px">{{ card.text }}</p>
              </span>
            </div>
            <div></div>
          </div>
          <v-img :src="card.src" cover> </v-img>

          <v-card-subtitle class="pt-4">{{ card.title }}</v-card-subtitle>

          <v-card-text>
            <div>{{ card.text }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import ScrollOut from "scroll-out";
// import { onMounted } from "vue";

export default {
  name: "service_section",
  data() {
    return {
      CardText: [
        {
          title: "Web/App",
          text: "수차례의 미팅을 통해 제작한 기획서를 바탕으로 개인/기업의 웹/앱 제작",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNi2bHAYvkw4GlUl_46IBqjBj555XHs9bMqYyI9l4DYROWsWq2G96wEgtjeECB5bPcfGE&usqp=CAU",
        },
        {
          title: "Community",
          text: "10만명이 넘는 5명의 대형 크리에이터와 협업중인 16000명이 넘는 회원수를 소유",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNi2bHAYvkw4GlUl_46IBqjBj555XHs9bMqYyI9l4DYROWsWq2G96wEgtjeECB5bPcfGE&usqp=CAU",
        },
        {
          title: "Advertisement",
          text: "다양한 분야로 넓은 스펙트럼을 가진 광고 수익 브랜드 입점 및 제품 판매, 영상 제작 및 혹보, 애드센스, 배너 등",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNi2bHAYvkw4GlUl_46IBqjBj555XHs9bMqYyI9l4DYROWsWq2G96wEgtjeECB5bPcfGE&usqp=CAU",
        },
      ],
    };
  },
  mounted() {
    ScrollOut({
      targets: ".service_con",
      onShown: function (el) {
        // use the web animation API
        el.animate(
          [
            { opacity: 0, transform: "translateY(20%)" },
            { opacity: 1, transform: "translateY(0%)" },
          ],
          1000
        );
      },
    });
  },
};
</script>
<style>
.v-card-subtitle {
  font-family: sans-serif;
  font-size: 1rem;
}
.v-card-text {
  font-family: "Pretendard";
  font-size: 0.8rem;
}
</style>
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
  padding-top: 4vh;
  padding-left: 26.5vw;
  font-size: 3.5rem;
  font-family: sans-serif;
}
.service_card {
  height: 42vh;
  width: 15vw;
  box-shadow: 1px 1px 5px 0px;
}
.service_con {
  margin: 2.7vw;
}

.gab {
  position: absolute;
  background-color: whitesmoke;
  width: 100vw;
  height: 64vh;
  top: 0;
}
/* 카드 hover */
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
  font-family: sans-serif;
}
.sub_dec_hover {
  font-size: 0.8rem;
  display: block;
  padding: 30px;
  font-family: "Pretendard";
}
.service_con_hover:hover {
  transition: 0.3s ease-in;
  transform: scale(1.1);
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
}
.service_con_hover:not(:hover) {
  transition: 0.3s ease-out;
  opacity: 0;
}
</style>
