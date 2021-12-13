import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const SET_LOGIN_PENDING = "SET_LOGIN_PENDING";
const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS";
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";

const initialState = {
  meetups: [],
  pastmeetups: [],
  isLoginPending: false,
  isLoginSuccess: false,
  loginError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MEETUPS":
      return { ...state, meetups: action.meetups };
    case "ADD_MEETUPS":
      const meetups = state.meetups.concat(action.payload);
      return { ...state, meetups };
    case "SET_PAST_MEETUPS":
      return { ...state, pastmeetups: action.pastmeetups };
    case SET_LOGIN_PENDING:
      return { ...state, isLoginPending: action.isLoginPending };
    case SET_LOGIN_SUCCESS:
      return { ...state, isLoginSuccess: action.isLoginSuccess };
    case SET_LOGIN_ERROR:
      return { ...state, loginError: action.loginError };
    default:
      return state;
  }
};

export const store = createStore(reducer, applyMiddleware(thunk));
export default store;
