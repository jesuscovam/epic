<template lang="html">
  <div class="container">
    <div class="columns">
      <div class="column is-one-third center">
        <h1 class="title center">Experiencias 🗺️</h1>
      </div>
    </div>
    <div class="columns">
      <!-- Exp1 -->
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
                <p v-if="view.reservar" class="red">Requiere reservación</p>
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
      <div class="column center buttons">
        <button class="button" @click="regresar">Regresar</button>
        <button
          class="button is-success"
          @click="mostrarReservas"
          v-if="reserva.length > 0"
        >
          Reservar
        </button>
        <!-- MODAL -->
        <b-modal
          :active.sync="modal"
          :width="640"
          scroll="keep"
          class="can-cancel"
        >
          <div class="modal-card">
            <header class="modal-card-header">
              <p class="modal-card-head title is-one-third ">
                Reservación 🗓
              </p>
            </header>
            <section class="modal-card-body">
              <p>
                De las experiencias que escogiste,
                <strong>{{ reserva }}</strong> para el
                <strong>{{ fecha }}</strong> requiere reservación. Si gustas
                podemos agendarla con la siguiente información
              </p>
              <form @submit.prevent="enviarData">
                <b-field label="Nombre">
                  <b-input
                    type="name"
                    v-model="enviar.nombre"
                    placeholder="tu nombre"
                    required
                  >
                  </b-input>
                </b-field>
                <b-field label="Correo">
                  <b-input
                    type="email"
                    v-model="enviar.correo"
                    placeholder="tu correo"
                    required
                  >
                  </b-input>
                </b-field>
                <b-field label="WhatsApp">
                  <b-input
                    type="text"
                    v-model="enviar.numero"
                    placeholder="tu numero"
                    required
                  >
                  </b-input>
                </b-field>
                <button class="button is-success" type="submit">
                  Enviar
                </button>
              </form>
            </section>
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
      reservas: [],
      enviar: {
        nombre: "",
        correo: "",
        numero: ""
      }
    };
  },
  async created() {
    const resp = await axios.get("https://epic-4408f.firebaseio.com/.json");

    // this.views.push(resp.data.cenotes.tulum);

    switch (this.$store.state.valor3) {
      case "Tulum":
        this.views.push(resp.data.cenotes.tulum);
        break;

      case "Puerto Morelos":
        this.views.push(resp.data.cenotes.pto);
        break;

      case "Playa del Carmen":
        this.views.push(resp.data.cenotes.playa);
        break;
      default:
        this.views.push(resp.data.cenotes.tulum);
        break;
    }
    switch (this.$store.state.valor1) {
      case "Parques":
        this.views.push(resp.data.playa.parques.xcaret);
        break;

      case "Fiestas":
        this.views.push(resp.data.playa.antros.mix.coco);
        break;

      case "Arqueologia":
        this.views.push(resp.data.ruinas.merida.chichen);
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
  },
  methods: {
    regresar() {
      this.$router.push("encuesta");
    },
    cerrar() {
      this.modal = false;
    },
    mostrarReservas() {
      if (!this.fecha) {
        alert("Hace falta una fecha");
        return;
      }
      this.modal = true;
      this.reservas = this.views.filter(experiencias => experiencias.reservar);
    },
    async enviarData() {
      const enviarData = {
        ...this.enviar,
        experiencia: this.reserva,
        fecha: this.fecha
      };
      const enviar = await axios.post(
        "https://cors-anywhere.herokuapp.com/https://epic-4408f.firebaseio.com/reservas.json",
        enviarData
      );
      console.log(enviar);
      this.$router.push("/");
    }
  },
  computed: {
    agendar() {
      const reservas = this.views.filter(experiencia => experiencia.reservar);
      return reservas;
    },
    fecha() {
      if (this.fechas) {
        const fecha = `${this.fechas.getDate()}-${this.fechas.getMonth()}-${this.fechas.getYear() -
          100}`;
        return fecha;
      } else {
        return "";
      }
    },
    reserva() {
      const exp = this.views.filter(exp => exp.reservar);
      const nombre = exp.map(ex => ex.nombre);
      console.log(exp);
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

.red{
  color: salmon;
}

.header{
  text-align: center;
}

.buttons{
  padding: 20px
}
</style>
