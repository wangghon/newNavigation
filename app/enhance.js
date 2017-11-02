import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

let enhance = applyMiddleware(thunk, logger);

const devToolsModule = require('remote-redux-devtools');
const devTools = devToolsModule.default || devToolsModule;
const devToolsConfig = {
  name: 'newNavigation',
  hostname: 'localhost',
  port: 5665,
  realtime: true,
  autoReconnect: true,
  maxAge: 100,
};

enhance = compose(enhance, devTools(devToolsConfig));

export {
  enhance,
};
