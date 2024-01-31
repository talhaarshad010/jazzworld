import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './screens/splash';
import MainScreen from './screens/MainScreen';
import packages from './drawerScreens/packages';
import Priceplan from './screens/priceplan';
import Ownbundle from './screens/ownbundle';
import GetData from './wattsapp/get';
import FirebaseLogin from './firebase/firebaseLogin';
import googleAuth from './wattsapp/googleAuth';
const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Price plan"
          component={Priceplan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OwnBundle"
          component={Ownbundle}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="FirebaseLogin"
          component={FirebaseLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="googleAuth"
          component={googleAuth}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
