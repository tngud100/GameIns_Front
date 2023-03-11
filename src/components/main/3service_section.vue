<template>
  <!-- 서비스 section -->
  <section class="service_section">
    <v-row class="white_space">
      <v-col cols="3"> SERVICE </v-col>
    </v-row>
    <span class="service_word">SERVICE</span>
    <v-row class="service_content">
      <v-col cols="8">
        <div class="service_card">
          <v-card v-for="(item, index) in 3" :key="index" class="mx-auto">
            <v-img
              class="text-white"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4"> Number 10 </v-card-subtitle>

            <v-card-text>
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>

    <v-row class="white_space"> </v-row>
  </section>
</template>

<script>
export default {
  name: "service_section",
  setup() {},
  mounted() {
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
/*  */
.service_word {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: -100px;
  font-size: 12rem;
  color: #f6f6f6;
  left: 21%;
  z-index: -1000;
}
/* 서비스 */
.service_section {
  position: relative;
  justify-content: center;
  background: white;
  height: 100vh;
}
.white_space {
  font-size: 3rem;
  padding-top: 4%;
  text-align: right;
  height: 20vh;
}
.service_content {
  justify-content: center;
  height: 50vh;
  margin-top: 4%;
  display: flex;
}
.service_card {
  display: flex;
  height: 45vh;
}
.mx-auto {
  box-shadow: -2px -2px 12px -4px;
}
</style>
