import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// const httpLink = createHttpLink({
//     uri: '/api/graphql'
// })

// My app is just /graphql, but this is how you'd do it^

  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
  // to a different host

const client = new ApolloClient({
    link: new HttpLink(),
    cache: new InMemoryCache(),
});

// import gql from "graphql-tag";
// import ApolloClient from "apollo-boost";

// const client = new ApolloClient({
//   uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
// });

// client
//   .query({
//     query: gql`
//       {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));