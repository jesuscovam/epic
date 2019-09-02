<template lang="html">
  <div class="column is-one-third is-centered is-narrow center">
    <div class="box center">
      <h1 class="title">Encuesta</h1>
      <b-field :label="preguntas[0].pregunta">
        <b-select
          placeholder="escoje"
          class="center"
          v-model="respuestas.valor1"
        >
          <option
            v-for="respuesta in preguntas[0].respuestas"
            :key="respuesta.id"
            >{{ respuesta }}</option
          >
        </b-select>
      </b-field>
      <b-field :label="preguntas[1].pregunta">
        <b-select
          placeholder="escoje"
          class="center"
          v-model="respuestas.valor2"
        >
          <option
            v-for="respuesta in preguntas[1].respuestas"
            :key="respuesta.id"
            >{{ respuesta }}</option
          >
        </b-select>
      </b-field>
      <p>Estados: {{ valores }}</p>
      <button class="button is-primary" @click="enviar">
        Enviar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      respuestas: {
        valor1: "",
        valor2: ""
      },
      preguntas: [
        {
          pregunta: "¿Qué te gustaría disfrutar en la Riviera Maya?",
          respuestas: ["Parques", "Fiestas", "Comida"]
        },
        {
          pregunta: "¿Qué tipo de música escuchas en rotación?",
          respuestas: ["Rock", "Reggaeton", "Electronica", "Salsa"]
        }
      ]
    };
  },
  methods: {
    enviar() {
      this.$store.dispatch("addValues", this.respuestas);
      this.$router.push("muestras");
    }
    // filtro() {
    //   switch (this.respuestas.valor1) {
    //     case "Parques":
    //       this.respuestasCalc.valor1 = 10;
    //       break;
    //
    //     case "Fiestas":
    //       this.respuestasCalc.valor1 = 20;
    //       break;
    //
    //     case "Comida":
    //       this.respuestasCalc.valor1 = 30;
    //       break;
    //   }
    //   this.respuestasCalc.valor2 = this.respuestas.valor2;
    // }
  },
  computed: {
    valores() {
      return this.$store.state;
    }
  }
};
</script>

<style lang="css" scoped>
.center {
  text-align: center;
  vertical-align: middle;
  margin: 0 auto;
}
</style>
