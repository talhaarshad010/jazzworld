import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../drawerScreens/Home';
import WhatsNew from '../drawerScreens/WhatsNew';
import Recharge from '../drawerScreens/Recharge';
import Innvitation from '../drawerScreens/Innvitation';
import Services from '../drawerScreens/Services';
import Locator from '../drawerScreens/Locator';
import Settings from '../drawerScreens/Settings';
import Contactus from '../drawerScreens/Contactus';
import CustomDrawer from '../drawerScreens/CustomDrawer';
import Packages from '../drawerScreens/packages';
const Drawer = createDrawerNavigator();
const MainScreen = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Homescreen"
        component={Home}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="WhatsNew"
        component={WhatsNew}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Recharge"
        component={Recharge}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Invitations"
        component={Innvitation}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Services"
        component={Services}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Locator"
        component={Locator}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Contact-us"
        component={Contactus}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Packages"
        component={Packages}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default MainScreen;
