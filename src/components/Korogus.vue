<template>
  <div class="counter">
    <p class="count">{{ totalKorogus }}</p>
    <p>{{secondsKorogus}}</p>
    <img alt="tree-mojo" src="@/assets/images/tree-mojo.png" width="550" @click="increment">
  </div>
</template>

<script>
  export default {
    name: "counter",
    computed: {
      totalKorogus: function () {
        return Math.floor(1 * this.$store.state.korogus);
      },
      secondsKorogus: function () {
        return Math.floor(1 * this.$store.state.korogusSeconds);
      },
    },
    mounted: function () {
      setInterval(function () {
        this.$store.commit('PopKorogu');
      }.bind(this), 1000);
    },
    methods: {
      increment: function() {
        this.$store.commit('CickKorogu');
      }
    }
  };
</script>

<style lang="scss">
  .counter {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: {
      image: url('../assets/images/bg.jpg');
      position: center;
      repeat: no-repeat;
      size: cover;
    }
  }
</style>
