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
  name: "Contribution",
  components: {},
  data: () => ({
    user: <any>null,
    date: 2019,
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
         query getUser($date: DateTime!){
          user(login: "vikas0sharma") {
            contributionsCollection(from: $date) {
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
      variables:function() {
        return{ 
          date: `${this.date}-01-01T10:15:30Z`
        }
      },
    },
  },
});
</script>

<style>
.highcharts-credits {
  display: none !important;
}
</style>