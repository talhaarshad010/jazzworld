import axios from 'axios';
import {failure, request as sigreq, success} from '../actions/signInA';

export const GET_USER_DATA = async (dispatch, uri) => {
  await dispatch(sigreq());
  await axios
    .get(uri)
    .then(data => {
      console.log('check user data', data);
      dispatch(success(data.data));
    })
    .catch(err => {
      dispatch(failure(err));
    });
};
