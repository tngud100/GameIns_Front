<template>
  <HeaderNav />
  <Contact />
  <Footer />
</template>


<script>
import HeaderNav from "@/components/header/ScrollNav.vue";
import Contact from "@/components/sub/menu_contact/contact.vue";
import Footer from "@/components/footer/Footer.vue";
export default {
    components: {
        HeaderNav,
        Contact,
        Footer,
    }
}
</script>

<style>

</style>