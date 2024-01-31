/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import {store} from './src/store';
import {Provider} from 'react-redux/es/exports';
import Sidebar from './customDrawer/Sidebar';
import ProfileCard from './customDrawer/screen_02';
import DotMenu from './customDrawer/DotMenu';
import FloatingButton from './customDrawer/DotMenu';
import SVGDesign from './customDrawer/SVGDesign';
import AlarmClock from './src/alarmClock/alarmClock';
import App from './App';
const RootIndex = () => {
  return (
    <Provider store={store}>
      <AlarmClock />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => RootIndex);
