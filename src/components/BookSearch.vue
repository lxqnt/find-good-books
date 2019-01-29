<!-- Landing Page for site and space for search results--> 
<template>
  <div>
    <div>
      <booklist-header
        :class="{ 'top': !resultsReturned, 'side': resultsReturned }"
        title="The Good Booklist"
        subtitle="Search for Books on any subject"
      />
      <div v-if="!resultsReturned" class="section-search">
        <div class="search">
          <input v-model="queryValue" placeholder="Find a Good Book" class="search-input">
          <button v-on:click="getQuery">Search</button>
        </div>
        <div class="blue-box"/>
      </div>
      <div v-if="resultsReturned">
        <display-results :itemList="searchResults.items"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DisplayResults from "./DisplayResults.vue";
import BooklistHeader from "./BooklistHeader.vue";
import mockdata from "../../json/data.json";

export default {
  name: "BookSearch",
  components: {
    DisplayResults,
    BooklistHeader
  },
  data() {
    return {
      // use 'mockdata' as test JSON object for styling and testing purposes.
      searchResults: {},
      queryValue: "",
      //boolean to change view
      resultsReturned: false
    };
  },
  methods: {
    // Get request for search results
    getQuery: function() {
      if (this.queryValue.length > 0) {
        // empty string check
        const query = encodeURIComponent(this.queryValue);
        const apiURL = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
        console.log(apiURL);
        axios({
          async: true,
          url: apiURL,
          method: "GET",
          headers: {
            //  Test if authorization needed Authorization: `Bearer ${this.oAuthToken}`,
          }
        }).then(response => {
          this.searchResults = response.data;
          console.log(response.data); //TODO: clean up console.logs and add response code check
          this.resultsReturned = true;
        });
      }
    }
  }
};
</script>

<style>
</style>
