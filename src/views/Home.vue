<template>
  <div>
    <booklist-header
      :side="false"
      title="The Good Booklist"
      subtitle="Search for Books on Any Subject"
    />
    <book-search/>
  </div>
</template>

<script>
// @ is an alias to /src
import BookSearch from "@/components/BookSearch.vue";
import BooklistHeader from "@/components/BooklistHeader.vue";

export default {
  name: "home",
  components: {
    BookSearch,
    BooklistHeader
  }
};
</script>

<style>
</style>

