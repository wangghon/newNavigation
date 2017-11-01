import { combineReducers } from 'redux';

import routes from './routes';

const appReducer = combineReducers({
  routes,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
