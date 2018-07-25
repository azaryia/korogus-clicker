<template>
  <div class="box-product">
    <div class="row">
    </div>
      <div class="row" v-for="product in products" :key="product.id">
        <div v-for="purchased in product.purchased" :key="purchased">
          <img class="img" v-bind:src="product.image">
          <p>{{purchased}}</p>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'BoxProduct',
    computed: {
      products: function () {
        return this.$store.state.products;
      },
    }
  };
</script>

<style lang="scss">
  .box-product {
    overflow-y: auto;
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: start;

    .row {
      height: 10rem;
      width: 100%;

      .img {
        margin-left: 1rem;
      }
    }
  }
</style>