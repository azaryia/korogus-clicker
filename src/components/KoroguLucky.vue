<template>
  <div ref="noixKorogu" class="noix-korogu" @click="clickKoroguLucky"></div>
</template>

<script>
export default {
  name: "KoroguLucky",
  data: function() {
    return {
      interval: Math.random() * 360000 - 36000 + 36000
      // interval: Math.random() * 3600000 - 360000 + 360000
    };
  },
  mounted: function() {
    this.koroguLucky();
  },
  beforeDestroy: function() {
    clearInterval(10000);
    this.interval = Math.random() * 36000 - 3600 + 3600;
  },
  methods: {
    koroguLucky: function() {
      let vm = this;
      vm.interval = setInterval(
        function() {
          let positionX = (Math.random() * window.innerWidth).toFixed();
          let positionY = (Math.random() * window.innerHeight).toFixed();
          vm.$refs.noixKorogu.style.display = "inline-block";
          vm.$refs.noixKorogu.style.left = positionX + "px";
          vm.$refs.noixKorogu.style.top = positionY + "px";
          setTimeout(function() {
            vm.$refs.noixKorogu.style.display = "none";
          }, 10000);
        }.bind(this),
        vm.interval
      );
    },
    clickKoroguLucky: function() {
      this.$store.commit("ClickKoroguLucky");
      this.$refs.noixKorogu.style.display = "none";
    }
  }
};
</script>

<style lang="scss">
.noix-korogu {
  z-index: 9;
  position: absolute;
  display: none;
  height: 4rem;
  width: 6rem;
  background: {
    image: url("../assets/images/noix-korogu.jpg");
    position: center;
    repeat: no-repeat;
    size: cover;
  }
}
</style>
