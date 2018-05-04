import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
import { ApolloProvider } from 'react-apollo';
import client from './graphql.js';
import QueryComponent from './query_component';

const Root = ({ store }) => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </ApolloProvider>
);

export default Root;

{/* <QueryComponent /> */}
