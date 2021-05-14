import ApolloClient, { Operation } from "apollo-boost";
import Vue from "vue";
import VueApollo from 'vue-apollo'
import App from './App.vue';
import vuetify from './vuetify'

Vue.use(VueApollo);

Vue.config.productionTip = false;

// Create Apollo client for GraphQL
const apolloClient = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: (operation: Operation) => {
    const token = '';
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  }
})
//- Apollo provider that will be injected in root vue instance
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  clients: {
    "entities": apolloClient
  },
  errorHandler(error) { // Setup the logger connector
    console.error(error);
  }
});

new Vue({
  render: h => h(App),
  apolloProvider,
  vuetify
}).$mount("#app");
