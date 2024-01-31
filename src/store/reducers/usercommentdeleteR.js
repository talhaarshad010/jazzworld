import {
  USER_COMMENT_DELETE_FAILURE,
  USER_COMMENT_DELETE_REQUEST,
  USER_COMMENT_DELETE_SUCCESS,
} from '../actions/actionstype';

const initialstate = {
  data: {},
  isLoading: false,
  isError: false,
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case USER_COMMENT_DELETE_REQUEST:
      return {
        data: action.payload,
        isLoading: true,
        isError: false,
      };
    case USER_COMMENT_DELETE_SUCCESS:
      var data = [];
      if (action.payload.length) {
        data = state.data.length
          ? state.data.splice(action.payload, -1)
          : action.payload;
      }
      return {
        data: action.payload,
        isLoading: false,
        isError: false,
      };
    case USER_COMMENT_DELETE_FAILURE:
      return {
        data: action.payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
