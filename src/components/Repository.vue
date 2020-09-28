<template>
  <div>
    <section class="section content list-of-repository">
      <a :href="source.html_url"
         :title="'Repository ' + source.name"
         class="title is-2"
         target="_blank">{{source.name.split('')[0].toUpperCase() + source.name.substr(1)}}
      </a>
      <div>
        <button class="button is-primary is-active"
                :class="{'is-loading': loading !== false}"
                @click="get(source.name)"
                v-if="!(showMessage && types === 'pr')">
                <span v-if="types === 'is' || types === ''">Load {{source.open_issues_count}} issues</span>
                <span v-else>Load Pull Requests</span>
        </button>
      </div>
      <Issues :issuesSource="issues" v-if="types === 'is' || types === ''"/>
      <PullRequests :pullsSource="prs" v-else/>
      <section v-if="showMessage && types === 'pr'">
        <strong> This repository has no open Pull Requests. </strong>
      </section>
    </section>
  </div>
</template>

<script>
import { getAllIssuesFromRepo, getAllPrsFromRepo } from '../service/index'
import Issues from './Issues'
import PullRequests from './PullRequests'
export default {
  name: 'Repository',

  components: {
    Issues,
    PullRequests
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
    },
    types: {
      required: true,
      type: String,
      default: () => 'is'
    }
  },

  data() {
    return {
      issues: [],
      loading: false,
      prs: [],
      showMessage: false
    }
  },

  methods: {
    async get() {
      this.loading = true
      
      if(this.types === 'is' || this.types === '' || this.types === undefined) {
        this.issues = await getAllIssuesFromRepo(this.source.name)
      }

      this.prs = await getAllPrsFromRepo(this.source.name) || []
      if (!this.prs.length) {
        this.showMessage = true
      }

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

section button {
  margin-top: 10px;
}

</style>