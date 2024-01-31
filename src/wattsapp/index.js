import React from 'react';
import Communiity from './community';
import Chat from './chats';
import Stat from './status';
import Call from './calls';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const HomeTabs = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Communiity} />
      <Tab.Screen name="Chats" component={Chat} />
      <Tab.Screen name="Status" component={Stat} />
      <Tab.Screen name="Calls" component={Call} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
