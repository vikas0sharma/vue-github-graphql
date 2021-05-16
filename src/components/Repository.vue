<template>
  <div class="text-center" v-if="!user" max-width="400">
    <v-progress-circular
      v-if="true"
      :size="400"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>
  <highcharts v-else :options="chartOptions"></highcharts>
</template>

<script lang="ts">
import { gql } from "apollo-boost";
import Vue from "vue";

export default Vue.extend({
  name: "Repository",
  components: {},
  data: () => ({
    user: <any>null,
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
        {
          user(login: "vikas0sharma") {
            contributionsCollection(from: "2019-12-01T10:15:30Z") {
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
    },
  },
});
</script>

<style>
</style>