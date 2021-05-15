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
      <v-btn icon>
        <v-icon color="primary">mdi-account</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-chart-bell-curve</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="red darken-2">mdi-source-repository</v-icon>
      </v-btn>
      <v-btn color="black" icon>
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
</style>