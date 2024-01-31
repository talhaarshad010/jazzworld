import {
  RECHARGE_REQUEST,
  RECHARGE_SUCCESS,
  RECHARGE_FAILLURE,
} from './actionstype';
export const request = payload => {
  return {
    payload: payload,
    type: RECHARGE_REQUEST,
  };
};
export const success = payload => {
  return {
    payload: payload,
    type: RECHARGE_SUCCESS,
  };
};
export const failure = payload => {
  return {
    payload: payload,
    type: RECHARGE_FAILLURE,
  };
};
