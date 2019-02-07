<!-- Component that displays results.-->
<template>
  <div>
    <booklist-header :side="true" :title="headerTitle" subtitle="Search for Books on Any Subject"/>
    <div v-for="(book) in itemList" :key="book.id">
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
import ResultSnippet from "@/components/ResultSnippet.vue";
import BooklistHeader from "@/components/BooklistHeader.vue";
export default {
  name: "DisplayResults",
  props: {
    itemList: Array
  },
  components: {
    ResultSnippet,
    BooklistHeader
  },
  data() {
    return {};
  },
  computed: {
    headerTitle() {
      return this.$route.params.id;
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

.book-section {
  flex-direction: row;
  float: right;
  width: 60%;
  border: 2px solid black;
  margin: 10px;
}

.book-section .image-section {
  float: left;
  margin: 10px;
}

.book-section .info-section {
  flex-wrap: wrap;
  float: right;
  margin: 10px;
  text-align: right;
  color: black;
}
</style>
