<template>
  <div>
    <Hero />
    <Footer />
  </div>
</template>

<script>
import Hero from "../components/Hero";
import Footer from "../components/Footer";
export default {
  name: "home",
  components: {
    Hero,
    Footer
  }
};
</script>
<style lang="css" scoped>
  .purple{
    border: 1px solid mediumpurple;
    border-radius: 3px;
  }
</style>
