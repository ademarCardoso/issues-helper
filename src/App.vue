<template>
  <div id="app">
    <div class="image-header">
      <img alt="Stroyblok logo" src="./assets/logo.png">
    </div>
    <Select v-on:update-filter="sendFilter" v-on:update-type="sendType"/>
    <ListOfRepositories :filter="filterId" :type="typeId"/>
  </div>
</template>

<script>
import ListOfRepositories from './components/ListOfRepositories.vue'
import Select from './components/Select.vue'

export default {
  name: 'App',
  components: {
    ListOfRepositories,
    Select
  },

  data() {
    return {
      filterId: '',
      typeId: ''
    }
  },

  methods: {
    sendFilter(val) {
      this.filterId = val
    },

    sendType(val) {
      this.typeId = val
    }
  }

}
</script>

<style>
#app {
  margin: 0 auto;
  width: 80%;
}
#app img {
  margin-top: 20px;
  width: 50%;
  justify-content: center;
}

.image-header {
  display: flex;
  justify-content: center;
}
</style>
