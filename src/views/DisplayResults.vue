<!-- Component that displays results.-->
<template>
  <div>
    <booklist-header :side="true" :title="title" subtitle="Search for Books on Any Subject"/>
    <div v-for="(book) in results.items" :key="book.id">
      <router-link
        class="href"
        :to="{ name: 'book', params: {id: book.id, itemInfo: book.volumeInfo } }"
      >
        <result-snippet :volumeInfo="book.volumeInfo"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ResultSnippet from "@/components/ResultSnippet.vue";
import BooklistHeader from "@/components/BooklistHeader.vue";

export default {
  name: "DisplayResults",
  components: {
    ResultSnippet,
    BooklistHeader
  },
  mounted() {
    const query = encodeURIComponent(this.searchTerm);
    const apiURL = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
    axios({
      async: true,
      url: apiURL,
      method: "GET"
    }).then(response => {
      let searchResults = response.data;
      console.log(response); //TODO: clean up console.logs and add response code check
      this.results = searchResults;
    });
  },
  data() {
    return {
      results: {
        items: []
      }
    };
  },
  computed: {
    searchTerm() {
      return this.$route.params.id;
    },
    title() {
      let title =
        "Some " + decodeURIComponent(this.searchTerm).toUpperCase() + " Books";
      return title;
    }
  }
};
</script>

<style>
.href {
  text-decoration: none;
}
.href :link {
  color: none;
}
</style>
