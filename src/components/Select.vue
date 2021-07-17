<template>
  <section class="select__container section content">
    <div class="select__container--label">
      <p class="select__container--title">Sort By:</p>
      <div class="select">
        <select name="time" id="time" v-model="filter">
          <option disabled>Please select one</option>
          <option value="default">Default</option>
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
      filter: 'default',
      type: 'is',
    };
  },

  watch: {
    filter: function () {
      this.$emit('update-filter', this.filter);
    },

    type: function () {
      this.$emit('update-type', this.type);
    },
  },
};
</script>

<style>
.select__container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.select__container--label {
  display: flex;
  justify-content: space-between;
}

.select__container--title {
  margin: 8px 8px 8px 0 !important;
  font-weight: bold;
}

.select #time,
.select #type {
  font-weight: 600;
}

@media only screen and (max-width: 425px) {
  .select__container {
    margin: 0 !important;
    padding-right: 0;
    padding-left: 0;
  }

  .select__container--label:first-child {
    margin-bottom: 8px;
  }

  .select #time,
  .select #type {
    width: 100%;
    margin: 0;
  }

  .select__container--label {
    width: 100%;
  }

  [class*='select__container--'] + p {
    width: 25%;
  }

  [class*='select__container--'] + .select {
    width: 75%;
  }
}
</style>
