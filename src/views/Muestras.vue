<template lang="html">
  <div class="container">
    <div class="columns">
      <div class="column is-one-third center">
        <h1 class="title center">Experiencias</h1>
      </div>
    </div>
    <div class="columns">
      <div
        class="column is-one-third center"
        v-for="view in views"
        :key="view.id"
      >
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="view.img" :alt="view.nombre" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title">{{ view.nombre }}</p>

                {{ view.desc }}
                <br />
                <a
                  class="subtitle is-6 map"
                  :href="view.map"
                  target="_newBlank"
                >
                  <b-icon
                    pack="fas"
                    icon="map-pin"
                    type="is-primary"
                    size="is-small"
                  >
                  </b-icon>
                  Mapa</a
                >
                <b-datepicker
                  v-if="view.reservar"
                  v-model="fechas"
                  placeholder="Type or select a date..."
                  icon="calendar-today"
                  editable
                >
                </b-datepicker>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column center ">
        <button class="button" @click="regresar">Regresar</button>
        <button class="button is-success" @click="mostrarReservas">
          Reservar
        </button>
        <b-modal
          :active.sync="modal"
          :width="640"
          scroll="keep"
          class="can-cancel"
        >
          <div class="modal-card">
            <header class="modal-card-header">
              <p class="modal-card-head title">
                {{ reserva }}
                {{ dia }}
              </p>
            </header>
          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      views: [],
      modal: false,
      fechas: "",
      reservas: []
    };
  },
  async created() {
    const resp = await axios.get("https://epic-4408f.firebaseio.com/.json");
    this.views.push(resp.data.tulum.cenotes.ruta);
    switch (this.$store.state.valor1) {
      case "Parques":
        this.views.push(resp.data.playa.parques.xcaret);
        break;

      case "Fiestas":
        this.views.push(resp.data.playa.antros.mix.coco);
        break;

      case "Comida":
        this.views.push(resp.data.playa.rest.mex.laparrilla);
        break;
    }

    switch (this.$store.state.valor2) {
      case "Rock":
        this.views.push(resp.data.playa.locales.rock.kit);
        break;

      case "Reggaeton":
        this.views.push(resp.data.playa.locales.reggaeton.vaquita);
        break;

      case "Electronica":
        this.views.push(resp.data.playa.locales.elect.cero);
        break;

      case "Salsa":
        this.views.push(resp.data.playa.locales.salsa.bodega);
        break;
    }
    console.log(this.valores);
  },
  methods: {
    regresar() {
      this.$router.push("encuesta");
    },
    cerrar() {
      this.modal = false;
    },
    mostrarReservas() {
      this.modal = true;
      this.reservas = this.views.filter(experiencias => experiencias.reservar);
      console.log(this.reservas);
    }
  },
  computed: {
    valores() {
      return this.cards;
    },
    agendar() {
      const reservas = this.views.filter(experiencia => experiencia.reservar);
      return reservas;
    },
    dia() {
      if (this.fechas) {
        return `${this.fechas.getDate()}-${this.fechas.getMonth()}-${this.fechas.getYear() -
          100}`;
      } else {
        return "hola";
      }
    },
    reserva() {
      const exp = this.views.filter(exp => exp.reservar);
      const nombre = exp.map(ex => ex.nombre);
      return nombre.toString();
    }
  }
};
</script>

<style lang="css" scoped>
.center{
  text-align: center;
  margin: 0 auto;
}
.card{
  margin-top: 50px;
  display: block;
}

.map{
  margin-top: 20px;
  padding-top: 20px
}
</style>
