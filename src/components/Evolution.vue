<template>
  <div class="evolution">
    <h1>{{evolution.name}}</h1>
    <slot></slot>
    <Price :price="evolution.price"></Price>
    <p v-if="evolution && evolution.description">{{evolution.description}}</p>
    <button type="submit" v-bind:class="{'disable': evolution.price > $store.state.korogus}" @click="buyEvolution">Buy {{evolution.name}}</button>
  </div>
</template>

<script>
import Price from "@/components/Price.vue";
export default {
  name: "Evolution",
  components: {
    Price
  },
  props: {
    evolution: Object
  },
  methods: {
    buyEvolution: function() {
      if (this.evolution.price <= this.$store.state.korogus) {
        this.$store.commit("BuyEvolution", {
          evolutionId: this.evolution.id
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.evolution {
  color: #ffffff;
  margin: auto;
  padding: {
    left: 1rem;
    right: 1rem;
  }

  button {
    position: relative;
    background-color: #77b5cd;
    border: none;
    padding: 0.6em 0.3rem;
    width: 8rem;
    text-align: center;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;

    &:hover {
      background: #fff;
      box-shadow: 0px 2px 10px 5px #97b1bf;
      color: #000;
    }

    &:after {
      content: "";
      background: #77b5cd;
      display: block;
      position: absolute;
      padding: 1rem 0.5rem;
      opacity: 0;
      transition: all 0.8s;
    }

    &:active:after {
      padding: 0;
      margin: 0;
      opacity: 1;
      transition: 0s;
    }
    &.disable {
      background: #be2d3a;
      color: #ffffff;
    }
  }
}
</style>
