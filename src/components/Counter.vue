<template>
  <div>
    <span class="count">{{ totalCookies }}{{ count }}</span>
    <img alt="tree-mojo" src="../assets/tree-mojo.png" width="550" @click="increment">
  </div>
</template>

<script>
  export default {
    name: "counter",
    data: function() {
      console.log(this);
      return {
        count: 0
      };
    },
    computed: {
      totalCookies: function () {
        return this.$store.state.cookies
      },
    },
    methods: {
      increment: function() {
        this.count++;
      }
    }
  };
</script>

<style lang="scss">
</style>
