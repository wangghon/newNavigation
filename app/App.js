
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from 'store';
import NavRouter from './navRouter';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <NavRouter />
      </Provider>
    );
  }
}
