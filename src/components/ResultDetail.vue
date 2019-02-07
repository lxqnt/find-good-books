<template>
  <div class="section-detail">
    <div>
      <img :src="itemInfo.imageLinks.thumbnail" :alt="getTitle">
    </div>
    <h1>{{ getTitle }}</h1>
    <h2>By{{ getAllAuthors }}</h2>
    <h4>A Short Description</h4>
    <p>The book was published in {{ getDate }} by {{ getPublisher }}. It was written by{{ getAllAuthors }}.</p>
    <p>{{ getDescription }}</p>
  </div>
</template>

<script>
export default {
  name: "ResultDetail",
  props: {
    itemInfo: {}
  },
  computed: {
    // Adding computed getters for the information.
    // This will allow me to manipulate the info as I need more easily and seperate from the view layer
    getTitle() {
      let title = this.itemInfo.title;
      return title;
    },
    getAllAuthors() {
      if (this.itemInfo.authors) {
        let allAuthors = "";
        for (let value in Object.values(this.itemInfo.authors)) {
          allAuthors += " " + value;
        }
        return allAuthors;
      }
    },
    getDate() {
      let date = this.itemInfo.publishedDate;
      return date;
    },
    getPublisher() {
      let publisher = this.itemInfo.publisher;
      return publisher;
    },
    getDescription() {
      let description = this.itemInfo.description;
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
