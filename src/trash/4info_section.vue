<template>
  <!-- 추가 정보 section-->

  <div class="portfo_con">
    <!-- <div class="portfo_con_gra"></div> -->
    <div class="portfo_item">
      <div data-scroll class="portfo_item_img1"></div>
      <div class="portfo_item_img2"></div>
      <div class="portfo_item_img3"></div>
      <div class="portfo_item_img4"></div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import ScrollOut from "scroll-out";
export default {
  mounted() {
    ScrollOut({
      cssProps: {
        viewportY: true,
        visibleY: true,
      },
      threshold: 0.9,
      // onShown: function (el) {
      // use the web animation API
      // el.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
      // },
      // onScroll: (el, progress) => {
      //   const scale = progress;
      //   el.style.transform = `scale(${scale})`;
      // },
      // onHidden: function (el) {
      //   el.style.opacity = 0;
      // },
    });
  },
  setup() {
    onMounted(() => {
      var portfo_item_img1 = document.querySelector(".portfo_item_img1");
      var portfo_item_img2 = document.querySelector(".portfo_item_img2");
      var portfo_item_img3 = document.querySelector(".portfo_item_img3");
      var portfo_item_img4 = document.querySelector(".portfo_item_img4");
      // let isScrolling = false;
      window.addEventListener(
        "wheel",
        (e) => {
          // const scrollHeight = window.scrollY;
          // const desiredHeight = 2300;
          // if (scrollHeight >= desiredHeight && !isScrolling) {
          //   e.preventDefault(); // 기본 스크롤 동작 막기
          // } else if (scrollHeight < desiredHeight && isScrolling) {
          //   isScrolling = false;
          // }
          if (portfo_item_img1.getBoundingClientRect().width < 760) {
            portfo_item_img1.style.scale = 1;
            if (e.wheelDeltaY < 0) {
              portfo_item_img1.style.transform = `translateX(calc(-100% - 20px))`;
              portfo_item_img2.style.transform = `translateX(calc(-100% - 20px))`;
              portfo_item_img3.style.transform = `translateX(calc(-100% - 20px))`;
              portfo_item_img4.style.transform = `translateX(calc(-100% - 20px))`;
            } else if (e.wheelDeltaY > 0) {
              window.scrollBy({ top: -1000, left: 0, behavior: "smooth" }); // 스크롤 이동
            }
          } else if (portfo_item_img2.getBoundingClientRect().x == 20) {
            if (e.wheelDeltaY < 0) {
              portfo_item_img1.style.transform = `translateX(calc(-200% - 40px))`;
              portfo_item_img2.style.transform = `translateX(calc(-200% - 40px))`;
              portfo_item_img3.style.transform = `translateX(calc(-200% - 40px))`;
              portfo_item_img4.style.transform = `translateX(calc(-200% - 40px))`;
            } else if (e.wheelDeltaY > 0) {
              portfo_item_img1.style.transform = `translateX(0px)`;
              portfo_item_img2.style.transform = `translateX(0px)`;
              portfo_item_img3.style.transform = `translateX(0px)`;
              portfo_item_img4.style.transform = `translateX(0px)`;
            }
          } else if (portfo_item_img3.getBoundingClientRect().x == 20) {
            if (e.wheelDeltaY < 0) {
              portfo_item_img1.style.transform = `translateX(calc(-300% - 60px))`;
              portfo_item_img2.style.transform = `translateX(calc(-300% - 60px))`;
              portfo_item_img3.style.transform = `translateX(calc(-300% - 60px))`;
              portfo_item_img4.style.transform = `translateX(calc(-300% - 60px))`;
            } else if (e.wheelDeltaY > 0) {
              portfo_item_img1.style.transform = `translateX(calc(-100% - 20px))`;
              portfo_item_img2.style.transform = `translateX(calc(-100% - 20px))`;
              portfo_item_img3.style.transform = `translateX(calc(-100% - 20px))`;
              portfo_item_img4.style.transform = `translateX(calc(-100% - 20px))`;
            }
          } else if (portfo_item_img4.getBoundingClientRect().x == 20) {
            if (e.wheelDeltaY > 0) {
              portfo_item_img1.style.transform = `translateX(calc(-200% - 40px))`;
              portfo_item_img2.style.transform = `translateX(calc(-200% - 40px))`;
              portfo_item_img3.style.transform = `translateX(calc(-200% - 40px))`;
              portfo_item_img4.style.transform = `translateX(calc(-200% - 40px))`;
            } else if (e.wheelDeltaY < 0) {
              window.scrollBy({ top: 1000, left: 0, behavior: "smooth" }); // 스크롤 이동
            }
          }
          if (window.scrollY >= 3330) {
            if (e.wheelDeltaY > 0) {
              window.scrollBy({ top: -1000, left: 0, behavior: "smooth" }); // 스크롤 이동
            }
          }
        },
        { passive: false }
      );
    });
  },
};
</script>

<style scoped>
.portfo_con {
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  position: relative;
  background-color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.portfo_item {
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  overflow: hidden;
  z-index: 30;
  align-items: center;
}

/* [data-scroll] {
  transition: scale 1s;
}
.portfo_item_img1[data-scroll="in"] {
  scale: calc(1 - var(--visiable-y));
}
.portfo_item_img1[data-scroll="out"] {
  scale: 1;
} */

.portfo_item_img1 {
  width: 100%;
  height: 100%;
  background: url("../../assets/info/info.png");
  background-size: cover;
  flex-shrink: 0;
  scale: 0.4;
}

.portfo_item_img2 {
  width: 100vw;
  height: 100vh;
  background: url("../../assets/info/info.png");

  background-size: cover;
  flex-shrink: 0;
  transition: all 1s;
}

.portfo_item_img3 {
  width: 100vw;
  height: 100vh;
  background: url("../../assets/info/info.png");

  background-size: cover;
  flex-shrink: 0;
  transition: all 1s;
}

.portfo_item_img4 {
  width: 100vw;
  height: 100vh;
  background: url("../../assets/info/info.png");

  background-size: cover;
  flex-shrink: 0;
  transition: all 1s;
  position: relative;
}
</style>
