<!--Short description of result-->
<template>
  <div class="book-section" v-if="volumeInfo">
    <div class="image-section">
      <!-- <img :src="book.volumeInfo.imageLinks.thumbnail" t :alt="book.volumeInfo.title"> -->
    </div>
    <div class="info-section">
      <h2>{{ volumeInfo.title }}</h2>
      <!-- <h4>Author: {{ book.volumeInfo.authors }}</h4>
      <h4>Publisher: {{ book.volumeInfo.publisher }}</h4>-->
      <h4>Click to learn more!</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultSnippet",
  props: {
    volumeInfo: Object
  }
};
</script>

<style>
</style>
