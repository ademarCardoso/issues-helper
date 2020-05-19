<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
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
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
