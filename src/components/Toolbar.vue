<template>
  <v-card color="grey lighten-4" flat height="100px" tile>
    <v-toolbar>
      <v-toolbar-title class="red--text">GraphQL</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field
        hide-details
        single-line
        append-icon="mdi-magnify"
      ></v-text-field>

      <v-btn class="ml-5" icon to="/">
        <v-icon color="primary">mdi-account</v-icon>
      </v-btn>

      <v-btn icon to="/contribution">
        <v-icon>mdi-chart-bell-curve</v-icon>
      </v-btn>

      <v-btn icon to="/repository">
        <v-icon color="red darken-2">mdi-source-repository</v-icon>
      </v-btn>

      <v-btn icon to="/followers">
        <v-icon color="light-blue darken-3">mdi-graph</v-icon>
      </v-btn>

      <v-btn
        color="black"
        icon
        href="https://github.com/vikas0sharma/vue-github-graphql"
        target="_blank"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "Toolbar",
  data: () => ({
    drawer: false,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
});
</script>
<style>
.v-btn.v-btn--icon.v-btn--round {
  cursor: pointer;
}
</style>