<template>
  <div id="app">
    <mariachi-header/>
    <router-view/>
    <mariachi-footer/>
  </div>
</template>

<script>
import MariachiHeader from "@/components/Header.vue";
import MariachiFooter from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    MariachiHeader,
    MariachiFooter
  }
};
</script>

<style lang="scss">
@import "./sass.config.scss";
</style>




