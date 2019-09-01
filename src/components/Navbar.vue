<template lang="html">
  <b-navbar type="is-primary">
    <template slot="brand">
      <b-navbar-item href="/">
        <h2 class="subtitle">epic</h2>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item to="/">
        <button class="button is-primary">
          Encuesta
        </button>
      </b-navbar-item>
      <b-navbar-item to="/">
        <button class="button">
          Contacto
        </button>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style lang="css" scoped></style>
