
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Router } from 'react-native-router-flux';

import store from 'store';
import scenes from 'scenes';

const ConnectedRouter = connect()(Router);

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter scenes={scenes} />
      </Provider>
    );
  }
}
