<!-- Landing Page for site and space for search results--> 
<template>
  <div>
    <div>
      <booklist-header
        :side="resultsReturned"
        :title="headerTitle"
        subtitle="Search for Books on Any Subject"
      />
      <div v-if="!resultsReturned" class="section-search">
        <div class="search">
          <input v-model="queryValue" placeholder="Find A Good Book" class="search-input">
          <div>
            <button v-on:click="getQuery">Search</button>
          </div>
          <!--div class="blue-box"/removed for now-->
        </div>
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
      headerTitle: "The Good Booklist",
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
          this.headerTitle =
            "Here Are Some " + this.queryValue.toUpperCase() + " Books";
        });
      }
    }
  }
};
</script>

<style>
.top {
  height: 40%;
}
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
