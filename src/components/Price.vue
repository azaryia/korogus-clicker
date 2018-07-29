<template>
  <p class="price" ref="koroguTotal" >{{formatPrice}} <span><slot></slot></span>
  </p>
</template>

<script>
export default {
  name: "Price",
  props: {
    price: [Number, String]
  },
  computed: {
    formatPrice: function() {
      let roundPrice = Math.round(100 * this.price) / 100;
      let newPrice = new Intl.NumberFormat("de-DE").format(
        Math.floor(parseFloat(roundPrice))
      );
      this.$emit("formatPrice");
      return newPrice + " Korogus";
    }
  }
};
</script>
