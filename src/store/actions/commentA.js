import {
  USER_COMMENT_DELETE_SUCCESS,
  USER_COMMENT_FAILURE,
  USER_COMMENT_REQUEST,
  USER_COMMENT_SUCCESS,
} from './actionstype';
export const request = payload => {
  return {
    payload: payload,
    type: USER_COMMENT_REQUEST,
  };
};
export const success = payload => {
  return {
    payload: payload,
    type: USER_COMMENT_SUCCESS,
  };
};
export const product_delete = payload => {
  return {
    payload: payload,
    type: USER_COMMENT_DELETE_SUCCESS,
  };
};
export const failure = payload => {
  return {
    payload: payload,
    type: USER_COMMENT_FAILURE,
  };
};
