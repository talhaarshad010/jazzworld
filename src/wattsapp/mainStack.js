import React from 'react';
import GetData from './get';
import HomeTabs from '.';
import {createStackNavigator} from '@react-navigation/stack';
import InternalChat from './internalChat';
import Chat from './chats';
const GiftedChat = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FirebaseLogin"
        component={GetData}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="B_tabs"
        component={HomeTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InternalChat"
        component={InternalChat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chats"
        component={Chat}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default GiftedChat;
