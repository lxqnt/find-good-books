<!--Short description of result-->
<template>
  <div class="book-section" v-if="volumeInfo">
    <div class="image-section">
      <!--<img :src="book.volumeInfo.imageLinks.thumbnail" t :alt="book.volumeInfo.title"> -->
    </div>
    <div class="info-section">
      <h2>{{ getTitle }}</h2>
      <h4>{{ getAllAuthors }}</h4>
      <!-- <h4>Publisher: {{ book.volumeInfo.publisher }}</h4>-->
      -->
      <h4>Click to learn more!</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultSnippet",
  props: {
    volumeInfo: Object
  },
  computed: {
    getTitle() {
      return this.volumeInfo.title;
    },
    getAllAuthors() {
      if (this.volumeInfo.authors) {
        let allAuthors = "By ";
        let authorArray = this.volumeInfo.authors;
        for (let i = 0; i < authorArray.length; i++) {
          allAuthors += " " + authorArray[i];
          if (i < authorArray.length - 1) {
            allAuthors += ",";
          }
          if (authorArray.length != 1 && i === authorArray.length - 2) {
            allAuthors += " and";
          }
        }
        return allAuthors;
      }
    }
  }
};
</script>

<style>
</style>
