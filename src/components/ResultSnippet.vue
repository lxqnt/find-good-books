<!--Short description of result-->
<template>
  <div class="book-section" v-if="volumeInfo">
    <div class="image-section">
      <img :src="getImgUrl" :alt="getTitle">
    </div>
    <div class="info-section">
      <h2>{{ getTitle }}</h2>
      <h4>{{ getAllAuthors }}</h4>
      <h4>{{ getPublisher }}</h4>
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
    getImgUrl() {
      if (this.volumeInfo.imageLinks) {
        return this.volumeInfo.imageLinks.thumbnail;
      } else {
        return "";
      }
    },
    getPublisher() {
      if (this.volumeInfo.publisher) {
        return "Publisher is " + this.volumeInfo.publisher;
      }
      return "";
    },
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
      return "";
    }
  }
};
</script>

<style>
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
  width: 50%;
  flex-wrap: wrap;
  float: right;
  margin: 10px;
  text-align: right;
  color: black;
}
@media screen and (max-width: 900px) {
  .book-section .info-section {
    width: 80%;
  }
}
</style>
