<template lang="html">
  <b-navbar type="is-primary">
    <template slot="brand">
      <b-navbar-item tag="router-link" to="/">
        <h2 class="subtitle">epic</h2>
      </b-navbar-item>
    </template>
    <template slot="end">
        <b-navbar-item tag="router-link" to="/encuesta" class="white">
          Encuesta
        </b-navbar-item>
        <b-navbar-item tag="p" class="white">
          |
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/" class="white">
          Contacto
        </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.white{
  color: white !important;
}
</style>
