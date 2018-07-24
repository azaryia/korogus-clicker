<template>
    <div>
        <img :src="'../assets/' + src + '.png'" :width="width" :alt="alt">
    </div>
</template>

<script>
  export default {
    name: "Pictures",
    props: {
      alt: String,
      src: String,
      width: {
        type: String,
        default() {
          return 'auto';
        }
      }
    }
  };
</script>

<style>

</style>