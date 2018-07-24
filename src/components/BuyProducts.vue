<template>
  <div>
    <h1>{{name}}</h1>
    <slot></slot>
    <p>{{price}}</p>
    <p>{{description}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      name: String,
      price: Number,
      description: String
    }
  };
</script>

<style>

</style>