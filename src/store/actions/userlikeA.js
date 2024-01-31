import {
  USER_LIKE_FAILURE,
  USER_LIKE_REQUEST,
  USER_LIKE_SUCCESS,
} from './actionstype';
export const request = payload => {
  return {
    payload: payload,
    type: USER_LIKE_REQUEST,
  };
};
export const success = payload => {
  return {
    payload: payload,
    type: USER_LIKE_SUCCESS,
  };
};
export const failure = payload => {
  return {
    payload: payload,
    type: USER_LIKE_FAILURE,
  };
};
