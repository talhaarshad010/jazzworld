import {POST_API_FAILURE, POST_API_SUCCESS} from './actionstype';
export const request = payload => {
  return {
    payload: payload,
    type: POST_API_FAILURE,
  };
};
export const success = payload => {
  return {
    payload: payload,
    type: POST_API_SUCCESS,
  };
};
export const failure = payload => {
  return {
    payload: payload,
    type: POST_API_FAILURE,
  };
};
