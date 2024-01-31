import {
  SET_IMAGE,
  SIGN_IN_USER_FAILURE,
  SIGN_IN_USER_REQUEST,
  SIGN_IN_USER_SUCCESS,
} from '../actions/actionstype';

const initialstate = {
  data: {},
  isLoading: false,
  isError: false,
};
export const signin = (state = initialstate, action) => {
  switch (action.type) {
    case SIGN_IN_USER_REQUEST:
      return {
        data: action.payload,
        isLoading: true,
        isError: false,
      };
    case SIGN_IN_USER_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        isError: false,
      };
    case SIGN_IN_USER_FAILURE:
      return {
        data: action.payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
export const imageReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_IMAGE:
      return action.payload;
    default:
      return state;
  }
};
