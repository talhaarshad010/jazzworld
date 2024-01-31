import {SAVA_DATA_OF_USER} from '../actions/actionstype';

const initialstate = {
  data: {},
  isLoading: false,
  isError: false,
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case SAVA_DATA_OF_USER:
      return {
        data: action.payload,
        isLoading: true,
        isError: false,
      };
    default:
      return state;
  }
};
