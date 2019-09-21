<template lang="html">
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="hero left">
          <p>Reserva</p>
          <p>Experiencias en</p>
          <p>La Riviera Maya</p>
          <p id="realiza" class="center">Realiza la encuesta</p>
          <router-link to="encuesta" class="center">
            <button class=" button is-info is-rounded center">
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
    <div class="columns"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.center{
  margin-top: 15px;
  text-align: center !important;
}

.left{
  margin-top: 90px;
  text-align: left;
  font-weight: bold;
  font-size: 3em;
}

#realiza{
  margin-top: 90px;
  font-weight: normal;
  font-size: .5em;
}
</style>
