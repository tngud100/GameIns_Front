<template>
  <section class="slide_section">
    <div class="slide_background">
      <div class="slide_span">
        <span class="span_title">Now we are</span><br />
        <span class="span_desc">게임인스 소식을 전해드립니다.</span>
        <a href="/News">
          <v-btn class="span_btn">View More</v-btn>
        </a>
      </div>
      <div class="slide_box">
        <div class="slide_con" style="">
          <div
            style="padding: 12px"
            v-for="slide in slides"
            :key="slide.id"
            class="slideimg"
          >
            <a href="/News">
              <img
                :src="slide.image"
                alt="Slide Image"
                :class="'slide' + slide.id"
              />
            </a>
          </div>
          <div
            class="clone"
            style="padding: 12px"
            v-for="slide in slides"
            :key="slide.id"
          >
            <img :src="slide.image" alt="Slide Image" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 

    <div class="external">
      <div class="horizontal-scroll-wrapper">
        <v-card class="img-wrapper slower">
          <a style="cursor: pointer">
            <img
              src="./../../assets/home/view_pic1.svg"
              alt=""
              cover
              style="padding-left: 14%"
            />
            <v-card-title> 워라밸 인증기업 </v-card-title>
            <v-card-text> 이러이러한 게임인스와 함께하는 기업 </v-card-text>
          </a>
        </v-card>

        <v-card class="img-wrapper faster">
          <a style="cursor: pointer"
            ><img src="./../../assets/home/view_pic2.svg" alt="" cover />
            <v-card-title> 워라밸 인증기업 </v-card-title>
            <v-card-text> 이러이러한 게임인스와 함께하는 기업 </v-card-text>
          </a>
        </v-card>

        <v-card class="img-wrapper slower vertical">
          <a style="cursor: pointer"
            ><v-img :src="images[2].src" alt="" cover />
            <v-card-title> 워라밸 인증기업 </v-card-title>
            <v-card-text> 이러이러한 게임인스와 함께하는 기업 </v-card-text>
          </a>
        </v-card>

        <v-card class="img-wrapper slower slower-down">
          <a style="cursor: pointer"
            ><v-img :src="images[3].src" alt="" cover />
            <v-card-title> 워라밸 인증기업 </v-card-title>
            <v-card-text> 이러이러한 게임인스와 함께하는 기업 </v-card-text>
          </a>
        </v-card>

        <v-card class="img-wrapper">
          <a style="cursor: pointer"
            ><v-img :src="images[4].src" alt="" cover />
            <v-card-title> 워라밸 인증기업 </v-card-title>
            <v-card-text> 이러이러한 게임인스와 함께하는 기업 </v-card-text>
          </a>
        </v-card>

        <v-card class="img-wrapper slower">
          <a style="cursor: pointer"
            ><v-img :src="images[5].src" alt="" cover />
            <v-card-title> 워라밸 인증기업 </v-card-title>
            <v-card-text> 이러이러한 게임인스와 함께하는 기업 </v-card-text>
          </a>
        </v-card>

        <v-card class="img-wrapper faster1">
          <a style="cursor: pointer"
            ><v-img :src="images[6].src" alt="" cover />
            <v-card-title> 워라밸 인증기업 </v-card-title>
            <v-card-text> 이러이러한 게임인스와 함께하는 기업 </v-card-text>
          </a>
        </v-card>

        <v-card class="img-wrapper slower slower2">
          <a style="cursor: pointer"
            ><v-img :src="images[7].src" alt="" cover />
            <v-card-title> 워라밸 인증기업 </v-card-title>
            <v-card-text> 이러이러한 게임인스와 함께하는 기업 </v-card-text>
          </a>
        </v-card>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "slide_section",
  data() {
    return {
      slides: [
        {
          id: 1,
          image: require("@/assets/sub/Mask group.svg"),
        },
        {
          id: 2,
          image: require("@/assets/sub/Mask group-1.svg"),
        },
        {
          id: 3,
          image: require("@/assets/sub/Mask group-2.svg"),
        },
        {
          id: 4,
          image: require("@/assets/sub/Mask group-3.svg"),
        },
        {
          id: 5,
          image: require("@/assets/sub/Mask group-4.svg"),
        },
        {
          id: 6,
          image: require("@/assets/sub/Mask group-5.svg"),
        },
        {
          id: 7,
          image: require("@/assets/sub/Mask group-6.svg"),
        },
        {
          id: 8,
          image: require("@/assets/sub/Mask group-7.svg"),
        },
        {
          id: 9,
          image: require("@/assets/sub/Mask group-8.svg"),
        },
        {
          id: 10,
          image: require("@/assets/sub/Mask group-9.svg"),
        },
      ],
      // images: [
      //   {
      //     src: "./../../assets/home/view_pic1.svg",
      //     alt: "image1",
      //   },
      //   {
      //     src: "./../../assets/home/view_pic2.svg",
      //     alt: "image2",
      //   },
      //   {
      //     src: "https://pds.saramin.co.kr/workenv-bg/202209/19/rig0om_lo1p-1e6ynda_workenv-bg.jpg",
      //     alt: "image3",
      //   },
      //   {
      //     src: "https://pds.saramin.co.kr/workenv-bg/202301/20/ros2xn_ktj5-xqb4p7_workenv-bg.jpg",
      //     alt: "image3",
      //   },
      //   {
      //     src: "https://pds.saramin.co.kr/workenv-bg/202301/20/ros2y3_o0qm-xqb4p7_workenv-bg.png",
      //     alt: "image3",
      //   },
      //   {
      //     src: "https://pds.saramin.co.kr/workenv-bg/202301/20/ros2yg_idak-xqb4p7_workenv-bg.png",
      //     alt: "image3",
      //   },
      //   {
      //     src: "https://pds.saramin.co.kr/workenv-bg/202209/19/rig11v_6tvy-1e6ynda_workenv-bg.jpg",
      //     alt: "image3",
      //   },
      //   {
      //     src: "https://pds.saramin.co.kr/workenv-bg/202301/20/ros2yu_zt26-xqb4p7_workenv-bg.png",
      //     alt: "image3",
      //   },
      // ],
    };
  },
  mounted() {
    // const slide_con = document.querySelector(".horizontal-scroll-wrapper");

    // slide_con.addEventListener("wheel", function (e) {
    //   if (e.deltaY < 0) {
    //     e.preventDefault();

    //     slide_con.scrollTo({
    //       top: -1200,
    //       behavior: "smooth",
    //     });
    //   }
    //   if (e.deltaY > 0) {
    //     e.preventDefault();

    //     slide_con.scrollTo({
    //       top: 1200,
    //       behavior: "smooth",
    //     });
    //   }
    // });
    const wrapper = document.querySelector(".slide_section");

    wrapper.addEventListener("wheel", function (e) {
      e.preventDefault();
      if (e.deltaY < 0) {
          window.scrollTo({
            top: window.scrollY - window.innerHeight,
            behavior: "smooth",
          });
      } else if (e.deltaY > 0) {
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
.slide_section{
  width: 100vw;
  height: 100vh;
}
.slide_box {
  width: 70%;
  left: 38%;
  top: -9%;
  height: 40%;
  position: relative;
  overflow: hidden;
}
.slide_con {
  display: flex;
  flex-wrap: nowrap;
  top: 5%;
  position: relative;
  /* margin-top: -7%; */
  /* position: relative; */
  /* overflow: hidden; */
  width: 63%;
  animation: bannermove 16s linear infinite;

  .slideimg {
  }
  .clone {
  }
}
@for $i from 1 through 9 {
  .slide#{$i} {
    transition: all 0.5s ease;
  }
  .slide#{$i}:hover {
    transform: translatey(-20px);
  }
}

@keyframes bannermove {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(-435%, 0);
  }
}

.slide_background {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: rgb(255, 255, 255);
}

.slide_span {
  height: 34%;
  width: 15%;
  padding: 12px;
  padding-top: 15%;
  margin-left: 17%;
  box-shadow: 0px 0px 1px 1px rgb(255, 255, 255);

  transition: all 0.5s ease;
}

.slide_span:hover {
  border-radius: 10px;
}

.span_title {
  font-family: sans-serif;
  font-weight: bold;
  font-size: 5rem;
  line-height: 60px;
}

.span_desc {
  font-family: "Pretendard-Regular";
  display: grid;
  font-weight: bold;
  margin: 15% 0% 20% 0%;
  font-size: 1.25rem;
}

.span_btn {
  font-size: 1.25rem;
  width: 180px;
  height: 50px;
  border-radius: 0px;
  text-decoration: none;
  box-shadow: none;
  border: 1.5px solid;
  transition: all 0.1s ease-in-out;
}
.span_btn:hover {
  border-radius: 25px;
}

.span_btn:hover {
  text-decoration: none;
  color: #98c4f4;
  box-shadow: 0px 0px 1px 1px#98c4f4;
}

::-webkit-scrollbar {
  width: 1px;
  height: 1px;
}

::-webkit-scrollbar-button {
  width: 1px;
  height: 1px;
}

.external {
  overflow: hidden;
  height: 100vh;
}

.horizontal-scroll-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 105vh;
  height: 100vw;
  transform: rotate(-90deg) translate3d(0, -45vh, 0);
  transform-origin: right top;
  overflow-y: auto;
  padding: 0;
  perspective: 1px;
  transform-style: preserve-3d;
  padding-bottom: 10rem;
}

