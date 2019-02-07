<template>
  <div v-if="volumeInfo" class="section-detail">
    <div>
      <img :src="getImgUrl" :alt="getTitle">
    </div>
    <h1>{{ getTitle }}</h1>
    <h2>{{ getAllAuthors }}</h2>
    <h4>{{ getPublisher}} {{ getDate }}</h4>
    <h4>A Short Description</h4>
    <span v-html="getDescription"></span>
  </div>
</template>

<script>
export default {
  name: "ResultDetail",
  props: {
    volumeInfo: null
  },
  computed: {
    // Adding computed getters for the information.
    // This will allow me to manipulate the info as I need more easily and seperate from the view layer
    getImgUrl() {
      if (this.volumeInfo.imageLinks) {
        return this.volumeInfo.imageLinks.thumbnail;
      } else {
        return "";
      }
    },
    getPublisher() {
      if (this.volumeInfo.publisher) {
        return "Published by " + this.volumeInfo.publisher;
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
    },
    getDate() {
      let date = this.volumeInfo.publishedDate;
      return "in " + date.slice(0, 4);
    },
    getDescription() {
      let description = this.volumeInfo.description;
      return description;
    }
  }
};
</script>

<style>
.section-detail {
  align-content: justify;
  margin: 0 50px;
  position: relative;
}
</style>
