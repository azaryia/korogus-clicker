<template>
  <div>
    <p>{{products}}</p>
  </div>
</template>

<script>
  export default {
    computed: {
      products: function () {
        return this.$store.state.products;
      },
    }
  };
</script>

<style>

</style>