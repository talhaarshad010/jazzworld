import axios from 'axios';
import {failure as YF, request as YR, success as YS} from '../actions/youtubeA';
import {failure as VPF, request as VPR, success as VPS} from '../actions/postApiA';
import {
  failure as YDF,
  request as YDR,
  success as YDS,
} from '../actions/youtubedataA';
export const getting_users = async (dispatch:any, URI:any) => {
  dispatch(YR());
  await axios
    .get(URI)
    .then(data => {
      console.log('check user data', data);
      dispatch(YS(data.data));
    })
    .catch(err => {
      dispatch(YF(err));
    });
};
export const getting_data = async (dispatch:any, URI:any) => {
  dispatch(YDR());
  await axios
    .get(URI)
    .then(data => {
      console.log('check youtube data', data);
      dispatch(YDS(data.data.items));
    })
    .catch(err => {
      dispatch(YDF(err));
    });
};

export const Search_data = async (dispatch:any, URI:any) => {
  dispatch(VPR());
  await axios
    .get(URI)
    .then(data => {
      console.log('check Video player', data);
      dispatch(VPS(data.data));
    })
    .catch(err => {
      dispatch(VPF(err));
    });
};

// export const PostApiForUsers = async (
//   dispatch: any,
//   URI: any,
//   payload: Object,
//   ) => {
//   dispatch(POST_REQ(payload));
//   await axios
//     .post(URI,payload)
//     .then(data => {
//       console.log('check user data', data);
//       dispatch(POST_SUC(data.data));
//     })
//     .catch(err => {
//       dispatch(POST_FAI(err));
//     });
// };
