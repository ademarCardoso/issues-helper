<template>
  <section class="select__container section content">

    <div class="select__container--label">
      <p class="select__container--title">Sort By:</p>
      <div class="select">
        <select name="time" id="time" v-model="filter">
          <option disabled value="">Please select one</option>
          <option value="+">More Issues</option>
          <option value="-">Less Issues</option>
        </select>
      </div>
    </div>

    <div class="select__container--label">
      <p class="select__container--title">Show</p>
      <div class="select">
        <select name="type" id="type" v-model="type">
          <option disabled value="">Please select one</option>
          <option value="is">Issues</option>
          <option value="pr">Pull Requests</option>
        </select>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'Select',

  data() {
    return {
      filter: '+',
      type: 'is',
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

.select #time, .select #type {
  font-weight: 600;
}
</style>