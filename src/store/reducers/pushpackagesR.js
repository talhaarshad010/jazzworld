import {
  PUSH_PACKAGE_REQUEST,
  PUSH_PACKAGE_SUCCES,
  PUSH_PACKAGE_FAILURE,
} from '../actions/actionstype';

const initialstate = {
  data: {},
  isLoading: false,
  isError: false,
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case PUSH_PACKAGE_REQUEST:
      return {
        data: action.payload,
        isLoading: true,
        isError: false,
      };
    case PUSH_PACKAGE_SUCCES:
      return {
        data: action.payload,
        isLoading: false,
        isError: false,
      };
    case PUSH_PACKAGE_FAILURE:
      return {
        data: action.payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
