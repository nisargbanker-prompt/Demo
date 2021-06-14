import {SET_USER_SESSON, SET_USER_FROM} from '../actions/auth';

const initialState = {
  isUserLoggedIn: false,
  isFrom: 'register',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_SESSON:
      return {...state, isUserLoggedIn: action.value};
    case SET_USER_FROM:
      return {...state, isFrom: action.value};
    default:
      return state;
  }
};

export default authReducer;
