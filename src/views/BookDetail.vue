<template>
  <div>
    <booklist-header :side="false" title="The Good Booklist"/>
    <result-detail :volumeInfo="results.volumeInfo"/>
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
    });
  },
  data() {
    return {
      results: {
        volumeInfo: {}
      }
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
