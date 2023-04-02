<template>
  <section class="contact_section">
    <div class="back_img">
      <span class="title">웹사이트 제작 요청</span>
    </div>
    <div class="form_con">
      <div class="form_head">
        <div class="selected">
          <span class="form">제작 형태</span>
          <span class="type">제작 타입</span>
          <span class="cost">예상 비용</span>
        </div>
        <span class="info">기본 정보</span>
      </div>
      <base-card>
        <v-form class="info_form">
          <v-container>
            <v-item-group selected-class="Blue">
              <v-row>
                <v-col
                  v-for="(item, index) in develop_form"
                  :key="index"
                  cols="12"
                  md="3"
                >
                  <v-item v-slot="{ selectedClass, toggle }">
                    <v-btn
                      :class="['d-flex align-center', selectedClass]"
                      dark
                      height="50"
                      width="100"
                      @click="toggle"
                    >
                      <div class="flex-grow-1 text-center">
                        {{ item }}
                      </div>
                    </v-btn>
                  </v-item>
                </v-col>
              </v-row>
            </v-item-group>
            <v-item-group multiple selected-class="bg-primary">
              <v-row>
                <v-col
                  v-for="(item, index) in type"
                  :key="index"
                  cols="12"
                  md="3"
                >
                  <v-item v-slot="{ selectedClass, toggle }">
                    <v-btn
                      :class="['d-flex align-center', selectedClass]"
                      dark
                      height="50"
                      width="100"
                      @click="toggle"
                    >
                      <div class="flex-grow-1 text-center">
                        {{ item }}
                      </div>
                    </v-btn>
                  </v-item>
                </v-col>
              </v-row>
            </v-item-group>
            <v-item-group selected-class="bg-primary">
              <v-row>
                <v-col cols="12" md="5">
                  <v-select
                    label="비용 선택"
                    :items="cost"
                    variant="solo"
                  ></v-select>
                </v-col>
              </v-row>
            </v-item-group>

            <v-row>
              <v-col cols="12">
                <v-text-field
                  variant="underlined"
                  v-model="company"
                  label="회사명"
                  hint="회사명을 입력해 주세요"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  variant="underlined"
                  v-model="manager"
                  label="담당자명"
                  hint="담당자명을 입력해 주세요"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  variant="underlined"
                  v-model="phone_num"
                  label="휴대전화"
                  hint="휴대전화 번호를 입력해 주세요"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-file-input
                  variant="underlined"
                  v-model="images"
                  :multiple="true"
                  label="이미지를 넣어주세요"
                  accept="image/*"
                  @change="preview"
                ></v-file-input>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                variant="underlined"
                v-for="(image, index) in imagePreviews"
                :key="index"
                cols="4"
              >
                <v-img :src="image" width="100%"></v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-textarea
                  variant="outlined"
                  v-model="email"
                  label="프로젝트에 대한 자세한 설명을 적어주세요"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-checkbox
              v-model="checkbox1"
              label="개인정보 수집 및 이용약관에 동의합니다.(필수)"
            ></v-checkbox>
          </v-container>
        </v-form>
        <v-btn
          class="d-flex bg-primary"
          style="margin: auto; width: 240px; height: 60px"
          >문의하기</v-btn
        >
      </base-card>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
  data: () => ({
    selectedDate: null,
    valid: false,

    images: [],
    imagePreviews: [],

    develop_form: ["신규제작", "리뉴얼"],
    type: ["반응형웹", "PC웹", "모바일웹", "기타"],
    cost: ["500만원 이하", "500만원 이상"],
    period: [],
    checkbox1: false,
  }),
  methods: {
    preview() {
      this.imagePreviews = [];
      for (let i = 0; i < this.images.length; i++) {
        let reader = new FileReader();
        reader.readAsDataURL(this.images[i]);
        reader.onloadend = () => {
          this.imagePreviews.push(reader.result);
        };
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.contact_section {
  margin-top: 4%;
  display: flex;

  .back_img {
    background-image: URL("@/assets/sub/contact_req.svg");
    background-size: cover;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;

    .title {
      font-size: 2.5rem;
      color: white;
      font-family: "Pretendard-Regular";
    }
  }

  .form_con {
    display: flex;
    margin: 3%;

    .form_head {
      display: grid;
      margin: 4px;
      font-size: 1.9rem;
      height: 33%;
      width: 16%;
      font-weight: bold;
      font-family: "Pretendard-Regular";

      .selected {
        width: 100%;
        line-height: 65px;
      }
    }
  }

  .info_form {
    width: 116%;
  }
}
</style>
