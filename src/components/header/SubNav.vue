<template>
  <v-row class="sub_con">
    <v-spacer />
    <v-col cols="5" style="padding: 0">
      <div class="sub_list">
        <v-list class="news" :items="news" />
        <v-list class="service" :items="service" />
        <v-list class="employ" :items="employment" />
      </div>
      <v-spacer />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Submenu",
  props: {
    menuhover: Boolean,
  },
  data() {
    return {
      news: [
        {
          title: "연혁",
          value: "",
        },
        {
          title: "CEO",
          value: "",
        },
        {
          title: "조직도",
          value: "",
        },
        {
          title: "오시는길",
          value: "",
        },
      ],
      service: [
        {
          title: "웹/앱",
        },
        {
          title: "커뮤니티",
        },
        {
          title: "광고",
        },
      ],
      employment: [
        {
          title: "인재상",
        },
        {
          title: "채용소식",
        },
      ],
    };
  },
  mounted() {
    const sub_con = document.querySelector(".sub_con");
    if (this.menuhover === true && sub_con) {
      setTimeout(() => {
        sub_con.style.top = "9%";
        sub_con.style.transition = "all .5s ease-in-out";
      }, 1);
    } else {
      sub_con.style.top = "-15%";
      sub_con.style.transition = "all 1s ease-in-out";
    }
  },
};
</script>

<style lang="scss">
.sub_con {
  position: fixed;
  height: 210px;
  width: 100vw;
  z-index: 100;
  top: -15%;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(158, 153, 153) 1px 1px 3px 0px;
  transition: all 2s ease-in-out;
}
.sub_con.sub_con-transition {
}
.sub_list {
  position: relative;
  display: flex;
  justify-content: flex-start;
  padding: 0;
}

.sub_list {
  text-align: center;
  .v-list {
    background: none;
  }
  .v-list-item-title {
    color: rgb(49, 49, 49) !important;
    margin-left: 13px;
    font-size: 16px;
  }
  .news {
    margin-left: 5%;
  }
  .service {
    margin-left: 9%;
  }
  .employ {
    margin-left: 8.5%;
  }
}
// 52px
</style>
