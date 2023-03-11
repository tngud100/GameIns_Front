<template>
  <!-- 추가 정보 section-->

  <div class="portfo_con">
    <div class="portfo_con_gra"></div>
    <div class="portfo_item">
      <div class="portfo_item_img1"></div>
      <div class="portfo_item_img2"></div>
      <div class="portfo_item_img3"></div>
      <div class="portfo_item_img4">
        <div class="portfo_item_img4_btn">
          <h1>MORE +</h1>
        </div>
      </div>
    </div>
    <div class="portfo_con_back">
      <div>
        <div class="portfo_item_line"></div>
        <div class="portfo_con_back_center"></div>
        <h1 class="portfo_con_h">VIEW ALL PORTFOLIO</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      var portfo_item_img1 = document.querySelector(".portfo_item_img1");
      var portfo_item_img2 = document.querySelector(".portfo_item_img2");
      var portfo_item_img3 = document.querySelector(".portfo_item_img3");
      var portfo_item_img4 = document.querySelector(".portfo_item_img4");
      var portfo_item_line = document.querySelector(".portfo_item_line");
      let isScrolling = false;

      window.addEventListener("wheel", (e) => {


        const scrollHeight = window.scrollY;
        const desiredHeight = 2300;

        if (scrollHeight >= desiredHeight && !isScrolling) {
          e.preventDefault(); // 기본 스크롤 동작 막기
        }
        else if (scrollHeight < desiredHeight && isScrolling) {
          isScrolling = false;
        }

        if (portfo_item_img1.getBoundingClientRect().x == 20) {
          if (e.wheelDeltaY < 0) {
            portfo_item_img1.style.transform = `translateX(calc(-100% - 20px))`;
            portfo_item_img2.style.transform = `translateX(calc(-100% - 20px))`;
            portfo_item_img3.style.transform = `translateX(calc(-100% - 20px))`;
            portfo_item_img4.style.transform = `translateX(calc(-100% - 20px))`;
            portfo_item_line.style.transform = `translateX(calc(603.63px * 2))`;
          }
          else if (e.wheelDeltaY > 0) {
            window.scrollBy({ top: -1000, left: 0, behavior: "smooth" }); // 스크롤 이동
          }
        } else if (portfo_item_img2.getBoundingClientRect().x == 20) {
          if (e.wheelDeltaY < 0) {
            portfo_item_img1.style.transform = `translateX(calc(-200% - 40px))`;
            portfo_item_img2.style.transform = `translateX(calc(-200% - 40px))`;
            portfo_item_img3.style.transform = `translateX(calc(-200% - 40px))`;
            portfo_item_img4.style.transform = `translateX(calc(-200% - 40px))`;
            portfo_item_line.style.transform = `translateX(calc(603.63px))`;
          } else if (e.wheelDeltaY > 0) {
            portfo_item_img1.style.transform = `translateX(0px)`;
            portfo_item_img2.style.transform = `translateX(0px)`;
            portfo_item_img3.style.transform = `translateX(0px)`;
            portfo_item_img4.style.transform = `translateX(0px)`;
            portfo_item_line.style.transform = `translateX(calc(0px))`;
          }
        } else if (portfo_item_img3.getBoundingClientRect().x == 20) {
          if (e.wheelDeltaY < 0) {
            portfo_item_img1.style.transform = `translateX(calc(-300% - 60px))`;
            portfo_item_img2.style.transform = `translateX(calc(-300% - 60px))`;
            portfo_item_img3.style.transform = `translateX(calc(-300% - 60px))`;
            portfo_item_img4.style.transform = `translateX(calc(-300% - 60px))`;
            portfo_item_line.style.transform = `translateX(0px)`;
          } else if (e.wheelDeltaY > 0) {
            portfo_item_img1.style.transform = `translateX(calc(-100% - 20px))`;
            portfo_item_img2.style.transform = `translateX(calc(-100% - 20px))`;
            portfo_item_img3.style.transform = `translateX(calc(-100% - 20px))`;
            portfo_item_img4.style.transform = `translateX(calc(-100% - 20px))`;
            portfo_item_line.style.transform = `translateX(calc(603.63px * 2))`;
          }
        } else if (portfo_item_img4.getBoundingClientRect().x == 20) {
          if (e.wheelDeltaY > 0) {
            portfo_item_img1.style.transform = `translateX(calc(-200% - 40px))`;
            portfo_item_img2.style.transform = `translateX(calc(-200% - 40px))`;
            portfo_item_img3.style.transform = `translateX(calc(-200% - 40px))`;
            portfo_item_img4.style.transform = `translateX(calc(-200% - 40px))`;
            portfo_item_line.style.transform = `translateX(calc(603.63px ))`;
          } else if (e.wheelDeltaY < 0) {
            window.scrollBy({ top: 1000, left: 0, behavior: "smooth" }); // 스크롤 이동
          }
        }
        
        if (window.scrollY >= 3330 ){
          if (e.wheelDeltaY > 0) {
            window.scrollBy({ top: -1000, left: 0, behavior: "smooth" }); // 스크롤 이동
          }
        }

      }, { passive: false });
    });
  }
};
</script>

<style scoped>
.portfo_con {
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  position: relative;
  background: url("../../assets/intro/back.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.portfo_con_gra {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.portfo_item {
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  left: 0px;
  overflow: hidden;
  z-index: 30;
}

.portfo_item_img1 {
  width: 100vw;
  height: 100vh;
  background: url("../../assets/info/info.png");
  background-size: cover;
  margin-left: 20px;
  flex-shrink: 0;
  transition: all 1s;
}

.portfo_item_img2 {
  width: 100vw;
  height: 100vh;
  background: url("../../assets/info/info.png");

  background-size: cover;
  margin-left: 20px;
  flex-shrink: 0;
  transition: all 1s;
}

.portfo_item_img3 {
  width: 100vw;
  height: 100vh;
  background: url("../../assets/info/info.png");

  background-size: cover;
  margin-left: 20px;
  flex-shrink: 0;
  transition: all 1s;
}

.portfo_item_img4 {
  width: 100vw;
  height: 100vh;
  background: url("../../assets/info/info.png");

  background-size: cover;
  margin-left: 20px;
  flex-shrink: 0;
  transition: all 1s;
  position: relative;
}

.portfo_item_img4_btn {
  position: absolute;
  width: 160px;
  height: 60px;
  border-radius: 50px;
  border: 1px solid white;
  right: -200px;
  top: 40%;
  cursor: pointer;
}

.portfo_item_img4_btn h1 {
  margin: 0px;
  color: white;
  line-height: 60px;
  text-align: center;
}

.portfo_con_h {
  color: white;
  font-size: 60px;
  margin: 0px;
  margin-left: 20px;
  cursor: pointer;
  line-height: 50px;
}

.portfo_con_back {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: left;
  align-items: center;
  position: absolute;
  z-index: 5;
}

.portfo_con_back_center {
  width: 100%;
  height: 350px;
  padding: 1px;
}

.portfo_item_line {
  width: 400px;
  height: 6px;
  background: #3180f1;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  transition: all 1s;
}
</style>
