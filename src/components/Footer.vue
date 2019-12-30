<template lang="html">
  <div class="footer">
    <p>
    <hr class="purple">
    &copy; epic/Jesus Cova {{ year }}</p>
  </div>
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
.purple{
  border: 1px solid mediumpurple;
  border-radius: 3px;
}
.footer{
  text-align: left;
  padding-top: 0;
  margin-top: 0;

}
</style>
