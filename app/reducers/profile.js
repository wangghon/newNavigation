
import { combineReducers } from 'redux';

const initialState = {
  data: {
    user: '',
    token: '',
  },
  ui: {
    error: '',
    isFetching: false,
  },
};

function data(prevState = initialState.data, action = {}) {

  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...prevState,
        ...action.payload,
      };
    case 'LOGOUT':
      return {
        ...prevState,
      };
    default:
      return prevState;
  }
}

function ui(prevState = initialState.ui, action = {}) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...prevState,
      };
    case 'LOGOUT':
      return {
        ...prevState,
      };
    default:
      return prevState;
  }
}

export default combineReducers({data, ui});
