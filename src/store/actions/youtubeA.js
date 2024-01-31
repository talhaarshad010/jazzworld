import {
  YOUTUBE_USER_FAILURE,
  YOUTUBE_USER_REQUEST,
  YOUTUBE_USER_SUCCESS,
} from './actionstype';
export const request = payload => {
  return {
    payload: payload,
    type: YOUTUBE_USER_REQUEST,
  };
};
export const success = payload => {
  return {
    payload: payload,
    type: YOUTUBE_USER_SUCCESS,
  };
};
export const failure = payload => {
  return {
    payload: payload,
    type: YOUTUBE_USER_FAILURE,
  };
};
