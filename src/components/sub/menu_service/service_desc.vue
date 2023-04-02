<template>
  <section class="service_desc">
    <v-row style="margin: 0% 16%">
      <v-col>
        <div class="service_con">
          <p class="service_span">위탁 운영 중인 서비스</p>
          <div class="title_con">
            <p class="title">
              <img
                src="@/assets/sub/service_logo.svg"
                style="padding: 5px"
              />티키앤타카
            </p>
            <span class="title_desc"
              >보상형 축구 / 피파 커뮤니티 커뮤니티 기존과는 차별화된 다양한
              콘텐츠를 회원에게 제공합니다.</span
            >
          </div>
          <a
            href="http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0"
            class="tikitaka_link"
            >TIKI&TAKA 사이트
            <img
              src="@/assets/sub/linkto_tiki.svg"
              style="display: flex; text-align: center; padding-top: 6px"
            />
          </a>
        </div>
      </v-col>
      <v-col>
        <div class="explain">
          <p>
            보상형 축구 / 피파 커뮤니티 커뮤니티 활동으로 포인트를 획득하고,
            다양한 경품에 응모하는 추첨 이벤트, 회원 간에 거래가 이루어지는
            장터, 상품을 구매할 수 있는 마켓, 실제 시스템과 같은 승부 예측 등
            기존과는 차별화된 다양한 콘텐츠를 회원에게 제공합니다.
          </p>
          <p style="margin: 10% 0%">
            10만이 넘는 구독자를 보유한 5명의 대형 크리에이터와 피파온라인4 국내
            최대 규모 카페인 '피커투'와 협업 중이고,서버 오픈 5개월 만에 회원 수
            약 16,000명 유치에 성공하였습니다.
          </p>
          <p>
            2023년에는 누적 100,000명을 예상하며, 앞으로도 다양한 콘텐츠를
            제공하여 대형 커뮤니티로 성장해갈 것입니다.
          </p>
        </div>
      </v-col>
    </v-row>
    <span class="slide_title">게임인스와 함께 협력 파트너</span>

    <div class="slide_con" style="">
      <div
        class="slideimg"
        style="padding: 12px"
        v-for="slide in slides"
        :key="slide.id"
      >
        <img :src="slide.image" alt="Slide Image" />
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

    <div class="tech">
      <p>
        <span style="color: #0174f5">㈜게임인스</span> 는 기업부설 연구소의 오랜
        연구와 과감한 투자를
      </p>
      <p>
        통해 기술과 앱 제작/유지보수에 대한 독보적인 기술력을 확보하고 있습니다.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          id: 1,
          image: require("@/assets/sub/slide_image1.svg"),
        },
        {
          id: 2,
          image: require("@/assets/sub/slide_image2.svg"),
        },
        {
          id: 3,
          image: require("@/assets/sub/slide_image3.svg"),
        },
        {
          id: 4,
          image: require("@/assets/sub/slide_image4.svg"),
        },
        {
          id: 5,
          image: require("@/assets/sub/slide_image5.svg"),
        },
        {
          id: 6,
          image: require("@/assets/sub/slide_image6.svg"),
        },
      ],
    };
  },
  mounted() {
    const slide = document.querySelector(".slide_con");
    console.log(slide.style.width);
  },
};
</script>
<style lang="scss" scoped>
.service_desc {
  background-color: #242424;
  width: 100vw;
  height: 230vh;
  color: white;
  position: relative;
  padding-top: 10%;

  .service_con {
    height: 66%;

    .service_span {
      font-family: "Pretendard-Regular";
      font-size: 1.9rem;
      padding: 12px;
    }
    .title_con {
      width: 83%;
      .title {
        font-size: 4.625rem;
        font-weight: bold;
        padding: 12px 12px 12px 0px;
        font-family: "Pretendard-Regular";
      }
    }

    .title_desc {
      font-size: 1.48rem;
      font-weight: bold;
      font-family: "Pretendard-Regular";
    }

    .tikitaka_link {
      width: 31%;
      padding-top: 35px;
      position: relative;
      display: flex;
      font-size: 1.25rem;
      color: white;
      text-decoration: none;
    }
  }

  .explain {
    font-size: 1.25rem;
    width: 99%;
    margin-top: 35%;
    font-family: "Pretendard-Regular";
  }
}

.slide_title {
  font-size: 2.5rem;
  font-family: "Pretendard-Regular";
  font-weight: bold;
  padding-top: 10%;
  display: flex;
  justify-content: center;
}

.slide_con {
  display: flex;
  flex-wrap: nowrap;
  margin-top: 3%;
  animation: bannermove 15s linear infinite;
}

@keyframes bannermove {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(-133%, 0);
  }
}

.tech {
  font-size: 1.9rem;
  font-family: "Pretendard-Regular";
  text-align: center;
  margin-top: 12%;
  font-weight: bold;
}
</style>
