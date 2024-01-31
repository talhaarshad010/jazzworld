import {MAKE_OWN_BUNDLE_SUCCESS} from '../actions/actionstype';

const initialstate = {
  data: {},
  isLoading: false,
  isError: false,
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case MAKE_OWN_BUNDLE_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        isError: false,
      };

    default:
      return state;
  }
};
