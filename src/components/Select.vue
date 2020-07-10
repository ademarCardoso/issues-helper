<template>
  <section class="select__container section content">

    <div class="select__container--label">
      <p class="select__container--title">Sort By:</p>
      <div class="select">
        <select name="time" id="time" v-model="filter">
          <option disabled value="">Please select one</option>
          <option v-for="time in timeFilter" :key="time.id" :value="time.id">
            {{ time.title }}
          </option>
        </select>
      </div>
    </div>

    <div class="select__container--label">
      <p class="select__container--title">Select</p>
      <div class="select">
        <select name="type" id="type" v-model="type">
          <option disabled value="">Please select one</option>
          <option v-for="type in typeFilter" :key="type.id" :value="type.id">
            {{ type.title }}
          </option>
        </select>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "Select",

  data() {
    return {
      filter: 'nw',
      type: 'is',
      timeFilter: [
        {title: 'More Issues', id: '+'},
        {title: 'Less Issues', id: '-'}
      ],
      typeFilter: [
        {title: 'Issues', id: 'is'},
        {title: 'Pull Requests', id: 'pr'}
      ]
    }
  },

  watch: {
    filter: function () {
      this.$emit('update-filter', this.filter)
    },

    type: function () {
      this.$emit('update-type', this.type)
    }
  }

}
</script>

<style>
.select__container {
  display: flex;
  justify-content: space-between;
}

.select__container--label {
  display: flex;
  justify-content: space-between;
}

.select__container--title {
  margin: 8px;
  font-weight: bold;
}
</style>