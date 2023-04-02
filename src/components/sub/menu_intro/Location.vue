<template>
  <section class="location_section">
    <div class="locate_con">
      <div>
        <span class="title">
          <p>LOCATION</p>
        </span>
        <div class="locate_detail_con">
          <img src="@/assets/sub/locate.svg" />

          <span class="locate_detail"> 부산광역시 백양대로 684, 5층</span>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.548042668115!2d128.9868924160836!3d35.1678907655588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568ea7f35096129%3A0x26e62be76f0388cf!2z67aA7IKw6rSR7Jet7IucIOyCrOyDgeq1rCDrsLHslpHrjIDroZwgNjg0!5e0!3m2!1sko!2skr!4v1668045718480!5m2!1sko!2skr"
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="googlemap"></iframe>
        <div class="vehicle_text" style="margin-top: 30px">
          <h3>지하철</h3>
          <p>부산2호선 사상역</p>
        </div>
        <div class="vehicle_text">
          <h3>버스</h3>
          <p class="vehicle_text">
            지선 128-1, 133, 169-1, 62, 129-1 신라대 입구 하차
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    //     onMounted(() => {
    //     //   var max_600px = window.matchMedia("screen and (max-width: 600px)");
    //     //   var min_600px_max_1000px = window.matchMedia(
    //     //     "screen and (min-width: 600px) and (max-width: 1025px)"
    //     //   );
    //     //   var min_1000px = window.matchMedia("screen and (min-width: 1025px)");
    //     //   var intro6_textbox_p = document.querySelector(".intro6_textbox_p");
    //     // });
    //     return {
    //       state,
    //     };
  },
};
</script>

<style>
@media screen and (max-width: 600px) {
  .googlemap {
    width: 100%;
    height: 460px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1025px) {
  .googlemap {
    width: 600px;
    height: 460px;
  }
}

@media screen and (min-width: 1025px) {
  .googlemap {
    width: 1300px;
    height: 550px;
  }
}

.location_section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 960px;
}

.locate_con {
  width: 1200px;
  display: flex;
  justify-content: center;
  margin-top: 4%;
}

.locate_con h3 {
  font-size: 20px;
}

.title {
  font-size: 3rem;
  font-family: sans-serif;
  font-weight: bold;
}

.locate_detail_con{
  display: flex;
  margin: 12px;
}
.locate_detail {
  font-size: 1.25rem;
  font-family: 'Pretendard-Regular';
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
}

.vehicle_text {
  display: flex;
  align-items: center;
}

.vehicle_text h3 {
  width: 90px;
  font-size: 20px;
}

.vehicle_text progress {
  font-size: 20px;
}

.googlemap {
  border: none;
  box-shadow: 0px 0px 1px 2px gray;
}</style>
