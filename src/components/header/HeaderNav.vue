<template>
  <div class="nav" v-if="!nav_state" @mouseover="nav_state = true">
    <v-row class="nav_con">
      <v-col class="nav_logo" cols="6">
        <img
          src="../../assets/logo/blogo.svg"
          alt="logo"
          class="blogo"
          style=""
        />
      </v-col>
      <v-spacer />
      <v-col cols="6" class="menu_con">
        <div class="menu_list">
          <template v-for="(item, i) in menus" :key="i">
            <router-link :to="item.value">
              <v-list-item :value="i">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </router-link>
          </template>
        </div>
      </v-col>
    </v-row>
  </div>
  <ScrollNav v-if="nav_state" />
</template>

<script>
import { reactive } from "vue";
import ScrollNav from "../header/ScrollNav.vue";

export default {
  name: "HeaderNav",
  components: {
    ScrollNav,
  },

  setup() {
    const state = reactive({
      nav_state: false,
      menus: [
        {
          title: "회사소개",
          value: "/Intro",
        },
        {
          title: "회사소식",
          value: "",
        },
        {
          title: "서비스",
          value: "",
        },
        {
          title: "문의&의뢰",
          value: "",
        },
        {
          title: "채용",
          value: "",
        },
      ],
    });

    window.addEventListener("wheel", (e) => {
      if (e.wheelDeltaY > 0) {
        // state.nav_state = false;
      }
      if (e.wheelDeltaY < 0) {
        state.nav_state = true;
      }
    });

    return state;
  },
  mounted() {
    this.$anime({
      targets: [".nav"],
      top: "0px",
      duration: 200,
      easing: "easeInSine",
    });
  },
};
</script>

<style lang="scss" scoped>
.nav {
  z-index: 999;
  position: fixed;
  height: 80px;
  width: 100vw;
  top: 0;
  box-shadow: 1px 0px 5px 0px gray;
}
.nav_con {
  position: relative;
  height: 100%;
  width: 68vw;
  margin: auto;
  .nav_logo {
    align-self: center;
    cursor: pointer;
    top: 0;
    .blogo {
      width: 158px;
      height: 38px;
    }
  }
}
.menu_con {
  align-self: center;
  .menu_list {
    position: relative;
    display: flex;
    justify-content: flex-end;
  }
  .menu_list a {
    text-decoration: none;
  }

  .menu_list .v-list-item-title {
    font-family: "Pretendard-Regular";
    font-size: 1.125rem;
    font-weight: bold;
    color: rgb(255, 255, 255);
  }
}
</style>
