<template>
  <div>
    <section class="issue" v-for="(issue, index) in issuesSource" :key="index">
      <a :href="issue.html_url" target="_blank" class="title is-4">{{issue.title}}</a>
      <p class="subtitle__date">{{ timeAgo(issue.created_at) }}</p>
      <p class="subtitle is-6">{{issue.body}}</p>
      
      <div>
        <span class="tag" 
              v-for="label in issue.labels"
              :key="label.id"
              v-bind:style="{'background-color': `#${label.color}`}">{{label.name}}
        </span>
      </div>

      <p>By {{issue.user.login}}</p>
    </section>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: "Issues",

  props: {
    issuesSource: {
      required: true,
      type: Array,
      default: () => []
    }
  },
  
  methods: {
    timeAgo(date) {
      return moment(date).startOf('day').fromNow();
    }
  }
}
</script>

<style>
.subtitle__date {
  display: inline;
  float: right;
}

.issue {
  margin-top: 20px;
}

span {
  margin-right: 5px;
}
</style>