import {
  PUSH_PACKAGE_FAILURE,
  PUSH_PACKAGE_SUCCES,
  PUSH_PACKAGE_REQUEST,
} from './actionstype';
export const request = payload => {
  return {
    payload: payload,
    type: PUSH_PACKAGE_REQUEST,
  };
};
export const success = payload => {
  return {
    payload: payload,
    type: PUSH_PACKAGE_SUCCES,
  };
};
export const failure = payload => {
  return {
    payload: payload,
    type: PUSH_PACKAGE_FAILURE,
  };
};
