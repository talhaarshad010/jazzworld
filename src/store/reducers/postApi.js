import {
  POST_API_FAILURE,
  POST_API_REQUEST,
  POST_API_SUCCESS,
} from '../actions/actionstype';

const initialstate = {
  data: {},
  isLoading: false,
  isError: false,
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case POST_API_REQUEST:
      return {
        data: action.payload,
        isLoading: true,
        isError: false,
      };
    case POST_API_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        isError: false,
      };
    case POST_API_FAILURE:
      return {
        data: action.payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
