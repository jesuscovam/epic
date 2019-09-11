<template lang="html">
  <div class="column is-one-third is-centered is-narrow center">
    <div class="box center">
      <h1 class="title">Encuesta 🔍</h1>
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
      <b-field :label="preguntas[2].pregunta">
        <b-select
          placeholder="escoje"
          class="center"
          v-model="respuestas.valor3"
        >
          <option
            v-for="respuesta in preguntas[2].respuestas"
            :key="respuesta.id"
            >{{ respuesta }}</option
          >
        </b-select>
      </b-field>

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
        valor2: "",
        valor3: ""
      },
      preguntas: [
        {
          pregunta: "¿Qué te gustaría disfrutar en la Riviera Maya?",
          respuestas: ["Parques", "Fiestas", "Arqueologia"]
        },
        {
          pregunta: "¿Qué tipo de música escuchas en rotación?",
          respuestas: ["Rock", "Reggaeton", "Electronica", "Salsa"]
        },
        {
          pregunta: "¿Cuál es tu destino en la Riviera Maya?",
          respuestas: ["Playa del Carmen", "Puerto Morelos", "Tulum"]
        }
      ]
    };
  },
  methods: {
    enviar() {
      this.$store.dispatch("addValues", this.respuestas);
      this.$router.push("muestras");
    }
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
