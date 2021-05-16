<template>
  <highcharts v-if="user" :options="chartOptions"></highcharts>
</template>

<script lang="ts">
import { gql } from "apollo-boost";
import Vue from "vue";

export default Vue.extend({
  name: "Contribution",
  components: {},
  data: () => ({
    user: <any>null,
    chartOptions: {
      chart: {
        type: "spline",
      },
      title: {
        text: "Contribution per week",
      },
      series: [
        {
          data: [1],
        },
      ],
    },
  }),
  watch: {
    user: function (n, o) {
      this.chartOptions.series = n.contributionsCollection.contributionCalendar.weeks
        .map((a: any) => a.contributionDays)
        .map((x: any) => x.map((y: any) => y.contributionCount))
        .map((x: any, i: number) => ({ data: x, name: `Week ${i}` }));
    },
  },
  apollo: {
    user: {
      query: gql`
        {
          user(login: "vikas0sharma") {
            contributionsCollection(from: "2019-12-01T10:15:30Z") {
              contributionCalendar {
                weeks {
                  contributionDays {
                    weekday
                    color
                    contributionCount
                    date
                  }
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
.highcharts-credits {
  display: none !important;
}
</style>