import {
  USER_DISLIKE_REQUEST,
  USER_DISLIKE_FAILURE,
  USER_DISLIKE_SUCCESS,
} from '../actions/actionstype';

const initialstate = {
  data: {},
  isLoading: false,
  isError: false,
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case USER_DISLIKE_REQUEST:
      return {
        data: action.payload,
        isLoading: true,
        isError: false,
      };
    case USER_DISLIKE_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        isError: false,
      };
    case USER_DISLIKE_FAILURE:
      return {
        data: action.payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
