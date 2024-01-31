import {
  RECHARGE_REQUEST,
  RECHARGE_SUCCESS,
  RECHARGE_FAILLURE,
} from '../actions/actionstype';

const initialstate = {
  data: {},
  isLoading: false,
  isError: false,
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case RECHARGE_REQUEST:
      return {
        data: action.payload,
        isLoading: true,
        isError: false,
      };
    case RECHARGE_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        isError: false,
      };
    case RECHARGE_FAILLURE:
      return {
        data: action.payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
