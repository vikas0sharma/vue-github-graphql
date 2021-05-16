<template>
  <div>
    <highcharts v-if="user" :options="graph"></highcharts>
  </div>
</template>

<script lang="ts">
import { gql } from "apollo-boost";
import Vue from "vue";
import Highcharts from "highcharts";
import networkgraph from "highcharts/modules/networkgraph";
networkgraph(Highcharts);

export default Vue.extend({
  name: "Followers",
  components: {},
  data: () => ({
    user: <any>null,
    graph: {
      chart: {
        type: "networkgraph",
      },
      plotOptions: {
        networkgraph: {
          layoutAlgorithm: {
            enableSimulation: true,
            friction: -0.9,
          },
        },
      },
	  title: {
        text: "Followers graph",
      },
      series: [
        {
          dataLabels: {
            enabled: true,
            linkFormat: "",
          },
          nodes: [
            {
              id: "vikas0sharma",
              dataLabels: {
                enabled: true,
              },
              marker: {
                radius: 10,
                fillColor: "red",
              },
            },
          ],
          data: [
            { from: "A", to: "B" },
          ],
        },
      ],
    },
  }),
  watch: {
    user: function (user, o) {
      const array: { from: string; to: string }[] = [];
      console.time("recursion");
      this.traverseFollowers(user, array);
      console.timeEnd("recursion");
      console.log(array);
      console.time("graph");
      this.graph.series[0].data = array;
      console.timeEnd("graph");
    },
  },
  methods: {
    traverseFollowers: function (
      obj: any,
      array: { from: string; to: string }[]
    ) {
      if (obj.followers) {
        for (const node of obj.followers.nodes) {
          array.push({ from: obj.login, to: node.login });
          if (node.followers) {
            this.traverseFollowers(node, array);
          }
        }
      }
    },
  },
  apollo: {
    user: {
      query: gql`
        {
          user(login: "vikas0sharma") {
            login
            followers(first: 10) {
              nodes {
                login
                followers(last: 10) {
                  nodes {
                    login
                    followers(first: 5) {
                      nodes {
                        login
                      }
                    }
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
</style>