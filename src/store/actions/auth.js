import Utils from '../../utils/index';

export const SET_USER_SESSON = 'SET_USER_SESSON';

export const setUserSesson = isUserLoggedIn => {
  return async dispatch => {
    dispatch({type: SET_USER_SESSON, value: isUserLoggedIn});
  };
};

export const register = () => {
  return async dispatch => {
    Utils.MethodUtils.storeUserData();
    dispatch({type: SET_USER_SESSON, value: true});
    return true;
  };
};
