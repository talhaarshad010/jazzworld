import {
  YOUTUBE_DATA_FAILURE,
  YOUTUBE_DATA_REQUEST,
  YOUTUBE_DATA_SUCCESS,
} from '../actions/actionstype';

const initialstate = {
  data: {},
  isLoading: false,
  isError: false,
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case YOUTUBE_DATA_REQUEST:
      return {
        data: action.payload,
        isLoading: true,
        isError: false,
      };
    case YOUTUBE_DATA_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        isError: false,
      };
    case YOUTUBE_DATA_FAILURE:
      return {
        data: action.payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
