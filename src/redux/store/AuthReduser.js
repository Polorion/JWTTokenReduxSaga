export const SET_TOKEN = "SET_TOKEN";
export const SET_AUTH = "SET_AUTH";
export const SET_AUTH_SAGA = "SET_AUTH_SAGA";
export const SET_FETCHING = "SET_FETCHING";

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    token,
  };
};
export const setAuthSaga = (data) => {
  return {
    type: SET_AUTH_SAGA,
    data,
  };
};
export const setAuth = (done) => {
  return {
    type: SET_AUTH,
    done,
  };
};
export const setFetch = (done) => {
  return {
    type: SET_FETCHING,
    done,
  };
};

const initial = {
  token: "",
  isAuth: false,
  isFetching: false,
};

export const AuthReduser = (state = initial, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case SET_FETCHING:
      return {
        ...state,
        isFetching: action.done,
      };
    case SET_AUTH:
      return {
        ...state,
        isAuth: action.done,
      };
    default:
      return state;
  }
};
