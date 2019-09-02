<template lang="html">
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="hero center">
          <h1 class="title">Epic</h1>
          <h2 class="subtitle">Reserva experiencias en la Riviera Maya</h2>
          <router-link to="encuesta">
            <button class=" button is-primary is-rounded">
              Encuesta
            </button>
          </router-link>
        </div>
      </div>
      <div class="column">
        <figure class="image">
          <img src="../assets/epic-phone.png" alt="epic" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.center{
  margin-top: 90px;
text-align: center;
}
</style>
