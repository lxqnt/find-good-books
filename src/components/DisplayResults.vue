<template>
  <div>
    <!--TODO : add a limit to number of books show -->
    <div v-for="(book, index) in itemList" :key="book.id" class="Book-Section">
      <router-link :to="{ name: 'book', params: {id: book.id, itemInfo: book.volumeInfo } }">
        <div class="image-section">
          <!--h1>{{ book.volumeInfo.imageLinks.thumbnail }}</h1-->
          <img :src="book.volumeInfo.imageLinks.thumbnail" t :alt="book.volumeInfo.title">
        </div>
        <div class="into-section">
          <h3>{{ book.volumeInfo.title }}</h3>
          <h4>Publisher: {{ book.volumeInfo.publisher }}</h4>
          <h4>Author: {{ book.volumeInfo.authors[0] }}</h4>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisplayResults",
  props: {
    itemList: Array
  }
};
</script>

<style>
</style>
