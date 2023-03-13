<template>
  <div class="nav">
    <v-row class="nav_con">
      <v-col class="nav_logo" cols="2">
        <img
          src="../../assets/logo/scrollblogo.svg"
          style="width: 100px; height: 50px"
        />
      </v-col>
      <v-spacer />
      <v-col cols="4">
        <v-list :items="menus" class="menu_list"></v-list>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "SubNav",
  data: () => ({
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
};
</script>

<style scoped>
.nav {
  z-index: 1000;
  position: fixed;
  top: 0;
  height: 70px;
  width: 100vw;
  background-color: rgba(255, 255, 255);
}
.nav_con {
  position: relative;
  height: 100%;
  margin: 0px 15%;
  width: 1300px;
}
.nav_logo {
  position: relative;
  align-self: center;
  cursor: pointer;
}
.menu_list {
  position: relative;
  background: none;
  color: rgb(0, 0, 0);
}
.menu_list .v-list-item-title {
  font-size: 13px;
}
</style>
