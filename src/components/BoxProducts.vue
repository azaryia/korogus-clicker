<template>
  <div class="box-product">
      <div :class="'bg-' + product.bgColor" v-if="product && product.purchased && product.purchased > 0" class="row" v-for="product in products" :key="product.id">
        <p>{{product.name}} : {{product.purchased}} purchased</p>
        <div class="product-image">
          <div v-for="purchased in parseInt(product.purchased)" :key="product.id + purchased">
            <img class="img" height="70" v-bind:src="product.image">
          </div>
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
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: start;

  .row {
    color: #ffffff;
    padding: 0.8rem;
    height: 10rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    &.bg-ff9ee1 {
      background-color: #ff9ee1;
    }
    &.bg-6eb776 {
      background-color: #6eb776;
    }
    &.bg-33b2e0 {
      background-color: #33b2e0;
    }
    &.bg-d6a4dd {
      background-color: #d6a4dd;
    }
    &.bg-ff7a3d {
      background-color: #ff7a3d;
    }
    &.bg-a93fc1 {
      background-color: #a93fc1;
    }
    &.bg-727172 {
      background-color: #727172;
    }
    p {
      text-align: left;
      font-size: 1.2rem;
    }
    .product-image {
      display: flex;
      align-items: center;
      max-width: 100%;
      .img {
        margin-left: 1rem;
      }
    }
  }
}
</style>
