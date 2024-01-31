import {
  YOUTUBE_USER_FAILURE,
  YOUTUBE_USER_REQUEST,
  YOUTUBE_USER_SUCCESS,
} from '../actions/actionstype';

const initialstate = {
  data: {},
  isLoading: false,
  isError: false,
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case YOUTUBE_USER_REQUEST:
      return {
        data: action.payload,
        isLoading: true,
        isError: false,
      };
    case YOUTUBE_USER_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        isError: false,
      };
    case YOUTUBE_USER_FAILURE:
      return {
        data: action.payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
