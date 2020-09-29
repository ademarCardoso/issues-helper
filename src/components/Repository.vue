<template>
  <div>
    <section class="section content list-of-repository" v-if="source.open_issues > 0">
      <!-- {{source.open_issues}} -->
      <a :href="source.html_url"
         :title="'Repository ' + source.name"
         class="title is-2"
         target="_blank">{{source.name.split('')[0].toUpperCase() + source.name.substr(1)}}
      </a>
      <!-- {{source.id}} -->
      <!-- {{issuesJson}} -->
      <!-- <div>
        <button class="button is-primary is-active"
                :class="{'is-loading': loading !== false}"
                @click="get(source.name)"
                v-if="!(showMessage && types === 'pr')">
                <span v-if="types === 'is' || types === ''">Load {{source.open_issues_count}} issues</span>
                <span v-else>Load Pull Requests</span>
        </button>
      </div> -->
      <Issues :issuesSource="issuesFromCurrentRepo(source)"/>
      <!-- <PullRequests :pullsSource="prs" v-else/> -->
      <!-- <section v-if="showMessage && types === 'pr'">
        <strong> This repository has no open Pull Requests. </strong>
      </section> -->
    </section>
  </div>
</template>

<script>
// import { getAllIssuesFromRepo, getAllPrsFromRepo } from '../service/index'
import Issues from './Issues'
// import PullRequests from './PullRequests'
import issuesJson from '../../scripts/crawler-repositories/data/issues.json'

export default {
  name: 'Repository',

  components: {
    Issues,
    // PullRequests
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
      issues: issuesJson,
      loading: false,
      prs: [],
      showMessage: false
    }
  },

  methods: {
    issuesFromCurrentRepo(source) {
      // function findIssuesFromRepo(currentValue) {
      //   return currentValue.node_id !== source.node_id ? currentValue : null
      // }

      // return this.issues.every(findIssuesFromRepo)
      return this.issues.filter(e => {
        return e.node_id === source.node_id ? e : null
      })

    }
  //   async get() {
  //     this.loading = true
      
  //     if(this.types === 'is' || this.types === '' || this.types === undefined) {
  //       this.issues = await getAllIssuesFromRepo(this.source.name)
  //     }

  //     this.prs = await getAllPrsFromRepo(this.source.name) || []
  //     if (!this.prs.length) {
  //       this.showMessage = true
  //     }

  //     this.loading = false
  //     return
  //   }
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