import {
  USER_DISLIKE_FAILURE,
  USER_DISLIKE_REQUEST,
  USER_DISLIKE_SUCCESS,
} from './actionstype';
export const request = payload => {
  return {
    payload: payload,
    type: USER_DISLIKE_REQUEST,
  };
};
export const success = payload => {
  return {
    payload: payload,
    type: USER_DISLIKE_SUCCESS,
  };
};
export const failure = payload => {
  return {
    payload: payload,
    type: USER_DISLIKE_FAILURE,
  };
};
