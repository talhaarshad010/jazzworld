import {
  USER_LIKE_FAILURE,
  USER_LIKE_REQUEST,
  USER_LIKE_SUCCESS,
} from '../actions/actionstype';

const initialstate = {
  data: {},
  isLoading: false,
  isError: false,
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case USER_LIKE_REQUEST:
      return {
        data: action.payload,
        isLoading: true,
        isError: false,
      };
    case USER_LIKE_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        isError: false,
      };
    case USER_LIKE_FAILURE:
      return {
        data: action.payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
