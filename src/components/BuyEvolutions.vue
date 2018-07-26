<template>
  <div class="buy-evolutions">
    <Evolution :evolution="evolution" v-for="evolution in evolutionsObject" :key="evolution.id">
      <img height="50" v-bind:src="evolution.image">
    </Evolution>
  </div>
</template>

<script>
import Evolution from "@/components/Evolution.vue";
export default {
  name: "BuyEvolutions",
  data: function() {
    return {
      evolutions: {}
    };
  },
  computed: {
    evolutionsObject: function() {
      let vm = this;
      return (vm.evolutions = this.$store.state.evolutions);
    }
  },
  components: {
    Evolution
  }
};
</script>

<style lang="scss">
.buy-evolutions {
  font-size: 0.8rem;
  overflow-x: auto;
  display: flex;
  background: {
    image: linear-gradient(rgba(226, 18, 98, 0.5), rgba(226, 18, 98, 1)),
      url("../assets/images/bg-3.jpg");
    position-x: 71%;
    repeat: no-repeat;
    size: cover;
  }
  height: 70rem;
}
</style>
