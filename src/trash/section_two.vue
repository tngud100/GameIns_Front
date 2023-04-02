<template>
  <div class="splitview skewed">
    <div class="panel bottom">
      <div class="content">
        <div class="description">
          <h1>VISION</h1>
          <p>
            고객의 편안하고 긍정적인 경험을 위해, 보다 더 나은 기술을 개발하고
            빠르고 간편하게 고객과 비즈니스가 닿을 수 있도록 노력하겠습니다.
          </p>
        </div>

        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/original-image.jpg"
          alt="Original"
        />
      </div>
    </div>

    <div class="panel top">
      <div class="content">
        <div class="description">
          <h1>VISION</h1>
          <p>
            고객의 편안하고 긍정적인 경험을 위해, 보다 더 나은 기술을 개발하고
            빠르고 간편하게 고객과 비즈니스가 닿을 수 있도록 노력하겠습니다.
          </p>
        </div>

        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/duotone-image.jpg"
          alt="Duotone"
        />
      </div>
    </div>

    <div class="handle"></div>
  </div>
</template>

<script>
export default {
  setup() {},
  mounted() {
    var parent = document.querySelector(".splitview"),
      topPanel = parent.querySelector(".top"),
      handle = parent.querySelector(".handle"),
      skewHack = 0,
      delta = 0;

    if (parent.className.indexOf("skewed") != -1) {
      skewHack = 1000;
    }

    parent.addEventListener("mousemove", function (event) {
      delta = (event.clientX - window.innerWidth / 2) * 0.5;

      handle.style.left = event.clientX + delta + "px";

      topPanel.style.width = event.clientX + skewHack + delta + "px";
    });

    const splitview = document.querySelector(".splitview");
    splitview.addEventListener("wheel", function (e) {
      if (e.deltaY < 0) {
        e.preventDefault();
        setTimeout(() => {
          window.scrollTo({
            top: window.scrollY - window.innerHeight,
            behavior: "smooth",
          });
        }, 500);
      } else if (e.deltaY > 0) {
        e.preventDefault();
        setTimeout(() => {
          window.scrollTo({
            top: window.scrollY + window.innerHeight,
            behavior: "smooth",
          });
        }, 500);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
/* Reset. */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font-family: Arial, Helvetica, sans-serif;
}

/* Panels. */
.splitview {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 45vw;
  overflow: hidden;
}

.panel {
  position: absolute;
  width: 100vw;
  min-height: 45vw;
  overflow: hidden;
}

.panel .content {
  position: absolute;
  width: 100vw;
  min-height: 45vw;
  color: #363636;
}

.panel .description {
  width: 25%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
}

.panel img {
  box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.15);
  width: 35%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.bottom {
  background-color: #eeff92;
  z-index: 1;
  height: 100vh;
}

.bottom .description {
  right: 5%;
}

.top {
  background-color: #aed6ed;
  z-index: 2;
  width: 50vw;
  height: 100vh;

  /*-webkit-clip-path: polygon(60% 0, 100% 0, 100% 100%, 40% 100%);
    clip-path: polygon(60% 0, 100% 0, 100% 100%, 40% 100%);*/
}

.top .description {
  left: 5%;
}

/* Handle. */
.handle {
  height: 100%;
  position: absolute;
  display: block;
  background-color: rgb(253, 171, 0);
  width: 5px;
  top: 0;
  left: 50%;
  z-index: 3;
}

/* Skewed. */
.skewed .handle {
  top: 50%;
  transform: rotate(30deg) translateY(-50%);
  height: 200%;
  -webkit-transform-origin: top;
  -moz-transform-origin: top;
  transform-origin: top;
}

.skewed .top {
  transform: skew(-30deg);
  margin-left: -1000px;
  width: calc(50vw + 1000px);
}

.skewed .top .content {
  transform: skew(30deg);
  margin-left: 1000px;
}

/* Responsive. */
@media (max-width: 900px) {
  body {
    font-size: 75%;
  }
}
</style>
