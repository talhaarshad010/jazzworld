import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import GiftedChat from './mainStack';
const ParentStack = () => {
  return (
    <NavigationContainer>
      <GiftedChat />
    </NavigationContainer>
  );
};

export default ParentStack;
