<template>
  <div class="nav">
    <v-row class="nav_con">
      <v-col class="nav_logo" cols="4">
        <img src="../../assets/logo/blogo.svg" alt="logo" class="blogo" />
      </v-col>
      <v-col cols="8">
        <v-list :items="menus" class="menu_list"></v-list>
      </v-col>
    </v-row>
  </div>
  <!-- <v-navigation-drawer v-model="drawer" location="bottom" temporary>
    <v-list :items="items"></v-list>
  </v-navigation-drawer> -->
</template>

<script>
export default {
  name: "HeaderNav",
  data: () => ({
    drawer: false,
    group: null,
    menus: [
      {
        title: "회사소개",
        value: "/info",
      },
      {
        title: "서비스",
        value: "/first",
      },
      {
        title: "오시는길",
        value: "/second",
      },
      {
        title: "문의&의뢰",
        value: "/contact",
      },
    ],
  }),
  mounted() {
    this.$anime({
      targets: [".nav"],
      top: "0px",
      duration: 200,
      easing: "easeInSine",
    });
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style>
@media all and (min-width: 1280px) {
  .nav {
    z-index: 999;
    position: fixed;
    top: -90px;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .nav_con {
    position: relative;
    height: 100%;
    margin: 0 20%;
    transition: top 0.2s ease-in-out;
  }
  .nav_logo {
    position: relative;
    align-self: center;
    width: 150px;
    height: 75px;
    cursor: pointer;
  }
  .menu_list {
    position: relative;
    display: flex;
    justify-content: flex-end;
    background: none;
    color: white;
  }
}
</style>
