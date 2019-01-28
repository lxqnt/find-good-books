<template>
  <div>
    <div class="section-title">
      <div class="red-box"/>
      <div class="title">
        <h1>The Good Booklist</h1>
        <h4>Find books on any subject!</h4>
      </div>
    </div>
    <div v-if="!resultsReturned" class="section-search">
      <div class="search">
        <input v-model="queryValue" placeholder="Find a Good Book" class="search-input">
        <button v-on:click="submitRequest">Search</button>
      </div>
      <div class="blue-box"/>
    </div>
    <div v-if="resultsReturned">
      <display-results :itemList="searchResults.items"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DisplayResults from "./DisplayResults.vue";
import mockdata from "../../json/data.json";

export default {
  name: "BookSearch",
  components: {
    DisplayResults
  },
  data() {
    return {
      // have data returned to empty object
      searchResults: mockdata,
      queryValue: "",
      //boolean to change view
      resultsReturned: false
    };
  },
  methods: {
    getQuery: function() {
      return true;
    },
    submitRequest: function() {
      if (this.getQuery) {
        this.resultsReturned = true;
      }
    }
  }
};
</script>

<style>
</style>
