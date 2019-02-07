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

<style>
/* .top {
  height: 40%;
} */
.section-search {
  margin-top: 5em;
}
.search input {
  width: 25%;
  height: 10px;
  border: 2px solid grey;
  color: black;
  background-color: transparent;
  padding-bottom: 20px;
  padding-top: 10px;
  padding-left: 16px;
  outline: none;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 16px;
}

.search ::placeholder {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 16px;
  text-align: center;
  justify-content: c;
}
.search button {
  margin-top: 5px;
  color: black;
  border: none;
  font-weight: bold;
  outline: none;
  font-size: 20px;
}

.search button:active {
  box-shadow: 0 3px 0 #00823f;
  top: 3px;
}
</style>
