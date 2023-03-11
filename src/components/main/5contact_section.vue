<template>
  <!-- 콘텍트 section -->
  <section class="contact_section">
    <v-row> Support</v-row>
    <v-row class="contact_text">
      <v-col cols="3" class="text_con"
        ><span class="text_fst tx">TEL</span></v-col
      >
      <v-col cols="3" class="text_con"
        ><span class="text_snd tx">MAIL</span></v-col
      >
      <v-col cols="3" class="text_con"
        ><span class="text_trd tx">LOCATION</span></v-col
      >
      <v-col cols="3" class="text_con"
        ><span class="text_frth tx">CONTACT</span></v-col
      >
    </v-row>
  </section>
</template>

<script>
export default {};
</script>

<style>
.contact_section {
  position: relative;
  height: 75vh;
  background-image: url("../../assets/footer/contact.jpg");
}
.text_con {
  flex: 0 0 25%;
  height: 72vh;
  max-width: 25%;
  border-left: 1px solid #9f9f9f57;
  border-right: 1px solid #9f9f9f57;
}
.contact_text {
  color: white;
  font-size: 1.5rem;
  margin: 20%;
  text-align: center;
}
.tx {
  position: relative;
  top: 30%;
}
</style>
