import {
  DATA_UPDATE_SUCCESS,
  LOGIN_SUCCESS_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_UPDATE,
} from '../actions/actionstype';

const initialstate = {
  data: {},
  isLoading: false,
  isError: false,
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      var concat_data;
      if (!state?.data?.length) {
        concat_data = [action.payload];
      } else {
        concat_data = state?.data?.concat([action?.payload]);
      }
      return {
        data: concat_data,
        isLoading: false,
        isError: false,
      };
    case LOGIN_USER_UPDATE:
      const Indexfinder = state?.data?.findIndex(
        i => i.email === action?.payload?.email,
      );
      const update_data = [...state?.data];
      update_data[Indexfinder] = action?.payload;
      //   return console.log('find Index', Indexfinder);
      return {
        data: update_data,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};
