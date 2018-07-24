<template>
  <div>
    <Product :product="product" v-for="product in products" :key="product.id">
      <img v-bind:src="product.image">
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

<style>

</style>