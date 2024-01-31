import {MAKE_OWN_BUNDLE_SUCCESS} from './actionstype';

export const success = payload => {
  return {
    payload: payload,
    type: MAKE_OWN_BUNDLE_SUCCESS,
  };
};
