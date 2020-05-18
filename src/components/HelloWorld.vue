<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ text }}</p>
    <button @click="getInfo">akdmskdc</button>
  </div>
</template>

<script>
import { getAllReposFromGitHub } from '../service/index'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data() {
    return {
      text: ''
    }
  },

  methods: {
    getInfo() {
      this.text = getAllReposFromGitHub()
      return 
    }
  }
}
</script>

<style >

</style>
