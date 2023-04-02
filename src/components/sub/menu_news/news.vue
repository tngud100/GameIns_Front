<template>
  <section class="news_section">
    <div class="title">인증기업</div>

    <div class="table_con" :headers="header" :items="desserts">
      <thead>
        <tr>
          <th
            class="justify-center text-center table_header"
            v-for="(title, index) in header"
            :key="index"
          >
            {{ title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="text-center table_desserts"
          v-for="item in desserts"
          :key="item.num"
        >
          <td width="100px" height="50px">{{ item.num }}</td>
          <td width="100px" height="50px">{{ item.division }}</td>
          <td width="100px" height="50px">{{ item.require }}</td>
          <td width="600px" height="50px">{{ item.title }}</td>
          <td width="300px" height="50px">{{ item.period }}</td>
          <td width="100px" height="50px">{{ item.progress }}</td>
        </tr>
      </tbody>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      header: ["번호", "구분", "모집분야", "제목", "접수기간", "진행상태"],
      desserts: [
        {
          num: "1",
          division: "",
          require: "",
          title: "추후 공지 예정",
          period: "",
          progress: "",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.news_section {
  display: block;
  margin-top: 80px;
  height: 70vh;

  .title {
    font-size: 3rem;
    margin: 10% 0% 1% 15%;
    font-weight: bold;
    font-family: "Pretendard-Regular";
  }
}

.table_con {
  margin: 0% 15%;
  border-top: 1px solid #a5a5a5;
  border-bottom: 1px solid #dcdcdc;
  box-sizing: border-box;
  display: inline-block;

  .table_header {
    padding: 15px;
  }

  .table_desserts {
    padding: 12px;
    box-shadow: 0px -1px 0px 0px #a5a5a5;
  }
}
</style>
