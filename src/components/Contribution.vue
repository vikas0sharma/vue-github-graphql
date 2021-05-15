<template>
  <div>{{user.contributionsCollection}}</div>
</template>

<script lang="ts">
import { gql } from "apollo-boost";
import Vue from "vue";
export default Vue.extend({
	name:'Contribution',
	data:()=> ({
		user:null
	}),
	apollo:{
		user:{
			query: gql `{
				  user(login: "vikas0sharma") {
					contributionsCollection(from: "2019-12-01T10:15:30Z") {
						contributionCalendar {
							weeks {
								contributionDays  {
									weekday
									color
									contributionCount
									date
								}
							}
						}
					}
				}
			}`
		}
	}

})
</script>

<style>

</style>