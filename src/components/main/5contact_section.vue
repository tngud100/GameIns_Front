<template>
  <!-- 콘텍트 section -->
  <section class="contact_section">
    <v-row
      ><div class="support">
        <img
          src="../../assets/logo/glogo.svg"
          style="justify-self: center; height: 75px"
        />
        <span style="color: white; font-size: 3rem">SUPPORT</span>
      </div>
    </v-row>
    <v-row class="contact_text">
      <v-col cols="3" class="text_con">
        <div class="icon_block">
          <span class="text_fst tx">
            <p style="height: 10vh; font-size: 1.5rem">
              <v-icon class="icon">mdi mdi-phone-in-talk </v-icon>
            </p>
            <p style="margin: 12px; font-size: 1.5rem">TEL</p>
            <p style="margin: 12px; font-size: 1rem; color: grey">TEL</p>
          </span>
        </div>
      </v-col>
      <v-col cols="3" class="text_con">
        <div class="icon_block">
          <span class="text_fst tx">
            <p style="height: 10vh; font-size: 1.5rem">
              <v-icon class="icon">mdi mdi-email-outline</v-icon>
            </p>
            <p style="margin: 12px; font-size: 1.5rem">MAIL</p>
            <p style="margin: 12px; font-size: 1rem; color: grey">MAIL</p>
          </span>
        </div>
      </v-col>
      <v-col cols="3" class="text_con">
        <div class="icon_block">
          <span class="text_fst tx">
            <p style="height: 10vh; font-size: 1.5rem">
              <v-icon class="icon">mdi mdi-human-greeting-proximity </v-icon>
            </p>
            <p style="margin: 12px; font-size: 1.5rem">CONTACT</p>
            <p style="margin: 12px; font-size: 1rem; color: grey">CONTACT</p>
          </span>
        </div>
      </v-col>
      <v-col cols="3" class="text_con">
        <div class="icon_block">
          <span class="text_fst tx">
            <p style="height: 10vh; font-size: 1.5rem">
              <v-icon class="icon">mdi mdi-map-marker-multiple</v-icon>
            </p>
            <p style="margin: 12px; font-size: 1.5rem">LOCATION</p>
            <p style="margin: 12px; font-size: 1rem; color: grey">LOCATION</p>
          </span>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "contact_section",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.contact_section {
  position: relative;
  height: 75vh;
  background-color: white;
  background-image: url("../../assets/footer/contact.jpg");
}

.text_con {
  flex: 0 0 24.5%;
  height: 73vh;
  margin-top: 2vh;
  max-width: 25%;
  border-left: 1px solid #9f9f9f57;
  border-right: 1px solid #9f9f9f57;
}
.contact_text {
  color: rgb(255, 255, 255);
  margin: 0% 20%;
  text-align: center;
}
.tx {
  position: relative;
  top: 5vh;
}
.support {
  position: absolute;
  width: 100%;
  display: grid;
  text-align: center;
  top: 18%;
}
.icon_block {
  position: relative;
  top: 55%;
}
.icon {
  width: 30%;
  height: 75%;
  background-color: rgba(250, 250, 250, 0.2);
  border-radius: 100%;
}
</style>
