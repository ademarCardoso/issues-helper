<template>
  <div class="container">
    <section v-for="(item, index) in response" :key="index">
       <Repository :source="item" :id="index" :types="typeOfSearch"/>
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
      response: [],
      typeOfSearch: ''
    }
  },

  props: ['filter', 'type'],

  watch: {
    filter: function() {
      this.filterByDate(this.filter)
    },

    type: function() {
      this.filterByType(this.type)
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
      this.$emit('show-repos', false)
      return 
    },

    filterByDate(val) {
      if (val === '+') {
        this.response.sort((a, b) => { 
        if (a.open_issues_count > b.open_issues_count) {
          return -1;
        }
        if (a.open_issues_count < b.open_issues_count) {
          return 1;
        }
        return 0
        })
        return
      }

      this.response.sort((a, b) => { 
        if (a.open_issues_count > b.open_issues_count) {
          return 1;
        }
        if (a.open_issues_count < b.open_issues_count) {
          return -1;
        }
          return 0
        })

        return
    },

    filterByType(val) {
      this.typeOfSearch = val
    }
  },

  mounted() {
    this.getInfo()
  }
}
</script>

<style >

</style>
