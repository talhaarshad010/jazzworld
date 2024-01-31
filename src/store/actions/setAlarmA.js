import {SET_ALARM} from './actionstype';

export const success = payload => {
  return {
    payload: payload,
    type: SET_ALARM,
  };
};
