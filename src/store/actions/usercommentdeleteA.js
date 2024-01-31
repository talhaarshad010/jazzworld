import {
  USER_COMMENT_DELETE_FAILURE,
  USER_COMMENT_DELETE_REQUEST,
  USER_COMMENT_DELETE_SUCCESS,
} from './actionstype';
export const request = payload => {
  return {
    payload: payload,
    type: USER_COMMENT_DELETE_REQUEST,
  };
};
export const success = payload => {
  return {
    payload: payload,
    type: USER_COMMENT_DELETE_SUCCESS,
  };
};
export const failure = payload => {
  return {
    payload: payload,
    type: USER_COMMENT_DELETE_FAILURE,
  };
};
