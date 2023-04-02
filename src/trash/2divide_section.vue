<template>
  <!-- 단락 나누는 코멘트 -->

  <section class="divide_section">
    <div class="back_img">
      <div class="divide_ment">
        <div class="filter_black"></div>
        <div class="coment"></div>
      </div>
    </div>
    <div class="blur_con">
      <!-- <v-row>
        <v-col cols="2.5">
          <div
            class="blur_box2"
            style="
              background-image: url('https://media.altphotos.com/cache/images/2017/02/28/09/752/workplace-web-notebook.jpg');
            "
          ></div>
        </v-col>
        <v-col cols="2.5">
          <div
            class="blur_box2"
            style="
              background-image: url('https://media.altphotos.com/cache/images/2017/03/10/00/752/aerial-skyscrapers-chicago.jpg');
            "
          ></div>
        </v-col>
        <v-col cols="2.5">
          <div
            class="blur_box1"
            style="
              background-image: url('https://media.altphotos.com/cache/images/2017/03/02/06/x240/buildings-curved-architecture.jpg');
            "
          ></div>
        </v-col>
        <v-col cols="2.5">
          <div
            class="blur_box2"
            style="
              background-image: url('https://media.altphotos.com/cache/images/2017/02/23/10/x240/suit-coffee-table.jpg');
            "
          ></div>
        </v-col>
        <v-col cols="2.5">
          <div
            class="blur_box2"
            style="
              background-image: url('https://media.altphotos.com/cache/images/2017/03/01/17/x240/workspace-office-startup.jpg');
            "
          ></div>
        </v-col>
      </v-row> -->
    </div>
  </section>
</template>

<script>
import TypeIt from "typeit";
// import { onMounted } from "vue";
// import { Carousel, Slide } from "vue-carousel";

export default {
  neme: "divide_section",
  methods: {
    previousSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    nextSlide() {
      if (this.currentIndex < this.slides.length - 1) {
        this.currentIndex++;
      }
    },
  },
  components: {
    // Carousel,
    // Slide,
  },
  data() {
    return {
      images: [
        { src: "./slideimg2.png", alt: "image1", url: "" },
        { src: "./slideimg2.png", alt: "image2" },
        { src: "./slideimg2.png", alt: "image3" },
      ],
      speed: 100,
      loop: false,
      threshold: 969,
      slides: [
        "https://media.altphotos.com/cache/images/2017/02/28/09/752/workplace-web-notebook.jpg",
        "https://media.altphotos.com/cache/images/2017/03/10/00/752/aerial-skyscrapers-chicago.jpg",
        "https://media.altphotos.com/cache/images/2017/03/02/06/x240/buildings-curved-architecture.jpg",
        "https://media.altphotos.com/cache/images/2017/02/23/10/x240/suit-coffee-table.jpg",
        "https://media.altphotos.com/cache/images/2017/03/01/17/x240/workspace-office-startup.jpg",
      ],
      currentIndex: 0,
      slideWidth: 800,
    };
  },
  setup() {},
  mounted() {
    new TypeIt(".coment", {
      strings: this.strings,
      loop: this.loop,
      speed: this.speed,
    })
      .type(
        "<p class='ment1' style='padding: 5px'>고객의 편안하고 긍정적인 경험을 위해,</p>"
      )
      .type("보다 더 나은 기술을 개발하여 빠르고 간편하게")
      .pause(300)
      .delete(12)
      .type("고객과 비즈니스가 닿을 수 있도록")
      .type("<p class='ment3' style='padding: 5px'>노력하겠습니다.</p>")
      .type("전문 기업")
      .move(null, { to: "END" })
      .break({ delay: 1000 })
      .go();
  },
};
</script>

<style>
.slider-container {
  width: 100%;
  overflow: hidden;
}

.slider {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.slide {
  width: 100%;
  height: auto;
}

.controls {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
/* 중간 코멘트 */
.back_img {
  background-image: url("https://media.altphotos.com/cache/images/2017/02/27/16/752/keyboard-coffee-notebook.jpg");
  background-size: cover;
  position: relative;
  width: 100%;
  height: 70vh;
  margin-top: 70vh;
  object-fit: fill;
  background-attachment: fixed;
}
.filter_black {
  position: absolute;
  width: 100vw;
  height: 70vh;
  background-color: rgba(0, 0, 0, 0.2);
}
.coment {
  z-index: 10;
}
.blur_con {
  width: 100vw;
  width: 100vw;
  transform: translateY(-20%);
  position: absolute;
  margin-top: -27vh;
}
.blur_box1 {
  width: 100%;
  height: 26vh;
  background-color: rgba(255, 255, 255, 0.5);
}
.blur_box2 {
  width: 100%;
  height: 25vh;
  filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
}

.divide_ment {
  z-index: 0;
  padding: 7vh;
  color: rgb(255, 255, 255);

  position: relative;
  display: inline-grid;
  width: 100vw;
  justify-content: center;
  text-align: center;
}
</style>
