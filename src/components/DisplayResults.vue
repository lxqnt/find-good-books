<template>
  <div>
    <div v-for="(book, index) in itemList" :key="book.id">
      <h1>{{ index }}</h1>
      <!-- placeholder -->
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
