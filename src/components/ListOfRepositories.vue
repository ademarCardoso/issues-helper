<template>
  <div class="hello">
    <Repository :data="response"/>
  </div>
</template>

<script>
import { getAllReposFromGitHub } from '../service/index'
import Repository from './Repository'
export default {
  name: 'ListOfRepositories',
  components: {
    Repository
  },

  props: {
    msg: String
  },

  data() {
    return {
      response: {}
    }
  },

  methods: {
    async getInfo() {
      let data = await getAllReposFromGitHub() || {}
      this.response = data.filter( elem => elem.open_issues ? elem : '' )
      return 
    }
  },

  mounted() {
    this.getInfo()
  }
}
</script>

<style >

</style>
