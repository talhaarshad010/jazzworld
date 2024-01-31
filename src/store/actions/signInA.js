import {
  SET_IMAGE,
  SIGN_IN_USER_FAILURE,
  SIGN_IN_USER_REQUEST,
  SIGN_IN_USER_SUCCESS,
} from './actionstype';
export const request = payload => {
  return {
    payload: payload,
    type: SIGN_IN_USER_REQUEST,
  };
};
export const success = payload => {
  return {
    payload: payload,
    type: SIGN_IN_USER_SUCCESS,
  };
};
export const failure = payload => {
  return {
    payload: payload,
    type: SIGN_IN_USER_FAILURE,
  };
};
export const setImage = image => ({
  payload: image,
  type: SET_IMAGE,
});
