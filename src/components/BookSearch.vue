<!-- Landing Page for site and space for search results--> 
<template>
  <div>
    <div class="section-search">
      <div class="search">
        <input v-model="queryValue" placeholder="Good Book" class="search-input">
        <div>
          <router-link
            @click.native="checkEmpty"
            class="href"
            :to="{ name: 'search', params: {id: getQuery} }"
          >
            <button>Search</button>
          </router-link>
          <p v-if="empty">Please add your search term</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookSearch",
  data() {
    return {
      queryValue: "",
      empty: false
    };
  },
  methods: {
    checkEmpty() {
      if (this.isEmpty) {
        this.empty = true;
      }
    }
  },
  computed: {
    getQuery() {
      return encodeURIComponent(this.queryValue);
    },
    isEmpty() {
      return this.queryValue.length < 1;
    }
  }
};
</script>

<style src="@/assets/styles/search.css">
</style>
