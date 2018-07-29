<template>
  <div class="box-products">
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
  name: "BoxProducts",
  computed: {
    products: function() {
      return this.$store.getters.products;
    }
  }
};
</script>

<style lang="scss">
.box-products {
  z-index: 1;
  overflow-x: hidden;
  overflow-y: auto;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: start;
  background: {
    image: linear-gradient(rgba(65, 66, 91, 0.5), rgb(12, 66, 77)),
      url("../assets/images/bg-4.jpg");
    position-x: 71%;
    repeat: no-repeat;
    size: cover;
  }

  .row {
    overflow-x: hidden;
    color: #ffffff;
    padding: 0.8rem;
    min-height: 10rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    &.bg-ff9ee1 {
      background-color: rgba(255, 158, 225, 0.66);
    }
    &.bg-6eb776 {
      background-color: rgba(110, 183, 118, 0.66);
    }
    &.bg-33b2e0 {
      background-color: rgba(51, 178, 224, 0.66);
    }
    &.bg-d6a4dd {
      background-color: rgba(214, 164, 221, 0.66);
    }
    &.bg-ff7a3d {
      background-color: rgba(255, 122, 61, 0.66);
    }
    &.bg-a93fc1 {
      background-color: rgba(169, 63, 193, 0.66);
    }
    &.bg-727172 {
      background-color: rgba(114, 113, 114, 0.66);
    }
    &.bg-5277e5 {
      background-color: rgba(82, 119, 229, 0.67);
    }
    &.bg-dee1e2 {
      background-color: rgba(222, 225, 226, 0.66);
    }
    &.bg-ffd530 {
      background-color: rgba(255, 213, 48, 0.67);
    }
    &.bg-463aa5 {
      background-color: rgba(70, 58, 165, 0.67);
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
