<template lang="html">
  <b-navbar type="is-primary">
    <template slot="brand">
      <b-navbar-item tag="router-link" to="/">
        <h2 class="subtitle">epic</h2>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="router-link" to="/encuesta">
        <button class="button  is-rounded is-outlined">
          Encuesta
        </button>
      </b-navbar-item>
      <b-navbar-item tag="router-link" to="/">
        <button class="button is-rounded">
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
