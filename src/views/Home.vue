<template>
  <div class="home">
    <Counter></Counter>
    <BoxProduct></BoxProduct>
    <div class="shop">
      <BuyEvolutions></BuyEvolutions>
      <BuyProducts></BuyProducts>
    </div>
    <KoroguLucky></KoroguLucky>
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue";
import BuyProducts from "@/components/BuyProducts.vue";
import BoxProduct from "@/components/BoxProducts.vue";
import BuyEvolutions from "@/components/BuyEvolutions.vue";
import KoroguLucky from "@/components/KoroguLucky.vue";

export default {
  name: "home",
  components: {
    Counter,
    BuyProducts,
    BoxProduct,
    BuyEvolutions,
    KoroguLucky
  }
};
</script>

<style lang="scss">
.home {
  display: flex;
  overflow: hidden;
  height: 100vh;
  position: relative;
  .shop {
    display: flex;
    flex-direction: column;
    width: 20%;
  }
}
</style>
