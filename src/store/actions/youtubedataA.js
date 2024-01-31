import {
  YOUTUBE_DATA_FAILURE,
  YOUTUBE_DATA_REQUEST,
  YOUTUBE_DATA_SUCCESS,
} from './actionstype';
export const request = payload => {
  return {
    payload: payload,
    type: YOUTUBE_DATA_REQUEST,
  };
};
export const success = payload => {
  return {
    payload: payload,
    type: YOUTUBE_DATA_SUCCESS,
  };
};
export const failure = payload => {
  return {
    payload: payload,
    type: YOUTUBE_DATA_FAILURE,
  };
};
