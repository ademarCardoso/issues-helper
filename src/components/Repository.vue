<template>
  <div>
    <section v-for="(item, index) in data" :key="index">
      <a :href="item.html_url">{{item.name}}</a>
      <button @click="getIssues(index)">get</button>
    </section>
  </div>
</template>

<script>
import { getAllIssuesFromRepo } from '../service/index'
export default {
  name: "Repository",

  props: {
    data: {
      required: true,
      type: Object,
      default: () => {}
    }
  },

  methods: {
    async getIssues(index) {
      let dataProp = {...this.data}

      let response = await getAllIssuesFromRepo(dataProp[index].name)
      console.log(response)
      return
    }
  }
}
</script>

<style>

</style>