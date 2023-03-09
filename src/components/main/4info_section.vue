<template>
  <!-- 추가 정보 section-->
  <section class="info_section">
    <v-row>
      <v-col cols="12">
        <div data-scroll class="info_con">
          <img src="../../assets/info/info.png" class="info_img" alt="" />
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import ScrollOut from "scroll-out";

export default {
  mounted() {
    ScrollOut({
      cssProps: {
        visibleY: true,
      },

      onShown: function (el) {
        el.classList.add("animated");
      },

      onHidden: function (el) {
        el.classList.remove("animated");
      },
    });
  },
};
</script>

<style lang="scss" scoped>
[data-scroll] {
  transition: transform 100ms;
}

[data-scroll="in"] {
  --scale: calc(0.8 + (0.3 * var(--visible-y)));
  transform: scale(var(--scale));
  transform-origin: center center;
}
/* info_section */
.info_section {
  width: 100vw;
  height: 100vh;
}
.info_con {
  text-align: center;
}

.info_img {
  position: relative;
  width: 100vw;
  height: 100vh;
  transition: all 0.2s linear;
}
/* .info_img:hover {
  transform: scale(3);
} */
</style>
