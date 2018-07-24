<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
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
