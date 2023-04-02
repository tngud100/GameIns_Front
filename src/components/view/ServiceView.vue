<template>
    <HeaderNav />
    <service />
    <service_desc />
    <Footer />
</template>
<script>
import HeaderNav from "./../header/HeaderNav.vue";
import service from '../sub/menu_service/service_intro.vue';
import service_desc from '../sub/menu_service/service_desc.vue';
import Footer from "./../footer/Footer_sub.vue";
export default {
    components: {
        service,
        service_desc,
        HeaderNav,
        Footer
    }

}
</script>
<style></style>