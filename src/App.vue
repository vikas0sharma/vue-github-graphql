<template>
  <v-app id="app">
    <Toolbar/>
    <Profile msg="Hello Vue in CodeSandbox!" />
    <Contribution/>
    <Repository/>
  </v-app>
</template>

<script lang="ts" >
import Vue from 'vue'
import Toolbar from "./components/Toolbar.vue";
import Profile from "./components/Profile.vue";
import Contribution from "./components/Contribution.vue";
import Repository from "./components/Repository.vue";


export default Vue.extend({
  name: "App",
  components: {
    Toolbar,
    Profile,
    Contribution,
    Repository
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
