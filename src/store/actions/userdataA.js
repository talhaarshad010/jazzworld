import {SAVA_DATA_OF_USER} from './actionstype';

export const userdata = payload => {
  return {
    payload: payload,
    type: SAVA_DATA_OF_USER,
  };
};
