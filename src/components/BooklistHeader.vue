<template>
  <div class="section-title" :class="{ 'top': !side, 'side': side}">
    <div class="red-box"/>
    <div class="title">
      <router-link class="href" :to="{ name: 'home' }">
        <h1>{{ title }}</h1>
      </router-link>
      <h3 v-if="!side">{{ subtitle }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "BooklistHeader",
  props: {
    title: String,
    subtitle: String,
    side: Boolean
  }
};
</script>

<style scoped src="@/assets/styles/header.css">
</style>
