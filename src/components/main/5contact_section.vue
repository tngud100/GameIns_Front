<template>
  <!-- 콘텍트 section -->
  <section class="contact_section">
    <div class="contact_bg" />
    <div class="contact_con">
      <span class="title">게임인스와 함께 멈추지 않는 성장을 경험하세요.</span>
      <span class="desc">우리와 프로젝트를 함께 하시겠습니까?</span>
      <router-link to="/Contact">
        <img class="btn" src="./../../assets/home/togo_icon.svg" />
      </router-link>
    </div>
    <Footer />
  </section>
</template>

<script>
import Footer from "./../footer/Footer.vue";

export default {
  name: "contact_section",
  components: {
    Footer,
  },
  data() {
    return {};
  },
  mounted() {
    const contact_con = document.querySelector(".contact_section");
    let timeoutId;

    contact_con.addEventListener("wheel", function (e) {
      if (e.deltaY < 0) {
        e.preventDefault();
        clearTimeout(timeoutId); // 이전 timeout 취소
        window.scrollTo({
          top: window.scrollY - contact_con.scrollHeight,
          behavior: "smooth",
        });
      }
    });
  },
};
</script>

<style scoped>
.contact_section {
  position: relative;
  width: 100vw;
  height: 40vh;
}

.contact_bg{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
  background-image: url("./../../assets/home/contact_img.svg");
}
.contact_con {
  width: 30%;
  display: grid;
  height: 100%;
  margin: 0% 17%;
  color: white;
}

.title {
  font-family: "Pretendard-Regular";
  font-weight: bold;
  font-size: 2.5rem;
  padding-top: 13%;
}

.desc {
  font-family: "Pretendard-Regular";
  font-size: 1.25rem;
  margin-bottom: 2%;
}

.btn {
  cursor: pointer;
  padding-bottom: 5%;
  width: 10%;
}</style>
