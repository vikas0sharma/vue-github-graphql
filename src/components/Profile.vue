<template>
  <v-skeleton-loader
    v-if="!user"
    class="mx-auto"
    max-width="400"
    type="card, list-item-two-line"
  ></v-skeleton-loader>
  <v-card v-else class="mx-auto" max-width="400">
    <v-avatar color="grey" size="200">
      <v-img :src="user.avatarUrl"></v-img>
    </v-avatar>
    <v-card-subtitle class="text-center">
      {{ user.name }}
    </v-card-subtitle>
    <v-chip>{{ user.email }}</v-chip>
    <v-divider class="mx-2"></v-divider>
    <v-card-subtitle>
      {{ user.bio }}
    </v-card-subtitle>
  </v-card>
</template>

<script lang="ts">
import { gql } from "apollo-boost";
import Vue from "vue";

export default Vue.extend({
  name: "Profile",
  props: {
    msg: String,
  },
  data: {
    user: null,
  },
  apollo: {
    user: {
      query: gql`
        query getUser($id: String!) {
          user(login: $id) {
            bio
            name
            email
            avatarUrl(size: 200)
          }
        }
      `,
      variables: {
        id: "vikas0sharma",
      },
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
