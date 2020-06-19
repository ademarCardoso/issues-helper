<template>
  <div class="container">
    <section v-for="(item, index) in response" :key="index">
       <Repository :source="item" :id="index"/>
    </section>
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

  data() {
    return {
      response: []
    }
  },

  methods: {
    async getInfo() {
      let data = await getAllReposFromGitHub() || {}
      this.response = data.filter(elem => {
        if (elem.open_issues) {
          return {
            name: elem.name,
            desc: elem.description,
            url: elem.html_url,
            lang: elem.language,
            created: elem.created_at,
            issues: []
          }
        }
      })
      console.log(this.response)
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
