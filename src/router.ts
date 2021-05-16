import Vue from 'vue';
import VueRouter from 'vue-router'
import Profile from "./components/Profile.vue";
import Contribution from "./components/Contribution.vue";
import Repository from "./components/Repository.vue";

Vue.use(VueRouter);

const routes = [
	{ path: '/', component: Profile, name: 'profile' },
	{ path: '/contribution', component: Contribution, name: 'contribution' },
	{ path: '/repository', component: Repository, name: 'repository' },

];

export default new VueRouter({
	routes
});