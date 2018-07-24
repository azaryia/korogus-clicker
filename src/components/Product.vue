<template>
  <div>
    <h1>{{product.name}}</h1>
    <slot></slot>
    <p>{{product.price}}</p>
    <p v-if="product && product.description">{{product.description}}</p>
    <button type="submit" @click="buyProduct">Buy {{product.name}}</button>
    <p v-show="msg">{{msg}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Product',
    props: {
      action: Object,
      product: Object
    },
    data: function () {
      return {
        msg: null
      }
    },
    methods: {
      buyProduct: function () {
        this.msg = null;
        if (this.product.price < this.$store.state.korogus) {
          this.$store.commit('BuyProduct', { productId: this.product.id});
          return (this.msg = 'Yes, You can buy product' + this.product.name);
        }
        return (this.msg = 'Sorry, You cant buy product' + this.product.name);
      }
    }
  };
</script>

<style>

</style>