import {SET_ALARM} from '../actions/actionstype';

const initialstate = {
  data: [],
  isLoading: false,
  isError: false,
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case SET_ALARM:
      return {
        ...state,
        data: [...state.data, action.payload],
        isLoading: true,
        isError: false,
      };

    default:
      return state;
  }
};
