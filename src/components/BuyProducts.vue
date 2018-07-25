<template>
  <div class="buy-product">
    <Product class="product" :product="product" v-for="product in products" :key="product.id">
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
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background: {
      image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url('../assets/images/bg-2.jpg');
      position-x: 71%;
      repeat: no-repeat;
      size: cover;
    }

    .product {
      color: #ffffff;
      margin-left: 1rem;
    }
  }
</style>