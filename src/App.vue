<template>
  <v-app id="app">
    <Toolbar/>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts" >
import Vue from 'vue'
import Toolbar from "./components/Toolbar.vue";

export default Vue.extend({
  name: "App",
  components: {
    Toolbar
  }
});

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