.img-wrapper {
  transform: rotate(90deg);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 29vh;
  transform-origin: 50% 50%;
  transform: rotate(90deg) translateZ(0.1px) scale(0.9) translateX(0px)
    translateY(-3vh);
  transition: 1s;
}

.img-wrapper:hover {
  min-height: 35vh;
}

.slower {
  transform: rotate(90deg) translateZ(-0.2px) scale(1.1) translateX(0%)
    translateY(-14vh);
}

.slower1 {
  transform: rotate(90deg) translateZ(-0.25px) scale(1.05) translateX(0%)
    translateY(8vh);
}

.slower2 {
  transform: rotate(90deg) translateZ(-0.3px) scale(1.3) translateX(0%)
    translateY(2vh);
}

.slower-down {
  transform: rotate(90deg) translateZ(-0.2px) scale(1.1) translateX(0%)
    translateY(16vh);
}

.faster {
  transform: rotate(90deg) translateZ(0.15px) scale(0.8) translateX(0%)
    translateY(14vh);
}

.faster1 {
  transform: rotate(90deg) translateZ(0.05px) scale(0.8) translateX(0%)
    translateY(10vh);
}

.fastest {
  transform: rotate(90deg) translateZ(0.22px) scale(0.7) translateX(-10vh)
    translateY(-15vh);
}

