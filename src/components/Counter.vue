<template>
  <div class="counter">
    <p>{{ totalKorogus }} Korogus
      <br>{{secondsKorogus}} Korogus for second</p>
    <img alt="tree-mojo" src="@/assets/images/tree-mojo.png" width="550" @click="increment">
  </div>
</template>

<script>
export default {
  name: "Counter",
  computed: {
    totalKorogus: function() {
      let korogus = new Intl.NumberFormat("de-DE").format(
        Math.floor(parseFloat(this.$store.state.korogus))
      );
      document.title = korogus + " Korogus";
      return korogus;
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
  position: relative;
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
  p {
    font-size: 1.8rem;
    background: {
      image: url("../assets/images/ribbon.png");
      position: center;
      repeat: no-repeat;
      size: cover;
    }
    display: block;
    transform: translate(0, 80%);
    padding: 0.7rem;
    width: 100%;
    height: auto;
  }
}
</style>
