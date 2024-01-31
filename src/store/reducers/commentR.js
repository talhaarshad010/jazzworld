import {re} from 'mathjs';
import {
  USER_COMMENT_DELETE_SUCCESS,
  USER_COMMENT_FAILURE,
  USER_COMMENT_REQUEST,
  USER_COMMENT_SUCCESS,
} from '../actions/actionstype';

const initialstate = {
  data: [],
  isLoading: false,
  isError: false,
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case USER_COMMENT_REQUEST:
      return {
        data: action.payload,
        isLoading: true,
        isError: false,
      };
    case USER_COMMENT_SUCCESS:
      var data = [];
      if (action.payload.length) {
        data = state.data.length
          ? state.data.concat(action.payload)
          : action.payload;
      }
      return {
        data: data,
        isLoading: false,
        isError: false,
      };
    case USER_COMMENT_DELETE_SUCCESS:
      var data = [];
      if (action.payload.dataaa) {
        data = state.data.filter(
          item => item.dataaa != action.payload.dataaa && item,
        );
      }
      return {
        data: data,
        isLoading: false,
        isError: false,
      };
    case USER_COMMENT_FAILURE:
      return {
        data: action.payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
