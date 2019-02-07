<!-- Component that displays results.-->
<template>
  <div>
    <div v-for="(book) in itemList" :key="book.id">
      <router-link
        class="href"
        :to="{ name: 'book', params: {id: book.id, itemInfo: book.volumeInfo } }"
      >
        <result-snippet :volumeInfo="book.volumeInfo"/>
        <!-- <div class="book-section">
          <div class="image-section">
            <img :src="book.volumeInfo.imageLinks.thumbnail" t :alt="book.volumeInfo.title">
          </div>
          <div class="info-section">
            <h2>{{ book.volumeInfo.title }}</h2>
            <h4>Author: {{ book.volumeInfo.authors }}</h4>
            <h4>Publisher: {{ book.volumeInfo.publisher }}</h4>
            <h4>Click to learn more!</h4>
          </div>
        </div>-->
      </router-link>
    </div>
  </div>
</template>

<script>
import ResultSnippet from "@/components/ResultSnippet.vue";
export default {
  name: "DisplayResults",
  props: {
    itemList: Array
  },
  components: {
    ResultSnippet
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
