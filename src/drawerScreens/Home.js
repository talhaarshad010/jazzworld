import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Bottom_Home from '../BottomTabScreens/home';
import Myworld from '../BottomTabScreens/myworld';
import Bajao from '../BottomTabScreens/Bajao';
import Discounts from '../BottomTabScreens/Discounts';
import Faith from '../BottomTabScreens/Faith';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={Bottom_Home}
        name="Home"
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={'black'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        component={Myworld}
        name="Myworld"
        options={{
          headerShown: false,
          tabBarLabel: 'World',
          tabBarIcon: ({color, size}) => (
            <Fontisto name="world" color={'black'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        component={Bajao}
        name="Bajao"
        options={{
          headerShown: false,
          tabBarLabel: 'play',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="play" color={'black'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        component={Discounts}
        name="Discounts"
        options={{
          headerShown: false,
          tabBarLabel: 'Discounts',
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="discount" color={'black'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        component={Faith}
        name="Faith"
        options={{
          headerShown: false,
          tabBarLabel: 'Faith',
          tabBarIcon: ({color, size}) => (
            <FontAwesome6 name="star-and-crescent" color={'black'} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
