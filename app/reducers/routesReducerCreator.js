import store from 'store';

export default (params) => {
  // merge initial state with our custom initial state
  const { initialState, scenes} = params;
  const routerInitialState = {...initialState, scenes};

  return (state, action) => {
    // dispatch initial state of router
    if (action.type === 'RootContainerInitialAction') {
      action.initialState = routerInitialState;
    }

    store.dispatch(action);
    return store.getState().routes;
  };
};
