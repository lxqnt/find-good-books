<template>
  <div>
    <div v-for="(book, index) in itemList" :key="book.id" class="Book-Section">
      <a href="#">
        <div class="image-section">
          <!--h1>{{ book.volumeInfo.imageLinks.thumbnail }}</h1-->
          <img :src="book.volumeInfo.imageLinks.thumbnail" t :alt="book.volumeInfo.title">
        </div>
        <div class="into-section">
          <h3>{{ book.volumeInfo.title }}</h3>
          <h4>Publisher: {{ book.volumeInfo.publisher }}</h4>
          <h4>Author: {{ book.volumeInfo.author }}</h4>
        </div>
      </a>
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
