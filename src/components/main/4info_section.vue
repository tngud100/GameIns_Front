<template>
  <!-- 추가 정보 section-->
  <div class="slider-container" ref="sliderContainer">
    <div class="slider-wrapper" ref="sliderWrapper">
      <div class="slider-item" v-for="(info, index) in infos" :key="index">
        <img :src="info.img" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import ScrollOut from "scroll-out";

export default {
  data() {
    return {
      infos: [
        {
          img: require("../../assets/info/info.png"),
        },
        {
          img: require("../../assets/info/info.png"),
        },
        {
          img: require("../../assets/info/info.png"),
        },
      ],
      currentIndex: 0,
      sliderWidth: 0,
      sliderItemWidth: 0,
      sliderWrapperWidth: 0,
    };
  },
  mounted() {
    ScrollOut({
      onShown: () => {
        this.sliderWidth = this.$refs.sliderContainer.offsetWidth;
        this.sliderItemWidth = this.$refs.sliderWrapper.children[0].offsetWidth;
        this.sliderWrapperWidth = this.$refs.sliderWrapper.offsetWidth;
      },
      onScroll: (el, { y }) => {
        if (y < 0 && this.currentIndex < this.infos.length - 1) {
          this.currentIndex++;
        } else if (y > 0 && this.currentIndex > 0) {
          this.currentIndex--;
        }
        const newPosition = -this.currentIndex * this.sliderItemWidth;
        this.$refs.sliderWrapper.style.transform = `translateX(${newPosition}px)`;
      },
    });
  },
};
</script>

<style scoped>
/* // [data-scroll] {
//   transition: scale opacity 1000ms;
// }

// .info_con[data-scroll="in"] {
//   opacity: 1;
//   transform-origin: right center;
// }
// .info_con[data-scroll="out"] {
//   opacity: 0;
// } */
/* info_section */
.slider-container {
  width: 100%;
  height: 100vh;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
}

.slider-wrapper {
  display: flex;
  transition: transform 0.5s ease-out;
}

.slider-item {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  text-align: center;
}

.slider-item img {
  width: 100vw;
  height: 100vh;
}
/* .info_img:hover {
  transform: scale(3);
} */
</style>
