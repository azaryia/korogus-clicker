<template>
  <div class="counter">
    <div class="stat">
      <Price :price="totalKorogus"></Price>
      <Price class="font-small" :price="secondsKorogus">
        <template>Korogus for second</template>
      </Price>
    </div>
    <img alt="tree-mojo" src="@/assets/images/tree-mojo.png" width="550" @click="increment">
  </div>
</template>

<script>
import Price from "@/components/Price.vue";
export default {
  name: "Counter",
  components: {
    Price
  },
  computed: {
    totalKorogus: function() {
      document.title =
        (this.$children[0] && this.$children[0].$refs.koroguTotal.outerText) ||
        "";
      return this.$store.state.korogus;
    },
    secondsKorogus: function() {
      return this.$store.state.korogusSeconds;
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
  z-index: 0;
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
  .stat {
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
  p {
    font-size: 1.8rem;
    margin: 0.5rem;

    &.font-small {
      font-size: 1.3rem;
    }
  }
}
</style>
