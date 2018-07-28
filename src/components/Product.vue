<template>
  <div class="product">
    <h1>{{product.name}}</h1>
    <slot></slot>
    <Price :price="product.price"></Price>
    <p v-if="product && product.description">{{product.description}}</p>
    <button type="submit" v-bind:class="{'disable': product.price > $store.state.korogus}" @click="buyProduct">Buy {{product.name}}</button>
  </div>
</template>

<script>
import Price from "@/components/Price.vue";
export default {
  name: "Product",
  components: {
    Price
  },
  props: {
    action: Object,
    product: Object
  },
  methods: {
    buyProduct: function() {
      if (this.product.price <= this.$store.state.korogus) {
        this.$store.commit("BuyProduct", {
          productId: this.product.id
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.product {
  color: #ffffff;
  margin: 0.5rem;
  min-width: 3.2rem;

  button {
    position: relative;
    background-color: #57be32;
    border: none;
    padding: 1rem 0.5rem;
    width: 10rem;
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
      background: #57be32;
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
