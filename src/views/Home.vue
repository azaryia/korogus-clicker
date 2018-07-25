<template>
  <div class="home">
    <Counter></Counter>
    <BoxProduct></BoxProduct>
    <BuyProducts></BuyProducts>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from "@/components/Counter.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import BuyProducts from "@/components/BuyProducts.vue";
import BoxProduct from "@/components/BoxProducts.vue";

export default {
  name: "home",
  components: {
    Counter,
    HelloWorld,
    BuyProducts,
    BoxProduct
  }
};
</script>

<style lang="scss">
  .home {
    display: flex;
    overflow: hidden;
  }
</style>
