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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column ">
        <button class="button is-success is-pulled-right">Reservar</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      views: []
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
  computed: {
    valores() {
      return this.cards;
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
