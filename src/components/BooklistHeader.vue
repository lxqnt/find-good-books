<template>
  <div class="section-title" :class="{ 'top': !side, 'side': side}">
    <div class="red-box"/>
    <div class="title">
      <h1>{{ title }}</h1>
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

<style>
.top {
  flex-direction: row;
  height: 40%;
}
.top .red-box {
  background-color: #ff0000;
  height: 50%;
  width: 25%;
  position: absolute;
  top: 0;
  left: 0;
}
.top .title {
  margin-top: 4em;
}
.top h1 {
  justify-content: center;
  text-align: center;
  font-display: bold;
  font-size: 4em;
  position: relative;
  z-index: 10;
}

.top h3 {
  position: relative;
  z-index: 10;
}
.side {
  flex-direction: row;
  float: left;
  width: 25%;
  height: 100%;
}
.side .red-box {
  background-color: #ff0000;
  height: 100%;
  width: 25%;
  min-width: 140px;
  position: absolute;
  top: 0;
  left: 0;
}

.side .title {
  position: relative;
  z-index: 10;
}

.side .title {
  justify-content: center;
  text-align: center;
  font-display: bold;
  font-size: 1em;
  margin-top: 35%;
  position: relative;
  z-index: 10;
  color: white;
}

.side h1 {
  padding: 10px;
  font-size: 2em;
}
</style>
