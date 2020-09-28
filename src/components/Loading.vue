<template>
  <section class="loading">
    <h1 class="title">Loading repositories</h1>
    <button class="button is-warning is-loading">Loading</button>
  </section>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style>
.loading {
  margin: 0 auto;
}

.loading h1 {
  text-align: center;
}

.loading .button {
  display: contents;
  border: none;
  background-color: #FFF !important;
}

</style>