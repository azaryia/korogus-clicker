<template>
  <div class="buy-product">
    <Product :product="product" v-for="product in products" :key="product.id">
      <img width="80" v-bind:src="product.image">
    </Product>
  </div>
</template>

<script>
  import Product from "@/components/Product.vue";
  export default {
    name: 'BuyProduct',
    computed: {
      products: function () {
        return this.$store.state.products;
      },
    },
    components: {
      Product
    }
  };
</script>

<style lang="scss">
  .buy-product {
    overflow-y: auto;
    width: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>