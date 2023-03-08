<template>
  <!-- 추가 정보 section-->
  <section class="info_section">
    <v-row style="height: 30vh"> </v-row>
    <v-row>
      <v-col cols="12">
        <div class="info_con">
          <img src="../../assets/info/info.png" class="info_img" alt="" />
        </div>
      </v-col>
    </v-row>
    <v-row style="height: 30vh"> </v-row>
  </section>
</template>

<script>
export default {};
</script>

<style>
/* info_section */
.info_section {
  width: 100vw;
  height: 100vh;
}
.info_con {
  text-align: center;
  margin: 0 10vw 0 10vw;
}
.info_img {
  position: relative;
  width: 50vw;
  height: 40vh;
}
</style>
