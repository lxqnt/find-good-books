<template>
  <div>
    <booklist-header :side="false" title="The Good Booklist"/>
    <result-detail v-if="loaded" :volumeInfo="results.volumeInfo"/>
    <h3 v-if="!loaded">... searching through the stacks ...</h3>
  </div>
</template>

<script>
import axios from "axios";
import ResultDetail from "@/components/ResultDetail.vue";
import BooklistHeader from "@/components/BooklistHeader.vue";

export default {
  name: "BookDetail",
  components: {
    ResultDetail,
    BooklistHeader
  },
  mounted() {
    const id = encodeURIComponent(this.bookID);
    const apiURL = `https://www.googleapis.com/books/v1/volumes/${id}`;
    axios({
      async: true,
      url: apiURL,
      method: "GET"
    }).then(response => {
      let searchResults = response.data;
      //console.log(response); //TODO: clean up console.logs and add response code check
      this.results = searchResults;
      this.loaded = true;
    });
  },
  data() {
    return {
      results: {
        volumeInfo: {}
      },
      loaded: false
    };
  },
  computed: {
    bookID() {
      return this.$route.params.id;
    }
  }
};
</script>

<style>
</style>
