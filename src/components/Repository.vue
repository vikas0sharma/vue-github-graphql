<template>
  <div class="text-center" v-if="!user" max-width="400">
    <v-progress-circular
      v-if="true"
      :size="400"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>
  <div v-else>
    <v-row>
      <v-col cols="4">
        <v-slider
          class="mt-10"
          v-model="date"
          label="Contribution from:"
          min="2015"
          max="2020"
          thumb-color="red"
          thumb-label="always"
        ></v-slider>
      </v-col>
    </v-row>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script lang="ts">
import { gql } from "apollo-boost";
import Vue from "vue";

export default Vue.extend({
  name: "Repository",
  components: {},
  data: () => ({
    user: <any>null,
    date: 2019,
    userName: "vikas0sharma",
    chartOptions: {
      chart: {
        type: "pie",
      },
      title: {
        text: "No of commits per repository",
      },
      series: [
        {
          name: "Commits per repository",
          data: [1],
        },
      ],
    },
  }),
  mounted() {
    this.$root.$on("search", (user: string) => {
      this.userName = user;
    });
  },
  watch: {
    user: function (n, o) {
      this.chartOptions.series[0].data = n.contributionsCollection.commitContributionsByRepository.map(
        (r: any) => ({
          y: r.contributions.totalCount,
          name: r.repository.name,
        })
      );
    },
  },
  apollo: {
    user: {
      query: gql`
        query getUser($id: String!, $date: DateTime!) {
          user(login: $id) {
            contributionsCollection(from: $date) {
              commitContributionsByRepository(maxRepositories: 10) {
                repository {
                  name
                }
                contributions {
                  totalCount
                }
              }
            }
          }
        }
      `,
      variables: function () {
        return {
          id: this.userName,
          date: `${this.date}-01-01T10:15:30Z`,
        };
      },
    },
  },
});
</script>

<style>
</style>