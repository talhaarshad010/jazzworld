import {combineReducers} from 'redux';
import {signin} from './signin';
import {imageReducer} from './signin';
import postApi from './postApi';
import youtube from './youtube';
import youtubedata from './youtubedata';
import userlike from './userlike';
import userdislike from './userdislike';
import commentR from './commentR';
import pushpackagesR from './pushpackagesR';
import rechargeR from './rechargeR';
import own_bundleR from './own_bundleR';
import dataupdate from './dataupdateR';
import userdataR from './userdataR';
import setAlarmR from './setAlarmR';
export default combineReducers({
  // signin,
  // // imageReducer,
  // postApi,
  // youtube,
  // youtubedata,
  // userlike,
  // userdislike,
  // commentR,
  // pushpackagesR,
  // rechargeR,
  // own_bundleR,
  // dataupdate,
  // userdataR,
  setAlarmR,
});
