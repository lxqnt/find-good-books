<template>
  <div>
    <book-search/>
  </div>
</template>

<script>
// @ is an alias to /src
import BookSearch from "@/components/BookSearch.vue";

export default {
  name: "home",
  components: {
    BookSearch
  }
};
</script>
