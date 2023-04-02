<template>
    <HeaderNav />
    <News />
    <Footer />
</template>

<script>
import HeaderNav from "@/components/header/ScrollNav.vue";
import News from "@/components/sub/menu_news/news.vue";
import Footer from "@/components/footer/Footer.vue";
export default {
    components: {
        HeaderNav,
        News,
        Footer,
    }
}
</script>

<style></style>