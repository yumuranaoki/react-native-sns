import React from 'react';
import { Provider } from 'react-redux';
import Tabs from './tabs';
import store from './store/post';

const App = () => (
  <Provider store={store}>
    <Tabs />
  </Provider>
);

export default App;
