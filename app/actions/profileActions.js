export const login = (user, token) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: {
      user,
      token,
    },
  };
};

//action on authentication
export const logout = () => {
  return {
    type: 'LOGOUT',
    payload: {
      user: '',
      token: '',
    },
  };
};
