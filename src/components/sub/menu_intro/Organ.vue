<template>
  <section class="organ_sectioin">
    <span class="title">Organization Chart</span>
    <div class="organ_img"><img src="@/assets/sub/organize.svg" /></div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.organ_sectioin {
  height: 100vh;
  background-color: #f7faff;
  .title {
    margin: 10% 15%;
    font-size: 3rem;
    font-family: sans-serif;
    font-weight: bold;
    position: absolute;
  }
  .organ_img {
    padding: 18% 18% 0% 18%;
  }
}
</style>
