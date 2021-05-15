<template>
  <div id="app">
    <Profile msg="Hello Vue in CodeSandbox!" />
    <Contribution/>
  </div>
</template>

<script lang="ts" >
import Vue from 'vue'
import Profile from "./components/Profile.vue";
import Contribution from "./components/Contribution.vue";

export default Vue.extend({
  name: "App",
  components: {
    Profile,
    Contribution
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
  margin-top: 60px;
}
</style>
