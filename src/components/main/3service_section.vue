<template>
  <section class="service_section">
    <div class="service_bg">
      <v-row>
        <div class="service_text">
          <span class="service_sub_title">SERVICE</span>
          <span class="service_sub_subtitle">게임인스는 서비스를 제공하고 있습니다.</span>
          <span class="service_sub_detail">
            <p>
              고객을 위한 웹/앱 맞춤 설계, 유지보수 서비스 제공 다양한플랫폼과
              새로운 기술로
            </p>
            빠르게 변화하는 환경에 능동적으로 대응하여, 커뮤니케이션을 통해
            만족감을 총족시켜드립니다.
          </span>
        </div>
      </v-row>
      <v-row>

        <div class="card_wrap">
          <div class="webapp_img">
            <div class="hover_img ">
              <div class="card_text">
                <p class="card_title">Web / APP</p>
                <p class="card_title_2">Development</p>
                <p class="card_desc">
                  Web/App A to Z 개발
                </p>
              </div>
              <router-link to="/service">
                <div class="logo_btn">
                  <span class="line_1"></span>
                  <span class="line_2"></span>
                </div>
              </router-link>
            </div>
          </div>
          <div class="platform_img">
            <div class="hover_img ">
              <div class="card_text">
                <p class="card_title">SERVICE</p>
                <p class="card_title_2">PLATFORM</p>
                <p class="card_desc">플랫폼 A to Z 운영</p>
              </div>
              <router-link to="/service">
                <div class="logo_btn">
                  <span class="line_1"></span>
                  <span class="line_2"></span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </v-row>
    </div>
  </section>
  <ScrollNav />
</template>

<script>
import ScrollNav from "../header/HeaderNav.vue";
export default {
  components: {
    ScrollNav,
  },
  mounted() {
    let timeoutId;
    const section = document.querySelector(".service_section");

    section.addEventListener("wheel", function (e) {
      if (e.deltaY < 0) {
        e.preventDefault();

        clearTimeout(timeoutId); // 이전 timeout 취소
        window.scrollTo({
          top: window.scrollY - window.innerHeight,
          behavior: "smooth",
        });
      } else if (e.deltaY > 0) {
        e.preventDefault();
        clearTimeout(timeoutId); // 이전 timeout 취소
        window.scrollTo({
          top: window.scrollY + window.innerHeight,
          behavior: "smooth",
        });
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.service_section {
  width: 100vw;
  height: 100vh;
}

.card_wrap {
  display: flex;
  bottom: 0;
  position: absolute;
}

.webapp_img {
  width: 33vw;
  height: 59vh;
  position: relative;

  .hover_img {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 10;
    left: 0;
    overflow: hidden;
    transition: all 1s ease-in-out;
    background-size: cover;
    background-image: url(./../../assets/home/service_big_1.svg);
    // background-attachment: fixed;


    .card_text {
      position: absolute;
      padding: 0% 0px 5% 9%;
      bottom: 0;
      color: white;
      transition: all 1s ease;

      .card_title {
        font-family: sans-serif;
        font-size: 2rem;
        font-weight: bold;
        line-height: 26px;
      }

      .card_title_2 {
        font-family: sans-serif;
        font-weight: bold;
        font-size: 2rem;
      }

      .card_desc {
        font-family: "Pretendard-Regular";
        font-size: 1.125rem;
        padding-top: 12px;
      }

    }

    .logo_btn {
      cursor: pointer;
    }
  }

  .hover_img:hover {
    opacity: 1;
    width: 100vw;
    z-index: 14;
    height: 100%;
    position: absolute;
    left: -50%;
    background-size: cover;
    .card_text{
      padding: 0% 0px 5% 20%;
    }
    .logo_btn {
      cursor: pointer;
      margin: 0% 50% 5% 0%;
      background-color: white;
      .line_1 {
        background-color: #4187fe;
      }

      .line_2 {
        background-color: #4187fe;
      }
    }
  }
}

.platform_img {
  width: 33vw;
  height: 59vh;
  position: relative;

  .hover_img {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 10;
    left: 0;
    overflow: hidden;
    transition: all 1s ease-in-out;
    background-size: cover;
    background-image: url("./../../assets/home/service_big_2.svg");
    // background-attachment: fixed;

    .card_text {
      position: absolute;
      padding: 0% 0px 5% 9%;
      bottom: 0;
      color: white;

      .card_title {
        font-family: sans-serif;
        font-size: 2rem;
        font-weight: bold;
        line-height: 26px;
      }

      .card_title_2 {
        font-family: sans-serif;
        font-weight: bold;
        font-size: 2rem;
      }

      .card_desc {
        font-family: "Pretendard-Regular";
        font-size: 1.125rem;
        padding-top: 12px;
      }

    }

    .logo_btn {
      cursor: pointer;
    }
  }

  .hover_img:hover {
    opacity: 1;
    width: 100vw;
    z-index: 14;
    height: 100%;
    position: absolute;
    left: -150%;
    background-size: cover;

    .card_text{
      padding: 0% 0px 5% 20%;
    }
    .logo_btn {
      cursor: pointer;
      margin: 0% 50% 5% 0%;
      background-color: white;
      .line_1 {
        background-color: #4187fe;
      }

      .line_2 {
        background-color: #4187fe;
      }
    }
  }
}

.service_bg {
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 0% 17%;
  background: rgb(43, 30, 21);
  color: white;
}

.service_text {
  display: grid;
  position: relative;
  margin-top: 18vh;

  .service_sub_title {
    font-family: sans-serif;
    color: white;
    font-size: 1.25rem;
  }

  .service_sub_subtitle {
    font-family: "Pretendard-Regular";
    font-size: 1.825rem;
    padding: 16px;
  }

  .service_sub_detail {
    font-family: "Pretendard-Regular";
    font-size: 1.125rem;
    padding-left: 16px;
  }
}

.logo_btn {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  text-align: center;
  box-shadow: 0px 0px 0px 2px;
  margin: 10% 10%;
  bottom: 0;
  right: 0;
  transition: all 1s ease;

  .line_1 {
    width: 37px;
    height: 2.1px;
    display: inline-block;
    border-radius: 12%;
    background-color: white;
    transform: translate3d(10px, 17.5px, 10px);
    transition: all 1s ease;
  }

  .line_2 {
    left: -14.6%;
    bottom: -15.5%;
    width: 21px;
    height: 2.1px;
    display: inline-block;
    border-radius: 12%;
    position: relative;
    background-color: white;
    transform: rotate3d(0, 0, -1, -45deg);
    transition: all 1s ease;
  }
}

.service_bg {
  background-image: url("./../../assets/home/service_bg.svg");
  background-size: cover;
}

.webapp {
  background-image: url("./../../assets/home/service1.svg");
}

.platform {
  background-image: url("./../../assets/home/service2.svg");
}

a {
  text-decoration: none;
  color: white;
}
</style>
