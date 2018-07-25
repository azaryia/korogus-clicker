<template>
  <div class="box-product">
    <div class="row">
    </div>
      <div v-if="product && product.purchased && product.purchased > 0" class="row" v-for="product in products" :key="product.id">
        <p>{{product.purchased + ' ' + product.name}}</p>
        <div v-for="purchased in parseInt(product.purchased)" :key="product.id + purchased">
          <img class="img" width="50" v-bind:src="product.image">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "BoxProduct",
  computed: {
    products: function() {
      return this.$store.state.products;
    }
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
    display: flex;

    .img {
      margin-left: 1rem;
    }
  }
}
</style>
