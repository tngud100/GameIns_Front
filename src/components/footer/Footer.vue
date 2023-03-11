<template>
  <!-- 풋터 -->
  <div class="footer">
    <v-row class="footer_con">
      <v-col cols="12" style="width: 60vw">
        <div class="logo_con">
          <img
            src="../../assets/footer/bottomlogo.png"
            alt=""
            style="cursor: pointer"
          />

          <img
            src="../../assets/footer/blue.svg"
            alt=""
            style="margin-left: 30px; width: 30px; height: 30px"
          />
          <img
            src="../../assets/footer/camera.svg"
            alt=""
            style="
              margin-left: 20px;
              width: 30px;
              height: 30px;
              cursor: pointer;
            "
            class="footer_camera"
          />
          <img
            src="../../assets/footer/blog1.svg"
            alt=""
            style="
              margin-left: 20px;
              width: 30px;
              height: 30px;
              cursor: pointer;
            "
            class="footer_blog"
          />
        </div>
        <hr />
        <div class="footer_info">
          <p>
            (주)게임인스 | 대표이사 : 김웅겸 | 통신판매업 등록번호 :
            1649-3196-3663-0809 | 사업자등록번호 : 362-88-00435 |
            개인정보처리방침
          </p>
          <p>
            주소:부산광역시 사상구 백양대로684 5F | E-mail :
            gameinscokr@naver.com
          </p>
          Copyright 2022 GAMEINS All right reserved
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
//   import { onMounted, reactive } from "vue";

export default {
  name: "Footer",
  // setup() {
  //   const state = reactive({
  //     count: 0,
  //   });
  //   onMounted(() => {
  //     var bottom_nav = document.querySelector(".bottom_nav");
  //     function footer_fun(params) {
  //       if (max_600px.matches) {
  //         bottom_nav.style.display = "none";
  //       }
  //       if (min_600px_max_1000px.matches) {
  //         bottom_nav.style.display = "none";
  //       }
  //       if (min_1000px.matches) {
  //         bottom_nav.style.display = "flex";
  //       }
  //     }
  //     footer_fun();
  //   });
  //   return {
  //     state,
  //   };
  // },
};
</script>

<style scoped>
/* 풋터 */

.footer {
  position: relative;
  bottom: 0;
  width: 100%;
  height: 25vh;
  background: #000000;
  padding: 12px;
}

.footer_con {
  width: 100%;
  height: auto;
  display: inline-grid;
  justify-content: center;
  padding: 12px;
}

.logo_con {
  margin-bottom: 20px;
}
.footer_info {
  color: white;
  font-size: 14.4px;
  margin-top: 12px;
}
</style>
