import { ActionConst, Reducer } from 'react-native-router-flux';


let initialRouting;

const routerReducer = Reducer({initialState: {key: true}, scenes: true});

const routes = (state = {}, action) => {
  if (!state && initialRouting) {
    return {...initialRouting};
  }
  switch (action.type) {
    case 'RootContainerInitialAction': {
      initialRouting = {...action.initialState};
      return action.initialState;
    }
    case ActionConst.FOCUS:
      return routerReducer(state, action);
    default:
      return state;
  }
};

export default routes;
