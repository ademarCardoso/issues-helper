<template>
  <div id="app">
    <img alt="Stroyblok logo" src="./assets/logo.png">
    <ListOfRepositories />
  </div>
</template>

<script>
import ListOfRepositories from './components/ListOfRepositories.vue'

export default {
  name: 'App',
  components: {
    ListOfRepositories
  }
}
</script>

<style>
#app img {
  margin-top: 20px;
  width: 50%;
  justify-content: center;
}
</style>
