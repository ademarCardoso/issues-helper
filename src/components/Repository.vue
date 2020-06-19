<template>
  <div>
    <section class="section content list-of-repository" >
      <a :href="source.html_url"
         :title="'Repository ' + source.name"
         class="title is-2"
         target="_blank">{{source.name}}
      </a>
      <div>
        <button class="button is-primary is-active"
                :class="{'is-loading': loading !== false}"
                @click="getIssues(source.name)">
                Load {{source.open_issues_count}} issues
        </button>
      </div>
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
    },
    id: {
      required: true,
      type: Number,
      default: () => 0
    }
  },

  data() {
    return {
      issues: [],
      loading: false
    }
  },

  methods: {
    async getIssues() {
      this.loading = true
      this.issues = await getAllIssuesFromRepo(this.source.name)
      this.loading = false
      return
    }
  }
}
</script>

<style>
.list-of-repository {
  box-shadow: 0px 0px 20px -14px rgba(0,0,0,0.74);
  border-radius: 10px;
}

</style>