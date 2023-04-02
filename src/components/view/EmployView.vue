<template>
    <HeaderNav />
    <employ />
    <Footer />
  </template>
  
  
  <script>
  import HeaderNav from "@/components/header/ScrollNav.vue";
  import employ from "@/components/sub/menu_employ/employ.vue";
  import Footer from "@/components/footer/Footer.vue";
  export default {
      components: {
          HeaderNav,
          employ,
          Footer,
      }
  }
  </script>
  
  <style>
  
  </style>