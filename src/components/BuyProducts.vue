<template>
  <div class="buy-products">
    <Product :product="product" v-for="product in products" :key="product.id">
      <img height="150" v-bind:src="product.image">
    </Product>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Product from "@/components/Product.vue";
export default {
  name: "BuyProduct",
  computed: {
    ...mapGetters({
      products: "products"
    })
  },
  components: {
    Product
  }
};
</script>

<style lang="scss">
.buy-products {
  z-index: 2;
  overflow-y: auto;
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  background: {
    image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),
      url("../assets/images/bg-2.jpg");
    position-x: 71%;
    repeat: no-repeat;
    size: cover;
  }
}
</style>
