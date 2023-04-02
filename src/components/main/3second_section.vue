<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(text, index) in texts" :key="index">
        <div data-scroll class="slide-content">
          <div style="
                display: grid;
                text-align: center;
                justify-items: center;
                margin-bottom: 5%;
              ">
            <span :class="'swiper-title' + index" data-scroll style="margin-bottom: 10%">{{ text.title }}</span>
            <p :class="'swiper-dec' + index" data-scroll>
              {{ text.comment }}
            </p>
            <p :class="'swiper-dec' + index" data-scroll>{{ text.comment1 }}</p>
            <p :class="'swiper-dec' + index" data-scroll>{{ text.comment2 }}</p>
            <p :class="'swiper-dec' + index" data-scroll>{{ text.comment3 }}</p>
          </div>
          <!-- <div class="swipe_btn">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import SwiperCore, { Mousewheel, Navigation } from "swiper";
import "swiper/swiper-bundle.css";

import ScrollOut from "scroll-out";

SwiperCore.use([Mousewheel, Navigation]);

export default {
  setup() {
    const swiperRef = ref(null);
    const texts = ref([
      {
        title: "OVERVIEW",
        comment: "Develop the present.",
        comment2: " ",
        comment3: "",
      },
      {
        title: "VISION",
        comment: "",
        comment1: "고고객의 편안하고 긍정적인 경험을 위해, 보다 더 나은 기술을",
        comment2:
          "개발하고 빠르고 간편하게 고객과 비즈니스가 닿을 수 있도록노력하겠습니다.",
        comment3: "",
      },
    ]);
    onMounted(() => {
      ScrollOut({
        cssProps: {
          visibleY: true,
        },
        threshold: 0.2,
        offset: 1,
      });

      swiperRef.value = new SwiperCore(".swiper-container", {
        direction: "horizontal",
        loop: false,
        mousewheel: true,
        slidesPerView: 1.15,
        speed: 1000,
        autoplay: {
          delay: 3000,
        },

        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
      });

      const swiperContainer = document.querySelector(".swiper-container");
      swiperContainer.addEventListener(
        "wheel",
        function (e) {

          if (e.deltaY < 0) {
            e.preventDefault();
            window.scrollTo({
              top: -window.innerHeight,
              behavior: "smooth",
            });
          }

          if (e.deltaY > 0) {
            e.preventDefault();
            window.scrollTo({
              top: window.innerHeight + window.scrollY,
              behavior: "smooth",
            });
          }
        },
        { passive: false }
      );
    });

    return {
      swiperRef,
      texts,
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  margin-top: 100vh;
  height: 100vh;
  transition: all 1s;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #000000;
  background-color: #ffffff;
  transition: all 1s;
  width: 87vw !important;
}

.slide-content {
  text-align: center;
}

.swiper-title0 {
  font-size: 1.25rem;
  font-family: "sans-serif";
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 2s ease-out, transform 1s ease-out;
  box-shadow: #61a8f9 0px 2px 0px 0px;
}

.swiper-title1 {
  font-size: 1.25rem;
  font-family: "sans-serif";
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 2s ease-out, transform 1s ease-out;
  box-shadow: #61a8f9 0px 2px 0px 0px;
}

.swiper-dec0 {
  font-size: 5rem;
  font-family: "sans-serif";
  font-weight: bold;
  opacity: 1;
  transform: translateY(20px);
  transition: opacity 5s ease-out, transform 1s ease-out;
  transform: translateX(12vw);
}

.swiper-dec1 {
  font-size: 1.625rem;
  font-family: "Pretendard-Regular";
  font-weight: bold;
  opacity: 1;
  transform: translateY(20px);
  transition: opacity 5s ease-out, transform 1s ease-out;
  width: 1100px !important;
  transform: translateX(-28vw);
}

.swiper-slide-active .swiper-title0 {
  transform: translate3d(140px, 5px, 0px);
  opacity: 1;
}

.swiper-slide-active .swiper-title1 {
  transform: translate3d(-100px, 20px, 0px);
  opacity: 1;
}

.swiper-slide-active .swiper-dec0 {
  transform: translate3d(150px, -30px, 0px);
}

.swiper-slide-active .swiper-dec1 {
  transform: translate3d(-100px, -30px, 10px);
}
</style>
