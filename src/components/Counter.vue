<template>
  <div>
    <span class="count">{{ totalKorogus }}</span>
    <img alt="tree-mojo" src="../assets/images/tree-mojo.png" width="550" @click="increment">
  </div>
</template>

<script>
  export default {
    name: "counter",
    computed: {
      totalKorogus: function () {
        return Math.round(1 * this.$store.state.korogus);
      },
    },
    methods: {
      increment: function() {
        this.$store.commit('CickKorogu');
      }
    }
  };
</script>

<style lang="scss">
</style>