.vertical {
  transform: rotate(90deg) translateZ(-0.15px) scale(1.15) translateX(0%)
    translateY(0%);
}

.last {
  transform: rotate(90deg) translateZ(-0.2px) scale(1.1) translateX(25vh)
    translateY(-8vh);
}

.scroll-info,
header {
  position: absolute;
  left: 1rem;
}

.scroll-info {
  top: 1rem;
}

a {
  color: inherit;
  font-weight: 500;
  width: 100%;
  height: 100%;
  text-decoration: none !important;
}

h1 {
  font-weight: 300;
  font-size: 1rem;
}

.img-wrapper a {
  overflow: hidden;
  display: block;
  padding: 1vh;
  background: #ffffff;
  box-shadow: 0 10px 50px #5f2f1182;
}

.v-img {
  width: 278px;
  height: 188px;
  transition: 0.5s;
  vertical-align: top;
  /* filter: saturate(40%) sepia(30%) hue-rotate(5deg); */
}

.v-card-title {
  font-family: "Pretendard-Regular";
  font-size: 1rem;
  font-weight: bold;
}

.v-card-text {
  font-family: "Pretendard-Regular";
  font-size: 1rem;
}

.scroll-info {
  display: flex;
  align-items: center;
}

.icon svg {
  width: 50px;
  fill: currentcolor;
}
</style>
