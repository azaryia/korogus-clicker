<template>
  <div class="buy-evolutions">
    <Evolution v-if="evolution.disable <= korogusSeconds" :evolution="evolution" v-for="evolution in evolutions" :key="evolution.id">
      <img height="50" v-bind:src="evolution.image">
    </Evolution>
  </div>
</template>

<script>
import Evolution from "@/components/Evolution.vue";
export default {
  name: "BuyEvolutions",
  computed: {
    evolutions: function() {
      return this.$store.state.evolutions;
    },
    korogusSeconds: function() {
      return this.$store.state.korogusSeconds;
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
