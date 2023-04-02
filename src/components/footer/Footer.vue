<template>
  <!-- 풋터 -->
  <div class="footer">
    <v-row class="footer_con">
      <v-col cols="9">
        <div class="logo_con">
          <img
            src="../../assets/logo/scrollblogo.svg"
            alt=""
            style="cursor: pointer; width: 150px; height: 36px"
          />

          <!-- <img
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
          /> -->
        </div>
        <div class="footer_info">
          <p>부산광역시 사상구 백양대로684 5F</p>
          <p>
            TEL 051-301-5908 | FAX 3030-3448-0523 | E-mail:
            gameinscokr@naver.com
          </p>
          <p>
            (주)게임인스 | 대표이사: 김웅겸 | 사업자등록번호: 362-88-00435 |
            통신판매업 등록번호: 1649-3196-3663-0809
          </p>
          <br /><br />
          <p>copyright 2022 GAMEINS All right reserved</p>
        </div>
      </v-col>
      <v-spacer />
      <v-col cols="3">
        <div class="contact_btn">
          <div class="btn">
            <span>BLOG</span>
            <v-spacer />
            <v-col class="logo" cols="2">
              <img src="./../../assets/footer/naverblog.svg" />
            </v-col>
          </div>
          <div class="btn">
            <span>INSTAGRAM</span>
            <v-spacer />
            <v-col class="logo" cols="2">
              <img src="./../../assets/footer/instalogo.svg" />
            </v-col>
          </div>
          <div class="btn">문의& 의뢰 <img /></div>
          <div class="btn">
            <span>인증기업</span>
            <v-spacer />
            <v-col class="logo" cols="2">
              <img src="./../../assets/footer/certificatelogo.svg" />
            </v-col>
          </div>
          <div class="btn">개인정보처리방침 <img /></div>
          <div class="btn">오시는길 <img /></div>
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

<style lang="scss" scoped>
/* 풋터 */

.footer {
  position: relative;
  width: 100vw;
  height: 300px;
  background: white;
  padding: 0% 16%;
  box-shadow: 0px 0px 1px 0px grey;
}

.footer_con {
  width: 1300px;
  display: flex;
  justify-content: center;
  padding-top: 1%;
}

.logo_con {
  margin-bottom: 8%;
}
.footer_info {
  color: rgb(0, 0, 0);
  font-family: "Pretendard-Regular";
  font-size: 0.9rem;
  margin-top: 12px;
}
.contact_btn {
  text-align: -webkit-right;
}
.btn {
  font-size: 0.9rem;
  width: 160px;
  height: 36px;
  display: flex;
  box-shadow: 0px 0px 1px 0.5px #847a7a;
  text-align: center;
  align-items: center;
  padding: 12px;
  margin: 6px;
}
.flex-grow-1 {
  flex-grow: 0.9 !important;
}
</style>
