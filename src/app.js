import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import Tabs from './tabs';
import store from './store/main';
import client from './apolloclient';

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Tabs />
    </Provider>
  </ApolloProvider>
);

export default App;
