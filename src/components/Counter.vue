<template>
  <div>
    <span class="count">{{ count }}</span>
    <Pictures alt="tree-mojo" src="tree-mojo" width="150" @click="increment">Increment</Pictures>
  </div>
</template>

<script>
  import Pictures from "@/components/Pictures.vue";
  export default {
    components: {
      Pictures
    },
    name: "counter",
    data: function() {
      console.log(this);
      return {
        count: 0
      };
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
