<template>
  <div class="section-title">
    <div class="red-box"/>
    <div class="title">
      <h1>{{ title }}</h1>
      <h4>{{ subtitle }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "BooklistHeader",
  props: {
    title: String,
    subtitle: String
  }
};
</script>

<style>
</style>
