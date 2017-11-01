import { Reducer } from 'react-native-router-flux';

// needs to fake params to bypass sanity checks
const routerReducer = Reducer({initialState: {key: true}, scenes: true});

export default function(state, action) {
  return routerReducer(state, action);
}
