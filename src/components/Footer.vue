<template lang="html">
  <footer class="footer">
    <p>&copy; epic {{ year }}</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      date: new Date()
    };
  },
  computed: {
    year() {
      return this.date.getFullYear();
    }
  }
};
</script>

<style lang="css" scoped>
.footer{
  background-color: #8c67ef;
  text-align: center;
}
</style>
