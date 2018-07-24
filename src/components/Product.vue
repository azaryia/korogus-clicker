<template>
  <div>
    <h1>{{product.name}}</h1>
    <slot></slot>
    <p>{{product.price}}</p>
    <p v-if="product && product.description">{{product.description}}</p>
    <button type="submit" @click="buyProduct">Buy {{product.name}}</button>
    <p ref="product" :class="{'show' : msg}">{{msg}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Product',
    props: {
      action: Object,
      product: Object
    },
    data: function () {
      return {
        msg: null
      }
    },
    methods: {
      buyProduct: function () {
        let vm = this;
        this.msg = null;
        if (this.product.price < this.$store.state.korogus) {
          this.$store.commit('BuyProduct', {productId: this.product.id});
          this.msg = 'Yes, You can buy product' + this.product.name;
          setTimeout(function () {
            this.classList.remove('show');
          }, 3000);

        }
        else {
          this.msg = 'Sorry, You cant buy product' + this.product.name;
          setTimeout(function () {
            console.log(this);
            console.log(vm);
            vm.$refs.product.classList.remove('show');
          }, 3000);
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  .show {
    display: block;
  }
</style>