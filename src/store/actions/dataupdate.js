import {LOGIN_USER_SUCCESS, LOGIN_USER_UPDATE} from './actionstype';

export const loginsuccessreq = payload => {
  return {
    payload: payload,
    type: LOGIN_USER_SUCCESS,
  };
};
export const loginsuccessupdate = payload => {
  return {
    payload: payload,
    type: LOGIN_USER_UPDATE,
  };
};
