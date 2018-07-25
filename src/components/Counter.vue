<template>
  <div class="counter">
    <h1 class="bg-opacity">{{ totalKorogus }} Korogus</h1>
    <h2 class="bg-opacity">{{secondsKorogus}} Korgus for second</h2>
    <img alt="tree-mojo" src="@/assets/images/tree-mojo.png" width="550" @click="increment">
  </div>
</template>

<script>
export default {
  name: "counter",
  computed: {
    totalKorogus: function() {
      console.log(this.$store.state.korogus);
      return Math.floor(parseFloat(this.$store.state.korogus));
    },
    secondsKorogus: function() {
      return Math.floor(parseFloat(this.$store.state.korogusSeconds));
    }
  },
  mounted: function() {
    setInterval(
      function() {
        if (this.$store.state.korogus && this.$store.state.korogus > 0) {
          this.$store.commit("PopKorogu");
        }
      }.bind(this),
      1000
    );
  },
  methods: {
    increment: function() {
      this.$store.commit("CickKorogu");
    }
  }
};
</script>

<style lang="scss">
.counter {
  color: #ffffff;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: {
    image: url("../assets/images/bg.jpg");
    position: center;
    repeat: no-repeat;
    size: cover;
  }
  .bg-opacity {
    background-color: black;
  }
}
</style>
