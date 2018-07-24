<template>
  <div class="home">
    <Counter></Counter>
    <BuyProducts></BuyProducts>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from "@/components/Counter.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import BuyProducts from "@/components/BuyProducts.vue";

export default {
  name: "home",
  components: {
    Counter,
    HelloWorld,
    BuyProducts
  }
};
</script>
