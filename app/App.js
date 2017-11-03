
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Router } from 'react-native-router-flux';

import store from 'store';
import scenes from 'scenes';
import routesReducerCreator from 'reducers/routesReducerCreator';

const ConnectedRouter = connect()(Router);

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter createReducer={routesReducerCreator} scenes={scenes} />
      </Provider>
    );
  }
}
