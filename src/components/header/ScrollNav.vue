<template>
  <!-- <div class="nav" @mouseover="showSubmenu = true"> -->
  <div class="nav">
    <v-row class="nav_con">
      <v-col class="nav_logo" cols="4">
        <router-link to="/">
          <img
            src="../../assets/logo/scrollblogo.svg"
            style="width: 158px; height: 37px"
        /></router-link>
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
  <!-- <SubNav v-if="showSubmenu" :menuhover="showSubmenu" @mouseleave="showSubmenu = false" /> -->
</template>

<script>
// import SubNav from "./../header/SubNav.vue";

export default {
  name: "ScrollNav",
  components: {
    // SubNav,
  },
  data: () => ({
    showSubmenu: false,
    menus: [
      {
        title: "회사소개",
        value: "/Intro",
      },
      {
        title: "회사소식",
        value: "/News",
      },
      {
        title: "서비스",
        value: "/Service",
      },
      {
        title: "문의&의뢰",
        value: "/Contact",
      },
      {
        title: "채용",
        value: "/Employ",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
// HeaderNav에 css종속되어 있음
.nav {
  z-index: 1000;
  position: fixed;
  height: 80px;
  width: 100vw;
  top: 0;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 1px 0px 0px rgb(219, 211, 211);
}

.nav_con {
  position: relative;
  height: 100%;
  width: 1300px;
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
    background: none;

    .v-list-item-title {
      font-family: "Pretendard-Regular";
      font-size: 1.125rem;
      font-weight: bold;
      color: rgb(0, 0, 0);
    }
  }

  .v-list-item-title:hover {
    color: #308ef6;
  }

  .menu_list a {
    text-decoration: none;
  }
}
</style>
