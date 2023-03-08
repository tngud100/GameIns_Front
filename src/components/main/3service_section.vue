<template>
  <!-- 서비스 section -->
  <section class="service_section">
    <v-row class="white_space">SERVICE</v-row>
    <v-row class="service_content">
      <v-col cols="8" class="service_card">
        <v-card v-for="(item, index) in 3" :key="index" class="mx-auto">
          <v-img
            class="align-end text-white"
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
      </v-col>
    </v-row>
    <v-row class="white_space"> </v-row>
  </section>
</template>

<script>
export default {
  name: "service_section",
  mounted() {
    this.$anime({
      targets: ".service_section",
      scale: [
        { value: 0.1, easing: "easeOutSine", duration: 500 },
        { value: 1, easing: "easeInOutQuad", duration: 1200 },
      ],
      delay: this.$anime.stagger(200, { grid: [1, 2], from: "center" }),
    });
  },
};
</script>

<style>
/* 서비스 */
.service_section {
  position: relative;
  justify-content: center;
  height: 100vh;
}
.white_space {
  font-size: 5rem;
  place-content: center;
  height: 40vh;
}
.service_content {
  justify-content: center;
  height: 40vh;
  display: flex;
}
.service_card {
  display: flex;
}
</style>
