<template>
  <div>
    <section v-for="(pr, index) in pullsSource" :key="index">
      <a :href="pr.url" target="_blank" class="title is-4">{{pr.title}}</a>
      <p class="subtitle__date">{{ time(pr.updated_at) }}</p>
      <p class="subtitle is-6" style="display: block; width: 80%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{pr.body}}</p>
      <div>
        <span class="tag is-primary" 
              v-for="label in pr.labels"
              :key="label.id"
              v-bind:style="{'background-color': `#${label.color}`}">{{label.name}}
        </span>
      </div>
      <p>By {{pr.user.login}}</p>
    </section>
  </div>
</template>

<script>
import { timeAgo } from '../utils/index'
export default {
  name: 'PullRequests',

  props: ['pullsSource'],

  methods: {
    time(date) {
      return timeAgo(date)
    }
  }
}
</script>

<style>

</style>