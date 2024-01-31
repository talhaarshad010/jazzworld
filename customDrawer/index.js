import {createDrawerNavigator} from '@react-navigation/drawer';
import Feed from './Feed';
import {NavigationContainer} from '@react-navigation/native';
import Friends from './friends';
import Chat from './Chat';

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerType: 'slide',
          overlayColor: 'transparent',
          sceneContainerStyle: {backgroundColor: 'darkblue'},
          drawerStyle: {backgroundColor: 'darkblue'},
          headerShown: false,
          drawerActiveTintColor: 'black',
          drawerActiveBackgroundColor: 'white',
        }}>
        <Drawer.Screen
          name="Home"
          component={Feed}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Friends"
          component={Friends}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default CustomDrawer;
