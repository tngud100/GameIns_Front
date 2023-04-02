<template>
  <div class="wrapper">
    <div data-carousel class="wrapper_bg">
      <ul class="slide__list Wallop-list">
        <li
          v-for="(text, index) in Text"
          :key="index"
          class="slide__item Wallop-item"
        >
          <h2 class="slide__heading">{{ text.title }}</h2>
          <blockquote>
            <p class="slide__quote">
              {{ text.comment }}
            </p>
            <cite class="slide__cite">GAMEINS</cite>
          </blockquote>
        </li>
      </ul>
      <button class="button--prev Wallop-buttonPrevious" title="previous">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.9 50.2">
          <path d="M25.1 50.2L0 25.1 25.1 0l2.8 2.8L5.7 25.1l22.2 22.2z" />
        </svg>
      </button>
      <button class="button--next Wallop-buttonNext" title="next">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.9 50.2">
          <path d="M25.1 50.2L0 25.1 25.1 0l2.8 2.8L5.7 25.1l22.2 22.2z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import Wallop from "wallop";
export default {
  data() {
    return {
      Text: [
        {
          title: "VISION",
          comment:
            "고객의 편안하고 긍정적인 경험을 위해, 보다 더 나은 기술을 개발하고 빠르고 간편하게 고객과 비즈니스가 닿을 수 있도록 노력하겠습니다.",
        },
        {
          title: "VISION",
          comment:
            "고객의 편안하고 긍정적인 경험을 위해, 보다 더 나은 기술을 개발하고 빠르고 간편하게 고객과 비즈니스가 닿을 수 있도록 노력하겠습니다.",
        },
      ],
    };
  },
  mounted() {
    const slider = document.querySelector("[data-carousel]");
    const slides = [...document.querySelectorAll(".Wallop-item")];

    this.wallop = new Wallop(slider);

    let prev = 0;

    const removePrevClasses = (index) => {
      let prevClass;
      if (slides[index].classList.contains("Wallop-item--hidePrevious")) {
        prevClass = "Wallop-item--hidePrevious";
      } else if (slides[index].classList.contains("Wallop-item--hideNext")) {
        prevClass = "Wallop-item--hideNext";
      }

      if (prevClass) {
        setTimeout(() => {
          slides[index].classList.remove(prevClass);
        }, 600);
      }
    };

    const onChange = () => {
      removePrevClasses(prev);
      prev = this.wallop.currentItemIndex;
    };

    this.wallop.on("change", onChange);
  },
};
</script>

<style lang="scss" scoped>
/* List reset */

button {
  background-color: transparent;
  border: none;
  width: 65px;
  padding: 20px;
  transition: opacity 200ms;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 0);
  z-index: 2;

  svg {
    fill: #2b2424;
  }

  &:hover,
  &:focus {
    opacity: 0.6;
  }
}

.button--next {
  left: auto;
  right: 0;
  transform: translate3d(0, -50%, 0) rotate(180deg);
}

.wrapper {
  position: absolute;
  height: 100vh;
  min-height: 600px;
  margin-top: 100vh;
  display: flex;
  background-color: rgb(255, 255, 255);
  align-items: center;
  justify-content: center;
}
.wrapper_bg {
  background-color: white;
}
.slide__list {
  width: 100vw;
  height: 100vh;
  font-family: Lato, sans-serif;

  &::before,
  &::after {
    content: "";
    width: 180px;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
}

.slide__item {
  width: 100%;
  height: 100%;
  padding: 40px 65px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;

  > * {
    width: 100%;
  }
}

.slide__heading,
.slide__quote,
.slide__cite {
  opacity: 0;
  animation-timing-function: var(--originalCurve);
  width: calc(100% - 120px);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.slide__heading {
  --delay: 300ms;

  text-transform: uppercase;
  font-size: 4rem;
  margin-bottom: 20px;
  letter-spacing: 0.05em;
  font-family: sans-serif;
}

.slide__quote {
  --delay: 420ms;
  margin-top: 0;
  margin-bottom: 30px;
  font-size: 1.5rem;
  line-height: 1.4;
  letter-spacing: 0.03em;
}

.slide__cite {
  --delay: 540ms;

  display: block;
}

/*
  Customised Wallop styles with customised animations
  @author http://pedroduarte.me/wallop
*/

[data-carousel] {
  position: relative;
}

.Wallop-list {
  position: relative;
  overflow: hidden;
}

.Wallop-item {
  --x1: 0.1;
  --y1: 0.67;
  --x2: 0.29;
  --y2: 0.98;

  --originalCurve: cubic-bezier(var(--x1), var(--y1), var(--x2), var(--y2));
  --reversedCurve: cubic-bezier(
    calc(1 - var(--x2)),
    calc(1 - var(--y2)),
    calc(1 - var(--x1)),
    calc(1 - var(--y1))
  );

  --length: 1300ms;

  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.Wallop-item--current {
  visibility: visible;
  position: relative;

  .slide__heading,
  .slide__quote,
  .slide__cite {
    animation: slideIn var(--length) forwards var(--originalCurve);
  }
}

.Wallop-item--showPrevious {
  .slide__heading,
  .slide__quote,
  .slide__cite {
    animation: slideOut var(--length) var(--delay) forwards reverse
      var(--reversedCurve);
  }
}

.Wallop-item--showNext {
  .slide__heading,
  .slide__quote,
  .slide__cite {
    animation: slideIn var(--length) var(--delay) forwards var(--originalCurve);
  }
}

.Wallop-item--hidePrevious,
.Wallop-item--hideNext {
  --length: 500ms;
  visibility: visible;
}

.Wallop-item--hidePrevious {
  .slide__heading,
  .slide__quote,
  .slide__cite {
    animation: slideOut var(--length) forwards var(--originalCurve);
  }
}

.Wallop-item--hideNext {
  .slide__heading,
  .slide__quote,
  .slide__cite {
    animation: slideIn var(--length) forwards reverse var(--reversedCurve);
  }
}

/* Custom keyframe animation */

@keyframes slideIn {
  0% {
    transform: translate3d(50%, 0, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes slideOut {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(-50%, 0, 0);
    opacity: 0;
  }
}
</style>
