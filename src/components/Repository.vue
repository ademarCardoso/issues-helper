<template>
  <div>
    <section v-for="(item, index) in source" :key="index" class="section content">
      <a :href="item.html_url" :title="'Repository ' + item.name" class="title">{{item.name}}</a>
      <button @click="getIssues(index)">get</button>
      <Issues :issuesSource="issues" />
    </section>
  </div>
</template>

<script>
import { getAllIssuesFromRepo } from '../service/index'
import Issues from './Issues'
export default {
  name: "Repository",

  components: {
    Issues
  },

  props: {
    source: {
      required: true,
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      issues: []
    }
  },

  methods: {
    async getIssues(index) {
      let dataProp = {...this.source}

      this.issues = await getAllIssuesFromRepo(dataProp[index].name)
      return
    }
  }
}
</script>

<style>

</style>