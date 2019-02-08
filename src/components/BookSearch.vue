<!-- Landing Page for site and space for search results--> 
<template>
  <div>
    <div class="section-search">
      <div class="search">
        <input v-model="queryValue" placeholder="Good Book" class="search-input">
        <div>
          <router-link class="href" :to="{ name: 'search', params: {id: getQuery} }">
            <button>Search</button>
          </router-link>
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
      queryValue: ""
    };
  },
  computed: {
    getQuery() {
      return encodeURIComponent(this.queryValue);
    }
  }
};
</script>

<style src="@/assets/styles/search.css">
</style>
